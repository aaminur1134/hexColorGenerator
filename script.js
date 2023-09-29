const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const hexColorBtn = document.querySelector('#hexBtn');
const bgColor = document.querySelector('body');

const hexCode = document.querySelector('#hexColor');
const copyBtn = document.querySelector('#copy-btn');


hexColorBtn.addEventListener('click', function () {
    hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomColor = Math.floor(Math.random() * hexNumbers.length);
        hexColor += hexNumbers[randomColor];
    }

    bgColor.style.backgroundColor = hexColor;
    hexCode.innerHTML = hexColor;
    hexCode.value = hexColor;
});

copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(hexCode.value);
});

