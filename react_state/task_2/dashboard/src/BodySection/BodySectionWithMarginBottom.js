import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...props} />
      </div>
    );
  }
  
  const styles = StyleSheet.create({
    bodySectionWithMargin: {
      marginBottom: '40px'
    }
  });

export default BodySectionWithMarginBottom;