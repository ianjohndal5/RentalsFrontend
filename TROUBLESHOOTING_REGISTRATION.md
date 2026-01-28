# Troubleshooting Agent Registration Issues

## Common Error: "An error occurred. Please try again."

This generic error message can occur for several reasons. Follow these steps to diagnose and fix the issue:

## Step 1: Check Backend Server

**Make sure your Laravel backend is running:**
```bash
cd backend
php artisan serve
```
The server should be running on `http://localhost:8000`

**Verify the server is accessible:**
- Open `http://localhost:8000/api/properties/featured` in your browser
- You should see JSON data, not an error

## Step 2: Check Database Migration

**Run the migration if you haven't already:**
```bash
cd backend
php artisan migrate
```

**Verify the agents table exists:**
```bash
php artisan tinker
>>> Schema::hasTable('agents')
```
Should return `true`

## Step 3: Check Storage Link

**Create the storage link for file uploads:**
```bash
cd backend
php artisan storage:link
```

**Verify the link exists:**
- Check if `backend/public/storage` exists and links to `backend/storage/app/public`
- On Windows, you may need to run as administrator

## Step 4: Check Database Connection

**Verify your `.env` file in the backend directory:**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

**Test database connection:**
```bash
cd backend
php artisan tinker
>>> DB::connection()->getPdo();
```
Should not throw an error

## Step 5: Check CORS Configuration

**Verify CORS is configured in `backend/config/cors.php`:**
```php
'allowed_origins' => explode(',', env('CORS_ALLOWED_ORIGINS', 'http://localhost:5173')),
```

**Check your `.env` file:**
```env
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

## Step 6: Check Browser Console

**Open browser developer tools (F12) and check:**
1. **Console tab** - Look for JavaScript errors
2. **Network tab** - Check the API request:
   - Status code (should be 200 or 201 for success)
   - Response body (shows actual error message)
   - Request URL (should be `/api/agents/register`)

## Step 7: Check Laravel Logs

**View Laravel error logs:**
```bash
cd backend
tail -f storage/logs/laravel.log
```

**Or check the last errors:**
```bash
cat storage/logs/laravel.log | tail -50
```

Look for:
- Database connection errors
- File storage errors
- Validation errors
- Exception messages

## Step 8: Common Issues and Solutions

### Issue: "Network error: Unable to connect to server"
**Solution:**
- Make sure backend server is running on port 8000
- Check if firewall is blocking the connection
- Verify the proxy in `vite.config.ts` points to `http://localhost:8000`

### Issue: "SQLSTATE[42S02]: Base table or view not found"
**Solution:**
- Run migrations: `php artisan migrate`
- Check if database exists and is accessible

### Issue: "The stream or file could not be opened"
**Solution:**
- Create storage link: `php artisan storage:link`
- Check storage directory permissions
- Ensure `storage/app/public/agents/licenses/` directory exists

### Issue: "Validation failed" errors
**Solution:**
- Check the specific validation error message
- Ensure all required fields are filled
- Verify file upload is valid (PDF, JPG, PNG, max 10MB)
- Check email format and uniqueness
- Verify PRC license number is unique

### Issue: CORS errors in browser console
**Solution:**
- Update `backend/.env` with: `CORS_ALLOWED_ORIGINS=http://localhost:5173`
- Clear config cache: `php artisan config:clear`
- Restart Laravel server

## Step 9: Enable Debug Mode (Development Only)

**In `backend/.env`:**
```env
APP_DEBUG=true
```

This will show detailed error messages. **Never enable in production!**

## Step 10: Test the API Directly

**Use Postman or curl to test:**
```bash
curl -X POST http://localhost:8000/api/agents/register \
  -F "firstName=Test" \
  -F "lastName=User" \
  -F "email=test@example.com" \
  -F "password=password123" \
  -F "phone=1234567890" \
  -F "dateOfBirth=1990-01-01" \
  -F "prcLicenseNumber=PRC-12345" \
  -F "licenseType=broker" \
  -F "expirationDate=2025-12-31" \
  -F "yearsOfExperience=5-10" \
  -F "agreeToTerms=true" \
  -F "licenseDocument=@/path/to/file.pdf"
```

This will help identify if the issue is with the frontend or backend.

## Quick Checklist

- [ ] Backend server is running (`php artisan serve`)
- [ ] Frontend server is running (`npm run dev`)
- [ ] Migration has been run (`php artisan migrate`)
- [ ] Storage link exists (`php artisan storage:link`)
- [ ] Database connection is working
- [ ] CORS is configured correctly
- [ ] Browser console shows no errors
- [ ] Laravel logs show no errors
- [ ] All required form fields are filled
- [ ] File upload is valid (type and size)

## Still Having Issues?

1. **Check the browser console** for the exact error message
2. **Check Laravel logs** for server-side errors
3. **Verify all setup steps** from `AGENT_REGISTRATION_SETUP.md`
4. **Test with a simple curl request** to isolate frontend vs backend issues

