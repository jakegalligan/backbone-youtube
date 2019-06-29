var AppView = Backbone.View.extend({

el: $('body'),

template: Handlebars.compile($('#main-video-template').html()),

events: {
  //checks for keypress events when user is on search bar. If a keypress happens createOnEnter function is ran
  'keypress .search-bar': 'createOnEnter'
},

initialize: function() {
  this.listenTo(this.model.get('videos'), 'add', this.renderMain);
},

createOnEnter: function (e) {

  //checking to see if keypress event was the enter bar and that input was inserted into the search bar
  if (e.keyCode == 13 && this.$('.search-bar').val()) {
    //storing user input from search bar in searchQuery variable
    var searchQuery = this.$('.search-bar').val();
    //accessing the models 'videos' collection and then running a function which appends the search query to the api URL
    this.model.get('videos').addUrl(searchQuery);
    //fetching the desired data from the API
    this.model.get('videos').fetch({ reset: true });
  }
},

renderMain: function() {

// console.log(this.model.get('videos').models[0].attributes;
  this.$el.html(this.template(this.model.get('videos').models[0].attributes));
  //
  // return this;
}


});
