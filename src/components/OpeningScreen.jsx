import React from 'react';
import { SpaceshipSprite, RedPlanetSprite } from './PixelSprites';
import { sounds } from '../audio';

export function OpeningScreen({ onStart }) {
  const handleStart = () => {
    sounds.playBlip();
    sounds.playVictory();
    onStart();
  };

  return (
    <div className="stage-container" style={{ position: 'relative' }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '520px', height: '220px', marginBottom: '2rem' }}>
        {/* Red Planet in the background */}
        <div style={{ position: 'absolute', right: '10%', top: '15px' }}>
          <RedPlanetSprite size={130} />
        </div>

        {/* Small Spaceship travelling through space */}
        <div className="animate-travel" style={{ position: 'absolute', left: '15%', top: '75px' }}>
          <SpaceshipSprite variant="flying" size={120} />
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
            letterSpacing: '3px',
            color: '#ffffff',
            textShadow: '0 0 15px rgba(239, 68, 68, 0.6), 0 4px 0 #991b1b',
            marginBottom: '1rem',
            lineHeight: 1.4,
          }}
        >
          MS.ALIEN <span style={{ color: 'var(--accent-red-bright)' }}>×</span> MR.ROBOT
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-retro)',
            fontSize: '1.4rem',
            color: 'var(--text-muted)',
            letterSpacing: '1px',
          }}
        >
          A DARK RETRO SPACE COMEDY
        </p>
      </div>

      {/* One Large Blood-Red START button */}
      <button
        id="btn-start-game"
        className="btn-red"
        onClick={handleStart}
        style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}
      >
        START MISSION
      </button>

      <div
        style={{
          marginTop: '2rem',
          fontSize: '0.85rem',
          color: '#64748b',
          fontFamily: 'var(--font-ui)',
        }}
      >
        Controls: Click or Tap to play
      </div>
    </div>
  );
}
