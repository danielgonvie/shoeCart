import { PolymerElement, html } from '@polymer/polymer';
import './my-beers-brands-list';
import './my-beer-detail';
/*
Description for my-beers-selector
### Usage
 <my-beers-selector><my-beers-selector/>
### Styling

 The following custom properties and mixins are also available for styling:

 Custom property | Description | Default
 ---------------- |------------- |----------

### Events
 - event
@element my-beers-selector
*/
class MyBeersSelector extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-size: 16px;
        }
        h3 {
          padding: 0 3rem;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .invisible{
          display: none;
          
        }
        .why{
          font-size: 72px;
          color: white;
          background-color: red;
          border: 2px solid black;
          text-align: center;
        }
      </style>
      <h3>Beer Catalogue</h3>
      <h1 class="why invisible"> WHY HAVE YOU DONE THIS?</h1>
      <div>
        <my-beers-brands-list beers="{{beers}}" chosen-beer="{{chosenBeer}}"></my-beers-brands-list>
        <my-beer-detail chosen-beer="{{chosenBeer}}"></my-beer-detail>
      </div>
    `;
  }
  constructor(){
    super();
    this.addEventListener(`destroy-all`, this._destroyAll.bind(this))
  }

  static get properties() {
    return {
    };
  }

  _destroyAll(){
    console.log("Llegó al padre")
    this.dispatchEvent(new Event(`destroy-all`,{
      detail: "Hola",
      bubbles: true,
      composed: true
    }))

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector("my-beer-detail")
    x.classList.add("invisible")}, 3000)

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector("my-beers-brands-list")
    x.classList.add("invisible")}, 3400)

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector("h3")
    x.classList.add("invisible")}, 3800)

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector(".why")
    x.classList.remove("invisible")}, 4000)
    
  }
}
customElements.define('my-beers-selector', MyBeersSelector);
