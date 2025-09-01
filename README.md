# AgriGrow - Agricultural Platform

A comprehensive full-stack agricultural platform designed to help farmers with financial planning, equipment rental, AI assistance, and community support.

## Features

- **Farmer Dashboard**: Income estimation and financial health tracking
- **Equipment Marketplace**: Rent and upload agricultural equipment
- **AI Chat Bot**: Get personalized farming advice using Google Gemini AI
- **Weather Updates**: Live weather broadcasts and news
- **Community**: Connect with successful farmers and share experiences
- **Multi-language Support**: Available in English, Hindi, Kannada, Telugu, and Tamil

## Tech Stack

### Frontend
- React 18 with Vite
- TailwindCSS for styling
- React Router for navigation
- i18next for internationalization
- React Icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Google Gemini AI integration
- JWT authentication
- Multer for file uploads

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Google Gemini API key

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_google_gemini_api_key
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with:
   ```
   VITE_API_URL=http://localhost:5000
   ```
   For production, use your deployed backend URL.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Live Deployment

- **Frontend**: https://frontend-btwp.onrender.com/
- **Backend**: https://agrigrow-znib.onrender.com

## Deployment

Both frontend and backend are deployed on Render. The `render.yaml` file contains the complete deployment configuration.

### Render Deployment
Both services are already deployed on Render:

1. **Backend**: https://agrigrow-znib.onrender.com
2. **Frontend**: https://frontend-btwp.onrender.com/

To redeploy or update:
1. Push changes to your GitHub repository
2. Render will automatically rebuild and deploy
3. Environment variables are configured in Render dashboard:
   - Backend: `MONGO_URI`, `JWT_SECRET`, `GEMINI_API_KEY`, `FRONTEND_URL`
   - Frontend: `VITE_API_URL` points to backend

## Environment Variables

### Backend (.env)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `GEMINI_API_KEY`: Google Gemini AI API key
- `PORT`: Server port (default: 5000)

### Frontend (.env)
- `VITE_API_URL`: Backend API URL

## API Endpoints

- `POST /api/auth/signin` - User authentication
- `POST /api/auth/signup` - User registration
- `GET /api/healthdashboard/crop-types` - Get available crop types
- `POST /api/healthdashboard/farmer-log` - Submit income estimation
- `GET /api/equipment` - Get all equipment
- `POST /api/equipment/upload` - Upload new equipment
- `POST /api/chat` - AI chat with Google Gemini

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
