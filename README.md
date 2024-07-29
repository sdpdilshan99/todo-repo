# MERN ToDo Application

This is a simple ToDo application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Users can add, edit, and delete tasks. The application also uses toast messages to display alerts and notifications.

## Features

- Add tasks
- Edit tasks
- Delete tasks
- Toast messages for alerts and notifications

## Technologies Used

- MongoDB: Database
- Express.js: Backend framework
- React: Frontend library
- Node.js: Backend runtime environment

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    

2. Install dependencies for both the client and server:

    bash
    # Install server dependencies
    cd backend
    npm install

    # Install client dependencies
    cd ../frontend
    npm install
    

3. Set up your MongoDB connection:

    Create a .env file in the backend directory with the following content:

    env
    MONGO_URI=your_mongodb_connection_string
    

4. Run the application:

    bash
    # Run server
    cd backend
    npm start

    # Run client
    cd ../frontend
    npm run dev
    

### Running the Application

1. Start the server:

    bash
    cd backend
    npm start
    

    This will start the server on http://localhost:3001.

2. Start the client:

    bash
    cd ../frontend
    npm run dev
    

    This will start the client on http://localhost:5173.


## Deployment

To deploy this application, you can follow the steps to containerize it using Docker and automate the deployment process using CI/CD tools like Jenkins, Ansible, or Terraform. For more details on deploying, refer to the relevant documentation or guides.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Contact

For any questions or feedback, please contact [sdpdilshan.rcc@gmal.com].