# 📧 Email-Based OTP Authentication Setup

## Backend Setup

### 1. Install Dependencies
In the `backend` folder, run:
```bash
npm install
```

This will install:
- `express` - Web framework
- `dotenv` - Environment variables
- `mongoose` - MongoDB ORM
- `nodemailer` - Email sending
- `cors` - Cross-origin resource sharing
- `jsonwebtoken` - JWT tokens
- `bcryptjs` - Password hashing

### 2. Configure Environment Variables (`.env`)

Update `backend/.env` with your settings:

#### Option A: Using Gmail (Recommended for testing)
```
MONGO_URI=
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_123
JWT_EXPIRE=7d

# Gmail Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_16_digit_app_password

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**How to get Gmail App Password:**
1. google
2. Enable "2-Step Verification"
3. Go to "App passwords" (at the bottom)
4. Select "Mail" and "Windows Computer"
5. Copy the 16-digit password and paste in `EMAIL_PASSWORD`

#### Option B: Using Ethereal Email (For Testing - Works Out of the Box)
If you don't have Gmail configured, the system automatically uses Ethereal (free test email service):
- No configuration needed!
- Each email sent generates a preview URL in the console
- Perfect for development

### 3. Start the Backend Server
```bash
npm start
```

You should see:
```
✅ MongoDB Connected: ...
🚀 Server running on port 5000
📧 Email service: your_gmail@gmail.com
```

### 4. Test the API Endpoints

**Send OTP:**
```bash
POST http://localhost:5000/api/auth/send-otp
Content-Type: application/json

{
  "email": "user@yopmail.com"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP sent to your email",
  "email": "user@yopmail.com"
}
```

**Verify OTP:**
```bash
POST http://localhost:5000/api/auth/verify-otp
Content-Type: application/json

{
  "email": "user@yopmail.com",
  "otp": "1234"
}
```

Response:
```json
{
  "success": true,
  "message": "OTP verified successfully",
  "token": "eyJhbGc...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "user@yopmail.com",
    "isVerified": true
  }
}
```

---

## Frontend Setup

The frontend is already configured to call the backend API at `http://localhost:5000/api`.

### 1. Install Dependencies (if not done)
```bash
cd frontend
npm install
```

### 2. Start the Frontend
```bash
npm start
```

The app will run on `http://localhost:3000`

---

## Testing Flow

### Using Yopmail (Recommended)
1. Go to https://yopmail.com
2. Create a random email: `testuser@yopmail.com`
3. In the login form, enter: `testuser@yopmail.com`
4. Click "CONTINUE"
5. Check the inbox at yopmail.com for the OTP
6. Enter the OTP and click "VERIFY & SIGN IN"
7. You'll be logged in and redirected home!

### Using Gmail Account
1. Use your actual Gmail address in the login form
2. The OTP will be sent to your Gmail inbox
3. Copy the OTP and paste it in the app

### Using Ethereal (Test Email)
1. Enter any email format in the login form
2. Click "CONTINUE"
3. Check the backend console for the preview URL
4. Click the preview URL to see the test email with OTP
5. Enter the OTP in the app

---

## Troubleshooting

### Error: "Cannot POST /api/auth/send-otp"
- Backend is not running
- Fix: Run `npm start` in the `backend` folder

### Error: "Failed to send OTP email"
- Gmail credentials are wrong or not configured
- The app will automatically use Ethereal if Gmail fails
- Check the console for preview URL

### Error: "CORS error"
- Frontend and backend are on different origins
- Fix: Ensure `FRONTEND_URL` in `.env` matches your frontend URL

### OTP not received in Yopmail
- Wait a few seconds
- Check spam folder
- Refresh the yopmail inbox

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/send-otp` | Send OTP to email |
| POST | `/api/auth/verify-otp` | Verify OTP and get JWT token |
| GET | `/api/auth/user` | Get current logged-in user (requires token) |
| GET | `/api/health` | Health check |

---

## Security Notes

- OTP expires in **10 minutes**
- JWT tokens expire in **7 days** (configurable)
- Change `JWT_SECRET` in production
- Never commit `.env` file to Git
- Use HTTPS in production
- Use environment-specific secrets in production

---

## File Structure

```
backend/
  config/
    db.js               # MongoDB connection
    emailConfig.js      # Email configuration (Nodemailer)
  controllers/
    authController.js   # OTP send/verify logic
  models/
    User.js             # User schema
  routes/
    authRoutes.js       # Auth API routes
  .env                  # Environment variables
  server.js             # Main server file

frontend/
  src/
    components/
      loginpage.js      # Login page with API calls
```

---

Happy coding! 🚀
