function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let time = 0;
  const cache = new Map();

  for (const cityRaw of cities) {
    const city = cityRaw.toLowerCase();

    if (cache.has(city)) {
      cache.delete(city);
      cache.set(city, true);
      time += 1;
    } else {
      if (cache.size === cacheSize) {
        const lruKey = cache.keys().next().value;
        cache.delete(lruKey);
      }
      cache.set(city, true);
      time += 5;
    }
  }

  return time;
}