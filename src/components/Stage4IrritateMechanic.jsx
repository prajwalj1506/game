import React, { useState } from 'react';
import { MrRobotSprite, SpaceshipSprite, MsAlienSprite } from './PixelSprites';
import { sounds } from '../audio';

export function Stage4IrritateMechanic({ onContinue }) {
  const TOTAL_TAPS = 12;
  const [taps, setTaps] = useState(0);
  const [isSparking, setIsSparking] = useState(false);
  const [currentReaction, setCurrentReaction] = useState("Mr. Robot is cautiously stripping high-voltage warp plasma cables...");

  const sarcasticLines = [
    "Stop touching things!",
    "I am working here!",
    "Your existence is slowing down my processor.",
    "Do NOT poke my emergency shutdown lever!",
    "Error 404: Patience not found.",
    "Are your tentacles magnetized?!",
    "I was built for astrophysics, not babysitting!",
    "That wire was ground! You almost fried my motherboard!",
    "Do you want me to solder your fingers together?",
    "Every tap increases my desire to jettison you into an event horizon.",
    "Almost done... despite your persistent sabotage!",
    "DONE! The hyperdrive is online! NOW STEP AWAY!",
  ];

  const progressPercent = Math.min(100, Math.round((taps / TOTAL_TAPS) * 100));
  const isFinished = taps >= TOTAL_TAPS;

  const handleIrritate = () => {
    if (isFinished) return;

    sounds.playSpark();
    const newTaps = taps + 1;
    setTaps(newTaps);

    const lineIndex = Math.min(newTaps - 1, sarcasticLines.length - 1);
    setCurrentReaction(sarcasticLines[lineIndex]);

    setIsSparking(true);
    setTimeout(() => setIsSparking(false), 200);
  };

  const handleContinue = () => {
    sounds.playBlip();
    sounds.playVictory();
    onContinue();
  };

  return (
    <div className="stage-container">
      <span className="stage-tag">STAGE 4</span>
      <h2 className="stage-title">IRRITATE THE MECHANIC</h2>

      {/* Main Repair Scene */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          position: 'relative',
        }}
      >
        {/* Ms. Alien poking */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MsAlienSprite size={90} expression="smug" />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#34d399', marginTop: '4px' }}>
            MS.ALIEN (POKING)
          </span>
        </div>

        {/* Exposed Wires & Sparks */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <svg
            width="100"
            height="80"
            viewBox="0 0 100 80"
            className={isSparking ? 'spark-active' : ''}
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Exposed wires */}
            <path d="M 10 30 Q 30 65 50 45 T 90 25" stroke="#ef4444" strokeWidth="4" fill="none" />
            <path d="M 15 50 Q 40 10 65 50 T 85 60" stroke="#38bdf8" strokeWidth="3" fill="none" />
            <path d="M 10 70 Q 50 60 70 20 T 95 40" stroke="#facc15" strokeWidth="3" fill="none" />
            {/* Spark burst */}
            {isSparking && (
              <g>
                <polygon points="50,40 55,25 60,35 75,30 65,45 78,55 60,52 55,68 48,52 35,60 42,46 28,38 45,35" fill="#fef08a" />
                <polygon points="50,42 53,30 57,38 68,34 60,46 70,54 58,50 54,62 49,50 38,56 44,45 34,40 46,37" fill="#ef4444" />
              </g>
            )}
          </svg>
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.6rem', color: isSparking ? '#ef4444' : '#64748b' }}>
            {isSparking ? '⚡ BZZZT! ⚡' : 'DAMAGED WIRES'}
          </span>
        </div>

        {/* Mr. Robot repairing / getting annoyed */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MrRobotSprite
            size={96}
            expression={isFinished ? 'neutral' : isSparking ? 'sparks' : taps > 6 ? 'angry' : 'fixing'}
          />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#38bdf8', marginTop: '4px' }}>
            MR.ROBOT ({isFinished ? 'REPAIRED!' : 'WORKING'})
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-pixel)', fontSize: '0.7rem', color: '#cbd5e1' }}>
          <span>REPAIR PROGRESS</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          <div className="progress-text">{progressPercent}%</div>
        </div>
      </div>

      {/* Robot Sarcastic Reaction Box */}
      <div className="dialogue-box active-speaker-robot" style={{ maxWidth: '540px' }}>
        <div className="dialogue-speaker speaker-robot">
          <span>●</span> MR. ROBOT
        </div>
        <p className="dialogue-text" style={{ color: isSparking ? '#ef4444' : '#ffffff' }}>
          "{currentReaction}"
        </p>
      </div>

      {/* Action: Irritate Robot or Continue */}
      {!isFinished ? (
        <div style={{ marginTop: '1rem' }}>
          <button
            id="btn-irritate-robot"
            className="btn-red"
            onClick={handleIrritate}
            style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}
          >
            ⚡ IRRITATE ROBOT ⚡
          </button>
          <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            Tap repeatedly to speed up repairs ({taps}/{TOTAL_TAPS})
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ border: '2px solid #22c55e', padding: '1rem', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.1)' }}>
            <SpaceshipSprite variant="repaired" size={180} />
            <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.8rem', color: '#4ade80', marginTop: '0.5rem' }}>
              SPACESHIP FULLY REPAIRED!
            </p>
          </div>
          <button
            id="btn-stage4-continue"
            className="btn-red"
            onClick={handleContinue}
          >
            PROCEED TO LAUNCH PAD ➔
          </button>
        </div>
      )}
    </div>
  );
}
