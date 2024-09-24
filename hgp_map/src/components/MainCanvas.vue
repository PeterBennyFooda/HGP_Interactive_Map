<template>
  <div>
    <h3>Hangar Project</h3>
    <canvas></canvas>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { MainScene } from '@/scripts/MainScene';

export default defineComponent({
  name: 'MainCanvas',
  mounted() {
    const canvas = document.querySelector("canvas");
    new MainScene(canvas);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  width: 70%;
  height: 70%;
}
</style>
