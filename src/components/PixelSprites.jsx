import React from 'react';

/**
 * Pixel-art SVG components with crisp rendering (image-rendering: pixelated).
 * Vector-sharp, lightweight, retro-styled with distinct silhouettes.
 */

export function RedPlanetSprite({ size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 16px rgba(220, 38, 38, 0.4))' }}
    >
      <circle cx="32" cy="32" r="28" fill="#180408" />
      {/* Atmosphere outer rim */}
      <circle cx="32" cy="32" r="28" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.6" />
      {/* Planet surface craters & texture */}
      <rect x="18" y="12" width="12" height="6" fill="#881337" rx="2" />
      <rect x="36" y="16" width="16" height="8" fill="#991b1b" rx="2" />
      <rect x="14" y="26" width="22" height="10" fill="#7f1d1d" rx="2" />
      <rect x="40" y="32" width="14" height="12" fill="#881337" rx="2" />
      <rect x="22" y="42" width="18" height="8" fill="#991b1b" rx="2" />
      {/* Shadow crescent */}
      <path d="M 32 4 A 28 28 0 0 0 60 32 A 28 28 0 0 1 32 60 A 28 28 0 0 1 4 32 A 28 28 0 0 0 32 4 Z" fill="#000000" opacity="0.45" />
      {/* Mysterious glowing fissures */}
      <rect x="26" y="24" width="4" height="2" fill="#ef4444" />
      <rect x="28" y="26" width="6" height="2" fill="#ef4444" />
      <rect x="42" y="44" width="6" height="2" fill="#f87171" />
      <rect x="16" y="36" width="4" height="2" fill="#ef4444" />
    </svg>
  );
}

export function MsAlienSprite({ size = 96, expression = 'normal', className = '' }) {
  // Expressions: 'normal', 'talking', 'annoyed', 'smug', 'hungry'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Antennae */}
      <rect x="14" y="4" width="2" height="6" fill="#a855f7" />
      <rect x="12" y="2" width="4" height="3" fill="#e11d48" />
      <rect x="32" y="4" width="2" height="6" fill="#a855f7" />
      <rect x="32" y="2" width="4" height="3" fill="#e11d48" />

      {/* Head */}
      <rect x="10" y="8" width="28" height="20" fill="#10b981" rx="4" />
      <rect x="14" y="6" width="20" height="3" fill="#34d399" />
      <rect x="8" y="12" width="3" height="10" fill="#059669" />
      <rect x="37" y="12" width="3" height="10" fill="#059669" />

      {/* Eyes based on expression */}
      {expression === 'annoyed' ? (
        <>
          {/* Narrow glare eyes */}
          <rect x="14" y="14" width="8" height="3" fill="#18181b" />
          <rect x="16" y="15" width="4" height="2" fill="#f43f5e" />
          <rect x="26" y="14" width="8" height="3" fill="#18181b" />
          <rect x="28" y="15" width="4" height="2" fill="#f43f5e" />
        </>
      ) : expression === 'smug' ? (
        <>
          {/* Smug slanted eyes */}
          <polygon points="14,14 22,12 22,17 14,17" fill="#18181b" />
          <rect x="17" y="14" width="3" height="2" fill="#38bdf8" />
          <polygon points="26,12 34,14 34,17 26,17" fill="#18181b" />
          <rect x="28" y="14" width="3" height="2" fill="#38bdf8" />
        </>
      ) : (
        <>
          {/* Big alien eyes with purple/black pupil and white shine */}
          <ellipse cx="18" cy="16" rx="5" ry="4" fill="#09090b" />
          <rect x="16" y="14" width="3" height="3" fill="#ffffff" />
          <rect x="19" y="17" width="2" height="2" fill="#ec4899" />

          <ellipse cx="30" cy="16" rx="5" ry="4" fill="#09090b" />
          <rect x="28" y="14" width="3" height="3" fill="#ffffff" />
          <rect x="31" y="17" width="2" height="2" fill="#ec4899" />
        </>
      )}

      {/* Mouth based on expression */}
      {expression === 'talking' ? (
        <rect x="20" y="23" width="8" height="3" fill="#881337" rx="1" />
      ) : expression === 'annoyed' ? (
        <rect x="20" y="24" width="8" height="2" fill="#065f46" />
      ) : expression === 'smug' ? (
        <path d="M 20 23 Q 25 27 29 22" stroke="#065f46" strokeWidth="2" fill="none" />
      ) : (
        <rect x="22" y="24" width="4" height="2" fill="#065f46" />
      )}

      {/* Space Suit (Dark Violet / Blood Red trim) */}
      <rect x="12" y="28" width="24" height="14" fill="#312e81" rx="2" />
      <rect x="18" y="28" width="12" height="4" fill="#e11d48" />
      <rect x="20" y="32" width="8" height="8" fill="#1e1b4b" />
      <circle cx="24" cy="36" r="2" fill="#38bdf8" />

      {/* Arms / Tentacles */}
      <rect x="7" y="30" width="5" height="10" fill="#10b981" rx="2" />
      <rect x="36" y="30" width="5" height="10" fill="#10b981" rx="2" />

      {/* Belt & legs */}
      <rect x="14" y="42" width="8" height="5" fill="#4338ca" />
      <rect x="26" y="42" width="8" height="5" fill="#4338ca" />
      <rect x="12" y="45" width="10" height="3" fill="#e11d48" />
      <rect x="26" y="45" width="10" height="3" fill="#e11d48" />
    </svg>
  );
}

