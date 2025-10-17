// Função chamada quando o botão é clicado
function enviarFormulario() {
  //  Pegar os valores dos inputs usando DOM
  let nome = document.getElementById("nome").value.trim()
  let idade = document.getElementById("idade").value.trim()
  let mensagem = document.getElementById("mensagem").value.trim()
  let resultado = document.getElementById("resultado")

  // Verificar se os campos foram preenchidos
  if (nome === "" || idade === "" || mensagem === "") {
    resultado.innerHTML = "⚠️ Preencha todos os campos!"
    resultado.style.color = "red"
    resultado.style.opacity = "1"
    return;
  } else {
  // Se a idade for menor que 18, mostra aviso
  if (idade < 18) {
    resultado.innerHTML = "🚫 Você precisa ter 18 anos ou mais."
    resultado.style.color = "orange"
    resultado.style.opacity = "1" //controle de transparencia
    document.getElementById("formulario").reset()
  } else{
  //  Se tudo estiver certo, mostra mensagem de sucesso
  resultado.innerHTML = `✅ Obrigado, <strong>${nome}</strong>! Sua mensagem foi enviada com sucesso.`
  resultado.style.color = "green";
  //  Efeito suave (fade-in) na mensagem de sucesso
  resultado.style.opacity = "0"
  resultado.style.transition = "opacity 0.6s ease";
  setTimeout(() => {
    resultado.style.opacity = "1"
  }, 100) //executar outra funçao dps de um tempo

  // Limpar campos após o envio
  document.getElementById("formulario").reset()
  }
  }
}
