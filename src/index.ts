import Vue from "vue";

import HeaderComponent from "./components/Header.vue";
import ButtonComponent from "./components/Button.vue";
import FrmModalComponent from "./components/FrmModal.vue";
import CardComponent from "./components/Card.vue";
import MapaComponent from "./components/Mapa.vue";

import { Component, Prop } from "vue-property-decorator";

let v = new Vue({
  el: "#app",
  template: `
    <div>

      <frmModal-component  
      v-if="frmAddVideo_show" 
      @close="frmAddVideo_click_close"   
      @add="frmAddVideo_click_add"   
      title="Agregar Video"  />
    

      <header-component
      @main="bnMenu_Click"
      @video="bnMenuVideo_click"
      @mapa="bnMenuMapa_click"
      />

      <div v-if="menuVideo_show">     
        <div class='center-elements'>      
          <button-component text="Agregar Video" class="button1" :click="bnAddVideo_click"/>  
        </div>

        <div class='card-container'>
          <card-component v-for="item in cards" :url="item.url" :title="item.title" :description="item.description" />
        </div>

      </div>
      <div v-if="menuMapa_show"   >   
        <mapa-component style='margin:20px; '/>
      </div>
   </div>
    `,
  data: {
    frmAddVideo_show: false,
    menuVideo_show: false,
    menuMapa_show: false,
    cards: [
      {
        url: "https://www.youtube.com/embed/GvI9Sdyaq68",
        title: "Los taxis - El Tobi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellat exercitationem? Ut repellendus iure doloremque ex repudiandae velit magni ",
      },      
    ],
  },


 
  methods: {
    bnMenu_Click() {
      this.menuVideo_show = false;
      this.menuMapa_show = false;
    },
    bnMenuVideo_click() {
      console.log("sdffgsf");
      this.menuVideo_show = true;
      this.menuMapa_show = false;
    },
    bnMenuMapa_click() {
      this.menuVideo_show = false;
      this.menuMapa_show = true;
    },
    bnAddVideo_click() {
      this.frmAddVideo_show = true;
    },
    frmAddVideo_click_add(title:string,url:string,description:string) {
      this.cards.push({title,url,description})
      this.frmAddVideo_show = false;
    },
    frmAddVideo_click_close() {
      this.frmAddVideo_show = false;
    },
  },

  components: {
    HeaderComponent,
    ButtonComponent,
    FrmModalComponent,
    CardComponent,
    MapaComponent,
  },
});
