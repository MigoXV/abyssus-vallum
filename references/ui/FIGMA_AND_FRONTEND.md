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

## 建议工程约束

- 建立 lint 规则或代码审查约定：业务组件禁止出现品牌 HEX。
- 允许状态色 HEX 只存在 Token 层。
- 主题切换只修改 `data-theme`，不加载第二套组件。
- SVG 图标默认使用 `currentColor`。
- Chart 颜色通过统一 mapping 注入，不在图表配置中散写。
