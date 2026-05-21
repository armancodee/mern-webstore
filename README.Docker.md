# Docker Setup for MERN Webstore

This project can be run using Docker in two modes:

- **Production**
- **Development**

---

# Prerequisites

Make sure you have installed:

- Docker
- Docker Compose

Check installation:

```bash
docker --version
docker-compose --version
```

---

# Quick Start

## Production Mode

Build and run all services in production mode:

```bash
docker-compose up -d
```

This starts:

- MongoDB on port `27017`
- Backend server on port `5001`
- Frontend on port `3000`

Access the application:

```text
http://localhost:3000
```

---

## Development Mode

Run development environment with hot reload:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

This starts:

- MongoDB on port `27017`
- Backend server with hot reload on port `5001`
- Frontend Vite dev server on port `5173`

Access development frontend:

```text
http://localhost:5173
```

---

# Useful Commands

## View Logs

```bash
# All services
docker-compose logs -f

# Specific services
docker-compose logs -f server
docker-compose logs -f client
docker-compose logs -f mongodb
```

---

## Stop Services

```bash
docker-compose down
```

---

## Rebuild Images

### Production

```bash
docker-compose build --no-cache
```

### Development

```bash
docker-compose -f docker-compose.dev.yml build --no-cache
```

---

## Seed Database

### Production

```bash
docker-compose exec server npm run seed
```

### Development

```bash
docker-compose -f docker-compose.dev.yml exec server npm run seed
```

---

## Access MongoDB Shell

```bash
docker-compose exec mongodb mongosh
```

---

## Check Running Containers

```bash
docker-compose ps
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```env
# Database
MONGO_URI=mongodb://mongodb:27017/mern_webstore

# Server
PORT=5001
NODE_ENV=production

# JWT Secret
JWT_SECRET=your-secret-key-here
```

---

# Volumes

| Volume | Purpose |
|---|---|
| mongodb_data | Persistent MongoDB storage |
| uploads | Stores uploaded files |

Uploads directory maps to:

```text
./server/public/uploads
```

---

# Network

All services run on the Docker bridge network:

```text
mern-network
```

Services communicate internally using service names:

- `mongodb`
- `server`
- `client`

---

# Features

✅ Dockerized MERN architecture  
✅ Separate production and development environments  
✅ Hot reload support for development  
✅ Persistent MongoDB storage  
✅ Nginx frontend serving  
✅ Environment variable support  
✅ Dockerized client and server builds  
✅ Upload directory mapping  
✅ Multi-container networking  

---

# Troubleshooting

## Clear Everything and Start Fresh

```bash
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

---

## Check Container Status

```bash
docker-compose ps
```

---

## View Container Logs

```bash
docker-compose logs server
docker-compose logs client
docker-compose logs mongodb
```

---

## Restart Specific Service

```bash
docker-compose restart server
```

---

# Production Deployment Notes

Before deploying to production:

1. Configure secure environment variables
2. Replace development secrets
3. Enable HTTPS with reverse proxy
4. Configure MongoDB backups
5. Set Docker resource limits
6. Use production-grade hosting

---

# Development Workflow

1. Start development containers:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

2. Edit code normally
3. Hot reload updates automatically
4. Access frontend:

```text
http://localhost:5173
```

5. Backend reloads automatically using watch mode

---

# Docker Images

| Service | Base Image | Purpose |
|---|---|---|
| MongoDB | mongo:7 | Database |
| Backend | node:18-alpine | Express API |
| Frontend | nginx:alpine | React frontend |
| Development Client | node:18-alpine | Vite dev server |

---

# Author

**Rana Arman**

GitHub:  
https://github.com/armancodee# Docker Setup for MERN Webstore

This project can be run using Docker with two modes: **Production** and **Development**.

## Prerequisites

- Docker and Docker Compose installed on your system

## Quick Start

### Production Mode

Build and run all services in production mode:

```bash
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend server on port 5000
- Frontend on port 3000

Access the application at: http://localhost:3000

### Development Mode

Run with hot-reload for development:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

This will start:
- MongoDB on port 27017
- Backend server with hot-reload on port 5000
- Frontend Vite dev server on port 5173

Access the application at: http://localhost:5173

## Useful Commands

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f server
docker-compose logs -f client
```

### Stop services
```bash
docker-compose down
```

### Rebuild images
```bash
# Production
docker-compose build --no-cache

# Development
docker-compose -f docker-compose.dev.yml build --no-cache
```

### Seed database
```bash
docker-compose exec server npm run seed
docker-compose -f docker-compose.dev.yml exec server npm run seed
```

### Access MongoDB shell
```bash
docker-compose exec mongodb mongosh
```

### Check running containers
```bash
docker-compose ps
```

## Environment Variables

Create a `.env` file in the root directory for custom configuration:

```env
# Database
MONGO_URI=mongodb://mongodb:27017/mern_webstore

# Server
PORT=5000
NODE_ENV=production

# JWT Secret (create one for production!)
JWT_SECRET=your-secret-key-here
```

## Volumes

- **mongodb_data**: Persistent storage for MongoDB data
- **uploads**: Server uploads directory (mapped to ./server/public/uploads)

## Network

All services run on the `mern-network` bridge network for internal communication.

## Troubleshooting

### Clear everything and start fresh
```bash
docker-compose down -v  # Remove volumes
docker system prune -a  # Clean up Docker
docker-compose up -d --build
```

### Check container status
```bash
docker-compose ps
```

### View container logs
```bash
docker-compose logs server
docker-compose logs client
docker-compose logs mongodb
```

### Restart a specific service
```bash
docker-compose restart server
```

## Production Deployment

For production deployment:
1. Update environment variables in docker-compose.yml
2. Use secrets management (not env files)
3. Enable HTTPS with reverse proxy
4. Configure backup for MongoDB volumes
5. Set resource limits for containers

## Development Workflow

1. Start development environment: `docker-compose -f docker-compose.dev.yml up -d`
2. Make code changes (hot-reload is enabled)
3. View changes at http://localhost:5173
4. Backend changes auto-reload (watch mode)
5. MongoDB persists data in named volume

