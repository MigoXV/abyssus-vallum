# 双主题生成图索引

本目录仅保留两张苍渊生成参考图，以及以它们为唯一图像参考制作的两张白垣配对图。商品截图、原始照片、平台截图和临时源包已从当前工作目录移除。

| 编号 | 图片 | 用途 |
|---|---|---|
| 01 | [苍渊界面氛围图](01_abyssus_ui_moodboard.png) | 原 05；黑蓝深度、花卉材质、冷光层次与克制高亮 |
| 02 | [苍渊色彩海报](02_abyssus_palette_poster.png) | 基于原 06 更新为 v1.1 六栏；含星笺、景观叙事与品牌氛围 |
| 03 | [白垣界面氛围图](03_vallum_ui_moodboard.png) | 参照 01；米白主体、淡青灰结构、象牙花卉与墨骨文字 |
| 04 | [白垣色彩海报](04_vallum_palette_poster.png) | 参照 02；六色分栏、石材建筑、庭院与时间痕迹 |

## 使用边界

- 生成图用于气质、构图与材质参考，不是精确色值来源。即使海报标注了 HEX，也不要从带有光照和纹理的像素吸色覆盖 Token。
- 精确数值以 [DTCG](../tokens/tokens.dtcg.json) 和 [CSS](../tokens/tokens.css) 为准；人工核对使用 [精确色卡](../palette-cards/00_master_palette_exact.svg)。
- 界面图中的品牌、文案、数据与人物元素属于生成图内容，不作为用户身份或业务数据。白垣图使用通用成员编号及字母头像。
- 装饰字体、花卉、海报景观、胶囊按钮与面板排布不是生产组件要求。实际界面遵循 [UI 原则](../../references/ui/UI_PRINCIPLES.md) 与 [组件规范](../../references/ui/COMPONENT_SPEC.md)。

## 苍渊海报 v1.1 更新

内置 imagegen 以原苍渊海报为参考，保留整体风格，扩展为六栏并增加星笺。最终编辑提示词：

Edit this Abyssus palette poster for version 1.1. Preserve portrait composition, title 苍渊 · 色卡, dark mountainous ocean/cosmic background, refined typography, tall swatch columns with landscape images, overall style and existing five colors. Reflow into SIX equally wide columns, keep all labels clearly readable. Columns left to right exactly: 深渊 / Abyss / #080A0D; 夜海 / Nocturne / #111820; 铸铁 / Forged Blue / #273746; 星痕 / Startrace / #607D99; 初光 / First Light / #9FC4E2; 星笺 / Starleaf / #E7EEF4. Sixth swatch is very pale cool white with dark ink text; its lower narrative image evokes a pale page bearing faint constellation paths above the abyss, knowledge becoming readable, no extra objects outside the column. Under sixth HEX use exact short Chinese text 可阅读与传递的知识. Number columns 01 through 06. Keep existing title, do not rename colors, no other seventh column, no personal data. Footer 探于苍渊，筑于白垣。. This is a paired atmospheric reference poster, preserve sophistication and visual continuity.

## 白垣图生成记录

使用内置 imagegen 制作，分别以 01、02 为单张参考；没有使用已移除的照片或截图。两张图采用石素、象牙、雾青、铜霜、垣影、墨骨配色，保持对应苍渊图的构图与精致层次。

生成提示词见下方记录，供后续定向调整使用。

### 03 白垣界面图

Use case: style-transfer. Create a light-theme VALLUM counterpart of the provided dark dashboard moodboard. Preserve the reference's wide landscape composition, sidebar, top search bar, large editorial hero typography, richly sculpted flower arrangement in the upper right, restrained statistics row and lower chart/activity/schedule panels. Change the palette and lighting to warm pale stone #F8F7F2, ivory #EEECE5, patina mist #DCE4E0, verdigris frost #AFC2BC, rampart shade #637774 and ink bone #252A2A. Mostly warm off-white and gray, subtle desaturated green-gray in structural shadows; no mint green, no blue cast. Flowers should be ivory with subdued patina shadows, luxurious tactile petals. Fine dividers, extremely subtle surfaces, clear dark text, dark primary button with pale text. Main brand text 'VALLUM', subtitle 'ABYSSUS · VALLUM'. Keep the refined editorial mood of the reference. All interface contents must be fictional and generic: replace people's names with 'Member 01', 'Member 02', etc; replace all portrait avatars with simple monogram circles, top account 'Demo workspace'. No real people, personal information, ecommerce UI, photographs of identifiable people, watermark, addresses or account identifiers. English UI labels, main hero 'Build what lasts.' and subtitle 'A quiet workspace for ideas, tools and shared knowledge.' This is one full standalone polished image, not a comparison or collage.

### 04 白垣色彩海报

Use case: style-transfer. Create a VALLUM light-theme counterpart of the supplied Abyssus palette poster. Preserve its portrait format, magnificent refined editorial design, centered large Chinese title, elegant serif type, delicate dividers, tall parallel color columns with richly detailed narrative landscape imagery beneath the swatches, and monumental atmospheric background. Transform darkness, ocean and mountains to ivory limestone architecture, terraces, pale stone walls, quiet courtyards, mist and delicate aged patina. Warm off-white dominates with desaturated green-gray traces, never mint green or saturated color. This is the paired poster for the same design system. Use SIX equal vertical columns, each with its own solid swatch at the top and evocative architectural image below, left-to-right exactly: 01 石素 / Pale Stone / #F8F7F2; 02 象牙 / Ivory / #EEECE5; 03 雾青 / Patina Mist / #DCE4E0; 04 铜霜 / Verdigris Frost / #AFC2BC; 05 垣影 / Rampart Shade / #637774; 06 墨骨 / Ink Bone / #252A2A. Make all six labels and HEX strings sharply legible, dark ink on light columns and pale text on dark columns. Title exactly '白垣 · 色卡'. Subtitle exactly '理解之后，被建立并保存的秩序'. Small brand 'ABYSSUS · VALLUM'. Footer exactly '探于苍渊，筑于白垣。'. Do not repeat source's Abyssus title or labels. No extra Chinese microcopy needed. Retain expansive vertical layout and premium print-poster feeling of reference, while making six columns comfortably fit. No real persons, personal information, commerce screenshot elements or watermark. One standalone poster.
