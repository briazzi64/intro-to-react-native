const stores = [
  {
    name: "StirTrek Cleveland",
    latitude: 41.4993,
    longitude: 81.6944
  },
  {
    name: "StirTrek Las Vegas",
    latitude: 36.1716,
    longitude: 115.1391
  },
  {
    name: "StirTrek Orlando",
    latitude: 28.5384,
    longitude: 81.3789
  },
];

function toRad(angle) {
  return (angle * Math.PI) / 180;
}

function computeDistance([lat1, long1], [lat2, long2]) {
  const lat1InRad = toRad(lat1);
  const long1InRad = toRad(long1);
  const lat2InRad = toRad(lat2);
  const long2InRad = toRad(long2);

  const earthRadiusInMiles = 3961;
  const distance =
    earthRadiusInMiles *
    Math.acos(
    Math.sin(lat1InRad) * Math.sin(lat2InRad) +
      Math.cos(lat1InRad) * Math.cos(lat2InRad) * Math.cos(long2InRad - long1InRad)
    );

  return Math.round(distance * 10) / 10;
}

export default function findClostestStore(userCoords) {
  const storesWithDistance = stores.map((store) => {
    return {
      ...store,
      distance: computeDistance(userCoords, [store.latitude, store.longitude])
    };
  });

  const locationsSortedByDistance = storesWithDistance.sort(function (a, b) {
    if (a.distance > b.distance) {
      return 1;
    } else if (a.distance < b.distance) {
      return -1;
    } else {
      return 0;
    }
  });

  return locationsSortedByDistance[0];
}