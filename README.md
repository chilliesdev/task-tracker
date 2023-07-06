# Task Tracker

An app were a user can signup, login, add task, get tasks and delete tasks

## Table of contents

-   [Overview](#overview)
    -   [Features](#features)
    -   [Screenshots](#screenshots)
    -   [Links](#links)
    -   [Demo Account](#demo-account)
    -   [Built with](#built-with)
-   [Getting started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Usage](#usage)
-   [Authors](#authors)
-   [Contributing](#🤝-contributing)
-   [License](#📝-license-mit)

## Overview

### Features

-   Login, Register using Laravel Passsport.
-   Add tasks, fetch all tasks and delete tasks
-   Rich text input for description

### Screenshots

![](./img/home.png)

### Links

-   Live Site URL: [Task Tracker](https://task-tracker-x3g8.onrender.com/)
-   Solution URL: [Github](https://github.com/chilliesdev/task-tracker)

### Demo Account

-   **Email**: `bgottlieb@example.com`
-   **Password**: `password`

### Built With

-   PHP
-   Laravel
-   Laravel Passport
-   Typescript
-   ReactJs
-   React Query
-   Tailwind CSS
-   PostgreSQL
-   Docker

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

you should ensure that your local machine has PHP, Composer, Node and NPM installed.

### Installation

1. Clone the repo

```sh
git clone https://github.com/chilliesdev/appointment-app
```

2. Switch to the repo folder

```
cd task-tracker
```

3. Install all the dependencies using composer and npm

```sh
composer install && npm install
```

4. Copy the example env file and make the required configuration changes in the .env file

```sh
cp .env.example .env
```

5. Generate a new application key

```
php artisan key:generate
```

6. Run the database migrations (**Set the database connection in .env before migrating**)

```
php artisan migrate
```

7. enerate the encryption keys Passport needs in order to generate access tokens.

```
php artisan passport:keys
```

8. Start the local development server

```
php artisan serve
```

9. Start Vite server

```
npm run dev
```

### Usage

You can now access the server at http://localhost:8000

## Authors

👤 **Kayode Mathew**

-   GitHub:[@chilliesdev](https://github.com/chilliesdev)
-   Twitter: [@MatthewKayode14](https://twitter.com/MatthewKayode14)
-   LinkedIn: [Kayode Matthew](https://www.linkedin.com/in/kayode-matthew-16995a1a9/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the issues page. Show your support
Give a ⭐️ if you like this project!

## 📝 License MIT

This project is [MIT](./LICENSE) licensed.
