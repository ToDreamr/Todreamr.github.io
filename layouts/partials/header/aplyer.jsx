
<script type="text/javascript">
    const ap = new APlayer({
    container: document.getElementById('aplayera'),
    fixed: true,
    lrcType: 3,
    order: 'random',
    audio: [{
    name: '正解(混声三部合唱)',
    artist: 'RADWIMPS',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863071390/RADWIMPS - 正解 (混声三部合唱).flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863815811/%E6%AD%A3%E8%A7%A3.jpg',
    lrc: '/lrcs/RADWIMPS - 正解 (混声三部合唱).lrc'
},
{
    name: 'カイコ (蚕)',
    artist: 'RADWIMPS',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863088197/RADWIMPS (ラッドウィンプス) - カイコ (蚕).flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863825417/%E3%82%AB%E3%82%A4%E3%82%B3.jpg',
    lrc: '/lrcs/RADWIMPS (ラッドウィンプス) - カイコ (蚕).lrc'
},
{
    name: 'シザースタンド (Scissor Stand)',
    artist: 'RADWIMPS',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863045487/RADWIMPS - シザースタンド.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863829081/Scissor%20Stand.jpg',
    lrc: '/lrcs/RADWIMPS (ラッドウィンプス) - シザースタンド (Scissor stand).lrc'
},
{
    name: '狭心症',
    artist: 'RADWIMPS',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863058310/RADWIMPS - 狭心症.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863818873/%E7%8B%AD%E5%BF%83%E7%97%87.jpg',
    lrc: '/lrcs/RADWIMPS (ラッドウィンプス) - 狭心症.lrc'
},
{
    name: '蝶々結び',
    artist: 'Aimer',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706862990250/Aimer - 蝶々結び.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863822424/%E8%9D%B6%E3%80%85%E7%B5%90%E3%81%B3.jpg',
    lrc: '/lrcs/Aimer (エメ) - 蝶々結び (蝴蝶结).lrc'
},
{
    name: 'カタオモイ',
    artist: 'Aimer',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706862977602/Aimer - カタオモイ.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863824031/%E3%82%AB%E3%82%BF%E3%82%AA%E3%83%A2%E3%82%A4.jpg',
    lrc: '/lrcs/Aimer (エメ) - カタオモイ (单相思).lrc'
},
{
    name: '夏土産',
    artist: '中島みゆき',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863224567/中島みゆき - 夏土産(Remaster).flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863817455/%E5%A4%8F%E5%9C%9F%E7%94%A3.jpg',
    lrc: '/lrcs/中岛美雪 (中島みゆき) - 夏土産 (Remaster).lrc'
},
{
    name: 'I Could Never Say Goodbye',
    artist: 'Enya',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863010537/Enya - I Could Never Say Goodbye.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863830231/I%20Could%20Never%20Say%20Goodbye.jpg',
    lrc: '/lrcs/Enya - I Could Never Say Goodbye.lrc'
},
{
    name: 'おくりびと ~memory~',
    artist: '久石譲',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863186308/久石让 - おくりびと~memory~.flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863826943/%E3%81%8A%E3%81%8F%E3%82%8A%E3%81%B3%E3%81%A8.jpg',
    lrc: '/lrcs/久石让 (ひさいし じょう) - おくりびと~memory~ (入殓师~memory~) (「おくりびと」オリジナル・サウンドトラック).lrc'
},
{
    name: 'いつも何度でも',
    artist: '久石譲 / 木村弓',
    url: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863192985/久石让 _ 木村弓 - いつも何度でも (永远同在).flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/29397395/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1706863820247/%E5%8D%83%E3%81%A8%E5%8D%83%E5%B0%8B%E3%81%AE%E7%A5%9E%E9%9A%A0%E3%81%97.jpg',
    lrc: '/lrcs/久石让 _ 木村弓 - いつも何度でも (永远同在).lrc'
},
{
    name: 'Hiruno Hoshi (日本盤のみボーナストラック)',
    artist: 'illion',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1720281034040/illion%20(%E3%82%A4%E3%83%AA%E3%82%AA%E3%83%B3)%20-%20Hiruno%20Hoshi%20(%E6%97%A5%E6%9C%AC%E7%9B%A4%E3%81%AE%E3%81%BF%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%88%E3%83%A9%E3%83%83%E3%82%AF).flac',
    cover: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1720279978889/UBU.jpg',
    lrc: '/lrcs/illion (イリオン) - Hiruno Hoshi (日本盤のみボーナストラック).lrc'
},        {
    name: '05410- (ん)',
    artist: 'RADWIMPS',
    url: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1720282286064/RADWIMPS%20(%E3%83%A9%E3%83%83%E3%83%89%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%97%E3%82%B9)%20-%2005410-%20(%E3%82%93).ogg',
    cover: 'https://fs-im-kefu.7moor-fs1.com/ly/4d2c3f00-7d4c-11e5-af15-41bf63ae4ea0/1720279685130/05410.jpg',
    lrc: '/lrcs/RADWIMPS (ラッドウィンプス) - 05410- (ん).lrc'
},
    ]
});

    ready();

    isRecover = false;
    function ready(){
    ap.on('canplay', function () {
        if(!isRecover){
            if(localStorage.getItem("musicIndex") != null){
                musicIndex = localStorage.getItem("musicIndex");
                musicTime = localStorage.getItem("musicTime");
                if(ap.list.index != musicIndex){
                    ap.list.switch(musicIndex);
                }else{
                    ap.seek(musicTime);
                    ap.play();
                    localStorage.clear();
                    isRecover = true;
                }
            }else{
                isRecover = true;
            }
        }
    });
}

    window.onbeforeunload = function(event) {
    if(!ap.audio.paused){
    musicIndex = ap.list.index;
    musicTime = ap.audio.currentTime;
    localStorage.setItem("musicIndex",musicIndex);
    localStorage.setItem("musicTime",musicTime);
}
};



    var element = document.getElementsByClassName("aplayer-title")[0];
    $(element).wrap("<a href='{{i18n "pathAppendix"}}/radio/pick/'></a>");
</script>





<style type="text/css">
    .aplayer-title, .aplayer-list-light {
    color:#000000cc;
}
    .aplayer-list{
    color:#717070bf;
}
</style>
