<template>
    <input v-bind="$attrs" :value="value" @input="onInput">
</template>

<script>
import emitter from '../../utils/mixins/emitter'
export default {
  name: 'QInput',
  inheritAttrs: false,
  inject: ['fromItem'],
  mixins: [emitter],
  props: {
    value: {
      type: [Number,String],
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
        this.dispatch('QFromItem', 'validate', [])
    },
   
  },
};
</script>

<style lang="scss" scoped>
</style>