// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }

const autobotFrontEnd = require('express');
const app = autobotFrontEnd();

// app.use(requireHTTPS);
app.use(autobotFrontEnd.static('./dist/autobot'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/autobot'}),
);

app.listen(process.env.PORT || 8080)