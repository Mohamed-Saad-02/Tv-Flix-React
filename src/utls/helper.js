export function formatDate(date) {
  return date.split("-")[0];
}

export function formatAverage(average) {
  return average.toFixed(1);
}

export function formatTime(value) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  return `0${hours}h : ${minutes >= 10 ? minutes : `0${minutes}`}m`;
}
