# 双面板网页应用

这是一个简单的双面板网页应用，左侧为导航面板，右侧为iframe框架。通过点击左侧的按钮可以改变右侧iframe的URL。

## 功能特点

- 响应式布局，适应不同屏幕尺寸
- 左侧导航面板，包含多个按钮
- 右侧iframe面板，可加载不同网站
- 简易Express服务器，在端口9000上运行

## 项目结构

```
embedded-product/
├── index.html     # 主页面文件
├── server.js      # Express服务器
├── package.json   # 项目依赖配置
└── README.md      # 项目说明文档
```

## 安装说明

1. 确保已安装Node.js环境（建议v14.0.0以上版本）
2. 克隆或下载本项目到本地
3. 在项目根目录下运行以下命令安装依赖：

```bash
npm install
```

## 启动服务器

完成依赖安装后，在项目根目录下运行以下命令启动服务器：

```bash
npm start
```

或者直接运行：

```bash
node server.js
```

服务器启动后，在浏览器中访问 [http://localhost:9000](http://localhost:9000) 即可查看页面。

## 自定义修改

### 添加新的导航按钮

编辑`index.html`文件，在左侧面板中添加新的按钮元素：

```html
<button onclick="changeUrl('https://你的网址')">按钮名称</button>
```

### 修改服务器端口

如需更改服务器端口，请编辑`server.js`文件中的PORT常量：

```javascript
const PORT = 你想要的端口号;
```

## 注意事项

- 某些网站可能禁止在iframe中加载，这属于正常现象，是由于这些网站的安全策略设置
- 建议在现代浏览器中使用本应用（Chrome、Firefox、Edge等） 