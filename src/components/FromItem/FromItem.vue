<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p @click="onClick">{{error}}</p>
  </div>
</template>

<script>
  import Schema from 'async-validator';
  export default {
    name: 'QFromItem',
    inject: ['from'],
    provide() {
      return {
        fromItem: this
      }
    },
    props: {
      label: {
        type: String
      },
      prop: {
        tpye: String
      }
    },
    data() {
      return {
        error: ''
      }
    },
    methods: {
      validate() {
        const value = this.from.model[this.prop]
        const rules = this.from.rules[this.prop]
        const descriptor = {[this.prop]: rules}
        const schema = new Schema(descriptor)
        return schema.validate({[this.prop]: value}, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }

        })
      },
      onClick() {

        this.$emit('aaa')
      }
    },
    mounted () {
      this.$on('aaa', () => {
        console.log('jian')
      })
      this.$on('validate', () => {
        this.validate()
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>