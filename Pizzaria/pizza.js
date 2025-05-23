let Pizzaria = [];
// let pizzaParaAlterar = null;


function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  // Adicionar uma classe de estilo (sucesso ou erro)
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove ("hidden");


  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Usuário e senha fixos para validação
  // (voçê pode substituir por algo mais avançado)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
   setTimeout(() => {
    // Redireciona para a página principal após 3 segundos
    window.location.href = "pizza.html";
   }, 1000);// Aguarda 1 segundo antes de redirecionar
} else {
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}


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

