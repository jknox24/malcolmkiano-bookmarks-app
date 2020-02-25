const MIDNIGHT = 0;
const SUNRISE = 4;
const MORNING = 8;
const NOON = 12;
const AFTERNOON = 16;
const EVENING = 20;

function getColors(){
  let colors = [];

  let hour = new Date().getHours();
  if (hour >= MIDNIGHT && hour < SUNRISE) {
    colors = ['#000428', '#24243e'];
  } else if (hour >= SUNRISE && hour < MORNING ) {
    colors = ['#159957', '#155799'];
  } else if (hour >= MORNING && hour < NOON) {
    colors = ['#56CCF2', '#2F80ED'];
  } else if (hour >= NOON && hour < AFTERNOON) {
    colors = ['#3a7bd5', '#3a6073'];
  } else if (hour >= AFTERNOON && hour < EVENING) {
    colors = ['#2c3e50', '#3498db'];
  } else {
    colors = ['#1D4350', '#A43931'];
  }

  return colors;
}

export default {
  getColors
};