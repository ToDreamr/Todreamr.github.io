---
title: "自用的Vscode个人觉得还算耐看的主题和字体以及编码习惯"
date: 2024-03-02T13:22:59+08:00
draft: false
description: "自用的Vscode个人觉得还算耐看的主题和字体以及编码习惯"
tags: ["笔记"]
---

Java 选手为什么用 Vscode 了？

答：苦于 IDEA 的启动速度，本人的电脑带不动了很多了，就算改了索引和 Maven，经常还是要编辑 js，vue，html 文件，小全栈辣鸡吧，故而转战 Vscode。并不完全弃坑 IDEA

目前调教 Vscode 还算挺好哒哈哈，好用呀！！！

![调教后的样子](image.png)

这里我选择了本地的 Maven 和用于日语的字体()，主题选用的是：Default Dark Modern，目前看起来还行，经典就是好，配合我的背景图片很搭!

当选择编写 Spring 应用程序时可选用 Idea 主题，较为接近 Jetbrains 家族的 Idea,字体选用的是 JetBrains 家族的 JetBrains Mono，normal 版；

由于添加了适用于 Idea 的快捷键插件，平替 Idea 非常丝滑。

背景主题插件：（Background-kasute）

文件图标主题：

![文件图标](image-2.png)

背景图：[黄昏时刻-道口时刻](https://pic3.zhimg.com/80/v2-e0c90dbe7ca8559256e37522f28b060e_1440w.webp)

贴一下 json，做个备份

```json
{
  "markdown-image.github.repository": "https://github.com/ToDreamr/img-cloud.git",
  "markdown-image.github.cdn": "https://cdn.jsdelivr.net/gh/Todreamr/img-cloud",
  "markdown-image.github.token": "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",
  "RainbowBrackets.depreciation-notice": false,
  "java.configuration.maven.userSettings": "D://Program Files//apache-maven-3.9.4//conf//settings.xml",
  "java.configuration.maven.globalSettings": "D://Program Files//apache-maven-3.9.4//conf//settings.xml",
  "maven.executable.path": "D://Program Files//apache-maven-3.9.4//bin//mvn",
  "workbench.iconTheme": "eq-material-theme-icons-ocean",
  "editor.mouseWheelZoom": true,
  "editor.fontLigatures": false,
  "editor.fontFamily": "'JetBrains Mono','汉仪孟庆江行书 W'",
  "terminal.integrated.fontFamily": "JetBrains Mono",
  "files.trimTrailingWhitespace": true,
  "vue.format.script.initialIndent": true,
  "vue.format.style.initialIndent": true,
  "editor.formatOnSave": true,
  "workbench.settings.useSplitJSON": true,
  "rest-client.fontWeight": "normal",
  "editor.fontWeight": "normal",
  "terminal.integrated.fontWeight": "bold",
  "files.autoSave": "onFocusChange",
  "workbench.editor.doubleClickTabToToggleEditorGroupSizes": "off",
  "latex-workshop.view.pdf.tab.editorGroup": "current",
  "editor.renderWhitespace": "none",
  "editor.codeActionsOnSave": {},
  "diffEditor.hideUnchangedRegions.enabled": true,
  "workbench.preferredDarkColorTheme": "Default Dark+",
  "workbench.preferredHighContrastColorTheme": "Default Dark+",
  "workbench.editor.autoLockGroups": {
    "mainThreadWebview-markdown.preview": true
  },
  "background.autoInstall": true,
  "background.smoothImageRendering": true,
  "background.backgroundBlur": [
    "0",
    "300",
    "300",
    "300"
  ],
  "background.backgroundChangeTime": [
    720,
    720,
    720,
    720
  ],
  "background.renderContentAboveBackground": true,
  "editor.fontVariations": false,
  "background.windowBackgrounds": [
    "https://pic3.zhimg.com/80/v2-e0c90dbe7ca8559256e37522f28b060e_1440w.webp",
    "https://picx.zhimg.com/80/v2-479a753c747307bd93ad989bee373147_1440w.webp?source=2c26e567",
    "https://pic1.zhimg.com/80/v2-6987babba6c51f77e73ec0134d4c53d0_1440w.webp",
    "https://picx.zhimg.com/80/v2-01cb93ee2cc66a3d47d942725b240b4e_1440w.webp?source=1def8aca",
    "https://pic2.zhimg.com/80/v2-b3f0b28e5d82fd34294b03bfc9cb6779_1440w.webp",
    "https://pic2.zhimg.com/80/v2-c4386ee2d2c068c80792a7925d6b1607_1440w.webp",
    "https://pic4.zhimg.com/80/v2-3df07d0898aab88f5cd6306c7ec25c8f_1440w.webp",
    "https://pic4.zhimg.com/80/v2-d10e3a9e78d72d42f404eb6984bfe32b_1440w.webp"
  ],
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "cSpell.userWords": [
    "qrcodejs"
  ],
  "files.associations": {
    "*.vue": "vue"
  },
  "workbench.tree.enableStickyScroll": false,
  "workbench.editor.defaultBinaryEditor": "default",
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "terminal.integrated.enableVisualBell": true,
  "terminal.integrated.localEchoStyle": "dim",
  "terminal.integrated.cursorBlinking": true,
  "scm.defaultViewMode": "tree",
  "terminal.integrated.tabs.showActiveTerminal": "singleTerminal"
}
```

maven 一切正常：

![maven](image-1.png)
