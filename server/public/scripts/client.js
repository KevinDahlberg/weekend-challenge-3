$(function(){
  console.log("JS fired up!");
  getList();

  //POST function to add new list item
  $('#listForm').on('submit', function(event){
    event.preventDefault();
    console.log("submit listForm path");
    postToList();
    $('#description').val('');
    //submitFormClear();
  });//end listForm click event

  //delete button function
  $("#container").on('click', ".deleteButton", function(){
    console.log("delete button clicked");
    console.log($(this).parent().data('id'));
    var listId = $(this).parent().data('id');
    deleteConfirm(listId);
    console.log(listId);
  });// end delete function

  //on click put function in order to change a note to completed
  $("#listContainer").on('click', ".completeButton", function(){
    console.log("complete button clicked");
    completed($(this).parent());
    console.log($(this).parent().data('completed'));
  });

}); // end Doc Ready

//GET List function
function getList(){
  clearDom();
  $.ajax({
    type: "GET",
    url: "/list",
    success: function(response){
      console.log("getList called");
      console.log(response);
      var list = response;
      var $el;
      for (var i = 0; i < response.length; i++) {
        console.log(list[i].id);
        console.log(list[i].description);
        console.log(list[i].completed);
        if (list[i].completed === false){
          $el = $('#listContainer').children().last();
          $el.append("<div class='listItem' data-completed='"+ list[i].completed + "' data-id='" +
          list[i].id + "'><p class='listText'>" + list[i].description +
          "</p><button class='deleteButton'>Delete</button><button class='completeButton'>Complete</button></div>");
        } else {
          $el = $('#completedContainer').children().last();
          $el.append("<div class='listItem' data-completed='"+ list[i].completed + "' data-id='" +
          list[i].id + "'><p class='listText'>" + list[i].description +
          "</p><button class='deleteButton'>Delete</button><button class='completeButton'>Complete</button></div>");
        }// end if/else
      } //end for loop
    }// end success
  }); //end ajax
} //end getList

//put function to change completed from false to true
function completed(div){
  console.log("in completed path");
  console.log(div.data('completed'));
  $.ajax({
    type: "PUT",
    url: "/list/completed",
    data: {id: div.data('id'), description: div.data('description'), completed: true},
    success: function (response){
      getList();
    }
  });
}

//confirmation popup box
function deleteConfirm (listId) {
  $("#container").append('<div class="deleteConfirm"><p>Are you sure you want to delete this item?</p></div>');
  $( ".deleteConfirm" ).dialog( {
    resizable: false,
    height:140,
    modal: true,
    closeOnEscape: false,
    open: function(event, ui) {
    $(".ui-dialog-titlebar-close", ui.dialog | ui).hide()
    },
    buttons: {
      Yes: function() {
        $(".deleteConfirm").remove();
        deleteFromList(listId);
      },
      No : function() {
        $(".deleteConfirm").remove();
      }
    }
  });
}

//clears the DOM
function clearDom(){
  $("#listContainer").children().children().empty();
  $("#completedContainer").children().children().empty();
}

//deletes from list db
function deleteFromList(listId){
  $.ajax({
    type: "DELETE",
    url: "list/delete/" + listId + "/",
    success: function (){
      console.log("in delete list path");
      getList();
    }
  });//end ajax
}

//function for that posts item to list on db
function postToList(){
  $.ajax({
    type: "POST",
    url: "list/newItem",
    data: {description: $('#description').val(), completed: false},
    success: function(response) {
      console.log("List item added");
      getList();
    } //end success
  });//end ajax
}
