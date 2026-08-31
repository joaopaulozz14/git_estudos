# Comparação: Prototype puro vs `class`

## O que é idêntico

Rodando os dois arquivos (`prototype-puro.js` e `class-syntax.js`), confirmamos:

- `rex.__proto__ === Cachorro.prototype` → `true` nos dois
- `Cachorro.prototype.__proto__ === Animal.prototype` → `true` nos dois
- `typeof Animal` → `"function"` nos dois (classes são funções por baixo dos panos)
- `instanceof` funciona igual nos dois, pois é só uma checagem na prototype chain

Isso confirma que `class` **não introduz um mecanismo novo**. Ela apenas:
1. Cria uma função (o "construtor")
2. Liga o `prototype` dela como qualquer função construtora ligaria
3. `extends` faz o equivalente a `Object.create(Pai.prototype)` por baixo
4. `super(...)` faz o equivalente a `Pai.call(this, ...)`

## Diferenças reais (não só cosméticas)

| Aspecto | Função construtora | `class` |
|---|---|---|
| Chamar sem `new` | Não trava (bug silencioso, `this` fica errado) | Lança `TypeError` |
| Hoisting | Função é "hoisted" totalmente (pode usar antes de declarar) | Existe "temporal dead zone" — não pode usar antes de declarar |
| Modo estrito | Opcional | Corpo da classe é sempre em strict mode |
| Métodos enumeráveis | Métodos no prototype são enumeráveis por padrão (aparecem em `for...in`) | Métodos de classe são não-enumeráveis |

## Conclusão

`class` é açúcar sintático, mas com proteções extras (erros mais cedo,
strict mode automático) que tornam o código menos propenso a bugs
silenciosos. Entender o prototype por baixo ajuda a debugar problemas
que a sintaxe de `class` esconde (tipo por que `this` vira `undefined`
em certos contextos).

## Object.create direto (sem função nem class)

`object-create-puro.js` mostra que dá pra montar herança **sem nenhuma
função construtora**, ligando objetos crus entre si com `Object.create`.
Isso prova que a herança em JS é, na raiz, uma relação entre objetos —
funções construtoras e `class` são só formas convenientes de criar e
ligar esses objetos automaticamente.
