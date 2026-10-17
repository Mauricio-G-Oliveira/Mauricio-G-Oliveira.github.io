# Guia de Contribuição e Governança Técnica

Este documento estabelece as diretrizes de engenharia de software, fluxo de trabalho no Git, padrões de commit e governança aplicados no desenvolvimento do portfólio de **Mauricio Oliveira**.

---

## 🌳 1. Estratégia de Branches (Git Flow Corporativo)

O repositório adota um modelo estruturado para garantir rastreabilidade, isolamento de código e estabilidade contínua em produção:

| Branch | Propósito | Origem | Destino | Proteção |
| :--- | :--- | :--- | :--- | :--- |
| **`main`** | Código estável em produção (deploy oficial no GitHub Pages) | `develop` ou `hotfix/*` | — | Protegida (Apenas PRs revisados) |
| **`develop`** | Branch de integração de novas funcionalidades | `main` | `main` | Protegida |
| **`feature/*`** | Desenvolvimento de novas funcionalidades | `develop` | `develop` | Temporária |
| **`hotfix/*`** | Correções emergenciais em ambiente de produção | `main` | `main` e `develop` | Temporária |

### Nomenclatura Padrão de Branches:
- `feature/<nome-da-funcionalidade>` (ex: `feature/analytics-integration`, `feature/dark-mode-toggle`)
- `fix/<descricao-do-bug>` (ex: `fix/mobile-viewport-overflow`)
- `refactor/<escopo>` (ex: `refactor/modular-scripts`)
- `docs/<escopo>` (ex: `docs/architecture-guide`)

---

## 📝 2. Padrão de Commits (Conventional Commits)

Todas as mensagens de commit devem seguir rigorosamente o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```text
<tipo>(<escopo opcional>): <descrição no imperativo e em minúsculas>

[corpo opcional explicando motivação e impacto]

[rodapé opcional com referências a issues ou breaking changes]
```

### Tipos Permitidos:
- **`feat`**: Introdução de nova funcionalidade
- **`fix`**: Correção de bug
- **`docs`**: Alterações em documentação ou comentários
- **`style`**: Ajustes de formatação ou estilo sem alteração de lógica
- **`refactor`**: Refatoração de código com melhoria de arquitetura
- **`perf`**: Otimização de performance ou tempo de renderização
- **`ci`**: Alterações em pipelines ou automações
- **`chore`**: Tarefas de manutenção e configurações

---

## 📦 3. Versionamento Semântico (SemVer)

O projeto adota a especificação [SemVer 2.0.0](https://semver.org/lang/pt-BR/):
`MAJOR.MINOR.PATCH`

- **MAJOR** (`v2.0.0`): Mudanças estruturais incompatíveis ou reescrita arquitetural.
- **MINOR** (`v1.1.0`): Novas funcionalidades mantendo total compatibilidade retroativa.
- **PATCH** (`v1.1.1`): Correções de bugs ou melhorias de estabilidade.

---

## 🚀 4. Fluxo de Trabalho Passo a Passo

1. **Atualizar a branch local**:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Criar a branch de trabalho**:
   ```bash
   git checkout -b feature/minha-nova-feature
   ```

3. **Desenvolver e validar localmente**:
   - Testar em mobile, tablet e desktop.
   - Garantir conformidade com os princípios de **Clean Code** e **SOLID**.

4. **Comitar com Conventional Commits**:
   ```bash
   git add .
   git commit -m "feat(ui): adiciona suporte a animacoes interativas"
   ```

5. **Abrir Pull Request para `develop`**:
   - Preencher o checklist oficial do Pull Request Template.
   - Após revisão e aprovação, realizar o merge com `--no-ff`.
