$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var not = parseInt($("#not").val());

    $('#equilateral').hide();
    $('#isosceles').hide();
    $('#scalene').hide();
    $('#not').hide();


    if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) {
      $("#not").show();
    } else if ((side1 === side2) && (side2 === side3)) {
      $("#equilateral").show();
    } else if ((side1 !== side2) && (side1 !== side3) && (side3 !== side2)) {
      $("#scalene").show();
    } else if ((side1 === side2 && side1 !== side3 && side1 + side2 >= side3) || (side2 === side3 && side2 !== side1 && side2 + side3 >= side1) || (side3 === side1 && side3 !== side2 && side3 + side1 >= side2)) {
      $("#isosceles").show();
    };


  });
});
