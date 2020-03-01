import {
  PolymerElement,
  html
} from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat";
import "@polymer/polymer/lib/elements/array-selector";
import "@polymer/polymer/lib/elements/dom-if";
import "./my-shoe"
import "./my-bag"

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
export default class MyLittleAmazon extends PolymerElement {
  static get template() {
    return html `
    <style>
    :host{
      width:100vw;
      height:100vh;
      position:relative;
      font-family: "Roboto";
    }
    
    .my-little-amazon-topbar{
      display:flex;
      align-items: center;
      justify-content:space-between;
      height: 100px;
      width: 100vw;
      color:white;
      background-color: var(--my-main-color);
      border-bottom: 2px solid rgb(214,208,202);
      box-shadow: 2px 2px 2px rgb(214,208,202);
    }
    .my-little-amazon-title{
      padding: 0px 20px;
          }

    .my-little-amazon-cart{
      height: 50%;
      padding: 0px 20px;
    }
    .my-little-amazon-cart:hover{
      cursor:pointer;
    }

    .my-little-amazon-content{
      display:flex;
      flex-direction: column;
      align-items:center;
      width: 100vw;
      min-height: 100%;
      
    }
    .my-little-amazon-querys{
      display:flex;
      flex-direction: column;
      align-items:center;
      width: 100vw;
    }
    .my-little-amazon-searchbar{
      width: 80vw;
      margin: 20px 0px;
      border-radius: 5px;
      padding: 12px 20px;
      border: 1px solid #ccc;
    }
    .my-little-amazon-searchbar:focus{
      outline-color: var(--my-main-color);
      border-radius: 5px;
    }
    .my-little-amazon-catalogue{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100vw;
      justify-content: space-around;
    }
    .my-little-amazon-shoe-card{
      width: 250px;
      height: 220px;
      margin: 10px 20px;
      border: 2px solid rgb(229,227,233);
      border-radius: 5px;
      display:flex;
      flex-direction: column;
      align-items: center;
      transition: 0.25s ease-out;
      position: relative;
    }
    .my-little-amazon-shoe-card:hover{
      border: 2px solid var(--my-main-color);
      margin: -8px 20px;
      cursor:pointer;
      transition: 0.25s ease-in;
      box-shadow: 0px 5px 5px var(--my-main-color);
    }

    .my-little-amazon-prop{
      position: absolute;
      top: 7px;
      left: 7px;
      background-color: grey;
      border-radius: 3px;
      z-index: 10;
      color: white;
    }

    .new{
      background-color: #e53935;      
    }
    .featured{
        background-color: #ab47bc;
    }
    .upcoming{
      background-color: #ff7043;
    }
    .my-little-amazon-shoe-img{
      width:90%;
      height: 60%;
      margin: 10px 0px
    }

    .my-little-amazon-shoe-image{
      max-width: 100%;
      max-height: 100%;
    }
    .my-little-amazon-shoe-data{
      display:flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      height: 25%;
    }
    .my-little-amazon-shoe-info{
      display:flex;
      flex-direction:column;
      align-items: flex-start;
      height: 100%;
    }

    
    .my-little-amazon-shoe-name{
      font-size: 20px;
      margin-top: 5px;
    }

    .my-little-amazon-shoe-maker{
      font-size: 14px;
      color: grey;
    }

    h3, h2{
      margin:0;
    }

    .my-little-amazon-tag{
      font-size: 12px;
      margin: 0;
      padding: 2px 5px;
    }

    .hidden{
      display:none;
    }







    macro-carousel-nav-button.macro-carousel-previous,
    macro-carousel-nav-button.macro-carousel-next {
      --macro-carousel-navigation-color: var(--my-main-color);
      --macro-carousel-navigation-color-focus: var(--my-main-color);
      --macro-carousel-navigation-color-background: none;
      --macro-carousel-navigation-color-background-focus: none;
      --macro-carousel-navigation-button-size: 40px;
      --macro-carousel-navigation-icon-size: 40px;
      border-radius: 0;
      transform: none !important;
    }
    .my-little-amazon-shoe-carousel-div{
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .my-little-amazon-filter-by-tag{
      display:flex;
      align-items: center;
      justify-content:space-around;
      width: 60%;
      color: black;
      margin-bottom: 10px;
      
    }
    .my-little-amazon-filter-tags{
      border-radius: 20px;
      background-color: lightgrey;
      padding: 5px 15px;
    }
    .by-new:hover{
      background-color: #e53935;
      cursor:pointer;
      transition: 0.15s ease-in;
    }
    .by-featured:hover{
      background-color: #ab47bc;
      cursor:pointer;
      transition: 0.15s ease-in;
    }
    .by-upcoming:hover{
      background-color: #ff7043;
      cursor:pointer;
      transition: 0.15s ease-in;
    }

    .by-new{
      transition: 0.15s ease-out;
    }
.by-featured{
  transition: 0.15s ease-out;
}
.by-upcoming{
  transition: 0.15s ease-out;
}

.selectedNew{
  background-color: #e53935;
  cursor:pointer;
}
.selectedFeatured{
  background-color: #ab47bc;
  cursor:pointer;
}
.selectedComing{
  background-color: #ff7043;
  cursor:pointer;
}
  
    </style>
    <div class="my-little-amazon-topbar">
      <h1   class="my-little-amazon-title">Lil'Amazon</h1>
      <img class="my-little-amazon-cart" src="../img/supermarket.png" on-click="_closeBag"></img>

      

    </div>
    <div class="my-little-amazon-content">


    
    <my-shoe selectedShoe=[[selectedShoe]] class="hidden"></my-shoe>

    <div class="my-little-amazon-querys">
    <input type="text" class="my-little-amazon-searchbar"  value={{query::input}} />
    <div class="my-little-amazon-filter-by-tag">
    <h2 class="my-little-amazon-filter-tags by-new" on-click="_selectedTagNew">New</h2>
    <h2 class="my-little-amazon-filter-tags by-featured" on-click="_selectedTagFeatured">Featured</h2>
    <h2 class="my-little-amazon-filter-tags by-upcoming" on-click="_selectedTagComing">Upcoming</h2>
    </div>
    </div>
    <div class="my-little-amazon-catalogue">
    <template is="dom-repeat" items="[[stock]]" filter="[[_filteredItems(query)]]">
          <div
            class="my-little-amazon-shoe-card"
            index$="[[index]]"
            on-click="_selectShoe"
          >
          <template is="dom-if" if="{{item.new}}"> 
           <div class="my-little-amazon-prop new">
           <h1 class="my-little-amazon-tag">New</h1>
           </div>
          </template>
          <template is="dom-if" if="{{item.featured}}"> 
           <div class="my-little-amazon-prop featured">
           <h1 class="my-little-amazon-tag">Featured</h1>
           </div>
          </template>
          <template is="dom-if" if="{{item.upcoming}}"> 
           <div class="my-little-amazon-prop upcoming">
           <h1 class="my-little-amazon-tag">Coming soon</h1>
           </div>
          </template>


          <img class="my-little-amazon-shoe-img" src=[[item.pictures.0]]></img>
          <div class="my-little-amazon-shoe-data">
          <div class="my-little-amazon-shoe-info">
          <h3 class="my-little-amazon-shoe-maker">[[item.maker]]</h3>
          <h2 class="my-little-amazon-shoe-name">[[item.name]]</h2>
          </div>
          <h2 class="my-little-amazon-shoe-price">[[item.price]]€</h2>
          </div>
          </div>
        </template>

        <my-bag class="hidden" bagContent={{bagContent}}></my-bag>

        <array-selector stock="{{stock}}" selectedShoe="{{selectedShoe}}" bagContent="{{bagContent}}"></array-selector>
    </div>
    </div>

    `;
  }
  static get properties() {
    return {
      stock: {
        type: Array,
        value: () => [{
          id: 0,
            name: "Prueba1",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
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
          },
          {
            id: 1,
            name: "Prueba2",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
            maker: "Daniel",
            availableSizes: [40, 41, 42, 43, 45],
            price: 20,
            pictures: [
              "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
              "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
            ],
            new: true,
            featured: false,
            upcoming: false,
            inStore: 5
          },
          {
            id: 2,
            name: "Prueba3",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
            maker: "Daniel",
            availableSizes: [40, 41, 42, 43, 45],
            price: 20,
            pictures: [
              "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
              "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
            ],
            new: false,
            featured: false,
            upcoming: true,
            inStore: 5
          },
          {
            id: 3,
            name: "Prueba4",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
            maker: "Daniel",
            availableSizes: [40, 41, 42, 43, 45],
            price: 20,
            pictures: [
              "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
              "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
            ],
            new: false,
            featured: true,
            upcoming: false,
            inStore: 5
          },
          {
            id: 4,
            name: "Prueba5",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
            maker: "Daniel",
            availableSizes: [40, 41, 42, 43, 45],
            price: 20,
            pictures: [
              "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
              "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
            ],
            new: false,
            featured: true,
            upcoming: false,
            inStore: 5
          },
          {
            id: 5,
            name: "Prueba6",
            description: "Lorem ipsum asimet y lo que sea, no me acuerdo de más, pero vamos a hacer una descripcion larga para que quede super pro",
            maker: "Daniel",
            availableSizes: [40, 41, 42, 43, 45],
            price: 20,
            pictures: [
              "https://avatarfiles.alphacoders.com/158/thumb-158538.jpg",
              "https://avatarfiles.alphacoders.com/824/thumb-82453.jpg",
              "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ff212162cc3ad66fd68681b4e04bb3f1803cf034_full.jpg"
            ],
            new: false,
            featured: true,
            upcoming: false,
            inStore: 5
          }
        ]
      },
      selectedShoe: {
        type: Object,
        value: () => ({})
      },
      bagContent: {
        type: Array,
        value: () => []
      },
      query: {
        type: String,
        value: ""
      },
      closedBag: {
        type: Boolean,
        value: true
      }
    };
  }

