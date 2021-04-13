<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes file-name="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注"/>
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
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';


/* 获取必要数据 */
const recordList = recordListModel.fetch();    // 获取localStorage数据
const tagList = tagListModel.fetch();     //  获取当前localStorage保存的标签

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagList;    //   从localStorage中取值
  recordList: RecordItem[] = recordList;     //  保存用户账目数据
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createdAt: Date || undefined
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);     // 本地保存数据
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