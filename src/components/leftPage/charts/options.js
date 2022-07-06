import echarts from 'echarts/lib/echarts';

export const trafficOptions = (params) => ({
  title: {
    show: false,
  },
  legend: {
    show: true,
    top: '5%',
    textStyle: {
      color: '#c0c9d2',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 255, 233,0)',
            },
            {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0, 255, 233,0)',
            },
          ],
          global: false,
        },
      },
    },
  },
  grid: {
    top: '15%',
    left: '10%',
    right: '5%',
    bottom: '10%',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true,
    },
    splitArea: {
      color: '#f00',
      lineStyle: {
        color: '#f00',
      },
    },
    axisLabel: {
      color: '#BCDCF0',
    },
    splitLine: {
      show: false,
    },
    boundaryGap: false,
    data: params.timeList,
  },

  yAxis: {
    type: 'value',
    min: 0,
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
    axisLine: {
      show: true,
    },
    axisLabel: {
      show: true,
      margin: 10,
      textStyle: {
        color: '#d1e6eb',
      },
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: '出口流量',
      type: 'line',
      smooth: true, //是否平滑
      lineStyle: {
        normal: {
          color: '#00b3f4',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#00b3f4',
        },
      },
      // 去除点标记
      symbolSize: 0,
      // 鼠标放上去还是要有颜色的
      itemStyle: {
        color: '#00b3f4',
      },
      // 设置渐变色
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,179,244,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,179,244,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,179,244, 0.9)',
          shadowBlur: 20,
        },
      },
      data: params.outData,
    },
    {
      name: '入口流量',
      type: 'line',
      smooth: true, //是否平滑
      // 阴影
      lineStyle: {
        normal: {
          color: '#00ca95',
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#00ca95',
        },
      },
      // 去除点标记
      symbolSize: 0,
      itemStyle: {
        color: '#00ca95',
      },
      // 设置渐变色
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,202,149,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,202,149,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,202,149, 0.9)',
          shadowBlur: 20,
        },
      },
      data: params.inData,
    },
  ],
});

export const userOptions = (params = {}) => ({
  header: params.header,
  data: params.data,
});



export const CityOverviewOption = (params) => ({
  tooltip: {
      trigger: 'item',
      formatter: '{a} {b} {c}'
  },
  series: [{
      name: '',
      type: 'pie',
      radius: ['30%', '80%'],
      center: ['50%', '60%'],
      roseType: 'area',

      labelLine: {
          length: 1,
          length2: 20,
          smooth: true
      },
      data:params
  }]
});

export const InfectiousDiseaseOption = (params) => ({
  color:["#0063e9"],
  //雷达图-玫瑰图特有配置
  tooltip: {},
  radar: [
    {
      center: ['48%', '54%'],
      indicator: params.indicator,
      shape: 'circle',
        axisName: {
        color: '#939a9e'
      },
      splitArea: {
        areaStyle: {
          color: ['#09161f', '#09161f', '#09161f', '#09161f'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: '#545e64',
        }
      },
      splitLine: {
        lineStyle: {
          color: "#1e5b93"
        }
      }
    },
  ],
  series: [
    {
      name: '传染病Top5',
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      // label: {
      //   show: true
      // },
      data: [
        {
          value: params.value,
          areaStyle: {
            normal: { // 单项区域填充样式
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                        offset: 0,
                        color: '#00c2ff'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#205f9a'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        },
        },
        
      ]
    },
  ]
})