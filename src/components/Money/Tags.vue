<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="item in tagList"
          :key="item.id"
          :class="{ selected: selectedTags.indexOf(item)>=0 }"
          @click="toggle(item)">{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/tagHelper';
// import store from '@/store';

@Component
export default class Tags extends mixins(TagHelper) {

  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/helper.scss";

.tags {
  background: #ececec;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;

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

      &.selected {
        background: darken($color-highLight, 16%);
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