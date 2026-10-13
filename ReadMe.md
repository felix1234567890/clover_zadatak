## Instructions

1. First clone this repo to use it localy with this command in your terminal:

- ### `git clone <projectName>`

2. Enter into the project with :

- ### `cd <projectName>`

3. Install all the dependencies with:

- ### `npm install`

5. Run the project with:

- ### `npm start` or `npm run dev`


## Project structure

```
src/
├── server.js                    # entry point (starts the HTTP server, PORT env var, default 3000)
├── app.js                       # Express app setup (routes + error middleware)
├── routes/
│   ├── index.js                 # mounts all route modules
│   └── tracks.routes.js         # /tracks endpoints
├── controllers/
│   └── tracks.controller.js     # request handlers for tracks
├── middleware/
│   └── errorHandler.js          # central error handler
├── errors/
│   └── CustomErrorHandler.js    # error class with an HTTP status code
└── data/
    └── tracks.json              # track data
```
