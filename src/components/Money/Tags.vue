<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="item in tagList" :key="item.id" :class="{ selected: selectedTags.indexOf(item)>=0 }"
          @click="toggle(item)">{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
// import store from '@/store';

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends Vue {
  // TODO
  // tagList = store.fetchTags();
  selectedTags: string[] = [];

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

  create() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不能为空');
    }
    this.$store.commit('createTag', name);
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/helper.scss";

.tags {
  background: #f5f5f5;
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