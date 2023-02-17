/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const button = document.querySelector('.forecast-btn');
const forecast = document.querySelector('h1');
const percentage = document.querySelector('p');
const titleContainer = document.querySelector('.container')

button.addEventListener('click', function() {
    let num = getRandom(1, 4);
    switch (num) {
        case 1:
            forecast.textContent = "Грядут важные события";
            break;
        case 2:
            forecast.textContent = "Ждите, не плача, придет к Вам удача";
            break;
        case 3:
            forecast.textContent = "Вас ждет приятный сюрприз";
            break;
    }
    let percentage = getRandom(1, 101) + '%';

    function createNewForecast(title, text) {
        const template = document.querySelector("#forecast-item");
        const newForeCast = template.content.cloneNode(true);
        newForeCast.querySelector("h3").textContent = title;
        newForeCast.querySelector("p").textContent = text;
        titleContainer.append(newForeCast);
    }

    createNewForecast(forecast.textContent, percentage);
})


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}