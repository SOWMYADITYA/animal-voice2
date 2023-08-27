function start(){
    navigator.mediaDevices.getUserMedia({ audio: true,video: false});
    classifier= ml5.soundClassifier ('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',{probabilityThreshhold:0.7},modelready);
}

function modelready(){
    classifier.classify(gotResult);
}
dog=0;
cat=0;
function gotResult(error,results){
    if(error)
    {
    console.log(error);
    }
else{
    console.log(results);
    if(results[0].label=="Barking"){
        animall.src='dog.gif';
        dog=dog+1;
    }
    else if(results[0].label=="Meowing"){
        animall.src='cat.gif';
        cat=cat+1;
    }
    else{
        animall.src='ears.jpg';   
    }
    
}
}   