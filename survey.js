const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (song) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (meals) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {

              console.log(` Name: ${name} \n Activity: ${activity} \n Song: ${song} \n Favourite Meal: ${meal} \n Favourite food: ${meals} \n Favourite sport: ${sport} \n Superpower: ${power}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});