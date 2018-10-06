import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
    tag: 'add-article'
  })
  export class AddArticle {
  
    @Prop() history:RouterHistory;
  
     title: string;
     article: string;
     autor: string;

    addArticle(e) {
      e.preventDefault();
      console.log("!");
      const title = this.title;
      const article = this.article;
      const autor = this.autor;
      const postadded = {
        title,
        article,
        autor
      };
      fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postadded)
      })
        .then(function(res) {
          this.history.goBack();
          return res.json();
        })
        .then(function(data) {
          console.log(JSON.stringify(data));
        });
    }

  
    render() {
      return (
        <div>
        



<div class="main-content">
<div class="container">
  <div class="columns is-mobile">
    
    <div class="column is-4 is-narrow">
      <div class="section">
  
  <div class="sidebar">
    
    <div class="sidebar-header-single">
      <h4 class="title is-4">Add Article</h4>
      <h5 class="subtitle is-5">Use the form to add a new article to your blog</h5>
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
        placeholder="Title"
        onChange={(e:any)  => (this.title = e.target.value)}
        
        />
      </p>
    </div>
    <div class="field">
      <label class="label">Author</label>
      <p class="control">
        <input class="input" placeholder="Author"
                        value=""
                        onChange={(e:any)  => (this.autor = e.target.value)} />
      </p>
    </div>
    <div class="field">
      <label class="label">Article</label>
      <p class="control">
        <textarea class="textarea" 
        placeholder="Type your article.."
        onChange={(e:any)  => (this.article = e.target.value)}
        ></textarea>
      </p>
    </div>
    <div class="field is-grouped">
      <p class="control">
      
        <stencil-route-link url="/">
                      <button class="button is-button-blue"
                        onClick={this.addArticle.bind(this)}
                      >
                        Add Article
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