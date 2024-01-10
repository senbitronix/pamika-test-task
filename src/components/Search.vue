<template>
  <div class="search">
    <input class="search-field" :value="props.modelValue" @input="fetchData" placeholder="Поиск" />
    <img src="/Search.png" alt="search-icon" class="search-icon" />
  </div>
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const fetchData = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped>
.search {
  margin-top: 25px;
  display: flex;
  border-radius: 100px;
  position: relative;
}

.search-field {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 12px 8px 44px;
  border-radius: 100px;
  border: none;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
}

.search-field:focus {
  outline: none;
}

.search-icon {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 8px;
  left: 12px;
  order: -1;
}
</style>
