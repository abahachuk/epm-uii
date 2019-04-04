export function getCurrentPosition(options) {
  let promise = new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not exist in navigator object'));
    }

    return navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

  return promise
    .then(position => position.coords)
    .catch(error => error);
}
