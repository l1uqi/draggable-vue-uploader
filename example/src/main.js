import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import DraggableUploader from '../../core/index'
import DraggableUploader from 'draggable-vue-uploader';
import 'draggable-vue-uploader/dist/style.css'

createApp(App).use(DraggableUploader).mount('#app')
