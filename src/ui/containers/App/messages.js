/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  changeLang: {
    id: 'octoql.containers.App.actions.changeLang',
    defaultMessage: 'Change Language',
  },
  changeTheme: {
    id: 'octoql.containers.App.actions.changeTheme',
    defaultMessage: 'Change Theme',
  },
  addNotebook: {
    id: 'octoql.containers.App.actions.addNotebook',
    defaultMessage: 'Add Notebook',
  },
  openNotebook: {
    id: 'octoql.containers.App.actions.openNotebook',
    defaultMessage: 'Open Notebook',
  },
  englishLang: {
    id: 'octoql.components.LanguageProvider.eng',
    defaultMessage: 'English',
  },
  spanishLang: {
    id: 'octoql.components.LanguageProvider.es',
    defaultMessage: 'Spanish',
  },
});
