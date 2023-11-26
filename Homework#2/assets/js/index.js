const cities = ['Москва', 'Лондон', 'Вашингтон', 'Париж', 'Канберра'];
const temperature = [];

for(let i = 0; i<cities.length; i++){
    temperature[i]= Number(prompt(`Введите температуру для города ${cities[i]}`));
};

const tempMoscow = document.getElementById('moscow');
tempMoscow.textContent = `Температура в Москве: ${temperature[0]} ºC`;

const tempLondon = document.getElementById('london');
tempLondon.textContent = `Температура в Лондоне: ${temperature[1]} ºC`;

const tempWashington = document.getElementById('washington');
tempWashington.textContent = `Температура в Вашингтоне: ${temperature[2]} ºC`;

const tempParis = document.getElementById('paris');
tempParis.textContent = `Температура в Париже: ${temperature[3]} ºC`;

const tempCanberra = document.getElementById('canberra');
tempCanberra.textContent = `Температура в Канберре: ${temperature[4]} ºC`;

const max = Math.max.apply(null, temperature);
const min = Math.min.apply(null, temperature);

const maxTemp = document.getElementById('max');
maxTemp.textContent = `Максимальная температура: ${max} ºC`;
maxTemp.style.fontWeight = 'bold';

const minTemp = document.getElementById('min');
minTemp.textContent = `Минимальная температура: ${min} ºC`;
minTemp.style.fontWeight = 'bold';
