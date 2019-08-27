function shoppingList() {
  $("#js-shopping-list-form").submit(e => { 
    
    e.preventDefault() 
  })

//creates variable called itemList. 
//responds when users click the Add Item button

    //const itemList = $("#shopping-list-entry").click(function ( ) {
    
    //with the following instructions    
    //    $(ul).append("<li></li>");
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
  })

    
}



$(shoppingList);