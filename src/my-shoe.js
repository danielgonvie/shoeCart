import { PolymerElement, html } from "@polymer/polymer";
/*
Description for my-beer-card
### Usage
 <my-beer-card><my-beer-card/>
### Styling

 The following custom properties and mixins are also available for styling:

 Custom property | Description | Default
 ---------------- |------------- |----------

### Events
 - event
@element my-beer-card
*/
export default class MyShoe extends PolymerElement {
  static get template() {
    return html`
      <style>
       .my-shoe-component{
         width: 100vw;
         height: 100vh;
        position: absolute;
        top: 0;
        left:0;
        background-color: rgba(0,0,0,.23);
        z-index: 500;
        display:flex;
        justify-content:center;
        align-items:center;
       }
       .my-shoe-full-card{
         width: 80%;
         height: 80%;
         background-color: white;
         border-radius: 5px;
       }
       .my-shoe-carousel{
         width: 60%;
       }
      </style>
      <div class="my-shoe-component">
        <div class="my-shoe-full-card">
        <macro-carousel navigation loop class="my-shoe-carousel">
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selected.pictures.0]]></img></div>
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selected.pictures.1]]></img></div>
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selected.pictures.2]]></img></div>
     </macro-carousel>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      selected: {
        type: Object,
        value: () => ({
          id: 0,
          name: "Prueba1",
          description:
            "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
          maker: "Nike",
          availableSizes: [40, 41, 42, 43, 45],
          price: 120,
          pictures: [
            "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
            "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
            "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
          ],
          new: false,
          featured: true,
          upcoming: false,
          inStore: 5
        }),
        notify: true
      }
    };
  }
}

customElements.define("my-shoe", MyShoe);
