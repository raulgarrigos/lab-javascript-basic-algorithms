console.log("I'm ready");

// Iteration 1: Names and Input

let hacker1 = "rodolfo";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "ramón";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops

let hacker1Cap = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Cap += hacker1[i].toUpperCase() + " ";
  console.log(hacker1Cap);
}

let hacker2Reverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
  console.log(hacker2Reverse);
}

for (let i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else {
    console.log("What?! You both have the same name?");
  }
}

// Bonus Time!

// Bonus 1:

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a congue nunc, eget malesuada diam. Integer tortor sapien, consequat elementum pulvinar at, consectetur sit amet est. Cras efficitur dapibus tortor, vel vestibulum enim bibendum ut. Pellentesque mi ipsum, venenatis et ex ac, pulvinar facilisis tortor. Nam rhoncus viverra purus, eu ullamcorper arcu tempor a. Proin id feugiat lorem. Etiam et bibendum dui. Curabitur augue arcu, dignissim at eros ac, imperdiet dictum metus. Suspendisse pretium dignissim varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu mauris orci. Duis mollis leo tortor, in tempor risus malesuada porttitor. Vestibulum rutrum ut nibh in dapibus. Sed tincidunt neque sit amet turpis posuere, a egestas nibh tristique. Phasellus sagittis velit sit amet tortor laoreet, eu luctus justo sollicitudin. Nunc posuere rhoncus mauris sit amet posuere. Integer sed molestie arcu. Nam imperdiet congue dui nec suscipit. Nulla et pretium quam, et porttitor lacus. Quisque et nulla vel odio molestie fringilla a rhoncus turpis. Vivamus eget arcu lorem. Pellentesque egestas rhoncus ornare. Duis tempor vulputate lacus in ultrices. Phasellus tempor turpis vitae mi varius, vel mollis nunc varius. Ut tellus ante, fringilla ac sem vitae, venenatis laoreet metus. Morbi non arcu ornare, ultricies erat ut, pulvinar nunc. Suspendisse eget rutrum diam, vitae molestie ex. Mauris libero elit, faucibus nec ipsum eget, vehicula eleifend arcu. Donec blandit at velit tempor vulputate. Nulla suscipit metus nec dapibus convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

let words = longText.split(" ");

let countWords = 0;

let countEt = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    countWords++;
  }
}

console.log(countWords);

for (let i = 0; i < longText.length; i++) {
  let word = words[i];

  if (word === "et") {
    countEt++;
  }
}

console.log(countEt);
