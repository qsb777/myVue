<template>
  <div class="q-notice" v-if="isShow">
    <div class="header" v-if="title">{{title}}</div>
    <div class="body">{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'QNotice',
    props: {
      title: String,
      duration: {
        type: Number,
        default: 50000
      },
      message: {
        type: String
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow= true
        setTimeout(() => {
            this.hide()
        }, this.duration);
      },
      hide() {
        this.remove()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .q-notice{
    position: absolute;
    margin: 0 auto;
    top: 20px;
  }
</style>