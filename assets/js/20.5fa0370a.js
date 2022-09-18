(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{344:function(v,_,t){"use strict";t.r(_);var s=t(4),l=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("概括：一个宿主环境 + 两个线程（渲染层、逻辑层） + 开发API能力")]),v._v(" "),_("p",[v._v("小程序运行依赖于宿主环境，比如说微信小程序-微信，字节小程序-抖音等等，同时宿主环境会提供自身的能力，以开发API的形式暴露给小程序使用，这就体现出平台的能力、大小的优势了。")]),v._v(" "),_("p",[v._v("两个线程：渲染层（WebView进行渲染wxml+wxss+逻辑层data）、逻辑层（JsCore运行JS脚本）")]),v._v(" "),_("p",[v._v("逻辑层 App Service")]),v._v(" "),_("ul",[_("li",[v._v("交互：逻辑层将数据处理发送给视图层，同时接受视图层的事件反馈")]),v._v(" "),_("li",[v._v("不同点：\n"),_("ul",[_("li",[v._v("js在web上一些能力无法使用，DOM和BOM API")]),v._v(" "),_("li",[v._v("增加App和Page方法，程序注册、页面注册")]),v._v(" "),_("li",[v._v("增加getApp和getCurrentPages，获取App实例和当前页面栈")]),v._v(" "),_("li",[v._v("微信自身能力的API")]),v._v(" "),_("li",[v._v("模块化能力")])])])]),v._v(" "),_("p",[v._v("逻辑层发送网络请求也经由宿主native转发")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e73563f-b0c5-4296-8739-a1e8eb811fbb/Untitled.png",alt:"Untitled"}})]),v._v(" "),_("p",[v._v("程序运行与页面运行：")]),v._v(" "),_("p",[v._v("程序运行：")]),v._v(" "),_("ul",[_("li",[v._v("打开小程序之前，将整个小程序代码包下载到本地；")]),v._v(" "),_("li",[v._v("通过app.json的pages字段得知小程序所有页面路径；")]),v._v(" "),_("li",[v._v("pages第一个字段为首页，装载首页代码，小程序底层机制渲染出整个页面")]),v._v(" "),_("li",[v._v("app.js定义的唯一APP实例，onLaunch回调被执行(App实例是全部页面共享的）")])]),v._v(" "),_("p",[v._v("页面运行：")]),v._v(" "),_("ul",[_("li",[v._v("页面文件有四部分组成：wxml、wxss、js、json")]),v._v(" "),_("li",[v._v("首先加载json配置文件生成界面，还可以通过配置顶部颜色和文字")]),v._v(" "),_("li",[v._v("宿主环境装载页面wxss、wxml")]),v._v(" "),_("li",[v._v("装载js，通过Page构造器生成一个页面")]),v._v(" "),_("li",[v._v("将data和wxml一起渲染出最终结构")])]),v._v(" "),_("p",[v._v("生命周期：")]),v._v(" "),_("p",[v._v("小程序页面的初始化分为两个部分。")]),v._v(" "),_("ul",[_("li",[v._v("逻辑层初始化：载入必需的小程序代码、初始化页面 this 对象（也包括它涉及到的所有自定义组件的 this 对象）、将相关数据发送给视图层。")]),v._v(" "),_("li",[v._v("视图层初始化：载入必需的小程序代码，然后等待逻辑层初始化完毕并接收逻辑层发送的数据，最后渲染页面。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d5ad4188-f81a-4a2d-bc56-1318da0f8bd7/Untitled.png",alt:"Untitled"}})])])}),[],!1,null,null,null);_.default=l.exports}}]);