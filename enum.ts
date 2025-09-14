// const RED_STATUS = 0;
// const GREEN_STATUS = 1;
// const YELLOW_STATUS = 2;

enum TrafficLightStatus {
  RED,
  GREEN,
  YELLOW,
}
// enum TrafficLightStatus {
//   RED = 12,
//   GREEN,
//   YELLOW,
// }

function showStatus(status: TrafficLightStatus) {
  if (status === TrafficLightStatus.RED) {
    console.log("STOP!");
  } else if (status === TrafficLightStatus.GREEN) {
    console.log("GO!");
  } else {
    console.log("WAIT!");
  }
}

// showStatus(3);
