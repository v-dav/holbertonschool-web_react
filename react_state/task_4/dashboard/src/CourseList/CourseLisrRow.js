import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { oneOfType } from 'prop-types';
import { prototype } from 'enzyme-adapter-react-16';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? 
        (textSecondCell === null ? (
          <th className={css(styles.headerColor) }colSpan="2" >{ textFirstCell }</th>
        ) : (
          <>
           <th className={css(styles.headerColor)}>{ textFirstCell }</th>
           <th className={css(styles.headerColor)}>{ textSecondCell }</th>
          </>
        )
          )  : (
            <>
              <td className={isCheck ? css(styles.rowChecked) : ''}>
                <input
                  type='checkbox'
                  onChange={() => {setCheck(!isCheck)}}
                />{ textFirstCell }</td>
              <td>{ textSecondCell }</td>
            </>
          )}
    </tr>
  );
}

CourseListRow.propTypes ={
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: oneOfType([PropTypes.string, prototype.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const styles = StyleSheet.create({
  headerColor: {
    backgroundColor: '#deb5b545'
  },

  tr: {
    backgroundColor: '#f5f5f5ab'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
});

export default CourseListRow;
