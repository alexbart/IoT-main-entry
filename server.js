const dotenv = require('dotenv');
dotenv.config();


const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
    success: true,
    data: {
        message: 'Welcome to our API endpoint 1',
        },
    }); 
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
