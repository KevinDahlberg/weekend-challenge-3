$(function(){
  console.log("JS fired up!");
  getList();

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
          $el.append("<div id=div"+ list[i].id + " data-id='" + list[i].id + "'><p>" + list[i].description + "</p><button class='deleteButton'>Delete</button><button class='completeButton'>Complete</button></div>"
            // "<div class='listDiv' id='listDiv" + i +
            //           "'<button class='deleteButton' id='deleteButton" + i +
            //           "'>Delete</button><button class='completeButton' id='completeButton" + i +
            //           "'>Complete</button></div"
                    );
         } //end for loop
      }// end success
    }); //end ajax
  } //end getList

  //POST function to add new list item
  $('#listForm').on('submit', function(event){
    event.preventDefault();
    console.log("submit listForm path");
    $.ajax({
      type: "POST",
      url: "list/newItem",
      data: {description: $('#description').val()},
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
    });
    //on "click" statement to activate
    //insert for loop to append item to DIV in getList
    //insert DELETE ajax call
}); // end Doc Ready



//item complete button
function itemComplete(){
  //on "click" statement
  //for loop to add in getList
  //change CSS here or in CSS file .toggle
}

function clearDom(){
  $("#listContainer").children().empty();
}
