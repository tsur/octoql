import { createSelector } from 'reselect';

const selectBlog = () => (state) => state.get('blog');

const selectBlogPostVisibility = () =>
  createSelector(selectBlog(), (globalState) => globalState.getIn(['visible']));

export { selectBlogPostVisibility };
