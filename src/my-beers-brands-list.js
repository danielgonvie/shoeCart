import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/array-selector';
/*
Description for my-beers-brands-list
### Usage
 <my-beers-brands-list><my-beers-brands-list/>
### Styling

 The following custom properties and mixins are also available for styling:

 Custom property | Description | Default
 ---------------- |------------- |----------

### Events
 - event
@element my-beers-brands-list
*/
class MyBeersBrandsList extends PolymerElement {
  static get template() {
    return html`
    <style>
        :host{
            font-size: 16px;
            padding: 3rem;
            width: 25vw;
            border: 1px solid #999;
        }

        .flor-div{
            padding: .1rem .4rem;
            background: lightblue;
            margin: .2rem 0;
            position: relative;
            height: 50px;
            display:flex;
            
            align-items:center;
        }

        .flor-div:hover{
            background:lightskyblue;
            cursor: pointer;
        }

        .title-div{
          display:flex;
          flex-direction: column;
          width: 100%;
          
        }
        .top-title-div{
          display:flex;
          justify-content: space-between;
          align-items: center;
        }

        p{
          cursor: pointer;
        }
        .invisible{
          display:none;
        }
        .remove-beer{
          position: absolute;
          top: 2px;
          right: 5px;
        }
        .edit-beer{
          position: absolute;
          top: 2px;
          right: 30px;
        }
        .item-title-edit-form{
          display:flex;
        }
    </style>
    <div class="title-div">
      <div class="top-title-div">
      <h2>Pick your beer</h2>
      <p on-click="_showAddBeer">+</p>
      </div>
      <div class="add-beer invisible">
      <input name="newBeer-name" />
      <button on-click="_addBeer">ADD</button>
      </div>
      </div>
      <template is="dom-repeat" items="{{beers}}">
        <div id="[[item.id]]" on-click="_selectBeer" class="flor-div">
          <h4 class$="item-title-[[index]]">[[item.name]]</h4>
          <div class$="item-title-edit-[[index]] invisible" index$="[[index]]">
          <input  value="{{item.name::keyup}}"/> <p on-click="_closeEdit" index$="[[index]]">✔️</p>
      </div>
          <p class="edit-beer" on-click="_editBeer" index$="[[index]]"> ✏️</p>
          <p class="remove-beer" on-click="_removeBeer" index$="[[index]]"> 🗑️</p>
        </div>
      </template>
      <array-selector beers="{{beers}}" chosen-beer="{{chosenBeer}}"></array-selector>
    `;
  }
  static get properties() {
    return {
      beers: {
        type: Array,
        value: () => [],
        notify:true
      },
      chosenBeer: {
        type: Object,
        value: () =>({}),
        notify: true,
      },
    };
  }

  constructor() {
    super();

    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(res => {
        console.log(res);
        this.set('beers', res);
      })
      .catch(error => console.log(error));
  }

  _selectBeer(e) {
    const beerId = e.currentTarget.getAttribute('id')-1;
    this.set('chosenBeer', this.beers[beerId]);
    this.linkPaths("chosenBeer", `beers.${beerId}`)
    console.log(this.chosenBeer.name)
  }

  _showAddBeer(){
    let x = this.shadowRoot.querySelector(".add-beer")
    x.classList.remove("invisible")
  }
  _addBeer(){
    let x = this.shadowRoot.querySelector(".add-beer")
    x.classList.add("invisible")
    let beersLength= this.beers.length
    
      this.push("beers", {id: beersLength+1,  name: this.shadowRoot.querySelector(`[name="newBeer-name"]`).value 
    } )

    console.log(this.beers)
  }

  _removeBeer(e){
    const target = e.currentTarget.getAttribute('index')
    this.splice("beers", target, 1)
  }
  _editBeer(e){
    const target = e.currentTarget.getAttribute('index')

    let x = this.shadowRoot.querySelector(`.item-title-edit-${target}`)
    x.classList.remove("invisible")
    x.classList.add(`item-title-edit-form`)
    

    let y = this.shadowRoot.querySelector(`.item-title-${target}`)
    y.classList.add("invisible")
  }

  _closeEdit(e){
    const target = e.currentTarget.getAttribute('index')
    let x = this.shadowRoot.querySelector(`.item-title-edit-${target}`)
    x.classList.remove(`item-title-edit-form`)
    x.classList.add("invisible")

    let y = this.shadowRoot.querySelector(`.item-title-${target}`)
    y.classList.remove("invisible")
  }
}
customElements.define('my-beers-brands-list', MyBeersBrandsList);
