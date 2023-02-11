export function mapOptions(params, chartName, itemStyle) {
  function mapData(data) {
    return data.map((item) => {
      return {
        name: item.areaEn,
        value: item.confirmed,
      };
    });
  }

  //热力地图设置此处可设置热力地图的颜色和变化范围
  return {
    visualMap: {
      show:false,
      type: "piecewise",
      pieces: window.mapOption.visualMap.pieces,
      orient: "vertical",
      itemWidth: 25,
      itemHeight: 15,
      showLabel: true,
      seriesIndex: [0],

      textStyle: {
        color: "#7B93A7",
      },
      bottom: "3%",
      right: "3%",
    },
    tooltip: {
      show: true,
    },
    series: [
      {
        name: "确诊人数",
        type: "map3D",
        map: chartName,
        //数据源
        data:
          chartName === "America"
            ? mapData(params[0].subList)
            : mapData(params),

        label: {
          show: true, //是否显示市
          textStyle: {
            color: "#fff", //文字颜色
            fontSize: 12, //文字大小
            fontFamily: "微软雅黑",
            backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
          },
        },
        top: chartName === "America"?40:20,
        ...window.mapOption.series,

      },
    ],
    //处理特效
    postEffect:window.mapOption.postEffect
  };
}
