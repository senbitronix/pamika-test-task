<template>
  <div class="status-bar">
    <div class="time">
      {{ time }}
    </div>
    <div class="sensors">
      <div>
        <img src="../../public/CellularConnection.png" alt="">
      </div>
      <div>
        <img src="../../public/Wifi.png" alt="">
      </div>
      <div>
        <img src="../../public/Battery.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const time = ref(getCurrentTime())

function getCurrentTime() {
  const MyDate = new Date(Date.now());
  return ('0' + MyDate.getHours()).slice(-2) + ':'
      + ('0' + (MyDate.getMinutes() + 1)).slice(-2)
}

onMounted(() => {
  setInterval(() => {
    time.value = getCurrentTime()
  }, 1000)
})

</script>

<style scoped>
.status-bar {
  display: flex;
  justify-content: space-between;
}

.time {
  padding-left: 5px;
  font-size: 15px;
}

.sensors {
  margin-right: -11px;
  display: flex;
  width: 70px;
  justify-content: space-between;
}
</style>