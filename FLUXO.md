# Fluxo de Trabalho — Trekking Capital

Guia para realizar alterações no site e publicar na Hostinger.

---

## Fluxo do Dia a Dia

```
1. Fazer alteração no VSCode
       ↓
2. Testar localmente com Live Server
       ↓
3. Commitar no Git (salvar versão)
       ↓
4. Enviar para o GitHub (git push)
       ↓
5. Subir arquivos alterados na Hostinger via FTP
```

---

## Passo a Passo Detalhado

### 1. Abrir o projeto

No terminal do VSCode (`Ctrl + '`):

```bash
# Verificar o status atual (arquivos modificados)
git status
```

---

### 2. Fazer a alteração

Edite normalmente os arquivos no VSCode.

- **Conteúdo/texto** → editar `index.html`
- **Estilo/cores/layout** → editar `assets/style.css`
- **Comportamento/WhatsApp** → editar `assets/main.js`
- **Imagens** → substituir arquivo em `assets/images/` com o mesmo nome

Visualize em tempo real com o **Live Server** (`http://127.0.0.1:5500`).

---

### 3. Salvar versão no Git

```bash
# Ver quais arquivos foram alterados
git status

# Adicionar os arquivos alterados
git add nome-do-arquivo
# Exemplo: git add index.html
# Ou adicionar tudo de uma vez:
git add .

# Criar o commit com uma mensagem descritiva
git commit -m "tipo: descrição curta da alteração"
```

**Exemplos de mensagens de commit:**

```bash
git commit -m "feat: adiciona seção de depoimentos"
git commit -m "fix: corrige link do WhatsApp"
git commit -m "style: atualiza logo e cores do header"
git commit -m "content: atualiza texto da seção metodologia"
git commit -m "img: substitui fotos da galeria de projetos"
```

---

### 4. Enviar para o GitHub

```bash
git push
```

O código fica salvo no repositório: https://github.com/Matdev96/trekking-capital

---

### 5. Publicar na Hostinger (FTP)

**Via Gerenciador de Arquivos (hPanel):**
1. Acessar hPanel → **Gerenciador de Arquivos**
2. Navegar até `public_html/`
3. Fazer upload **somente dos arquivos que foram alterados**
4. Confirmar que o site está funcionando no navegador

**Via FTP (FileZilla) — recomendado para múltiplos arquivos:**

| Campo | Valor |
|---|---|
| Host | (ver nas configurações FTP do hPanel) |
| Usuário | (ver no hPanel) |
| Senha | (ver no hPanel) |
| Porta | 21 |

Arrastar os arquivos alterados para `public_html/` no painel direito.

---

## Tipos de Alterações Comuns

### Trocar uma imagem

1. Preparar a nova imagem com o **mesmo nome** e tamanho recomendado
2. Otimizar em [Squoosh](https://squoosh.app/) antes de subir
3. Colocar em `assets/images/`
4. Testar localmente
5. `git add assets/images/nome-da-imagem.jpg`
6. `git commit -m "img: substitui hero-house.jpg"`
7. `git push`
8. Subir **apenas** o arquivo de imagem na Hostinger

### Trocar a logomarca

1. Obter a nova logo (de preferência em **SVG**)
2. Editar o `index.html` (ver seção no `README.md`)
3. Atualizar o `favicon.svg` também
4. Testar localmente
5. Commitar e publicar

### Editar texto

1. Abrir `index.html` no VSCode
2. Usar `Ctrl + F` para encontrar o trecho
3. Editar, testar, commitar e publicar

### Alterar número de WhatsApp

1. Abrir `assets/main.js`
2. Localizar a função `initWhatsApp()` (linha ~141)
3. Alterar a variável `phone` com o novo número (formato: `5511999999999`)
4. Testar, commitar e publicar

---

## Comandos Git Úteis

```bash
# Ver histórico de alterações
git log --oneline

# Ver o que mudou em um arquivo
git diff assets/style.css

# Desfazer alteração antes do commit (recupera a versão anterior)
git checkout -- nome-do-arquivo

# Ver status resumido
git status -s
```

---

## Dicas

- Sempre testar localmente **antes** de subir para a Hostinger
- Fazer commits pequenos e frequentes — mais fácil de rastrear e reverter
- Usar mensagens de commit claras — facilita o histórico
- Otimizar imagens antes de subir (meta: < 400kb para fotos grandes)
