<script setup>
const props = defineProps(['num1', 'atualizarNumeros', 'filtro', 'num2']);
const emit = defineEmits(['update:num1', 'update:num2', 'update:filtro']);

function updateNum1(event) {
  emit('update:num1', Number(event.target.value));
}

function updateNum2(event) {
  emit('update:num2', Number(event.target.value));
}

function updateFiltro(event) {
  emit('update:filtro', event.target.value);
}
</script>

<template>
  <form>
    <div class="row d-flex justify-content-center">
      <div class="col-3">
        <input
          :value="num1"
          @input="updateNum1"
          required
          type="number"
          placeholder="Insira o primeiro número"
          class="form-control"
        />
      </div>
      <div class="col-md-1">
        <select :value="filtro" @change="updateFiltro" class="form-control btn btn-dark">
          <option value="soma">+</option>
          <option value="subtracao">-</option>
          <option value="multiplicacao">*</option>
          <option value="divisao">/</option>
        </select>
      </div>
      <div class="col-3">
        <input
          :value="num2"
          @input="updateNum2"
          required
          type="number"
          placeholder="Insira o segundo número"
          class="form-control"
        />
      </div>
    </div>
  </form>
</template>