git stash                    # guarda as mudanças não commitadas
git stash list                # lista os stashes salvos
git stash pop                 # traz de volta o último stash (e remove da lista)
git stash apply                # traz de volta mas mantém na lista

git log --oneline --graph --all       # visão geral compacta (você já usou)
git log -p README.md                   # histórico de mudanças de um arquivo específico, com diff
git log --author="jpcm"                # filtra por autor
git log --since="2 days ago"           # filtra por data
git log --grep="fix"                   # busca por palavra na mensagem

git cherry-pick <hash-do-commit>