import {postAreaUsa} from  "../services/index"
export default {
  // 命名空间 (必填)
  namespace: 'centerPage',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        if (location.pathname === '/') {
          dispatch({ type: 'getCenterPageData' });
        }
      });
    },
  },

  // 获取地图数据
  effects: {
    *getCenterPageData({ payload }, { call, put }) {
      const areaUsa = yield call(postAreaUsa);
      if (areaUsa.code===0) {
        yield put({
          type: 'setMapData',
          payload: areaUsa.data,
        });
      } else {
        console.log(`获取地图数据失败`);
      } 
    },

  },





  // 同步操作
  reducers: {
    setMapData(state,{payload}) {
      return { ...state, mapData:payload };
    },
  },
};
