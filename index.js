#!/usr/bin/env node

const CliFrames = require("cli-frames");
const fs = require("fs");

const stdinBuffer = fs.readFileSync(0);
const stdin = stdinBuffer.toString().trim();

const headBorder = new Array(stdin.length + 2).fill("_").join("");
const footBorder = new Array(stdin.length + 2).fill("-").join("");
const speechBubble = ` ${headBorder}
< ${stdin} >
 ${footBorder}`;

const frames = [
  `${speechBubble}
       \\   ^__^
        \\  (oo)\\_______
           (__)\\       )\\/\\
               ||----w |
               ||     ||
`,
  `${speechBubble}
       \\   ^__^
        \\  (oo)\\_______
           (__)\\       )\\__
               //----w /
               \\\\     \\\\
`
];

new CliFrames({
  frames: ["0", "1"],
  autostart: {
    delay: 0,
    end: function(err, data) {
      const animation = new CliFrames();
      animation.load(frames);
      animation.start({ repeat: true, delay: 500 });
    }
  }
});
