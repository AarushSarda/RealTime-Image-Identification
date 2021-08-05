function setup() {
    canvas = createCanvas(200,200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/grftI8OCt/model.json' , modelLoadled);
}
function draw() {
    image(video,0,0,200,200);
    classifier.classify(video,gotResult);
}
function modelLoadled(){
    console.log ("Model Loaded");
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        var confidence = results[0].confidence;
        document.getElementById("result_object_accuracy").innerHTML = (confidence*100).toFixed(0) + "%" ;
    }
}