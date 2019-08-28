function shoppingList() {
  $("#js-shopping-list-form").submit(e => { 
    
    e.preventDefault();

    // capture value that is in input field
    $("#shopping-list-entry").click(function(){
      $("input").val()
    });
    // insert that value into the <li> element that you can find in the html page that is currently creating the list items
    $('.shopping-list').add("val")
    // append that string to the <ul> item
    $("ul").append ("<li></li>") 
    //clear the input field
    $('.js-shopping-list-entry').val('');
  })
    // check handler
  $("body").on('click', '.shopping-item-toggle', e => {
     e.preventDefault()
    console.log("click")
    //toggleclass, addclass, removeclass-- do not use dot for class
    $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
  });

  
    // delete handler
  $("body").on('click', '.shopping-item-delete', e => {
     e.preventDefault()
    console.log("click")
    $(e.target).closest('li').remove( )
  });

    
}



$(shoppingList);
