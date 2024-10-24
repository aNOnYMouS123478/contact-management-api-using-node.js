# Contact Management API

A RESTful API for managing contacts, including functionalities for adding, updating, deleting, and retrieving contacts, as well as file uploads for bulk contact management.

## Table of Contents
- [Features](#features)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Backend Server](#running-the-backend-server)
- [Testing the API](#testing-the-api)
- [Database Setup](#database-setup)
- [License](#license)

## Features
- Add a new contact with fields for name, email, phone number, address, and timezone.
- Retrieve a contact by ID or get all contacts.
- Update existing contacts.
- Delete contacts by ID.
- Bulk upload contacts via CSV.
- Download contacts as a CSV file.
- User authentication for secure access.

## Database Schema
### ER Diagram
![ER Diagram] 
(https://lucid.app/lucidspark/d840ee69-54d1-4a7d-8d64-7be1f0616994/edit?viewport_loc=-2010%2C195%2C1916%2C851%2C0_0&invitationId=inv_d8e21631-a557-435b-bf94-0b65283c91ee)

### Tables
- **Users**
  - id (INTEGER, Primary Key)
  - name (STRING, Not Null)
  - email (STRING, Not Null, Unique)
  - password (STRING, Not Null)
  - createdAt (DATE)
  - updatedAt (DATE)

- **Contacts**
  - id (INTEGER, Primary Key)
  - name (STRING, Not Null)
  - email (STRING, Not Null, Unique)
  - phone (STRING, Not Null)
  - address (STRING)
  - timezone (STRING)
  - createdAt (DATE)
  - updatedAt (DATE)

## API Documentation
You can access the API documentation through [Postman](https://www.postman.com/) or [Swagger](http://swagger.io/) (if integrated). Here's a summary of the API endpoints:

### Authentication
- `POST /register`: Register a new user.
- `POST /login`: Login to get a JWT token.

### Contacts
- `POST /contacts`: Add a new contact.
- `GET /contacts`: Retrieve all contacts.
- `GET /contacts/:id`: Retrieve a specific contact by ID.
- `PUT /contacts/:id`: Update a contact by ID.
- `DELETE /contacts/:id`: Delete a contact by ID.
- `POST /contacts/batch`: Bulk upload contacts from a CSV file.
- `GET /contacts/download`: Download contacts as a CSV file.

### File Handling
- `POST /upload`: Upload contacts via CSV.
- `GET /download`: Download contacts in CSV format.

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm (Node Package Manager)
- SQLite (or another database of your choice)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aNOnYMouS123478/contact-management-api-using-node.js.git
   cd contact-management-api

2. Install dependencies:
    npm install

3. Running the Backend Server
    To run the backend server, use the following command:
    npm start
    By default, the server will run on http://localhost:3000.

4. Testing the API
    You can test the API using Postman by following these steps:
    Start the server using npm start.
    Open Postman and set the request type (GET, POST, PUT, DELETE) according to the API endpoint you want to test.
    Enter the API URL (e.g., http://localhost:3000/contacts).
    Add headers if required (e.g., Authorization: Bearer <token> for protected routes).
    Send the request and observe the response.
    Sample Requests :
Register a User:
    POST /register
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
Add a Contact:
    POST /contacts
    {
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "9876543210",
        "address": "456 Elm St",
        "timezone": "GMT+1"
    }
5. Database Setup
    Run Migrations: Ensure that your database is set up correctly by running:
    npx sequelize-cli db:migrate
    
    Seed the Database (optional): If you have seed data, run:
    npx sequelize-cli db:seed:all
6. Edit environment variables
    drop a sample mail & password in env.
