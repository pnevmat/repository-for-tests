const containerRef = document.querySelector('#test-request');

const form = document.createElement('form');
form.classList.add('js-form');

const input = document.createElement('input');
input.name = 'query';

const button = document.createElement('button');
button.classList.add('js-button');
button.innerHTML = 'Искать';
button.type = 'submit';

form.appendChild(input);
form.appendChild(button);

containerRef.appendChild(form);

const submitFormRef = document.querySelector('.js-form');
console.dir(containerRef);

submitFormRef.addEventListener('submit', event => {
    event.preventDefault();
    const query = event.currentTarget.elements.query.value;
    console.dir(query);

    fetch(`${rootLink}?key=${key}&q=${query}&image_type=${imgType}&orientation=${orient}&page=${page}&per_page=${perPage}&`)
    .then(responce => responce.json())
    .then(data => console.log(data.hits));
});

const rootLink = 'https://pixabay.com/api/';
// const endPoint = ;
const key = '19686819-03f2ab0cba3a581dcc64d8dd3';

const imgType = 'photo';
const orient = 'horizontal';
const page = 1;
const perPage = 10;

