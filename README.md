# photo-touch
基于canvas, 支持图片的拖拽/旋转/缩放, 同时支持手势操作.


## 安装
```
npm i photo-touch -S
```

## 快速开始
```
import PT from 'photo-touch';
const pt = new PT(canvasEL, 800, 600);

pt.changeImg('http://xxx.com/xxx.jpg');
```
运行上面的代码, 指定canvas元素会渲染指定图片, 并且图片可在canvas中通过手势进行拖拽/缩放/旋转操作.
