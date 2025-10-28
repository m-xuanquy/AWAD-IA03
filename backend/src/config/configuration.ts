export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/user-registration',
  },
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  },
});
