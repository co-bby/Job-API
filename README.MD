
- [Jobs API](#jobs-api)
  - [Tech Stack](#tech-stack)
  - [Run Locally](#run-locally)
  - [Environment Variables](#environment-variables)
  - [API Reference](#api-reference)
      - [Register](#register)
        - [Sucessful Response](#sucessful-response)
      - [Login](#login)
        - [Successful Response](#successful-response)
      - [Create a Job](#create-a-job)
      - [To access to routes after login](#to-access-to-routes-after-login)
      - [Get all Job](#get-all-job)
      - [Get/Update/Delete a job](#getupdatedelete-a-job)

# Jobs API

A restful Jobs API

## Tech Stack

**Client:** No Frontend!!

**Server:** Node, Express, MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/co-bby/jobs
```

Go to the project directory

```bash
  cd <projectname>
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
 nodemon
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

These are examples

`MONGO_URI`= mongodb+srv://username:<password>@cluster0.9t7ho.mongodb.net/Jobs-API?retryWrites=true&w=majority

`JWT_SECRET`= WfTkWnZq4t7w!z%C*F-JaMdKgUkXp2s5

`JWT_LIFETIME`= 30d

## API Reference

#### Register

```http
  POST /api/v1/auth/register
```

| Req.body    | Value    | Remarks             |
| :-------- | :------- | :------------------------- |
| `username`    | `Unique username` | **Required**. Eg: Cobby |
| `password` | `New user's password` | Required User password from 6-20 characters |
| `Email` | `New user's E-mail` | **Required**. |

##### Sucessful Response

```json
{
  "user": {
    "name": username
  },
  "token": auth token
}

```

#### Login

```http
  POST /api/v1/auth/login
```

| Req.body    | Value    | Remarks             |
| :-------- | :------- | :------------------------- |
| `username`    | `Registered Unique username` | **Required**. Eg: Cobby |
| `password` | `Registered user's password` | Required User password from 6-20 characters |

##### Successful Response

```json
{
  "user": {
    "name": username
  },
  "token": auth token
}

```

#### Create a Job

```http
POST /api/v1/jobs
```

| Req.body    | Value    | Remarks             |
| :-------- | :------- | :------------------------- |
| `company`    | `company name` | . Eg Apple |
| `Position` | `job Position` |Eg Senior Engineer |

#### To access to routes after login

| req.headers.authorization   | Value    | Remarks             |
| :-------- | :------- | :------------------------- |
| `authorization header`    | `Bearer + " " auth token`|  Eg: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2M2OW

#### Get all Job

```http
Get /api/v1/jobs
```

#### Get/Update/Delete a job

```http
Get/Patch/Delete /api/v1/job/{jobID}
```
