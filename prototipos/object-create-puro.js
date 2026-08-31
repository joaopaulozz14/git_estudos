// ============================================================
// HERANÇA DIRETA ENTRE OBJETOS COM Object.create
// (sem função construtora, sem `class`)
// ============================================================
// Prova de que a prototype chain não depende de "classes"
// de jeito nenhum — dá pra ligar objetos direto entre si.

const animalBase = {
  falar() {
    console.log(`${this.nome} faz um som.`);
  },
};

const gato = Object.create(animalBase);
gato.nome = 'Miau';

gato.falar();

console.log('gato.__proto__ === animalBase:', gato.__proto__ === animalBase);
console.log('animalBase.__proto__ === Object.prototype:', animalBase.__proto__ === Object.prototype);

// Podemos até criar mais um nível de herança
const gatoFalante = Object.create(gato);
gatoFalante.nome = 'Tom';
gatoFalante.falar = function () {
  console.log(`${this.nome} diz: "eu falo!"`);
};

gatoFalante.falar();
console.log('gatoFalante.__proto__ === gato:', gatoFalante.__proto__ === gato);

module.exports = { animalBase, gato, gatoFalante };
