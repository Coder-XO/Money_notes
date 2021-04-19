<template>
  <ul class="types">
    <li :class="{selected:value === '-',[classPrefix + '-item']:classPrefix}" @click="selectType('-')">支出</li>
    <li :class="{selected:value === '+',[classPrefix + '-item']:classPrefix}" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';    // 这个不是vue官方库

@Component        // 组件装饰器
export default class Types extends Vue {
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;     //  CSS前缀

  selectType(type: string) {      //  type 只能是  '-'  或  '+'  中的一个
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', type);
  }
}
</script>

<style scoped lang="scss">
.types {
  background: #9DC8C8;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    position: relative;
    width: 50%;
    line-height: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>