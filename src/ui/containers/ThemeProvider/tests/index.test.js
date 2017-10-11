import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import * as themes from '../themes';
import ThemeProvider from '../index';
import configureStore from '../../../store';

describe('<ThemeProvider/>', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render default theme', () => {
    const renderedComponent = shallow(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <ThemeProvider store={store}>
            <div>test</div>
          </ThemeProvider>
        </Provider>
      </MemoryRouter>
    );
    const expectedTheme = renderedComponent
      .find(ThemeProvider)
      .props()
      .store.getState()
      .get('theme')
      .toJS().theme;

    expect(expectedTheme).toEqual(themes.light);
  });

  // it('should render theme in query string', () => {
  //   const renderedComponent = shallow(
  //     <MemoryRouter initialEntries={['/?theme=dark']}>
  //       <ThemeProvider />
  //     </MemoryRouter>
  //   );
  //   expect(renderedComponent.props().theme).toEqual(themes.dark);
  // });

  // it('should render default theme if invalid theme in query string', () => {
  //   const renderedComponent = shallow(
  //     <MemoryRouter initialEntries={['/?theme=doesnotexits']}>
  //       <ThemeProvider />
  //     </MemoryRouter>
  //   );
  //   expect(renderedComponent.props().theme).toEqual(themes.light);
  // });

  // it('should render default theme if undefined theme in query string', () => {
  //   const renderedComponent = shallow(
  //     <MemoryRouter initialEntries={['/?theme=']}>
  //       <ThemeProvider />
  //     </MemoryRouter>
  //   );
  //   expect(renderedComponent.props().theme).toEqual(themes.light);
  // });
});
