<template>
  <nav class="nav">
    <div class="nav-item">
      <img class="nav-item__navigation" src="../../public/Navigation.png" alt="">
      <span class="nav-item__caption">карта</span>
    </div>
    <div class="nav-item">
      <img class="nav-item__comment" src="../../public/Comment.png" alt="">
      <span class="nav-item__caption">чаты</span>
      <div class='notification-dot notification-dot_black'></div>
    </div>
    <div class="nav-item">
      <img class="nav-item__clock" src="../../public/Clock.png" alt="">
      <span class="nav-item__caption">мои встречи</span>
      <div class='notification-dot notification-dot_orange'></div>
    </div>
    <div class="nav-item">
      <img color="black" class="nav-item__user" src="../../public/User.png" alt="">
      <span class="nav-item__caption">профиль</span>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 18px 55px 18px 44px;
  width: 100%;
  background-color: #FFFFFF;
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
  background: linear-gradient(0deg, #EF7958, #EF7958), linear-gradient(0deg, #FFFFFF, #FFFFFF);
}

.notification-dot_orange {
  background-color: black;
}
</style>