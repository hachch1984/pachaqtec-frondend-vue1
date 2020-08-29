<template>
  <div class="modal">
    <div class="modal-form">
      <div>
        <label for="tbName">Nombre</label>
        <input type="text" id="tbName" />
      </div>
      <div>
        <label for="tbUrl">Url</label>
        <input type="text" id="tbUrl" />
      </div>
      <div class="modal-form-footer">
        <button-component
          text="Agregar Datos"
          :class="bn_class"
          :click="bnAgregar_click"
        />

        <button-component
          text="Cerrar Formulario"
          :class="bn_class"
          :click="bnCerrar_click"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ButtonComponent from "./Button.vue";

export default Vue.extend({
  props: ["close"],
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
