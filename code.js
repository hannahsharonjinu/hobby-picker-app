var freeTime;
var preferredCost;
var interestArea;

onEvent("interestInput", "change", function( ) {
  interestArea = getText("interestInput");
  freeTime = getNumber("freeTimeInput");
  preferredCost = getNumber("costInput");
  updateScreen();
});

onEvent("freeTimeInput", "change", function( ) {
  interestArea = getText("interestInput");
  freeTime = getNumber("freeTimeInput");
  preferredCost = getNumber("costInput");
  updateScreen();
});

onEvent("costInput", "change", function( ) {
  interestArea = getText("interestInput");
  freeTime = getNumber("freeTimeInput");
  preferredCost = getNumber("costInput");
  updateScreen();
});

// this function checks which inputs are given/set by the user and makes the app suggest a hobby that suits the user's requirements
function updateScreen() {
  if (interestArea == "Art" && freeTime < 5 && preferredCost < 50) {
    setText("outputLabel", "Air dry clay projects would be fun!");
  } else if (interestArea == "Art" && freeTime < 5 && preferredCost > 50) {
    setText("outputLabel", "Try doing oil painting!");
  } else if (interestArea == "Art" && freeTime > 5 && preferredCost < 50) {
    setText("outputLabel", "You should start sketching!");
  } else if (interestArea == "Art" && freeTime > 5 && preferredCost > 50) {
    setText("outputLabel", "Find a pottery studio and start learning pottery!");
  } else if (interestArea == "Fitness" && freeTime < 5 && preferredCost < 50) {
    setText("outputLabel", "Yoga is beginner-friendly and inexpensive to try!");
  } else if (interestArea == "Fitness" && freeTime < 5 && preferredCost > 50) {
    setText("outputLabel","Try setting up a home gym and start working out!");
  } else if (interestArea == "Fitness" && freeTime > 5 && preferredCost < 50) {
    setText("outputLabel","Find a gym nearby and include workouts in your routine!");
  } else if (interestArea == "Fitness" && freeTime > 5 && preferredCost > 50) {
    setText("outputLabel","Go join a pilates group!");
  } else if (interestArea == "STEM" && freeTime < 5 && preferredCost < 50) {
    setText("outputLabel","Learn programming using online websites and videos!");
  } else if (interestArea == "STEM" && freeTime < 5 && preferredCost > 50) {
    setText("outputLabel","Try building simple robots using kits!");
  } else if (interestArea == "STEM" && freeTime > 5 && preferredCost < 50) {
    setText("outputLabel","Watch videos and learn new math concepts!");
  } else if (interestArea == "STEM" && freeTime > 5 && preferredCost > 50) {
    setText("outputLabel","Learn electronics and work on diy projects!");
  } else {
    
  }
}

  
  




