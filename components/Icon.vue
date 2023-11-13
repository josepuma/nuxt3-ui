<script setup lang="ts">
    const props = defineProps<{ name: string }>()
  const icon = computed(() => 
    defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
  )
</script>

<template lang="pug">
component(:is="icon", v-if="icon", class="stroke-[1.5px]")
</template>