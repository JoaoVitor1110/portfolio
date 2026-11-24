# Portfólio de João Vitor Alves

Site em Next.js 16 (Node 22), feito para o Node.js Web App da Hostinger (plano Business).

## Editar o conteúdo

Todo o texto fica em `content/site.ts`: trabalho atual, projetos, competências, formação e contatos.
O currículo para download é `public/Joao_Vitor_Alves_CV.pdf`. Troque o arquivo mantendo o nome.

## Rodar no computador

```
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Hostinger

A Hostinger não converte um site WordPress em Node.js. O app precisa ser criado como um site novo.

1. Suba esta pasta para um repositório no GitHub (ex.: `portfolio-jvsatech`).
2. No hPanel: **Sites › Criar site › Node.js Web App** e escolha **Importar repositório do GitHub**
   (ou **Fazer upload** do `.zip` desta pasta, sem `node_modules` e `.next`).
3. Configurações de build (a Hostinger detecta sozinha, confira):
   - Framework: **Next.js**
   - Versão do Node: **22.x**
   - Comando de build: `build`
   - Diretório de saída: `.next`
   - Entry file: vazio
4. Publique primeiro num subdomínio de teste (ex.: `novo.jvsatech.com.br`) e confira o site.
5. Quando estiver tudo certo, apague o site WordPress `portfolio.jvsatech.com.br` (faça backup antes)
   e aponte esse subdomínio para o app Node.js.

Com deploy pelo GitHub, cada `git push` publica uma versão nova sozinho.

## Endereços antigos

`next.config.mjs` redireciona as páginas do WordPress (`/case-tga`, `/case-angela`, `/case-grafica`,
`/case-nps`, `/case-financeiro`) para as páginas novas em `/projetos/...`.
