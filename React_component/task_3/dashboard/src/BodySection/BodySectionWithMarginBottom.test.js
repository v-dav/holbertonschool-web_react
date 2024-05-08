import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('renders BodySectionWithMarginBottom component correctly and passes props to BodySection', () => {
  const title = "test title";
  const { getByText, container } = render(
    <BodySectionWithMarginBottom title={title}>
      <p>test children node</p>
    </BodySectionWithMarginBottom>
  );
  const titleElement = getByText('test title');
  const childrenElement = getByText('test children node');
  const bodySectionContainer = container.getElementsByClassName('bodySectionWithMargin')[0];

  expect(bodySectionContainer).toHaveStyle('margin-bottom: 40px');
  expect(titleElement.tagName).toBe('H2');
  expect(childrenElement.tagName).toBe('P');
});