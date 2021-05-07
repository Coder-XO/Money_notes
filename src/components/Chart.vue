<template>
  <div class="wrapper" ref="wrapper">chart</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import * as echarts from 'echarts';

@Component
export default class Chart extends Vue {
  @Prop() option?: echarts;

  mounted() {
    console.log(this.option);
    const chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
    chart.setOption(this.option);
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 400px;
  background: #F4F4F4;
}
</style>