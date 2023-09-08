const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
// change the theme of the website
document.body.classList.toggle('dark');  // classList jest właściwością każdego elementu HTML, jest obiektem służącym do zarządzania listą klas
// toggle przełącza klasę na podaną w nawiasie. W css stworzona nowa klasa body.dark
});
