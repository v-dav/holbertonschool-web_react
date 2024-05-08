import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';

test('renders BodySection component correctly with children and title', () => {
  const { getByText } = render(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>
  );
  const titleElement = getByText('test title');
  const childrenElement = getByText('test children node');
  
  expect(titleElement.tagName).toBe('H2');
  expect(childrenElement.tagName).toBe('P');
});