<template>
  <nav class="nav">
    <div class="nav-item" v-for="navItem of navItems" :key="navItem.id">
      <img class="nav-item__navigation" :src="navItem.src" alt="" />
      <span class="nav-item__caption">{{ navItem.value }}</span>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { id: 1, value: 'карта', src: 'Navigation.png' },
  { id: 1, value: 'чаты', src: 'Comment.png' },
  { id: 1, value: 'мои встречи', src: 'Clock.png' },
  { id: 1, value: 'профиль', src: 'User.png' }
]
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 18px 55px 18px 44px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 40px 40px 30px 30px;
  box-shadow: 0px 0px 13px 0px #16161742;
  bottom: 0;
  position: absolute;
  z-index: 2;
}

.nav-item {
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.nav-item:active {
  transform: scale(1.1);
}

.nav-item img {
  height: 30px;
  width: 30px;
}

.nav-item__caption {
  display: block;
  white-space: nowrap;
  position: absolute;
  bottom: -5px;
  font-size: 12px;
}

.notification-dot {
  height: 11px;
  width: 11px;
  border: 2px solid white;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0px;
}

.notification-dot_black {
  background: linear-gradient(0deg, #ef7958, #ef7958), linear-gradient(0deg, #ffffff, #ffffff);
}

.notification-dot_orange {
  background-color: black;
}
</style>
