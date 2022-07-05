import echarts from "echarts/lib/echarts";
import "echarts/map/js/china";

//  地图数据
const mapData = [
  // { name: "勉阳镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "武侯镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "周家山镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "同沟寺镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "新街子镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "老道寺镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "褒城镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "金泉镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "定军山镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "温泉镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "元墩镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "阜川镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "新铺镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "青羊驿镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "茶店镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "镇川镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "漆树坝镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "张家河镇", value: (Math.random() * 1000 + 100).toFixed(0) },
  // { name: "长沟河镇", value: (Math.random() * 1000 + 100).toFixed(0) },
];

export const mapOptions = (params) => ({
 
  // visualMap: {
  //   show: true,
  //   min: 0,
  //   max: 1000,
  //   calculable: true,
  //   realtime: false,
  //   inRange: {
  //     color: ["#2884db", "#244779"],
  //   },
  //   textStyle: {
  //     color: "#fff",
  //   },
  // },
        //热力地图设置此处可设置热力地图的颜色和变化范围
        visualMap: {
          type: 'piecewise',
          pieces: [{
                  min: 100001,
                  color: '#eb3528',
              },
              {
                  min: 10000,
                  max: 100000,
                  color: '#cd5517'
              },
              {
                  min: 5000,
                  max: 9999,
                  color:'#eda537'
              },
              {
                min: 1,
                max: 4999,
                color:'#6be0ef'
            },
          ],
          orient: 'vertical',
          itemWidth: 25,
          itemHeight: 15,
          showLabel: true,
          seriesIndex: [0],

          textStyle: {
              color: '#7B93A7'
          },
          bottom: '3%',
          right: "3%",
      },
  series: [
    {
      name: "America",
      type: "map3D",
      map: "America",
      boxDepth:120, //地图倾斜度  正交投影失效
      regionHeight: 3, //地图厚度
      label: {
        show: true, //是否显示市
        textStyle: {
          color: "#fff", //文字颜色
          fontSize: 12, //文字大小
          fontFamily: "微软雅黑",
          backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
        },
      },
      itemStyle: {
        opacity: 0.9, // 透明度
        borderWidth: 0.6, //分界线宽度
        borderColor: "#207fce", //分界线颜色
      },
      groundplane: {
        show: false,
      },
      data: params,
      shading: 'realistic',
      // 真实感材质相关配置 shading: 'realistic'时有效
      realisticMaterial: {
        detailTexture: "#fff", // 纹理贴图
        textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
        roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
        metalness: 0, // 0材质是非金属 ，1金属
        roughnessAdjust: 0,
      },
      viewControl: {
        //投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
        projection: "orthographic",
        //正交投影此配置失效
        // distance: 80,
        orthographicSize:80
      },
    },
  ],
});
