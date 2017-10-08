import React from 'react';

import { FormattedMessage } from 'react-intl';
import Octicon from 'react-octicon';
import LocaleToggle from 'ui/containers/LocaleToggle';
import ThemeToggle from 'ui/containers/ThemeToggle';
import SaveToggle from 'ui/containers/SaveToggle';
import { getRoute } from 'ui/utils/url';
import {
  Footer as FooterContainer,
  StatusBar,
  StatusBarLeft,
  StatusBarRight,
  StatusBarSecondaryIcon,
  StatusBarImportantIcon,
  Route,
  A,
} from './wrappers';
import messages from './messages';

export default function Footer() {
  return (
    <FooterContainer>
      <StatusBar>
        <StatusBarLeft>
          <StatusBarImportantIcon>
            <Octicon name="home" />
            <Route to={getRoute('/')}>
              <em><FormattedMessage {...messages.home} /></em>
            </Route>
          </StatusBarImportantIcon>
          <span>
            <A href="https://github.com/Tsur/octoql/issues" target="_blank">
              <Octicon name="flame" />
              <em><FormattedMessage {...messages.bugs} /></em>
            </A>
          </span>
          <span>
            <A href="https://github.com/Tsur/octoql/blob/unstable/LICENSE.md" target="_blank">
              <Octicon name="law" />
              <em>
                <FormattedMessage {...messages.license} />
              </em>
            </A>
          </span>
        </StatusBarLeft>
        <StatusBarRight>
          <LocaleToggle />
          <ThemeToggle />
          <SaveToggle />
          {/* <span className={styles.status_bar_update}><Octicon name="package"/>  Update</span>*/}
        </StatusBarRight>
      </StatusBar>
    </FooterContainer>
  );
}
