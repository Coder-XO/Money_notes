<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts';
import * as ECharts from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() option?: echarts;
  chart?: echarts;

  mounted() {
    this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    this.chart.setOption(this.option);
  }

  @Watch('option')
  onOptionChange(newValue:ECharts) {
    this.chart!.setOption(newValue);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 200px;
  background: #F4F4F4;
}
</style>