# Brisa Mercado

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-concluido-2433ff?style=flat)

Aplicação web front-end de uma empresa fictícia, com fluxo de cadastro, login e vitrine de produtos. O projeto consome duas APIs públicas, a **Fake Store API** e a **ViaCEP**, e é escrito em **JavaScript puro com ES Modules**, sem frameworks.

> Projeto desenvolvido para fins de estudo e portfólio. A Brisa Mercado não existe e os produtos exibidos são dados de teste.

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [APIs utilizadas](#apis-utilizadas)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Identidade visual](#identidade-visual)
- [Autor](#autor)

## Sobre o projeto

O objetivo é praticar o consumo de APIs REST com `fetch`, a organização do código em módulos JavaScript e a criação de interfaces responsivas com HTML e CSS puros. O site simula a jornada básica de uma loja online: a pessoa se cadastra, entra na conta e navega pelos produtos.

## Funcionalidades

- **Cadastro** (`index.html`): formulário com nome, sobrenome, e-mail, senha, telefone, data de nascimento, CEP, cidade, rua e bairro, com validação nativa do navegador.
- **Login** (`login.html`): acesso com e-mail e senha, com atalho para o cadastro.
- **Produtos** (`produtos.html`): vitrine em grade, com cards gerados a partir dos dados da API, mensagem de lista vazia e rodapé com canais de contato.
- **Navegação**: ao enviar o cadastro ou o login, a pessoa é levada para a tela de produtos.
- **Layout responsivo**: as telas se adaptam a desktop, tablet e celular.
- **Acessibilidade**: rótulos associados aos campos, estados de foco visíveis e respeito à preferência por menos animações.

## APIs utilizadas

### Fake Store API

API pública que simula uma loja virtual. É usada para obter a lista de produtos exibida na tela de produtos.

- Documentação: https://fakestoreapi.com
- Endpoint: `GET https://fakestoreapi.com/products`
- Uso no projeto: cada item retornado é renderizado como um elemento com a classe `card-produto`, que a lista organiza automaticamente em colunas.

### ViaCEP

API pública de consulta de endereços a partir do CEP. É usada no cadastro para preencher cidade, bairro e rua.

- Documentação: https://viacep.com.br
- Endpoint: `GET https://viacep.com.br/ws/{cep}/json/`

Exemplo de consumo:

```js
const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
const endereco = await resposta.json();
```

## Tecnologias

- HTML5 semântico
- CSS3, com Grid, Flexbox, variáveis CSS e media queries
- JavaScript (ES2020+) com ES Modules
- Fetch API para requisições HTTP
- Font Awesome para os ícones do rodapé
- Google Fonts: Unbounded e Instrument Sans

## Estrutura do projeto

```text
.
├── index.html       # Tela de cadastro
├── login.html       # Tela de login
├── produtos.html    # Tela de produtos
├── style.css        # Estilos do cadastro
├── login.css        # Estilos do login
├── produtos.css     # Estilos dos produtos e do rodapé
└── main.js          # Módulo JavaScript: consumo das APIs e navegação
```

## Como executar

Como o projeto usa módulos JavaScript (`<script type="module">`), ele precisa ser servido por um servidor HTTP local. Abrir os arquivos diretamente pelo navegador (`file://`) faz o navegador bloquear os módulos.

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Inicie um servidor local, usando uma destas opções:

   - **Live Server** (extensão do VS Code): clique com o botão direito em `index.html` e escolha *Open with Live Server*.
   - **Python**:

     ```bash
     python -m http.server 5500
     ```

3. Abra `http://localhost:5500` no navegador.

Não há dependências para instalar nem etapa de build.

## Identidade visual

Interface com painéis divididos, formas circulares e cantos arredondados, usando a seguinte paleta:

- Azul-cobalto: `#2433ff`
- Amarelo-manteiga: `#ffd84a`
- Azul-marinho: `#0b0f3b`
- Papel: `#fbfaf6`

## Autor

Desenvolvido por **Davi Fernandes**.

Brisa Mercado é uma empresa fictícia. Qualquer semelhança com empresas reais é mera coincidência.
