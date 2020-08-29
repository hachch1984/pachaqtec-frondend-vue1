import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HeaderComponent from "./components/Header.vue";
import ButtonComponent from "./components/Button.vue";
import FrmModalComponent from "./components/FrmModal.vue";
import { Component, Prop } from "vue-property-decorator";

let v = new Vue({
  el: "#app",
  template: `
    <div>
      <frmModal-component  v-if="frmModal_show" @close="closeModal"  />
      <header-component/>
      <div class='center-elements'>      
        <button-component :text="bnAgregarVideo_title" :class="bnAgregarVideo_class" :click="bnAgregarVideo_click"/>  
      </div>
     
    </div>
    `,
  data: {
    name: "World",
    bnAgregarVideo_title: "Agregar Nuevo Video",
    bnAgregarVideo_class: "button1",
    frmModal_show:false
  },
  methods: {
    bnAgregarVideo_click() {
      console.log(new Date(), "bnAgregarNuevoVideo");
      this.frmModal_show=!this.frmModal_show;
    },
    closeModal(){
      this.frmModal_show=false;
    }
  },

  components: {
    HelloComponent,
    HeaderComponent,
    ButtonComponent,
    FrmModalComponent
  },
});
/*

  Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <button-component :text="name"/>

*/
