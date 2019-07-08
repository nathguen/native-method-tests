import * as _ from 'lodash';

describe('map', () => {
  describe('spread operator', () => {
    // spread operator used for creating a copy of an existing array
    it('should return a new array with an additional item', () => {
      const arr = ['a', 'b', 'c'];
      const d = 'd';

      const newArray = [];

      expect(['a', 'b', 'c', d]).toEqual(newArray);
    });

    it('should return a new array with two additional items', () => {
      const arr = [1, 2];
      const num3 = 3;
      const num4 = 4;

      const newArray = [];

      expect([1, 2, num3, num4]).toEqual(newArray);
    });

    it('should return a new array that combines two arrays', () => {
      const arr1 = [1, 2];
      const arr2 = [3, 4];

      const combinedArray = [];

      expect([arr1[0], arr1[1], arr2[0], arr2[1]]).toEqual(combinedArray);
    });

    it('should return a new array that combines two arrays', () => {
      const arr1 = ['a', 'b'];
      const arr2 = ['c', 'd'];

      const combinedArray = [];

      expect([arr1[0], arr1[1], arr2[0], arr2[1]]).toEqual(combinedArray);
    });
  });


  describe('map method', () => {
    // map method used for transforming an array
    it('should return a new array with updated objects', () => {
      const arr = [
        {
          id: 1,
          title: 'my title',
          views: 1
        },
        {
          id: 2,
          title: 'another title',
          views: 4
        }
      ];

      const updatedArr = [];

      expect(arr[0].views).toBe(1);
      expect(updatedArr[0].views).toBe(2);
      expect(updatedArr[0].views).toBe(arr[0].views + 1);
    });

    it('should return a new array with updated objects', () => {
      const arr = [
        {
          id: 'some-id-1',
          name: 'John Smith',
          views: 7
        },
        {
          id: 'some-id-2',
          name: 'James Conley',
          views: 12
        }
      ];

      const updatedArr = [];

      expect(arr[0].views).toBe(7);
      expect(updatedArr[0].views).toBe(9);
      expect(updatedArr[1].views).toBe(14);
      expect(updatedArr[0].views).toBe(arr[0].views + 2);
    });
  });

  describe('filter method', () => {
    // filter method should return a new array with a subset of the original items
    it('should return an array with one less item', () => {
      const arr = ['a', 'b', 'c'];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual(['a', 'c']);
    });

    it('should return an array with one item', () => {
      const arr = ['a', 'b', 'c'];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual(['b']);
    });

    it('should return an array with one less item', () => {
      const arr = [
        {
          id: 1,
          title: 'some title'
        },
        {
          id: 2,
          title: 'another title'
        },
        {
          id: 3,
          title: 'last title'
        }
      ];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual([{ id: 1, title: 'some title' }, { id: 3, title: 'last title' }]);
    });

    it('should return an array with only one item', () => {
      const arr = [
        {
          id: 1,
          title: 'some title'
        },
        {
          id: 2,
          title: 'another title'
        },
        {
          id: 3,
          title: 'last title'
        }
      ];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual([{ id: 1, title: 'some title' }]);
    });

    it(`should return an array with an item that has 'last title'`, () => {
      const arr = [
        {
          id: 1,
          title: 'some title'
        },
        {
          id: 2,
          title: 'another title'
        },
        {
          id: 3,
          title: 'last title'
        }
      ];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual([{ id: 3, title: 'last title' }]);
    });

    it(`should return an array with items that do not have 'last title'`, () => {
      const arr = [
        {
          id: 1,
          title: 'some title'
        },
        {
          id: 2,
          title: 'another title'
        },
        {
          id: 3,
          title: 'last title'
        }
      ];

      const filteredArr = [];

      expect(arr).not.toEqual(filteredArr);
      expect(filteredArr).toEqual([{ id: 1, title: 'some title' }, { id: 2, title: 'another title' }]);
    });
  });

  describe('reduce method', () => {
    // reduce method is used to create a new value from iterating over an array
    it('should return a total number, adding all of the views', () => {
      const arr = [
        {
          id: 1,
          title: 'hello',
          views: 3
        },
        {
          id: 2,
          title: 'world',
          views: 6
        },
        {
          id: 3,
          title: 'new title',
          views: 5
        }
      ];

      const total = 0;

      expect(total).toBe(arr[0].views + arr[1].views + arr[2].views);
    });

    it('should return a total number, adding all of the views with an offset of 2', () => {
      const arr = [
        {
          id: 1,
          title: 'hello',
          views: 3
        },
        {
          id: 2,
          title: 'world',
          views: 6
        },
        {
          id: 3,
          title: 'new title',
          views: 5
        }
      ];

      const total = 0;

      expect(total).toBe(arr[0].views + arr[1].views + arr[2].views + 2);
    });
  });

  describe('sort method', () => {
    it('should return an alphabetized list', () => {
      const arr = ['d', 'b', 'a', 'c'];

      const alphabetized = [];

      expect(alphabetized).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should return an alphabetized list of objects using the first name', () => {
      const arr = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith'
        },
        {
          id: 2,
          firstName: 'Sally',
          lastName: 'Jones'
        },
        {
          id: 3,
          firstName: 'Adam',
          lastName: 'Adamson' // weird last name, I know
        }
      ];

      const alphabetized = [];


      expect(alphabetized).toEqual([
        {
          id: 3,
          firstName: 'Adam',
          lastName: 'Adamson' // weird last name, I know
        },
        {
          id: 1,
          firstName: 'John',
          lastName: 'Smith'
        },
        {
          id: 2,
          firstName: 'Sally',
          lastName: 'Jones'
        }
      ]);
    });

    it('should return a reverse-alphabetized list', () => {
      const arr = ['d', 'b', 'a', 'c'];

      const alphabetized = [];

      expect(alphabetized).toEqual(['d', 'c', 'b', 'a']);
    });
  });
});
