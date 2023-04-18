const TimeMap = (() => {
  const min = 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;
  return { min, hour, day, week, month, year };
})();

const TimeTextMap = {
  [TimeMap.min]: 'minute',
  [TimeMap.hour]: 'hour',
  [TimeMap.day]: 'day',
  [TimeMap.week]: 'week',
  [TimeMap.month]: 'month',
  [TimeMap.year]: 'year',
};

const createTimeText = (time: number, standard: number, suffix: string) => {
  const duration = Math.floor(time / standard);
  return (`${duration} ${duration === 1 ? suffix : suffix + 's'} age`) 
}

const translateTimeZone = (updated_at: string) => {
  return (
    +new Date(
      parseInt(updated_at.slice(0, 4)), 
      parseInt(updated_at.slice(5, 7)) - 1, 
      parseInt(updated_at.slice(8, 10)), 
      parseInt(updated_at.slice(11, 13)), 
      parseInt(updated_at.slice(14, 16))
    )
  )
}


export const fetchRelatedTime = (updated_at: string) => {
  const seconds = (+new Date() - translateTimeZone(updated_at)) / 1000;
  return (
    Object.entries(TimeMap).reduce((text, [time, value]) => {
      if (seconds >= value)
        return (createTimeText(seconds, value, TimeTextMap[value]));
      return (text);
      }, "방금 전")
  )
}
