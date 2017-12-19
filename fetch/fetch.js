const url = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY';

const showData = (data) => {
  console.log(data);
};

const getData = (url) => {
  const fetchPromiseFunction = (resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(resolve);
    .catch(error);
  };
  return new Promise(fetchPromiseFunction);
};

getData(url).then(showData);

export default getData;  
