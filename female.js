lipstickX = 0;
lipstickY = 0;

function preload() {
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
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
        lipstickX = results[0].pose.nose.x-11
        lipstickY = results[0].pose.nose.y+13
        console.log(lipstickX, lipstickY)
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(lipstick, lipstickX, lipstickY, 20, 20)
}

function take_snapshot() {
    save('my_filter.jpg')
}