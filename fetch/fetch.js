const url = 'https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=DEMO_KEY';

const getData = () => {
  const fetchPromiseFunction = (resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(resolve)
    .catch(reject);
  };
  return new Promise(fetchPromiseFunction);
};

export default getData;  