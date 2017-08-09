import PubSub from 'pubsub-js';

// @todo check a way of using symbols or making constants easier to write
PubSub.topics = {
  FUZZY_FINDER_REQUIRED: 'FUZZY_FINDER_REQUIRED', // Fired when a component requires the fuzzy finder
  FUZZY_FINDER_LANG_ITEM_SELECTED: 'FUZZY_FINDER_LANG_ITEM_SELECTED', // Fired when user selects a language in the fuzzy finder
  FUZZY_FINDER_NOTEBOOK_ITEM_ADDED: 'FUZZY_FINDER_NOTEBOOK_ITEM_ADDED', // Fired when user adds a notebook in the fuzzy finder
  FUZZY_FINDER_CLOSED: 'FUZZY_FINDER_CLOSED', // Fired when user adds a notebook in the fuzzy finder
  HELPER_TOUR_TIP_OPENED: 'HELPER_TOUR_TIP_OPENED', // Fired when user opens a tip
  HELPER_TOUR_TIP_CLOSED: 'HELPER_TOUR_TIP_CLOSED', // Fired when user closed a tip
  HELPER_TOUR_TIP_REMOVED: 'HELPER_TOUR_TIP_REMOVED', // Fired when user removed a tip
  ACTION_SELECTED: 'ACTION_SELECTED', // Fired when user selected a global action in the fuzzy finder
};

export default PubSub;
