require('dotenv').config();
const os = require('os');
const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
// File handling middleware
const expressFormData = require('express-form-data');
const multer = require('multer');
const upload = multer({ dest: os.tmpdir() });

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN
    })
);
// You can use express-form-data, or multer's as file input middleware (multer is far more widely used)
// app.use(expressFormData.parse({ uploadDir: os.tmpdir(), autoClean: true }));
app.use(upload.any());

app.get('/wake-up', (req, res) => res.send('👌'));

app.post('/image-upload', (req, res) => {
    const values = Object.values(req.files);
    const promises = values.map(image =>
        cloudinary.uploader.upload(image.path)
    );

    Promise.all(promises).then(results => res.json(results));
});

app.listen(process.env.PORT || 8080, () => console.log('Server running !!!'));
