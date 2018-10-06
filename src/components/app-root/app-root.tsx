import { Component } from '@stencil/core';


@Component({
  tag: 'app-root'
})
export class AppRoot {

  render() {
    return (
      <div id="root">
      <div>
      
      <div class="main-navigation">
      <nav class="nav">
        <div class="container">
         
          <div class="nav-left">
                  <a class="nav-item is-tab" href="/">Home</a>
          </div>
         
          <div class="nav-center is-hidden-desktop is-hidden-tablet">                
            <a class="nav-item is-tab" href="addarticle">Add Article</a>
            <a class="nav-item is-tab" href="#">About</a>
          </div>
          
          <div class="nav-right is-hidden-mobile">
            <a class="nav-item is-tab" href="addarticle">Add Article</a>
            <a class="nav-item is-tab" href="#">About</a>            
          </div>
        </div>
      </nav>
      
          </div>

      
      <div class="main-header">
	<section class="hero is-medium">
	  <div class="hero-body">
	    <div class="container">
	      <div class="columns is-mobile is-centered">
		<div class="column is-7 has-text-centered">
		  <div class="buffer">
		    <h3 class="title is-3">DOSI BLOG</h3>
		  </div>
		  <div class="buffer">
		    <h4 class="subtitle is-4">Master DOSI 2018/2019</h4>
		  </div>
		</div>
	      </div>
	    </div>
	  </div>
	</section>
      </div>
      
      <main>
          <stencil-router>
            <stencil-route-switch >
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/article/:id' component='app-article' />
              <stencil-route url='/addarticle' component='add-article' />
              <stencil-route url='/editarticle/:myid' component='edit-article' />
              <stencil-route url='/deletearticle/:id' component='app-delete-article' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      
        </div>
        <div class="hero-footer footer footer-custom">
      <div class="container">
	<div class="has-text-centered">
	  <span class="icon">
	    <i class="fa fa-github"></i>
	  </span>
	  <p>template by <a href="http://github.com/plasticneko">github.com/plasticneko</a></p>
	</div>
      </div>
    </div>
                
      </div>
      
      
      
    );
  }
}
