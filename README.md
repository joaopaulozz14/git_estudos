# Semana 4 — Protótipos, POO e Git de verdade

Repositório de estudos: herança prototípica em JS + fluxo de Git profissional.

## Estrutura

```
prototipos/
  prototype-puro.js       # herança usando function + prototype
  class-syntax.js          # a mesma herança usando `class`
  object-create-puro.js    # herança direta entre objetos, sem construtor
  comparacao.md             # comparação entre as abordagens
  metodos-array.js          # exercício feito na simulação de PR (Dia 5)
```

## Dia 1-2 — Herança prototípica ✅

Ver `prototipos/comparacao.md` para o resumo do que foi aprendido.
Resumo rápido: `class` é açúcar sintático sobre a prototype chain,
mas com proteções extras (erro ao chamar sem `new`, strict mode
automático, métodos não-enumeráveis).

## Dia 3 — Git avançado (branching, rebase vs merge, conflito) ✅

- [x] Criar branches de feature
- [x] Praticar `git rebase` vs `git merge`
- [x] Provocar um conflito de propósito e resolvê-lo
- [x] Documentar o conflito resolvido na seção abaixo

## Dia 4 — Commits atômicos, boas mensagens, log, stash, cherry-pick ✅

- [x] `git stash` / `git stash pop` para guardar trabalho sem comitar
- [x] `git cherry-pick` de um commit específico entre branches
- [x] `git log -p` e `git log --grep` para navegar histórico

## Dia 5 — Simulação de fluxo de equipe (branches, PR, squash merge) ✅

- [x] Criar branch `feature/exemplo-metodos-array` com commits "sujos" de propósito
- [x] Abrir Pull Request no GitHub (`feature/exemplo-metodos-array` → `main`)
- [x] Fazer squash merge, transformando 4 commits em 1 só na `main`
- [x] Deletar a branch de feature após o merge

### Incidente durante o Dia 5 (aprendizado extra)

Depois do cherry-pick do Dia 4, o commit ficou só na `main` **local**,
sem ser empurrado (`git push`) pro remoto. Ao seguir pro Dia 5 e fazer
o squash merge via PR no GitHub, a `main` remota avançou por outro
caminho. Resultado: `main` local e remota **divergiram** a partir do
mesmo ponto.

Ao rodar `git pull`, o Git não conseguiu avançar de forma linear
(fast-forward) e criou um commit de merge de sincronização
(`Merge branch 'main' of ...`) pra reconciliar as duas pontas.

**Lição:** sempre dar `git push` logo após operações locais importantes
(cherry-pick, commit, amend) antes de seguir pra próxima etapa. Quando
não há conflito de conteúdo real, `git pull --rebase origin main` evita
esse tipo de merge commit "administrativo" no histórico.

---

## Conflito de merge resolvido (entregável da semana)

### O que causou o conflito

Criei a branch `feature/mensagem-boas-vindas` a partir da `main` e
alterei a primeira linha (título) do `README.md`. Em seguida, voltei
pra `main` e alterei **a mesma linha** de forma diferente, e comitei
também por lá. Ao rodar `git merge feature/mensagem-boas-vindas`
estando na `main`, o Git não conseguiu decidir sozinho qual versão
prevalecer.

```
*   0fcd15d (HEAD -> main) Merge branch 'feature/mensagem-boas-vindas'
|\
| * 50efa44 (feature/mensagem-boas-vindas) docs: ajusta título do README na feature
* | a422a99 docs: ajusta título do README na main
|/
* b53d453 feat(prototipos): implementa herança com prototype puro, class e Object.create
```

### Como foi resolvido (incluindo o erro no meio do caminho)

O Git marcou o arquivo com os marcadores de conflito:

```
<<<<<<< HEAD
# Semana 4 — Protótipos, POO e Git (versão main)
=======
# Semana 4 — Protótipos, POO e Git na prática (feature)
>>>>>>> feature/mensagem-boas-vindas
```

Na primeira tentativa, removi os marcadores mas **mantive as duas
linhas de título**, deixando o README com dois títulos H1 duplicados —
um erro comum de resolução de conflito (apagar os marcadores sem de
fato *decidir* o conteúdo final).

Corrigido em um commit posterior
(`fix: remove título duplicado que sobrou da resolução do conflito`),
mantendo apenas uma versão do título e completando o merge de forma
limpa.

### Lição aprendida

Resolver um conflito não é só apagar os marcadores — é preciso
realmente decidir (ou combinar de forma intencional) o conteúdo final
de cada lado. Vale sempre revisar o arquivo depois de resolver, antes
de dar `git add` + `git commit`, para confirmar que não sobrou
conteúdo duplicado ou incoerente.