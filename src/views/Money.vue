<template>
  <Layout class-prefix="layout"><!-- 向子组件中传递类名来控制CSS -->
    <Number-pad/>
    <Types/>
    <Notes/>
    <Tags :datasource="tags"/>
  </Layout>
</template>
<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'money',
  components: {Tags, Notes, Types, NumberPad},
  data() {
    return {
      tags: ['衣', '食', '住', '行']
    };
  }
};
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