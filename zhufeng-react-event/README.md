合成事件是挂在root上的，那我阻止事件冒泡是不是合成事件就失效了？
react源码也是这样实现的吗
老师事件监听就是原生的吧

如果子元素原生事件 中阻止了冒泡， 那子元素的合成事件还会触发吗

阻止合成事件也会阻止原生事件? 是的

刚才那个react事件阻止冒泡 是不能阻止原生事件冒泡的吧？能


现在开始1：1实现源码
一边调试源码，一边写我们自己的实现



为什么不在定义事件名字数组的时候就定义成这样  "click", "onClick"，还要用代码来转换一下
topEvent是原生事件名吗是的
事件系统
为了组合吧
no preoblem
no problem
为了实现捕获和冒泡 不同的名称，但是原声事件同为一个事件名
这个清单的作用是啥
root
大类好像是刚刚看到的5种
总不能 click 对应两个名字
接着讲吧


我直接把所有的函数类的属性提取出来绑定到元素上，不行吗

你说对了，源码的确也是这么干的
DOM元素.props = {onClick,onClickCapture};