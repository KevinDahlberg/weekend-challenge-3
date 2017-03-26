$(function(){
  console.log("JS fired up!");
  getList();

  //POST function to add new list item
  $('#listForm').on('submit', function(event){
    event.preventDefault();
    console.log("submit listForm path");
    $.ajax({
      type: "POST",
      url: "list/newItem",
      data: {description: $('#description').val(), completed: false},
      success: function(response) {
        console.log("List item added");
        getList();
      } //end success
    });//end ajax
    //submitFormClear();
  });//end listForm click event

  //delete button function
  $("#listContainer").on('click', ".deleteButton", function(){
    console.log("delete button clicked");
    var confirmDelete = confirm("Delete Note/nAre You Sure?");
    if (confirmDelete === true) {
     console.log("You pressed OK!");
     console.log($(this).parent().data('id'));
     var listId = $(this).parent().data('id');
     console.log(listId);
     $.ajax({
      type: "DELETE",
      url: "list/delete/" + listId + "/",
      success: function (){
        console.log("in delete list path");
        getList();
      }
    });//end ajax
  } else {
    console.log("You pressed Cancel!");
  }
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
      for (var i = 0; i < response.length; i++) {
        var $el = $('#listContainer').children().last();
        console.log(list[i].id);
        console.log(list[i].description);
        console.log(list[i].completed);
        $el.append("<div data-completed='"+ list[i].completed + "' data-id='" + list[i].id + "'><p>" + list[i].description + "</p><button class='deleteButton'>Delete</button><button class='completeButton'>Complete</button></div>"
          // "<div class='listDiv' id='listDiv" + i +
          //           "'<button class='deleteButton' id='deleteButton" + i +
          //           "'>Delete</button><button class='completeButton' id='completeButton" + i +
          //           "'>Complete</button></div"
                  );
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

function clearDom(){
  $("#listContainer").children().empty();
}
