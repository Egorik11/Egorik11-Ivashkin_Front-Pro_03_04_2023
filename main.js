const typeCity = document.querySelector('#typeCity');

function todoRequest(city) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(
      'GET',
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    );

    xhr.onload = function () {
      if (xhr.status !== 200) {
        throw new Error(`${xhr.status}: ${xhr.statusText}`);
      } else {
        const data = JSON.parse(xhr.responseText);
        resolve(data);
      }
    };

    xhr.send();
  });
}

function createMarkup(data) {
  const info = document.querySelector('.info');
  const dataMain = data.main;
  info.innerHTML = `<p>temp : ${dataMain.temp}</p> <br />
  <p>pressure: ${dataMain.pressure}</p> <br />
  <p>description: ${data.weather[0].description}</p> <br />
  <p>humidity: ${dataMain.humidity}</p> <br />
  <p>speed : ${data.wind.speed}</p> <br />
  <p>deg: ${data.wind.deg}</p> <br />
  <p>pressure: ${dataMain.temp}</p> <br />`;
}

typeCity.addEventListener('click', (e) => {
  e.target.value = '';
});

typeCity.addEventListener('keyup', (e) => {
  const target = e.target.value;

  todoRequest(target)
    .then((data) => {
      createMarkup(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

todoRequest('New York')
  .then((data) => {
    createMarkup(data);
  })
  .catch((error) => {
    console.error(error);
  });
