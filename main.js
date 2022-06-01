
import MainContainer from './modules/MainContainer.js'
import Nav from './modules/Nav.js'

// const express = require('express');
// const app = express();
// const port = 3100;

const App = () => {
    return `
        ${Nav()}
        ${MainContainer()}
    `
}

document.getElementById('root').innerHTML = App();

// app.get('/', (req, res) => {
//   res.send(App)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
