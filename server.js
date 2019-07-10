const express       = require('express')
const path          = require('path')

const connectDB     = require('./config/db')

const app           = express()
const PORT          = process.env.PORT || 5000


connectDB()

app.use(express.json({ extended: false }))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


// app.get('/', (req, res) => {
//     res.json({ msg: 'welcome to the contacts app'})
// })


// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}


app.listen(PORT, () => console.log(`Server up on ${PORT}`))
