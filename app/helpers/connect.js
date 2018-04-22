import withRedux from 'next-redux-wrapper';
import { initStore } from '@/app/modules/store';

export const reduxConnect = (mapStateToProps = null, mapDispatchToProps = null) => {
  return withRedux(initStore, mapStateToProps, mapDispatchToProps);
}
