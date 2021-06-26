<!-- @format -->

<template>
  <div class="test-key">
    <p>使用index作为key</p>
    <Child
      v-for="(item, i) in array"
      :text="item"
      :key="i"
      @delete="remove(i)"
    />
    <div style="margin-bottom: 30px"></div>
    <p>使用相同的key</p>
    <Child
      v-for="(item, i) in array"
      :text="item"
      :key="1"
      @delete="remove(i)"
    />
    <button @click="onAdd">add</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Child from './components/child.vue'

@Component({ components: { Child } })
export default class TestKey extends Vue {
  array = []

  created() {
    this.array = [1, 2, 3, 4]
  }
  remove(i) {
    this.array.splice(i, 1)
  }
  onAdd() {
    this.array.unshift(0)
    console.log(this.array)
  }
}
</script>
<style lang="less" scoped></style>
