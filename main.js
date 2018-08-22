const { getUserInput, rl } = require("./readline-helper");
const Controller = require("./src/controller/controller");

const main = async () => {
  const controller = new Controller();

  // TODO test for while loop?
  let isPlateauCreated = false;
  while (!isPlateauCreated) {
    const plateauSizeInput = await getUserInput(
      "Specify the size of the Mars plateau (e.g. 5 5):"
    );
    try {
      controller.savePlateauInformation(plateauSizeInput);
      isPlateauCreated = true;
    } catch (err) {
      console.log('-->', err.message);
    }
  }

  // TODO test for while loop?
  let toCreateAnotherRover = true;
  while (toCreateAnotherRover) {
    let isInitialPositionAccepted = false;
    while (!isInitialPositionAccepted) {
      const initialPosition = await getUserInput(
        "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
      );

      // TODO: include the functions that you've implemented for this kata
      try {
        controller.addNewRoverWithInitialPosition(initialPosition);
        isInitialPositionAccepted = true;
      } catch (error) {
        console.log('-->', error.message);
      }
    }

    let isInstructionAccepted = false;
    while (!isInstructionAccepted) {
      const instructions = await getUserInput(
        "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
      );

      // TODO: include the functions that you've implemented for this kata
      try {
        controller.sendInstructionsToLastAddedRover(instructions);
        isInstructionAccepted = true;
      } catch (error) {
        console.log(error.message);
      }
    }

    const anotherRover = await getUserInput("Another mars rover (Y/N)? ");
    toCreateAnotherRover = anotherRover.toUpperCase() === "Y";
  }

  console.log(
    "The final coordinates of the mars rover is: \n",
    controller.printRoverPositions()
  );

  rl.close();
};

main();
