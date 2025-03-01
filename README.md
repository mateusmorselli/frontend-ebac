# Exemplo de Herança em JavaScript

Este repositório contém um exemplo de herança utilizando funções construtoras no JavaScript, abordando diferentes tipos de funcionários com bônus salariais distintos.

## Descrição
O código define três tipos de funcionários:
- **Funcionario**: Possui nome, departamento e salário, além de métodos para acessar e modificar o salário e calcular o bônus salarial.
- **Herdeiro**: Herda de `Funcionario`, tem salário fixo de R$ 70.000 e recebe um bônus 18 vezes o salário.
- **Diretor**: Herda de `Funcionario`, tem salário fixo de R$ 15.000 e recebe um bônus de 1,35 vezes o salário.

## Estrutura do Código

- **Pessoa**: Função construtora base para armazenar nome e idade.
- **Funcionario**: Extende `Pessoa` e adiciona propriedades como departamento e salário.
- **Herdeiro** e **Diretor**: Especializações de `Funcionario`, sobrescrevendo o cálculo do bônus salarial.

## Exemplo de Saída

```bash
O valor bonus que o coitado funcionario Mateus do Financeiro recebeu de bonus ao final de longos 12 meses de trabalho foi de: R$ 250
O valor bonus que o merecedor herdeiro Guilherme recebeu de bonus ao final de curtas 3 semanas de trabalho foi de: R$ 1260000
O valor bonus que o diretor Alvaro recebeu de bonus ao final de 12 meses de trabalho foi de: R$ 20250
O valor bonus que o coitado funcionario João do Almoxarifado recebeu de bonus ao final de longos 12 meses de trabalho foi de: R$ 145
```

