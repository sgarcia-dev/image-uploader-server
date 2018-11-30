![Cloudinary Logo](https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png)
# Image Uploder Server
A basic image uploader server built using Node, Express and Cloudinary's Node SDK. Relies on the [Image Uploader Client](https://github.com/sgarcia-dev/image-uploader-client) to work.

# How to Run Locally
* Clone this repository as well as the [image-uploader-server client](https://github.com/sgarcia-dev/image-uploader-client).
* Create a `.env` file and add environment variables for `CLIENT_ORIGIN`, and all cloudinary variables like `CLOUD_NAME`, `API_SECRET`, and `API_KEY`. (You can get the last 3 by [Signing Up for a Cloudinary Account](https://cloudinary.com/signup))
* Run both apps via `npm start`
