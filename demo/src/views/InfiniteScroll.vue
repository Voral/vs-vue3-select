<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import countries from '../mocks/countries.js'

const observer = ref<IntersectionObserver | null>(null)
const limit = ref(10)
const search = ref('')

const filtered = computed(() =>
  countries.filter((country) => country.includes(search.value)),
)

const paginated = computed(() => filtered.value.slice(0, limit.value))

const hasNextPage = computed(
  () => paginated.value.length < filtered.value.length,
)

onMounted(() => {
  observer.value = new IntersectionObserver(infiniteScroll)
})

async function infiniteScroll(entries: IntersectionObserverEntry[]) {
  const { isIntersecting, target } = entries[0]
  if (isIntersecting) {
    const scrollTop = (target as HTMLElement).offsetParent?.scrollTop
    limit.value += 10

    await nextTick()

    const ul = (target as HTMLElement).offsetParent

    if (ul) {
      ul.scrollTop = scrollTop ? scrollTop : 0
    }
  }
}

async function onOpen() {
  if (hasNextPage.value) {
    await nextTick()
    observer.value?.observe(load.value)
  }
}

function onClose() {
  observer.value?.disconnect()
}

const load = ref()
</script>

<template>
  <section>
    <h2>Infinite Scroll</h2>

    <v-select
      :options="paginated"
      :filterable="false"
      @open="onOpen"
      @close="onClose"
      @search="(query: any) => (search = query)"
    >
      <template #list-footer>
        <li v-show="hasNextPage" ref="load" class="loader">
          Loading more options...
        </li>
      </template>
    </v-select>
  </section>
</template>

<style scoped>
.loader {
  text-align: center;
  color: #bbbbbb;
}
</style>
