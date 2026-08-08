# Agent Instructions

This repository is a personal academic homepage (GitHub Pages). Keep context focused on the live site, not legacy or standalone project pages.

## Excluded paths — do not read, search, or reference

Unless the user explicitly asks about a specific path below, do **not** open, grep, list, or use these as context:

| Path | Reason |
|------|--------|
| `worldmodel/` | Standalone project demo page |
| `Diff4Splat/` | Standalone project demo page |
| `HumanCrafter/` | Standalone project demo page |
| `paulpanwang/` | Local git clone for reference only (gitignored) |
| `archive` | Old homepage snapshot; superseded by `index.html` |

These paths contain outdated or unrelated content that can mislead edits to the current site.

## Focus areas

Work primarily in:

- `index.html` — current homepage
- `wechat.html` — WeChat page
- `css/`, `js/`, `images/` — site assets

When editing the homepage, treat `index.html` and its assets as the source of truth. Do not copy structure or content from excluded paths unless explicitly requested.

## Homepage design rules

The homepage should read as a professional personal academic/research homepage, not as a SaaS landing page, AI product page, or design demo.

- Keep the visual language restrained: light gray page background, white content shell, simple academic spacing, thin dividers, clear hierarchy, and content-first layout.
- Preserve the academic typography direction, but use a more modern system sans-serif stack for homepage body text: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif` unless the user explicitly asks for a font change.
- Use the Chenxin Li reference site's bold typography for homepage `<strong>` text: `'Lato', Verdana, Helvetica, sans-serif` with weight `700`. Keep this as a targeted bold-text override rather than changing the whole homepage body back to Lato unless the user explicitly asks.
- Do not introduce decorative frames, gold frames, gradient frames, glassmorphism, neon gradients, bento-heavy layouts, floating pills, large hero slogans, or marketing-style hero sections.
- Do not use crude generated SVG diagrams, placeholder SVG cards, abstract AI graphics, gradient blobs, decorative orbs, or generic stock-like placeholders on the homepage.
- If a project image is missing, do not invent low-quality placeholders. Prepare a clear raster-image prompt and target path under `images/`, then wait for the user to generate/provide the image unless the user explicitly asks Codex to generate it.
- Prefer real project media already in `images/` (`.jpg`, `.png`, `.mp4`) over synthetic diagrams. Project media should act as evidence for the work, not decoration.
- Keep interactions minimal. Avoid fixed nav bars, floating back-to-top buttons, scroll-reveal animations, card lift/scale effects, and other template-like motion unless the user explicitly requests them.
- Use cards only where they serve repeated visual media. For text-only links, prefer compact lists over boxed cards.
- Keep rounded corners subtle (`8px` or less). Avoid large radius pills except for inherited small badges already present in legacy content.
- Use emojis in section headings only when the user explicitly asks for them; keep them sparse and conventional, for example `📑 Selected Works`, `🌍 Agent Environments`, `💼 Selected Experience`, and `💬 Professional Activities`.
- Keep colors neutral. Links may use the existing academic blue (`#4169e1`); avoid orange hover accents, gold accents, and dominant purple/AI palettes.
- Keep homepage copy concise and professional. Reduce explanatory prose when a clear image or project media can carry the story.
- For the research-loop visual in the profile section, use the GPT-Image compact pipeline image `images/research-loop-pipeline-gpt-compact.png`, preserve its native `1100 / 401` aspect ratio, keep it centered relative to the surrounding text column, and keep it as a supporting visual around `450px` wide on desktop rather than a dominant hero. Do not reintroduce the text-only `.research-line` strip or low-quality placeholder diagrams for this element unless the user explicitly asks.
- Preserve lightweight legacy homepage effects that carry research metadata, especially `morphing-text` title prefixes and `pub_conf` conference labels. Do not remove conference labels from top-tier accepted works.

## Naming rules

