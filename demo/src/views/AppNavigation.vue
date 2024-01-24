<script setup>
import VSelect from '@/components/Select.vue'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const current = ref(
  router.options.routes.find(
    (item) => item.path === router.currentRoute.value.path,
  ),
)

const links = computed(() => {
  const excludes = ['404']
  return router.options.routes.filter(
    (r) =>
      r.path.startsWith('/') &&
      typeof r.name === 'string' &&
      !excludes.includes(r.name),
  )
})

watch(current, router.push)
</script>

<template>
  <v-select
    :clearable="false"
    :options="links"
    label="name"
    v-model="current"
    class="navigator"
  />
</template>

<style scoped>
.navigator {
  max-width: 150px;
}
</style>
