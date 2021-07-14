export const getFormattedTime = (timeInMinutes) => {
  const hours = Math.trunc(timeInMinutes / 60);

  const humanisedHours = hours > 0 ? `${hours}h` : '';
  const humanisedMinutes = `${timeInMinutes - hours * 60}m`;

  return `${humanisedHours} ${humanisedMinutes}`;
};

export const getHumanisedPlayerTime = (timeInSeconds) => {
  if (timeInSeconds === null) {
    return;
  }

  const timestamp = Math.floor(timeInSeconds);

  const hours = Math.floor(timestamp / 60 / 60);
  const minutes = Math.floor(timestamp / 60) - (hours * 60);
  const seconds = timestamp % 60;

  const humanisedHours = hours.toString().padStart(2, '0');
  const humanisedMinutes = minutes.toString().padStart(2, '0');
  const humanisedSeconds = seconds.toString().padStart(2, '0');

  if (hours < 1) {
    return [humanisedMinutes, humanisedSeconds].join(':');
  }

  return [humanisedHours, humanisedMinutes, humanisedSeconds].join(':');
};
