// IIFE
(function() {
  // shorthand for $(document).ready
  $(function() {
    var numIngredient = 2;
    $("#addRow").click(function() {
      $("#ingredients tr:last").clone().find('input').val('').end().insertAfter("#ingredients tr:last");
      $("#ingredients tr:last").find('.numIngredient').html(numIngredient + ".");
      numIngredient++;
    });
    var deleteIngredient = function deleteIngredient() {
      var table = document.getElementById("ingredients");
      var count = $('#ingredients tr').length;
      if (count > 2) {
        var row = table.deleteRow(-1);
        numIngredient--;
      }
    };
    $("#deleteRow").click(deleteIngredient);
    var massCheck = function massCheck() {
      var massTd = document.getElementsByClassName('mass');
      var massHeader = document.getElementsByClassName('massHeader');
      var flavorMass = document.getElementsByClassName('flavorMass');
      if ($('#massCheck').is(':checked')) {
        $(massTd).removeClass('hide');
        $(massHeader).removeClass('hide');
        var massInput = document.createElement("input");
        massInput.className = "massInput";
        massInput.type = "number";
        var massSpan = document.createElement("span");
        massSpan.className = "input-group-addon";
        massSpan.innerHTML = "g/mL";
        $(flavorMass).append(massInput);
        $(flavorMass).append(massSpan);
      } else if (!$('#massCheck').is(':checked')) {
        $(massTd).addClass('hide');
        $(massHeader).addClass('hide');
        $(flavorMass).empty();
      }
    };
    $('#massCheck').change(massCheck);

    var calculate = function calculate(){
      var targetNic = $("#targetNic").val(),
          targetVG = $("#targetVG").val(),
          targetPG = $("#targetPG").val(),
          total = $("#total").val();
      $('#output').removeClass("hide");
      $('#output > tbody > tr').each(function(){
        var targets = new Object();
        targets.identity = $("td", this).first().text();
        targets.percent = $(this).find("input").valueOf();
        console.log("output " + targets.identity + " " + targets.percent);

      });
      



      if ($('#massCheck').is(':checked')) {
        var massNic = $("#massNic").val(),
            massVG = $("#massVG").val(),
            massPG = $("#massPG").val();
      }

    };
    $('#calculate').click(calculate);

    
  });
}());
