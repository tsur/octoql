import React from 'react';

import { FormattedMessage } from 'react-intl';
import Octicon from 'react-octicon';
import LocaleToggle from 'ui/containers/LocaleToggle';
import {
  Footer as FooterContainer,
  StatusBar,
  StatusBarLeft,
  StatusBarRight,
  StatusBarSecondaryIcon,
  StatusBarImportantIcon,
  A,
} from './wrappers';
import messages from './messages';

export default function Footer() {
  return (
    <FooterContainer>
      <StatusBar>
        <StatusBarLeft>
          <StatusBarImportantIcon>
            <Octicon name="home" />{' '}
            <A to="/">
              <em>Home</em>
            </A>
          </StatusBarImportantIcon>
          <span>
            <Octicon name="flame" /> <em>Bugs</em>
          </span>
          <span>
            <Octicon name="law" />
            <em>
              <FormattedMessage {...messages.license} />
            </em>
          </span>
        </StatusBarLeft>
        <StatusBarRight>
          <LocaleToggle />
          <span>
            <Octicon name="paintcan" /> <em>Themes</em>
          </span>
          <StatusBarSecondaryIcon>
            <Octicon name="sync" /> <em>Sync</em>
          </StatusBarSecondaryIcon>
          {/* <span className={styles.status_bar_update}><Octicon name="package"/>  Update</span>*/}
        </StatusBarRight>
      </StatusBar>
    </FooterContainer>
  );
}
