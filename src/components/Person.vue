<template>
  <div class="person">
    <div class="person__info">
      <img class="person__ava" :src="props.person.image" alt="ava" />
      <span class="person__name">{{ props.person.name }}</span>
    </div>
    <img @click="showAlert" class="person__notification" src="/notification-message.png" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(['person'])

function showAlert() {
  alert(props.person.species)
}
</script>

<style scoped>
.person__ava,
.person__name,
.person__notification {
  cursor: pointer;
}

.person__ava {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}

.person {
  margin-top: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 325px;
  height: 80px;
  background: white;
  border-radius: 15px;
}

.person__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.person__notification {
  display: block;
  width: 21px;
  height: 21px;
}
</style>
