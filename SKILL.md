---
name: abyssus-vallum
description: 规范“苍渊·白垣 / ABYSSUS · VALLUM”的配色与设计风格，应用锁定的双主题色值、语义 Token、字体、布局、组件和文化叙事。用于用户要求采用苍渊、白垣或这套视觉体系制作、改造、审核网页、工具界面、仪表盘、Figma 设计或品牌材料，以及已采用该体系的项目后续设计。不要仅因一般编程、普通配色问题或其他品牌的设计任务而触发。
---

# 苍渊·白垣设计规范

将本技能作为跨工具的视觉约束层。依据用户任务设计、实现或审查作品；按需配合网页、Figma、演示文稿、图像等制作技能。不要自动创建训练平台、增加示范页面、重构业务或发布作品。只做用户当前要求的交付物。

## 执行流程

1. 识别作品类型、已有结构、当前主题及任务范围。查看已有代码或作品后再改动。管理、配置、资产、文档类新界面默认白垣；监控、信号、实验类可选择苍渊；保留用户明确指定的主题。只有任务需要时才提供双主题切换。
2. 先读 [颜色规范](references/brand/COLOR_SPEC.md)、[UI 原则](references/ui/UI_PRINCIPLES.md)和 [CSS Tokens](assets/tokens/tokens.css)。实现前读取 [结构化 Tokens](assets/tokens/tokens.dtcg.json)。品牌表达再读 [文化叙事](references/brand/BRAND_NARRATIVE.md)。不要一次加载全部图片和文档。
3. 将颜色映射到背景、表面、边框、文本、选中、悬停、强调、焦点的语义角色。实现组件时读 [组件规范](references/ui/COMPONENT_SPEC.md)；前端/Figma 落地读 [变量映射](references/ui/FIGMA_AND_FRONTEND.md)。优先用现有组件体系，集中接入 Token。
4. 以留白、对齐、细分隔线和信息密度建立层级。先解决布局与操作入口，再加少量色相；避免以增加彩色卡片解决结构问题。保留已有信息架构，除非用户明确要求调整。
5. 对实际交付物执行下方验收。有运行环境时渲染检查；没有时明确仅完成静态审查。简短说明采用的主题、主要设计变化和未验证项。

## 不漂移的设计核心

- 固定总名“苍渊·白垣”，日常拉丁名“ABYSSUS · VALLUM”，口号“探于苍渊，筑于白垣。”。需要完整命名规则时读 [命名](references/brand/NAMING_AND_LANGUAGE.md)。
- 保持“探索未知 → 建立并保存秩序”的叙事。将黑理解为未知，蓝理解为被识别的规律，米白理解为文明结构，淡青理解为时间与材料的痕迹。不要简化为科技蓝、清新绿或黑白善恶。
- 遵循“不要添加颜色，给灰色一点色相”。让中性色承担主体，色相服务真实信息；视觉占比是指导，不是机械面积配额。
- 保持极简、低卡片化、清晰对齐、低饱和；避免大色块、强投影、玻璃拟态、超大圆角、霓虹、无意义发光与大面积渐变。
- 使用等线风格无衬线 UI 字体；中文优先 Noto Sans SC / 思源黑体 / 系统黑体，西文数字用 Inter / system-ui。仅在品牌海报或章节标题少量使用宋体；不要默认采用尖锐装饰字体。
- 遵循 8px 间距基准、40px 常规控件（紧凑 32px）、6/8px 圆角、大容器最多 12px、1px 边框。根据移动端和内容密度适配布局，不把桌面侧栏宽度强加到窄屏。
- 苍渊与白垣各有六个核心色。星笺 / Starleaf `#E7EEF4` 沿用苍渊主文字色，表达可阅读与传递的知识；初光保持关键强调角色，星笺不用于大面积铺底。
- 白垣主操作使用墨骨背景与石素文字；苍渊主操作使用初光背景与深渊文字。不要把白垣 accent 直接当成主按钮背景。
- 品牌叙事服务气质，操作文案保持具体。不要把“保存”“运行”等业务动作改成诗性隐喻。需要宣传语言时读 [品牌语言](references/brand/BRAND_VOICE.md)。

