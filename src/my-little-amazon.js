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
class MyLittleAmazon extends PolymerElement {
  static get template() {
    return html`
      <h1>The best marketplace alive!</h1>
    `;
  }
  static get properties() {
    return {
      stock: {
        type: Array,
        value: () => []
      },
    };
  }

}

customElements.define("my-little-amazon", MyLittleAmazon);
