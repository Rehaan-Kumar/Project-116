mustacheX = 0;
mustacheY = 0;

function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    Canvas = createCanvas(300, 300)
    Canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)

}

function modelLoaded() {
    console.log("Model initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        mustacheX = results[0].pose.nose.x-15
        mustacheY = results[0].pose.nose.y
        console.log(mustacheX, mustacheY)
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, mustacheX, mustacheY, 30, 30)
}

function take_snapshot() {
    save('my_filter.jpg')
}