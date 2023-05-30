<template>
  <div class="viewer">
    <div class="viewer-close" @click="handleClose">
      <svg
        t="1685417633295"
        class="icon viewer-close-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2365"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z"
          fill="#ffffff"
          p-id="2366"
        ></path>
      </svg>
    </div>
    <!-- <div class="viewer-header"> -->
    <!-- </div> -->
    <div class="viewer-container">
      <img
        class="viewer-container-img"
        :style="{ transform: 'rotate(' + rotateValue + 'deg)' }"
        :src="url"
      />
    </div>
    <div class="viewer-tools">
      <!-- 全屏 -->
      <svg
        t="1685426295481"
        class="viewer-tools-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3367"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0 0h256v51.2H0z" fill="#000" p-id="3368"></path>
        <path
          d="M51.2 0v256H0V0zM1024 0v256h-51.2V0z"
          fill="#000"
          p-id="3369"
        ></path>
        <path
          d="M1024 51.2h-256V0h256zM1024 1024h-256v-51.2h256z"
          fill="#000"
          p-id="3370"
        ></path>
        <path
          d="M972.8 1024v-256h51.2v256zM0 1024v-256h51.2v256z"
          fill="#000"
          p-id="3371"
        ></path>
        <path d="M0 972.8h256v51.2H0z" fill="#000" p-id="3372"></path>
      </svg>
      <!-- 上一张 -->
      <svg
        t="1685428058884"
        class="viewer-tools-icon"
        :style="isList ? 'cursor: pointer;' : 'cursor: not-allowed'"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3191"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="switchIMG(-1)"
      >
        <path
          d="M768 278.624l-45.248-45.248L444.128 512l278.624 278.624L768 745.376 534.624 512zM288 832h64V192H288z"
          :fill="isList ? '#000' : '#dddddd'"
          p-id="3192"
        ></path>
      </svg>
      <!-- 下一张 -->
      <svg
        t="1685428125993"
        class="viewer-tools-icon"
        :style="isList ? 'cursor: pointer;' : 'cursor: not-allowed'"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3365"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="switchIMG(1)"
      >
        <path
          d="M256 278.624L489.376 512 256 745.376l45.248 45.248L579.872 512 301.248 233.376zM672 832h64V192h-64z"
          :fill="isList ? '#000' : '#dddddd'"
          p-id="3366"
        ></path>
      </svg>
      <!-- 左旋转 -->
      <svg
        t="1685432878765"
        class="viewer-tools-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2455"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="handleRotate(-90)"
      >
        <path
          d="M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z"
          p-id="2456"
        ></path>
        <path
          d="M46.72 474.88l35.84 55.04 1.28 1.92 35.84 55.04 60.16-119.04-32 1.92C168.96 277.76 331.52 128 529.28 128c211.904 0 384 172.16 384 384s-172.096 384-384 384c-140.16 0-263.04-75.52-329.6-188.16h-1.92l-0.64 0.64-53.12 31.36A446.592 446.592 0 0 0 529.28 960c247.744 0 448-200.32 448-448s-200.256-448-448-448C294.4 64 102.4 243.84 83.2 472.96l-36.48 1.92z"
          p-id="2457"
        ></path>
      </svg>
      <!-- 右旋转 -->
      <svg
        t="1685432800892"
        class="viewer-tools-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5096"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="handleRotate(90)"
      >
        <path
          d="M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z"
          p-id="5097"
        ></path>
        <path
          d="M994.56 474.88l-35.84 55.04-1.28 1.92-35.84 55.04-60.16-119.04 32 1.92C872.32 277.76 709.76 128 512 128 300.16 128 128 300.16 128 512s172.16 384 384 384c140.16 0 263.04-75.52 329.6-188.16h1.856l0.704 0.704 53.056 31.296A446.4 446.4 0 0 1 512 960c-247.68 0-448-200.32-448-448s200.32-448 448-448c234.88 0 426.88 179.84 446.08 408.96l36.48 1.92z"
          p-id="5098"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";

const emit = defineEmits(["close"]);

const props = defineProps({
  imgURL: String,
  index: Number,
  list: {
    type: Array,
    default: [],
  },
  showImgViewer: Boolean,
});

const position = ref(props.index);

const rotateValue = ref(0);

const isList = computed(() => {
  return props.list.length > 1;
});

const url = ref(props.imgURL);

const switchIMG = (index) => {
  if (!isList.value) {
    return;
  }

  rotateValue.value = 0;

  let num = position.value + index;
  if (num > props.list.length - 1) {
    num = 0;
  }

  if (num < 0) {
    num = props.list.length - 1;
  }
  url.value = props.list[num].url;
  position.value = num;
};

const handleRotate = (value) => {
  rotateValue.value = rotateValue.value + value;
  if (rotateValue.value === -360 || rotateValue.value === 360) {
    rotateValue.value = 0;
  }
};

const handleClose = () => {
  emit("close");
};
</script>
<style scoped>
.viewer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.viewer-header {
  width: 100%;
}

.viewer-tools {
  position: absolute;
  width: 250px;
  height: 45px;
  background-color: white;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.viewer-tools-icon {
  cursor: pointer;
  width: 14px;
  height: 14px;
}

.viewer-close {
  position: absolute;
  top: -35px;
  right: -35px;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.viewer-close-icon {
  margin-top: 40px;
  margin-right: 25px;
  width: 20px;
  height: 20px;
}

.viewer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.viewer-container-img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  cursor: grab;
  user-select: none;
}
</style>
