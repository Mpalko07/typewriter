const sentence = (text) => {
let delay = 0;

  for (const char of text) { 
    setTimeout(() => {
    process.stdout.write(char); + '\n'
  }, delay);
  delay += 50;
  } 
};

const text = "hello there from lighthouse labs";
sentence(text);