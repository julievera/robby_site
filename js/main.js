var container = document.querySelector('.masonry');
var msnry = new Masonry( container, {
  // options
  columnWidth: 5,
  itemSelector: '.item',
});


  $(".item").on("click", function(){
  	$(this).toggleClass("gigante");
  	msnry.layout();
});

  on click toggle content (maybe have all content there to start, display none?)


