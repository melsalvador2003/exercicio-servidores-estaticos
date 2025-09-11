let button = document.getElementById('btnUsers');
let div = document.getElementById('out');

button.addEventListener('click', function () {
    // ASSINCRONA
    fetch('https://jsonplaceholder.typicode.com/posts/88')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                let errorMensage = "Erro: Recurso não encontrado"
                throw new Error("errorMensage")
            }
        })
        .then(function (json) {

            // div.innerText = JSON.stringify(json, null, 0);
            // É um método da classe JSON - STRINGFY

            let post = Post.fromRaw(json);
            div = post.renderFrom(div);
        })
        .catch(function (error) {
            renderError(error);
        })
});

function renderError(error) {
    div.innerHTML = "";

    let h2 = document.createElement(`h2`);
    h2.textContent = error;

    div.appendChild(h2);
}

