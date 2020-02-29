import { PolymerElement, html } from '@polymer/polymer';
/*
Description for my-beer-table
### Usage
 <my-beer-table><my-beer-table/>
### Styling

 The following custom properties and mixins are also available for styling:

 Custom property | Description | Default
 ---------------- |------------- |----------

### Events
 - event
@element my-beer-table
*/
class MyBeerTable extends PolymerElement {
  static get template () {
    return html``
  }
  static get properties() {
    return {
      
    };
  }
}
customElements.define('my-beer-table', MyBeerTable);