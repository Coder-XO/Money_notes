import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // 相当于'./router/index.ts'
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);   //  全局引入  Nav 组件
Vue.component('Layout', Layout);   //   全局引入 Layout 组件
Vue.component('Icon', Icon);   //  Nav 组件

// @ts-ignore
window.tagList = tagListModel.fetch();   // 获取所有标签
// @ts-ignore
window.createTag = (name: string) => {     // 创建标签
    const message = tagListModel.create(name);   //  返回成功或失败
    if (message === 'duplicated') {
        window.alert('标签名重复了');
    } else if (message === 'success') {
        window.alert('添加成功');
    }
};
// @ts-ignore
window.removeTag = (id: string) => {
    return tagListModel.remove(id);    // 返回布尔值
};

// @ts-ignore
window.updateTag = (id: string, name: string) => {
    return tagListModel.update(id, name);
};
// @ts-ignore
window.findTag = (id: string) => {
    // @ts-ignore
    return window.tagList.filter(t => t.id === id)[0];    // 寻找当前tag
};

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
