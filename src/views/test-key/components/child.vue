<!-- @format -->

<template>
  <div>
    {{ text }}
    <input v-model="x" />
    <button @click="onDelete">delete</button>
    <button @click="changeData">change</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TestKey extends Vue {
  @Prop()
  text: string

  x = 'hi'

  onDelete() {
    this.$emit('delete')
  }
  changeData() {
    this.x = 'changed'
  }
}
</script>
<style lang="less" scoped></style>
