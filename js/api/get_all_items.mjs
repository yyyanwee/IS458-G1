import axios from 'axios';

const url = 'https://tuit1syufc.execute-api.ap-southeast-1.amazonaws.com/production';

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
    // console.log(response.data);
    const data = JSON.parse(response.data.body)
    for (let i = 0; i < data.Items.length; i++) {
        console.log(`Title: ${data.Items[i].Title.S}, Price: ${data.Items[i].Price.N}`);
      }
  })
  .catch((error) => {
    console.log(error);
  });

