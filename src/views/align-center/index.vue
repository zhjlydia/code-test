<!-- @format -->

<template>
  <div class="align-center">
    <div class="wrap wrap1">
      <div class="box box1">flex布局</div>
    </div>
    <div class="wrap wrap2">
      <div class="box box2">绝对定位+transform</div>
    </div>
    <div class="wrap wrap3">
      <div class="box box3">绝对定位+margin:auto</div>
    </div>
    <div class="wrap wrap4">
      <div class="box box4">table-cell + vertical-align: middle</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AlignCenter extends Vue {}
</script>
<style lang="less" scoped>
.align-center {
  width: 100%;
  .wrap {
    border: 1px solid #eee;
    margin: 10px 0;
    width: 400px;
    height: 200px;
  }
  .box {
    width: 200px;
    height: 100px;
    background: #eee;
    text-align: center;
    line-height: 100px;
  }

  .wrap1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap2 {
    position: relative;
    .box2 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .wrap3 {
    position: relative;
    .box3 {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .wrap4 {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    .box4 {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