- Use `PaulClawX` as the public display name for the GitHub organization/link. Do not rename it to `OpenClaw`.
- If linking to `https://github.com/PaulClawX`, the visible label should also be `PaulClawX` unless the user explicitly says otherwise.
- Keep direct contact details visible in the profile intro: `Email: paulpanwang@gmail.com` and `WeChat ID: PaulClaw`.
- Include the Xiaohongshu profile link `https://www.xiaohongshu.com/user/profile/5baf36b7e444a40001696184` in the profile links, using the local book icon `images/logos/xiaohongshu-book.svg`.
- For homepage RSI copy, do not directly promote unrelated Auto R&D Agent or On-Policy Data Evolution directions unless the user explicitly asks. The preferred framing is: `RSI for real-world agents: perceive continuously, interact with people and tools, observe outcomes, and use feedback to refine behavior.`
- For the Open RSI Lab cards, use `Digital-World RSI` with `images/digital-world-rsi-cover.png` and `Real-World RSI` with `images/real-world-rsi-cover.png`. Do not use the older abstract covers `images/browser-agent-cover.png` or `images/rsi-real-world-agents-cover.png` for this section unless the user explicitly asks.
- Open RSI Lab images should look like grounded real-life usage scenes. `Digital-World RSI` should visibly include search, query/database, browser-use, computer-use, phone-agent, CLI, and visual understanding/segmentation tools. `Real-World RSI` should visibly include smart glasses, autonomous driving, robotics, sensors, phones/computers, and open-environment feedback. Avoid abstract loop diagrams, fake AI-glow visuals, robot mascots, and non-intuitive generated-art covers.
- Use `Interactive & Proactive Agent` as the public display title for the IPIBench/IPI-Agent homepage entry. Do not rename it back to `IPIAgent` in visible homepage copy unless the user explicitly asks.
- In `Selected Experience`, always show company logos before company names when logo assets exist under `images/logos/`. Keep the logo small and aligned inline with the text using the `company-logo` class.
- In `Selected Experience`, link `ByteDance PICO/Seed` to `https://seed.bytedance.com/en/` and `Alibaba Cloud` to `https://www.alibabacloud.com/`.
- In `Selected Experience`, display NVIDIA as `NVIDIA` and link it to `https://www.nvidia.com/en-us/`; do not display it as `NVIDIA Developer Technology` in visible homepage copy unless the user explicitly asks.
- Keep `Selected Experience` city and employment details as: `ByteDance PICO/Seed — Beijing, China - Full-time Employee. 09/2022 - Present`; `Alibaba Cloud — Hangzhou, China - Full-time Employee. 07/2019 - 07/2022`, with `Senior Researcher, Cloud Intelligent Computing and Embodied AI`; `NVIDIA — Beijing, China - Intern. 07/2018 - 10/2018`.
- Link citation text to `https://scholar.google.com/citations?view_op=list_works&hl=en&user=cdfWZZ4AAAAJ&pagesize=80&sortby=pubdate`.
- On the homepage, prefer the simple static text link `1.1K+ citations`; do not use a citation badge or dynamic shields endpoint unless the user explicitly asks to restore it.
- Show GitHub stars badges only for repositories with at least 100 stars. Check the current star count before adding or keeping a badge; if a repo is below 100 stars, keep the Code/GitHub link but omit the stars badge.
- For the homepage focus bullet, prefer wording like `Research footprint: 7.6k+ GitHub stars across public repositories and 1.1K+ citations.`
- Keep the homepage highlights bullet with the label `Highlights`, not `Recognition`. It should include `17+ CVPR/ICCV/ECCV/NeurIPS/ICLR papers`, `30+ invention patents`, `NeurIPS Oral｜ICLR Spotlight`, `7.6K+ GitHub stars`, and `1.1K+ citations` unless the user explicitly asks to change these numbers.

## Reference style

- `/Users/posit/workspace/chenxinli.github.io` may be used as a style reference for clean academic homepage structure, spacing, and typography.
- Do not copy the gold frame or decorative treatment from that reference.
- `/Users/posit/workspace/ui-ux-pro-max-skill` may be used for general UX guardrails and anti-patterns, but do not blindly apply its flashy style catalog to this site. For this homepage, favor minimal/Swiss/academic rules over AI-native, glass, bento, or motion-driven aesthetics.

## Project source-of-truth rules

