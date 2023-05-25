import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import DraggableUploader from '../../src/index';

createApp(App).use(DraggableUploader).mount('#app')
