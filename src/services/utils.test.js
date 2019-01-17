import { getWiderImage, getItemImage } from './utils';

describe('getWiderImage method', () => {
  it('should return no_image_found when an empty array is passed', () => {
    const result = getWiderImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when undefined is passed', () => {
    const result = getWiderImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return wider image when passing an array of images', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = getWiderImage(images);
    expect(result).toBe('a.png');
  });
});

describe('getItemImage method', () => {
  it('should return no_image_found when passing undefined', () => {
    const result = getItemImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when passing an emtpy array', () => {
    const result = getItemImage([]);
    expect(result).toBe('no_image_found.png');
  });

  it('should return image with expected size', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = getItemImage(images, 200, 350);
    expect(result).toBe('b.png');
  });

  it('should return first image from array when doesnt find one with expected size', () => {
    const images = [
      {
        height: 640,
        url: 'a.png',
        width: 640
      },
      {
        height: 300,
        url: 'b.png',
        width: 300
      },
      {
        height: 64,
        url: 'c.png',
        width: 64
      }
    ];
    const result = getItemImage(images, 700, 800);
    expect(result).toBe('a.png');
  });
});
