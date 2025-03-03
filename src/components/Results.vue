<script setup>
    const props = defineProps(['filtro', 'soma', 'subtracao', 'multiplicacao', 'divisao'])
</script>

<template>
    <ul class="list-group mt-4">
    <li class="list-group-item">
      <p v-if="filtro === 'soma'">
       A soma dos números é: {{ soma }}
      </p>
      <p v-if="filtro === 'subtracao'">
       A subtração dos números é: {{ subtracao }}
      </p>
      <p v-if="filtro === 'multiplicacao'">
       A multiplicação dos números é: {{ multiplicacao }}
      </p>
      <p v-if="filtro === 'divisao'">
       A divisão dos números é: {{ divisao }}
      </p>
    </li>
  </ul>
</template>