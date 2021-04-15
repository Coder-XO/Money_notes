<template>
  <label class="notes">
    <span class="name">{{this.fileName}}</span>
    <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class formItem extends Vue {
  @Prop({default:''}) readonly value!:string;

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
  background: white;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
    border: none;
  }
}
</style>