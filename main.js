function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KCyh-f4Hc/model.json', modelReady)
}

function modelReady() {
    classifier.classify(gotResults)
}