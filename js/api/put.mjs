import axios from 'axios';
// const axios = require('axios');

const url = 'https://t1tvpydrmk.execute-api.ap-southeast-1.amazonaws.com/production';

const requestBody = 
{
    "Item":{
      "Id": 99,
      "Title": "Book 99 Title",
      "ISBN": "999-9999999999",
      "Authors": [
        "Author99"
      ],
      "Price": 99,
      "Dimensions": "8.5 x 11.0 x 0.5",
      "PageCount": 500,
      "InPublication": false,
      "ProductCatalog": "Book"  
    }
};

const config = {
  method: 'put',
  url: url,
  headers: {
    'Content-Type': 'application/json',
  },
  data: requestBody,
};

axios(config)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

