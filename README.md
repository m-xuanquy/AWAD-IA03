# User Registration System (NestJS + React)

A full-stack user registration application built with NestJS backend and React frontend.

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0
- MongoDB (local installation or MongoDB Atlas)

## Quick Start

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Environment Configuration

The backend uses environment variables defined in `backend/.env`:

```env
PORT=3000
DATABASE_URI=mongodb://localhost:27017/user-registration
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Update `DATABASE_URI` to point to your MongoDB instance.

### 3. Run the Application

**Start Backend (Development):**
```bash
cd backend
npm run start:dev
```
Backend will run on: http://localhost:3000

**Start Frontend (Development):**
```bash
cd frontend  
npm run dev
```
Frontend will run on: http://localhost:5173

## API Endpoints

### User Registration
- **POST** `/user/register`
- **Body:** `{ "email": "user@example.com", "password": "123456" }`
- **Response:** `{ "message": "User registered successfully", "user": { "email": "...", "createdAt": "..." } }`

## Features

**Backend (NestJS):**
- User registration with email/password validation
- Password hashing with bcrypt (12 salt rounds)
- Email uniqueness validation
- MongoDB integration with Mongoose
- CORS enabled for frontend communication
- Global validation pipes
- Environment-based configuration

**Frontend (React + TypeScript):**
- Form validation with Zod and React Hook Form
- TanStack Query for API calls
- Tailwind CSS styling with shadcn/ui components
- Error handling and success messages

## Project Structure

```
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── user/           # User module
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── schemas/    # Mongoose schemas
│   │   │   └── ...
│   │   ├── config/         # Configuration
│   │   └── ...
│   └── package.json
├── frontend/               # React Frontend  
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Page components
│   │   └── ...
│   └── package.json
└── README.md
```

## Development Scripts

**Backend:**
- `npm run start:dev` - Development with hot reload
- `npm run build` - Build for production
- `npm run start:prod` - Run production build

**Frontend:**
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

**Backend:**
- NestJS
- MongoDB + Mongoose
- bcryptjs
- class-validator
- @nestjs/config

**Frontend:**
- React + TypeScript
- Vite
- TanStack Query
- React Hook Form + Zod
- Tailwind CSS + shadcn/ui

## Security Features

- Password hashing with bcrypt
- Input validation on both client and server
- CORS configuration
- Environment variable configuration
- Email uniqueness enforcement