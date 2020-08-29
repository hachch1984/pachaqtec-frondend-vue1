<template>
  <div class="card">
   

    <iframe width="300" height="150" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


 
    <p class="card-title">
      {{ title }}
    </p>
    <p class="card-description">
      {{ description }}
    </p>
    <button class="card-button">Ver Detalle</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "./Button.vue";

export default Vue.extend({
  props: ["url", "title", "description"],
  data() {
    return {
      bnAgregar_text: "Agregar",
      bn_class: "button1",

    
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    bnAgregar_click() {
      console.log(new Date(), "bnAgregar_click()");
    },
    bnCerrar_click() {
      console.log(new Date(), "bnCerrar_click()");
      this.$emit("close");
    },
  },
});
</script>
