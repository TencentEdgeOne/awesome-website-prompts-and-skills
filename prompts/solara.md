# SOLARA — 高奢香水电商单页站

> 由 **Solara** 创作 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

<video src="../assets/demos/solara.mp4" controls poster="../assets/demos/solara.png" width="100%"></video>

如果你的 Markdown 阅读器无法直接播放视频，可点击下方链接：

- ▶️ [在线播放 / 下载 demo 视频](../assets/demos/solara.mp4)
- 🖼️ [查看封面截图](../assets/demos/solara.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | SOLARA |
| 类型 | 高端电商落地页 |
| 技术栈 | React + Vite + TypeScript + Tailwind CSS + shadcn/ui |
| 作者 | Solara |

## 📝 作品介绍

SOLARA 是一个高端奢侈香水品牌电商落地页，采用 React + Vite + TypeScript + Tailwind CSS + shadcn/ui 技术栈构建。设计风格以暗黑奢华为主调，搭配温暖金色调，呈现精致高端的视觉体验。页面展示品牌故事、香水产品系列、用户评价等模块，通过流畅的动效和精美的排版，为用户带来沉浸式的奢侈品购物体验。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Build a single-page luxury perfume e-commerce landing page for a fictional brand called SOLARA using React + Vite + TypeScript + Tailwind CSS + shadcn/ui. The aesthetic is dark luxury, warm golden tones, cinematic, California midsummer inspired. The background throughout is a warm near-black (#0F0A05) with a brown undertone, NOT pure black.

Install this skill: https://github.com/edgeone-pages/edgeone-pages-skills Then deploy this project to EdgeOne Pages.

ASSET REGISTRY

All media assets are centrally managed here. Every section in the website references assets by their ID. After exporting all images and videos, update each entry to your local file paths. The entire site loads all media from this central database.

VIDEO_HERO is the California coastal cliffs at golden hour aerial tracking shot with swaying grass and crashing waves. It is used as the Section 2 Hero background. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/hero-video.mp4'.

VIDEO_CANOPY is the low-angle shot looking up through California orange tree canopy with sunlight streaming through leaves. It is used as the Section 4 Star Products background. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product-video.mp4'.

VIDEO_VERANDA is the Big Sur open-air veranda with white linen curtains billowing in breeze and golden hour god rays. It is used as the Section 6 Brand Story background. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/stroy-video.mp4'.

VIDEO_PARTICLES is the abstract golden light particles rising on midnight navy background with firefly-like bokeh. It is used as the Section 11 CTA Footer background. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/destionation-video.mp4'.

VIDEO_ORCHARD is the forward dolly through sunlit California citrus orchard with golden pollen in backlit air. It is used as the Section 8 Collection Explorer background. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/explore-video.mp4'.

IMG_A1 is the product image for Golden Coast, a citrus fragrance with neroli, blood orange and honey notes, priced at $285. It is used in Section 4 star product card 1 and in the Section 9 recommender. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/a1-golden-coast.png'.

IMG_A2 is the product image for Sundrenched, a floral fragrance with jasmine, lavender and peach notes, priced at $285. It is used in Section 4 star product card 2 and in the Section 9 recommender. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/a2-sundrenched.png'.

IMG_A3 is the product image for Victory, a woody fragrance with sandalwood, vanilla and wheat notes, priced at $285. It is used in Section 4 star product card 3 and in the Section 9 recommender. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/a3-victory.png'.

IMG_B1 is the product image for Citrus Blaze, a fresh citrus fragrance priced at $185. Used in Section 5 product grid position 1. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b1-citrus-blaze.png'.

IMG_B2 is the product image for Pacific Mist, a marine fragrance priced at $195. Used in Section 5 product grid position 2. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b2-pacific-mist.png'.

IMG_B3 is the product image for Rose Garden, a rose floral fragrance priced at $210. Used in Section 5 product grid position 3. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b3-rose-garden.png'.

IMG_B4 is the product image for Fig Leaves, a green fresh fragrance priced at $175. Used in Section 5 product grid position 4. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b4-fig-leaves.png'.

IMG_B5 is the product image for Midnight Amber, an oriental fragrance priced at $245. Used in Section 5 product grid position 5. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b5-midnight-amber.png'.

IMG_B6 is the product image for Peach Sunset, a fruity fragrance priced at $195. Used in Section 5 product grid position 6. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b6-peach-sunset.png'.

IMG_B7 is the product image for Cedarwood Sun, a woody fougere fragrance priced at $220. Used in Section 5 product grid position 7. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b7-edarwood-sun.png'.

IMG_B8 is the product image for White Linen, a clean musk fragrance priced at $165. Used in Section 5 product grid position 8. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/product/b8-white-linen.png'.

IMG_L1 is a lifestyle scene photo of a California beach at golden hour with a blanket, book, hat and perfume bottle on sand. Used in Section 7 gallery image 1. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/scene/golden-hour-at-california-beach.mp4'.

IMG_L2 is a lifestyle scene photo of a terrace dinner at sunset with table setting, candles, orange blossoms and perfume. Used in Section 7 gallery image 2. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/scene/dinner.mp4'.

IMG_L3 is a lifestyle scene photo of a luxury bathroom morning with marble vanity, sunlight, peonies and perfume bottle. Used in Section 7 gallery image 3. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/scene/bath.mp4'.

IMG_L4 is a lifestyle scene photo of a vintage convertible on a coastal highway with leather seat, scarf and perfume bottle. Used in Section 7 gallery image 4. 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/solara-website/scene/car.mp4'.

LOGO_SVG is the SOLARA brand logo consisting of 8 thin gold lines radiating at varying lengths from a small center circle, plus the word SOLARA in ultra-thin uppercase sans-serif. This should be generated as inline SVG directly in the code.

HERO_POSTER is a fallback poster image for the hero video, essentially a screenshot of the first frame. URL is YOUR_URL_HERE.

FONTS AND DESIGN SYSTEM

Import from Google Fonts: Cormorant Garamond at weights 400, 500, and 600 italic for headings, and Inter at weights 300, 400, 500, and 600 for body text.

In the Tailwind config, extend fontFamily so that heading maps to Cormorant Garamond serif and body maps to Inter sans-serif.

Set CSS variables on root in index.css as follows. The background variable is 30 20% 4% which is a near-black warm tone. The foreground variable is 40 30% 90% which is warm ivory for text. The primary variable is 38 70% 47% which is molten gold hex C8922A. The primary-foreground is 30 20% 4%. The secondary is 16 75% 60% which is sunset orange hex E8734A. The accent is 35 60% 88% which is champagne ivory hex F5E6C8. The border is 38 70% 47% at 0.2 opacity for a gold border at 20 percent. The radius is 0px for sharp luxury edges with no rounding. The font-heading variable is Cormorant Garamond serif and font-body is Inter sans-serif.

All headings throughout the site use font-heading italic text-foreground tracking-tight leading-[0.9]. All body text uses font-body font-light text-foreground/60 text-sm. All buttons use font-body uppercase tracking-[0.2em] text-xs with sharp edges and absolutely no border-radius.

GOLDEN GLASS CSS

Define two CSS classes in the @layer components block.

The golden-glass class is the subtle variant. It has background rgba(200,146,42,0.03), background-blend-mode luminosity, backdrop-filter blur(8px), no border, box-shadow inset 0 1px 1px rgba(200,146,42,0.15), position relative, and overflow hidden. It also has a before pseudo-element that creates a gradient border mask effect. The pseudo-element is position absolute inset 0, border-radius inherit, padding 1px, with a background linear-gradient at 180 degrees going from rgba(200,146,42,0.5) at 0 percent to rgba(200,146,42,0.2) at 20 percent to transparent in the middle (40 to 60 percent) then back to rgba(200,146,42,0.2) at 80 percent and rgba(200,146,42,0.5) at 100 percent. It uses webkit-mask with two linear-gradient white layers and webkit-mask-composite xor plus mask-composite exclude to create the border-only effect. Pointer-events is set to none.

The golden-glass-strong class is the prominent variant. It is the same structure but with backdrop-filter blur(40px), a stronger box-shadow of 4px 4px 8px rgba(0,0,0,0.1) plus inset 0 1px 2px rgba(200,146,42,0.25), and higher gradient opacity values of 0.6 and 0.3 in the before pseudo-element.

SECTION 1 — NAVBAR

This is a fixed navbar at top-6, full-width, z-50. On the left side is the SOLARA logo rendered as inline SVG using the LOGO_SVG asset definition — 8 thin gold lines radiating at varying lengths from a small center circle, followed by the text SOLARA in ultra-thin uppercase sans-serif at 24px in the primary gold color. On the center-right is a golden-glass rounded-full pill containing navigation links for Fragrances, Collections, Our Story, and Atelier, styled as text-xs uppercase tracking-[0.15em] font-medium text-foreground/80. After the nav links there is a solid gold button with bg-primary text-primary-foreground that says Shop Now with an ArrowUpRight icon from lucide-react. The button has no border-radius — sharp rectangular luxury aesthetic.

SECTION 2 — HERO

The container is relative overflow-hidden, height 100vh, with the warm black background.

The background video uses asset VIDEO_HERO. It is positioned absolute inset-0 with w-full h-full object-cover at z-0. It autoplays, loops, is muted, and has playsInline. The poster fallback image uses asset HERO_POSTER.

There are two overlays. The first is absolute inset-0 with a bg-gradient-to-b from-black/40 via-transparent to-black/80 at z-[1]. The second is at the bottom: absolute bottom-0 left-0 right-0 at z-[2], height 400px, with a linear-gradient going from transparent to rgba(15,10,5,1).

The content is at z-10, centered vertically, with paddingTop at 30vh. First is a brand badge using golden-glass px-4 py-2, containing a small gold dot plus the text SOLARA · California in text-xs uppercase tracking-[0.3em]. Next is the heading which uses a BlurText animation component. The text reads Born from California Sunlight. The heading is styled as text-5xl on small screens, md:text-6xl on medium, and lg:text-[6.5rem] on large, with font-heading italic text-foreground leading-[0.85] tracking-[-2px]. It animates word-by-word from bottom with a blur-to-clear effect at 120ms delay per word. Below is a subtext paragraph using motion.p that says Luxury fragrances distilled from golden coast air, sun-warmed citrus groves, and the spirit of endless summer. It fades in with blur at 1 second delay, styled as text-lg font-light text-foreground/50. Then there are two CTA buttons appearing at 1.3 second delay: a golden-glass-strong button saying Explore Collection with an ArrowUpRight icon, and a ghost button with border border-primary/30 saying Our Story.

The BlurText component uses motion/react which is framer-motion. It splits the text by words and each word animates via IntersectionObserver. The filter goes from blur(12px) to blur(4px) to blur(0px), opacity goes from 0 to 0.6 to 1, and y goes from 40 to -3 to 0. The step duration is 0.4 seconds.

SECTION 3 — BRAND MANIFESTO BAR

Full-width section with py-20 and warm black background. It contains a centered single line of text reading Triumph. Radiance. California. styled as text-3xl on small screens, md:text-4xl on medium, lg:text-5xl on large, with font-heading italic text-primary tracking-tight and a subtle golden text-shadow glow effect. Below it is a thin decorative gold line that is 80px wide and 1px in height using bg-primary/40 as a divider.

SECTION 4 — STAR PRODUCTS

Full-width section with min-height 100vh, py-32, and horizontal padding px-6 md:px-16 lg:px-24.

The background video uses asset VIDEO_CANOPY. It is positioned absolute with full cover at z-0 and object-cover. There are fade gradients at the top and bottom, each 250px in height, transitioning between warm black and transparent.

The content is at z-10. First is a badge using golden-glass px-3 py-1 that reads Signature Collection in text-xs uppercase tracking-[0.2em]. The heading says The Essentials at text-4xl md:text-5xl lg:text-6xl font-heading italic. The subtext reads Three defining fragrances. Each captures a different moment of California's golden summer.

Below are three product cards in a grid with grid-cols-1 on mobile and md:grid-cols-3 with gap-8 and mt-16. Each card uses golden-glass-strong with p-8. Inside each card: the product image is tall and centered at 280px height. The first card uses asset IMG_A1 with the name Golden Coast, the fragrance family Citrus · Neroli · Honey in text-xs uppercase tracking-[0.2em] text-primary, the price $285 in text-lg font-body text-foreground/80, and an Add to Cart button with border border-primary/40 text-primary text-xs uppercase tracking-[0.2em] px-6 py-3 and a hover effect that changes to bg-primary text-primary-foreground with transition-all. The second card uses asset IMG_A2 with the name Sundrenched and the family Floral · Jasmine · Peach. The third card uses asset IMG_A3 with the name Victory and the family Woody · Sandalwood · Vanilla.

SECTION 5 — PRODUCT GRID

This section has py-32 and horizontal padding px-6 md:px-16 lg:px-24 with the warm black background. The header has a badge reading Full Collection and a heading that says Discover Your Scent.

There are eight product cards in a grid with grid-cols-2 on mobile and md:grid-cols-4 with gap-6. Each card is a group element. Inside each card is an image container with golden-glass aspect-[3/4] overflow-hidden that holds the product image. On hover the image scales to 105 percent with transition-transform duration-700. Below the image is the product name in font-heading italic text-lg text-foreground, the fragrance type in text-xs text-foreground/40 uppercase, and the price in text-sm text-primary. On hover a golden border appears using group-hover:border-primary/40.

There are eight product cards in a grid with grid-cols-2 on mobile and md:grid-cols-4 with gap-6. Each card is a group element. Inside each card is an image container with golden-glass aspect-[3/4] overflow-hidden that holds the product image. On hover the image scales to 105 percent with transition-transform duration-700. Below the image is the product name in font-heading italic text-lg text-foreground, the fragrance type in text-xs text-foreground/40 uppercase, and the price in text-sm text-primary. On hover a golden border appears using group-hover:border-primary/40.

The eight products in order are: Citrus Blaze at $185 using asset IMG_B1, Pacific Mist at $195 using IMG_B2, Rose Garden at $210 using IMG_B3, Fig Leaves at $175 using IMG_B4, Midnight Amber at $245 using IMG_B5, Peach Sunset at $195 using IMG_B6, Cedarwood Sun at $220 using IMG_B7, and White Linen at $165 using IMG_B8.

SECTION 6 — BRAND STORY

Full-width section with min-height 80vh and py-32.

The background video uses asset VIDEO_VERANDA. It is positioned absolute with full cover at z-0. There are top and bottom warm black fades at 250px. The video has an inline style of opacity 0.6 so the overlaid text can breathe.

The content is at z-10, constrained to max-w-3xl with mx-auto and centered text. The badge reads Our Story. The heading says Where the sun meets the sea. styled at text-4xl md:text-5xl lg:text-6xl font-heading italic. Below are two to three short story paragraphs in text-base font-light text-foreground/60 leading-relaxed. The story is about SOLARA's founding on the California coast, the pursuit of capturing golden hour in a bottle, and the fusion of artisan perfumery with the Californian spirit of triumph and radiance. After the paragraphs is a button using golden-glass-strong that says Learn Our Story with an ArrowRight icon.

SECTION 7 — LIFESTYLE GALLERY

This section has py-32 and horizontal padding px-6 md:px-16 lg:px-24 with the warm black background. The badge reads The SOLARA Life and the heading says Moments Worth Bottling.

There are four images in a staggered grid using grid grid-cols-2 gap-4. The first image using asset IMG_L1 and the third image using IMG_L3 have aspect-[3/4] for a tall portrait format. The second image using IMG_L2 and the fourth image using IMG_L4 have aspect-[4/3] for a wide landscape format. This creates visual rhythm and avoids a boring uniform grid. Each image container is golden-glass with overflow-hidden and the image fills the container using object-cover. On hover a subtle golden border appears. Below each image is a brief caption in text-xs text-foreground/40 italic font-heading.

SECTION 8 — COLLECTION EXPLORER

Full-width section with min-height 80vh and py-32.

The background video uses asset VIDEO_ORCHARD. It is positioned absolute with full cover at z-0. There are top and bottom warm black fades at 250px.

The content is at z-10. The badge reads Explore. The heading says Find Your Golden Hour at text-4xl md:text-5xl lg:text-6xl font-heading italic. Below are four collection cards in a grid with grid-cols-2 on mobile and md:grid-cols-4 with gap-6 and mt-16. Each card uses golden-glass-strong with p-6 and text-center alignment. Inside each card is an emoji icon at text-3xl, a collection name in font-heading italic text-xl text-foreground, a count in text-xs text-foreground/40, and an arrow link.

The four collections are: a sun emoji with Citrus and Sun showing 4 fragrances, a flower emoji with Florals showing 3 fragrances, a tree emoji with Woods and Amber showing 3 fragrances, and a sparkle emoji with Fresh and Clean showing 2 fragrances.

SECTION 9 — FRAGRANCE RECOMMENDER POWERED BY EDGEONE PAGES EDGE FUNCTION

This section is the interactive highlight of the website. It is powered by EdgeOne Pages Edge Functions plus KV Storage. It provides a personalized fragrance recommendation based on user mood, season, and intensity preference.

The design is a full-width section with py-32 and warm black background. There is a subtle golden particle animation done purely with CSS — small gold dots floating slowly upward using keyframe animations.

The badge uses golden-glass with a sparkle icon and says AI-Powered. The heading reads Your Perfect Scent, Discovered. at text-4xl md:text-5xl lg:text-6xl font-heading italic. The subtext says Tell us about your mood. Our fragrance algorithm finds your match in seconds.

The interactive component is a three-step selector. Step 1 is Mood with four golden-glass cards: Energized with a sun emoji, Romantic with a rose emoji, Confident with a trophy emoji, and Serene with a wave emoji. Step 2 is Season with four options: Summer, Spring, Autumn, and Winter. Step 3 is Intensity with three options: Whisper, Statement, and Bold.

When the user makes all three selections and submits, the frontend calls GET /api/recommend with query parameters mood, season, and intensity.

The result display is a golden-glass-strong card that animates in using framer-motion with scale from 0.95 to 1 plus opacity from 0 to 1. Inside the card: the recommended product image pulled from the asset registry by matching the product ID to the correct IMG asset, the product name in font-heading italic text-3xl, a Why this scent explanation in text-sm text-foreground/60, a match percentage in text-primary text-4xl font-heading showing something like 94% Match, an Add to Cart button and a Try Another button, and a small live counter that reads something like 47 people recommended this fragrance today which is powered by the KV storage counter.

For the Edge Function implementation, create the file edge-functions/api/recommend.js. It exports an onRequestGet function. Inside the file define a FRAGRANCES array containing all 11 products. Each product has an id string, name string, family string, an array of matching moods, an array of matching seasons, an array of matching intensities, a price number, an image path pointing to /images/products/ directory matching the asset registry, and a description string. Write a scoreFragrance function that gives 40 points if the user's mood is in the product's mood array, 35 points if the season matches, and 25 points if the intensity matches. The handler reads the mood, season, and intensity query parameters from the request URL, scores all fragrances, sorts them by score descending, picks the top match, and calculates a match percentage between 72 and 98. Then it tries to increment a recommendation counter using the KV Storage global variable my_kv with a key formatted as recommend followed by the product id followed by today's date in YYYY-MM-DD format. If KV is not available it falls back to a random number. The function returns a JSON response with a recommendation object containing id, name, family, description, price, image, matchPercent, and todayCount, plus an alternatives array with the top 3 runners-up. Important: do NOT use Response.json() as it does not exist in the V8 runtime — always use new Response(JSON.stringify(data)) with Content-Type application/json header. Do NOT use any Node.js modules or npm packages. The KV namespace my_kv is a global variable and is NOT accessed through context.env. All KV operations must be awaited.

Also create edge-functions/api/stats.js that exports an onRequestGet function. It lists all KV keys with the prefix recommend, filters for today's date, sums the counts, and returns a JSON response with totalRecommendationsToday.

SECTION 10 — TESTIMONIALS

This section has py-32 and horizontal padding px-6 md:px-16 lg:px-24 with warm black background. The badge reads Voices and the heading says What They're Saying.

There are three testimonial cards in a three-column grid. Each card uses golden-glass with p-8. The quote text is styled as text-foreground/70 font-body font-light text-sm italic. There is a row of 5 gold star icons. The person's name is in text-foreground font-heading italic text-lg and the city is in text-foreground/30 font-body text-xs uppercase tracking-[0.1em].

The first testimonial is from Sofia M. in Los Angeles who says Golden Coast is liquid California. I have never received more compliments. It is sunshine in a bottle. The second is from Marcus T. in San Francisco who says Victory made me feel unstoppable. The sandalwood lingers for hours like a warm embrace. The third is from Elena R. in Malibu who says Sundrenched is my wedding fragrance. Ethereal, romantic, unforgettable.

SECTION 11 — CTA FOOTER

The background video uses asset VIDEO_PARTICLES. It is positioned absolute with full cover at z-0. There is a top warm black fade at 250px.

The content is at z-10, centered, with py-40. The heading reads Your Golden Hour Awaits. at text-5xl md:text-6xl lg:text-7xl font-heading italic. The subtext says Free shipping on all orders. 30-day return guarantee. Crafted in California. There are two buttons: a golden-glass-strong button saying Shop Collection, and a solid button with bg-primary text-primary-foreground saying Gift a Fragrance. Below the buttons is an email signup area with a golden-glass styled input field and a Subscribe button. The label reads Join the SOLARA circle for early access and exclusive scents.

The footer itself is at mt-32 pt-8 with border-t border-primary/10. The top row has the SOLARA logo on the left using the LOGO_SVG asset and social icons for Instagram, Pinterest, and TikTok on the right, styled as text-foreground/30 with hover:text-primary. The middle section has three navigation columns. The Shop column has links for All, Citrus, Floral, Woody, and Fresh. The About column has links for Story, Atelier, Sustainability, and Press. The Help column has links for Shipping, Returns, Contact, and FAQ. The bottom row is styled as text-foreground/20 text-xs and shows the copyright 2026 SOLARA California with all rights reserved, plus Privacy and Terms links.

DEPENDENCIES

The project needs react and react-dom at version 18 or higher, motion at version 11 or higher which is framer-motion, lucide-react at latest, radix-ui/react-slot at latest, class-variance-authority at latest, clsx at latest, tailwind-merge at latest, and tailwindcss-animate at latest.

KEY PATTERNS

All section badges use golden-glass px-3.5 py-1.5 text-xs uppercase tracking-[0.2em] font-medium text-foreground/80 font-body inline-block mb-6.

All section headings use text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9].

All video sections use a standard HTML video tag with autoplay loop muted playsInline attributes. Use mp4 format directly, no HLS streaming needed. All video fades are 250px in height using a linear-gradient from rgba(15,10,5,1) to transparent at both top and bottom of each video section.

The outer page wrapper uses bg-[#0F0A05] which is a warm near-black with a brown undertone. This is very important — do not use pure black. The button style is no border-radius at all, with sharp rectangular edges for a luxury fashion aesthetic. All hover effects use transition-all duration-500 for slow elegant transitions. The gold accent color C8922A is used sparingly — only on borders, text highlights, hover states, and the logo. All product images should have a subtle warm tint that matches the golden palette.

EDGEONE PAGES DEPLOYMENT

The project structure has a src directory containing all React components: Navbar, Hero, BlurText, Manifesto, StarProducts, ProductGrid, BrandStory, LifestyleGallery, CollectionExplorer, FragranceRecommender (the Edge Function powered section), Testimonials, and CTAFooter, plus a ui subdirectory for shadcn components, and the main App, index.css, and main entry files.

The edge-functions directory contains an api subdirectory with recommend.js for the fragrance recommendation API and stats.js for the recommendation statistics API.

The public directory contains images/products/ for all product images, images/lifestyle/ for scene images, and images/videos/ for video files if self-hosted.

Root files include index.html, package.json, tailwind.config.ts, tsconfig.json, and vite.config.ts.

For KV Storage setup: in the EdgeOne Pages console, enable KV Storage, create a namespace called solara-recommendations, and bind it to the project with the variable name my_kv.

To deploy, run npx edgeone pages deploy.

ANIMATION PATTERNS

The BlurText animation for the Hero heading reveals words one by one from bottom with a blur dissolve effect. The FadeInUp animation for all section content starts at opacity 0 and y 30 then animates to opacity 1 and y 0 with a transition duration of 0.8 seconds and easeOut easing. Product cards use whileHover with y at -8 and transition duration 0.4 seconds. Grid items use stagger children at 0.1 seconds from their parent. Video section content fades in only when it enters the viewport using IntersectionObserver. The recommender result card uses a scale animation from 0.95 to 1 plus opacity from 0 to 1 with a spring animation on appear.

RESPONSIVE BREAKPOINTS

On mobile screens below 768px: single column layout, smaller headings at text-3xl, product grid stacks to 2 columns, and navigation links are hidden behind a hamburger menu. On tablet screens from 768 to 1024px: 2-column layouts with medium-sized headings. On desktop screens above 1024px: the full layout as described in all sections above, with a max-w-7xl container constraining content sections.
```
