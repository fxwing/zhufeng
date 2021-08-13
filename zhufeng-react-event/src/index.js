import React from 'react';
import ReactDOM from 'react-dom';
let rootContainerElement = document.getElementById('root');
const handleDivClick = () => {
  console.log('父元素冒泡');
}
const handleDivClickCapture = (event) => {
  console.log('父元素捕获');
}
const handleButtonClick = (event) => {
  console.log('子元素的冒泡');
}
const handleButtonClickCapture = () => {
  console.log('子元素的捕获');
}
const handleDoubleClick = () => {
  console.log('handleDoubleClick');
}

/* let element = (
  <div onClick={handleDivClick} onClickCapture={handleDivClickCapture}>
    <button onClick={handleButtonClick} onClickCapture={handleButtonClickCapture}>点击</button>
  </div>
) */
debugger
let element = React.createElement("div", {
  onClick: handleDivClick,
  onDoubleClick:handleDoubleClick(),
  onClickCapture: handleDivClickCapture
}, React.createElement("button", {
  onClick: handleButtonClick,
  onClickCapture: handleButtonClickCapture
}, "点击"));
console.log(element);
ReactDOM.render(
  element,
  rootContainerElement
);