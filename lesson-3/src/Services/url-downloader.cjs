const axios = require('axios');
const fs = require('fs');
const path = require('path');

function processImage(imageUrl, savePath) {
  // Повертаємо новий проміс
  return new Promise((resolve, reject) => {
    // Завантаження зображення за вказаним URL
    axios({
      method: 'get',
      url: imageUrl,
      responseType: 'stream',
    })
      .then((response) => {
        // Створюємо Write Stream для збереження зображення
        const writer = fs.createWriteStream(savePath);

        // Перенаправляємо потік зображення в Write Stream
        response.data.pipe(writer);

        // Прослуховуємо подію завершення запису
        writer.on('finish', () => {
          // Закриваємо Write Stream
          writer.close();

          // Розв'язуємо проміс з успіхом
          resolve('Image processing completed successfully');
        });

        // Прослуховуємо подію помилки при запису
        writer.on('error', (err) => {
          // Відхиляємо проміс з помилкою
          reject(err);
        });
      })
      .catch((error) => {
        // Відхиляємо проміс з помилкою завантаження зображення
        reject(error);
      });
  });
}

// Приклад використання функції
const imageUrl = 'https://flomaster.top/uploads/posts/2023-10/1697203397_flomaster-top-p-krutie-risunki-dlya-srisovki-karandashom-l-2.jpg';
const savePath = path.join(__dirname, 'images', 'downloaded_image.jpg');

processImage(imageUrl, savePath)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
