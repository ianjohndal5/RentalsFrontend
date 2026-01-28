# Agent Registration Backend Setup

## Overview
A complete backend system has been created for agent registration that connects your RegisterModal frontend to a MySQL database using Laravel.

## What Was Created

### Backend Files
1. **Migration**: `backend/database/migrations/2024_01_01_000007_create_agents_table.php`
   - Creates the `agents` table with all fields from RegisterModal
   - Includes personal info, agency info, and PRC certification fields

2. **Model**: `backend/app/Models/Agent.php`
   - Eloquent model for agents
   - Includes password hashing and proper casting
   - Extends Authenticatable for future authentication

3. **Controller**: `backend/app/Http/Controllers/Api/AgentController.php`
   - `register()` method handles agent registration
   - Validates all required fields
   - Returns proper JSON responses

4. **Routes**: Updated `backend/routes/api.php`
   - `POST /api/agents/register` - Register new agent
   - `GET /api/agents/me` - Get current agent (requires authentication)

### Frontend Updates
1. **API Service**: Updated `frontend/src/services/api.ts`
   - Added `registerAgent()` function
   - Added TypeScript interfaces for type safety

2. **RegisterModal**: Updated `frontend/src/components/RegisterModal.tsx`
   - Integrated with backend API
   - Added loading states and error handling
   - Shows success/error messages

## Setup Instructions

### 1. Run the Migration
Navigate to the backend directory and run:
```bash
cd backend
php artisan migrate
```

This will create the `agents` table in your MySQL database.

### 2. Create Storage Link (for file uploads)
To enable file uploads for PRC License documents, create a symbolic link:
```bash
cd backend
php artisan storage:link
```

This creates a link from `public/storage` to `storage/app/public`, allowing uploaded files to be accessible via the web.

### 3. Verify Database Connection
Make sure your `.env` file in the `backend` directory has the correct MySQL credentials:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 4. Start the Backend Server
```bash
cd backend
php artisan serve
```
The API will be available at `http://localhost:8000`

### 5. Start the Frontend Server
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

## API Endpoint

### Register Agent
**POST** `/api/agents/register`

**Request Body:** (multipart/form-data)
- All form fields as form data
- `licenseDocument`: File (PDF, JPG, PNG - max 10MB)

Example using FormData:
```javascript
const formData = new FormData();
formData.append('firstName', 'John');
formData.append('lastName', 'Doe');
formData.append('email', 'john.doe@example.com');
formData.append('password', 'password123');
formData.append('phone', '+1234567890');
formData.append('dateOfBirth', '1990-01-01');
formData.append('agencyName', 'ABC Realty');
formData.append('officeAddress', '123 Main St');
formData.append('city', 'Manila');
formData.append('state', 'Metro Manila');
formData.append('zipCode', '1000');
formData.append('prcLicenseNumber', 'PRC-12345');
formData.append('licenseType', 'broker');
formData.append('expirationDate', '2025-12-31');
formData.append('yearsOfExperience', '5-10');
formData.append('licenseDocument', file); // File object
formData.append('agreeToTerms', 'true');
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Agent registration successful! Your application is pending approval.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "status": "pending"
  }
}
```

**Error Response (422):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["The email has already been taken."],
    "prcLicenseNumber": ["The prc license number has already been taken."]
  }
}
```

## Database Schema

The `agents` table includes:
- Personal information (first_name, last_name, email, password, phone, date_of_birth)
- Agency information (agency_name, office_address, city, state, zip_code)
- PRC certification (prc_license_number, license_type, expiration_date, years_of_experience, license_document_path)
- Status tracking (status: pending/approved/rejected)
- Timestamps (created_at, updated_at)

## Features

✅ Complete form validation
✅ Password hashing
✅ Email uniqueness check
✅ PRC license number uniqueness check
✅ License expiration date validation (must be in the future)
✅ **File upload for PRC License Copy** (PDF, JPG, PNG - max 10MB)
✅ File validation (type and size)
✅ Drag and drop file upload support
✅ Status tracking (pending/approved/rejected)
✅ Error handling with detailed messages
✅ Success feedback to users

## Next Steps

1. **Run the migration** to create the agents table
2. **Create storage link** for file uploads: `php artisan storage:link`
3. **Test the registration** by submitting the form in the frontend with a PRC license file
4. **Check the database** to verify agents are being created
5. **Check storage** at `backend/storage/app/public/agents/licenses/` for uploaded files
6. **Optional**: Add email verification
7. **Optional**: Create admin panel to approve/reject agents
8. **Optional**: Add file download/view functionality for admins

## Troubleshooting

### Migration Fails
- Check MySQL connection in `.env`
- Ensure database exists
- Check if table already exists (drop it first if needed)

### File Upload Fails
- Ensure `php artisan storage:link` has been run
- Check that `storage/app/public/agents/licenses/` directory exists (will be created automatically)
- Verify file permissions on storage directory
- Check file size (must be under 10MB)
- Verify file type (PDF, JPG, PNG only)

### CORS Errors
- Verify `CORS_ALLOWED_ORIGINS` in backend `.env` includes `http://localhost:5173`
- Check `backend/config/cors.php` configuration

### Validation Errors
- Check that all required fields are filled
- Ensure email and PRC license number are unique
- Verify date formats are correct (YYYY-MM-DD)

