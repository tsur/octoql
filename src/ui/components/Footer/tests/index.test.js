import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Footer from '../index';
import LocaleToggle from 'containers/LocaleToggle';

describe('<Footer />', () => {

  it('should render the license type @p3 @unit', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
        <FormattedMessage {...messages.licenseMessageAbbr} />
    )).toEqual(true);
  });

  it('should render the current notebook name @p1 @unit', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
        <span>No Notebooks</span>
    )).toEqual(true);
  });

  it('should render the current line & column number @p2 @unit', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
        <span>0:0</span>
    )).toEqual(true);
  });

  it('should render the locale @p1 @unit', () => {
    const renderedComponent = shallow(
      <Footer />
    );
    expect(renderedComponent.contains(
        <LocaleToggle />
    )).toEqual(true);
  });

  // it('should render two sections, on the left side and on the right side @p3 @unit', () => {
  //   const renderedComponent = shallow(
  //     <Footer />
  //   );
  //
  //   // console.log(styles);
  //
  //   // expect(renderedComponent.find(`.${styles.status_bar_left}`).length).toBe(1);
  //   // expect(renderedComponent.find(`.${styles.status_bar_right}`).length).toBe(1);
  // });

  // it('should render the credits', () => {
  //   const renderedComponent = shallow(<Footer />);
  //   expect(renderedComponent.contains(
  //     <section>
  //       <p>
  //         <FormattedMessage
  //           {...messages.authorMessage}
  //           values={{
  //             author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
  //           }}
  //         />
  //       </p>
  //     </section>
  //   )).toEqual(true);
  // });
});
