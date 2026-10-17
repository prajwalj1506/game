import React, { useState } from 'react';
import { MsAlienSprite, MrRobotSprite, SpaceshipSprite } from './PixelSprites';
import { sounds } from '../audio';

export function Stage2Argument({ onContinue }) {
  // Dialogue sequence
  const script = [
    {
      speaker: 'alien',
      name: 'MS. ALIEN',
      text: "You call yourself a mechanic?",
      alienExp: 'annoyed',
      robotExp: 'deadpan',
    },
    {
      speaker: 'robot',
      name: 'MR. ROBOT',
      text: "You crashed a spaceship into a planet.",
      alienExp: 'normal',
      robotExp: 'angry',
    },
    {
      speaker: 'alien',
      name: 'MS. ALIEN',
      text: "The planet came out of nowhere.",
      alienExp: 'smug',
      robotExp: 'deadpan',
    },
    {
      speaker: 'robot',
      name: 'MR. ROBOT',
      text: "It's been here for 4.5 billion years.",
      alienExp: 'annoyed',
      robotExp: 'sparks',
    },
  ];

  // Current line index (0 to 3)
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const isFinished = currentLineIndex >= script.length - 1;
  const currentLine = script[currentLineIndex];

  const handleNextLine = () => {
    if (currentLineIndex < script.length - 1) {
      sounds.playBlip();
      setCurrentLineIndex((prev) => prev + 1);
    }
  };

  const handleContinue = () => {
    sounds.playBlip();
    onContinue();
  };

  return (
    <div className="stage-container">
      <span className="stage-tag">STAGE 2</span>
      <h2 className="stage-title">THE ARGUMENT SIMULATOR</h2>

      {/* Arguing Scene */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: currentLine.speaker === 'alien' ? 'scale(1.1) translateY(-6px)' : 'scale(1)',
            transition: 'transform 0.2s ease',
          }}
        >
          <MsAlienSprite size={96} expression={currentLine.alienExp} />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#34d399', marginTop: '4px' }}>
            MS.ALIEN
          </span>
        </div>

        <div>
          <SpaceshipSprite variant="crashed" size={170} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transform: currentLine.speaker === 'robot' ? 'scale(1.1) translateY(-6px)' : 'scale(1)',
            transition: 'transform 0.2s ease',
          }}
        >
          <MrRobotSprite size={96} expression={currentLine.robotExp} />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#38bdf8', marginTop: '4px' }}>
            MR.ROBOT
          </span>
        </div>
      </div>

      {/* History of lines revealed so far */}
      <div style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {script.slice(0, currentLineIndex + 1).map((line, idx) => (
          <div
            key={idx}
            className={`dialogue-box ${line.speaker === 'alien' ? 'active-speaker-alien' : 'active-speaker-robot'}`}
            style={{
              margin: '0',
              opacity: idx === currentLineIndex ? 1 : 0.65,
              transform: idx === currentLineIndex ? 'scale(1.01)' : 'scale(1)',
              transition: 'all 0.25s ease',
            }}
          >
            <div className={`dialogue-speaker ${line.speaker === 'alien' ? 'speaker-alien' : 'speaker-robot'}`}>
              <span>●</span> {line.name}
            </div>
            <p className="dialogue-text">"{line.text}"</p>
          </div>
        ))}
      </div>

      {/* Interactive Controls: Next Line or Continue */}
      <div style={{ marginTop: '2rem' }}>
        {!isFinished ? (
          <button
            id="btn-next-argument-line"
            className="btn-red"
            onClick={handleNextLine}
          >
            NEXT LINE ({currentLineIndex + 1}/{script.length}) ➔
          </button>
        ) : (
          <button
            id="btn-stage2-continue"
            className="btn-red"
            onClick={handleContinue}
          >
            CONTINUE TO FRIDGE ➔
          </button>
        )}
      </div>

      <div style={{ marginTop: '0.8rem', fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-ui)' }}>
        Tap or click to argue
      </div>
    </div>
  );
}
