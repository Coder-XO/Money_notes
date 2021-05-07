<template>
  <label class="notes">
    <span class="name">{{ this.fileName }}</span>
    <template v-if="type === 'date'">
      <input :type="type || 'text'"
             :value="x(value)"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </template>
    <template v-else>
      <input :type="type || 'text'"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="placeholder">
    </template>
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class formItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fileName!: string;
  @Prop() placeholder?: string;
  @Prop() type?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  x(isoString:string){
    return dayjs(isoString).format('YYYY-MM-DD')
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
    height: 30px;
    flex-grow: 1;
    background: transparent;
    padding-right: 16px;
    border: none;
  }
}
</style>