import addFunc from "./js/addMethod"
import printFunc from "./js/printMethod"

var result = addFunc(1, 5)
printFunc(result)

console.log("hello webpack")

// 引入创建图片的文件
import createPicFunc from "./js/createPic"

// 引入图片，它在images文件夹下
import pic from "./images/pic.jpg"
import pic_small from "./images/pic_small.png"
// 调用方法创建图片，类名为pic
createPicFunc(pic, "pic")
createPicFunc(pic_small, "pic_small")

// 引入样式文件
import "./css/index.scss"

// 引入创建dom元素的文件
import createDom from "./js/createDom"
// 调用方法，创建字体图标的dom元素
createDom(["iconfont", "icon-xingzhuang"], "span")

// 引用es6语法的文件
import printArr from "./js/es6Demo"
printArr([1, 2, 3, 4, 5]);

// 调用方法，创建video标签元素
createDom(["video-ele"], "video");
const videoEle = document.getElementsByClassName("video-ele")[0];
videoEle.src = "./assets/video.webm";
videoEle.autoplay = "autoplay";
videoEle.muted = "muted";
videoEle.loop = "loop";
videoEle.controls = "controls";
videoEle.width = "400";

// 增加一些事件：
// 获取那张jpg图片，每次点击它的时候，让页面里出现一些文字
const picEle = document.getElementsByClassName("pic")[0];
picEle.onclick = () => {
  createDom(["createdDiv"], "div", "新增的div")
}