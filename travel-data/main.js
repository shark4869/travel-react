const jsonServer = require('json-server');
// const server = jsonServer.create();
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(bodyParser.json());
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
});
server.post('/api/login', (req, res) => {
    console.log('check req:',req.body);
  const { email, password } =  req.body;
  const user = router.db.get('users').find({ email, password }).value();
  if (user) {
    res.json({ message: 'Đăng nhập thành công', user });
  } else {
    res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
  }
});


// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser);

// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now(),
//     req.body.updateAt = Date.now()
//   }
//   next()
// })

server.use(express.json());
// Use default router
server.use('/api', router);

// server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});