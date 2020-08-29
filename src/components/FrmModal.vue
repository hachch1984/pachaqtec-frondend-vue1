<template>
  <div class="modal">
    <div class="modal-form">
      <div class="modal-form-title">{{ title }}</div>
      <div class="modal-form-body">
        <div
          style="width: 500px; display: flex; justify-content: space-between;"
        >
          <input
            style="width: 245px;"
            type="text"
            id="tbTitle"
            ref="tbTitle"
            placeholder="Titulo"
          />

          <input
            style="width: 245px;"
            type="text"
            id="tbUrl"
            ref="tbUrl"
            placeholder="Url Video"
          />
        </div>
        <div>
          <textarea
            style="resize: none; width: 500px; margin-top: 10px;"
            name=""
            id="tbDescription"
            ref="tbDescription"
            placeholder="Descripcion"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div class="modal-form-footer">
        <button-component
          text="Agregar"
          class="button2"
          :click="bnAgregar_click"
        />

        <button-component
          text="Cancelar"
          class="button3"
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
  props: ["close", "add", "title"],
  components: {
    ButtonComponent,
  },
  methods: {
    bnAgregar_click() {
      let title = (this.$refs.tbTitle as HTMLInputElement).value;
      let description = (this.$refs.tbDescription as HTMLInputElement).value;
      let url = (this.$refs.tbUrl as HTMLInputElement).value;
      url = url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
      this.$emit("add", title, url, description);
    },
    bnCerrar_click() {
      this.$emit("close");
    },
  },
});
</script>
