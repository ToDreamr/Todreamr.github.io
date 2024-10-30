---
title: "Latex语法"
date: 2023-10-19T15:55:16+08:00
description: "latex基本常识"
tags : ["latex"]
---


### 环境设置：
```latex
\begin{center}
   
\end{center}
```
这样就是一个环境，所有的都是隔离的。

### 头部文件
```latex
\documentclass{setting}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage[]{setspace}
```
在头部设置文件排版样式，导入依赖包，基本在本地

### 运行部分
```latex
\begin{document}
```

选择合适的编译器才可以编译，否则出错

### 导入自定义式样

更新命令：texhash
式样文件的后缀：.cls文件，在里面自定义命令和样式实现排版布局

例如下面：
```latex

\newcommand{\role}[2]{
  {\par \textit{#1} ~ #2 \par}
  \vspace{0.5ex}
}

\newcommand{\biInfo}[2]{
    {#1 \quad #2}
}

\newcommand{\tripleInfo}[3]{
    {#1 \quad #2 \quad #3}
}
```

