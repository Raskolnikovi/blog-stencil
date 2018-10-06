import { Component, Prop, EventEmitter, Event, State, Method } from '@stencil/core';


@Component({
  tag: 'st-fetch'
})
export class StFetch {

  @Prop() headers     : Headers = new Headers();
  @Prop() method      : string  = 'GET';
  @Prop() url         : string  = '';
  @Prop() buttonLabel : string  = 'Fetch';

  @Event() resolved : EventEmitter;
  @Event() error    : EventEmitter;

  @State() available : boolean = false;
  @State() request   : any;
  @State() resp : any;

  componentWillLoad() {
    console.log('Component is about to be rendered');
    fetch('https://swapi.co/api/starships/10/')
  .then(reponse => {
    if (reponse.ok) {
      return reponse.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => console.log('fetch: ' + data.name))
  .catch(error => console.log('Problem : ' + error));
  }

  componentDidLoad() {
    console.log('Component is already rendered');
    if(self.fetch) {
      this.available = true;
      let options = {
        method: this.method,
        headers: new Headers(this.headers)
      };

      this.request = new Request(this.url, options);
    }
  }

  @Method()
  makeRequest () {
    if(this.available) {
      fetch(this.request)
      .then(function(response) {
        this.resolved.emit(response);
        this.resp=response.json();
      }.bind(this))
      .catch(function(err) {
        this.error.emit(err);
      }.bind(this));
    }
  }

  render() {
    return;
  }
}