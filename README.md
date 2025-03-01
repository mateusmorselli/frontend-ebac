# Site - O Poderoso Chefão

Este é um site temático baseado no filme **O Poderoso Chefão**, desenvolvido utilizando **Gulp**, **Sass** e seguindo as melhores práticas de CSS com a metodologia **BEM**.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3 (Sass)**
- **JavaScript**
- **Gulp** (Automatização de tarefas)
- **Imagemin** (Otimização de imagens)
- **Uglify** (Minificação de JavaScript)

## Estrutura do Projeto

```
/
|-- dist/                # Arquivos finais otimizados
|   |-- css/             # Arquivos CSS minificados
|   |-- images/          # Imagens otimizadas
|   |-- js/              # Arquivos JS minificados
|
|-- src/                 # Arquivos fonte
|   |-- styles/          # Arquivos SCSS organizados (BEM)
|   |   |-- _header.scss
|   |   |-- _personagens.scss
|   |   |-- _sobre.scss
|   |   |-- main.scss
|   |-- scripts/         # Arquivos JavaScript
|   |   |-- header.js    # Oculta e exibe elementos do header ao rolar a página
|   |   |-- tabs.js      # Controle de abas na seção de personagens
|   |-- images/          # Imagens originais
|
|-- gulpfile.js          # Configuração do Gulp
|-- package.json         # Dependências do projeto
|-- README.md            # Documentação do projeto
```

## Funcionalidades do Gulp

O projeto utiliza **Gulp** para automatização de tarefas:

- **styles**: Compila os arquivos **Sass** em **CSS** minificado.
- **images**: Otimiza imagens para melhor desempenho.
- **scripts**: Minifica arquivos JavaScript.
- **watch**: Monitora alterações e atualiza os arquivos automaticamente.

## Funcionalidades do Site

### Ocultação do Header
O site conta com um script que esconde o **header** quando o usuário rola a página para baixo e o exibe novamente ao voltar para o topo.

### Controle de Abas na Seção de Personagens
As informações sobre os personagens do filme são organizadas em abas. O usuário pode alternar entre elas clicando nos botões correspondentes.

## Como Usar

1. Clone o repositório

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Execute o Gulp para compilar os arquivos:
   ```sh
   gulp
   ```

4. Para ativar o modo de observação (watch):
   ```sh
   gulp watch
   ```

## Demonstração

Acesse o site em: **[mateus-poderoso-chefao.vercel.app](https://mateus-poderoso-chefao.vercel.app)**
