import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseList() {
  return (
    <div className="Notification">
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" and isHeader={true} />
        </thead>
        <tbody>
          { listCourses.length == 0 ? (<th>No course available yet</th>): 
          (listCourses.map((course)=>{
            <CourseListRow key = {course.id} textFirstCell={course.name} textSecondCell={course.credit} />
          }))}
        </tbody>
      </table>
    </div>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};


const styles = StyleSheet.create({
  Notification: {
    paddingTop: '50px',
    paddingBottom: '165px',
    border: 'none',
    borderBottom: '3px solid',
    borderColor: '#d73953'
  },

  table: {
    width: '100%'
  },

  thead: {
    textAlign: 'center',
    borderRight: 0,
    borderLeft: 0
  },

  th: {
    padding: '0.25rem',
    border: '1px lightgray',
    borderRight: 0
  },
  
  td: {
    padding: '0.25rem',
    border: '1px lightgray',
    textAlign: 'left',
    borderRight: 0
  }
});

export default CourseList;