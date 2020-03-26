$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if ( (side1+side2)<=side3 || (side1+side3)<=side2 || (side3+side2)<=side1){
      $(".name").empty().append("impossible triange! Try(angle) again")
    } else if(side1 === side2 && side2 === side3) {
      $(".name").empty().append("equalateral triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3){
      $(".name").empty().append("isosceles triangle");
    } else {
      $(".name").empty().append("scalene triangle");
    } 
   
    event.preventDefault();
  })


// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle 
// is less than or equal to the length of the third side.