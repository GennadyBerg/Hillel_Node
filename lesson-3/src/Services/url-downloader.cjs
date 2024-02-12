const axios = require('axios');
const fs = require('fs');
const path = require('path');

function processImage(imageUrl, savePath) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: imageUrl,
      responseType: 'stream',
    })
      .then((response) => {
        const writer = fs.createWriteStream(savePath);

        response.data.pipe(writer);

          writer.on('finish', () => {
          writer.close();

          resolve('Image processing completed successfully');
        });

        writer.on('error', (err) => {
          reject(err);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const imageUrl = 'https://flomaster.top/uploads/posts/2023-10/1697203397_flomaster-top-p-krutie-risunki-dlya-srisovki-karandashom-l-2.jpg';
const savePath = path.join(__dirname, 'images', 'downloaded_image.jpg');

processImage(imageUrl, savePath)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
