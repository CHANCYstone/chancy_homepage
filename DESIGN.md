---
name: ChancyStone
description: "全站像素化的亮色个人作品集，超级马里奥式游戏 UI 美学——像素字体、方角、硬阴影、经典红蓝绿黄在白色画布上。"

colors:
  primary: "#E52521"
  secondary: "#049CD8"
  tertiary: "#43B047"
  accent: "#FBD000"
  neutral: "#FFFFFF"
  neutral-surface: "#F5F0E6"
  on-primary: "#FFFFFF"
  on-neutral: "#1A1A1A"
  success: "#43B047"
  warning: "#FBD000"
  error: "#E52521"
  muted: "#C4B99A"
  border: "#3E2723"

typography:
  h1:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: "1.4"
    letterSpacing: "0.02em"
  h2:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: "1.4"
  h3:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.4"
  body:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.8"
  caption:
    fontFamily: "'Press Start 2P', monospace"
    fontSize: "0.625rem"
    fontWeight: 400
    lineHeight: "1.6"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"

rounded:
  none: "0"

elevation:
  none: "none"
  pixel: "4px 4px 0 {colors.border}"
  pixel-sm: "2px 2px 0 {colors.border}"
  pixel-hover: "6px 6px 0 {colors.border}"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    typography: "{typography.body}"
    border: "4px solid {colors.border}"
    boxShadow: "{elevation.pixel}"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-neutral}"
    boxShadow: "{elevation.pixel-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    border: "4px solid {colors.border}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.on-neutral}"
    rounded: "{rounded.none}"
    border: "4px solid {colors.border}"
    boxShadow: "{elevation.pixel}"
    padding: "{spacing.lg}"
  card-hover:
    border: "4px solid {colors.primary}"
    boxShadow: "{elevation.pixel-hover}"
  badge:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
    typography: "{typography.caption}"
    border: "2px solid {colors.border}"
  input-text:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    border: "4px solid {colors.border}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  input-text-focus:
    border: "4px solid {colors.secondary}"
---

## Overview

ChancyStone 是一个全站像素化的个人作品集网站，灵感来自超级马里奥系列的经典 UI 美学。白色画布上用马里奥标志性的红、蓝、绿、黄建立视觉层次。所有元素——字体、边框、阴影、图标——遵循像素网格对齐，创造明快、欢乐的复古游戏体验。

核心气质关键词：**像素、马里奥、亮色、欢快、方角、经典游戏**。

面向 HR/招聘方的个人站，用像素游戏美学作为记忆锚点——"那个做像素风网站的开发者"。

## Colors

