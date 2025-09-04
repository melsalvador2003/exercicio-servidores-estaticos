let button = document.getElementById('btnUsers');

button.addEventListener('click', function () {
    // ASSINCRONA
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));
    // console.log("Clicou!");
});

// // SINCRONA
// function qqrCoisa() {
//     console.log("X");
//     console.log("Y");
// }