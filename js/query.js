// ====================================================== //
// ====| Javascript/jQuery for the query.html page | ==== //
// ====================================================== //

// Run all code inside anonymous function once document is ready
$(document).ready(function(){

  // -----------------------------------------------------------------------
  // VANILLA QUERY SELECTING
  //------------------------------------------------------------------------
  // To select all 'p' tags
  console.log('Vanilla P Tag Selector:', document.querySelectorAll('p'))

  // To select class
  console.log('Vanilla Class Selector:', document.querySelector('.list'))

  // To select id
  console.log('Vanilla ID Selector:', document.querySelector('#text'))

  // To select form
  console.log('Vanilla form Selector:', document.querySelector('form'))

  // -----------------------------------------------------------------------
  // JQUERY QUERY SELECTING
  //------------------------------------------------------------------------
  // To select all 'p' tags with jQuery
  console.log('JQuery P Tag Selector:', $('p'))

  // Select all element on the page at once with jQuery
  console.log('JQuery Class Selector:', $('ul, p'));

  // Change the font size of all elements with jQuery
  $('ul, p, form').css('fontSize', '30px');

  // Highlight List Class with jQuery
  $(".list").css("background", "yellow")

  // Highlight Text ID with jQuery
  $("#text").css("background", "lightblue")

  // Highlight input fields wtih jQuery
  $("input[type='text']").css("background", "lightblue")
  $("input[type='password']").css("background", "lightgreen")

  // Highlighting children with jQuery
  $(".new-list li:even").css("background", "lightblue")
  $(".new-list li:odd").css("background", "lightgreen")


})
