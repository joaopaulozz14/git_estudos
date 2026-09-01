
  # Semana 4 — Protótipos, POO e Git (versão main)


  Repositório de estudos: herança prototípica em JS + fluxo de Git profissional.

  ## Estrutura

```
prototipos/
  prototype-puro.js      # herança usando function + prototype
  class-syntax.js         # a mesma herança usando `class`
  object-create-puro.js   # herança direta entre objetos, sem construtor
  comparacao.md            # comparação entre as abordagens
```

## Dia 1-2 — Herança prototípica ✅

Ver `prototipos/comparacao.md` para o resumo do que foi aprendido.
Resumo rápido: `class` é açúcar sintático sobre a prototype chain,
mas com proteções extras (erro ao chamar sem `new`, strict mode
automático, métodos não-enumeráveis).

## Dia 3 — Git avançado (branching, rebase vs merge, conflito)

_(em andamento)_

- [ ] Criar branches de feature
- [ ] Praticar `git rebase` vs `git merge`
- [ ] Provocar um conflito de propósito e resolvê-lo
- [ ] Documentar o conflito resolvido na seção abaixo

## Dia 4 — Commits atômicos, boas mensagens, log, stash, cherry-pick

_(em andamento)_

## Dia 5 — Simulação de fluxo de equipe (branches, PR, squash merge)

_(em andamento)_

---

## Conflito de merge resolvido (entregável da semana)

> Preencher aqui quando o conflito do Dia 3 for resolvido:
> - O que causou o conflito foi a alterção da mesma linha nas duas branches. No caso, o título foi alterado nas duas branches, o que gerou um conflito na hora de fazer o merge.
> - Corrigido em um commit posterior (fix: remove título duplicado que sobrou da resolução do conflito), mantendo apenas uma versão do título e completando o merge de forma limpa.

