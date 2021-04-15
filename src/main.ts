import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // 相当于'./router/index.ts'
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);   //  全局引入  Nav 组件
Vue.component('Layout', Layout);   //   全局引入 Layout 组件
Vue.component('Icon', Icon);   //  Nav 组件

// @ts-ignore     对于recordList的封装
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);


//     对于tagList所有操作在window下的封装
window.tagList = tagListModel.fetch();
window.createTag = (name: string) => {     // 创建标签
    const message = tagListModel.create(name);   //  返回成功或失败
    if (message === 'duplicated') {
        window.alert('标签名重复了');
    } else if (message === 'success') {
        window.alert('添加成功');
    }
};
window.removeTag = (id: string) => {
    return tagListModel.remove(id);    // 返回布尔值
};
window.updateTag = (id: string, name: string) => {
    return tagListModel.update(id, name);
};
window.findTag = (id: string) => {
    // @ts-ignore
    return window.tagList.filter(t => t.id === id)[0];    // 寻找当前tag
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
