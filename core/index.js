import Uploader from './components/index.vue';

const install = (app) => {
  app.component('draggable-upload', Uploader);
};

const DraggableUploaderPlugin = {
  install,
};

export default DraggableUploaderPlugin;