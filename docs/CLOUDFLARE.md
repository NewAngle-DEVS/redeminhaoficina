# Publicação no Cloudflare Pages

Este site é estático e pode ser publicado no plano gratuito do Pages, sem servidor próprio.

## Conectar o GitHub

No painel Cloudflare, abra Workers & Pages e crie um projeto Pages conectado ao GitHub.

Use estas configurações:

| Campo | Valor |
| --- | --- |
| Repositório | `NewAngle-DEVS/redeminhaoficina` |
| Branch de produção | `main` |
| Comando de build | `npm run build` |
| Pasta de saída | `dist` |
| Diretório raiz | Deixar vazio |
| Node.js | `22` (arquivo `.node-version`) |

O endereço será informado pelo Cloudflare após a criação do projeto. O nome desejado depende de disponibilidade.

Depois de receber o endereço definitivo, configure a variável de ambiente `SITE_URL` com a URL HTTPS completa do site e faça um novo deploy. Isso mantém a prévia do WhatsApp, o endereço principal de busca e o sitemap no domínio público correto. Se posteriormente conectar um domínio próprio, atualize essa variável.

O script já usa `CF_PAGES_URL` quando `SITE_URL` ainda não foi configurada. O build no Cloudflare usa a raiz `/`; o build do GitHub Pages continua usando `/redeminhaoficina/`.

## Conferência após publicar

- Abra a página inicial no computador e no celular.
- Confira o motor 3D e os botões de contato.
- Confira a imagem `images/logo-compartilhamento.png` e a prévia do link.
- Abra uma rota inexistente e confirme que o botão de retorno leva ao novo site.

Documentação: https://developers.cloudflare.com/pages/get-started/git-integration/
