# Design System — 视觉规范与主题色

> **何时加载本文件**：用户的请求涉及主题色、配色方案、视觉风格、hex 自定义、CSS 变量、深浅模式等。
>
> **何时不加载**：用户只是建一个默认作品集站、没有提到任何视觉相关字眼时。

---

## 一、共享设计基础（5 套主题都遵守）

### 字体系统

通过 Google Fonts 引入两套字体，所有主题不变：

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap" rel="stylesheet" />
```

CSS 变量：

```css
--font-serif: 'Playfair Display', Georgia, serif;   /* 标题、英文 eyebrow */
--font-sans: 'DM Sans', system-ui, sans-serif;       /* 正文、UI */
```

### 共享尺寸

```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-pill: 999px;

--shadow-card: 0 4px 20px rgba(0,0,0,0.06);
--shadow-card-hover: 0 12px 36px rgba(0,0,0,0.12);

--container-max: 1280px;
--container-padding: clamp(20px, 4vw, 60px);
```

---

## 二、5 套预设主题（用户选 1 套）

每个主题都通过一组完整的 CSS 变量定义，注入到 `index.html` / `admin.html` / `login.html` 的 `<style>` 标签里。

### 主题 1：暗夜森林（dark-forest）— **默认主题**

> **氛围**：黑底 + 景观绿 + 衬线大字。深夜美术馆感，克制中带生命力。
> **适合**：景观设计师、室内设计师、工业设计师、所有偏专业沉稳的设计师。
> **来源**：LandscapeFlow AI 同款配色，已经过真实部署验证。

```css
:root[data-theme="dark-forest"] {
  --bg: #0A0A0A;
  --bg-elevated: rgba(255,255,255,0.06);
  --bg-overlay: rgba(10,10,10,0.86);
  
  --primary: #22C55E;
  --primary-dim: rgba(34,197,94,0.15);
  --primary-glow: rgba(34,197,94,0.4);
  
  --text: #FFFFFF;
  --text-muted: rgba(255,255,255,0.60);
  --text-faint: rgba(255,255,255,0.30);
  
  --border: rgba(255,255,255,0.10);
  --divider: rgba(255,255,255,0.08);
  
  --hero-gradient: linear-gradient(
    rgba(10,10,10,0.64) 0%,
    rgba(10,10,10,0.28) 32%,
    rgba(10,10,10,0.30) 58%,
    rgba(10,10,10,0.86) 100%
  );
  
  --btn-cta-bg: linear-gradient(135deg, #22C55E 0%, #16A34A 100%);
  --btn-cta-text: #FFFFFF;
  --btn-cta-shadow: 0 0 30px rgba(34,197,94,0.4);
}
```

### 主题 2：晨曦米色（dawn-beige）

> **氛围**：温暖米白底 + 深咖文字 + 燕麦色点缀。手作感、温柔克制。
> **适合**：室内设计师、平面设计师、手工艺术家、生活方式品牌。

```css
:root[data-theme="dawn-beige"] {
  --bg: #F5F0E8;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(245,240,232,0.92);
  
  --primary: #8B6F47;
  --primary-dim: rgba(139,111,71,0.10);
  --primary-glow: rgba(139,111,71,0.20);
  
  --text: #2C2418;
  --text-muted: rgba(44,36,24,0.65);
  --text-faint: rgba(44,36,24,0.35);
  
  --border: rgba(44,36,24,0.10);
  --divider: rgba(44,36,24,0.06);
  
  --hero-gradient: linear-gradient(
    rgba(245,240,232,0.10) 0%,
    rgba(245,240,232,0.30) 60%,
    rgba(245,240,232,0.92) 100%
  );
  
  --btn-cta-bg: linear-gradient(135deg, #8B6F47 0%, #6B5435 100%);
  --btn-cta-text: #F5F0E8;
  --btn-cta-shadow: 0 6px 24px rgba(139,111,71,0.30);
}
```

### 主题 3：深海蓝调（deep-ocean）

> **氛围**：靛蓝底 + 冷霜白 + 海蓝高亮。科技感、冷静理性。
> **适合**：UX/UI 设计师、产品设计师、数据可视化设计师。

```css
:root[data-theme="deep-ocean"] {
  --bg: #0F1B2E;
  --bg-elevated: rgba(255,255,255,0.05);
  --bg-overlay: rgba(15,27,46,0.86);
  
  --primary: #38BDF8;
  --primary-dim: rgba(56,189,248,0.15);
  --primary-glow: rgba(56,189,248,0.4);
  
  --text: #F8FAFC;
  --text-muted: rgba(248,250,252,0.65);
  --text-faint: rgba(248,250,252,0.35);
  
  --border: rgba(248,250,252,0.10);
  --divider: rgba(248,250,252,0.06);
  
  --hero-gradient: linear-gradient(
    rgba(15,27,46,0.60) 0%,
    rgba(15,27,46,0.28) 32%,
    rgba(15,27,46,0.30) 58%,
    rgba(15,27,46,0.88) 100%
  );
  
  --btn-cta-bg: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 100%);
  --btn-cta-text: #0F1B2E;
  --btn-cta-shadow: 0 0 30px rgba(56,189,248,0.4);
}
```

### 主题 4：暖阳橙红(sunset-coral)

> **氛围**：奶白底 + 珊瑚橙 + 暖灰文字。明亮愉悦、活力四射。
> **适合**：平面设计师、插画师、品牌设计师、儿童 / 教育领域设计师。

```css
:root[data-theme="sunset-coral"] {
  --bg: #FFFBF5;
  --bg-elevated: #FFFFFF;
  --bg-overlay: rgba(255,251,245,0.92);
  
  --primary: #FB7185;
  --primary-dim: rgba(251,113,133,0.10);
  --primary-glow: rgba(251,113,133,0.25);
  
  --text: #2D1B14;
  --text-muted: rgba(45,27,20,0.65);
  --text-faint: rgba(45,27,20,0.35);
  
  --border: rgba(45,27,20,0.10);
  --divider: rgba(45,27,20,0.06);
  
  --hero-gradient: linear-gradient(
    rgba(255,251,245,0.10) 0%,
    rgba(255,251,245,0.30) 60%,
    rgba(255,251,245,0.92) 100%
  );
  
  --btn-cta-bg: linear-gradient(135deg, #FB7185 0%, #F43F5E 100%);
  --btn-cta-text: #FFFFFF;
  --btn-cta-shadow: 0 6px 24px rgba(251,113,133,0.35);
}
```

### 主题 5：纯白极简(pure-minimal)

> **氛围**：纯白底 + 纯黑字 + 极少装饰。瑞士风格、性冷淡极致。
> **适合**：工业设计师、建筑设计师、字体设计师、追求极致简约的所有领域。

```css
:root[data-theme="pure-minimal"] {
  --bg: #FFFFFF;
  --bg-elevated: #FAFAFA;
  --bg-overlay: rgba(255,255,255,0.95);
  
  --primary: #000000;
  --primary-dim: rgba(0,0,0,0.06);
  --primary-glow: rgba(0,0,0,0.10);
  
  --text: #000000;
  --text-muted: rgba(0,0,0,0.55);
  --text-faint: rgba(0,0,0,0.30);
  
  --border: rgba(0,0,0,0.08);
  --divider: rgba(0,0,0,0.04);
  
  --hero-gradient: linear-gradient(
    rgba(255,255,255,0.10) 0%,
    rgba(255,255,255,0.30) 60%,
    rgba(255,255,255,0.92) 100%
  );
  
  --btn-cta-bg: #000000;
  --btn-cta-text: #FFFFFF;
  --btn-cta-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
```

---

## 三、用户传 hex 颜色 → 自动生成完整主题的算法

当用户传入 hex 颜色（如 `#FF6B6B`），按以下规则生成配套的完整 CSS 变量集。

### Step 1: 判断是浅色调还是深色调

```javascript
function isLightColor(hex) {
  // 移除 # 号
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  // 相对亮度计算（YIQ 公式）
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128;
}
```

### Step 2: 根据色调选择基础主题模板

```javascript
function buildThemeFromHex(hex) {
  const isLight = isLightColor(hex);
  
  if (isLight) {
    // 浅色主调 → 使用"晨曦米色"或"暖阳橙红"为骨架
    return {
      bg: '#FFFBF5',
      bgElevated: '#FFFFFF',
      bgOverlay: 'rgba(255,251,245,0.92)',
      primary: hex,
      primaryDim: hexToRgba(hex, 0.10),
      primaryGlow: hexToRgba(hex, 0.25),
      text: '#1A1A1A',
      textMuted: 'rgba(26,26,26,0.65)',
      textFaint: 'rgba(26,26,26,0.35)',
      border: 'rgba(26,26,26,0.10)',
      divider: 'rgba(26,26,26,0.06)',
      btnCtaBg: `linear-gradient(135deg, ${hex} 0%, ${darken(hex, 0.15)} 100%)`,
      btnCtaText: '#FFFFFF',
      btnCtaShadow: `0 6px 24px ${hexToRgba(hex, 0.35)}`,
    };
  } else {
    // 深色主调 → 使用"暗夜森林"或"深海蓝调"为骨架
    return {
      bg: '#0A0A0A',
      bgElevated: 'rgba(255,255,255,0.06)',
      bgOverlay: 'rgba(10,10,10,0.86)',
      primary: hex,
      primaryDim: hexToRgba(hex, 0.15),
      primaryGlow: hexToRgba(hex, 0.4),
      text: '#FFFFFF',
      textMuted: 'rgba(255,255,255,0.60)',
      textFaint: 'rgba(255,255,255,0.30)',
      border: 'rgba(255,255,255,0.10)',
      divider: 'rgba(255,255,255,0.08)',
      btnCtaBg: `linear-gradient(135deg, ${hex} 0%, ${darken(hex, 0.15)} 100%)`,
      btnCtaText: contrastText(hex),  // 自动选黑或白
      btnCtaShadow: `0 0 30px ${hexToRgba(hex, 0.4)}`,
    };
  }
}
```

### Step 3: 辅助函数

```javascript
// hex 转 rgba
function hexToRgba(hex, alpha) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// 颜色加深（用于按钮渐变的第二个颜色）
function darken(hex, amount) {
  const h = hex.replace('#', '');
  const r = Math.max(0, Math.floor(parseInt(h.substring(0, 2), 16) * (1 - amount)));
  const g = Math.max(0, Math.floor(parseInt(h.substring(2, 4), 16) * (1 - amount)));
  const b = Math.max(0, Math.floor(parseInt(h.substring(4, 6), 16) * (1 - amount)));
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
}

// 自动选黑白文字以保证按钮对比度
function contrastText(hex) {
  return isLightColor(hex) ? '#000000' : '#FFFFFF';
}
```

---

## 四、主题切换的实现方式

主题信息存在 `<html>` 标签的 `data-theme` 属性上，CSS 用属性选择器命中。

### HTML 结构

```html
<html lang="zh-CN" data-theme="dark-forest">
  <head>
    <style>
      /* 5 套主题的 CSS 变量定义（全部内嵌，避免外链） */
      :root[data-theme="dark-forest"] { ... }
      :root[data-theme="dawn-beige"] { ... }
      :root[data-theme="deep-ocean"] { ... }
      :root[data-theme="sunset-coral"] { ... }
      :root[data-theme="pure-minimal"] { ... }
      
      /* 通用样式使用 var() */
      body {
        background: var(--bg);
        color: var(--text);
        font-family: var(--font-sans);
      }
    </style>
  </head>
</html>
```

### 用户传入 hex 的情况

如果用户传入 hex，直接在 `<head>` 内追加一个 `:root[data-theme="custom"] { ... }` 样式块（值来自上面的 `buildThemeFromHex(hex)` 输出），并把 `<html data-theme="custom">`。

---

## 五、视觉风格关键词约束（所有主题共享）

无论选哪套主题，**生成的网站必须遵守**以下视觉纪律：

1. **高级、克制、有呼吸感** —— 永远比"塞满"少 30%
2. **Hero 区必有一张主图** —— 16:9 或全屏，加 `--hero-gradient` 蒙版
3. **标题用衬线 Playfair Display** —— italic 强调用 `--primary` 色
4. **eyebrow 用 DM Sans 全大写** —— letter-spacing 0.18em，颜色 `--primary`
5. **卡片 hover 上浮 4px + 加 `--primary-glow` 阴影**
6. **按钮主 CTA 用 `--btn-cta-bg` 渐变胶囊**
7. **绝不滥用阴影、绝不使用 emoji 作为视觉重点**

---

## 六、生成网站时 AI 的执行清单

收到用户请求并确定主题后，AI 必须：

- [ ] 在 `index.html` 的 `<head>` 注入完整的 5 套主题 CSS 变量（即使用户只选 1 套，5 套都写进去，方便后续切换）
- [ ] 在 `<html>` 标签设置 `data-theme="{用户选的主题}"`
- [ ] 如果用户传入 hex，按算法生成 `custom` 主题块并追加到 5 套之后
- [ ] `admin.html` 和 `login.html` 同步注入相同的主题块
- [ ] 检查所有颜色都使用 `var(--xxx)`，不能硬编码任何颜色值

---

## 七、给评委的提示信息（写在生成的 README.md 中）

```markdown
## 🎨 主题系统

本作品集支持 5 套预设主题：
- 🌲 暗夜森林（默认，黑底+景观绿）
- 🌅 晨曦米色（米白底+深咖文字）
- 🌊 深海蓝调（靛蓝底+海蓝高亮）
- 🌇 暖阳橙红（奶白底+珊瑚橙）
- ⚪ 纯白极简（纯白底+纯黑字）

也支持传入任意 hex 颜色自动生成完整主题。

修改方式：在 `<html>` 标签上改 `data-theme` 属性即可，无需重新部署。
```
