function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    //desenhar
    canvas.mouseReleased(classifyCanvas);
    //sintetizar a voz
    synth = window.speechSynthesis;
}

function preload(){
    classifier = ml5.imageClassifier('DoodletNet');

}
//biblioteca de esbolcos
//cixa brilhante

function clearCanvas(){
    background("white");

}

function draw(){
    //traco
    strokeWeight(13);
    //defina cor do traco
    stroke(0);

    //condicional
    //se o moude for clicado,desenhe uma linha entre a posicaoantiga  e atual do mouse

    if (mouseIsPressed){
        line(mouseX, mouseY, mouseX, mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
//resultados
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);

    var result = results[0].label;
    document.getElementById('label').innerHTML = 'Nome: ' + result.replace('_', ' ');
    
    document.getElementById('confidence').innerHTML = 'precisao: ' + Math.round(results[0].confidence * 100) + '%';


}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
//resultado

