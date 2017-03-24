$(function(){
  console.log("JS fired up!");
  getList();

  //GET List function
  function getList(){
    $.ajax({
      type: "GET",
      url: "/list",
      success: function(response){
        console.log("getList called");
        console.log(response);
        var list = response;
        for (var i = 0; i < response.length; i++) {
          var $el = $('#listContainer').last();
          $el.append("<div><p>" + list[i].description + "</p><button class='deleteButton'>Delete</button><button class='completeButton'>Complete</button></div>"
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
    console.log($(this));
    });
    //on "click" statement to activate
    //insert for loop to append item to DIV in getList
    //insert DELETE ajax call
});



//item complete button
function itemComplete(){
  //on "click" statement
  //for loop to add in getList
  //change CSS here or in CSS file .toggle
}
