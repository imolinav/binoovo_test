# Movies-Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `node node_server/server.js` to deploy the Node.js server.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project explanation

The Angular app connects to the Node.js server endpoints, which then connects to the external "The Movie Database API" and retrieves data depending on the endpoint (either the 20 trendiest films of the week or the chosen film by id).

The external API returns the data to the Node.js server, which then returns it to the Angular app which prints it on screen.
