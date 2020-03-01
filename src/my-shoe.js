import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat";
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
         border-radius: 10px;
         display: flex;
         position:relative;
       }
       .my-shoe-carousel{
         width: 100%;
         background-color: none;
         height: 75%;
         display: flex;
        justify-content: center;
        align-items: center;
        margin-top:20px;
       }
       .my-shoe-carousel-div{
         height: 100%;
         width: 100%;
       }
       .my-shoe-image{
        height: 100%;
        width: 100%;
       }
       .my-shoe-left-card{
         padding: 20px 0px;
         padding-left: 20px;
         width: 70%;
         height: 100%;
       }
       .my-shoe-right-card{
        padding: 20px 0px;
        padding-right: 20px;
        margin-left: -100px;
        width: 25%;
        height: 100%;
      }
       .my-shoe-stock-left{
         
         text-align: center;  
         width: 100%;
         font-size: 40px;
         margin:20px 0px;
       }

       .my-shoe-name{
         font-size: 60px;
         margin-bottom: 0;
       }
       .my-shoe-maker{
         margin-top: 10px;
         font-size: 40px;
         color: grey;
       }
       .my-shoe-description{
        font-size: 25px;
       }
       .my-shoe-price-tag{
        position:relative;
        height: 30%;
      }
       .my-shoe-price{
        font-size: 60px;
        text-align: center;
        position: absolute;
        transform: rotate(345deg);
        top: 25px;
        left: 38%;
       }
       
       .my-shoe-tag{
        position: absolute;
        top: 0;
        left: 25%;
        width: 55%;
        transform: rotate(300deg);
       }
       .my-shoe-size{
         display: flex;

       }
       .my-shoe-quantity{
         display: flex;
       }
       .my-shoe-cart-titles{
         margin-right: 20px;
       }
       .my-shoe-select{
         border: none;
         font-size: 20px;
       }

       .my-shoe-select:focus{
        outline: none;
      }

      .my-shoe-add-cart{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .my-shoe-button{
        background-color: var(--my-main-color);
        border-radius: 10px;
        display:flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        
      }
      .my-shoe-button:hover{
        cursor: pointer;
        height: 50%;
        margin-top:-10px;
        box-shadow: 0px 5px var(--my-secondary-color);
        
      }
      .my-shoe-add-text{
        font-size: 20px;
        color: white;
        margin: 0;
        padding: 20px 30px;
      }
      .my-shoe-cross{
        height: 25px;
        width: 25px;
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .my-shoe-cross:hover{
        cursor: pointer;
      }

      </style>
      <div class="my-shoe-component" selected-shoe={{selectedshoe}}>
        <div class="my-shoe-full-card">
        <img class="my-shoe-cross" on-click="_closeCard" src="../img/close.png"/>
        <div class="my-shoe-left-card">
        <macro-carousel pagination loop class="my-shoe-carousel">
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selectedshoe.pictures.0]]></img></div>
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selectedshoe.pictures.1]]></img></div>
         <div class="my-shoe-carousel-div"> <img class="my-shoe-image" src=[[selectedshoe.pictures.2]]></img></div>
     </macro-carousel>
       <h1 class="my-shoe-stock-left"> Just [[selectedshoe.inStore]] left in stock! </h1>
     </div>
       <div class="my-shoe-right-card">
        <div class="my-shoe-info">
          <h1 class="my-shoe-name">[[selectedshoe.name]]</h1>
          <h2 class="my-shoe-maker">[[selectedshoe.maker]]</h2>
          <p class="my-shoe-description">[[selectedshoe.description]]</p>
          </div>
          <div class="my-shoe-price-tag">
          <img src="../img/sale.png" draggable=false class="my-shoe-tag"/>
        <h1 class="my-shoe-price">[[selectedshoe.price]]€</h1>
        </div>
        <div class="my-shoe-add-cart">
        <div class="my-shoe-left-cart">
        <div class="my-shoe-size">
        <h3 class="my-shoe-cart-titles">Select size: </h3>
        <select class="my-shoe-select"  name="myShoeSize">
        <template is="dom-repeat" items="[[selectedshoe.availableSizes]]" >
        <option value="[[item]]">[[item]]</option>
        </template>
        </select>
        </div>
       <div class="my-shoe-quantity">
        <h3 class="my-shoe-cart-titles">Select quantity: </h3>
        <select  class="my-shoe-select quantity" name="myQuantity">
        <template is="dom-repeat" items="[[_howMany(selectedshoe.inStore)]]" >
        <option value="[[index]]">[[_greatAnswer(index)]]</option>
        </template>
        </select>
       </div>
        </div>
        <div class="my-shoe-right-cart">
        <div class="my-shoe-button" on-click="_addItems">
        <h1 class="my-shoe-add-text" on-click="_addItemsToCart">ADD! 🛒</h1>
        </div>
        </div>
       </div>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      selectedshoe: {
        type: Object,
        value: () => ({}),
        notify: true
      },
      storeValues:{
        type: Array,
        value: () => []
        
      }
    };
  }

  _howMany(inStore) {
    let stock = new Array(inStore).fill("hola");
    return stock;
  }

  _greatAnswer(index) {
    let option = index + 1;
    return option;
  }

  _addItems(){
    let selectedSize = this.shadowRoot.querySelector(".my-shoe-select").value
    let selectedQuantity =  +this.shadowRoot.querySelector(".quantity").value + 1
    this.storeValues.push(selectedSize)
    this.storeValues.push(selectedQuantity)

    console.log(this.storeValues)
  }

  _closeCard(){
    this.dispatchEvent(new Event(`closeSelected`,{
      detail: "Hola",
      bubbles: true,
      composed: true
    }))
  }

  _addItemsToCart(){
    this.dispatchEvent(new Event(`addItems`,{
      detail: [+this.storeValues[0], this.storeValues[1]],
      bubbles: true,
      composed: true
    }))
  }
}

customElements.define("my-shoe", MyShoe);