  constructor(){
    super();
    this.addEventListener(`closeSelected`, this._closeCard.bind(this))
    this.addEventListener(`closeBag`, this._closeBag.bind(this))
    this.addEventListener(`addItems`, this._addItemsToCart.bind(this))
  }

  _filteredItems(query) {
    if (query == "") return null;
    if (query == "new") return item => item.new;
    if (query == "featured") return item => item.featured;
    if (query == "coming") return item => item.upcoming;
    return item => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  }

  _selectShoe(e) {
    const shoePicked = e.model.item;
    let shoeId = shoePicked.id
    this.set("selectedShoe", shoePicked);
    this.linkPaths("selectedShoe", `stock.${shoeId}`);
    let x = this.shadowRoot.querySelector("my-shoe")
    x.classList.remove("hidden")
    
  }

  _selectedTagNew(e) {
    let target = e.currentTarget
    if (this.query == "new") {
      this.set("query", "")
       target.classList.remove(`selectedNew`)
    } else {
      this.set("query", "new")
      let x = [...this.shadowRoot.querySelectorAll(`.my-little-amazon-filter-tags`)]
      x.forEach(tag => tag.classList.remove("selectedComing"))
      x.forEach(tag => tag.classList.remove("selectedFeatured"))

      target.classList.add(`selectedNew`)
    }


  }
  _selectedTagFeatured(e) {
    let target = e.currentTarget
    if (this.query == "featured") {
      this.set("query", "")
 target.classList.remove(`selectedFeatured`)
    } else {
      this.set("query", "featured")
      
      let x = [...this.shadowRoot.querySelectorAll(`.my-little-amazon-filter-tags`)]
      x.forEach(tag => tag.classList.remove("selectedComing"))
      x.forEach(tag => tag.classList.remove("selectedNew"))
      target.classList.add(`selectedFeatured`)
    }


  }
  _selectedTagComing(e) {
    let target = e.currentTarget
    if (this.query == "coming") {
      this.set("query", "")
       target.classList.remove(`selectedComing`)
    } else {
      this.set("query", "coming")
      let x = [...this.shadowRoot.querySelectorAll(`.my-little-amazon-filter-tags`)]
      x.forEach(tag => tag.classList.remove("selectedNew"))
      x.forEach(tag => tag.classList.remove("selectedFeatured"))
      target.classList.add(`selectedComing`)
    }
  }

  _closeCard(){
    let x = this.shadowRoot.querySelector("my-shoe")
    x.classList.add("hidden")

    this.set("selectedShoe", {})
  }

  

  _closeBag(){
    if(this.closedBag === false){
      this.closedBag = true;
      let x = this.shadowRoot.querySelector("my-bag")
      x.classList.add("hidden")
   }
   else{
    this.closedBag = false;
    let x = this.shadowRoot.querySelector("my-bag")
    x.classList.remove("hidden")
   }

  }
  _addItemsToCart(e){
    console.log(e.detail)
  }
  // shoe: {
  // name, description, maker, availableSizes:[], price, pictures:[], new: boolean, featured: boolean, upcoming: boolean, inStore:5
  // }
}

customElements.define("my-little-amazon", MyLittleAmazon);
