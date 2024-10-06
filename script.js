var city = prompt ("Enter a City Name"); 
var Cities = ["karachi" , "lahore" , "islamabad" , "larkana" , "Dadu"]
 
var matchFound = "no";
 for (var i = 0; i <= 4; i++){
    if (Cities[0] === city) {
      matchFound = "yes";
      alert("Mobile Nikal");
    }
    else if (Cities[1] === city) {
        matchFound = "yes";
        alert("Lahore da Pawa Akhtar Lawa");
      }
      else if (Cities[2] === city) {
        matchFound = "yes";
        alert("Burgers");
      }
      else if (Cities[3] === city) {
        matchFound = "yes";
        alert("Tuhnjo Nalo Cha Ahe");
      }
      else if (Cities[4] === city) {
        matchFound = "yes";
        alert("Kabhi Haweli pe aao na");
      }

}
  if (matchFound === "no") {
    alert("It's not on the list");
 }
