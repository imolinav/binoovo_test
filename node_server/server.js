const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8000;

const uri = 'https://api.themoviedb.org/3/';
const APIkey = '4481cb1d76e339cb0f637dde718e5ffd';
// uri + 'movie/' + id + '?api_key=' + APIkey         <- get 1 movie
// uri + 'trending/movie/week?api_key=' + APIkey      <- get 20 trending movies

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.listen(port, () => {
  console.log('Server started on port ' + port + '!');
});

//Connection to the movies API with the cors middleware options and return of parsed response
app.route('/api/films').get(cors(corsOptions), (req, res) => {
  request.get(uri + 'trending/movie/week?api_key=' + APIkey, (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.send(JSON.parse(body));
  })

});

app.route('/api/films/:id').get(cors(corsOptions), (req, res) => {
  var filmId = req.params['id'];
  request.get(uri + 'movie/' + filmId + '?api_key=' + APIkey, (error, response, body) => {
    if(error) {
      return console.dir(error);
    }
    res.send(JSON.parse(body));
  })
});
