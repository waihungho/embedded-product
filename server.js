const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 9000;

// 提供静态文件
app.use(express.static(path.join(__dirname)));

// 创建代理中间件
app.use('/proxy-login', createProxyMiddleware({
  target: 'https://login.wisers.net',
  changeOrigin: true,
  pathRewrite: {
    '^/proxy-login': '/', // 移除路径前缀
  },
  onProxyRes: function(proxyRes, req, res) {
    // 删除有问题的X-Frame-Options头
    delete proxyRes.headers['x-frame-options'];
    // 添加允许iframe的Content-Security-Policy
    proxyRes.headers['content-security-policy'] = "frame-ancestors 'self';";
  }
}));

// 所有其他请求都返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
}); 