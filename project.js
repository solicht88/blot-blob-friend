const width = 125;
const height = 125;

setDocDimensions(width, height);

const myTurtle = new bt.Turtle();
const finalLines = [];

// constants
const stretch = bt.randIntInRange(0, Math.floor(height / 4));
const radius = Math.min(height, width) / 6;

const eyeHeight = bt.randIntInRange(Math.floor(height / 15), height / 6);
const eyeWidth = bt.randIntInRange(Math.floor(width / 40), Math.floor(width / 20));
const eyeLines = bt.randIntInRange(Math.floor(height/15), Math.floor(height/4));

// draw head
myTurtle.jump([width * 7 / 11, height / 3]).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4).arc(90, radius).forward(stretch)
  .arc(90, radius).forward(width / 4);

// draw eyes
const eyes = []

for (let i = 1; i < eyeLines; i++) {
  var dist = i/2;
  if (i > eyeLines/2) {
    dist = (eyeLines - i)/2;
  };
  const len = eyeWidth;
  eyes.push(bt.catmullRom([
    [(width / 2.5), (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i)], 
    [(width / 2.5) + bt.randIntInRange(1, len), (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i) + bt.randIntInRange(-width/40, width/40)],
    [(width / 2.5) + dist + len, (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i)]
  ]), 
  bt.catmullRom([
    [(width / 2.5), (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i)],
    [(width / 2.5) - bt.randIntInRange(1, len), (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i) + bt.randIntInRange(-width/40, width/40)],
    [(width / 2.5) - dist - len, (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i)]
    ]),
  bt.catmullRom([
    [(width * 1.55 / 2.5), (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i)], 
    [(width * 1.55 / 2.5) + bt.randIntInRange(1, len), (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i) + bt.randIntInRange(-width/40, width/40)],
    [(width * 1.55 / 2.5) + dist + len, (height / 2) + (stretch / 2) + (eyeHeight / eyeLines * i)]
  ]),
  bt.catmullRom([
    [(width * 1.55 / 2.5), (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i)],
    [(width * 1.55 / 2.5) - bt.randIntInRange(1, len), (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i) + bt.randIntInRange(-width/40, width/40)],
    [(width * 1.55 / 2.5) - dist - len, (height / 2) + (stretch / 2) + eyeHeight - (eyeHeight / eyeLines * i)]
  ]));
};

bt.join(finalLines, eyes);

drawLines(myTurtle.lines());
drawLines(finalLines);