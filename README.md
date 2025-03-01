# Projeto Gulp: Compilação, Compressão de Imagens e JavaScript

Este projeto utiliza o Gulp para automatizar as tarefas de desenvolvimento, incluindo a compilação do SASS, compressão de imagens e compressão de código JavaScript.

## 📌 Funcionalidades

1. **Compilação do SASS**: Converte os arquivos `.scss` em arquivos `.css` comprimidos.
2. **Compressão de Imagens**: Otimiza as imagens na pasta `source/images` e as coloca na pasta `build/images`.
3. **Compressão de Código JavaScript**: Minifica e obfusca os arquivos JavaScript da pasta `source/scripts`, salvando-os na pasta `build/scripts`.

## 🛠️ Tecnologias

- **Gulp**: Automação de tarefas.
- **SASS**: Pré-processador CSS para facilitar o estilo.
- **Imagemin**: Para otimização de imagens.
- **Uglify**: Para minificação de código JavaScript.
- **Obfuscate**: Para ofuscação do código JavaScript.

## 🚀 Como Usar

### 1. Instalar as dependências

Execute o seguinte comando para instalar as dependências do projeto:

`npm install`

O Gulp irá observar mudanças nas pastas `source/styles`, `source/scripts` e `source/images`, executando automaticamente a compilação do SASS, a compressão de imagens e a compressão do código JavaScript.

### Estrutura de Pastas

- **source/styles**: Contém os arquivos `.scss` a serem compilados.
- **source/scripts**: Contém os arquivos `.js` a serem minificados e ofuscados.
- **source/images**: Contém as imagens a serem comprimidas.
- **build/styles**: Onde os arquivos `.css` compilados e minificados serão armazenados.
- **build/scripts**: Onde os arquivos `.js` minificados e ofuscados serão armazenados.
- **build/images**: Onde as imagens otimizadas serão armazenadas.

## 🌿 Como Funciona o Gulpfile

O arquivo `gulpfile.js` contém as seguintes funções:

- **compilaSass**: Compila os arquivos SASS em CSS, comprime o CSS e gera mapas de fontes.
- **comprimeJavaScript**: Minifica e ofusca os arquivos JavaScript.
- **comprimeImagens**: Comprime as imagens.

### Observação:

O Gulp observa as mudanças nas pastas `source/styles`, `source/scripts`, e `source/images`. Sempre que um arquivo for alterado nessas pastas, o Gulp executará a tarefa correspondente.

