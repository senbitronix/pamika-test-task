<template>
  <div class="skeleton-loader-wrapper">
    <div class="skeleton-loader">
      <div class="skeleton-loader-item" v-for="n of 6" :key="n">
        <div class="skeleton-loader-item__ava"></div>
        <div class="skeleton-loader-item__text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.skeleton-loader {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &-item {
    width: 100%;
    padding: 15px;
    background: rgba(170, 177, 194, 0.15);
    border-radius: 15px;
    position: relative;
    overflow: hidden;

    > * {
      @keyframes load-effect {
        0% {
          left: -100%;
        }
        65% {
          left: 200%;
        }
        100% {
          left: 200%;
        }
      }

      @keyframes ranged-load-effect {
        0% {
          left: -100%;
        }
        65% {
          left: 275%;
        }
        100% {
          left: 275%;
        }
      }

      &::after {
        content: '';
        background: rgb(231, 233, 238);
        top: 0;
        height: 300%;
        left: -100%;
        position: absolute;
        transform: rotate(35deg);
        transform-origin: top right;
        animation-name: load-effect;
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        animation-delay: 0.15s;
        box-shadow: 0 0 12px 10px rgb(231, 233, 238);
        width: 30%;
      }
    }
  }

  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    &__ava {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: rgba(170, 177, 194, 0.4);
    }

    &__text {
      height: 15px;
      background: rgba(170, 177, 194, 0.4);
      border-radius: 9999999px;
      flex-grow: 1;
    }
  }
}
</style>
