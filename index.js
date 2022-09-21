
function parseScores(scoresString) {

   var inString = scoresString.split(" ");
   return inString;

}

function buildDistributionArray(scoresArray) {

   var x = 0;
   var distributeArray = new Array(5);

   distributeArray[0] = 0;
   distributeArray[1] = 0;
   distributeArray[2] = 0;
   distributeArray[3] = 0;
   distributeArray[4] = 0;

while (x < scoresArray.length) {

   if (scoresArray[x] >= 80 && scoresArray[x] <=89) {

      distributeArray[1]++;
   }

   else if (scoresArray[x] >= 90) {

      distributeArray[0]++;
   }

   else if(scoresArray[x] >= 70 && scoresArray[x] <=79) {

      distributeArray[2]++;
   }


   else if (scoresArray[x] >= 60 && scoresArray[x] <=69) {

      distributeArray[3]++;
   }

   else if (scoresArray[x] <= 59 && scoresArray[x]>0) {

      distributeArray[4]++;
   }

   x++;
}

return distributeArray;

}

function setTableContent(userInput) {

   var myTable = document.getElementById("distributionTable");

   if (userInput.length>0) {

      var parsedScores = parseScores(userInput);

      var buildArray = buildDistributionArray(parsedScores);


      var row = myTable.insertRow(0);

      var row2 = myTable.insertRow(1);

      var row3 = myTable.insertRow(2);


      var cell1 = row2.insertCell(0);

      var cell2 = row2.insertCell(1);

      var cell3 = row2.insertCell(2);

      var cell4 = row2.insertCell(3);

      var cell5 = row2.insertCell(4);


      cell1.innerHTML = "A";

      cell2.innerHTML = "B";

      cell3.innerHTML = "C";

      cell4.innerHTML = "D";

      cell5.innerHTML = "F";

      var graphValueArray = [];

      var occuranceArray = [];

      for (index = 0; index < 5; index++) {

         occuranceArray[index] = row3.insertCell(index);

         occuranceArray[index].innerHTML = buildArray[index];

         graphValueArray[index] = row.insertCell(index);

         var styleClass = "bar"+index;

         var heightValue = (buildArray[index] * 10) + "px";

         graphValueArray[index].innerHTML = "<div style='height:"+ heightValue+"' class='"+styleClass+"'></div>";
      }
   }

   else {

      var emptyRow = myTable.insertRow(0);
      emptyRow.innerHTML = "No graph to display";
   }

}



setTableContent("45 78 98 83 86 99 90 59");