export function MrRobotSprite({ size = 96, expression = 'neutral', className = '' }) {
  // Expressions: 'neutral', 'deadpan', 'angry', 'fixing', 'sparks'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Antenna with red beacon */}
      <rect x="23" y="2" width="2" height="7" fill="#94a3b8" />
      <circle cx="24" cy="3" r="3" fill={expression === 'angry' || expression === 'sparks' ? '#ff0000' : '#dc2626'} />

      {/* Robot Head (Blocky metal) */}
      <rect x="11" y="9" width="26" height="19" fill="#475569" rx="2" />
      <rect x="9" y="15" width="2" height="6" fill="#cbd5e1" />
      <rect x="37" y="15" width="2" height="6" fill="#cbd5e1" />
      <rect x="13" y="10" width="22" height="2" fill="#64748b" />

      {/* Screen / Visor */}
      <rect x="14" y="13" width="20" height="10" fill="#09090b" rx="2" />

      {/* Visor Display according to expression */}
      {expression === 'angry' ? (
        <>
          {/* Sharp red angry slashes */}
          <line x1="16" y1="15" x2="21" y2="19" stroke="#ef4444" strokeWidth="2" />
          <line x1="31" y1="15" x2="26" y2="19" stroke="#ef4444" strokeWidth="2" />
          <rect x="20" y="20" width="8" height="2" fill="#ef4444" />
        </>
      ) : expression === 'deadpan' ? (
        <>
          {/* Horizontal unimpressed slit eyes */}
          <rect x="16" y="17" width="5" height="2" fill="#38bdf8" />
          <rect x="27" y="17" width="5" height="2" fill="#38bdf8" />
          <rect x="21" y="20" width="6" height="1" fill="#38bdf8" />
        </>
      ) : expression === 'sparks' ? (
        <>
          {/* Glitch / exclamation screen */}
          <text x="18" y="21" fill="#facc15" fontSize="9" fontFamily="monospace" fontWeight="bold">! !</text>
        </>
      ) : (
        <>
          {/* Normal glowing cyan pixel eyes */}
          <rect x="16" y="16" width="4" height="4" fill="#38bdf8" />
          <rect x="28" y="16" width="4" height="4" fill="#38bdf8" />
          <rect x="21" y="20" width="6" height="2" fill="#0284c7" />
        </>
      )}

      {/* Robot Neck */}
      <rect x="20" y="28" width="8" height="3" fill="#334155" />

      {/* Torso */}
      <rect x="11" y="31" width="26" height="13" fill="#334155" rx="1" />
      {/* Gauge meter & warning lamp */}
      <rect x="15" y="34" width="10" height="5" fill="#0f172a" />
      <rect x="17" y="36" width="6" height="2" fill="#22c55e" />
      <circle cx="31" cy="36" r="2.5" fill={expression === 'angry' ? '#ef4444' : '#e2e8f0'} />

      {/* Robot Arms */}
      {expression === 'fixing' ? (
        <>
          {/* Arm holding wrench/tool */}
          <rect x="6" y="31" width="5" height="11" fill="#64748b" />
          <polygon points="37,32 44,25 46,28 40,36" fill="#94a3b8" />
          {/* Wrench head */}
          <rect x="42" y="22" width="5" height="5" fill="#e2e8f0" />
        </>
      ) : (
        <>
          <rect x="6" y="31" width="5" height="11" fill="#64748b" />
          <rect x="37" y="31" width="5" height="11" fill="#64748b" />
          {/* Claws */}
          <rect x="6" y="42" width="4" height="3" fill="#cbd5e1" />
          <rect x="38" y="42" width="4" height="3" fill="#cbd5e1" />
        </>
      )}

      {/* Wheel or Tread base */}
      <rect x="14" y="44" width="20" height="4" fill="#1e293b" rx="2" />
      <circle cx="17" cy="46" r="1.5" fill="#64748b" />
      <circle cx="24" cy="46" r="1.5" fill="#64748b" />
      <circle cx="31" cy="46" r="1.5" fill="#64748b" />
    </svg>
  );
}

