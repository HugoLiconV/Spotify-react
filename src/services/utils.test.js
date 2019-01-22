import * as utils from './utils';

describe('numberWithComas Function', () => {
  it('should return number with comas', () => {
    expect(utils.numberWithCommas(1)).toBe('1');
    expect(utils.numberWithCommas(1234)).toBe('1,234');
    expect(utils.numberWithCommas(123456)).toBe('123,456');
  });
});

describe('areArraysEmpty', () => {
  it('should return false when one or more arrays are empty', () => {
    expect(utils.areArraysEmpty([1], [2], [])).toBeFalsy();
  });

  it('should return true when all arrays are empty', () => {
    expect(utils.areArraysEmpty([], [], [])).toBeTruthy();
  });
});

describe('isObjectEmpty function', () => {
  it('should return true when an object is emtpy', () => {
    expect(utils.isObjectEmpty({})).toBeTruthy();
  });

  it('should return false when an object isnt emtpy', () => {
    expect(utils.isObjectEmpty({ a: 1 })).toBeFalsy();
  });

  it('should return true when an object null or undefined', () => {
    expect(utils.isObjectEmpty(null)).toBeTruthy();
    expect(utils.isObjectEmpty(undefined)).toBeTruthy();
  });
});

describe('getWiderImage method', () => {
  it('should return no_image_found when an empty array is passed', () => {
    const result = utils.getWiderImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when undefined is passed', () => {
    const result = utils.getWiderImage();
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
    const result = utils.getWiderImage(images);
    expect(result).toBe('a.png');
  });
});

describe('getItemImage method', () => {
  it('should return no_image_found when passing undefined', () => {
    const result = utils.getItemImage();
    expect(result).toBe('no_image_found.png');
  });

  it('should return no_image_found when passing an emtpy array', () => {
    const result = utils.getItemImage([]);
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
    const result = utils.getItemImage(images, 200, 350);
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
    const result = utils.getItemImage(images, 700, 800);
    expect(result).toBe('a.png');
  });
});

describe('millisToMinutesAndSeconds', () => {
  it('should convert milliseconds to seconds', () => {
    expect(utils.millisToMinutesAndSeconds(2000)).toBe('0:02');
    expect(utils.millisToMinutesAndSeconds(20000)).toBe('0:20');
    expect(utils.millisToMinutesAndSeconds(200000)).toBe('3:20');
  });
});
