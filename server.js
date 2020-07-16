const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const db = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))


server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        let isRegistered = db.users.filter((user) => {
            return user.email === req.body.email && user.password === req.body.password
        })
        isRegistered.length > 0 ? res.sendStatus(200) : res.sendStatus(401)
 } else {
   next()
 }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})