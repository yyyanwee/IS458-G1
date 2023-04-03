import axios from 'axios';
// const axios = require('axios');

const url = 'https://t1tvpydrmk.execute-api.ap-southeast-1.amazonaws.com/production';

const requestBody = 
{
  "Item":{
    "Id": 8,
    "Title": "Exfoliating Scrub",
    "Price": 20,
    "Description": "Cleanse your skin without stripping it of its natural oils with our gentle, non-drying facial cleanser that leaves your skin feeling refreshed and soft", 
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

