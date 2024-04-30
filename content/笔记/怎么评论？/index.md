---
title: "Waline评论系统"
date: 2024-03-11T18:23:23+08:00
description: "Waline博客网站评论"
tags : ["笔记"]
---

## Waline博客网站评论

#### 注册账号

[注册账号✈️](https://console.leancloud.app/register)

[创建应用✈️](https://console.leancloud.app/apps)

创建仓库-》用于存放评论

创建好之后，去到settings里面修改Environment三个参数

LEAN_ID：AppId
LEAN_KEY：App_key
LEAN_MASTER_KEY：Master_KEY

添加好之后，刷新工作流

通过HTML部署

导入样式文件和js脚本文件

通过Waline的配置键添加自定义的东西

注：[借鉴自金圣浩](https://www.karlukle.site/)
```html
<br/>
<span style="color:rgba(var(--color-neutral-400),var(--tw-text-opacity));">
    <span class="post-meta-item-text" >&nbsp;&nbsp;{{i18n "article.page_views"}}:  </span>
    <span class="waline-pageview-count">⏳</span><div></div><br/>
</span>
<script type="text/javascript">
    document.getElementByClassName("aline-pageview-count")[0].data-path = window.location.pathname;
</script>



<script src='/waline/waline.js'></script><!-- @v2.18 -->
<link href='/waline/waline.css' rel='stylesheet' />
<div id="vcomments"></div>
<script>
    if ({{i18n "lanString"}}=="zh-CN") {
        Waline.init({
            el: '#vcomments',
            serverURL: '你的评论网站服务器',
            emoji: ['https://valine-emoji.bili33.top/bilibilitv','https://valine-emoji.bili33.top/bilibiliHotKey','https://valine-emoji.bili33.top/Tieba-New','https://valine-emoji.bili33.top/weibo',],
            meta:['nick', 'mail', 'link'],
            pageview: true,
            reaction: true,
            lang: "zh-CN",
            /* 下面的可以自定义 */
            locale: {
                reactionTitle: '•畅所欲言——这里是开放区•',
                comment: '留言板',
                placeholder: '点击下方登录后再评论，会有惊喜哦~',
                gifSearchPlaceholder: '搜索表情包...',
                admin: '作者',
                sofa: '还没有人评论，快来抢沙发吧',
                anonymous: '匿名者'
            }
        });

    }
    else {
        Waline.init({
            el: '#vcomments',
            serverURL: '你的评论网站服务器',
            emoji: ['https://valine-emoji.bili33.top/bilibilitv','https://valine-emoji.bili33.top/bilibiliHotKey','https://valine-emoji.bili33.top/Tieba-New','https://valine-emoji.bili33.top/weibo',],
            meta:['nick', 'mail'],
            pageview: true,
            reaction: true,
            // lang:{{i18n "lanString"}},
            lang: "zh-CN",
            locale: {
                reactionTitle: '•畅所欲言——这里是开放区•',
                comment: '留言板',
                placeholder: '点击下方登录后再评论，会有惊喜哦~',
                gifSearchPlaceholder: '搜索表情包...',
                admin: '作者',
                sofa: '还没有人评论，快来抢沙发吧',
                anonymous: '匿名者'
            }
    });

    }
    document.getElementsByClassName('wl-power')[0].style.display = 'none';
    document.querySelector(".wl-actions a").style.display = 'none'
</script>
<style type="text/css">
    :root{
        --waline-color: var(--tw-prose-quotes);
        --waline-info-color: var(--tw-prose-quotes);
        --waline-info-bgcolor: var(--tw-ring-color);
        --waline-theme-color: rgba(var(--color-primary-400));
        --waline-bgcolor: transparent;
        --waline-border-color: #747474;
    }
    .wl-editor:focus, .wl-input:focus {
        background: transparent;
    }
    .wl-editor,.wl-input{
        max-width:88%;
    }
    .wl-reaction-item.active .wl-reaction-votes {
        color: white;
    }
</style>

<script type="text/javascript">
    var pagect = document.getElementById('pagec');
    var observer = new MutationObserver(function(){
        var itl,itll;
        var element = document.getElementById("pagec");
        observer.disconnect();
        itl  = element.innerText;
        itll = Number(itl).toLocaleString();
        document.getElementById('pagec').innerHTML = itll;
    });
    var article = document.getElementById('pagec');

    var options = {
        'childList': true,
        'subtree': true
    };

    observer.observe(article, options);
</script>

```