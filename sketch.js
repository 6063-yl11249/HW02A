function setup() {
    createCanvas(600, 600)
    background(0)
}

function draw() {
    noStroke()
    fill(237,215,183)
    quad(0, 0, 300, 0, 180, 300, 0, 300)
    quad(420, 300, 600, 300, 600, 600, 300, 600)
}
