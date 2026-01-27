# Rentals.ph - Property Rental Website

A modern property rental platform for the Philippines built with Laravel (backend) and React + TypeScript (frontend).

## Project Structure

```
Rental.ph/
├── backend/          # Laravel API
└── frontend/         # React + TypeScript frontend
```

## Prerequisites

- PHP 8.1 or higher
- Composer
- Node.js 18+ and npm/yarn
- MySQL or PostgreSQL database

## Quick Setup

You can use the automated setup script:

```bash
./setup.sh
```

Or follow the manual setup below.

## Backend Setup (Laravel)

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install PHP dependencies:
```bash
composer install
```

3. Copy the environment file:
```bash
cp .env.example .env
```

4. Generate application key:
```bash
php artisan key:generate
```

5. Update `.env` with your database credentials:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=rentals_ph
DB_USERNAME=root
DB_PASSWORD=your_password
```

6. Run migrations:
```bash
php artisan migrate
```

7. Seed the database:
```bash
php artisan db:seed
```

8. Start the Laravel development server:
```bash
php artisan serve
```

The API will be available at `http://localhost:8000`

## Frontend Setup (React + TypeScript)

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/properties/featured` - Get featured properties
- `GET /api/properties` - Get all properties (supports `type`, `location`, `search` query params)
- `GET /api/properties/{id}` - Get a specific property
- `GET /api/testimonials` - Get all testimonials
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/{id}` - Get a specific blog post

## Features

- ✅ Modern, responsive landing page
- ✅ Property search and filtering
- ✅ Featured properties carousel
- ✅ Testimonials section
- ✅ Blog posts section
- ✅ RESTful API backend
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Technologies Used

### Backend
- Laravel 10
- PHP 8.1+
- MySQL/PostgreSQL

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Icons

## Development

The frontend is configured to proxy API requests to the Laravel backend. Make sure both servers are running for full functionality.

## License

MIT

