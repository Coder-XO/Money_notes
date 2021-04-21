import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router'; // 相当于'./router/index.ts'
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);   //  全局引入  Nav 组件
Vue.component('Layout', Layout);   //   全局引入 Layout 组件
Vue.component('Icon', Icon);   //  Nav 组件

new Vue({
    router,
    store,     // 解构赋值
    render: h => h(App)
}).$mount('#app');

window.onload = function () {    // 帮用户下拉到底部
    setTimeout(function () {
        window.scrollTo(0, 200);
    }, 0);
};

if (document.documentElement.clientWidth > 500) {
    window.alert('请使用手机打开本页面，以保证浏览效果');
    const img = document.createElement('img');
    img.src = 'https://github.com/Coder-XO/Money_notes_website/blob/gh-pages/img/qrcode.png';
    img.style.position = 'fixed';
    img.style.left = '50%';
    img.style.top = '50%';
    img.style.transform = 'translate(-50%,-50%)';
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
    document.body.appendChild(img);
}