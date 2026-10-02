# Minha Oficina

Site institucional em React, TypeScript, Vite, Three.js e GSAP.

Site: https://newangle-devs.github.io/redeminhaoficina/

## Desenvolvimento

- `npm ci`
- `npm run dev`
- `npx tsc --noEmit`
- `npm run build`
- `npm run preview`

## GitHub Pages

O workflow `.github/workflows/pages.yml` valida o TypeScript, gera o site e publica a pasta `dist` a cada push na branch `main`. Em Settings > Pages, a origem precisa estar em **GitHub Actions**.

O caminho `/redeminhaoficina/` é aplicado no build do GitHub. Para outro domínio, ajuste `base` em `vite.config.ts` e defina `SITE_URL` no build. O script de preparação atualiza canonical, compartilhamento, dados estruturados, robots e sitemap.

## Experiência 3D

Motor ilustrativo de quatro cilindros construído com geometrias originais. A rolagem separa tampa, cabeçote, pistões, bloco, virabrequim, cárter e coletor. Funciona em desktop e celular, com resolução de renderização limitada para reduzir o trabalho da GPU. Renderiza apenas quando há movimento e pausa fora da tela. Respeita redução de movimento e tem imagem local de reserva.

- `src/three/motorEngine.ts`: modelo, materiais, luz e animação.
- `src/components/Hero.tsx`: narrativa e progresso da rolagem.
- `src/components/MotorScene.tsx`: carregamento e imagem alternativa.
- `src/components/PageMotion.tsx`: entradas suaves das seções.
- `src/content.ts`: textos e contatos.
- `src/index.css`: estilos e adaptação móvel.

O motor é conceitual, sem pretensão de reproduzir um modelo comercial. A foto de manutenção tem crédito ao fotógrafo; Google Fonts e Pexels são serviços externos. Os contatos comerciais preexistentes foram preservados.
