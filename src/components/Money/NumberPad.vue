<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="OK" @click="ok">ok</button>
      <button class="zero" @click="inputContent">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output: string = this.value.toString();    // 内部属性

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);    // 强制指定类型
    const input = button.textContent;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === '0') {     // 对输入的限制
      if (input !== '0') {
        if ('0123456789'.indexOf(input!) >= 0) {
          if (typeof input === 'string') {
            this.output = input;
          }
        } else {
          this.output += button.textContent;
          return;
        }
      }
    } else if (this.output.indexOf('.') >= 0) {
      if (input === '.') {
        return;
      } else {
        this.output += button.textContent;
        return;
      }
    } else {
      this.output += button.textContent;
      return;
    }
  }

  remove() {
    this.output = this.output.slice(0, -1);
    if (this.output === '') {
      this.output = '0';
    }
  }

  clear() {
    this.output = '0';
  }

  ok() {
    if (this.output === '0') {
      return alert('没有输入金额');
    }
    const number = parseFloat(this.output);   // 转换成数字类型
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
  }

}
</script>

<style scoped lang="scss">
@import "../../assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    box-shadow: inset 0 -5px 5px -5px fade-out(#297E72, 0.6),
    inset 0 5px 5px -5px fade-out(#297E72, 0.6);
    height: 60px;
  }

  .buttons {
    @extend %clearFix; /* SCSS写法 */
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      $bg: #58C9B9;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 8%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 12%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 16%);
      }

      &:nth-child(14) {
        background: darken($bg, 20%);
      }

      &:nth-child(12) {
        background: darken($bg, 24%);
      }
    }

    > .OK {
      height: 64*2px;
      float: right;
    }

    > .zero {
      width: 25*2%;
    }

  }
}
</style>