# I Wanna Be Tour Countdown!

Este é um site de contagem regressiva para o show **I Wanna Be Tour**, apresentando bandas icônicas como **Good Charlotte**, **Fall Out Boy**, **Forfun** e **Dead Fish**. O site exibe um contador dinâmico até a data do evento e animações para tornar a experiência mais interativa.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3 (Sass)**
- **JavaScript**
- **AOS.js** (Animações de rolagem)
- **Font Awesome** (Icones)

## Estrutura do Projeto

```
/
|-- dist/                # Arquivos finais otimizados
|   |-- css/             # Arquivos CSS minificados
|   |-- images/          # Imagens otimizadas
|   |-- js/              # Arquivos JS minificados
|
|-- src/                 # Arquivos fonte
|   |-- styles/          # Arquivos SCSS organizados
|   |   |-- _header.scss
|   |   |-- _event.scss
|   |   |-- main.scss
|   |-- scripts/         # Arquivos JavaScript
|   |   |-- countdown.js # Script de contagem regressiva
|   |-- images/          # Imagens do evento
|
|-- index.html           # Estrutura principal do site
|-- README.md            # Documentação do projeto
```

## Funcionalidades do Site

### Contagem Regressiva

O site possui um contador dinâmico que exibe o tempo restante até o evento. O contador atualiza automaticamente a cada segundo e exibe **"Evento expirado!"** quando o tempo se esgota.

### Animações de Rolagem

As seções das bandas possuem animações de entrada configuradas com **AOS.js**, melhorando a experiência do usuário.

## Como Usar

1. Clone o repositório

2. Instale as dependências (caso utilize Sass ou outras ferramentas adicionais):
   ```sh
   npm install
   ```

3. Inicie o projeto (se houver automação configurada):
   ```sh
   npm start
   ```

## Demonstração

Acesse o site: **[aqui](https://exercicio-modulo-22-alpha.vercel.app)**
