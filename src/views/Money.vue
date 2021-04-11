<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
    {{ record }}
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';

type Record = {     // TS声明类型
  tags: string[],
  notes: string,
  type: string,
  amount: number
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = [];     //  保存用户账目数据
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };

  onUpdateTags(value: string[]) {
    console.log(5566558989);
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const deepClone = JSON.stringify(this.record);
    this.recordList.push(JSON.parse(deepClone));
  }

  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));     // 本地保存数据
  }

}

</script>
<!-- 为了跨CSS作用域-->
<style lang="scss">
.layout-content {
  //border: 5px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>