- **Primary (#E52521):** 马里奥红，经典主角色。用于主 CTA、重要高亮、活跃状态。
- **Secondary (#049CD8):** 马里奥蓝，天空/水管色调。用于类别标签、链接、次要交互。
- **Tertiary (#43B047):** 管道绿，用于成功状态、次要强调。
- **Accent (#FBD000):** 问号砖块黄，用于 hover 状态、星星/成就装饰、重点标注。
- **Neutral (#FFFFFF):** 纯白，主背景色——像马里奥关卡选择界面的干净画布。
- **Neutral-surface (#F5F0E6):** 羊皮纸色，卡片/面板表面色，像旧地图/关卡说明的质感。
- **On-primary (#FFFFFF):** 主色上的文字用白色。
- **On-neutral (#1A1A1A):** 背景上的主要文字色，近黑。
- **Border (#3E2723):** 深棕色，所有边框和像素阴影用这个色——像马里奥砖块的轮廓。
- **Muted (#C4B99A):** 非活跃边框、分割线、禁用状态。

## Typography

全站使用 **Press Start 2P**（Google Fonts 免费像素字体）。

- **H1 (2rem):** 页面标题，像游戏关卡名称
- **H2 (1.25rem):** 区块标题
- **H3 (1rem):** 卡片标题、子区块
- **Body (0.75rem):** 正文，像素字体在小尺寸下需要更大行距 (1.8) 保证可读性
- **Caption (0.625rem):** 日期、标签、辅助信息

## Layout

间距基于 **8px 网格**。

- 页面最大宽度：960px
- 主要内容区 padding：32px（桌面）/ 16px（移动端）
- 区块间距：48px
- 卡片网格：2-3 列（桌面）/ 1 列（移动端），gap 16px

## Elevation & Depth

**Level: pixel-hard**——用深棕色硬边像素阴影，像马里奥砖块的立体感。

- **pixel (4px 4px 0 border):** 主要卡片和按钮的投影
- **pixel-sm (2px 2px 0 border):** 小元素（badge、tag）的投影
- **pixel-hover (6px 6px 0 border):** hover 时阴影加大，像按钮被"顶起来"

不使用任何 blur shadow。

## Shapes

**一律方角 (border-radius: 0)**。像素美学的核心规则。

边框风格：**4px 实线深棕色 (#3E2723)**——像马里奥砖块轮廓。小元素用 2px。

视觉密度：**标准偏紧凑**。

## Components

### button-primary
马里奥红底 + 白字 + 深棕粗边框 + 硬像素阴影。Hover 时变问号砖块黄 + 阴影加大，像被顶了一下。

### button-secondary
白底 + 深棕边框。用于次要操作。

### card
羊皮纸底色 + 深棕边框 + 像素阴影。像游戏里的关卡说明板。Hover 时边框变红 + 阴影加大。

### badge
蓝色底 + 白字 + 2px 深棕边框。像游戏里的能力标签。

### input-text
白底 + 深棕边框输入框，focus 时边框变蓝。

## Do's and Don'ts

### Do's
- ✅ 所有视觉元素对齐 8px 像素网格
- ✅ 用像素艺术替代照片（头像、项目封面等）
- ✅ 边框统一用深棕色 (#3E2723) 4px 实线
- ✅ 用马里奥四色（红/蓝/绿/黄）建立视觉层次
- ✅ 交互反馈用游戏式语言（顶起、弹跳、颜色切换）

### Don'ts
- ❌ 不要渐变背景——像素风用纯色块
- ❌ 不要圆角——任何地方
- ❌ 不要 stock 照片——用像素艺术
- ❌ 不要模糊阴影——只用硬边像素阴影
- ❌ 不要 serif 或 humanist 字体——全站 pixel font
- ❌ 不要半透明 / glassmorphism

---

## Motion & Animation
**Level:** 丰富游戏感

**典型场景：**
- **Button hover:** 变黄 + 阴影加大，像问号砖块被顶
- **Card hover:** 边框变红 + 微微抬起（阴影增大）
- **页面加载:** 像素打字机效果逐字显示标题
- **滚动入场:** 元素从下方弹入，像蘑菇从砖块里冒出来
- **Hero 区:** 可选像素角色/场景动画作为装饰

## Responsiveness
**Breakpoints:**
- sm: 640px
- md: 768px
- lg: 960px

**Approach:** mobile-first
**移动端简化：** 卡片网格变单列，Hero 区动画简化或关闭，保持像素字体但适当调大 body 字号。

## Accessibility
**WCAG target:** AA
**Color contrast:** primary (#E52521) on neutral (#FFFFFF) = 4.6:1 ✅，on-neutral (#1A1A1A) on neutral (#FFFFFF) = 16.6:1 ✅
**Keyboard navigation:** 所有交互元素支持 focus ring（用 secondary 色 2px outline）
**prefers-reduced-motion:** 尊重系统设置，关闭所有动画

## UI Framework Considerations
**Requirements:**
- 全自定义像素组件，不依赖现成 UI 库的预设样式
- 支持 CSS custom properties 方便 token 管理
- 轻量

**Candidate libraries:**
- **Tailwind CSS + 全自定义组件** — Tailwind 提供 utility 基础但不强加样式
- **NES.css** — 像素/NES 风格 CSS 框架
- **自定义 CSS + CSS custom properties** — 最大灵活度

(Final selection deferred to ARCHITECTURE.md)

## References & Inspiration
**风格参考：**
- 超级马里奥系列 — 白色/蓝天背景 + 红蓝绿黄经典配色 + 砖块/管道 UI 元素
- Press Start 2P 字体 — Google Fonts 经典像素字体
- NES.css — 像素 CSS 框架的视觉参考

**用户灵感：** 超级马里奥的整体视觉——明亮欢快的画面、经典红蓝配色、砖块和问号方块的 UI 语言、像素字体
