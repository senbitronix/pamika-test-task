import { onMounted, ref } from 'vue'
import { getResource } from '@/services/api'

export function usePersons() {
  const persons = ref([])
  const personsCount = ref(0)
  const pages = ref(0)
  const loading = ref(false)
  const fetching = async (options) => {
    loading.value = true
    const data = await getResource(options)
    persons.value = data?.results || []
    personsCount.value = data?.info.count || 0
    pages.value = data?.info.pages || 0
    loading.value = false
  }

  onMounted(fetching)

  return {
    persons,
    personsCount,
    loading,
    pages,
    fetching
  }
}
