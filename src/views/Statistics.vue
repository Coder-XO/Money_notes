<template>
  <div class="x">
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        type:{{type}}
        <br/>
        interval:{{interval}}
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Types}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = [
    {text: '按天', value: 'day'},
    {text: '按周', value: 'week'},
    {text: '按月', value: 'month'}
  ];
  typeList = [
    {text: '支出', value: '-'},
    {text: '收入', value: '+'}
  ];
};
</script>

<style scoped lang="scss">
.x ::v-deep .type-tabs-item { // CSS作用到组件内部
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }
  }
}

.x ::v-deep .interval-tabs-item { // CSS作用到组件内部
  background: #c4c4c4;

  &.selected {
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