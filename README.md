# Dra. Fabbywla Medeiros — Harmonização Facial & Botox
> **Landing Page de Alto Padrão** desenvolvida sob medida para a especialista em Harmonização Orofacial (HOF) Dra. Fabbywla Medeiros. Um projeto responsivo de altíssima fidelidade estética e sofisticação clínica, ideal para atração e conversão de pacientes premium.

---

## 🔗 Demonstração Live
O projeto está publicado e pode ser visualizado em tempo real:
👉 **[Visite a Landing Page Oficial](https://idarlandias.github.io/drafabbywlamedeiros/)**

---

## 🎨 Design System & Identidade Visual
A estética do projeto foi inteiramente pensada para transmitir sofisticação, responsabilidade e o alto padrão dos procedimentos injetáveis da profissional.

*   **Paleta de Cores Coesa**:
    *   **Verde Esmeralda Profundo (`#0A261E`)**: Cor institucional primária que evoca autoridade clínica, elegância e sobriedade.
    *   **Champanhe Gold (`#D4AF37`)**: Cor de destaque e acento para botões e detalhes decorativos, expressando sofisticação e exclusividade.
    *   **Pearl Alabaster Off-White (`#FCFAF6` / `#F3EFE6`)**: Fundo e superfícies que garantem leveza visual, clareza e excelente contraste de leitura.
*   **Tipografia Refinada**:
    *   **Cormorant Garamond** (Google Fonts) — Tipografia serifada clássica utilizada em títulos para dar um aspecto editorial de revista de luxo.
    *   **Inter** (Google Fonts) — Tipografia sans-serif limpa e moderna para o corpo do texto e badges informativos, priorizando a legibilidade.

---

## 🚀 Principais Funcionalidades (Recursos de Destaque)

1.  **Layout Split-Hero Responsivo (Sem Cortes)**:
    *   Desenvolvimento de um grid dinâmico (`55%` de texto à esquerda e `40%` de imagem à direita no desktop) para exibir fotos verticais reais sem cortar rostos ou marcas d'água das imagens.
    *   Preservação perfeita da proporção natural de retrato das imagens (`aspect-ratio` real de cada arquivo).
    *   Empilhamento vertical suave e centralizado em smartphones e tablets.
2.  **Simulador Clínico Interativo (Beauty Quiz)**:
    *   Um funil de qualificação digital de 3 passos desenvolvido em JavaScript puro (Vanilla JS).
    *   **Passo 1**: Seleção da queixa estética facial principal (Rugas, Lábios, Flacidez, Desidratação).
    *   **Passo 2**: Seleção do incômodo específico (dinâmico de acordo com o Passo 1).
    *   **Passo 3**: Nome do paciente.
    *   **Resultado**: Sugere o tratamento ideal (e.g. *Botox*, *Lips Premium*, *Bioestimuladores*) e gera um link direcionado com mensagem 100% personalizada e formatada em negrito no WhatsApp da clínica, facilitando o agendamento do paciente já qualificado.
3.  **Contraste Inteligente de Cabeçalho (Frosted Glass Scroll)**:
    *   Menu transparente com textos em branco e dourado para alto contraste sobre o verde escuro da seção Hero.
    *   Ao rolar a página, o cabeçalho adiciona a classe `.scrolled` via Javascript, ativando um efeito de desfoque de fundo (blur) com fundo off-white translúcido e mudando as fontes para o verde esmeralda institucional, mantendo legibilidade contínua.
4.  **FAQ Interativo em Acordeão**:
    *   Acordeão de dúvidas frequentes com animações fluidas de abertura baseadas no `scrollHeight` dos elementos, evitando saltos secos de layout.
5.  **Botão Flutuante Premium**:
    *   Ponto de contato rápido com animação de pulso de atenção discreta, chamando o usuário para o WhatsApp.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído puramente com tecnologias web nativas para garantir carregamento instantâneo, leveza e facilidade de indexação SEO:

*   **HTML5 Semântico**: Estruturação limpa baseada em seções semânticas (`<header>`, `<section>`, `<footer>`) e tags otimizadas para motores de busca (SEO).
*   **CSS3 Custom Properties (Variáveis Globais)**: Sistema de design encapsulado em variáveis CSS no seletor `:root` para fácil manutenção ou alteração da paleta de cores.
*   **Javascript Vanilla (ES6)**: Toda a inteligência do menu móvel, acordeões de FAQ e lógica de recomendação do quiz executada diretamente no navegador, sem frameworks pesados.
*   **Ícones em SVG**: Elementos gráficos de alta qualidade que não perdem resolução em telas Retina e economizam requisições HTTP.

---

## 📁 Estrutura de Arquivos

```bash
drafabbywlamedeiros/
├── images/               # Fotos oficiais e ícones decorativos
│   ├── img3.png          # Retrato profissional da Dra. Fabbywla
│   ├── img4.png          # Ilustração clínica
│   ├── img5.png          # Foto principal do Hero
│   └── clinic_interior.png # Compartilhamento OpenGraph
├── index.html            # Estrutura e marcação semântica da página
├── style.css             # Estilização responsiva e variáveis globais
├── script.js             # Funções de scroll, menu móvel e lógica do Quiz
└── README.md             # Documentação técnica do projeto (esta página)
```

---

## ⚙️ Como Executar Localmente

Como o projeto é estático, você não precisa de gerenciar pacotes ou servidores complexos para rodar ou visualizar as modificações:

1.  Clone este repositório:
    ```bash
    git clone https://github.com/idarlandias/drafabbywlamedeiros.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd drafabbywlamedeiros
    ```
3.  Abra o arquivo `index.html` diretamente em seu navegador favorito ou utilize uma extensão como a **Live Server** no VSCode para desenvolvimento rápido.

---

## 🌍 Publicação e Implantação (Deploy)

O deploy deste projeto é automatizado via **GitHub Pages**. Qualquer nova alteração enviada à branch principal (`main`) disparará o GitHub Actions correspondente para recompilar e atualizar o site live instantaneamente:

```bash
git add .
git commit -m "feat: melhorias de layout e conteúdo"
git push origin main
```

---

## 👨‍💻 Autor
Desenvolvido como projeto de portfólio profissional focado em conversão e design premium para a área médica e estética.
