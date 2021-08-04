<template>
    <input v-bind="$attrs" :value="value" @input="onInput">
</template>

<script>
export default {
  name: 'QInput',
  inheritAttrs: false,
  inject: ['fromItem'],
  props: {
    value: {
      type: [Number,String],
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      if (this.fromItem) {
        this.fromItem.$emit('validate')
      }
    },
   
  },
};
</script>

<style lang="scss" scoped>
</style>