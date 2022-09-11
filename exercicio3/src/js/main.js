const masks = {
  nome (value){
      return value
      .replace(/[0-9]/g, '')
      .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  },
  date (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
    },
  cpf (value) {
    validaCPF()
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  },


  fone (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },

  cep (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  },
  email (value){
    
    validaEmail(value)
    return value
    .replace(' ', '')
  }
}

function validaCPF(){
  let cpf = document.getElementById('cpf')
  if(cpf.value.length ==14){
    cpf = cpf.value.replace('.','').replace('.','').replace('.','').replace('-','')
    console.log(cpf)
    var Soma;
    var Resto;
    Soma = 0;
    if (cpf == "00000000000") document.getElementById('validadorCpf').removeAttribute("hidden");

    for (var i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) document.getElementById('validadorCpf').removeAttribute("hidden");

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) document.getElementById('validadorCpf').removeAttribute("hidden");

  }else{
    if(!document.getElementById('validadorCpf').hasAttribute("hidden")){
      document.getElementById('validadorCpf').setAttribute("hidden",true)
    }
  }
}

function validaEmail(email){
  let usuario = email.substring(0, email.indexOf("@"));
  let dominio = email.substring(email.indexOf("@")+ 1, email.length);

  if (!((usuario.length >=1)    &&   (dominio.length >=3)      &&    (usuario.search("@")==-1) && 
     (dominio.search("@")==-1)  &&   (usuario.search(" ")==-1)   &&    (dominio.search(" ")==-1) &&
     (dominio.search(".")!=-1)  &&   (dominio.indexOf(".") >=1)  &&    (dominio.lastIndexOf(".") < dominio.length - 1))) {
      document.getElementById('validadorEmail').removeAttribute("hidden")
  }else{
    if(!document.getElementById('validadorEmail').hasAttribute("hidden")){
      document.getElementById('validadorEmail').setAttribute("hidden",true)
    }
  }
}

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
      e.target.value = masks[field](e.target.value)
    }, false)

})