export function SpaceshipSprite({ variant = 'flying', size = 160, className = '' }) {
  // Variants: 'flying', 'crashed', 'repaired', 'launching'
  if (variant === 'crashed') {
    return (
      <svg
        width={size}
        height={size * 0.75}
        viewBox="0 0 120 90"
        className={`pixel-art ${className}`}
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Dirt / impact mound */}
        <polygon points="10,88 60,70 115,88" fill="#450a0a" />
        <polygon points="20,86 55,75 100,86" fill="#7f1d1d" />

        {/* Tilted Rocket Hull stuck in ground */}
        <g transform="rotate(22, 60, 50)">
          {/* Main Rocket body */}
          <path d="M 30 40 L 80 40 L 95 50 L 80 60 L 30 60 L 15 50 Z" fill="#94a3b8" />
          {/* Damaged Dent on Hull */}
          <polygon points="45,40 52,48 58,42 66,49 60,40" fill="#334155" />
          {/* Red Stripe */}
          <rect x="40" y="46" width="30" height="8" fill="#dc2626" />
          {/* Shattered Cockpit Window */}
          <polygon points="72,45 84,48 80,53 70,52" fill="#0284c7" />
          <line x1="74" y1="46" x2="82" y2="52" stroke="#ffffff" strokeWidth="1" />
          <line x1="78" y1="47" x2="73" y2="51" stroke="#ffffff" strokeWidth="1" />

          {/* Broken Wing */}
          <polygon points="35,39 25,25 45,39" fill="#dc2626" />
          <polygon points="35,61 22,76 43,61" fill="#7f1d1d" />

          {/* Engine nozzle with smoke */}
          <rect x="10" y="44" width="8" height="12" fill="#475569" />
          {/* Sparking wire hanging */}
          <path d="M 48 58 Q 52 70 58 66" stroke="#facc15" strokeWidth="2" fill="none" />
          <rect x="57" y="65" width="3" height="3" fill="#ef4444" />
        </g>

        {/* Smoke clouds */}
        <circle cx="50" cy="30" r="8" fill="#52525b" opacity="0.7" />
        <circle cx="42" cy="20" r="12" fill="#71717a" opacity="0.5" />
        <circle cx="34" cy="12" r="10" fill="#a1a1aa" opacity="0.3" />
        {/* Warning blinker */}
        <circle cx="85" cy="52" r="4" fill="#ff0000">
          <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  if (variant === 'repaired') {
    return (
      <svg
        width={size}
        height={size * 0.65}
        viewBox="0 0 120 70"
        className={`pixel-art ${className}`}
        style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 14px rgba(220, 38, 38, 0.5))' }}
      >
        {/* Sleek Polished Rocket */}
        <polygon points="25,35 40,24 85,24 105,35 85,46 40,46" fill="#e2e8f0" />
        {/* High-tech blood-red racing stripe */}
        <polygon points="45,32 80,32 90,35 80,38 45,38" fill="#dc2626" />
        {/* Glowing Pristine Cockpit */}
        <polygon points="68,26 84,28 88,33 72,33" fill="#38bdf8" />
        <polygon points="70,27 78,28 75,31 69,31" fill="#ffffff" />
        {/* Swept aerodynamic wings */}
        <polygon points="40,24 30,10 55,24" fill="#dc2626" />
        <polygon points="40,46 30,60 55,46" fill="#dc2626" />
        {/* Plasma Thruster Rings */}
        <rect x="18" y="28" width="8" height="14" fill="#475569" />
        <rect x="14" y="30" width="4" height="10" fill="#38bdf8" />
        {/* Idle Engine Glow */}
        <polygon points="14,31 2,35 14,39" fill="#00f0ff" opacity="0.8" />
        {/* Shield shimmer line */}
        <line x1="105" y1="35" x2="108" y2="35" stroke="#38bdf8" strokeWidth="3" />
      </svg>
    );
  }

  if (variant === 'launching') {
    return (
      <svg
        width={size * 0.75}
        height={size * 1.3}
        viewBox="0 0 80 140"
        className={`pixel-art ${className}`}
        style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 24px rgba(239, 68, 68, 0.8))' }}
      >
        {/* Rocket pointing straight up */}
        <polygon points="40,10 52,32 52,75 40,85 28,75 28,32" fill="#f8fafc" />
        {/* Crimson Accent */}
        <polygon points="40,12 46,28 46,70 40,75 34,70 34,28" fill="#dc2626" />
        {/* Cockpit Canopy */}
        <ellipse cx="40" cy="38" rx="6" ry="10" fill="#38bdf8" />
        <ellipse cx="38" cy="35" rx="2" ry="4" fill="#ffffff" />
        {/* Delta Wings */}
        <polygon points="28,45 10,75 28,70" fill="#991b1b" />
        <polygon points="52,45 70,75 52,70" fill="#991b1b" />
        {/* Twin thruster nozzles */}
        <rect x="32" y="84" width="6" height="8" fill="#475569" />
        <rect x="42" y="84" width="6" height="8" fill="#475569" />

        {/* Massive Animated Plasma Fire plume */}
        <polygon points="30,92 50,92 46,120 40,135 34,120" fill="#ef4444" />
        <polygon points="34,92 46,92 43,115 40,126 37,115" fill="#f59e0b" />
        <polygon points="37,92 43,92 41,108 40,114 39,108" fill="#fef08a" />
        {/* Exhaust Particles */}
        <rect x="25" y="110" width="4" height="4" fill="#ef4444" />
        <rect x="52" y="115" width="5" height="5" fill="#f59e0b" />
        <rect x="38" y="132" width="4" height="6" fill="#fef08a" />
      </svg>
    );
  }

  // Default: 'flying' (used in opening screen)
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 100 55"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 12px rgba(220, 38, 38, 0.4))' }}
    >
      {/* Sleek retro flying ship */}
      <polygon points="25,27 40,18 75,18 92,27 75,36 40,36" fill="#cbd5e1" />
      <polygon points="45,24 72,24 82,27 72,30 45,30" fill="#dc2626" />
      {/* Cockpit */}
      <polygon points="60,20 74,21 78,25 64,25" fill="#38bdf8" />
      {/* Wings */}
      <polygon points="42,18 32,6 54,18" fill="#dc2626" />
      <polygon points="42,36 32,48 54,36" fill="#991b1b" />
      {/* Engine and animated flame */}
      <rect x="18" y="22" width="7" height="10" fill="#475569" />
      <polygon points="18,24 6,27 18,30" fill="#ef4444" />
      <polygon points="18,25 10,27 18,29" fill="#facc15" />
    </svg>
  );
}

