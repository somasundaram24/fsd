# Banking Application using React and Strapi

## Overview

This is a simple banking application built with React for the frontend and Strapi as the backend. It allows users to manage their accounts, make transactions, and view their transaction history.

## Getting Started

### Prerequisites

Before you can run this application, make sure you have the following software installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Vivek1671/banking-app.git
   cd banking-app
   ```

2. Install the frontend dependencies:

   ```bash
   cd client
   npm install  # or yarn install
   ```

3. To create Strapi project:


   ```bash
   npx create-strapi-app@latest my-project
   ```

## Project Structure

The project is organized into two main directories:

- `client`: Contains the React frontend application.
- `server`: Contains the Strapi backend application.

## Configuration

### Frontend (React)

- Configuration files for the React application can be found in the `client` directory.

### Backend (Strapi)

- Configuration for the Strapi backend is located in the `server` directory.
- Database configuration, models, and API endpoints can be customized in the Strapi admin panel.

## Running the Application

### Frontend (React)

To run the React frontend application, use the following command within the `client` directory:

```bash
npm start  # or yarn start
```

The application will be available at `http://localhost:3000`.

### Backend (Strapi)

To run the Strapi backend, use the following command within the `server` directory:

```bash
npm run develop  # or yarn develop
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

## Usage

1. Create a user account using the registration form.
2. Log in with your credentials.
3. View account details, including balance and recent transactions.
4. Perform transactions, including deposits and withdrawals.

