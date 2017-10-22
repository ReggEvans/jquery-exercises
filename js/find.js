// ===================================================== //
// =========| jQuery for the find.html page | ========== //
// ===================================================== //

// Run all code inside anonymous function once document is ready
$(document).ready(function(){

  // =================
  // GETTING ELEMENTS
  // =================
  // FIND all p tags inside of .parent with jQuery
  $(".parent").find("p").css("background", "lightblue")

  // FIND specific id inside of .parent with jQuery
  $(".parent").find("#make-me-red").css("color", "red")

  // .children loops through all children of parent element to find .find-me
  $(".parent").children(".find-me").css("background", "lightgreen")

  // ================
  // GETTING PARENTS
  // ================
  // Using .parent() to grab the entire parent element of .user
  $(".user").parent().css("background", "lightgreen")
  // This method will only grab the immediate parent element 1 level up
  // Will not go up several levels
  // To move up further you need .parents() plural and specify the name of the parent element/class
  // Example:
  // $$(".user").parents(".parent").css("background", "lightgreen")
  // If parents() is not defined it will select all parents including <HTML>

  // ==================
  // PREVIOUS AND NEXT
  // ==================
  $(".second").prev().css("background", "lightgreen")
  $(".second").next().css("background", "lightblue")

  // ==================
  // EQ METHOD
  // ==================
  // Grabbing the second element inside .list
  $(".list li:eq(1)").css("background", "lightgreen")

  // Grabbing the first parent of .list
  $(".list").parents().eq("0").css("color", "red")



  // =============================
  // First, Last, Filter, and NOT
  // =============================
  // Changes the first instance of element
  $(".div").first().css("background", "lightgreen")
  // Changes the last instance of element
  $(".div").last().css("background", "lightblue")
  // Changes all specified elements EXCEPT
  $(".div").not("#other").css("color", "red")
  // Changes only element specified by filter 
  $(".div").filter("#other").css("color", "orange")



})
