import moongose from 'mongoose';

const connectMongodb = async () => {
    try {
        await moongose.connect(process.env.DATABASE_URL, {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
};

export default connectMongodb;


