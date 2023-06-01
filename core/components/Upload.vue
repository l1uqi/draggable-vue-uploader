<template>
  <div class="draggable-upload">
    <div class="draggable-upload-container" v-if="!isFile">
      <div class="draggable-upload-icon">
        <svg
          t="1685080744217"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3426"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="30"
          height="30"
        >
          <path
            d="M576 631.466667V725.333333h170.666667c59.733333-8.533333 106.666667-64 106.666666-128 0-72.533333-55.466667-128-128-128-17.066667 0-29.866667 4.266667-42.666666 8.533334V469.333333c0-93.866667-76.8-170.666667-170.666667-170.666666s-170.666667 76.8-170.666667 170.666666c0 17.066667 4.266667 29.866667 4.266667 46.933334-8.533333-4.266667-17.066667-4.266667-25.6-4.266667C260.266667 512 213.333333 558.933333 213.333333 618.666667S260.266667 725.333333 320 725.333333h170.666667v-93.866666l-46.933334 46.933333L384 618.666667l149.333333-149.333334 149.333334 149.333334-59.733334 59.733333-46.933333-46.933333z m0 93.866666v85.333334h-85.333333v-85.333334h-42.666667v85.333334h-128C213.333333 810.666667 128 725.333333 128 618.666667c0-85.333333 55.466667-157.866667 128-183.466667C273.066667 311.466667 379.733333 213.333333 512 213.333333c110.933333 0 209.066667 72.533333 243.2 170.666667 102.4 12.8 183.466667 102.4 183.466667 213.333333s-85.333333 200.533333-192 213.333334h-128v-85.333334h-42.666667z"
            fill="#ccc"
            p-id="3427"
          ></path>
        </svg>
      </div>
    </div>

    <input
      type="file"
      class="draggable-upload-input"
      ref="fileInput"
      @change="handleInputChange"
    />
    <div class="draggable-upload-picture" v-if="isFile">
      <img :src="url" />
      <div class="draggable-upload-picture--mask">
        <div class="draggable-upload-picture--mask-icon">
          <svg
            t="1685080359077"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2409"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            @click="handleImgViewer"
          >
            <path
              d="M512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832z m0-576c-129.514667 0-249.461333 83.850667-360.117333 256C262.538667 684.149333 382.485333 768 512 768c129.514667 0 249.461333-83.850667 360.117333-256C761.461333 339.850667 641.514667 256 512 256z m0 405.333333c-83.210667 0-150.666667-66.858667-150.666667-149.333333S428.789333 362.666667 512 362.666667s150.666667 66.858667 150.666667 149.333333S595.210667 661.333333 512 661.333333z m0-64c47.552 0 86.101333-38.208 86.101333-85.333333S559.552 426.666667 512 426.666667c-47.552 0-86.101333 38.208-86.101333 85.333333s38.549333 85.333333 86.101333 85.333333z"
              fill="#ffffff"
              p-id="2410"
            ></path>
          </svg>
          <svg
            t="1685081236389"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4491"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20"
            height="20"
            @click="handleDeleteFile"
          >
            <path
              d="M110.325 231.601h83.275l38.767 682.942c0.779 14.201 12.565 25.316 26.793 25.316h508.28c14.229 0 26.015-11.141 26.793-25.342l38.148-682.917h83.331c14.846 0 26.848-12.027 26.848-26.845 0-14.82-12.002-26.847-26.848-26.847h-210.236l-13.109-70.256c0-14.82-12-26.848-26.849-26.848h-305.029c-14.846 0-26.846 12.028-26.846 26.848l-13.109 70.256h-210.184c-14.847 0-26.847 12.027-26.847 26.847 0 14.819 11.974 26.846 26.821 26.846zM387.336 134.5h251.338l13.108 43.411h-277.554l13.109-43.411zM778.608 231.601l-36.563 654.593h-457.516l-37.156-654.592h531.234zM380.075 835.857c0.538 0 1.020 0 1.557-0.026 14.819-0.832 26.121-13.531 25.263-28.325l-28.242-497.594c-0.833-14.819-13.88-25.961-28.324-25.289-14.818 0.833-26.122 13.53-25.263 28.323l28.243 497.594c0.805 14.283 12.645 25.317 26.766 25.317zM643.436 835.832c0.539 0.026 1.022 0.026 1.557 0.026 14.121 0 25.961-11.033 26.767-25.317l28.242-497.594c0.833-14.792-10.469-27.489-25.262-28.323-14.579-0.618-27.465 10.47-28.324 25.289l-28.242 497.594c-0.833 14.794 10.47 27.492 25.261 28.325zM513.019 835.857c14.847 0 26.847-12.026 26.847-26.846v-497.595c0-14.818-12-26.847-26.847-26.847-14.846 0-26.846 12.029-26.846 26.847v497.595c0 14.82 12 26.846 26.846 26.846z"
              fill="#fff"
              p-id="4492"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="progress" v-if="uploadStatus.loading">
      <div class="progress-line">
        <div
          class="progress-line-inner"
          :style="{ width: uploadStatus.percent }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, toRefs, defineProps, defineEmits, computed } from "vue";