// Five distinctive food items for Stage 3 (Ship-Fridge Raid)
export function BiryaniSprite({ size = 70, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }}
    >
      {/* Steam lines */}
      <path d="M 16 8 Q 14 5 17 2" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.7" />
      <path d="M 23 7 Q 26 4 24 1" stroke="#fef08a" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Clay Handi / Pot */}
      <ellipse cx="20" cy="27" rx="14" ry="9" fill="#78350f" />
      <rect x="6" y="24" width="28" height="6" fill="#92400e" rx="3" />
      {/* Saffron & Spiced Basmati Rice mound */}
      <ellipse cx="20" cy="21" rx="12" ry="6" fill="#f59e0b" />
      <rect x="12" y="18" width="16" height="5" fill="#fbbf24" rx="2" />
      {/* Spices, Bay Leaf & Crimson chili garnish */}
      <rect x="18" y="17" width="5" height="2" fill="#dc2626" />
      <rect x="14" y="20" width="3" height="2" fill="#15803d" />
      <rect x="23" y="20" width="2" height="2" fill="#78350f" />
      {/* Pot Rim Handles */}
      <rect x="4" y="23" width="3" height="4" fill="#451a03" />
      <rect x="33" y="23" width="3" height="4" fill="#451a03" />
    </svg>
  );
}

