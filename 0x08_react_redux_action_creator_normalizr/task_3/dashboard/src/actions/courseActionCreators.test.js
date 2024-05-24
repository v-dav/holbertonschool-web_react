import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('action creators return expected values', () => {
    test('selectCourse', () => {
      const returnVal = selectCourse(1);

      expect(returnVal).toHaveProperty('type', SELECT_COURSE);
      expect(returnVal).toHaveProperty('index', 1);
    });

    test('unSelectCourse', () => {
      const returnVal = unSelectCourse(1);
  
      expect(returnVal).toHaveProperty('type', UNSELECT_COURSE);
      expect(returnVal).toHaveProperty('index', 1);
    });
  });