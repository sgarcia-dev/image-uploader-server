# Image Uploder Server
A basic image uploader server built using Node, Express and Cloudinary's Node SDK. Relies on the [Image Uploader Client](https://github.com/sgarcia-dev/image-uploader-client) built with React to work. Created to serve as a guide for people who are having trouble getting basic image uploading to work on Cloudinary. Based on the app built by Jesse Heaslip's [Simple Image Upload with React](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece) article, but simplified and with all the non essential stuff which made this harder to understand by complete beginners removed.

# How to Run Locally
* Clone this repository as well as the [image-uploader-server client](https://github.com/sgarcia-dev/image-uploader-client).
* Create a `.env` file and add environment variables for `CLIENT_ORIGIN`, and all cloudinary variables like `CLOUD_NAME`, `API_SECRET`, and `API_KEY`. (You can get the last 3 by [Signing Up for a Cloudinary Account](https://cloudinary.com/signup))
* Run both apps via `npm start`
