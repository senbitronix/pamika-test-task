<template>
  <div class="persons-count" :style="{marginTop: personsCount ? '0px' : '46px'}" v-html="caption">
  </div>

  <loader v-if="loading"/>
  <template v-else>
    <person class="card" v-for="person in persons" :key="person.id" :person="person"/>
    <button v-if="currentPage<pages" @click="getNextPageData" class="show-more-btn">
      <span>Показать еще</span>
      <img src="../../public/black-arrow.png">
    </button>
  </template>
</template>

<script setup>
import Person from "@/components/Person.vue";
import Loader from "@/components/Loader.vue";
import {computed, watch} from "vue";
import {usePersons} from "@/hooks/usePersons";
import {debounce} from "@/helpers";

const props = defineProps(['search', 'currentPage'])
const emits = defineEmits(['update:currentPage'])
const {persons, personsCount, loading, pages, fetching} = usePersons();

const caption = computed(() => {
  return personsCount.value ? personsCount.value + ' персонажей' : 'Не удалось найти персонажей' + '<br>' + 'с таким именем'
})

function getNextPageData() {
  const page = props.currentPage + 1;
  emits('update:currentPage', props.currentPage + 1)
  fetching({name: props.search, page})
}

watch(() => props.search, async () => {
  const getResourceDebounced = debounce(() => {
    fetching({name: props.search, page: props.currentPage})
  }, 200)
  getResourceDebounced()
});

</script>

<style scoped>
.persons-count {
  color: #C1C2C7;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
}

.show-more-btn {
  margin-top: 10px;
  padding: 15px 86px 19px 66px;
  width: 325px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: white;
  text-align: left;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
}

.show-more-btn:active {
  transform: translateY(2px);
}
</style>
