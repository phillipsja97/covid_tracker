import axios from 'axios';

const getAllData = () => new Promise((resolve, reject) => {
  axios.get('https://api.covid19api.com/summary')
    .then((result) => {
      const allDataObj = result.data;
      const data = [];
      data.push(allDataObj);
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getAllData };
