// Comando para poder usar o prompt de comando no terminal do Visual Studio Code.
// Execute o programa no TERMINAL digitando "node achandoErros.js"

const prompt = require('prompt-sync')();

// Solicita ao usuário que insira dois números
const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));

try {
  // Tenta realizar a divisão
  const resultado = numero1 / numero2;

  // Verifica se o resultado é um número válido
  if (isNaN(resultado)) {
    throw new Error("O resultado não é um número válido.");
  }
  // Se o usuario dividir por 0, vai mostrar esse erro
  if (numero2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  // Informa o resultado da divisão caso não tenha nenhum erro
  console.log(`Resultado: ${resultado}`);
} catch (excecao) {
  // Captura e trata a exceção
  console.error("Ocorreu um erro: " + excecao.message);
} finally {
  // Este bloco sempre é executado, independentemente de haver exceção ou não
  console.log("Finalizando o programa.");
}
