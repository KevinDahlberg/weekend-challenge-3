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
      }// end success
    }); //end ajax
  } //end getList

  //POST function to add new book
  $('#listForm').on('submit', function(event){
    event.preventDefault();
    console.log("submit listForm path");
    $.ajax({
      type: "POST",
      url: "",
      data: {title: $('#title').val(), author:$('#author').val(), publisher: $('#publisher').val(), year: $('#year').val()},
      success: function(response) {
        console.log("List item added");
        getList();
      } //end success
    });//end ajax
    //submitFormClear();
  });//end listForm click event
});
