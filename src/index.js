import DraggableUploader from './components/DraggableUploader.vue';

const install = (app, options = {}) => {
  const finalOptions = {
    ...options,
  };

  // const DraggableUploaderComponent = DraggableUploader(finalOptions);

  app.component('draggable-upload', DraggableUploader);
};

const DraggableUploaderPlugin = {
  install,
};

export default DraggableUploaderPlugin;