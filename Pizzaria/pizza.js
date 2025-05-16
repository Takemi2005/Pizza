let Pizzaria = [];
// let pizzaParaAlterar = null;

function mostrarSecao(secao) {
    // esconde todas as secoes
    document.getElementById("cadastro").classList.add("hidden");

    //mostrar a seçao selecionada 
    document.getElementById(secao).classList.remove("hidden");
}
function criarCadastro() {
    const sabor = document.getElementById("sabor").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const ingredientes = document.getElementById("ingredientes").value;
    let resultado = document.getElementById("resultado");
    if (sabor && preco && ingredientes) {
      Pizzaria.push({ sabor, preco, ingredientes });
      document.getElementById("sabor").value = "";
      document.getElementById("preco").value = "";
      document.getElementById("ingredientes").value = "";
      resultado.innerHTML = "<p>Cadastro concluído com <strong>sucesso!</strong></p>";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
}
