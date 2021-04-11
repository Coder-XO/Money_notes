<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
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
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';

const recordList = model.fetch();    // 获取localStorage数据


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行','彩票'];
  recordList:RecordItem[] = recordList;     //  保存用户账目数据  为啥有问题
  record:RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
    console.log(11111);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2 = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);     // 本地保存数据
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