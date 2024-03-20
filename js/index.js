
// ------------------------- FORM ------------------------------
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const nama = document.querySelector('#name');
const phone = document.querySelector('#phone');
const text = document.querySelector('#text');
const submit = document.querySelector('#submit');
const hasil = document.querySelector('#hasil');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validateEmail(email.value)) {
        alert('Alamat email tidak valid');
        email.focus();
        return;
    }

    // Jika validasi berhasil, lanjutkan dengan proses submit form
    submitForm();
});

function validateEmail(email) {

    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function submitForm() {
    let newData = [];

    if (localStorage.getItem('data') !== null) {
        newData = JSON.parse(localStorage.getItem('data'));
    }

    let textInput = document.querySelector('#text');
    let emailInput = document.querySelector('#email');
    let namaInput = document.querySelector('#name');
    let phoneInput = document.querySelector('#phone');

    let newEntry = {
        email: emailInput.value,
        nama: namaInput.value,
        phone: phoneInput.value,
        text: textInput.value
    };

    newData.push(newEntry);

    localStorage.setItem('data', JSON.stringify(newData));
    alert('Pertanyaan ' + newEntry.text + ' berhasil masuk. Terimakasih..');

    hasil.innerHTML += `${newEntry.email}: ${newEntry.text},`;
    
    emailInput.value = '';
    textInput.value = '';
    namaInput.value = '';
    phoneInput.value = '';
}

// ----------------- END FORM ---------------------------