import request from '../utils/request';


// 美国各州数据
export const postAreaUsa = async (params) => {
  return request('/api/epidemic/area', {
    method: 'POST',
    mode: "cors",
    body: JSON.stringify(params),
  }).then(response => {
    return response.data;
  });
};

// 各州数据
export const getArea = async () => {
  return request('/api/epidemic/area').then(response => {
    return response.data;
  });
};

// 城市数据概况
export const getCity = async () => {
  return request('/api/epidemic/usCityData').then(response => {
    return response.data;
  });
};
export const getArCity = async () => {
  return request('/api/epidemic/arCityData').then(response => {
    return response.data;
  });
};

//风险预警信息
export const getMessage = async (params) => {
  return request('/api/epidemic/message', {
    method: 'POST',
    mode: "cors",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(params),
  }).then(response => {
    return response.data;
  });
};

//传染病Top5
export const getRank = async () => {
  return request('/api/epidemic/rank').then(response => {
    return response.data;
  });
};

