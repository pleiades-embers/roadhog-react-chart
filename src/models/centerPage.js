import { postAreaUsa, getRank ,getMessage} from "../services/index";
export default {
  // 命名空间 (必填)
  namespace: "centerPage",

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        if (location.pathname === "/") {
          dispatch({
            type: "getCenterPageData",
          });
          dispatch({
            type: "getRank",
          });
          dispatch({
            type: "getMessage",
          });
        }
      });
    },
  },

  // 获取地图数据
  effects: {
    *getRank({ payload }, { call, put }) {
      const rank = yield call(getRank);
      if (rank.code === 0) {
        yield put({
          type: "setRankData",
          payload: rank.data,
        });
      } else {
        console.log(`获取传染病Top5失败`);
      }
    },
    *getMessage({ payload }, { call, put }) {
      const res = yield call(getMessage);
      if (res.code === 0) {
        yield put({
          type: "setMessage",
          payload: res.data,
        });
      } else {
        console.log(`获取风险预警信息失败`);
      }
    },
    *getCenterPageData({ payload = "usa" }, { call, put }) {
      yield put({
        type: "setTabName",
        payload:payload,
      });

      const areaUsa = yield call(postAreaUsa, {
        type: payload,
        // date: "2022-07-02",
      });
      if (areaUsa.code === 0) {
        yield put({
          type: "setMapData",
          payload:{data:areaUsa.data,name:payload},
        });
      } else {
        console.log(`获取地图数据失败`);
      }
    },
  },

  // 同步操作
  reducers: {
    setTabName(state, { payload }) {
      return {
        ...state,
        tabName:payload
      };
    },
    setMessage(state, { payload }) {
      return {
        ...state,
        message:payload
      };
    },
    setMapData(state, { payload }) {
      return {
        ...state,
        mapData: {
          ...state.mapData,
          [payload.name]: payload.data,
        },
      };
    },
    setRankData(state, { payload }) {
      return {
        ...state,
        rankData: payload,
      };
    },
  },
};
