document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if (nome !== "" && email !== "" && telefone !== "") {
    alert("Prontinho! Os noivos receberão sua mensagem! Agradecemos pelo carinho.");
    // Aqui você pode enviar os dados para algum serviço ou armazenar.
  } else {
    alert("Por favor, preencha os campos nome, email e telefone.");
  }
}
