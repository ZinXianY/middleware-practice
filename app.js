// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const strTime = new Date()
  if (req.originalUrl !== '/favicon.ico')
    console.log(`User Request Time: ${strTime.toLocaleString()} | ${req.method} from ${req.originalUrl}`)

  res.on('finish', () => {
    const endTime = new Date()
    const totalTime = endTime - strTime
    if (req.originalUrl !== '/favicon.ico')
      console.log(`User Response Time: ${endTime.toLocaleString()} | ${req.method} from ${req.originalUrl} | total time: ${totalTime}ms`)
  })
  next()
})


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})