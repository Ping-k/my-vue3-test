/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: ZhouYanPing
 * @Date: 2023-04-06 10:11:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-04-06 16:35:57
 */
import { createApp } from 'vue'
import App from './App.vue'

import MyModule from 'pingk-vue-loading'
import 'pingk-vue-loading/lib/pingk-vue-loading.css'


import 'ant-design-vue/dist/antd.css';
import { Button, message } from 'ant-design-vue';

let app = createApp(App);

app.use(MyModule);

/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;

app.mount('#app');
