const weatherForm = document.querySelector('form');
const addressInput = document.querySelector('#address');
const locationUi = document.querySelector('#location');
const forecastUi = document.querySelector('#forecast');
const fetchForecastErrorUi = document.querySelector('#fetchForecastError');
const loadingUi = document.querySelector('#loading');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  loadingUi.innerText = 'Loading...';
  locationUi.innerText = '';
  forecastUi.innerText = '';
  fetchForecastErrorUi.innerText = '';

  fetch(`/weather?address=${addressInput.value}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        fetchForecastErrorUi.innerText = data.error;
      } else {
        locationUi.innerText = data.location;
        forecastUi.innerText = data.forecast;
      }

      loadingUi.innerText = '';
    });
  });
});
