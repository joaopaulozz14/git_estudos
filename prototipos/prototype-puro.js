// ============================================================
// HERANÇA COM PROTOTYPE PURO (sem `class`)
// ============================================================
// Objetivo: entender o mecanismo real por trás da herança em JS,
// sem a sintaxe de `class` escondendo o que está acontecendo.

// --- "Classe base" via função construtora ---
function Animal(nome) {
  this.nome = nome;
}

// Métodos vão no prototype, não dentro do construtor.
// Isso significa: UMA função `falar` compartilhada por todas
// as instâncias, e não uma cópia por objeto.
Animal.prototype.falar = function () {
  console.log(`${this.nome} faz um som.`);
};

// --- "Subclasse" ---
function Cachorro(nome, raca) {
  // Equivalente manual do super(): chama o construtor pai
  // passando o `this` do objeto atual.
  Animal.call(this, nome);
  this.raca = raca;
}

// Aqui está o pulo do gato da herança prototípica:
// ligamos o prototype de Cachorro a um objeto que tem
// Animal.prototype como SEU prototype (não o mesmo objeto,
// uma cópia da cadeia).
Cachorro.prototype = Object.create(Animal.prototype);

// Sem isso, Cachorro.prototype.constructor apontaria pra Animal,
// o que quebra checagens como `new rex.constructor()`.
Cachorro.prototype.constructor = Cachorro;

// Sobrescrevendo o método (polimorfismo)
Cachorro.prototype.falar = function () {
  console.log(`${this.nome} late! (raça: ${this.raca})`);
};

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
console.log('typeof Animal:', typeof Animal);

// Chamando sem `new` — não trava, mas gera bug silencioso
// (this vira o objeto global ou undefined em strict mode)
try {
  const quebrado = Animal('Sem new');
  console.log('Chamou Animal() sem new sem travar. this.nome foi parar em:', typeof this !== 'undefined' ? this.nome : 'undefined (strict mode)');
} catch (e) {
  console.log('Erro ao chamar sem new:', e.message);
}

module.exports = { Animal, Cachorro };
