const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings

app.set('appName', 'Express Tutorial');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middlewares

app.use(express.json());
app.use(morgan('dev'));

// Routes

app.get('/', (req, res) => {
  const data = [
    { name: 'John' },
    { name: 'Joe' },
    { name: 'Cameron' },
    { name: 'Ryan' },
  ];
  res.render('index.ejs', { people: data });
});

app.get('/contact', (req, res) => {
  res.send('This is my contact: +4242424242');
});

app.get('/about', (req, res) => {
  res.send('About me');
});

app.get('/users', (req, res) => {
  res.json({
    id: '1234',
    username: 'Demon',
  });
});

app.post('/users/:id', (req, res) => {
  console.log(req.body);
  res.send('User recived');
});

app.post('/post-request', (req, res) => {
  res.send('Post Req received');
});

app.put('/put-request', (req, res) => {
  res.send('Put Req received (update)');
});

app.delete('/delete-request', (req, res) => {
  res.send('delete Req received');
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Listening on port 5000', app.get('port'));
});