- Before writing or rewriting any project homepage entry, open and read the actual project homepage or paper supplied by the user. Do not infer project details from memory, filenames, previous homepage copy, or generic AI wording.
- Keep project summaries grounded in the source page. If a claim is not visible on the project homepage, paper, code page, or dataset page, leave it out or mark it as uncertain.
- For `SeedRealtime`, keep the visible links `Project`, `ModelCard`, and `Blog`; the `ModelCard` URL is `https://seed.bytedance.com/en/models?view_from=homepage_tab`.
- For `Interactive & Proactive Agent`, use these source links:
  - Project: `https://lijinzhao30.github.io/IPIBench/`
  - Image: `https://lijinzhao30.github.io/IPIBench/IPIBench.png`
  - Paper: `https://lijinzhao30.github.io/IPIBench/paper.pdf`
  - Code: `https://github.com/lijinzhao30/IPI`
  - Dataset: `https://huggingface.co/datasets/lijinzhao30/IPIBench`
  - Demo: `https://lijinzhao30.github.io/IPIBench/#demo`
- For `Interactive & Proactive Agent`, the homepage entry should state that IPIBench evaluates interactive proactive intelligence of MLLMs under continuous video streams, with task families including proactive monitoring, proactive task management, and interleaved reactive-proactive requests.
- The same entry may mention the project-page facts that IPIBench contains 1,831 continuous videos and 3,738 interactive QA instances, and that IPI-Agent is a training-free framework using interaction-control policy and temporal-gating mechanisms to improve existing offline MLLMs.
- For `SAM-Veteran: An MLLM-Based Human-like SAM Agent for Reasoning Segmentation`, use these source links:
  - Project: `https://paulpanwang.github.io/`
  - Video: `https://paulpanwang.github.io/images/sam-veteran.mp4`
  - Poster: `https://iclr.cc/media/PosterPDFs/ICLR%202026/10007418.png`
  - Paper: `https://openreview.net/pdf?id=oN55r8iJJW`
- Mark SAM-Veteran as `ICLR 2026` on the homepage and use `https://paulpanwang.github.io/images/sam-veteran.mp4` as the visible media. Keep the poster available as a text link. When a displayed work has a confirmed top-tier venue, include the venue label near the media using `pub_conf` or `work-conf`.
- For `JarvisArt`, keep the visible homepage links `Project`, `Demo`, `ModelCard`, `Dataset`, and `Code`. Use Demo `https://huggingface.co/spaces/LYL1015/JarvisArt-Preview`, ModelCard `https://huggingface.co/JarvisArt/JarvisArt-1208`, Dataset `https://camo.githubusercontent.com/f1837d7a920f6b332a7a74bd87b3e86db223d07be3352fc006a9ac3a49cc3495/68747470733a2f2f696d672e736869656c64732e696f2f62616467652ff09fa4972d446174617365742d626c75652e737667`, and Code `https://github.com/LYL1015/JarvisArt` unless the user supplies replacements.
- The `Agent Environments` section should include environment/world-model works such as `DynamicVerse`, `Ring Forcing`, `Diff4Splat`, `MoVieS`, `ID-Crafter`, and `PartCrafter` when space allows. Confirmed venue labels currently used there include `NeurIPS 2025` for DynamicVerse and PartCrafter, `ECCV 2026` for Ring Forcing, and `CVPR 2026` for Diff4Splat, MoVieS, and ID-Crafter.
- In the `Agent Environments` section, frame `PartCrafter` around scene generation and world-model environments, not as a generic 3D asset-generation item. Its visible title should be `PartCrafter: Structured 3D Mesh Generation via Compositional Latent Diffusion Transformers`, venue label `NeurIPS 2025`, and homepage card links should point to `https://github.com/wgsxm/PartCrafter`.
- Keep the NVIDIA internship in `Selected Experience` with the date `07/2018 - 10/2018`; do not drop this experience entry during homepage rewrites.
- Keep the Professional Activities section showing both conference reviewer service and Top Reviewer recognition for `NeurIPS 2025`, `ICLR 2025`, and `ICML 2026`.
- Keep the `🌱 Hobbies Beyond Work` section concise and personal. It should mention football, being a Messi fan, Argentina supporter, struck-through Barcelona supporter, struck-through Paris Saint-Germain supporter, and Inter Miami supporter. It should also mention badminton, Go, and marathon running unless the user explicitly asks to change it.
