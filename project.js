const width = 125;
const height = 125;

setDocDimensions(width, height);

const myTurtle = new bt.Turtle();
const finalLines = [];

// constants
const stretch = bt.randIntInRange(0, Math.floor(height / 4));
const eyeHeight = bt.randIntInRange(Math.floor(height / 15), height / 6);
const eyeWidth = bt.randIntInRange(Math.floor(width / 15), Math.floor(width / 8));
const radius = Math.min(height, width) / 6;

// draw head
myTurtle.jump([width * 7 / 11, height / 3]).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4);

// draw eyes
/*
const leftEye = [
  [[width/2.5, (height/2)+(stretch/2)], [width/2.5, (height/2)+(stretch/2)+eyeHeight]]
];
const rightEye = [
  [[width*1.55/2.5, height/2+(stretch/2)], [width*1.55/2.5, (height/2)+(stretch/2)+eyeHeight]]
];
*/

const leftEye = []

const eyeLines = bt.randIntInRange(4, width / 10);
for (let i = 1; i < 6; i++) {
  const dist = 8;
  const len = 6;
  leftEye.push([
    [(width / 2.8) - (dist * i), (height / 2) + (stretch / 2) + i],
    [(width / 2.8) + (dist * i) + len, (height / 2) + (stretch / 2) + i]
  ]);
  leftEye.push([
    [(width / 2.8) - (dist * i), (height / 2) + (stretch / 2) + eyeHeight - i],
    [(width / 2.8) + (dist * i) + len, (height / 2) + (stretch / 2) + eyeHeight - i]
  ]);
};

bt.join(finalLines, leftEye);
//bt.join(finalLines, rightEye);

//console.log(eyeWidth/eyeLines)

drawLines(myTurtle.lines());
drawLines(finalLines);