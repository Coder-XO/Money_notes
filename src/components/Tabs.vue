<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value" @click="select(item)" :class="liClass(item)">{{ item.text }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }

@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;     //  CSS类的前缀

  liClass(item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  };

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
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