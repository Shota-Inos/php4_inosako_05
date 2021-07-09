GET https://newsapi.org/v2/everything?q=Apple&from=2021-06-27&sortBy=popularity&apiKey=API_KEY


//Example request
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-06-27&' +
          'sortBy=popularity&' +
          'apiKey=3a37b7b81cd34b3288a0d87e8981423b';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

