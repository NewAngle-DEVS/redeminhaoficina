# Validação — 02/10/2026

- TypeScript: `npx tsc --noEmit` aprovado.
- Build de produção com base `/redeminhaoficina/`: aprovado.
- Versão de produção aberta no navegador com o prefixo do GitHub Pages: página, motor 3D, imagem alternativa e navegação carregaram.
- Desktop: motor montado, exploração pelo botão, separação progressiva e recomposição ao voltar ao topo.
- Celular: 390 × 844 e 320 × 740; conferidos composição, menu, navegação para cuidados e expansão do serviço de manutenção.
- Motor 3D interativo confirmado na versão móvel; imagem local de reserva carregada (640 × 640).
- Sem transbordamento horizontal na verificação de produção; âncoras internas sem destinos inexistentes.
- Sem erros de console da versão de produção durante a verificação.
- Contatos e destinos comerciais preservados da versão anterior.

A preferência de movimento reduzido, a pausa fora da tela e a liberação de recursos WebGL estão implementadas. Não foram medidos FPS, consumo de bateria nem compatibilidade em aparelhos físicos; as verificações móveis usam o navegador em dimensões de celular.

## Publicação

Workflow: `.github/workflows/pages.yml`. A origem do Pages foi ativada como GitHub Actions. O workflow valida TypeScript antes da publicação. URL: https://newangle-devs.github.io/redeminhaoficina/
