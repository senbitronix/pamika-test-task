<template>
  <div class="status-bar">
    <div class="time">
      {{ time }}
    </div>
    <div class="sensors">
      <div>
        <img src="/CellularConnection.png" alt="" />
      </div>
      <div>
        <img src="/Wifi.png" alt="" />
      </div>
      <div>
        <img src="/Battery.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import moment from 'moment'

const time = ref(getCurrentTime())

function getCurrentTime() {
  return moment().format('HH:mm')
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
