/**
 * 一个创建DOM元素的方法
 * 第一个参数是元素类名，是个数组类型，第二个参数是标签类型，最后一个是dom元素的文本内容
 */
/*
function createDom(className, dom, text) {
  if(!dom || dom == undefined) dom = "div"
  if(!text || text == undefined) text = ""
  var ele = document.createElement(dom);
  className.forEach(i => {
    ele.classList.add(i);
  });
  ele.innerHTML = text;
  document.body.append(ele);
}
*/
const createDom = (className, dom = "div", text = "") => {
  const ele = document.createElement(dom)
  className.forEach(i => {
    ele.classList.add(i)
  })
  ele.innerHTML = text
  const app = document.getElementById("app");
  app.append(ele);
}

export default createDom