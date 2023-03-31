//https://teachablemachine.withgoogle.com/models/Ud-Atx6Av/

var dog=0 ;
var cat=0 ;
var roar=0 ;
var cow=0 ;

function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ud-Atx6Av/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
console.log(error);  
}
else{
console.log(results);
document.getElementById('result_label').innerHTML="detected voice is"+results[0].label;
document.getElementById('result_count').innerHTML="detected dog"+dog+"detected cat"+cat+"detected cow"+cow+"detected roar"+roar;

img=document.getElementById('animal_image');

if(results[0].label=="barking"){
img.src='bark.gif';
dog=dog+1;
}
else if(results[0].label=="mewing"){
    img.src='meow.gif';
    cat=cat+1;
    }
    else if(results[0].label=="roar"){
        
        roar=roar+1;
        }else if(results[0].label=="mooing"){
        
        cow=cow+1;
            }
else{img.src='listen.gif';}

}


}
