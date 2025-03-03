<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Calculos from './components/Calculos.vue';
import Results from './components/Results.vue';

const dados = reactive({
  numero1: 0,
  numero2: 0,
  filtro: 'soma',
  resultados: {
    soma: 0,
    subtracao: 0,
    multiplicacao: 0,
    divisao: 0
  }
});

function calcularResultados() {
  dados.resultados.soma = dados.numero1 + dados.numero2;
  dados.resultados.subtracao = dados.numero1 - dados.numero2;
  dados.resultados.multiplicacao = dados.numero1 * dados.numero2;
  dados.resultados.divisao = dados.numero1 / dados.numero2;
}

function atualizarNumeros() {
  calcularResultados();
}

function updateNum1(value) {
  dados.numero1 = value;
  atualizarNumeros();
}

function updateNum2(value) {
  dados.numero2 = value;
  atualizarNumeros();
}

function updateFiltro(value) {
  dados.filtro = value;
  atualizarNumeros();
}
</script>

<template>
  <Cabecalho />
  <Calculos
    :num1="dados.numero1"
    :num2="dados.numero2"
    :filtro="dados.filtro"
    @update:num1="updateNum1"
    @update:num2="updateNum2"
    @update:filtro="updateFiltro"
  />
  <Results
    :filtro="dados.filtro"
    :soma="dados.resultados.soma"
    :subtracao="dados.resultados.subtracao"
    :divisao="dados.resultados.divisao"
    :multiplicacao="dados.resultados.multiplicacao"
  />
</template>

<style scoped>
</style>