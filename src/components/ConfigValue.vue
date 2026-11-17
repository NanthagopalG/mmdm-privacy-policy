<template>
  <mark v-if="isPlaceholder" class="ph" title="Set this value in src/config.js">{{ value }}</mark>
  <a v-else-if="href" :href="href">{{ value }}</a>
  <span v-else>{{ value }}</span>
</template>

<script>
export default {
  name: 'ConfigValue',
  props: {
    value: { type: String, required: true },
    type: { type: String, default: 'text' }, // text | email | url
  },
  computed: {
    isPlaceholder() {
      return this.value.trim().startsWith('[')
    },
    href() {
      if (this.type === 'email') return `mailto:${this.value}`
      if (this.type === 'url') return this.value
      return null
    },
  },
}
</script>
