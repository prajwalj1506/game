# MS.ALIEN × MR.ROBOT

A dark, pixel-art retro space comedy adventure game built with React and Vite.

## Game Stages

1. **Opening Screen**: Deep-space title screen with traveling rocket, mysterious red planet, and blood-red START button.
2. **Stage 1: Talk Your Way Into Help**: Negotiate with Mr. Robot after crash landing on an alien world with 3 humorous reply options.
3. **Stage 2: The Argument Simulator**: Interactive comedy dialogue sequence between Ms. Alien and Mr. Robot.
4. **Stage 3: Ship-Fridge Raid**: Collect 5 pixel-art space foods (Spicy Biryani, Warp Coffee, Cosmic Pizza, Galaxy Donut, Alien Ramen) with live counter.
5. **Stage 4: Irritate the Mechanic**: Tap to poke the robot, trigger sparks, and accelerate wire repairs with sarcastic robot reactions.
6. **Stage 5: Spacebar Smackdown**: Smash the Launch button or Spacebar to accelerate the rocket with screen-shake, speed lines, and plasma thrusters into hyperspace. Concludes with the closing line: *"Next time, we're taking the bus."* and full game reset.

## Running Locally

```bash
# 1. Install dependencies (already completed)
npm install

# 2. Start the local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
```

The output bundle is generated in `dist/`.

## Deploying to Vercel

### Option 1: Via Vercel CLI (Fastest)

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy directly from the project directory
vercel
```

Follow the prompts:
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

### Option 2: Via GitHub & Vercel Dashboard

1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel will automatically detect Vite (`npm run build` / `dist`).
5. Click **Deploy**.
