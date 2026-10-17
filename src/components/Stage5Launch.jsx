import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { MrRobotSprite, SpaceshipSprite, MsAlienSprite } from './PixelSprites';
import { sounds } from '../audio';

export function Stage5Launch({ onPlayAgain }) {
  const TOTAL_TAPS = 18;
  const [taps, setTaps] = useState(0);
  const [hasLaunched, setHasLaunched] = useState(false);
  const [launchAnimationActive, setLaunchAnimationActive] = useState(false);
  const [currentLine, setCurrentLine] = useState("PRESS TAP TO LAUNCH OR HIT SPACEBAR!");

  const robotShouts = [
    "Thrusters initiating...",
    "Auxiliary power routing to main thrusters!",
    "Turbines spinning up!",
    "Warning: Reactor temperature rising!",
    "Hold onto your tentacles!",
    "G-forces reaching 4G!",
    "G-forces reaching 8G!",
    "Who designed this rocket booster?!",
    "Engines at 80% maximum thrust!",
    "Vibration dampeners failing!",
    "WE ARE SHAKING APART!",
    "ATMOSPHERE BREACH IMMINENT!",
    "HYPERDRIVE CHARGING!",
    "IGNITION POINT REACHED!",
    "BLASTOFF IN 3... 2... 1...!",
    "LIFTOFF DETECTED!",
    "ORBIT ACHIEVED!",
    "WE MADE IT INTO HYPERSPACE!",
  ];

  const progressPercent = Math.min(100, Math.round((taps / TOTAL_TAPS) * 100));

  const handleTap = () => {
    if (hasLaunched || launchAnimationActive) return;

    const newTaps = taps + 1;
    setTaps(newTaps);

    const intensity = Math.min(1, newTaps / TOTAL_TAPS);
    sounds.playEngine(intensity);

    const shoutIndex = Math.min(newTaps - 1, robotShouts.length - 1);
    setCurrentLine(robotShouts[shoutIndex]);

    if (newTaps >= TOTAL_TAPS) {
      setLaunchAnimationActive(true);
      sounds.playLaunch();

      setTimeout(() => {
        setHasLaunched(true);
        setLaunchAnimationActive(false);
        sounds.playVictory();
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ef4444', '#f59e0b', '#38bdf8', '#34d399', '#ffffff'],
          });
        } catch {}
      }, 1400);
    }
  };

  // Allow spacebar keypress to also trigger launch smackdown
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleTap();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [taps, hasLaunched, launchAnimationActive]);

  const handleRestart = () => {
    sounds.playBlip();
    onPlayAgain();
  };

  // Determine shake effect
  const shakeClass = progressPercent > 85 ? 'shake-wild' : progressPercent > 55 ? 'shake-mild' : '';

  if (hasLaunched) {
    return (
      <div className="stage-container" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <SpaceshipSprite variant="flying" size={160} />
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#34d399',
            letterSpacing: '2px',
            textShadow: '0 0 20px rgba(52, 211, 153, 0.6), 0 4px 0 #065f46',
            marginBottom: '1.5rem',
          }}
        >
          MISSION ACCOMPLISHED
        </h2>

        {/* Closing funny line */}
        <div className="dialogue-box active-speaker-robot" style={{ maxWidth: '540px', marginBottom: '2.5rem' }}>
          <div className="dialogue-speaker speaker-robot">
            <span>●</span> MR. ROBOT
          </div>
          <p className="dialogue-text" style={{ fontSize: '1.3rem', color: '#fef08a' }}>
            "Next time, we're taking the bus."
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            id="btn-play-again"
            className="btn-red"
            onClick={handleRestart}
            style={{ fontSize: '1rem', padding: '1.1rem 2.5rem' }}
          >
            ↺ PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`stage-container ${shakeClass}`} style={{ position: 'relative' }}>
      {/* Speed lines near finish */}
      {progressPercent > 70 && <div className="speed-lines" />}

      <span className="stage-tag">STAGE 5</span>
      <h2 className="stage-title">SPACEBAR SMACKDOWN</h2>

      {/* Characters & Launching Ship */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MsAlienSprite size={90} expression={progressPercent > 60 ? 'smug' : 'normal'} />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#34d399', marginTop: '4px' }}>
            MS.ALIEN
          </span>
        </div>

        {/* Spaceship with escalating thrust */}
        <div
          style={{
            transform: launchAnimationActive
              ? 'translateY(-200px) scale(0.6)'
              : `scale(${1 + progressPercent * 0.002})`,
            transition: launchAnimationActive ? 'transform 1.4s cubic-bezier(0.55, 0, 1, 0.45)' : 'transform 0.1s ease',
          }}
        >
          <SpaceshipSprite variant={launchAnimationActive ? 'launching' : 'repaired'} size={180} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MrRobotSprite
            size={90}
            expression={progressPercent > 75 ? 'sparks' : progressPercent > 40 ? 'angry' : 'neutral'}
          />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#38bdf8', marginTop: '4px' }}>
            MR.ROBOT
          </span>
        </div>
      </div>

      {/* Launch Progress */}
      <div style={{ width: '100%', maxWidth: '500px', margin: '0.5rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', color: '#cbd5e1' }}>
          <span>LAUNCH VELOCITY</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="progress-bar-wrap">
          <div
            className="progress-fill"
            style={{
              width: `${progressPercent}%`,
              background: progressPercent > 80 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'linear-gradient(90deg, #991b1b, #ef4444)',
            }}
          />
          <div className="progress-text">{progressPercent}%</div>
        </div>
      </div>

      {/* Robot Live Shout */}
      <div className="dialogue-box active-speaker-robot" style={{ maxWidth: '540px', margin: '0.8rem 0' }}>
        <div className="dialogue-speaker speaker-robot">
          <span>●</span> MR. ROBOT [CO-PILOT]
        </div>
        <p className="dialogue-text" style={{ color: progressPercent > 70 ? '#f87171' : '#ffffff' }}>
          "{currentLine}"
        </p>
      </div>

      {/* Launch Button */}
      <div style={{ marginTop: '1rem' }}>
        <button
          id="btn-tap-to-launch"
          className="btn-red"
          onClick={handleTap}
          disabled={launchAnimationActive}
          style={{
            fontSize: '1.2rem',
            padding: '1.3rem 3rem',
            transform: progressPercent > 85 ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          🚀 TAP TO LAUNCH 🚀
        </button>
        <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-ui)' }}>
          Smash button or tap SPACEBAR ({taps}/{TOTAL_TAPS})
        </div>
      </div>
    </div>
  );
}
