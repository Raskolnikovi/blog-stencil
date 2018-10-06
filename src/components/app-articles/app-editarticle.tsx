import { Component, State, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
    tag: 'edit-article'
  })
  export class AppEditArticle {

    @Prop() history:RouterHistory;
    @State() myArticle : any;
    @Prop() match : MatchResults;
     title: string;
     article: string;
     autor: string;
     _id : any;


     componentWillLoad() {
        let id = this.match.params.myid;
        fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/'+id)
      .then(response =>response.json()).
        then(data=>{
          this.myArticle=data;
          this.title = this.myArticle.title;
          this.article = this.myArticle.article;
          this.autor = this.myArticle.autor;
          this._id = this.myArticle._id;
        })
        }

    editArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.autor;
      const _id = this._id;
      const postedited = {
        _id,  
        title,
        article,
        autor
      };
      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postedited)
      })
        .then(function(res) {
          console.log(res.json());
        })
        .then(function(data) {
          console.log(JSON.stringify(data));
        });
    }

  
    render() {
      return (
        <div >


<div class="main-content">
<div class="container">
  <div class="columns is-mobile">
    
    <div class="column is-4 is-narrow">
      <div class="section">
  
  <div class="sidebar">
    
    <div class="sidebar-header-single">
      <h4 class="title is-4">Edit Article</h4>
      <h5 class="subtitle is-5">Use the form to edit your article.</h5>
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
      
      <div class="card-content-form">
        <form>
    <div class="field">
      <label class="label">Title</label>
      <p class="control">
        <input class="input"
        type="text"
        value={this.title}
        onChange={(e:any)  => (this.title = e.target.value)}
        
        />
      </p>
    </div>
    <div class="field">
      <label class="label">Author</label>
      <p class="control">
        <input class="input" placeholder="Author"
                        value={this.autor}
                        onChange={(e:any)  => (this.autor = e.target.value)} />
      </p>
    </div>
    <div class="field">
      <label class="label">Article</label>
      <p class="control">
        <textarea class="textarea" 
        value={this.article}
        onChange={(e:any)  => (this.article = e.target.value)}
        ></textarea>
      </p>
    </div>
    <div class="field is-grouped">
      <p class="control">
      
        <stencil-route-link url="/">
                      <button class="button is-button-blue"
                        onClick={this.editArticle.bind(this)}
                      >
                        Edit Article
                      </button>
                      </stencil-route-link>
      </p>
    </div>
        </form>
      </div>
      
    </div>
  </div>
      </div>
    </div>
    
  </div>
</div>
    </div>

</div>
      );
    }
  }