# Firebase Authentication Project

This project demonstrates how to implement user authentication using Firebase with HTML, CSS, and JavaScript. Users can register, login. The project also includes a user-friendly web interface.

## Features

- User registration with email and password.
- User login
- Attractive and responsive web interface.
- Secure authentication and account management using Firebase.

## Setup and Usage

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/kavineshduraisamy/Firebase-Authentication.git
2. Set up Firebase:
   - Create a Firebase project on the Firebase Console.
   - Configure Firebase in your project by replacing the Firebase configuration in the `script.js` file with your own Firebase project credentials.

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

## Dependencies

This project uses Firebase for authentication services.

## To Run the Project
Open the project's index.html file in your web browser to access the authentication application.
or
Open the project file in text editor(vs code) and run the `index.html` file.
