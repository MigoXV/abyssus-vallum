# 组件规范

## Sidebar

- 宽度：232–256px；推荐 248px。
- 不使用整块品牌蓝/绿作为背景。
- 当前项：低饱和 selected 背景 + 主文字。
- 非当前项：透明背景，hover 使用 hover token。
- 分组标题 12px，弱化处理。

## Button

### Primary

白垣：墨骨 `#252A2A` 背景，石素文字。  
苍渊：初光 `#9FC4E2` 背景，深渊文字。

- 高度：40px。
- 水平 padding：16px。
- 圆角：8px。
- 不做强阴影。

### Secondary

透明/Surface 背景 + 1px border。Hover 仅改变背景和边框，不做强色填充。

## Input / Search

- 高度：40px。
- 边框 1px。
- Focus 只允许 2px 外描边或轻微边框增强。
- 不使用大面积 glow。

## Table / List

这是白垣主题的核心组件。

- 优先“整行列表 + 细分隔线”，而不是每一行一张卡片。
- 行高 64–88px，取决于信息密度。
- Hover 只加一层极淡的雾青。
- 操作入口靠右对齐，保证扫描路径稳定。

## Card

- 只在信息确实具有独立边界时使用。
- 默认采用 border，不采用高程阴影。
- 不允许首页出现十几个视觉权重相同的卡片。

## Tabs

- 文字 + 底边/细线优先。
- 避免每个 Tab 都做成 pill。

## Charts

苍渊：
- 主曲线：First Light `#9FC4E2`
- 次曲线：Startrace `#607D99`
- 网格：Forged Blue 低透明度

白垣：
- 主曲线：Rampart Shade `#637774`
- 次曲线：Verdigris Frost `#AFC2BC`
- 网格：`#D8DCD7`

## Status

Success / Warning / Danger 只表达真实状态。默认灰或主题色比“到处都是红黄绿”更优先。
