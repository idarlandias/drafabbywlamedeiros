# 🧠 Skill: Clonar e Customizar Landing Page de Estética para Nova Cliente

Este arquivo é uma **Skill de Instrução** para agentes de IA. Quando você iniciar uma nova workspace em outro diretório para criar o site estático de uma nova cliente, você pode pedir para o agente ler este arquivo (utilizando a ferramenta `view_file` com o parâmetro `IsSkillFile: true`) para que ele crie, personalize e valide a landing page do zero de forma 100% automatizada.

---

## 📋 Informações Necessárias (Input do Usuário)

Para que o agente possa personalizar o site, informe estes dados da nova cliente:
1.  **Nome Completo da Profissional**: (Ex: *Dra. Ana Paula Souza*)
2.  **Especialidade / Subtítulo**: (Ex: *Dermatologista - Estética Avançada*)
3.  **WhatsApp de Contato** (com DDI e DDD): (Ex: *5511999998888*)
4.  **Link do Instagram**: (Ex: *https://www.instagram.com/dra.anasouza/*)
5.  **Paleta de Cores da Marca** (Cores primária, de destaque e secundária): (Ex: *Verde Oliva, Rose Gold e Off-white*)
6.  **Lista de Procedimentos Estéticos Principais**: (Ex: *Botox, Peeling, Preenchimento, Fios de Sustentação*)

---

## ⚙️ Instruções de Execução para o Agente (Passo a Passo)

Siga rigorosamente as etapas abaixo para criar e customizar apenas a landing page estática na nova pasta.

### Passo 1: Replicação dos Arquivos Estruturais
Copie apenas os arquivos da pasta original da landing page para o novo diretório de destino:
*   `index.html` (Estrutura e SEO)
*   `style.css` (Estilos e Variáveis de Cor)
*   `script.js` (Lógica do Quiz e Abas)
*   `images/` (Pasta de Imagens de mockups/ícones)

---

### Passo 2: Customização do Conteúdo (`index.html`)
Abra o arquivo `index.html` no novo diretório e substitua os dados da Dra. Ingrid Medeiros pelos dados da nova cliente:

1.  **Tags de SEO & Redes Sociais**:
    *   Substitua o conteúdo da metatag `<title>` pelo nome e especialidade da nova cliente.
    *   Atualize as metatags `<meta name="description">` e `<meta name="keywords">`.
    *   Atualize as metatags de OpenGraph (`og:title`, `og:description`, `og:url` e o link canonical).
2.  **Cabeçalho (Header)**:
    *   Substitua o nome e subtítulo da logomarca textual.
3.  **Hero Section (Abertura)**:
    *   Atualize a chamada principal (`h1`) e o texto descritivo.
4.  **Seção "Sobre"**:
    *   Substitua a biografia profissional, badges de formação e história.
5.  **Menu de Serviços (Abas)**:
    *   Ajuste as abas dinâmicas e os cards de procedimentos com os títulos e descrições dos tratamentos da nova cliente.
6.  **Quiz Interativo**:
    *   Ajuste as queixas estéticas se necessário para bater com a especialidade da profissional.
7.  **FAQ (Dúvidas)**:
    *   Atualize ou mantenha as respostas às dúvidas comuns baseadas nas técnicas dela.
8.  **Links de WhatsApp**:
    *   Substitua a URL do WhatsApp (`https://wa.me/558896996471`) pelo número da nova cliente em todos os links e botões (Header, Seção Sobre, FAQ, Footer e no Botão Flutuante).

---

### Passo 3: Customização Visual (`style.css`)
No arquivo `style.css`, atualize a paleta de cores para combinar com a identidade visual da nova cliente:

1.  Localize as variáveis de cores globais no topo do CSS e substitua os valores:
    *   Substitua a cor primária escura pelo tom principal da marca da cliente (Ex: verde-oliva ou azul-marinho).
    *   Substitua a cor de destaque (rose-gold/dourado) pela cor de destaque informada.
    *   Substitua o tom de fundo claro (off-white/areia) se necessário.
2.  Mantenha todas as regras de responsividade, efeitos de blur/glassmorfismo e micro-animações ativas para preservar a sensação premium.

---

### Passo 4: Customização da Mensagem do Quiz (`script.js`)
No arquivo `script.js`:
1.  Atualize o link de envio final do WhatsApp gerado no Quiz para que dispare para o número correto da nova cliente.
2.  Verifique se o texto padrão da mensagem enviada ("*Olá Dra, fiz a pré-avaliação e gostaria de agendar...*") está alinhado com o nome e especialidade dela.

---

### Passo 5: Validação Local
1.  Abra o arquivo `index.html` em seu navegador para validar:
    *   Se todos os links do WhatsApp abrem a conversa com a mensagem correta.
    *   Se as abas de serviços filtram os procedimentos sem erros de layout.
    *   Se o Quiz de 3 passos avança corretamente e gera o resultado esperado no final.
    *   Se a responsividade no celular está perfeita.
