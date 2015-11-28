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
                cell4.className = "flavorMass";
            var t4=document.createElement("input");
                t4.id = "numMass"+index;
                t4.className = "hide";
                t4.type = "number";
                cell4.appendChild(t4);
                if ( $('#massCheck').is(':checked') ) {
                  t4.className = "";
                }

  
      index++;

}

function deleteIngredient() {
var table = document.getElementById("ingredients");

var count = $('#ingredients tr').length;
if ( count > 2){
  var row = table.deleteRow(-1);
  index--
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
      $(flavorMass).append(massInput);

  } else if ( ! $('#massCheck').is(':checked') ){
      $(massTd).addClass('hide');
      $(massHeader).addClass('hide');
      $(flavorMass).empty();
  }
}
