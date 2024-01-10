<template>
  <div
    v-if="!loading"
    class="persons-count"
    :class="{ 'mt-45': !personsCount }"
    v-html="caption"
  ></div>

  <skeleton-loader v-if="loading" />

  <template v-else>
    <person class="card" v-for="person in persons" :key="person.id" :person="person" />
    <button v-if="currentPage < pages" @click="getNextPageData" class="show-more-btn">
      <span>Показать еще</span>
      <img src="/black-arrow.png" />
    </button>
  </template>
</template>

<script setup>
import Person from '@/components/Person.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { computed, watch } from 'vue'
import { usePersons } from '@/hooks/usePersons'
import lodash from 'lodash'
import { declOfNum } from '@/helpers'

const props = defineProps(['search', 'currentPage'])
const emits = defineEmits(['update:currentPage'])
const { persons, personsCount, loading, pages, fetching } = usePersons()

const caption = computed(() => {
  if (personsCount.value) {
    return (
      personsCount.value +
      ' ' +
      declOfNum(personsCount.value, ['персонаж', 'персонажа', 'персонажей'])
    )
  }
  return 'Не удалось найти персонажей' + '<br>' + 'с таким именем'
})

function getNextPageData() {
  const page = props.currentPage + 1
  emits('update:currentPage', props.currentPage + 1)
  fetching({ name: props.search, page })
}

const debouncedSearch = lodash.debounce(() => {
  fetching({ name: props.search, page: 1 })
}, 500)

watch(
  () => props.search,
  async () => {
    debouncedSearch()
  }
)
</script>

<style scoped lang="less">
.persons-count {
  color: #c1c2c7;
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
