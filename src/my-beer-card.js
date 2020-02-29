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
class MyBeerCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        .user-card-container {
          display: flex;
          flex-direction: column;
          width: 800px;
          height: 400px;
          background-color: gray;
          border: 1px solid grey;
          box-shadow: 2px 2px 0px 0px rgba(220, 220, 220);
          border-radius: 8px;
        }
        .user-card-top {
          width: 100%;
          height: 50%;

          position: relative;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .user-card-bot {
          width: 100%;
          height: 50%;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          background-color: var(--my-user-card-background, white);
          position: relative;
        }
        .user-card-top-top {
          height: 40%;
          background-color: rgba(220, 220, 220);
          border-bottom: 2px solid grey;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .user-card-top-bot {
          height: 60%;
          background-color: white;
        }
        .user-card-top-mid {
          position: absolute;
          width: 100%;
          height: 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .user-card-portrait {
          width: 95px;
          height: 95px;
          border: 1px solid gray;
          border-radius: 50%;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .user-card-img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: contain;
        }
        h2,
        p,
        h5 {
          font-size: 14px;
          margin: 0;
        }
        .user-card-data {
          margin: 10px 5px;
        }
        h1 {
          margin: 5px 0;
        }

        input:focus {
          outline: none;
        }
        input {
          border: none;
        }
        .input-title {
          font-size: 24px;
          font-weight: bolder;
          text-align: center;
        }

        .random-users {
          position: absolute;
          right: 20px;
          bottom: 10px;
          background-color: #e7e7e7;
          border-radius: 5px;
          height: 40px;
          width: 40px;
          font-size: 20px;
        }
        .edit-card {
          position: absolute;
          top: 5px;
          right: 5px;
          cursor: pointer;
          z-index: 20;
        }
        .invisible {
          display: none;
        }
      </style>

      <div class="user-card-container">
        <div class="user-card-top">
          <p class="edit-card" on-click="_editAllCard">✏️</p>
          <div class="user-card-top-top"></div>
          <div class="user-card-top-mid">
            <div class="user-card-portrait">
              <img class="user-card-img" src="[[beer.image_url]]" />
            </div>
            <h1>[[beer.name]]</h1>
            <h5 class="invisible">Edit name</h5>
            <input class="input invisible" value="{{beer.name::keyup}}" />
          </div>
          <div class="user-card-top-bot"></div>
        </div>
        <div class="user-card-bot">
          <div class="user-card-data">
            <h2>Atenuation</h2>
            <h5 class="invisible">Edit atenuation</h5>
            <p class="beer-card-info">[[beer.attenuation_level]]</p>
            <input
              class="input invisible"
              value="{{beer.attenuation_level::keyup}}"
            />
          </div>
          <div class="user-card-data">
            <h2>Tagline</h2>
            <h5 class="invisible">Edit tagline</h5>
            <p class="beer-card-info">[[beer.tagline]]</p>
            <input class="input invisible" value="{{beer.tagline::keyup}}" />
          </div>
          <div class="user-card-data">
            <h2>Description</h2>
            <h5 class="invisible">Edit description</h5>
            <p class="beer-card-info">[[beer.description]]</p>
            <input
              class="input invisible"
              value="{{beer.description::keyup}}"
            />
          </div>

          <div class="user-card-data">
            <h2>Added by</h2>
            <h5 class="invisible">Edit author</h5>
            <p class="beer-card-info">[[beer.contributed_by]]</p>
            <input
              class="input-contributed_by invisible"
              value="{{beer.contributed_by::keyup}}"
            />
          </div>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      selected: {
        type: Object,
        value: () => ({}),
        notify: true
      },

      isEditting: {
        type: Boolean,
        value: false
      }
    };
  }

  _editAllCard() {


    if (this.isEditting == false) {
      this.isEditting = !this.isEditting;
      let x = [...this.shadowRoot.querySelectorAll("input")];
      x.forEach(y => y.classList.remove("invisible"));
      let titles = this.shadowRoot.querySelectorAll("h2");
      titles.forEach(title => title.classList.add("invisible"));
      let paragraphs = this.shadowRoot.querySelectorAll(".beer-card-info");
      paragraphs.forEach(paragraph => paragraph.classList.add("invisible"));
      let editTitles = this.shadowRoot.querySelectorAll("h5");
      editTitles.forEach(editTitle => editTitle.classList.remove("invisible"));
      let mainTitle = this.shadowRoot.querySelector("h1");
      mainTitle.classList.add("invisible");

    } else {
      this.isEditting = !this.isEditting;
      let x = [...this.shadowRoot.querySelectorAll("input")];
      x.forEach(y => y.classList.add("invisible"));
      let titles = this.shadowRoot.querySelectorAll("h2");
      titles.forEach(title => title.classList.remove("invisible"));
      let paragraphs = this.shadowRoot.querySelectorAll(".beer-card-info");
      paragraphs.forEach(paragraph => paragraph.classList.remove("invisible"));
      let editTitles = this.shadowRoot.querySelectorAll("h5");
      editTitles.forEach(editTitle => editTitle.classList.add("invisible"));
      let mainTitle = this.shadowRoot.querySelector("h1");
      mainTitle.classList.remove("invisible");
    }
  }
}

customElements.define("my-beer-card", MyBeerCard);
