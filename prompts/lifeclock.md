# LifeClock

> **赛道**：Prompt　**作者**：陈海健
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![LifeClock demo](../assets/demos/lifeclock.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/lifeclock.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | LifeClock |
| 赛道 | Prompt |
| 作者 | 陈海健 |

## 📝 作品介绍

LifeClock · 你的人生，每一秒都算数 🌸

输入生日，实时看到你的人生已经走过了多少。

核心功能：
· 人生总进度实时更新，精确到小数点后3位
· 已活秒数每秒跳动，今天/今年进度实时显示
· 距下一个生日倒计时
· 小事清单：添加任何期待的事，实时倒计时
· 一键分享进度条文字
· EdgeOne Edge Functions 匿名访客计数

暗金温馨视觉，Instrument Serif 字体，
liquid-glass 毛玻璃卡片，零数据收集，
所有计算本地完成。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Build a single-page web app called **LifeClock — 你的人生，每一秒都算数 🌸**.
Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

The aesthetic is: warm， cozy， deeply personal — like a handwritten diary crossed with a starlit sky.
Dark background with warm cream， honey gold， and blush rose accents.
Think: a cup of chamomile tea at midnight， soft candlelight， the feeling of being held.
This is NOT a productivity tool. It is a love letter to time — gentle， beautiful， a little wistful.
Every number on screen is REAL and updates live.

═══════════════════════════════════════════════════
FONTS & DESIGN SYSTEM
═══════════════════════════════════════════════════

Google Fonts:
- Instrument Serif (italic) — all headings and big numbers
- Fraunces (300， 400， italic) — decorative quotes and hero sub
- DM Sans (300， 400， 500) — all body text and UI labels

Tailwind config fontFamily:
- heading: ["'Instrument Serif'"， "serif"]
- serif: ["'Fraunces'"， "serif"]
- body: ["'DM Sans'"， "sans-serif"]

CSS Variables (:root in index.css):
--background: 20 15% 6%;
--foreground: 35 28% 94%;
--primary: 35 85% 68%;
--primary-foreground: 20 15% 6%;
--muted: 20 10% 10%;
--muted-foreground: 35 15% 55%;
--border: 35 40% 70% / 0.12;
--accent: 355 60% 75%;
--accent2: 35 85% 68%;
--radius: 9999px;

Body: bg-[#0E0B09]， color hsl(35 28% 94%)， font-body.

html { scroll-behavior: smooth; scroll-padding-top: 80px; }

═══════════════════════════════════════════════════
WARM GLASS CSS (in @layer components)
═══════════════════════════════════════════════════

.warm-glass:
- background: rgba(244， 229， 201， 0.03)
- backdrop-filter: blur(12px)
- border: none
- box-shadow: inset 0 1px 1px rgba(244，229，201，0.10)，
              0 20px 60px rgba(0，0，0，0.4)
- position: relative; overflow: hidden

.warm-glass::before:
- content: ''
- position: absolute; inset: 0; border-radius: inherit; padding: 1.2px
- background: linear-gradient(160deg，
    rgba(244，229，201，0.35) 0%，
    rgba(244，229，201，0.08) 30%，
    rgba(244，229，201，0) 60%，
    rgba(232，160，32，0.15) 100%)
- -webkit-mask: linear-gradient(#fff 0 0) content-box， linear-gradient(#fff 0 0)
- -webkit-mask-composite: xor; mask-composite: exclude
- pointer-events: none

.warm-glass-strong:
- Same but backdrop-filter: blur(40px)
- box-shadow: inset 0 1px 1px rgba(244，229，201，0.18)，
              0 0 0 1px rgba(244，229，201，0.06)，
              0 30px 80px rgba(0，0，0，0.55)

.honey-glow:
- color: #F4C57A
- text-shadow: 0 0 30px rgba(232，160，32，0.45)，
               0 0 60px rgba(232，160，32，0.2)

.rose-glow:
- color: #F4A5A5
- text-shadow: 0 0 30px rgba(244，165，165，0.4)

.progress-warm:
- height: 3px; border-radius: 9999px
- background: linear-gradient(90deg， #E8A020， #F4C57A， #F4A5A5)
- box-shadow: 0 0 12px rgba(232，160，32，0.5)
- transition: width 0.6s ease

═══════════════════════════════════════════════════
SHARED HOOK — useLiveTime
═══════════════════════════════════════════════════

Create `src/lib/useLiveTime.ts`.
Takes birthdate (Date) as param. Updates every 100ms via setInterval.
Returns:

```ts
{
  lifePercent: number       // (ageMs / (80 * 365.25 * 24 * 3600 * 1000)) * 100
  yearsLived: number        // full years
  daysLived: number         // total days
  hoursLived: number        // total hours
  minutesLived: number
  secondsLived: number      // ticks every second

  yearPercent: number       // progress through current year
  dayOfYear: number
  totalDaysThisYear: number

  dayPercent: number        // progress through today
  timeString: string        // "HH:MM:SS"

  yearsLeft: number         // 80 - yearsLived
  daysLeft: number
  nextBirthday: number      // days until next birthday
}
```

Cleanup on unmount.

═══════════════════════════════════════════════════
SHARED COMPONENT — WarmProgressBar
═══════════════════════════════════════════════════

`src/components/WarmProgressBar.tsx`
Props: `{ value: number， label?: string， sublabel?: string， color?: 'honey' | 'rose' | 'cream' }`

Layout:
- Label row: flex justify-between， label (DM Sans 11px tracking-widest uppercase text-[#F4E5C9]/40) + value% (Instrument Serif italic honey-glow text-sm)
- Track: h-[2px] rounded-full bg-white/5 mt-2 mb-1
- Fill: .progress-warm， width = value%
- Sublabel: DM Sans 10px text-[#F4E5C9]/25 mt-1

═══════════════════════════════════════════════════
SECTION 1 — NAVBAR
═══════════════════════════════════════════════════

Fixed top， z-50， full-width.
On scroll > 20px: bg-[#0E0B09]/85 backdrop-blur-md，
border-bottom: 1px solid rgba(244，229，201，0.06).
Transition-all duration-500.

Inner: max-w-6xl mx-auto px-6 flex items-center justify-between h-16.

Left — Logo:
Inline SVG hourglass (22×22， stroke #F4C57A， strokeWidth 1.5):
- Outer frame: rect with rounded corners
- Sand top triangle pointing down
- Sand bottom triangle pointing up (smaller， partially filled)
- 3 tiny dots falling through middle
Then "LifeClock" — font-heading italic text-xl text-[#F4E5C9] tracking-tight ml-2.5

Center nav (hidden mobile， md:flex gap-1):
- "首页" → #home
- "我的进度" → #progress
- "小事清单" → #tasks
- "时间诗" → #poetry
Each: DM Sans text-xs tracking-widest text-[#F4E5C9]/35
hover:text-[#F4C57A] transition-colors uppercase

Right:
warm-glass-strong rounded-full px-5 py-2 cursor-pointer
DM Sans text-xs tracking-widest text-[#F4C57A]
"✦ 开始"
Hover: box-shadow 0 0 20px rgba(232，160，32，0.2)

═══════════════════════════════════════════════════
SECTION 2 — HERO — id="home"
═══════════════════════════════════════════════════

Height: 100vh. bg-[#0E0B09].

Background layers (absolute inset-0 z-0):

Layer 1 — Starfield (pure CSS， no canvas):
200 tiny dots scattered randomly across the screen.
Generate with a deterministic pseudo-random (seeded) pattern.
Each dot: position absolute， width 1-2px， height 1-2px，
border-radius 50%， background white.
Opacity varies 0.1 to 0.5.
25 of them animate with: animation keyframes `twinkle`
  @keyframes twinkle { 0%，100%{opacity:0.15} 50%{opacity:0.7} }
  duration: 2s-6s random (use 6 preset durations: 2s，3s，4s，5s，6s，7s)

Layer 2 — Warm radial glow:
position absolute， inset 0
background: radial-gradient(ellipse 70% 60% at 50% 60%，
  rgba(232，160，32，0.06) 0%，
  rgba(244，165，165，0.04) 40%，
  transparent 70%)

Layer 3 — Bottom fade:
absolute bottom-0 left-0 right-0， height 300px
linear-gradient(to bottom， transparent， #0E0B09)

Content (z-10， flex-col items-center justify-center， text-center， px-6):

Badge pill (warm-glass rounded-full px-4 py-1.5 mb-8 inline-flex items-center gap-2):
- Tiny animated heart: `🌸`
  @keyframes heartbeat { 0%，100%{transform:scale(1)} 50%{transform:scale(1.15)} }
- DM Sans text-xs tracking-widest text-[#F4E5C9]/50 uppercase: "每一秒都算数"

Headline:
Line 1: "你的人生" — font-heading italic， clamp(3rem，9vw，6.5rem)， leading-[0.85]， text-[#F4E5C9]， tracking-tight
Line 2: "正在悄悄流动" — font-heading italic， same size， honey-glow
Both lines animate: opacity 0→1 + blur(12px)→blur(0) + translateY(30px)→0
duration 1s， ease-out， line 2 delay 0.2s

Sub (Fraunces 300 italic， text-lg md:text-xl， text-[#F4E5C9]/45， max-w-lg mx-auto， mt-6， lh 1.7):
"输入你的生日，看看你已经走过了多少——"
"还剩下多少个清晨，多少个拥抱，多少个可能。"
Fade in: opacity 0→1， delay 0.7s， duration 0.8s

Quick-try pills (mt-8， flex gap-3 justify-center flex-wrap):
3 warm-glass rounded-full px-4 py-2 cursor-pointer pills:
- "🌱 试试90后" — onClick set birthdate to 1995-06-15
- "🌙 试试00后" — onClick set birthdate to 2000-01-01
- "✨ 试试80后" — onClick set birthdate to 1985-03-20
DM Sans text-xs text-[#F4E5C9]/50 hover:text-[#F4C57A]
Hover: warm border glow

CTA button (mt-6， warm-glass-strong rounded-full px-8 py-3.5 cursor-pointer):
inline-flex items-center gap-2.5
- Tiny hourglass emoji: "⏳"
- DM Sans text-sm tracking-wide text-[#F4C57A]: "输入生日 · 开始计算"
onClick: scroll to #input
Hover: box-shadow 0 0 30px rgba(232，160，32，0.2)， translateY(-1px)
transition all 0.3s

Bottom (absolute bottom-8 left-0 right-0 text-center):
DM Sans text-[10px] tracking-[0.35em] text-[#F4E5C9]/15 uppercase
"向下滑动 · scroll"
animate: translateY 0→6px→0， 2.5s ease-in-out infinite

═══════════════════════════════════════════════════
SECTION 3 — INPUT — id="input"
═══════════════════════════════════════════════════

py-28 px-6. bg-[#0E0B09].

Header text-center mb-14:
- Small emoji: "🗓️" text-3xl mb-4
- Heading (font-heading italic text-4xl md:text-5xl text-[#F4E5C9]):
  "告诉我，你从哪一天开始"
- Sub (Fraunces 300 italic text-base text-[#F4E5C9]/35 mt-3):
 
   "我们不保存任何数据。一切只在你的浏览器里悄悄计算。"

Input card (warm-glass-strong max-w-lg mx-auto p-10 rounded-3xl):

Decorative top: three small dots (8px each) in a row， colors #F4C57A， #F4A5A5， #F4E5C9， opacity 0.4， mb-8

Name field:
Label: DM Sans 10px tracking-[0.2em] uppercase text-[#F4E5C9]/30 mb-2: "你的名字 (可不填)"
Input: bg-transparent， border-none， border-bottom 1px solid rgba(244，229，201，0.12)
font-body text-lg text-[#F4E5C9]， placeholder "旅行者..."， padding 8px 0
outline none; onFocus: border-bottom-color rgba(232，160，32，0.4)
transition border-color 0.3s

Date field (mt-8):
Label: DM Sans 10px tracking-[0.2em] uppercase text-[#F4E5C9]/30 mb-2: "你的生日"
Input type=date: same style but font-size 2rem， color #F4C57A
Custom calendar icon color: filter to match warm tone

After date selected — show gentle preview (motion.div fadeIn):
warm-glass rounded-2xl p-4 mt-6 text-center
Fraunces italic text-sm text-[#F4E5C9]/50:
"你已经在这个世界上 {yearsLived} 年了 🌸"

Submit button (mt-8， w-full， warm-glass-strong rounded-full py-4):
font-heading italic text-lg text-[#F4C57A]
"开始我的人生进度条 →"
onClick: validate → scroll to #progress
Error: Fraunces italic text-sm text-[#F4A5A5] mt-3: "请输入一个有效的生日 🌙"

═══════════════════════════════════════════════════
SECTION 4 — LIVE DASHBOARD — id="progress"
═══════════════════════════════════════════════════

Only shows after birthdate submitted.
If no birthdate: show centered placeholder:
warm-glass rounded-3xl p-16 max-w-md mx-auto text-center
"🌸" text-4xl mb-4
Fraunces italic text-[#F4E5C9]/30: "先告诉我你的生日，我来帮你算算"

py-24 px-6 max-w-4xl mx-auto.

Top greeting (text-center mb-16):
font-heading italic text-3xl text-[#F4E5C9]:
"你好，{name || '旅行者'} 🌸"
DM Sans text-sm text-[#F4E5C9]/30 mt-2: "实时更新中 · {timeString}"

━━━ CARD A — 人生总进度 ━━━
warm-glass-strong rounded-3xl p-8 mb-5:

Top: DM Sans 10px tracking-widest uppercase text-[#F4E5C9]/30 mb-2: "你的人生进度"

Big number row (flex items-baseline gap-3 mb-6):
- Percent: font-heading italic text-6xl md:text-7xl honey-glow: "{lifePercent.toFixed(3)}%"
- Label: Fraunces italic text-lg text-[#F4E5C9]/40: "已经走过"

WarmProgressBar value={lifePercent}

Stats grid (grid grid-cols-2 gap-4 mt-8):
Each stat warm-glass rounded-2xl p-5:
- 已活: font-heading italic text-2xl text-[#F4E5C9]， then DM Sans text-xs text-[#F4E5C9]/30: "{yearsLived} 岁 {daysLived.toLocaleString()} 天"
- 经历了: "{hoursLived.toLocaleString()} 小时"
- 走过了: "{minutesLived.toLocaleString()} 分钟"
- 此刻第: font-heading italic text-2xl honey-glow TICKING: "{secondsLived.toLocaleString()} 秒" — updates every second

━━━ CARD B — 还剩下 ━━━
warm-glass rounded-3xl p-8 mb-5
border: 1px solid rgba(244，165，165，0.08):

DM Sans 10px tracking-widest uppercase text-[#F4E5C9]/25 mb-2: "还有这些时间"

Main: font-heading italic text-5xl rose-glow: "约 {yearsLeft} 年"
Sub: Fraunces italic text-base text-[#F4E5C9]/30 mt-1: "也就是 {(yearsLeft * 365).toLocaleString()} 天左右"

WarmProgressBar value={lifePercent} color='rose' label="已消耗"

Warm quote (mt-6 pt-6 border-t border-white/5):
Random from:
- "此刻永远不会再来，但它足够美丽。"
- "你已经经历了 {daysLived} 个日出。每一个都是礼物。"
- "时间不会等你，但它会陪着你。"
- "The present moment always will have been. — 此刻，永远存在过。"
Fraunces 300 italic text-sm text-[#F4E5C9]/25 text-center

━━━ CARD C — 今年 & 今天 ━━━
grid grid-cols-1 md:grid-cols-2 gap-5 mb-5:

Left (warm-glass rounded-3xl p-6):
"🌿 {new Date().getFullYear()} 年"
font-heading italic text-4xl honey-glow: "{yearPercent.toFixed(1)}%"
WarmProgressBar value={yearPercent}
DM Sans text-xs text-[#F4E5C9]/25 mt-3: "今天是今年第 {dayOfYear} 天"

Right (warm-glass rounded-3xl p-6):
"🌙 今天"
font-heading italic text-4xl honey-glow: "{dayPercent.toFixed(1)}%"
WarmProgressBar value={dayPercent}
font-heading italic text-xl honey-glow: "{timeString}" — ticks every second

━━━ CARD D — 小里程碑 ━━━
warm-glass rounded-3xl p-8 mb-5:

Header: "🎯 你的时间坐标"

Timeline visual:
Full-width bar (height 2px， bg white/5， rounded-full， relative):
- Filled portion (left): progress-warm， width = lifePercent%
- Marker dot at current position:
  width 10px height 10px rounded-full bg-[#F4C57A]
  box-shadow 0 0 12px rgba(232，160，32，0.8)
  position absolute， top -4px， left = lifePercent%

Below bar: flex justify-between DM Sans text-[10px] text-[#F4E5C9]/20:
"出生 0" ... "现在" ... "80岁"

Milestone chips (flex flex-wrap gap-2 mt-6):
For each: { age: 18， label: '成年 🎓' }， { age: 30， label: '而立 🌱' }，
{ age: 40， label: '不惑 🌿' }， { age: 60， label: '花甲 🌸' }

If yearsLived >= age: warm-glass-strong chip， text-[#F4C57A]， prefix "✓ "
Else: warm-glass chip， text-[#F4E5C9]/20， show "还有 {age-yearsLived} 年"

━━━ SHARE BUTTON ━━━
mt-6 text-center:
warm-glass-strong rounded-full px-8 py-3 inline-flex items-center gap-2 cursor-pointer
DM Sans text-sm text-[#F4C57A]: "🌸 分享我的进度"

onClick: copy to clipboard:
```
我的人生进度条 🌸
已经走过：{yearsLived}岁 {daysLived}天
人生进度：{lifePercent.toFixed(2)}%
还剩：约{yearsLeft}年

你的呢？→ lifeclock.pages.dev
```
After copy: "已复制 ✓" for 2s， honey color

━━━ NEXT BIRTHDAY COUNTDOWN ━━━
warm-glass rounded-3xl p-6 text-center:
"🎂 距离你下一个生日"
font-heading italic text-4xl honey-glow: "{nextBirthday} 天"
Fraunces italic text-sm text-[#F4E5C9]/30 mt-2: "好好爱自己，到那一天。"

═══════════════════════════════════════════════════
SECTION 5 — 小事清单 (TASK QUEUE) — id="tasks"
═══════════════════════════════════════════════════

py-24 px-6 bg-[#0E0B09].

Header text-center mb-14:
- "⏰" text-3xl mb-4
- font-heading italic text-4xl md:text-5xl text-[#F4E5C9]: "你在等什么"
- Fraunces italic text-base text-[#F4E5C9]/35 mt-3:
  "把你最期待的事加进来，一起倒计时。"

Add form (warm-glass-strong max-w-xl mx-auto rounded-3xl p-8 mb-8):
Two inputs:
- "等什么？" text input — same warm underline style
  placeholder: "演唱会 / 放假 / 发薪日 / 见你..."
- "什么时候？" date input — same style

Add button (mt-6 w-full warm-glass-strong rounded-full py-3):
font-heading italic text-[#F4C57A]: "＋ 加入清单"

Event list (max-w-xl mx-auto space-y-3):
Each card (warm-glass rounded-2xl p-5
  flex items-center justify-between):

Left:
- Event name: DM Sans font-medium text-[#F4E5C9] text-sm
- Fraunces italic text-xs text-[#F4E5C9]/35 mt-0.5:
  "还有 {daysUntil} 天 🌙"

Right: live countdown (font-heading italic text-lg honey-glow):
"{DD}天 {HH}:{MM}:{SS}"
Updates every second.

Delete: × — DM Sans text-[#F4E5C9]/15 hover:text-[#F4A5A5] cursor-pointer

Pre-filled examples (shown if empty， dimmed):
- "🌈 下一个周末" → next Saturday
- "🎂 下一个生日" → uses birthdate if set
- "🌸 明年今天" → same date next year
Each labeled "(示例)" in text-[#F4E5C9]/20

═══════════════════════════════════════════════════
SECTION 6 — 时间诗 (PHILOSOPHY) — id="poetry"
═══════════════════════════════════════════════════

py-24 px-6.

Header text-center mb-16:
- font-heading italic text-4xl text-[#F4E5C9]: "关于时间，我们知道的"

3-col grid (grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto):

Card 1 (warm-glass rounded-3xl p-8):
"🌅" text-3xl mb-4
font-heading italic text-5xl honey-glow: "86，400"
DM Sans text-xs tracking-widest uppercase text-[#F4E5C9]/30 mt-2: "每天的秒数"
Fraunces italic text-sm text-[#F4E5C9]/40 mt-4 leading-relaxed:
"今天你已经用了 {Math.floor(dayPercent/100*86400).toLocaleString()} 秒。
每一秒都不会退款，但每一秒都可以是礼物。"

Card 2 (warm-glass rounded-3xl p-8):
Large decorative quote mark: font-heading text-6xl text-[#F4C57A]/20 leading-none: """
Fraunces 300 italic text-lg text-[#F4E5C9]/60 leading-relaxed mt-2:
"你不是在浪费时间——你是在选择如何生活。"
DM Sans text-xs text-[#F4E5C9]/20 tracking-widest mt-6: "— 某个深夜想到的"

Card 3 (warm-glass rounded-3xl p-8):
"🌙" text-3xl mb-4
font-heading italic text-5xl rose-glow: "∞"
DM Sans text-xs tracking-widest uppercase text-[#F4E5C9]/30 mt-2: "此刻的重量"
Fraunces italic text-sm text-[#F4E5C9]/40 mt-4 leading-relaxed:
"过去永远不会改变，这是它最温柔的地方——
它会一直在那里，等你回头看。"

Full-width quote strip (mt-16 py-14 border-y border-[#F4C57A]/06 text-center):
font-heading italic text-[clamp(1.2rem，4vw，2.2rem)] text-[#F4E5C9]/15 tracking-[0.08em]:
"每 · 一 · 秒 · 都 · 算 · 数"

Visitor counter below (DM Sans text-xs text-[#F4E5C9]/20 mt-8 text-center):
"今天已有 {todayVisitors || '—'} 位旅行者查看了自己的人生进度 🌸"
Fetched from /api/lifeclock-stats on mount.

═══════════════════════════════════════════════════
SECTION 7 — CTA + FOOTER
═══════════════════════════════════════════════════

py-32 px-6.

CTA block (warm-glass-strong max-w-2xl mx-auto rounded-3xl p-16 text-center):

"🌸" text-4xl mb-6 (animate heartbeat)

font-heading italic text-5xl md:text-6xl text-[#F4E5C9] leading-[0.85] mb-6:
Line 1: "现在开始"
Line 2 (honey-glow): "还不算晚"

Fraunces italic text-lg text-[#F4E5C9]/35 mb-10 leading-relaxed:
"你的人生进度条，每一秒都在悄悄更新。
不如现在就看看，你在哪里。"

Button (warm-glass-strong rounded-full px-10 py-4 cursor-pointer):
font-heading italic text-xl text-[#F4C57A]
"输入生日 · 开始 →"
onClick: scroll to #input
Hover: box-shadow 0 0 40px rgba(232，160，32，0.2)

Footer (mt-24 pt-10 border-t border-[#F4E5C9]/05 max-w-5xl mx-auto):
flex justify-between items-center flex-wrap gap-6:

Left:
- "⏳ LIFECLOCK" font-heading italic text-xl text-[#F4E5C9]/20
- DM Sans text-xs text-[#F4E5C9]/12 mt-1:
  "© {year} · 所有计算本地完成 · 不收集任何数据"

Right (flex gap-6):
DM Sans text-xs tracking-widest text-[#F4E5C9]/20
hover:text-[#F4C57A] transition-colors:
- "关于"
- "GitHub"
- "分享"

═══════════════════════════════════════════════════
EDGE FUNCTION — 访客计数
═══════════════════════════════════════════════════

Create `/api/lifeclock-stats` edge function.

On GET:
- KV key: `lifeclock:visitors:YYYY-MM-DD` (UTC)
- Cookie: `lifeclock_visitor_YYYY-MM-DD`
  - Absent: increment today counter + set cookie (Max-Age = seconds to UTC midnight， HttpOnly， SameSite=Lax)
  - Present: read only
- KV key `lifeclock:total` — increment on new visitor
- Return: `{ "today": 284， "total": 12847， "isNew": true }`
- Cache-Control: no-store， must-revalidate
- Standard Web APIs only (V8 runtime， no Node.js)

═══════════════════════════════════════════════════
ANIMATIONS
═══════════════════════════════════════════════════

All framer-motion entrances:
initial={{ opacity:0， y:24 }}
whileInView={{ opacity:1， y:0 }}
viewport={{ once:true， margin:"-60px" }}
transition={{ duration:0.7， ease:[0.22，1，0.36，1] }}

Stagger children: 0.12s.

Number count-up: on dashboard first appear，
all counters animate 0 → real value over 1.8s
using framer-motion `useMotionValue` + `animate` + `useTransform`.

Floating particles: 8 tiny warm-colored dots (4-6px)
float gently up the right side of the hero section.
CSS animation: translateY 0 → -80vh， opacity 0→0.6→0， duration 8-15s， staggered starts.
Colors: #F4C57A， #F4A5A5， #F4E5C9 at 40% opacity.

Respect prefers-reduced-motion: disable all animations.

═══════════════════════════════════════════════════
HTML HEAD
═══════════════════════════════════════════════════

title: "LifeClock 🌸 — 你的人生，每一秒都算数"
description: "输入生日，看看你的人生走到了哪里。实时更新，温暖陪伴。"
og:title: "我的人生进度条 — LifeClock"
og:description: "每一秒都在计数。你的呢？"
twitter:card: summary_large_image
Google Fonts: Instrument Serif + Fraunces + DM Sans

═══════════════════════════════════════════════════
DEPENDENCIES
═══════════════════════════════════════════════════
- motion (framer-motion)
- lucide-react
- tailwindcss-animate
- shadcn/ui (minimal)
- NO heavy deps

═══════════════════════════════════════════════════
NON-NEGOTIABLE RULES
═══════════════════════════════════════════════════

- ALL numbers mathematically correct and real-time
- secondsLived ticks every second — this is the soul of the app
- Zero data sent to server (except anonymous visitor counter)
- Works without login， without signup
- Share button → clipboard only， no SDK
- Mobile-first， works at 390px
- Warm， never cold. Gentle， never harsh.
- Every piece of text should feel like it was written with care.

═══════════════════════════════════════════════════
DEPLOYMENT
═══════════════════════════════════════════════════

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills
Deploy to EdgeOne Pages.

After deployment verify:
1. Seconds counter ticks in real-time ✓
2. Quick-try pills auto-fill birthdate ✓
3. Task queue countdown works ✓
4. Share copies correct warm text ✓
5. /api/lifeclock-stats returns JSON ✓
6. Mobile layout at 390px looks good ✓
Return live preview URL.

````
