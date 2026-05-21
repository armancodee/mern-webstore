# How to Connect to MongoDB

## Connection Details
- **Host**: `localhost` (or `127.0.0.1`)
- **Port**: `27017`
- **Database**: `mern_webstore`

## Method 1: Using MongoDB Shell (mongosh) in Docker Container

If MongoDB is running in Docker:

```bash
# Connect to MongoDB shell
docker-compose -f docker-compose.dev.yml exec mongodb mongosh mern_webstore

# Or if using docker directly:
docker exec -it mern-mongodb-dev mongosh mern_webstore
```

### Useful MongoDB Commands:

```javascript
// Show all collections (tables)
show collections

// Count documents in a collection
db.products.countDocuments()
db.users.countDocuments()
db.orders.countDocuments()

// View all products
db.products.find().pretty()

// View all users
db.users.find().pretty()

// View all orders
db.orders.find().pretty()

// View first 5 products
db.products.find().limit(5).pretty()

// Find a specific product
db.products.findOne({ name: "Ultra HD Smart TV" })

// Exit MongoDB shell
exit
```

## Method 2: Using MongoDB Compass (GUI Tool)

1. **Download MongoDB Compass**: https://www.mongodb.com/try/download/compass

2. **Connection String**:
   ```
   mongodb://localhost:27017/mern_webstore
   ```

3. **Or use individual fields**:
   - Host: `localhost`
   - Port: `27017`
   - Database: `mern_webstore`
   - Authentication: None (default)

4. Click "Connect" to view your collections and data

## Method 3: Using Command Line (Quick Queries)

```bash
# List all collections
docker-compose -f docker-compose.dev.yml exec mongodb mongosh mern_webstore --eval "show collections"

# Count products
docker-compose -f docker-compose.dev.yml exec mongodb mongosh mern_webstore --eval "db.products.countDocuments()"

# View first product
docker-compose -f docker-compose.dev.yml exec mongodb mongosh mern_webstore --eval "db.products.findOne()"

# View all collection names
docker-compose -f docker-compose.dev.yml exec mongodb mongosh mern_webstore --eval "db.getCollectionNames()"
```

## Method 4: Using VS Code Extension

1. Install "MongoDB for VS Code" extension
2. Add connection: `mongodb://localhost:27017`
3. Select database: `mern_webstore`
4. Browse collections in the sidebar

## Collections in Your Database

- **users** - User accounts (including admin)
- **products** - Product catalog (30 products)
- **orders** - Customer orders

## Troubleshooting

If port 27017 is already in use:
- Check if MongoDB is running locally: `netstat -ano | findstr :27017` (Windows)
- Stop local MongoDB service if needed
- Or change the port in docker-compose.dev.yml

