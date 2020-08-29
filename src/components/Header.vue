<template>
  <div class="header">
    <p class="header-title"  @click="bnMain_click">VIDEO LIBRARY</p>
    <ul class="header-menu">
      
      <li @click="bnVideo_click" >Agregar Video</li>
      <li  @click="bnMapa_click" >Ver Mapa</li>
    </ul>
    <div class="header-creator">
      <span>Henry Chavez</span>
      <a
        href="https://github.com/hachch1984/pachaqtec-frondend-vue1/blob/master/index.html"
        target="_blanck"
        >Html Source Code</a
      >
      <a
        href="https://github.com/hachch1984/pachaqtec-frondend-vue1/blob/master/src/css/general.scss"
        target="_blank"
        >CSS Source Code</a
      >
      <a
        href="https://github.com/hachch1984/pachaqtec-frondend-vue1/blob/master/src/components/FrmModal.vue"
        target="_blank"
        >Components Source Code</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["video", "mapa", "main"],

  methods: {
      bnMain_click() {
      this.$emit("main");
    },
    bnVideo_click() {
      this.$emit("video");
    },
    bnMapa_click() {
      this.$emit("mapa");
    },
  },
});
</script>
