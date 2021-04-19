<template>
  <div class="x">
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
      <div>
        type:{{ type }}
        <br/>
        interval:{{ interval }}
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
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