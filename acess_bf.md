\# Guia de Acessibilidade e Usabilidade \- BarberFlow (WCAG 2.2 AA)

O \*\*BarberFlow\*\* é um sistema web de agendamento para barbearias, permitindo que clientes agendem horários e barbeiros gerenciem sua agenda.

\*\*Tecnologias utilizadas:\*\*  
\- HTML  
\- CSS  
\- JavaScript  
\- EJS  
\- Node.js  
\- Express  
\- PostgreSQL/Dbeaver

\---

\#\# ESTRUTURA DO PROJETO

O projeto BarberFlow segue uma arquitetura baseada em \*\*Node.js com Express\*\*, utilizando \*\*EJS\*\* como engine de visualização e \*\*PostgreSQL\*\* como banco de dados.

\#\#\# Organização de Pastas. A alteração mais recente foi dia 12/04, teve que ser pausadas devido as avaliações do curso.

barberflow/  
│  
├── node_modules/  
│  
├── config/  
│ ├── db.js  
│ └── teste-db.js  
│  
├── routes/  
│ ├── auth.js  
│ ├── cliente.js  
│ └── barbeiro.js  
│  
├── views/  
│ ├── index.ejs  
│ ├── login.ejs  
│ ├── cadastro.ejs  
│ ├── cadastro_cliente.ejs  
│ ├── cadastro_barbeiro.ejs  
│  
│ ├── cliente/  
│ │ ├── dashboard_cliente.ejs  
│ │ ├── agendar.ejs  
│ │ └── confirmacao.ejs  
│  
│ ├── barbeiro/  
│ │ ├── dashboard_barb.ejs  
│ │ ├── agenda.ejs  
│ │ └── servicos.ejs  
│  
│ └── partials/  
│ ├── header.ejs  
│ ├── footer.ejs  
│ ├── navbar_public.ejs  
│ ├── navbar_cliente.ejs  
│ └── navbar_barbeiro.ejs  
│  
├── public/  
│ ├── css/  
│ │ └── style.css  
│ ├── js/  
│ │ └── darkmode.js  
│ └── img/  
│ └── logo.png  
│  
├── .env  
├── .gitignore  
├── server.js  
├── package.json  
└── package-lock.json

\---

\#\#\# Descrição das Camadas

\#\#\#\# Backend (Node.js \+ Express)  
\- Responsável pela lógica do sistema  
\- Gerencia rotas e requisições HTTP  
\- Faz integração com o banco de dados

