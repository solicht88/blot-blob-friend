const width = 125;
const height = 125;

setDocDimensions(width, height);

const myTurtle = new bt.Turtle();
const finalLines = [];

// constants
const stretch = bt.randIntInRange(0, 35);
const radius = Math.min(height, width) / 6;

// draw head
myTurtle.jump([width * 7 / 11, height / 3]).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4);

// draw eyes
const leftEye = [
  [
    [width / 2.5, (height / 2) + (stretch / 2)],
    [width / 2.5, (height / 2) + (stretch / 2) + 8]
  ]
];
const rightEye = [
  [
    [width * 1.55 / 2.5, height / 2 + (stretch / 2)],
    [width * 1.55 / 2.5, (height / 2) + (stretch / 2) + 8]
  ]
];
bt.join(finalLines, leftEye);
bt.join(finalLines, rightEye);

drawLines(myTurtle.lines());
drawLines(finalLines);