<!-- @format -->

<template>
  <div class="flex">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Flex extends Vue {}
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  height: 500px;
  .box1,
  .box3 {
    width: 100px;
    height: 100%;
    background: #eee;
    border: 1px solid #fff;
    flex-shrink: 0;
  }
  .box2 {
    flex-grow: 1;
    height: 100%;
    background: red;
  }
}
</style>
