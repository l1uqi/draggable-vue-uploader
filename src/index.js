import Uploader from './components/index.vue';

const install = (app, options = {}) => {
  const finalOptions = {
    ...options,
  };

  // const DraggableUploaderComponent = DraggableUploader(finalOptions);

  app.component('draggable-upload', Uploader);
};

const DraggableUploaderPlugin = {
  install,
};

export default DraggableUploaderPlugin;