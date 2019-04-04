import { post } from './request';
import { getCurrentPosition } from './navigator';

export const getCountries = async ctx => {
  const data = JSON.stringify({
    query: "{ getCountry { id, name, flag, cities { id, name} }}",
  });

  return post({ ctx, data });
};

export const getCountryByUserCoordinates = async (coords) => {
  const data = JSON.stringify({
    query: `{ getCountry(coords: {latitude: ${coords.latitude}, longitude: ${coords.longitude}}) { id, name, closestCity { id, name }, cities { id, name, address, zipCode, phone, phoneExt, fax, image } }}`,
  });

  return post({ data });
}

export async function getCountry() {
  const coords = await getCurrentPosition();

  if (coords.latitude && coords.longitude) {
    const country = await getCountryByUserCoordinates(coords);

    return country;
  }
}