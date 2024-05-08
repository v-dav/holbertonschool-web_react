import React from "react"
import BodySection from './BodySection'
import "./BodySectionWithMarginBottom.css"
import { PropTypes } from 'prop-types';

function BodySectionWithMarginBottom({title, children}) {
  return (
    <div className="bodySectionWithMargin">
        <BodySection title={title}>
            {children}
        </BodySection>
    </div>
  )
}

BodySectionWithMarginBottom.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default BodySectionWithMarginBottom;