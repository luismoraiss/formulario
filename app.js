function validaFormulario(){
  const nome = document.getElementById('Nome').value
  const email = document.querySelector('#email').value
  const senha = document.getElementById('Senha').value

  if(nome == '' || email == '' || senha == ''){
    alert("Digite um valor")
  }
    const emailRegex = /^ [^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(email)){
     alert("Por favor, insira um e-mail válido!")
    }

    if(senha.length > 8){
     alert("Limite de caracteres excedido!")
    }
  }