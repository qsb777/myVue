<template>
  <div class="box" v-if="isShow">
    <div class="header" v-if="title">{{title}}</div>
    <div class="box-content">{{message}}</div>
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
 .box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
  background-color: #fff;
  border: grey 3px solid;
  box-sizing: border-box;
}
.box-content {
  width: 200px;
  margin: 10px auto;
  font-size: 14px;  
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 8px;
}
</style>