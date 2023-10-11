# Social Network App Express Server with MongoDB

This repository contains the backend server code for a social network app using Express.js and MongoDB. This server handles various endpoints for user authentication, posts, comments, and interactions within the social network.

## Table of Contents

- [Social Network App Express Server with MongoDB](#social-network-app-express-server-with-mongodb)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Contributing](#contributing)
  - [Video demo](#video-demo)
  - [License](#license)

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running or a MongoDB cloud account.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd social-network-express-mongodb
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Go to the config folder then the connection.js file. Change the file if needed, to connect to a mongodb database. 

## Usage

1. Install the packages

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```


3. Access the API at `http://localhost:3001` or the configured port.

## Endpoints

The API provides the following endpoints:

- **User:**
  - `GET /api/users`: Get all users
  - `GET /api/users/:id`: Get one user
  - `POST /api/users`: Make a user
  - `PUT /api/users`: Change a user
  - `DELETE /api/users`: Delete a user

  - **Friends:**
    - `POST /api/users/:id`: add friend to user
    - `DELETE /api/users/:id`: delete friend to user

- **Thought:**
  - `GET api/thoughts`: Get all thoughts.
  - `GET api/thoughts/:id`: Get a thought.
  - `POST api/thoughts`: Create a new thougths.
  - `PUT api/thoughts`: Change a thougths
  - `POST api/thoughts/:thoughtsID/reactions`: Create a reaction
  - `DELETE api/thoughts/:thoughtsID/reactions`: Delete a reaction

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Please follow the [code of conduct](CODE_OF_CONDUCT.md).

## Video demo

Video link: https://drive.google.com/file/d/1gKG4_c6LvM639e2vbxMQZdL_1q3WdvcV/view

## License

This project is licensed under the [MIT License](LICENSE).