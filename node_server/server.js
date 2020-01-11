const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8000;
const router = express.Router();
app.use('/api', router);

const APIkey = '4481cb1d76e339cb0f637dde718e5ffd';
const APItoken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDgxY2IxZDc2ZTMzOWNiMGY2MzdkZGU3MThlNWZmZCIsInN1YiI6IjVlMWExMDllMjNkMjc4MDAxMjlhZjVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.--n0gED6UAf0Z-TAJl68CKNZ3-5arbwty8BGPesitMs';
//'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + APIkey         <- get 1 movie
//'https://api.themoviedb.org/3/trending/movie/week?api_key=' + APIkey      <- get 20 trending movies

/*var corsOptions = {
  origin: 'localhost:4200',
  optionsSuccessStatus: 200
};*/

app.listen(port, () => {
  console.log('Server started!')
});

/*app.route('/api/films').get((req, res) => {});

app.route('/api/films/:id').get((req, res) => {
  const filmId = req.params['id'];
});*/

app.route('films').get((req, res) => {
  return {message: 'all green'};
});
