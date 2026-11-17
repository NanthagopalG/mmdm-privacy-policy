<template>
  <span v-if="isPlaceholder" class="ph">{{ placeholderText }}</span>
  <a v-else-if="href" :href="href">{{ value }}</a>
  <span v-else>{{ value }}</span>
</template>

<script>
export default {
  name: 'ConfigValue',
  props: {
    value: { type: String, required: true },
    type: { type: String, default: 'text' }, // text | email | url
    // Text shown instead of the placeholder label, e.g. "To be confirmed".
    fallback: { type: String, default: '' },
  },
  computed: {
    isPlaceholder() {
      return this.value.trim().startsWith('[')
    },
    placeholderText() {
      if (this.fallback) return this.fallback
      // "[COMPANY LEGAL NAME]" -> "[Company legal name]"; drops any ", e.g. …" hint.
      const label = this.value.trim().replace(/^\[|\]$/g, '').split(',')[0].trim().toLowerCase()
      const text = `${label.charAt(0).toUpperCase()}${label.slice(1)}`.replace(/\burl\b/g, 'URL')
      return `[${text}]`
    },
    href() {
      if (this.type === 'email') return `mailto:${this.value}`
      if (this.type === 'url') return this.value
      return null
    },
  },
}
</script>
