# Trekking Capital — Assets

## Estrutura da pasta

```
assets/
├── style.css          ← Todos os estilos do site
├── main.js            ← JavaScript (FAQ, scroll, WhatsApp, animações)
└── images/            ← Imagens do site (substituir pelos arquivos reais)
    ├── hero-house.jpg     ← Foto principal do hero e seção independência
    ├── project-1.jpg      ← Galeria: imagem grande (coluna esquerda)
    ├── project-2.jpg      ← Galeria: imagem superior direita
    ├── project-3.jpg      ← Galeria: imagem inferior direita
    ├── og-image.jpg       ← Imagem de compartilhamento (Open Graph) — 1200×630px
    └── favicon.svg        ← Ícone da aba do navegador
```

## Como substituir as imagens

1. Coloque as fotos dos seus projetos reais dentro de `assets/images/`
2. Nomeie-as exatamente como indicado acima, ou edite o `index.html` para apontar para os novos nomes
3. Recomendações de tamanho:
   - `hero-house.jpg`: mínimo 1600×1000px, otimizada para web (< 400kb)
   - `project-1.jpg`: mínimo 800×900px
   - `project-2.jpg` e `project-3.jpg`: mínimo 600×400px
   - `og-image.jpg`: exatamente 1200×630px

## Favicon SVG

Crie um arquivo `favicon.svg` com o ícone das montanhas da Trekking Capital.
Exemplo simples:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 64">
  <rect width="88" height="64" fill="#1B2A4A"/>
  <polygon points="4,62 26,10 34,62" fill="#ffffff"/>
  <polygon points="26,10 46,62 34,62" fill="#ffffff" opacity="0.38"/>
  <polygon points="38,62 62,4 74,30 64,62" fill="#C9A84C"/>
  <polygon points="62,4 86,62 74,62 74,30" fill="#ffffff"/>
</svg>
```

## WhatsApp

O número de WhatsApp está configurado no `assets/main.js` na função `initWhatsApp()`.
Atualmente aponta para o número da Cíntia Ocanha (Diretora Comercial): `5511996210179`.
Para alterar, edite a variável `phone` nessa função.

## Hospedagem

Para hospedar o site, faça upload de todos os arquivos mantendo a estrutura:

```
/
├── index.html
└── assets/
    ├── style.css
    ├── main.js
    └── images/
        └── (todas as imagens)
```

Serviços recomendados: Netlify (gratuito), Vercel (gratuito), ou qualquer
hospedagem de arquivos estáticos.