## 数值与资源治理

以 `assets/tokens/tokens.dtcg.json` 和 `assets/tokens/tokens.css` 为数值真源；JSON/TypeScript 为便利导出。颜色名称与使用边界看颜色规范，组件规则看 UI 文档，精确色卡用于人工核对，生成图只作气质参考。若数值源互相冲突，说明具体冲突，不能静默挑选或从图中重采样覆盖。

直接复用 [CSS](assets/tokens/tokens.css)、[JSON](assets/tokens/tokens.json)、[TypeScript](assets/tokens/tokens.ts)或 [DTCG](assets/tokens/tokens.dtcg.json)，根据目标工具转换格式，保持颜色值不变。原始 v1.0 快照保留在 Git 历史中；导入器不支持旧 DTCG 颜色表示时，只在交付项目中转换格式。

在根元素设置 `data-theme="vallum"` 或 `data-theme="abyssus"`，组件使用语义变量。SVG 使用 currentColor；图表集中注入颜色映射；不要在组件中散写品牌 HEX。需要主按钮等组件 Token 时，在项目 Token 层别名到已有色值。双主题复用同一结构与交互逻辑。

原包仅苍渊含 surfaceRaised，CSS 也含全局 html/body/selection/focus 样式。接入时按 [变量映射与适配层](references/ui/FIGMA_AND_FRONTEND.md)处理缺省角色、主按钮别名及作用域，勿擅自新增色值。

用户明确要求改变规范时按其要求执行；说明偏离项及影响。不要自行改动当前版本锁定的核心色值，也不要为普通作品自动更新技能。仅在用户要求升级体系时依据 [版本锁](references/brand/VERSION_LOCK.md)记录新版本与迁移影响。

## 按需读取资源

以下相对路径均以技能目录为基准。

- 既有训练平台改色：读 [迁移建议](references/ui/TRAINING_PLATFORM_MIGRATION.md)，保留列表式结构、列对齐和低卡片化。
- 需要材料与光感：读 [图片索引](assets/reference-images/REFERENCE_INDEX.md)，再查看其中相关图片。目录仅包含苍渊与白垣各一张界面氛围图和色彩海报；不从生成图提取精确色值，也不将其装饰与排布视为组件要求。
- 需要精确色卡：查看 `assets/palette-cards/00_master_palette_exact.svg`；分主题查看 `01_abyss_palette_exact.svg`、`02_vallum_palette_exact.png`。
- 需要界面示例：参考 `assets/examples/vallum_training_platform_demo.html` 或 `assets/examples/abyss_dashboard_demo.html`。它们是未接入业务的静态视觉参考；仅复用视觉和结构模式，不将示例业务内容当成用户需求，也不要把示例当作完整生产实现。

## 验收

读取 [可访问性说明](references/ui/ACCESSIBILITY.md)，检查实际前景/背景组合，不能因使用了 Token 就认定可读性合格。

- 核对锁定色值、主题角色和主按钮配色；验证双主题所用变量都有定义。
- 检查白垣是否以石素米灰为主体，苍渊是否有深渊/夜海/铸铁层次；强调色是否仅服务关键操作与信息。
- 检查字号、对齐、输入可见性、间距、控件高度与圆角；列表不要每行套卡片，侧栏不要整块蓝绿。
- 检查正文对比度至少 4.5:1、大字至少 3:1。白垣小号强调文字使用 accentStrong #5D706C，勿使用垣影 #637774。textTertiary 和状态色不是任意背景上的合格正文色；必要时改用现有 textSecondary/textPrimary 并保留状态图标/边框。
- 检查焦点可见、键盘操作、hover/focus/disabled/selected/error；选中及错误不只靠颜色。图表需要时结合线型、标签、标记区分。
- 实现任务检查实际渲染、窄屏、长文本和溢出；双主题任务检查同一组件在两主题的状态。仅审查任务输出按影响排序的具体问题及对应修正，不擅自创建应用。
