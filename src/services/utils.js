import noImageFound from '../assets/img/no_image_found.png';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function areArraysEmpty(arrays) {
  return arrays.every(array => {
    return !array || array.length === 0;
  });
}

export function isObjectEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

export function getWiderImage(images) {
  if (!images || images.length === 0) return noImageFound;
  let widerImage = images[0];
  images.forEach(image => {
    image = Math.max(widerImage.width, image.width);
  });
  return widerImage.url;
}

export function getItemImage(images, minSize, maxSize) {
  if (!images || images.length === 0) return noImageFound;
  const filteredImages = images.filter(
    ({ width }) => width > minSize && width < maxSize
  );
  return filteredImages.length === 0 ? images[0].url : filteredImages[0].url;
}

/**
 * it returns an object with the format required to display data on
 * ImageGridList Component.
 * @param {Array} items Array of Album, Track, Playlist or Artist objects.
 * @param [Number=250] minSize minimum size of the image to show in the GridList
 * Component.
 * @param [Number=400] maxSize maximum size of the image to show in the GridList
 * Component.
 */
export function filterDataToDisplay(items, minSize = 250, maxSize = 400) {
  if (!items || items.length === 0) return [];
  return items.map(item => {
    const { name: title, images, uri, id, type, album } = item;
    const imgUrl =
      type !== 'track'
        ? getItemImage(images, minSize, maxSize)
        : getItemImage(album.images, minSize, maxSize);
    return {
      title,
      imgUrl,
      uri,
      id
    };
  });
}

export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
