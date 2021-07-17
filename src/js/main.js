const name = document.querySelector('#name');
const email = document.querySelector('#email');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    toggleModal();

    saveInLocalStorage(name.value, email.value);
});

function saveInLocalStorage(name, email) {
    localStorage.setItem(
        'e-commerce:database',
        transformDataInJson({ name, email })
    );
}

function transformDataInJson(data) {
    return JSON.stringify(data);
}
