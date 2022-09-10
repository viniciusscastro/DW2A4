export default masks;

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
    }

    
}