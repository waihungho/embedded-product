const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

// 提供静态文件
app.use(express.static(path.join(__dirname)));

// 所有请求都返回index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
}); 