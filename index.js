require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')

const accountRouter = require('./src/routes/account')
const enginerRouter = require('./src/routes/engineer')
const companyRouter = require('./src/routes/company')
const experienceRouter = require('./src/routes/experience')
const hireRouter = require('./src/routes/hire')
const portfolioRouter = require('./src/routes/portfolio')
const projectRouter = require('./src/routes/project')
const skillRouter = require('./src/routes/skill')

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/image', express.static('./uploads'))

// setting cors
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authoization'
    )
    next()
})
app.use('/account', accountRouter)
app.use('/enginer', enginerRouter)
app.use('/company', companyRouter)
app.use('/experience', experienceRouter)
app.use('/hire', hireRouter)
app.use('/portfolio', portfolioRouter)
app.use('/project', projectRouter)
app.use('/skill', skillRouter)

app.get('/', (_request, response) => {
    response.send('e-recruitment web service')
})
app.listen(port, () => {
    console.log(`Listen app backend on port ${port}`)
})