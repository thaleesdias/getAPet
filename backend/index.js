const express = require('express')
const cors = require('cors')

const app = express()

// config da resposta em json 
app.use(express.json())

// solve cors 
app.use(cors({ credentials: true, origin: 'http://localhost/3000' }))

//pasta de imagens

app.use(express.static('public'))

// rotas

app.listen(5000, () => {
  console.log('on')
})