// ============================================================
// HERANÇA COM `class` (açúcar sintático sobre prototype)
// ============================================================
// Mesma lógica do prototype-puro.js, mas com a sintaxe moderna.
// A ideia do exercício é rodar os dois lado a lado e confirmar
// que, por baixo, a mecânica é IDÊNTICA.

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // equivalente ao Animal.call(this, nome)
    this.raca = raca;
  }

  falar() {
    console.log(`${this.nome} late! (raça: ${this.raca})`);
  }
}

// ============================================================
// TESTES / EXPLORAÇÃO
// ============================================================
const rex = new Cachorro('Rex', 'Vira-lata');
rex.falar();

console.log('--- Explorando a prototype chain ---');
console.log('rex.__proto__ === Cachorro.prototype:', rex.__proto__ === Cachorro.prototype);
console.log('Cachorro.prototype.__proto__ === Animal.prototype:', Cachorro.prototype.__proto__ === Animal.prototype);
console.log('rex instanceof Cachorro:', rex instanceof Cachorro);
console.log('rex instanceof Animal:', rex instanceof Animal);
console.log('typeof Animal:', typeof Animal); // "function" — surpresa!

// Diferença real #1: chamar sem `new` LANÇA ERRO em class,
// diferente da função construtora tradicional.
try {
  const quebrado = Animal('Sem new');
} catch (e) {
  console.log('Erro ao chamar Animal() sem new:', e.message);
}

module.exports = { Animal, Cachorro };
