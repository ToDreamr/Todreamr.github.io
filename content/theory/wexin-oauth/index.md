---
title: "微信登录"
date: 2024-03-02T13:22:59+08:00
draft: false
description: "微信登录"
tags: ["Oauth2"]
---

# 微信登录

参考文章：
>
> [Vue生成二维码](https://huaweicloud.csdn.net/654a0c1634bf9e25c799cae9.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ4MjI4OSwiZXhwIjoxNzEwMDAzNjgyLCJpYXQiOjE3MDkzOTg4ODIsInVzZXJuYW1lIjoicmFpbnloZWlnaHRzIn0.4jltqP2tCDn4xh25GWz11fMFOOa-xqGugND8f8Iqo5U)
>
>[构建微信登录服务器 验证后端](https://fansea.gitee.io/2023/12/10/OAuth2%E7%99%BB%E5%BD%95%E5%8D%8F%E8%AE%AE/)
>
>[微信开发公众平台](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)

### 效果展示：

通过前端生成的二维码：

![img.png](img.png)

### 前端部分（使用Dom来创建script节点）：

```javascript
createWxLoginQrCode(){
            const script=document.createElement('script');
            script.type='text/javascript';
            script.src='https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
            const wxElement = document.body.appendChild(script)
            wxElement.onload = function () {
                var obj = new WxLogin({
                id: 'wxLoginCode', // 需要显示的容器id
                appid: '',// 公众号appid wx*******
                scope: 'snsapi_login', // 网页默认即可
                redirect_uri: encodeURIComponent(' '), // 授权成功后回调的url
                state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
                style: 'black', // 提供"black"、"white"可选。二维码的样式
                href: '' // 外部css文件url，需要https
                })
            }
        }
    },
    mounted(){
        this.createQrcode();
        this.createWxLoginQrCode();
    }
 }
```

### 微信服务器验证部分

```java
/**
 * WeiXinLoginController 关于微信登录以及二维码返回的所有控制路由
 *
 * @author 春江花朝秋月夜
 * @since 2024/3/2 23:19
 */
@Slf4j
@RestController
@RequestMapping("/weixin")
public class WeiXinLoginController {
    @Resource
    WeXinConfigProperties weXinConfigProperties;
    @GetMapping("/wxLogin")
    public void wxLoginPage(HttpServletResponse response) throws Exception{
        String hostAddr = weXinConfigProperties.getHOST_ADDR();
        String redirectUrl = URLEncoder.encode(hostAddr+"/weixin/wxCallBack", StandardCharsets.UTF_8);

        //该请求用于获取code，获取code之后会重定向到redirectUrl获取token
        String url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd10c3f9e60b4e00b&redirect_uri="
                +redirectUrl+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
        response.setContentType("image/png");
        //Hutool用于生成登录二维码
        QrCodeUtil.generate(url,300,300,"jpg",response.getOutputStream());
    }


    @Resource
    WeiXinUtil weiXinUtil;
    //用上一步获取的code去获取token
    //代理的路径，实际处理code是在WeiXinLoginUser userInfo = weiXinUtil.getUserInfo(code);方法中
    @GetMapping("/wxCallBack")
    public String pcCallback(String code, String state, HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
        log.info("登录跳转请求：{}",request.getRequestURI());
        WeiXinLoginUser userInfo = weiXinUtil.getUserInfo(code);
        return JSONUtil.toJsonStr(userInfo);
    }

    //微信检查方案：
    // 开发者通过检验signature对请求进行校验（下面有校验方式）。若确认此次GET请求来自微信服务器，请原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。加密/校验流程如下：
    //
    //1）将token、timestamp、nonce三个参数进行字典序排序
    //
    //2）将三个参数字符串拼接成一个字符串进行sha1加密
    //
    //3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    @RequestMapping("/wxCheck")
    public String wxSignatureCheck(
            @RequestParam(value = "signature") String signature,
            @RequestParam(value = "timestamp") String timestamp,
            @RequestParam(value = "nonce") String nonce,
            @RequestParam(value = "echostr") String echostr) throws NoSuchAlgorithmException {
        log.info("收到微信校验请求，echostr:{}",echostr);

        String token="Rainy-Heights";
        String[] str = new String[]{token, timestamp, nonce};

        //排序
        Arrays.sort(str);
        //拼接字符串
        StringBuilder buffer = new StringBuilder();
        for (String s : str) {
            buffer.append(s);
        }

        MessageDigest messageDigest=MessageDigest.getInstance("SHA-1");
        //利用SHA-1加密算法对字符串加密：

        byte[] digest = messageDigest.digest(buffer.toString().getBytes(StandardCharsets.UTF_8));//加密好的盐

        buffer.setLength(0);//清空数据
        for (byte bit:digest){
            String hex=Integer.toHexString(0xff&bit);
            if (hex.length()==1)
            {
                buffer.append('0');
            }
            else
            {
                buffer.append(hex);
            }
        }

        //与签名一致时返回
        if (buffer.toString().equals(signature)){
            return echostr;
        }
        else
        {
            return "404";
        }
    }
}

```

处理回调逻辑，代理方法

```java
/**
 * WeiXinUtil
 *
 * @author 春江花朝秋月夜
 * @since 2024/3/2 23:51
 */
@Slf4j
@Component
public class WeiXinUtil {
    @Resource
    WeXinConfigProperties weXinConfigProperties;


    //具体获取token的操作
    public  WeiXinLoginUser getUserInfo(String code) throws IOException {
        String APP_ID= weXinConfigProperties.getAPP_ID();
        String APP_SECRET= weXinConfigProperties.getAPP_SECRET();

        String responseResult = "";
        log.info("回调获取code：{}",code);
        //创建可关闭http链接客户端
        CloseableHttpClient httpClient = HttpClients.createDefault();

        String tokenUrl ="https://api.weixin.qq.com/sns/oauth2/access_token?appid="+APP_ID+"&secret="
                +APP_SECRET+"&code="+code+"&grant_type=authorization_code";
        HttpGet request = new HttpGet(tokenUrl);
        CloseableHttpResponse response = httpClient.execute(request);

        if (response.getStatusLine().getStatusCode() == 200){
            responseResult = EntityUtils.toString(response.getEntity(),"UTF-8");
        }
        log.info("获取到responseResult：{}",responseResult);

        WeiXinTokenInfo tokenInfo = JSONUtil.toBean(responseResult,WeiXinTokenInfo.class);
        String userInfoURL = "https://api.weixin.qq.com/sns/userinfo?access_token="+tokenInfo.getAccessToken()+"&openid="
                +tokenInfo.getOpenid()+"&lang=zh_CN";

        HttpGet request1 = new HttpGet(userInfoURL);
        CloseableHttpResponse response1 = httpClient.execute(request1);

        if (response1.getStatusLine().getStatusCode() == 200){
            responseResult = EntityUtils.toString(response1.getEntity(),"UTF-8");
        }
        log.info("获取到userInfoResult：{}",responseResult);
        WeiXinLoginUser userInfo = JSONUtil.toBean(responseResult, WeiXinLoginUser.class);
        return userInfo;
    }
}

```

登录用户实体（微信登录成功后返回的信息 ）

```java
/**
 * WeiXinLoginUser
 *
 * @author 春江花朝秋月夜
 * @since 2024/3/2 23:17
 */
@Data
public class WeiXinLoginUser {
    /**
     * 微信扫码登录后台返回的是json数据
     * 例如:
     * {
     "openid":"OPENID",
     "nickname":"NICKNAME",
     "sex":1,
     "province":"PROVINCE",
     "city":"CITY",
     "country":"COUNTRY",
     "headimgurl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
     "privilege":[
     "PRIVILEGE1",
     "PRIVILEGE2"
     ],
     "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL"
     }
     */
    private String openid;
    private String nickname;
    private Integer sex;
    private String province;
    private String city;
    private String country;
    private String headimgurl;
    private String privilege;
    private String unionid;
}
```

vue页面代码部分

```vue

<script>
import QRcode from "qrcodejs2"

export default {
  data() {
    return {}
  },
  methods: {
    // 生成二维码
    createQrcode() {
      new QRcode(this.$refs['qrcode-config'], {
        text: " https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd10c3f9e60b4e00b&redirect_uri=https%3A%2F%2F6bbb1c69.r6.cpolar.top%2Fweixin%2FwxCallBack&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect", // 扫二维码后获得的信息
        width: 400, // 图片宽90px，左右padding各4px，边框各1px， 100-8px-2px
        height: 400, // 图片高90px，上下padding各4px，边框各1px， 100-8px-2px
      })
    },
    //生成微信登录的二维码，采用操作dom的方式，非插件，参考链接：https://huaweicloud.csdn.net/654a0c1634bf9e25c799cae9.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ4MjI4OSwiZXhwIjoxNzEwMDAzNjgyLCJpYXQiOjE3MDkzOTg4ODIsInVzZXJuYW1lIjoicmFpbnloZWlnaHRzIn0.4jltqP2tCDn4xh25GWz11fMFOOa-xqGugND8f8Iqo5U
    createWxLoginQrCode() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
      const wxElement = document.body.appendChild(script)
      wxElement.onload = function () {
        var obj = new WxLogin({
          id: 'wxLoginCode-', // 需要显示的容器id
          appid: 'wxd10c3f9e60b4e00b',// 公众号appid wx*******
          scope: 'snsapi_login', // 网页默认即可
          redirect_uri: encodeURIComponent('https://2e79fece.r21.cpolar.top/weixin/wxCallBack'), // 授权成功后回调的url
          state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
          style: 'black', //提供"black"、"white"可选。二维码的样式
          href: '' // 外部css文件url，需要https
        })
      }
    }
  },
  mounted() {
    this.createQrcode();
    this.createWxLoginQrCode();
  }
}
</script>

<template>
  <div class="wxLogin">
    <h3>扫码登录，二维码 1 分钟内有效</h3>
    <!-- <login-code  :size="400" :text="二维码"/> -->
    <div class="img-box">
      <div class="qrcode-config" ref="qrcode-config"></div>
      <img class="qrcode-logo" width="27" src="../../assets/wx.jpg" alt="配置服务器">
    </div>

    <div id="wxLoginCode"></div>
  </div>
</template>

<style scoped>
.wxLogin {
  align-content: center;
  text-align: center;

  margin-top: 50px;
  /* 二维码图片容器,包括二维码 + logo + 边框 */

  .img-box {
    margin-left: 40%;
    align-items: center;
    text-align: center;
    padding-bottom: 8px;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    position: relative;
  }

  /* qrcodejs2 生成的二维码的容器，纯二维码*/

  .qrcode-config {
    margin-top: 300px;
    align-items: center;
    border: 1px solid #e5e5e6;
    padding: 4px;
    border-radius: 4px;
    width: 400px;
    height: 400px;
    box-sizing: border-box;

    img {
      box-sizing: border-box;
    }
  }

  /*二维码中间的logo*/

  .qrcode-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
  }
}
</style>

```

目前尚未完成的部分：

- 二维码扫描完成后返回码位10003，推测可能是微信开放平台没有做好，吐槽：微信开放平台的网站太多了，一会儿小程序一会儿网站应用，分辨不清，不想写

- 完成登录后的授权码模式获取用户信息并授权部分
