const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors()) // use cors module

app.get('/', function (req, res) {
  res.send('Hello World')
})

// return animal sound api
app.get('/sound/:name', function (req, res) {
    const { name } = req.params // 중괄호 안에 KEY를 넣어 구현 가능. 이럴 경우 { name : :name }이 됨
    // console.log(name)

    if(name == 'dog') {
      res.json({
        'sound': '멍멍'
      })
    } else if(name == 'cat') {
      res.json({
        'sound': '야옹'
      })
    } else {
      res.json({
        'sound': 'unknown',
        'value' : name.name
      })
    }
  })

app.listen(3000)