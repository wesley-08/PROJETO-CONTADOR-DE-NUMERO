function contador(numero) {
    if (numero < 1) {
      return [];
    }
  
    const resultado = [];
    for (let i = 1; i <= numero; i++) {
      resultado.push(i);
    }
    return resultado;
  }
  
  module.exports = contador;