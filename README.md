# MERN WebStore

MERN WebStore is a full-stack eCommerce web application developed using MongoDB, Express.js, React.js, and Node.js. The project was built to demonstrate modern web development practices through the implementation of a scalable MERN stack architecture, RESTful APIs, JWT-based authentication, responsive frontend design, and Dockerized deployment workflows.

The application provides a complete online shopping experience where users can browse products, search and filter items, manage shopping carts, place orders, and manage personal accounts through a responsive user interface. In addition to customer functionality, the system also includes a dedicated administrative dashboard that enables administrators to manage products, users, orders, and product image uploads.

The backend server is built using Express.js and MongoDB with Mongoose for database management, while the frontend is developed using React.js with Vite for optimized development performance and fast frontend rendering. The project also integrates Docker and Docker Compose to support both development and production environments, including hot reload support for development and Nginx-based frontend serving for production deployment.

This project demonstrates practical experience with full-stack application development, API integration, authentication systems, database management, containerized deployment, and modern frontend-backend architecture design.
---

# Features

## User Features

- User registration and login
- JWT authentication
- Product browsing
- Product search
- Shopping cart
- Order placement
- User profile management
- Order history

---

## Admin Features

- Admin dashboard
- Product management
- Order management
- User management
- Product image uploads

---

# Tech Stack

## Frontend

- React.js
- Vite
- Axios
- React Router DOM

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

---

## DevOps

- Docker
- Docker Compose
- Nginx

---

# Project Structure

```text
mern-webstore/
├── client/
├── server/
├── docker-compose.yml
├── docker-compose.dev.yml
├── README.md
├── README.Docker.md
├── DOCKER_QUICKSTART.md
└── LOCAL_DEVELOPMENT.md
```

---

# Quick Start

## Production

```bash
docker-compose up -d
```

Frontend:

```text
http://localhost:3000
```

---

## Development

```bash
docker-compose -f docker-compose.dev.yml up -d
```

Development frontend:

```text
http://localhost:5173
```

---

# Local Development

## Backend

```bash
cd server
npm install
npm run dev
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5001
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

# Docker Services

| Service | Port |
|---|---|
| Frontend Production | 3000 |
| Frontend Development | 5173 |
| Backend API | 5001 |
| MongoDB | 27017 |

---

# Additional Documentation

| File | Description |
|---|---|
| README.Docker.md | Docker setup and deployment |
| DOCKER_QUICKSTART.md | Common Docker commands |
| LOCAL_DEVELOPMENT.md | Run project without Docker |

---

# Future Improvements

- Payment gateway integration
- Product reviews and ratings
- Email notifications
- CI/CD pipeline
- Cloud deployment

---

# Author

**Rana Arman**

GitHub:  
https://github.com/armancodee

---

# License

This project is for educational and portfolio purposes.
