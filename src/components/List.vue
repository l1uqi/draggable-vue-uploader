<template>
  <div class="draggable-upload-list">
    <slot></slot>
  </div>
</template>
<script setup>
import { useSlots } from 'vue';

const slots = useSlots()
</script>