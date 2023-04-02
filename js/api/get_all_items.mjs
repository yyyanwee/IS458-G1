import axios from 'axios';

const url = 'https://t1tvpydrmk.execute-api.ap-southeast-1.amazonaws.com/production';

const requestBody = 
{

};

const config = {
  method: 'get',
  url: url,
  headers: {
    'Content-Type': 'application/json',
  },
  data: requestBody,
};

axios(config)
  .then((response) => {
    console.log(response.data);
    const data = response.data
    for (let i = 0; i < data.Items.length; i++) {
        console.log(`Title: ${data.Items[i].title}, Price: ${data.Items[i].price}`);
      }
  })
  .catch((error) => {
    console.log(error);
  });

