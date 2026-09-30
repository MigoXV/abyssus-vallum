# Figma 与前端落地

## Figma Variables

建议建立 3 组 Variables：

1. `Primitive/Abyssus`
2. `Primitive/Vallum`
3. `Semantic`，包含两个 Mode：`Abyssus` 与 `Vallum`

组件只引用 `Semantic`，不要直接引用 Primitive。这样一套组件即可切换双主题。

推荐变量名：

- `color/bg/primary`
- `color/bg/secondary`
- `color/surface/default`
- `color/surface/subtle`
- `color/state/selected`
- `color/state/hover`
- `color/border/default`
- `color/border/strong`
- `color/text/primary`
- `color/text/secondary`
- `color/text/tertiary`
- `color/accent/default`
- `color/accent/strong`
- `color/accent/muted`
- `color/focus`

对应值以 `assets/tokens/tokens.dtcg.json` 为准。

## 前端架构

推荐只维护一套 DOM / Component Tree，通过根节点主题属性切换：

```html
<html data-theme="vallum">
```

或：

```html
<html data-theme="abyssus">
```

所有业务组件引用语义变量：

```css
.project-row {
  color: var(--text-primary);
  border-bottom: 1px solid var(--border);
}
.project-row:hover { background: var(--hover); }
```

禁止：

```css
.project-row { color: #252A2A; }
```

因为这会破坏主题切换和后续版本治理。

## 接入适配层

原始 CSS 包含 `html, body`、`::selection` 和 `:focus-visible` 全局规则。整页接入时在 `html` 设置主题；嵌入局部界面时，将这些规则限定到容器，避免影响宿主页面。

主按钮不能直接在两主题都使用 `accent`。在目标项目的适配层建立别名，不修改原始 Token：

```css
[data-theme="vallum"] {
  --button-primary-bg: var(--av-ink-bone);
  --button-primary-text: var(--av-pale-stone);
  /* 仅当组件需要时补齐；复用已有表面色。 */
  --surface-raised: var(--surface);
}
[data-theme="abyssus"] {
  --button-primary-bg: var(--accent);
  --button-primary-text: var(--on-accent);
}
.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
}
```

白垣原始 Token 没有 `surfaceRaised`，使用该角色的跨主题组件应按上例适配。Figma 可将同一角色映射到白垣 `surface`。DTCG 原始文件使用 HEX 字符串；若导入器要求其他颜色表示，在目标交付物中转换并核对数值。

文字角色也需结合背景选择：`textTertiary`、状态色及 `accentStrong` 并非在所有表面上都适合小字，具体边界见 [可访问性说明](ACCESSIBILITY.md)。

## 建议工程约束

- 建立 lint 规则或代码审查约定：业务组件禁止出现品牌 HEX。
- 允许状态色 HEX 只存在 Token 层。
- 主题切换只修改 `data-theme`，不加载第二套组件。
- SVG 图标默认使用 `currentColor`。
- Chart 颜色通过统一 mapping 注入，不在图表配置中散写。
