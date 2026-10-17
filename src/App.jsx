import React, { useState, useEffect } from 'react';
import { OpeningScreen } from './components/OpeningScreen';
import { Stage1Talk } from './components/Stage1Talk';
import { Stage2Argument } from './components/Stage2Argument';
import { Stage3FridgeRaid } from './components/Stage3FridgeRaid';
import { Stage4IrritateMechanic } from './components/Stage4IrritateMechanic';
import { Stage5Launch } from './components/Stage5Launch';
import { sounds } from './audio';

const STORAGE_KEY = 'ms_alien_mr_robot_stage';

export function App() {
  const [stage, setStage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 0 && parsed <= 5) return parsed;
      }
    } catch {}
    return 0;
  });

  const [muted, setMuted] = useState(false);

  // Sync stage to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, stage.toString());
    } catch {}
  }, [stage]);

  const handleToggleMute = () => {
    const isMuted = sounds.toggleMute();
    setMuted(isMuted);
  };

  const handleRestart = () => {
    sounds.playBlip();
    setStage(0);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const nextStage = () => {
    setStage((prev) => Math.min(5, prev + 1));
  };

  return (
    <>
      {/* Background Starfield and Scanlines */}
      <div className="space-background" />
      <div className="scanlines" />

      <main className="game-viewport">
        {/* Top Header Bar */}
        <header className="game-header">
          <div className="game-logo-badge">
            MS.ALIEN <span style={{ color: '#fff' }}>×</span> MR.ROBOT
          </div>

          <div className="header-controls">
            <button
              id="btn-toggle-sound"
              className="icon-btn"
              onClick={handleToggleMute}
              title={muted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {muted ? '🔇 SOUND: OFF' : '🔊 SOUND: ON'}
            </button>

            {stage > 0 && (
              <button
                id="btn-restart-header"
                className="icon-btn"
                onClick={handleRestart}
                title="Restart Game"
              >
                ↺ RESET
              </button>
            )}
          </div>
        </header>

        {/* Current Active Stage */}
        <div style={{ width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {stage === 0 && <OpeningScreen onStart={nextStage} />}
          {stage === 1 && <Stage1Talk onContinue={nextStage} />}
          {stage === 2 && <Stage2Argument onContinue={nextStage} />}
          {stage === 3 && <Stage3FridgeRaid onContinue={nextStage} />}
          {stage === 4 && <Stage4IrritateMechanic onContinue={nextStage} />}
          {stage === 5 && <Stage5Launch onPlayAgain={handleRestart} />}
        </div>

        {/* Stage Progress Stepper Footer */}
        <footer className="stepper-nav" aria-label="Game Stage Progress">
          {[0, 1, 2, 3, 4, 5].map((stepIdx) => (
            <div
              key={stepIdx}
              className={`step-dot ${stage === stepIdx ? 'active' : stage > stepIdx ? 'completed' : ''}`}
              title={`Stage ${stepIdx === 0 ? 'Intro' : stepIdx}`}
            />
          ))}
        </footer>
      </main>
    </>
  );
}

export default App;
