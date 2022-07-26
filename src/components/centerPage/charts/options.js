export function mapOptions(params, chartName, itemStyle) {
  function mapData(data) {
    return data.map((item) => {
      return {
        name: item.areaEn,
        value: item.curConfirm,
      };
    });
  }

  //热力地图设置此处可设置热力地图的颜色和变化范围
  return {
    visualMap: {
      show:false,
      type: "piecewise",
      pieces: [
        {
          min: 100001,
          color: '#BB0000',
      },
      {
          min: 50001,
          max: 100000,
          color: '#a2242c' // #73240D
      },
      {
          min: 25001,
          max: 50000,
          color: '#C62B2B',
      },
      {
          min: 1001,
          max: 25000,
          color: '#D25555',
      },
      {
          min: 3001,
          max: 10000,
          color: '#d0513c',
      },
      {
        min: 501,
        max: 3000,
        color: '#ed9f65'
       },
    
      {
          min: 1,
          max: 500,
          color: '#ed9a62'
      },
      {
          value: 0,
          color: 'white'
      }
      ],
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
        boxWidth: 110, //三维地图的宽度
        boxDepth: 120, //地图倾斜度  正交投影失效
        regionHeight: 2, //地图厚度
        label: {
          show: true, //是否显示市
          textStyle: {
            color: "#fff", //文字颜色
            fontSize: 12, //文字大小
            fontFamily: "微软雅黑",
            backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
          },
        },
        ...itemStyle,
        groundplane: {
          show: false,
        },
        top:  chartName === "America"?40:20,
        light: {
          main: {
            intensity: 3, //光照强度
            alpha: 24, 
            shadow: true,
            shadowQuality: 'high'
          },
          ambient: {
            intensity: 0
          },
        },
        shading: "realistic",
        // 真实感材质相关配置 shading: 'realistic'时有效
        realisticMaterial: {
          detailTexture: "#fff", // 纹理贴图
          textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
          roughness: 0.5, // 材质粗糙度，0完全光滑，1完全粗糙
          metalness: 0, // 0材质是非金属 ，1金属
          roughnessAdjust: 0,
        },
        viewControl: {
          //投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
          projection: "orthographic",
          //正交投影此配置失效
          distance: 80,
          orthographicSize:chartName === "America"? 79:82,
        },

      },
    ],
    

    //处理特效
    postEffect: {
      enable: true,
      //环境光遮蔽
      screenSpaceAmbientOcclusion: {
        enable: true,
        quality: "high",
      },
      bloomObject:{
        enable:true
      },
      //分帧超采样
      temporalSuperSampling: {
        enable: true,
      },
    },
  };
}
