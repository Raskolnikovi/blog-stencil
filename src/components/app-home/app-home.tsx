import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-home'
})
export class AppHome {
  @Prop() message : string;

  render() {
    return (
           
          <app-articles></app-articles>
      
      
    );
  }
}
