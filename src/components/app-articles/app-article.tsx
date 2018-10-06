import { Component, Prop,  State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';


@Component({
  tag: 'app-article'
})
export class AppArticle {

  @Prop() history : RouterHistory;
  @Prop() match : MatchResults;

  @State() article  : any ;

  deleteArticle(){
    let id = this.match.params.id;
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id,{
        method: 'DELETE'
    })
  .then(response => {if (response.ok){
        this.history.goBack();
        console.log("REPONSE OK")}
        });
        
  }
  componentWillLoad() {
    let id = this.match.params.id;
    console.log('Component is about to be rendered');
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
  .then(response =>response.json()).
    then(data=>{
      this.article=data;
      console.log(this.article)
    })
    }
  render() {
    if(this.match && this.match.params.id && this.article)
    return(<div>

<div class="main-content">
	<div class="container">
	  <div class="columns is-mobile">
	    
	    <div class="column is-4 is-narrow">
	      <div class="section">
		<div class="sidebar">
		 
		  <div class="sidebar-header-single">
		    <h4 class="title is-4">{this.article.title}</h4>
		    <h5 class="subtitle is-5">DOSI</h5>
		  </div>
		 
		  <div class="sidebar-list-single">
		    <p>Posted on {this.article.creationDate}</p>
		    <p>Written by {this.article.autor}</p>
		  </div>
		 
		  <div class="sidebar-footer-single">
		    <p><a href="/">Back to Home</a></p>
		  </div>
		  
		</div>
	      </div>
	    </div>

	    <div class="column is-8">
	      <div class="section">
		<div class="post-single">
		  <div class="post-single-content">
		    <p>{this.article.article}</p>
		     </div>
		</div>
	      </div>
	    </div>
	    
	  </div>
	</div>
      </div>




</div>
    )
  }
}