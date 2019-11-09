/**
 * 一个创建图片的方法
 * 第一个参数是图片路径，第二个参数是给这个图片起个类名
 * 然后把这图片放到html的body标签下
 */
function createPic(pic, className) {
  var img = new Image();
  img.src = pic;
  img.classList.add(className);
  document.body.append(img);
}

export default createPic;