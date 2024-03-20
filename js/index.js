
// ------------------------- FORM ------------------------------
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const nama = document.querySelector('#name');
const phone = document.querySelector('#phone');
const text = document.querySelector('#text');
const submit = document.querySelector('#submit');
const hasil = document.querySelector('#hasil');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan form untuk disubmit secara default
    
    if (!validateEmail(email.value)) {
        alert('Alamat email tidak valid');
        email.focus();
        return;
    }

    // Jika validasi berhasil, lanjutkan dengan proses submit form
    submitForm();
});

function validateEmail(email) {
    // Menggunakan regular expression untuk validasi email
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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.remove("bg-dark");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");
    } else {
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-dark");
        navbar.classList.add("navbar-dark");
    }

  }