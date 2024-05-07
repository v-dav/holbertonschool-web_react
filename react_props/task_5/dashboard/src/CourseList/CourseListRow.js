import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell}) => {
  if (isHeader) {
    return (
      <tr className='tr1'>
        {textSecondCell === null ? (
          <th className='th1' colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className='th2'>{textFirstCell}</th>
            <th className='th3'>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr className='tr2'>
        <td className='td1'>{textFirstCell}</td>
        <td className='td2'>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
