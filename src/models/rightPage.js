import { getCity } from '../services/index';
export default {
  // 命名空间 (必填)
  namespace: 'rightPage',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // 参数可以直接简写成{pathname}
        if (location.pathname === '/') {
          dispatch({ type: 'getRightPageData' });
        }
      });
    },
  },

  // 异步请求
  effects: {
    *getRightPageData({ payload }, { call, put }) {
      const res = yield call(getCity);
      
      if (res.code===0) {
        yield put({
          type: 'setData',
          payload: res.data,
        });
      } else {
        console.log(`获取右侧数据数据失败`);
      }
    },
  },

  // 同步操作
  reducers: {
    setData(state, {payload}) {
      return { ...state, data:payload };
    },
  },
};
