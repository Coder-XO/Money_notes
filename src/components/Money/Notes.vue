<template>
  <label class="notes">
    <span class="name">{{this.fileName}}</span>
    <input type="text" placeholder="在这里输入备注" v-model="value" :placeholder="this.placeholder">
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Prop({required:true}) fileName!:string;
  @Prop() placeholder?:string;
  @Watch('value')
  onValueChanged(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style scoped lang="scss">
.notes {
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
    border: none;
  }
}
</style>