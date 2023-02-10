window.global = {
  baseUrl: "http://47.100.208.92:81",
};

window.mapOption = {
  series: {
    boxWidth: 110, //三维地图的宽度
    boxDepth: 120, //地图倾斜度  正交投影失效
    regionHeight: 0.1, //地图厚度
    itemStyle: {
      opacity: 1, // 透明度
      borderWidth: 0.6, //分界线宽度
      borderColor: "#207fce", //分界线颜色
    },
    groundplane: {
      show: false,
    },
    light: {
      main: {
        intensity: 3, //光照强度
        alpha: 24,
        shadow: true,
        shadowQuality: "high",
      },
      ambient: {
        intensity: 0,
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
      orthographicSize: 82,
    },
  },
  //处理特效
  postEffect: {
    enable: true,
    //环境光遮蔽
    screenSpaceAmbientOcclusion: {
      enable: true,
      quality: "high",
    },
    bloomObject: {
      enable: true,
    },
    //分帧超采样
    temporalSuperSampling: {
      enable: true,
    },
  },
};
