import React, { useState } from 'react';
import { MsAlienSprite, MrRobotSprite, SpaceshipSprite } from './PixelSprites';
import { sounds } from '../audio';

export function Stage1Talk({ onContinue }) {
  const [selectedReply, setSelectedReply] = useState(null);
  const [robotReaction, setRobotReaction] = useState(null);

  const choices = [
    {
      id: 1,
      text: "Because you're literally a robot.",
      alienExpression: 'smug',
      robotReaction: "Flawless carbon-based logic. Fine, but my diagnostic fee will be deducted from your rations.",
      robotExpression: 'deadpan',
    },
    {
      id: 2,
      text: "I'd do it myself, but I don't have your questionable skills.",
      alienExpression: 'annoyed',
      robotReaction: "Questionable?! My solder joints are works of fine art! Stand back and witness a master at work.",
      robotExpression: 'angry',
    },
    {
      id: 3,
      text: "Fine. I'll replace you with a toaster.",
      alienExpression: 'smug',
      robotReaction: "A toaster?! A TOASTER?! Toasters can't even recalibrate hyperdrives! ...Ugh, hand me the spanner.",
      robotExpression: 'sparks',
    },
  ];

  const handleSelect = (choice) => {
    sounds.playSelect();
    setSelectedReply(choice);
    setRobotReaction(choice.robotReaction);
  };

  const handleContinue = () => {
    sounds.playBlip();
    onContinue();
  };

  return (
    <div className="stage-container">
      <span className="stage-tag">STAGE 1</span>
      <h2 className="stage-title">TALK YOUR WAY INTO HELP</h2>

      {/* Crash Scene: Ms. Alien, Damaged Spaceship, Mr. Robot */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          gap: '1.25rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MsAlienSprite
            size={90}
            expression={selectedReply ? selectedReply.alienExpression : 'talking'}
          />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#34d399', marginTop: '4px' }}>
            MS.ALIEN
          </span>
        </div>

        <div>
          <SpaceshipSprite variant="crashed" size={170} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MrRobotSprite
            size={90}
            expression={selectedReply ? selectedReply.robotExpression : 'neutral'}
          />
          <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.65rem', color: '#38bdf8', marginTop: '4px' }}>
            MR.ROBOT
          </span>
        </div>
      </div>

      {/* Initial Dialogue */}
      {!robotReaction ? (
        <>
          <div className="dialogue-box active-speaker-alien">
            <div className="dialogue-speaker speaker-alien">
              <span>●</span> MS. ALIEN
            </div>
            <p className="dialogue-text">"Hey, tin can. Help me fix this."</p>
          </div>

          <div className="dialogue-box active-speaker-robot">
            <div className="dialogue-speaker speaker-robot">
              <span>●</span> MR. ROBOT
            </div>
            <p className="dialogue-text">"Why should I?"</p>
          </div>

          {/* 3 selectable replies */}
          <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.75rem', color: '#e2e8f0', margin: '0.8rem 0 0.2rem' }}>
            CHOOSE YOUR REPLY:
          </p>
          <div className="choices-grid">
            {choices.map((choice) => (
              <button
                key={choice.id}
                id={`btn-reply-${choice.id}`}
                className="choice-card"
                onClick={() => handleSelect(choice)}
              >
                <span className="choice-badge">{choice.id}</span>
                <span>"{choice.text}"</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Robot's Funny Reaction & Continue */
        <div style={{ width: '100%', maxWidth: '640px' }}>
          <div className="dialogue-box active-speaker-alien" style={{ opacity: 0.85 }}>
            <div className="dialogue-speaker speaker-alien">
              <span>●</span> MS. ALIEN
            </div>
            <p className="dialogue-text">"{selectedReply.text}"</p>
          </div>

          <div className="dialogue-box active-speaker-robot" style={{ borderLeftColor: '#ef4444' }}>
            <div className="dialogue-speaker speaker-robot">
              <span>●</span> MR. ROBOT [AGREED]
            </div>
            <p className="dialogue-text" style={{ color: '#fef08a' }}>
              "{robotReaction}"
            </p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button
              id="btn-stage1-continue"
              className="btn-red"
              onClick={handleContinue}
            >
              CONTINUE ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