import { uploadFile } from "../utils/index";

const emit = defineEmits([
  "change",
  "delete",
  "progress",
  "success",
  "error",
  "viewer",
]);

const props = defineProps({
  action: String,
  name: String,
  data: Object,
  beforeUpload: Function,
  headers: {
    type: Object,
    default: {},
    required: false,
  },
  file: {
    type: Object,
    default: null,
    required: false,
  },
  url: {
    type: String,
    default: "",
    required: false,
  },
});

const url = ref(props.url);

const file = ref(props.file);

const inputRef = ref(null);

const uploadStatus = ref({ loading: false, percent: "" });

const isFile = computed(() => {
  return (url.value !== "" && typeof url.value != "undefined") || file.value;
});

const handleInputChange = (event) => {
  const input = event.target;
  const selectedFile = input.files[0];
  const reader = new FileReader();
  inputRef.value = "";

  reader.onload = async () => {
    let next = true;
    url.value = reader.result;
    file.value = selectedFile;
    file.value.url = url.value;
    emit("change", file.value);
    if (props.beforeUpload) {
      next = await props.beforeUpload(selectedFile);
    }
    if (next) {
      uploadStatus.value.percent = "";
      uploadStatus.value.loading = true;
      uploadFile({
        ...props
      }, selectedFile, onProgress, onSuccess, onError);
    }
  };
  if (selectedFile) {
    reader.readAsDataURL(selectedFile);
  }
};

const onProgress = (percent) => {
  uploadStatus.value.percent = `${percent}%`;
  emit("progress", file.value, percent);
};
const onSuccess = (result) => {
  uploadStatus.value.loading = false;
  emit("success", file.value, result);
};
const onError = (error) => {
  uploadStatus.value.loading = false;
  file.value = null;
  url.value = "";
  emit("error", null, error);
};

const handleDeleteFile = () => {
  emit("delete", {
    file,
    url: url.value,
  });
  file.value = null;
  url.value = "";
};

const handleImgViewer = () => {
  emit("viewer", url.value);
};
</script>
<style>
.draggable-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  position: relative;
  margin: 5px;
}

.draggable-upload-container {
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 100%;
}

.draggable-upload-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 42px;
  color: #ccc;
}

.draggable-upload-input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.draggable-upload-picture {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
}

.draggable-upload-picture img {
  object-fit: cover;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.draggable-upload-picture--mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
}

.draggable-upload-picture--mask-icon {
  display: flex;
  width: 100px;
  justify-content: space-around;
}

.draggable-upload-picture--mask .icon {
  cursor: pointer;
}

.draggable-upload-picture:hover .draggable-upload-picture--mask {
  opacity: 1;
}

.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  z-index: 2;
}

.progress-line {
  position: absolute;
  bottom: 30px;
  width: 80%;
  height: 5px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
}

.progress-line-inner {
  width: 0;
  height: 5px;
  background: gold;
}
</style>
