var index = 2;
function insertIngredient(){
            var table=document.getElementById("ingredients");
            var row=table.insertRow(table.rows.length);
            var cell1=row.insertCell(0);
            var t1=document.createElement("span");
                t1.id = "txtIngredient"+index;
                t1.innerHTML = index+".";
                cell1.appendChild(t1);
  
            var cell2=row.insertCell(1);
            var t2=document.createElement("input");
                t2.id = "txtIngredient"+index;
                cell2.appendChild(t2);
  
            var cell3=row.insertCell(2);
            var div3 = document.createElement("div");
                div3.className = "input-group";
            var span3 = document.createElement("span");
                span3.className="input-group-addon";
                span3.innerHTML = '%';
            var t3=document.createElement("input");
                t3.id = "txtPercent"+index;
                t3.type = "number";
            cell3.appendChild(div3);
            div3.appendChild(t3);
            div3.appendChild(span3);

            var cell4=row.insertCell(3);
            var div=document.createElement("div");
              div.className = "input-group flavorMass";
            $(cell4).append(div);

            if ( $('#massCheck').is(':checked') ) {
              $('.flavorMass').each(function(){
                if ($.trim($(this).text()).length === 0){
                  var input = document.createElement("input");
                    input.className = "massInput";
                    input.type = "number";
                  var span = document.createElement("span");
                    span.className = "input-group-addon";
                    span.innerHTML ="g/mL";
                  $(this).append(input, span);
                }
              });

            }

  
      index++;

}

function deleteIngredient() {
var table = document.getElementById("ingredients");

var count = $('#ingredients tr').length;
if ( count > 2){
  var row = table.deleteRow(-1);
  index--;
}
}


function massCheck(){
  var massTd = document.getElementsByClassName('mass');
  var massHeader = document.getElementsByClassName('massHeader');
  var flavorMass = document.getElementsByClassName('flavorMass');
  if ( $('#massCheck').is(':checked') ) {
      $(massTd).removeClass('hide');
      $(massHeader).removeClass('hide');
      var massInput=document.createElement("input");
      massInput.className = "massInput";
      massInput.type = "number";
      var massSpan = document.createElement("span");
      massSpan.className = "input-group-addon";
      massSpan.innerHTML = "g/mL";
      $(flavorMass).append(massInput);
      $(flavorMass).append(massSpan);

  } else if ( ! $('#massCheck').is(':checked') ){
      $(massTd).addClass('hide');
      $(massHeader).addClass('hide');
      $(flavorMass).empty();
  }
}
