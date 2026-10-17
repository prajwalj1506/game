import React, { useState } from 'react';
import {
  BiryaniSprite,
  CoffeeSprite,
  SpacePizzaSprite,
  CosmicDonutSprite,
  AlienRamenSprite,
  MsAlienSprite,
  MrRobotSprite,
} from './PixelSprites';
import { sounds } from '../audio';

export function Stage3FridgeRaid({ onContinue }) {
  const initialFoods = [
    { id: 'biryani', name: 'SPICY BIRYANI', Component: BiryaniSprite, reaction: 'Mmm, interstellar spices!' },
    { id: 'coffee', name: 'WARP COFFEE', Component: CoffeeSprite, reaction: 'Caffeine levels at 200%!' },
    { id: 'pizza', name: 'COSMIC PIZZA', Component: SpacePizzaSprite, reaction: 'Zero-gravity cheese pull!' },
    { id: 'donut', name: 'GALAXY DONUT', Component: CosmicDonutSprite, reaction: 'Sugar-fueled hyperdrive active!' },
    { id: 'ramen', name: 'ALIEN RAMEN', Component: AlienRamenSprite, reaction: 'Slurp! Delicious quantum broth!' },
  ];

  const [collected, setCollected] = useState([]);
  const [latestMunch, setLatestMunch] = useState(null);

  const handleCollect = (food) => {
    if (collected.includes(food.id)) return;
    sounds.playNom();
    setCollected((prev) => [...prev, food.id]);
    setLatestMunch(food.reaction);
  };

  const handleContinue = () => {
    sounds.playBlip();
    onContinue();
  };

  const allCollected = collected.length === initialFoods.length;

  return (
    <div className="stage-container">
      <span className="stage-tag">STAGE 3</span>
      <h2 className="stage-title">SHIP-FRIDGE RAID</h2>

      {/* Funny dialogue section */}
      <div style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
        <div className="dialogue-box active-speaker-robot" style={{ margin: 0 }}>
          <div className="dialogue-speaker speaker-robot">
            <span>●</span> MR. ROBOT
          </div>
          <p className="dialogue-text">"We're repairing a spaceship, not opening a restaurant."</p>
        </div>

        <div className="dialogue-box active-speaker-alien" style={{ margin: 0 }}>
          <div className="dialogue-speaker speaker-alien">
            <span>●</span> MS. ALIEN
          </div>
          <p className="dialogue-text">"I work better when I'm fed."</p>
        </div>
      </div>

      {/* Counter Banner */}
      <div
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '1rem',
          color: allCollected ? '#34d399' : 'var(--accent-red-bright)',
          background: 'rgba(15, 15, 24, 0.9)',
          border: '2px solid #334155',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          margin: '0.8rem 0',
          boxShadow: allCollected ? '0 0 18px rgba(52, 211, 153, 0.4)' : 'none',
        }}
      >
        FOOD COLLECTED: {collected.length}/{initialFoods.length}
      </div>

      {latestMunch && (
        <div style={{ color: '#fef08a', fontFamily: 'var(--font-retro)', fontSize: '1.4rem', height: '1.8rem' }}>
          {latestMunch}
        </div>
      )}

      {/* Inside the Spaceship Galley / Fridge Room */}
      <div className="fridge-room">
        {initialFoods.map((food) => {
          const isCollected = collected.includes(food.id);
          const FoodComp = food.Component;

          if (isCollected) {
            return (
              <div
                key={food.id}
                style={{
                  width: '110px',
                  height: '110px',
                  border: '2px dashed #272738',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '0.6rem',
                }}
              >
                EMPTY
              </div>
            );
          }

          return (
            <button
              key={food.id}
              id={`food-item-${food.id}`}
              className="food-card animate-float"
              onClick={() => handleCollect(food)}
              style={{ background: 'none', border: 'none', color: 'inherit' }}
            >
              <FoodComp size={70} />
              <span className="food-name">{food.name}</span>
            </button>
          );
        })}
      </div>

      {/* Continue Button once all foods collected */}
      {allCollected && (
        <div style={{ marginTop: '1.5rem' }}>
          <button
            id="btn-stage3-continue"
            className="btn-red"
            onClick={handleContinue}
          >
            ALL FED! PROCEED TO REPAIRS ➔
          </button>
        </div>
      )}
    </div>
  );
}
