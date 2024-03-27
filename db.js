import mongoose from 'mongoose';

export const connect = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB!!!');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
};
