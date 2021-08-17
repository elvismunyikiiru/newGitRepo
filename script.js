//window.location.replace("http://stackoverflow.com");

var url = "https://su8code.github.io/newGitRepo/myJson.json";
   var data;
   var numCtx = 0;
  
var jsonFile = new XMLHttpRequest();
    jsonFile.open("GET",url,true);    
    jsonFile.send();

    jsonFile.onreadystatechange = function() {
        if (jsonFile.readyState== 4 && jsonFile.status == 200) {
            //document.getElementById("id-of-element").innerHTML = jsonFile.responseText;
             data = JSON.parse(jsonFile.responseText);
             numCtx = data.number;
            //console.log(data.number)

/*
            const links = document.getElementsByTagName('a');

            for(var i; i<links.length; l++){
               
            } */
        }
        else{
           // console.log("Json parse Error");
        }

        for(var a=0;a<numCtx; a++){
            console.log(data.savedChannels[a]);
        }

     }
