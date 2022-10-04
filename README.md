# About this repository

This repository serves as frontend code that consumes data from APIs written in the [cb-backend-node](https://github.com/ajiteshchhatani/cb-backend-node) repository.

## Steps to setup and run locally

- Clone this repository
- Once cloning is complete, run `npm install` to install all dependency packages
- This react project was bootstrapped using vite, to get the project running use the `npm run dev` script and go to `localhost:5173` on your machine.
- Once the app is succesfully running you will see a login screen.
- For now you can login with any id and password and it will successfully log you in through the `login` api endpoint at the backend
- Once you login you will have to click on the `Users` item in the sidebar of the app
- The `Users` route displays a list of users fetched using the `/users` api endpoint
- You can delete a specific user from the table which is achieved using the `/deleteUser` api endpoint
- Use the logout button at the bottom of the app to logout