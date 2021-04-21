<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
    <Number-pad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem file-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Money/FormItem.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, FormItem, Tags, NumberPad}
})
export default class Money extends Vue {

  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
      this.record.notes = '';
    }
  }
}

</script>
<!-- 为了跨CSS作用域-->
<style lang="scss" scoped>
::v-deep .layout-content {
  //border: 5px solid red;
  display: flex;
  flex-direction: column-reverse;
}

::v-deep .notes {
  padding: 12px 0;
}

::v-deep .name {
  padding-left: 12px;
}
</style>
<style lang="scss" scoped>
</style>