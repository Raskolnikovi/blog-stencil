import { Component, Prop,  State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
  tag: 'app-delete-article'
})
export class AppDeleteArticle {

    @Prop() history : RouterHistory;
  @Prop() match : MatchResults;

  @State() msg = "";

  @State() article  : any ;


  componentWillLoad() {
    let id = this.match.params.id;
    console.log('Component is about to be rendered');
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id,{
        method: 'DELETE'
    })
  .then(response => {if (response.ok){
        this.msg = "Message Supprimé";
        console.log(this.msg)}
        else{
        this.msg = "Erreur Suppression";
        console.log(this.msg)}
        });
        this.history.goBack();        
    
    }
 
  render() {
    if(this.match && this.match.params.id )
    return;
  }
}