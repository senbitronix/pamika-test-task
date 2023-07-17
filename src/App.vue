<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <status-bar/>
        <h1 class="title">
          Персонажи
        </h1>
        <search v-model="search"/>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <person-list :search="search" v-model:currentPage="currentPage"/>
      </div>
    </main>
    <footer class="footer" :style="{minHeight: search ? '160px' : null}">
      <div class="reset" v-if="search">
        <button class="reset-btn" @click="reset">Сбросить поиск</button>
      </div>
      <navigation/>
    </footer>
  </div>
</template>

<script setup>
import PersonList from "@/components/PersonList.vue";
import Search from "@/components/Search.vue";
import StatusBar from "@/components/StatusBar.vue";
import {ref} from "vue";
import Navigation from "@/components/Navigation.vue";

const search = ref(null);
const currentPage = ref(1);

function reset() {
  search.value = null
  currentPage.value = 1
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
  height: 100%;
}

#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.container {
  width: 325px;
  margin: 0 auto;
}

.wrapper {
  /*position: relative;*/
  margin: 0 auto;
  width: 375px;
  height: 812px;
  background-color: #F4F5F5;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}

.header {
  padding-top: 14px;
  margin-bottom: 10px;
}

.title {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}

.main {
  flex: 1 1 auto;
  overflow-y: auto
}

.footer {
  margin-top: 14px;
  position: relative;
  min-height: 80px;
}

.reset {
  position: absolute;
  bottom: 0;
  height: 160px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 13px 0px #16161742;
  border-radius: 10px 10px 0px 0px;
  z-index: 1;
}

.reset-btn {
  display: block;
  margin: 11px auto;
  width: 325px;
  height: 56px;
  border-radius: 10px;
  background: #CB99FA;
  border: none;
  color: white;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
}

.reset-btn:active {
  transform: translateY(2px);
}


</style>
