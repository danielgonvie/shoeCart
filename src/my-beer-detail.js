import { PolymerElement, html } from '@polymer/polymer';
import './my-beer-card'
import './my-beer-table'
/*
Description for my-beer-detail
### Usage
 <my-beer-detail><my-beer-detail/>
### Styling

 The following custom properties and mixins are also available for styling:

 Custom property | Description | Default
 ---------------- |------------- |----------

### Events
 - event
@element my-beer-detail
*/
class MyBeerDetail extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          /* visibility:hidden */
          width: 75vw;
          padding: 3rem 5rem;
          font-size: 16px;
          border: 1px solid #999;
        }
        .beer-detail{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
        }
        img{
          height: 8rem;
          width: auto;
        }
        .buttons{
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }

        button{
          border: none;
          margin: 0 1rem;
          padding: .4rem 1rem;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: white;
          background-color: steelblue;
        }
        button:hover{
          background-color: skyblue;
        }
        .beer-detail-top-div{
          display:flex;
          
          width: 100%;
          justify-content:space-between;
          
        }
        .invisible{
          display: none;
          
        }
        .erase-world{
          background-color: red;
          height: 50px;
        }
      </style>
      <div class='beer-detail' chosen-beer={{chosenBeer}}>
        <div class="beer-detail-top-div">
          <div>
          <h1>[[chosenBeer.name]]</h1>
          <p>[[chosenBeer.contributed_by]]</p>
      </div>
        <button class="erase-world" on-click="_destroyAll">Destroy All! </button>
        </div>
        
      </div>
      <div class='buttons'>
        <button on-click='_showCard'>Card</button>
        <button on-click='_showTable'>Tabla</button>
      </div>
      <div class="beer-info">
      <my-beer-card class="beer-card invisible" beer=[[chosenBeer]]></my-beer-card>
      <my-beer-table beer=[[chosenBeer]]></my-beer-table>
      </div>
    `;
  }
  static get properties() {
    return {
      chosenBeer: {
        type: Object,
        value: () => ({}),
      },
      showCard: {
        type: Boolean,
        value: false,
      }
      
    };
  }


  
  _showCard(){
    console.log("Boton clickado")
    if (this.showCard == false){
      this.showCard = !this.showCard
      let x = this.shadowRoot.querySelector(".beer-card")
    x.classList.remove("invisible")
    }
    else{
      this.showCard = !this.showCard
      let x = this.shadowRoot.querySelector(".beer-card")
    x.classList.add("invisible")
    }
    
  }

  _showTable(){
alert('Hola compañero esto no hace ni mierda')
  }

  _destroyAll(){
    this.dispatchEvent(new Event(`destroy-all`,{
      detail: "Hola",
      bubbles: true,
      composed: true
    }))

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector(".buttons")
    x.classList.add("invisible")}, 1000)

    setTimeout(()=> {
      let x = this.shadowRoot.querySelector("my-beer-card")
    x.classList.add("invisible")}, 2000)

   

  }
  

}
customElements.define('my-beer-detail', MyBeerDetail);
