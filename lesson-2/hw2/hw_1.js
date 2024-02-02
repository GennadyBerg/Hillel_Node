
let localPaths = [
      // 'user.json',
      // 'guest.json',
      'posts/1',
      'photos/1',
      'albums/1',
];

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const results = [];

async function downloadUrl(url) {
      try {
            const response = await fetch(url);
            if (!response.ok) {
                  throw new Error(`Failed to fetch ${url}, status: ${response.status}`);
            }
            const data = await response.json();
            results.push(data);
      } catch (error) {
            console.error(error.message);
      }
}

async function downloadSequentially() {
      const fullUrls = localPaths.map(localPath => baseUrl + localPath);

      for (const url of fullUrls) {
            await downloadUrl(url);
      }


      console.log(results);
}


downloadSequentially();
