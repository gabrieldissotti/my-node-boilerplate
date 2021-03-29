import { Router } from 'express'

const routes = Router();


routes.get('/', function (req, res) {
  res.json({
    status: 'API is OK'
  })
})

routes.get('/resource/:id', function (req, res) {
  res.send('Hello World GET')
})
routes.post('/resource', function (req, res) {
  res.send('Hello World POST')
})
routes.put('/resource', function (req, res) {
  res.send('Hello World PUT')
})
routes.patch('/resource', function (req, res) {
  res.send('Hello World PATCH')
})
routes.delete('/resource', function (req, res) {
  res.send('Hello World DELETE')
})

export default routes;
