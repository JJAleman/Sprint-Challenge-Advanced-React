import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
// import { toggleTheme } from './Components/UseDarkMode';


test('render without crashing', () => {
  render(<App />)
});


test('if it contains the title "Womans World Cup Players"', () => {
  const container = render (<App />);
  container.getByTestId("title");
});

test('if the toggle button is present', () => {
  const container = render (<App />);
  container.getByTestId("togglebutton");
});

// test('toggles the dark mode', () => {
//   expect(toggleTheme()).toBe(True);

// })


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
