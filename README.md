# Image Uploder Server
A basic image uploader server built using Node, Express and Cloudinary's Node SDK. **Relies on the [Image Uploader Client](https://github.com/sgarcia-dev/image-uploader-client) built with React to work.**

Created because I couldn't find a drastically simplified, easy to use example on how to upload and view images uploaded to Cloudinary through NodeJS SDK, so I made one. The initial source code was the app built by [Jesse Heaslip](https://codeburst.io/@funador)'s [Simple Image Upload with React](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece) article, but I removed and made changes where possible to remove things I found could be confusing to complete React & Node beginners.

# How to Run Locally
* Clone this repository as well as the [image-uploader-server](https://github.com/sgarcia-dev/image-uploader-client).
* Create a `.env` file and add environment variables for `CLIENT_ORIGIN`, and all cloudinary variables like `CLOUD_NAME`, `API_SECRET`, and `API_KEY`. (You can get the last 3 by [Signing Up for a Cloudinary Account](https://cloudinary.com/signup))
* Run both apps via `npm start`

# Helpful Articles that I used while creating this app (might help clear some questions)
* An explanation on what **multipart/form-data** is and how it works, the contentType of choice for fileUpload in HTTP,  https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean
* A basic Node/Express file upload/download application, Doesn't work 100% but was a good guide, https://gist.github.com/bingeboy/5589501
* How to handle form data unsupported by BodyParser in ExpressJS, https://stackoverflow.com/questions/37630419/how-to-handle-formdata-from-express-4
* express-form-data, an express middleware package that can be used to decode **multipart/form data**, https://www.npmjs.com/package/express-form-data
* multer, another express middlware package that can be used to decode **multipart/form data**, https://www.npmjs.com/package/multer
* Compares multer, and other multipart express middleware alterantives, https://stackoverflow.com/questions/40099016/difference-between-multer-multiparty-and-connect-multiparty-nodejs
* Cloudinary's NodeSDK Guide, https://cloudinary.com/documentation/
* The wonderful foundation for this app, [Jesse Heaslip](https://codeburst.io/@funador)'s [Simple Image Upload with React](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece) article.
