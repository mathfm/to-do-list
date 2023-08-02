let btnLista = document.getElementById("btn-lista");

let textoDaLista = document.querySelector("#textoAdicionar")  


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



function adicionarLista(textoAtividade) {
    //criar li
    let novoItemLista = document.createElement("li");

    //criar ul
    let listagem = document.querySelector("#lista-de-tarefa");


    //criar span
    let textoSpan = document.createElement("span");
    textoSpan.textContent = textoAtividade;
    
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

    criarDiv.appendChild(textoSpan);
    criarDiv.appendChild(divBotoes);

    novoItemLista.appendChild(criarDiv);

    listagem.appendChild(novoItemLista);
    
    console.log(listagem);

}





