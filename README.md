# Trekking Capital — Site Institucional

> Assessoria de Investimentos Imobiliários | Indaiatuba e região

Site institucional da **Trekking Capital**, empresa de assessoria especializada em criação e multiplicação de patrimônio imobiliário. A proposta é guiar clientes em direção à independência financeira por meio de uma metodologia própria que combina marketing, alavancagem financeira, engenharia e vendas.

---

## Tecnologia

Site **100% estático** — sem back-end, sem banco de dados, sem dependências externas.

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Toda a estrutura e conteúdo do site |
| `assets/style.css` | Todos os estilos (layout, cores, tipografia, responsivo) |
| `assets/main.js` | Interações: FAQ acordeão, menu mobile, scroll suave, animações fade-in, WhatsApp |
| `assets/images/` | Imagens e favicon |

**Nenhuma biblioteca externa** — JavaScript vanilla, CSS puro.

---

## Estrutura de Arquivos

```
trekking-capital/
├── index.html
├── README.md
├── FLUXO.md
├── .gitignore
└── assets/
    ├── style.css
    ├── main.js
    ├── README.md          ← documentação interna dos assets
    └── images/
        ├── hero-house.jpg     ← Foto hero principal (1600×1000px, < 400kb)
        ├── project-1.jpg      ← Galeria: coluna esquerda (800×900px)
        ├── project-2.jpg      ← Galeria: superior direita (600×400px)
        ├── project-3.jpg      ← Galeria: inferior direita (600×400px)
        ├── og-image.jpg       ← Open Graph / compartilhamento social (1200×630px exato)
        └── favicon.svg        ← Ícone da aba do navegador
```

---

## Seções do Site

| Âncora | Seção | Descrição |
|---|---|---|
| `#inicio` | Hero | Chamada principal + citação dos fundadores + visão 2030 |
| `#projetos` | Galeria | Grid com 3 fotos de projetos imobiliários |
| `#origem` | A Origem | História e propósito da empresa |
| `#metodologia` | A Metodologia | Etapas do processo (passo a passo) |
| `#por-que-imoveis` | Por que Imóveis? | Vantagens do investimento imobiliário |
| `#quem-somos` | Quem Somos | Apresentação dos fundadores |
| `#contato` | Contato | Formulário / CTA de conversão |

---

## Identidade Visual

| Elemento | Valor |
|---|---|
| Azul navy | `#1B2A4A` |
| Dourado | `#C9A84C` |
| Branco | `#ffffff` |
| Logo | SVG inline no `index.html` (símbolos `#logo-icon-white` e `#logo-icon-navy`) |
| Favicon | `assets/images/favicon.svg` |

---

## Informações Técnicas

| Campo | Valor |
|---|---|
| Domínio | `trekkingcapital.com.br` (Registro.br) |
| Hospedagem | Hostinger — `public_html/` |
| E-mail | Google Workspace |
| WhatsApp | `5511996210179` configurado em `assets/main.js` → `initWhatsApp()` |
| OG URL | `https://www.trekkingcapital.com.br` (atualizar no `<head>` do `index.html`) |

---

## Como Rodar Localmente

1. Abrir a pasta no **VSCode**
2. Instalar a extensão **Live Server** (ritwickdey.LiveServer)
3. Clicar com botão direito em `index.html` → **Open with Live Server**
4. O site abre em `http://127.0.0.1:5500` com hot-reload automático

---

## Como Substituir Imagens

Basta colocar o novo arquivo em `assets/images/` com **exatamente o mesmo nome** — nenhuma alteração no HTML necessária.

Otimize as imagens antes do upload (recomendado: [Squoosh](https://squoosh.app/)).

---

## Como Trocar a Logomarca

**Se receber SVG:**
- Substituir os blocos `<symbol id="logo-icon-white">` e `<symbol id="logo-icon-navy">` no `index.html`
- Atualizar o `assets/images/favicon.svg`

**Se receber PNG/JPG:**
- Colocar o arquivo em `assets/images/logo.png`
- Substituir cada ocorrência de `<svg ...><use href="#logo-icon-*"/></svg>` por `<img src="assets/images/logo.png" alt="Trekking Capital">`

> Preferência: pedir a logo em **SVG** — mais leve, escalável e sem pixelização.

---

## Deploy na Hostinger

1. Acessar o **hPanel** da Hostinger
2. Ir em **Gerenciador de Arquivos** (ou conectar via FTP com FileZilla)
3. Fazer upload de todos os arquivos mantendo a estrutura dentro de `public_html/`
4. SSL gratuito: ativar no hPanel (HTTPS automático)

---

## Fluxo de Trabalho

Ver [`FLUXO.md`](./FLUXO.md) para o guia completo de como fazer alterações e publicar.

---

## Histórico de Versões

| Data | Versão | Descrição |
|---|---|---|
| 2026-04-10 | 1.0.0 | Commit inicial — site completo entregue pelo cliente |

---

*Projeto gerenciado por [Matdev96](https://github.com/Matdev96)*
