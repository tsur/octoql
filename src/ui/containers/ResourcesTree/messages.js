/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  addNotebook: {
    id: 'octoql.components.ResourcesTree.notebook.add',
    defaultMessage:
      'Type the resource you want to add. This can be a Valo cluster instance (i.e. 192.168.34.10:9999), a tenant in that Valo cluster(i.e. 192.168.34.10:9999/myTenant), or a collection in that tenant (i.e. 192.168.34.10:9999/myTenant/myCollection), or a notebook within a collection (i.e. 192.168.34.10:9999/myTenant/myCollection/myNotebook.js)',
  },
});
