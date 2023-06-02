const url = 'https://jsonplaceholder.typicode.com/posts/';
const submit = document.querySelector('#submit');

function getId() {
  const inputId = document.querySelector('#inputId');
  let targetValue;
  const reqExp = /^([1-9]|[1-9][0-9]|100)$/;

  inputId.addEventListener('keyup', (e) => {
    targetValue = e.target.value;
    inputId.classList.remove('valid', 'invalid');
    if (reqExp.test(targetValue)) {
      inputId.classList.add('valid');
    } else {
      inputId.classList.add('invalid');
    }
  });
  return () => Number(targetValue);
}

const getTargetValue = getId();

function makeRequest(url, id) {
  return fetch(`${url}${id}`).then((res) => {
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    return res.json();
  });
}

function createMarkup(post) {
  const postContainer = document.querySelector('#post');
  const p = document.createElement('p');
  p.innerHTML = `id: ${post.id} <br/> title: ${post.title} <br/> body: ${post.body}`;
  postContainer.appendChild(p);
}

submit.addEventListener('click', (e) => {
  const postContainer = document.querySelector('#post');
  postContainer.innerHTML = '';
  makeRequest(url, getTargetValue())
    .then((data) => {
      createMarkup(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
