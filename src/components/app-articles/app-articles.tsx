import { Component, Prop,  State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';


@Component({
  tag: 'app-articles'
})
export class AppArticles {

  @State() articles : any [] = []
  @Prop() history : RouterHistory;


  deleteArticle(idarticle){
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+idarticle,{
        method: 'DELETE'
    })
  .then(response => {console.log(response);
    location.reload();}
        );
        
  }

  componentWillLoad() {
    fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost')
  .then(response =>response.json()).
    then(data=>{
      this.articles=data;
    })

    }
 
    trim(str: string) {
      if(str===null){
        return "Text vide"
      } else {
        let r = Math.min(141, str.length);
        let point = str.length <= 140 ? "" : "...";
        return str.substring(0, r) + point;
      }    
    }



  render() {
    return(
    <div>

      <div class="main-content">
	<div class="container">
	  <div class="columns is-mobile">
	    
	    <div class="column is-8">
	    {this.articles.map((article) =>
	      <div class="section">
        
		<div class="post">
		  <div class="post-header">
      <stencil-route-link url={'/article/'+article._id}>
		    <h4 class="title is-4"><a href={'/article/'+article._id}>{article.title}</a></h4>
        </stencil-route-link>
		    <h5 class="subtitle is-5">Author : {article.autor} </h5>
		  </div>
		  <div class="post-content">
		    <p>{this.trim(article.article)}</p>
		  </div>
      
      <button class="pagination-previous"
                        onClick={()  =>this.deleteArticle(article._id) }
                      >
                        DELETE
      </button>
      <stencil-route-link url={'/editarticle/'+article._id}>
      <a class="pagination-next pagination-link is-current">Edit</a>
      </stencil-route-link>
                      <stencil-route-link url={'/article/'+article._id}>
      <a class="pagination-next pagination-link is-read">Read More</a>
      </stencil-route-link>
		</div>
    
        </div>
        )}
	      
	    </div>
	    
	    <div class="column is-4 is-narrow">
	     
	      <div class="section">
		<div class="sidebar">
		  <div class="sidebar-header">
		    <h4 class="title is-4">Menu</h4>
		  </div>
		  <div class="sidebar-list"> 
		    <p><a href="/">Home</a></p>
		    <p><a href="addarticle">Add Article</a></p>
		    <p><a href="#">About</a></p>
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