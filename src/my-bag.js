import { PolymerElement, html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat";
import "@polymer/polymer/lib/elements/dom-if";
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
export default class MyBag extends PolymerElement {
  static get template() {
    return html`
      <style>
      ::host{
        position:absolute;
        left: 0;
        right: 0;

      }
      .my-bag-component{
        position: absolute;
        top: 120px;
        right: -1900px;
        background-color: rgba(255,255,255,0.95);
        width: 400px;
        z-index: 1000000;
        min-height: 40vh;
        border-radius: 10px; 
        border: 2px solid var(--my-secondary-color);
        box-shadow: 0px 2px 5px 2px lightgrey;
        display: flex;
        flex-direction:column;
        align-items: center;
      }
      .arrow-up {
        position: absolute;
        top: -20px;
        right: 1px;
        width: 0; 
        height: 0; 
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        
        border-bottom: 20px solid var(--my-secondary-color);
      }
      .arrow-up-two {
        position: absolute;
        top: -17px;
        right: 4px;
        width: 0; 
        height: 0; 
        border-left: 17px solid transparent;
        border-right: 17px solid transparent;
        
        border-bottom: 17px solid rgba(255,255,255,0.95);
      }
      .my-bag-ending{
       position:absolute;
       bottom: 20px;
       width: 80%;
      }

      .my-bag-finish-btn{
        background-color: var(--my-main-color);
        width: 100%;
        color: white;
        font-size: 36px;
        text-align: center;
        border-radius: 5px;
        border: 2px solid var(--my-secondary-color);
        cursor:pointer;
      }
      .my-bag-total-line{
        text-align: right;
      }
      .my-bag-object-card{
        display: flex;
        height: 120px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
        border-bottom: 1px solid lightgrey;
      }
      .my-bag-content-img{
        height: 80%;
      }
      .my-bag-item-info{
        display: flex;
        flex-direction: column;
      }
      .my-bag-item-name{
        font-size: 25px;
        margin: 0;
      }
      .my-bag-item-values{
        display: flex;
        justify-content: space-between;
        padding-right: 40px;
      }
      .my-bag-current-content{
        width: 90%;
      }
      .my-bag-item-size{
        font-size: 18px;
        padding-right: 15px;
      }
      .my-bag-item-quantity{
        font-size: 18px;
      }
      .my-bag-item-delete{
        width: 20px;
        background-color: red;
        height: 100%;
        border-radius: 0px 10px 10px 0px;
        cursor: pointer;
      }
      .erase{
        margin:0;
        padding:0;
        margin-top: 20px;
        transform: rotate(90deg);
        font-weight: bolder;
        font-size: 16px;
        
      }
      .my-bag-item-delete-img{
        margin-top: 40px;
        margin-left:3px;
        height: 15px;
        
      }
      .my-bag-current-content{
        margin-bottom: 150px;
      }

      </style>
      <div class="my-bag-component" >
      <div class="arrow-up"> </div>
      <div class="arrow-up-two"> </div>
      <div class="my-bag-current-content"> 
      <template is="dom-repeat" items="[[bagContent]]">
      <div class="my-bag-object-card">
      <img src=[[item.picture]] class="my-bag-content-img"/>
      <div class="my-bag-item-info">
      <h1 class="my-bag-item-name"> [[item.name]]</h1>
      <div class="my-bag-item-values">
      <h2 class="my-bag-item-size">Size:[[item.size]]</h2>
      <h2 class="my-bag-item-quantity">Qty:[[item.quantity]]</h2>
      </div>
      
      </div>
      <h2 class="my-bag-item-price">[[_sumItem(item.quantity, item.price)]]€</h2>
      <div class="my-bag-item-delete" index$=[[index]] on-click="_deleteItem"><h3 class="erase">DELETE</h3><img src="../img/cancel.png" class="my-bag-item-delete-img"></img></div>
      </div>
      </template>
      </div>
      <div class="my-bag-ending"> 
      <h2 class="my-bag-total-line"> Total: [[_sumAll()]]€</h2>
      <div class="my-bag-finish-btn"> Finish!</div>
      </div>
      </div>
    `;
  }
  static get properties() {
    return {
      bagContent: {
        type: Array,
        value: () => [{
          id: 0,
            name: "Prueba1",
            size: 40,
            price: 120,
            picture: "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
            quantity: 5
          },
          {
          id: 1,
            name: "Prueba2",
            size: 42,
            price: 69,
            picture: "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
            quantity: 1
          }],
        notify: true
      }
    };
  }

  _sumItem(quantity, price){
    let value = quantity*price
    return value;
  }

  _sumAll(){
    let bagPrices= []
    this.bagContent.forEach(element => {
      let drug = element.price * element.quantity ;
       bagPrices.push(drug)
    }); 
    return bagPrices.reduce((a, b) => a + b, 0)
  }

  _deleteItem(e){
    const target = e.currentTarget.getAttribute('index')
    this.splice("bagContent", target, 1)
  }


}

customElements.define("my-bag", MyBag);
