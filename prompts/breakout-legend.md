# Breakout Legend — 打砖块小游戏

> **赛道**：Prompt　**作者**：qjh · [GitHub @jiahui-qin](https://github.com/jiahui-qin)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Breakout Legend — 打砖块小游戏 cover](../assets/demos/breakout-legend.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/breakout-legend.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Breakout Legend — 打砖块小游戏 |
| 赛道 | Prompt |
| 作者 | qjh |
| GitHub | [@jiahui-qin](https://github.com/jiahui-qin) |

## 📝 作品介绍

快速生成了一个可以闯关的打砖块游戏，支持edgeone kv存储时间排名，支持top10 展示

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.
# Breakout Legend — 打砖块小游戏

Build a complete browser-based **Breakout Legend** game using **React + Vite + TypeScript + Tailwind CSS**.

---

## GOAL

Create a polished， fully playable **10-level Breakout game** with a dark arcade aesthetic， three brick types， a survival timer， and a **global leaderboard** powered by **EdgeOne Pages Edge Functions + KV Storage**.

This is not a generic Canvas tutorial demo， not a stripped-down prototype， and not a template with placeholder content.

The game must feel:
- cinematic and immersive (dark neon arcade vibe)
- mechanically complete and fair
- production-grade in both code quality and visual polish

---

## VISUAL STYLE

**Color palette:**
- Background: `#030014` (deep space black)
- Paddle: `#7C3AED` (violet glow)
- Ball: `#E0E7FF` (icy white)
- Normal brick: `#1E3A5F` (steel blue)
- Indestructible brick: `#374151` (iron gray)
- Splitter brick: `#D97706` (amber warning)
- UI accent: `#6366F1` (indigo)
- Danger (low HP): `#EF4444` (red)
- Victory gold: `#F59E0B`

**Typography:**
- Use Google Fonts: `Orbitron` (700) for headings and score display， `Inter` (400， 600) for body UI
- Tailwind font families: `display: ['Orbitron'， 'sans-serif']`， `body: ['Inter'， 'sans-serif']`

**Atmosphere:**
- Subtle starfield particle background (static canvas layer)
- Paddle and ball have a soft glow effect (CSS box-shadow / drop-shadow)
- Bricks have distinct visual treatments per type
- All screens (Start， Pause， Game Over， Victory， Leaderboard) use glassmorphism cards

---

## TECH STACK

- React 18
- Vite
- TypeScript (strict mode)
- Tailwind CSS
- Canvas API (game rendering)
- EdgeOne Pages Edge Functions (leaderboard API)
- EdgeOne Pages KV Storage (leaderboard persistence)

> ⚠️ Do NOT use Three.js， Phaser， or any game engine. Use raw Canvas API for all game rendering.

---

## PROJECT STRUCTURE

```
breakout-legend/
├── public/
├── src/
│   ├── components/
│   │   ├── GameCanvas.tsx       # Main canvas renderer
│   │   ├── StartScreen.tsx      # Title + Start button
│   │   ├── PauseOverlay.tsx     # Pause menu
│   │
   ├── GameOverScreen.tsx   # Fail state
│   │   ├── VictoryScreen.tsx    # Win state + name input
│   │   ├── Leaderboard.tsx      # Top 10 display
│   │   ├── HUD.tsx              # Timer display
│   │   └── GlassCard.tsx        # Reusable glassmorphism card
│   ├── game/
│   │   ├── engine.ts            # Game loop， physics， collision
│   │   ├── levels.ts            # Level definitions (10 levels)
│   │   ├── types.ts             # TypeScript types
│   │   └── constants.ts         # Game constants
│   ├── hooks/
│   │   └── useGameState.ts      # Game state management hook
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── edge-functions/
│   └── api/
│       ├── leaderboard.js       # GET top 10 + POST new entry
│       └── health.js            # Health check
├── edgeone.json
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## GAME MECHANICS

### Core Rules

- **1 life per game** — all balls must be lost (fall below paddle) to trigger Game Over
- **No score system** — only a **survival timer** (counts up from 00:00 while playing)
- **Win condition** — destroy all destructible bricks in a level → advance to next level
- **Final win** — complete all 10 levels → Victory screen with name input

### Ball Physics

- Initial velocity at level start: `vx = ±3`， `vy = -3` (pixels per frame at 60fps)
- Ball bounces off: top wall， left wall， right wall， paddle， destructible bricks， splitter bricks
- Ball **passes through** indestructible bricks — it deflects (bounces off) but does NOT destroy them
- Ball falls off bottom edge → **that ball disappears** (no wall bounce on bottom)
- When all balls are gone → **Game Over**

### Paddle

- Width: 100px (shrinks 5px per level starting from level 3， minimum 60px)
- Controlled by **mouse movement** (horizontal only， clamped to canvas)
- Keyboard fallback: Left / Right arrow keys

### Multi-Ball Mechanics

- When a **Splitter Brick** is hit and destroyed， it spawns **2 new balls** from the brick's center
- New balls launch at ±45° from the original ball's direction
- Maximum balls in play at any time: **8**
- If already at max (8 balls)， the splitter is destroyed but no new balls spawn

### Collision Detection

- **Ball vs. brick**: AABB collision. Determine which face (top/bottom vs. left/right) was hit to invert the correct velocity component
- **Ball vs. paddle**: Standard top-face bounce. Apply slight horizontal deflection based on where the ball hits the paddle (center = straight， edge = steep angle)
- **Ball vs. wall**: Invert `vx` (left/right walls) or `vy` (top wall)

---

## BRICK TYPES

| Type | Appearance | Behavior |
|------|-----------|----------|
| **Normal** | Steel blue `#1E3A5F`， 1 health | Destroyed on first hit |
| **Indestructible** | Iron gray `#374151`， lock icon | Ball bounces off， never destroyed |
| **Splitter** | Amber `#D97706`， split icon (⊕) | Destroyed on first hit → spawns 2 new balls |

Visual distinction rules:
- Normal: solid fill + thin border
- Indestructible: hatched/grid texture overlay， lock emoji centered
- Splitter: pulsing amber glow animation， ⊕ symbol centered

---

## LEVEL DESIGN (10 Levels)

Define all levels in `src/game/levels.ts` as a 2D grid array. Use these codes:
- `0` = empty
- `N` = normal brick
- `I` = indestructible
- `S` = splitter brick

### Level Progression Rules

| Level | Description | Speed Multiplier | Indestructible | Splitters |
|-------|------------|-----------------|----------------|-----------|
| 1 | Tutorial — sparse rows | 1.0× | 0 | 0 |
| 2 | Filled 4 rows | 1.0× | 0 | 2 |
| 3 | Checkerboard + border | 1.1× | 4 | 2 |
| 4 | Diamond pattern | 1.1× | 6 | 4 |
| 5 | Fortress (walls + inside) | 1.2× | 8 | 4 |
| 6 | Maze corridors | 1.2× | 12 | 6 |
| 7 | Cross + scattered | 1.3× | 10 | 6 |
| 8 | Random chaos | 1.3× | 14 | 8 |
| 9 | Near-solid grid | 1.4× | 16 | 8 |
| 10 | Final gauntlet — dense + surrounded | 1.5× | 20 | 10 |

At level start， apply speed multiplier to the initial ball velocity.

---

## HUD

Display in the top bar (fixed above game canvas):
- **Level**: `LEVEL 3 / 10`
- **Timer**: `01:23` (elapsed time， counting up， formatted MM:SS)
- **Balls in play**: `● ●` (dot icons representing active balls)
- **PAUSE** button (top right)

---

## SCREENS

### Start Screen
- Game title: **BREAKOUT LEGEND**
- Subtitle: "10 Levels · No Lives · Pure Survival"
- `[START GAME]` button → enter Level 1
- `[LEADERBOARD]` button → show Top 10 overlay

### Pause Screen (Overlay)
- Triggered by `P` key or Pause button
- Options: `[RESUME]` · `[RESTART]` · `[QUIT TO MENU]`
- Shows current level + elapsed time

### Game Over Screen
- Message: "ALL BALLS LOST"
- Shows: Level reached + elapsed time
- Buttons: `[RETRY]` · `[MENU]`

### Victory Screen
- Shown after completing all 10 levels
- Message: "BREAKOUT COMPLETE"
- Shows total elapsed time (formatted as `MM:SS`)
- Name input field: "Enter your name for the leaderboard" (max 20 chars)
- `[SUBMIT]` button → POST to `/api/leaderboard`， then show Leaderboard
- `[SKIP]` button → return to menu without submitting

### Leaderboard Screen
- Title: "TOP 10 SURVIVORS"
- Fetches from `GET /api/leaderboard`
- Table columns: `#` · `NAME` · `TIME`
- Fastest times at top (sorted ascending by time in seconds)
- Highlight rank #1 in gold， #2 silver， #3 bronze
- Current player's entry highlighted if just submitted
- `[CLOSE]` button

---

## EDGE FUNCTIONS (Backend)

### File: `edge-functions/api/leaderboard.js`

KV namespace variable name: `BREAKOUT_KV`
Storage key: `leaderboard` (stores a JSON array)

#### GET /api/leaderboard

Returns top 10 entries sorted by time ascending (fastest first).

Response:
```json
{
  "ok": true，
  "data": [
    { "name": "Alice"， "time": 87， "displayTime": "01:27"， "rank": 1 }，
    { "name": "Bob"，   "time": 145， "displayTime": "02:25"， "rank": 2 }
  ]
}
```

#### POST /api/leaderboard

Accepts:
```json
{ "name": "Alice"， "time": 87 }
```

Validation:
- `name`: required， string， 1–20 chars， strip HTML
- `time`: required， positive integer (seconds)

Logic:
1. Read current leaderboard from KV (default to `[]` if null)
2. Append new entry `{ name， time， submittedAt: Date.now() }`
3. Sort ascending by `time`
4. Keep only top 50 entries (trim the rest)
5. Write back to KV
6. Return the top 10 entries with rank and `displayTime`

Response:
```json
{
  "ok": true，
  "rank": 3，
  "data": [ ...top 10... ]
}
```

Error responses:
```json
{ "ok": false， "error": "Name is required" }    // 400
{ "ok": false， "error": "Invalid time value" }  // 400
```

CORS headers (all responses):
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET， POST， OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Handle `OPTIONS` preflight by returning 204.

#### Full implementation:

```javascript
// edge-functions/api/leaderboard.js

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*'，
  'Access-Control-Allow-Methods': 'GET， POST， OPTIONS'，
  'Access-Control-Allow-Headers': 'Content-Type'，
};

function jsonResponse(data， status = 200) {
  return new Response(JSON.stringify(data)， {
    status，
    headers: { 'Content-Type': 'application/json'， ...CORS_HEADERS }，
  });
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2， '0');
  const s = (seconds % 60).toString().padStart(2， '0');
  return `${m}:${s}`;
}

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null， { status: 204， headers: CORS_HEADERS });
  }

  if (request.method === 'GET') {
    const raw = await BREAKOUT_KV.get('leaderboard'， 'json');
    const entries = raw || [];
    const top10 = entries.slice(0， 10).map((e， i) => ({
      name: e.name，
      time: e.time，
      displayTime: formatTime(e.time)，
      rank: i + 1，
    }));
    return jsonResponse({ ok: true， data: top10 });
  }

  if (request.method === 'POST') {
    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ ok: false， error: 'Invalid JSON' }， 400);
    }

    const name = String(body.name || '').replace(/]*>/g， '').trim();
    const time = parseInt(body.time， 10);

    if (!name || name.length > 20) {
      return jsonResponse({ ok: false， error: 'Name must be 1–20 characters' }， 400);
    }
    if (isNaN(time) || time  a.time - b.time);
    const trimmed = entries.slice(0， 50);
    await BREAKOUT_KV.put('leaderboard'， JSON.stringify(trimmed));

    const rank = trimmed.findIndex(e => e.name === name && e.time === time) + 1;
    const top10 = trimmed.slice(0， 10).map((e， i) => ({
      name: e.name，
      time: e.time，
      displayTime: formatTime(e.time)，
      rank: i + 1，
    }));
    return jsonResponse({ ok: true， rank， data: top10 }， 201);
  }

  return jsonResponse({ ok: false， error: 'Method not allowed' }， 405);
}
```

### File: `edge-functions/api/health.js`

```javascript
export function onRequest() {
  return new Response(JSON.stringify({ ok: true })， {
    headers: { 'Content-Type': 'application/json' }，
  });
}
```

---

## FRONTEND DATA RULES

- Do NOT hardcode leaderboard data in React components
- Fetch leaderboard via `GET /api/leaderboard` in `Leaderboard.tsx`
- Submit via `POST /api/leaderboard` from `VictoryScreen.tsx`
- Show loading spinner while fetching; show error message on failure
- Handle network errors gracefully (do not crash the game)

---

## CANVAS RENDERING REQUIREMENTS

The game canvas must:
- Have fixed logical resolution: `800px × 600px`
- Scale to fit the viewport while maintaining aspect ratio (CSS `max-width: 100%; height: auto`)
- Render at 60fps using `requestAnimationFrame`
- Clear the canvas fully each frame
- Render layers in order: background → bricks → paddle → ball(s) → HUD overlay

Brick grid:
- Canvas game area (below HUD bar): `800 × 540px`
- Brick area: top `200px` of game area
- Brick size: `60px × 20px` with `4px` gap
- Max 12 columns × 8 rows

---

## GAME STATE MACHINE

```
IDLE → START → PLAYING → PAUSED → PLAYING
                        ↓
                    GAME_OVER
                        ↓
                      IDLE
PLAYING (all levels cleared) → VICTORY → LEADERBOARD → IDLE
```

Implement as a discriminated union in TypeScript:

```typescript
type GamePhase =
  | { phase: 'idle' }
  | { phase: 'playing'; level: number; startTime: number }
  | { phase: 'paused'; level: number; elapsed: number }
  | { phase: 'gameover'; level: number; elapsed: number }
  | { phase: 'victory'; elapsed: number }
  | { phase: 'leaderboard'; playerTime?: number; playerRank?: number };
```

---

## KEYBOARD SHORTCUTS

| Key | Action |
|-----|--------|
| `←` / `→` | Move paddle |
| `P` | Toggle pause |
| `R` | Restart (from Game Over / Pause) |
| `Escape` | Quit to menu |
| `Enter` | Confirm in dialogs |

---

## ACCESSIBILITY & TECHNICAL REQUIREMENTS

- TypeScript strict mode throughout
- Clean component separation (no 500-line monolith files)
- Semantic HTML for all UI screens (not the canvas game area)
- All buttons have visible focus rings
- `aria-label` on icon-only buttons
- No memory leaks: cancel `requestAnimationFrame` on unmount
- No event listener leaks: remove on cleanup

---

## RECOMMENDED COMPONENTS

| Component | Responsibility |
|-----------|---------------|
| `GameCanvas` | Owns the canvas element and game loop |
| `StartScreen` | Title， start， leaderboard CTA |
| `HUD` | Level + timer + ball count strip |
| `PauseOverlay` | Pause menu glassmorphism overlay |
| `GameOverScreen` | Loss state UI |
| `VictoryScreen` | Win state + name input form |
| `Leaderboard` | Fetches + renders top 10 table |
| `GlassCard` | Reusable `backdrop-blur` container |
| `StarfieldBackground` | Static particle canvas behind game |

---

## IMPLEMENTATION NOTES

- Install and use the **edgeone-pages-dev** and **edgeone-pages-deploy** Skills from:

   `https://github.com/TencentEdgeOne/edgeone-pages-skills`
- In EdgeOne Pages console: enable **KV Storage** → create namespace `breakout-leaderboard` → bind to project with variable name `BREAKOUT_KV`
- Use `edgeone pages dev` for local development (port 8088)
- Before deployment， ask the user whether to use the **China site** or **Global site**
- After build， verify locally: game loop， all 10 levels， leaderboard GET/POST
- Deploy with `edgeone pages deploy`

---

## FINAL QUALITY BAR

The result must NOT look like:
- a Canvas tutorial from a YouTube beginner series
- an unpolished game jam prototype
- a feature-incomplete demo with "coming soon" placeholders

The result SHOULD look like:
- a complete， shippable arcade game
- a showcase of EdgeOne Pages KV Storage in a real， user-facing feature
- a dark， cinematic game that feels good to play
- code clean enough to be read as a reference project

---

## DELIVERY CHECKLIST

After building:
1. Run locally: `edgeone pages dev`
2. Play through Level 1 → Level 10 path manually
3. Verify multi-ball (splitter brick) behavior
4. Verify indestructible bricks stay intact
5. Trigger Game Over (let all balls fall)
6. Complete all 10 levels → submit name → verify leaderboard shows entry
7. Verify `GET /api/leaderboard` returns sorted JSON
8. Verify `POST /api/leaderboard` validates and persists correctly
9. Test on viewport widths: 390px， 768px， 1280px
10. Deploy to EdgeOne Pages
````