\*\*Principais arquivos:\*\*  
\- \`server.js\` → inicialização do servidor  
\- \`routes/\` → controle das funcionalidades (login, cliente, barbeiro)  
\- \`config/db.js\` → conexão com PostgreSQL

\---

\#\#\#\# Frontend (EJS \+ CSS \+ JS)  
\- Interface do usuário  
\- Renderização dinâmica com EJS

\*\*Views principais:\*\*  
\- Página inicial (\`index.ejs\`)  
\- Login (\`login.ejs\`)  
\- Cadastro (\`cadastro\*.ejs\`)  
\- Dashboards de cliente e barbeiro

\---

\#\#\#\# Partials (Reutilização de Código)  
\- Componentes reutilizáveis  
\- Evita repetição de código

\*\*Exemplos:\*\*  
\- Header  
\- Footer  
\- Navbars diferentes por tipo de usuário(clientes e barbeiros)

\---

\#\#\#\# Arquivos Públicos  
\- Arquivos estáticos acessados pelo navegador

\*\*Inclui:\*\*  
\- CSS (\`style.css\`)  
\- JavaScript (\`darkmode.js\`)  
\- Imagens (\`logo.png\`)

\---

\#\#\#\# Banco de Dados (PostgreSQL)  
\- Armazena dados dos usuários e agendamentos  
\- Gerenciado via DBeaver

\---

\#\#\# Padrão de Organização

O projeto segue uma separação em camadas:

\- \*\*Rotas (routes)\*\* → controle  
\- \*\*Views (views)\*\* → interface  
\- \*\*Config (config)\*\* → infraestrutura  
\- \*\*Public (public)\*\* → recursos estáticos

Esse padrão facilita:  
\- Manutenção  
\- Escalabilidade  
\- Organização do código

—

\#\# Conformidade WCAG 2.2 Nível AA

\#\#\# 1\. CONTRASTE (1.4.3 \- Contrast Minimum)  
\*\*Status:\*\* ✓ Implementado

\*\*Verificações realizadas:\*\*

## Modo Claro
- **Elemento / Estado:** Corpo  
  - Cor do Texto: #3b2a1f  
  - Cor de Fundo: #f5e6d3  
  - Contrast Ratio: 11.15:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Header / Nav / Footer  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #3b2a1f  
  - Contrast Ratio: 13.66:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Botão principal (.botao)  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #3b2a1f  
  - Contrast Ratio: 13.66:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Botão Dark Mode (#darkToggle)  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #6b4b3e  
  - Contrast Ratio: 7.77:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Formulário (.form-container)  
  - Cor do Texto: #3b2a1f  
  - Cor de Fundo: #ffffff  
  - Contrast Ratio: 13.66:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

## Modo Escuro (Dark Mode)
- **Elemento / Estado:** Corpo  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #121212  
  - Contrast Ratio: 18.73:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Header / Footer  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #000000  
  - Contrast Ratio: 21.00:1  
  - AA Normal: Pass  
  - AAA Normal: Pass  

- **Elemento / Estado:** Formulário  
  - Cor do Texto: #ffffff  
  - Cor de Fundo: #1e1e1e  
  - Contrast Ratio: 16.67:1  
  - AA Normal: Pass  
  - AAA Normal: Pass

\*\*Conclusão:\*\*  
\- Todos os elementos atendem AA e AAA  
\- Excelente legibilidade inclusive para daltonismo

\---

\#\#\# 2\. NAVEGAÇÃO POR TECLADO (2.1.1 \- Keyboard)  
\*\*Status:\*\* ✓ Implementado

\*\*Recursos:\*\*  
\- ✓ Navegação completa com \`Tab\`  
\- ✓ Navegação reversa com \`Shift \+ Tab\`  
\- ✓ Botões e links acessíveis  
\- ✓ Formulários totalmente navegáveis

\*\*Teste:\*\*

Pressione TAB e percorra toda a página.  
Todos os elementos devem ser acessíveis.

\---

\#\#\# 3\. ALT EM IMAGENS (1.1.1 \- Non-text Content)  
\*\*Status:\*\* ✓ Implementado

\*\*Exemplo:\*\*  
\`\`\`html  
\<img src="/img/logo.png" alt="Logo do BarberFlow"\>

**Boas práticas:**

* ✓ Todas as imagens possuem descrição  
* ✓ Não há imagens sem ALT

---

### **4\. FORMULÁRIOS ACESSÍVEIS (3.3.2 \- Labels and Instructions)**

**Status:** ✓ Implementado

**Características:**

* ✓ Labels associados aos inputs  
* ✓ Uso de `required`  
* ✓ Validação de senha mínima (8 caracteres)  
* ✓ Instruções com `<small>`

**Exemplo:**

\<label for="email"\>Email\</label\>  
\<input type="email" id="email" required\>  
\<small\>Digite um email válido\</small\>

---

### **5\. FOCO VISÍVEL (2.4.7 \- Focus Visible)**

**Status:** ✓ Implementado

**CSS aplicado:**

a:focus,  
button:focus,  
input:focus {  
    outline: 3px solid orange;  
    outline-offset: 2px;  
}

**Resultado:**

* ✓ Foco visível em todos os elementos  
* ✓ Alto contraste

---

### **6\. HIERARQUIA DE TÍTULOS (1.3.1)**

**Status:** ✓ Implementado

**Estrutura usada:**

* h1 → título principal (logo/header)  
* h2 → seções principais  
* h3 → subtópicos

**Exemplo:**

\<h2\>Como funciona?\</h2\>  
\<h3\>Clientes\</h3\>  
\<h3\>Barbeiros\</h3\>

---

### **7\. HTML SEMÂNTICO**

**Status:** ✓ Implementado

**Uso correto de:**

* `<header>`  
* `<nav>`  
* `<main>`  
* `<section>`  
* `<footer>`

**Benefícios:**

* Melhor leitura por leitores de tela  
* Melhor SEO  
* Estrutura organizada

---

### **8\. MODO NOTURNO (Dark Mode)**

**Status:** ✓ Implementado

**Funcionalidades:**

* ✓ Alternância com botão  
* ✓ Persistência com `localStorage`  
* ✓ Alto contraste no modo escuro

**Exemplo JS:**

localStorage.setItem("modo","dark");

---

### **9\. TIPOGRAFIA E LEGIBILIDADE**

**Status:** ✓ Implementado

**Configurações:**

* Fonte: Poppins (sans-serif)  
* Tamanho base adequado  
* Line-height: 1.6  
* Layout centralizado

---

### **10\. RESPONSIVIDADE (1.4.10 \- Reflow)**

**Status:** ✓ Implementado

**Recursos:**

* ✓ Layout adaptável  
* ✓ Menu responsivo  
* ✓ Uso de media query

**Exemplo:**

@media (max-width:700px){  
    header{  
        flex-direction:column;  
    }  
}

---

## **CHECKLIST DE TESTES**

### **✓ Teclado**

* Todos os links acessíveis  
* Ordem lógica de navegação  
* Foco visível sempre presente

### **✓ Formulários**

* Campos com label  
* Validação funcionando  
* Mensagens claras

### **✓ Contraste**

* Todos os textos \> 4.5:1  
* Botões legíveis  
* Dark mode funcional

### **✓ Layout**

* Funciona no mobile  
* Sem quebra de layout  
* Conteúdo visível

---

## **FERRAMENTAS DE TESTE**

### **Automáticos:**

* Lighthouse (Chrome DevTools)  
* Axe DevTools

### **Manuais:**

* Navegação por teclado  
* Teste visual de contraste

---

## **MELHORIAS FUTURAS PARA O FINAL DO PROJETO NA AV3**

* Implementar ARIA labels com suas devidas funcionalidades 
* Melhorar feedback de erro em formulários  
* Adicionar suporte a leitores de tela mais avançado  
* Criar página de acessibilidade dedicada  
* Implementar skip link

---

## **CONCLUSÃO**

O sistema **BarberFlow** atende às diretrizes da **WCAG 2.2 nível AA**, garantindo:

* Boa legibilidade  
* Navegação acessível  
* Interface simples e clara  
* Suporte a diferentes usuários

**Acessibilidade foi considerada desde o início do desenvolvimento.**

