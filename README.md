# Getting Started with Create React App

This project is a Secure login system built using React Mysql and  PHP with JWT tokens for authentication. It allows users to register, login, and view their profile information. (https://github.com/adilk121/react-php-secure-auth.git).

## Features
User registration
User login with JWT token authentication
User profile page
User logout functionality


## Installation

Clone the repository to your local machine by clicking on the link.

https://github.com/adilk121/react-php-secure-auth.git

Import the login_system.sql file from root to your MySQL database.

Navigate to the api directory and run composer install to install the necessary dependencies.

Open the database.php file and update the DB_HOST, DB_NAME, DB_USER, and DB_PASS values to match your MySQL database configuration.

Start the PHP server by running php -S localhost:8000 from the api directory.

Navigate to the client directory and run "npm install" to install the necessary dependencies.

Start the React app by running "npm start" from the client directory.


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Usage
Register a new user by clicking the "Register" button on the login page and filling out the registration form.

Log in to the application using your registered email and password.

View your profile information by clicking the "Profile" button in the navigation menu.

Log out of the application by clicking the "Logout" button in the navigation menu.