export function CoffeeSprite({ size = 70, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 8px rgba(220, 38, 38, 0.5))' }}
    >
      {/* Steam */}
      <path d="M 16 7 Q 19 4 17 1" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M 22 8 Q 20 4 23 2" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Red Space Mug */}
      <rect x="10" y="13" width="18" height="20" fill="#dc2626" rx="2" />
      {/* Mug Handle */}
      <path d="M 28 17 C 34 17, 34 27, 28 27" stroke="#dc2626" strokeWidth="3" fill="none" />
      {/* Mug Rim & Hot Coffee */}
      <ellipse cx="19" cy="13" rx="9" ry="3" fill="#451a03" />
      <ellipse cx="19" cy="13" rx="7" ry="2" fill="#271102" />
      {/* Foam art / Skull icon */}
      <rect x="18" y="12" width="2" height="2" fill="#fef3c7" />
      {/* Mug decal (Alien emblem) */}
      <circle cx="19" cy="23" r="3" fill="#000000" opacity="0.4" />
      <rect x="18" y="22" width="2" height="2" fill="#ffffff" />
    </svg>
  );
}

export function SpacePizzaSprite({ size = 70, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.5))' }}
    >
      {/* Triangular Pizza Slice */}
      <polygon points="20,34 6,10 34,10" fill="#fbbf24" />
      {/* Crust */}
      <rect x="6" y="8" width="28" height="4" fill="#b45309" rx="2" />
      {/* Melted Cheese layer */}
      <polygon points="20,31 9,12 31,12" fill="#fde047" />
      {/* Pepperoni planets */}
      <circle cx="15" cy="17" r="3" fill="#dc2626" />
      <circle cx="25" cy="18" r="2.5" fill="#dc2626" />
      <circle cx="19" cy="25" r="2.5" fill="#dc2626" />
      {/* Starry oregano dots */}
      <rect x="20" y="15" width="1.5" height="1.5" fill="#15803d" />
      <rect x="13" y="22" width="1.5" height="1.5" fill="#15803d" />
      <rect x="25" y="24" width="1.5" height="1.5" fill="#15803d" />
    </svg>
  );
}

export function CosmicDonutSprite({ size = 70, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))' }}
    >
      {/* Donut base */}
      <ellipse cx="20" cy="21" rx="14" ry="11" fill="#d97706" />
      {/* Neon Purple Galaxy Glaze */}
      <ellipse cx="20" cy="19" rx="13" ry="9" fill="#9333ea" />
      {/* Center hole */}
      <ellipse cx="20" cy="20" rx="4" ry="3" fill="#09090b" />
      {/* Space sprinkles */}
      <rect x="13" y="14" width="3" height="1" fill="#38bdf8" />
      <rect x="23" y="14" width="3" height="1" fill="#ef4444" />
      <rect x="11" y="21" width="1" height="3" fill="#facc15" />
      <rect x="27" y="20" width="2" height="2" fill="#ffffff" />
      <rect x="18" y="25" width="3" height="1" fill="#34d399" />
    </svg>
  );
}

export function AlienRamenSprite({ size = 70, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={`pixel-art ${className}`}
      style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' }}
    >
      {/* Chopsticks sticking out */}
      <line x1="12" y1="5" x2="28" y2="20" stroke="#fef08a" strokeWidth="2" />
      <line x1="17" y1="4" x2="31" y2="18" stroke="#fef08a" strokeWidth="2" />
      {/* Bowl */}
      <path d="M 8 18 Q 20 36 32 18 Z" fill="#18181b" />
      <rect x="7" y="16" width="26" height="4" fill="#dc2626" rx="2" />
      {/* Broth and curly noodles */}
      <ellipse cx="20" cy="18" rx="11" ry="3" fill="#ea580c" />
      <rect x="13" y="16" width="10" height="2" fill="#fef08a" />
      {/* Glowing Alien Egg Slice */}
      <ellipse cx="23" cy="17" rx="3.5" ry="2.5" fill="#f0fdf4" />
      <circle cx="23" cy="17" r="1.5" fill="#22c55e" />
    </svg>
  );
}
