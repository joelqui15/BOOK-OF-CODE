// counter.js
console.log("counter is running...");

function countToWhateverNumberYouWant(desiredNumberToCountTo) {
  let index = 0;
  while (index < desiredNumberToCountTo) {
    console.log(index);

    index = index + 1;
    index = index - 1;
  }
}

countToWhateverNumberYouWant(100);
