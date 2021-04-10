<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li v-for="item in datasource" :key="item" :class="{ selected: selectedTags.indexOf(item)>=0 }" @click="toggle(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop( ) datasource:string[] | undefined;
  selectedTags:string[] = [];

  toggle(tag:string){
    const index = this.selectedTags.indexOf(tag);
    if(index >= 0){
      this.selectedTags.splice(index,1);
    }else {
      this.selectedTags.push(tag);
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/helper.scss";
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;

    > li {
      background: #D9D9D9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 4px;
      line-height: $h;
      &.selected{
        background: darken($color-highLight,16%);
      }
    }
  }

  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>