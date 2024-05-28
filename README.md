# Spam Call Detail Check

This is a backend application for a spam number.

## Features

- User signup/register with name,phone,password,email
- login with phone Number and password
- User can add contact number with name,phone,email
- User can mark spam number using phone number
- User can get detail of spam number by searching name and phone number

## Technologies Used

- Node.js
- Express.js
- MYSQL
- JSON Web Tokens (JWT) for authentication

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kumawatamit587/spam_call_check.git


# API Endpoints

## Authentication

### Sign Up
- `POST /auth/register`: Sign up a user

### Login
- `POST /auth/login`: Login a user

## Add Contact Number

### Post contact
- `POST /contacts/add`: Post the contact detail
### Post to mark spam
- `POST /spam/mark`: mark a number spam
### Get spam contact using search by name and phone number
- `GET /search/name/:name`: get spam contact
- `GET /search/phone/:phone`: get spam contact

