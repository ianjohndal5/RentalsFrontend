# Quick Setup Guide

## Initial Setup

### Backend (Laravel)

1. **Install Composer dependencies:**
   ```bash
   cd backend
   composer install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

3. **Configure database in `.env`:**
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=rentals_ph
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

4. **Run migrations and seed:**
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

5. **Start server:**
   ```bash
   php artisan serve
   ```
   Backend runs on: `http://localhost:8000`

### Frontend (React + TypeScript)

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

## Notes

- The frontend is configured to proxy API requests to `http://localhost:8000`
- Make sure both servers are running for full functionality
- The database seeder creates sample data for properties, testimonials, and blogs

## Troubleshooting

### CORS Issues
If you encounter CORS errors, make sure:
- The `CORS_ALLOWED_ORIGINS` in backend `.env` includes `http://localhost:5173`
- The Laravel CORS middleware is properly configured

### Database Connection
- Ensure MySQL/PostgreSQL is running
- Verify database credentials in `.env`
- Create the database if it doesn't exist: `CREATE DATABASE rentals_ph;`

