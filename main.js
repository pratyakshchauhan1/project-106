//https://teachablemachine.withgoogle.com/models/Ud-Atx6Av/

function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ud-Atx6Av/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
console.log('gotResults');
}
