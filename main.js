const { getUserInput, rl } = require("./readline-helper");
const Controller = require('./src/Controller/Controller');

const main = async () => {
  const controller = new Controller();

  let isPlateauCreated = false;
  while(!isPlateauCreated) {
    const plateauSizeInput = await getUserInput(
      "Specify the size of the Mars plateau (e.g. 5 5):"
    );
    try {
      controller.savePlateauInformation(plateauSizeInput);
      isPlateauCreated = true;
    } catch (err) {
      console.error(err.message);
    }
  }

  const y = await getUserInput(
    "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
  );
  console.log("y is", y);

  const z = await getUserInput(
    "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
  );
  console.log("z is", z);

  // TODO: include the functions that you've implemented for this kata
  // TODO: validate instructions
  controller.addNewRoverWithInitialPosition(y);
  controller.sendInstructionsToLastAddedRover(z);

  console.log(
    "The final coordinates of the mars rover is: <replace with the output of your program>"
  );

  rl.close();
};

main();
