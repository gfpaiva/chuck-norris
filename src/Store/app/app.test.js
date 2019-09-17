import reducer from './';
import AppActions from './actions';
import SET_LOADING from './constants';

describe('[REDUX] - App', () => {
  it('should return correct action creators', () => {
    const shape = {
      type: SET_LOADING,
      payload: { loading: false },
    };
    const setLoading = AppActions.setLoading();
    const setLoadingFalse = AppActions.setLoading(false);
    const setLoadingTrue = AppActions.setLoading(true);

    expect(setLoading).toMatchObject(shape);
    expect(setLoadingFalse).toMatchObject(shape);
    expect(setLoadingTrue).toMatchObject({
      ...shape,
      payload: { loading: true },
    });
  });

  it('should return initial state', () => {
    const app = reducer(undefined, {});

    expect(app).toMatchObject({ loading: true });
  });

  it(`should handle ${SET_LOADING}`, () => {
    expect(reducer(null, AppActions.setLoading())).toMatchObject({ loading: false });
    expect(reducer(null, AppActions.setLoading(true))).toMatchObject({ loading: true });
    expect(reducer({ loading: true }, AppActions.setLoading())).toMatchObject({ loading: false });
    expect(reducer({ loading: false }, AppActions.setLoading(true))).toMatchObject({ loading: true });
  });
});
