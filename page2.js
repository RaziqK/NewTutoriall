var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var menu = document.getElementById("menu");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var NumUse = 0;
var picChooser = document.getElementById("picChooser");

bgText.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    
    if(ev.keyCode == 13) {
        
        console.log(c1.checked, c2.checked, c3.checked);
        
        if(c1.checked){
            //document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "bird"){
                document.body.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                document.body.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                document.body.style.backgroundImage = "url(imgs/3.jpeg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
            
        }
        else if(c2.checked){
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "bird"){
                prevDiv.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                prevDiv.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                prevDiv.style.backgroundImage = "url(imgs/3.jpeg)";
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
            
        }
        else if(c3.checked){
            //menu.style.backgroundColor = bgText.value;
            if(bgText.value == "bird"){
                menu.style.backgroundImage = "url(imgs/1.jpg)";
            } else if(bgText.value == "grass"){
                menu.style.backgroundImage = "url(imgs/2.jpg)";
            } else if(bgText.value == "dog"){
                menu.style.backgroundImage = "url(imgs/3.jpeg)";
            } else {
                menu.style.backgroundColor = bgText.value;
            }
        }
        else {
            alert("Choose an option");
        }
        //prevDiv.style.backgroundColor = bgText.value;
        bgText.value = "";
        
        NumUse++;
        console.log(NumUse)
        if(NumUse == 6){
            //alert("You've reached the limit. Please pay to use more")
            document.getElementById("display").innerHTML = "You've reached the limit. Please pay to use more!";
        }
            
    }
});

picChooser.addEventListener("change", function() {
    var picNum = parseInt(picChooser.value);
    if(picNum > 3) {
        picChooser.value = 1;
    }
    
    if(picNum < 1){
        picChooser.value = 3;
    }
    
    prevDiv.style.backgroundImage = "url(imgs/"+picChooser.value+".jpg)";
});