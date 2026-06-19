# Como implantar este projeto

Este projeto foi preparado para ser implantado facilmente no **Netlify** ou **Vercel**.

## Passos para implantar:

1.  **Baixe o projeto:** Use a opção de exportar para ZIP no menu de configurações do AI Studio.
2.  **Extraia os arquivos:** Em seu computador local.
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Gere os arquivos estáticos:**
    ```bash
    npm run build
    ```
    Isso criará a pasta `dist/` com todos os arquivos necessários para o seu servidor.
5.  **Crie um repositório no GitHub:** E suba os arquivos para lá (incluindo a pasta `dist/` se for subir manualmente, ou deixe o Netlify/Vercel rodar o comando de build).
6.  **Conecte ao Netlify ou Vercel:**
    *   **Netlify:** Conecte o repositório, o comando de build é `npm run build` e a pasta de publicação é `dist`.
    *   **Vercel:** Conecte o repositório e ele detectará automaticamente as configurações do Vite.

## Configurações incluídas:
- `vite.config.ts`: Configurado para gerar a pasta `dist/` e usar caminhos relativos (`base: './'`).
- `netlify.toml`: Configurações de redirecionamento para SPAs no Netlify.
- `vercel.json`: Configurações de redirecionamento para SPAs no Vercel.
- `package.json`: Scripts de build padrão do Vite.
