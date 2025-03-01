# Exercício Grunt

Este repositório contém um exercício de configuração do Grunt para automatizar tarefas no desenvolvimento web.

## Tecnologias Utilizadas

- **Grunt**: Automação de tarefas
- **LESS**: Pré-processador CSS
- **JavaScript**: Compressão de código
- **HTML**: Minificação
- **Imagemin**: Otimização de imagens

## Tarefas Implementadas

- **Compilação de LESS**: Transforma arquivos `.less` em `.css`.
- **Minificação de CSS**: Gera uma versão comprimida do CSS.
- **Watch**: Monitora alterações em arquivos `.less` e `.html` e executa as tarefas automaticamente.
- **Substituição de Caminhos**: Atualiza referências de arquivos CSS e JavaScript no HTML.
- **Minificação de HTML**: Remove comentários e espaços desnecessários.
- **Limpando Arquivos Temporários**: Remove diretórios intermediários como `prebuild`.
- **Minificação de JavaScript**: Reduz o tamanho dos arquivos JavaScript.
- **Otimização de Imagens**: Comprime imagens `.png`, `.jpg` e `.gif`.

## Comandos Principais

- **`grunt`**: Executa a tarefa `watch`, monitorando alterações nos arquivos.
- **`grunt build`**: Executa todas as tarefas de produção, incluindo minificação e otimização.
