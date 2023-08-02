let btnLista = document.getElementById("btn-lista");
let btnApagar = document.querySelectorAll(".apagar-lista");
let textoDaLista = document.querySelector("#textoAdicionar")  
let listaDeTarefas = document.getElementById("lista-de-tarefa")
let container = document.querySelector(".container")


let tamanhoLista = 0;

function editarParagrafo(conteudo) {
    //sobe duas div com o parent
    const textoOriginal = conteudo.textContent;

    const inputEditar = document.createElement("input");
    inputEditar.type = "text";
    inputEditar.value = textoOriginal;
    inputEditar.maxLength = "30";

    conteudo.replaceWith(inputEditar);
    inputEditar.focus();

    inputEditar.addEventListener("keyup", function (e) {
        if (e.key == "Enter" && inputEditar.value != "") {
            const novoConteudo = inputEditar.value;
            const novoParagrafo = document.createElement("p")
            novoParagrafo.textContent = novoConteudo;
            inputEditar.replaceWith(novoParagrafo);
            novoParagrafo.addEventListener("click", function () {
                editarParagrafo(novoParagrafo);
            });
        }
    });
    
}


function adicionarLista(textoAtividade) {
    //criar li
    let novoItemLista = document.createElement("li");


    //criar ul
    let listagem = document.querySelector("#lista-de-tarefa");


    //criar p
    let textoParagrafo = document.createElement("p");
    textoParagrafo.textContent = textoAtividade;

    //criar div
    let criarDiv = document.createElement("div");
    criarDiv.classList.add("atividades");

    //criar botoes
    let botaoApagar = document.createElement("button");
    let botaoEditar = document.createElement("button");
    botaoApagar.classList.add("apagar-lista");
    botaoEditar.classList.add("editar-lista");
    botaoApagar.textContent = "Excluir";
    botaoEditar.textContent = "Editar";

    //criar div botoes
    let divBotoes = document.createElement("div");
    divBotoes.classList.add("modificar-lista")

    //adicionando botoes a div
    divBotoes.appendChild(botaoApagar)
    divBotoes.appendChild(botaoEditar)

    criarDiv.appendChild(textoParagrafo);
    criarDiv.appendChild(divBotoes);

    novoItemLista.appendChild(criarDiv);

    listagem.appendChild(novoItemLista);

    // mudar tamanho da lista
    tamanhoLista++;
    
    if (tamanhoLista > 8) {
        container.classList.add("barra-elementos")
    }
    

}



listaDeTarefas.addEventListener("click", function (e) {
    const btnOpcao = e.target;

    if (btnOpcao.classList.contains("apagar-lista")) {
        const divParagrafo = btnOpcao.closest('.atividades');
        if (divParagrafo) {
            tamanhoLista--;
            if (tamanhoLista <= 8) {
                container.classList.remove("barra-elementos")
            }
            divParagrafo.remove();
        }
    }

    else if (btnOpcao.classList.contains("editar-lista")) {
        const divPai = btnOpcao.parentElement.parentElement;
        const paragrafo = divPai.querySelector("p");
        if (paragrafo) {
            editarParagrafo(paragrafo);
        }
    }
})

textoDaLista.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {

        let texto = textoDaLista.value;
        if (texto !== "") {
            adicionarLista(texto);
            textoDaLista.value = "";              
        }
    }
})





btnLista.addEventListener("click", () => {
  
    let texto = textoDaLista.value;

    if (texto !== "") {
        adicionarLista(texto);
    }

    textoDaLista.value = "";

})


