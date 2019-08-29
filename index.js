function shoppingList() {
  $("#js-shopping-list-form").submit(e => { 
      e.preventDefault();

    // capture value that is in input field
  $("#shopping-list-entry").submit(e => {
      e.preventDefault();
     const item = $('.shopping-list-entry').val();
    });
    // insert that value into the <li> element that you can find in the html page that is currently creating the list items
    $('li').val()
    // append that string to the <ul> item
    $(".shopping-list").append(
    `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`); 
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
