<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <form-item file-name="备注" @update:value="onUpdateNotes" placeholder="在这里输入备注"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import formItem from '@/components/Money/formItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/formItem.vue';




@Component({
  components: {FormItem, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  //@ts-ignore
  tags = window.tagList;    //   从localStorage中取值
  //@ts-ignore
  recordList = window.recordList;     //  保存用户账目数据
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    // @ts-ignore
    createdAt: Date || undefined
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    window.createRecord(this.record);
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

.notes {
  padding: 12px 0;
}
</style>
<style lang="scss" scoped>
</style>