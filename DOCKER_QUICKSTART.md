# Docker Quick Start Guide

# 🚀 Quick Commands

## Production Build & Run

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## Development Mode (Hot Reload)

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

---

# 📦 Services

| Service | Port | URL | Description |
|---|---|---|---|
| Client (Production) | 3000 | http://localhost:3000 | React frontend with Nginx |
| Client (Development) | 5173 | http://localhost:5173 | Vite development server |
| Server API | 5001 | http://localhost:5001 | Express backend API |
| MongoDB | 27017 | mongodb://localhost:27017 | MongoDB database |

---

# 🛠️ Common Tasks

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

## Rebuild Containers

### Production

```bash
docker-compose up -d --build
```

### Development

```bash
docker-compose -f docker-compose.dev.yml up -d --build
```

---

## Access Container Shell

### Backend Container

```bash
docker-compose exec server sh
```

### Frontend Container

```bash
docker-compose exec client sh
```

### MongoDB Shell

```bash
docker-compose exec mongodb mongosh
```

---

## Clean Everything

### Stop Containers

```bash
docker-compose down
```

### Remove Volumes

```bash
docker-compose down -v
```

⚠️ This deletes MongoDB data.

### Full Docker Cleanup

```bash
docker system prune -a
```

---

# 🔧 Environment Variables

Default configuration:

```env
MONGO_URI=mongodb://mongodb:27017/mern_webstore
PORT=5001
NODE_ENV=production
```

---

# 📝 Default Admin Account

After seeding the database:

| Field | Value |
|---|---|
| Email | admin@example.com |
| Password | admin123 |

---

# 🐛 Troubleshooting

## Port Already In Use

### Windows

```cmd
netstat -ano | findstr :5001
```

### macOS / Linux

```bash
lsof -i :5001
```

---

## Container Fails To Start

```bash
# Check logs
docker-compose logs

# Restart backend service
docker-compose restart server
```

---

## MongoDB Issues

```bash
# MongoDB logs
docker-compose logs mongodb

# Access MongoDB shell
docker-compose exec mongodb mongosh
```

---

## Docker Images Not Updating

```bash
# Rebuild without cache
docker-compose build --no-cache

# Force recreate containers
docker-compose up -d --build --force-recreate
```

---

# 🎯 Development Workflow

## 1. Start Development Environment

```bash
docker-compose -f docker-compose.dev.yml up -d
```

---

## 2. Edit Source Code

Frontend source:

```text
client/src/
```

Backend source:

```text
server/src/
```

Hot reload updates automatically.

---

## 3. Access Application

```text
http://localhost:5173
```

---

## 4. View Logs If Needed

```bash
docker-compose -f docker-compose.dev.yml logs -f
```

---

# 📦 Production Deployment

## Build Production Images

```bash
docker-compose build
```

---

## Start Production Containers

```bash
docker-compose up -d
```

---

## Production URLs

Frontend:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:5001
```

---

## Recommended Production Configuration

- Configure secure environment variables
- Replace development JWT secrets
- Enable HTTPS with reverse proxy
- Configure MongoDB backups
- Use Docker secrets management
- Set container resource limits

---

# 📂 Project Structure

```text
mern-webstore/
├── client/
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── nginx.conf
│   └── src/
│
├── server/
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   └── src/
│
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

---

# 📚 Additional Documentation

- `README.Docker.md` → Detailed Docker documentation
- `LOCAL_DEVELOPMENT.md` → Run project without Docker

---

# Author

**Rana Arman**

GitHub:  
https://github.com/armancodee
