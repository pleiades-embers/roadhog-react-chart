import echarts from "echarts/lib/echarts";
import dayjs from "dayjs"

// 关联数据类别
export const BrowseCategoriesOptions = (params) => ({
  radar: {
    center: ["50%", "50%"],
    radius: "70%",
    name: {
      formatter: function (name) {
        let arr;
        arr = ["{a|" + name + "}"];
        return arr.join("\n");
      },
      textStyle: {
        rich: {
          //根据文字的组设置格式
          a: {
            color: "#BCDCFF",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "Source Han Sans CN",
          },
        },
      },
    },
    // 名字和图形的距离
    nameGap: 5,
    indicator: params.indicator,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: [
          "rgba(84,136,255, 0.05)",
          "rgba(84,136,255, 0.1)",
          "rgba(84,136,255, 0.2)",
          "rgba(84,136,255, 0.3)",
          "rgba(84,136,255, 0.4)",
          "rgba(84,136,255, 0.5)",
        ].reverse(),
        shadowColor: "rgba(0, 0, 0, .5)",
        shadowBlur: 5,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
    },
  },
  series: [
    {
      name: "用户浏览类别",
      type: "radar",
      data: [params.data],
      label: {
        show: false,
        formatter: function (params) {
          return params.value + "万";
        },
        color: "#9ae8ac",
        distance: 10,
        align: "right",
      },
      symbol: "none",
      symbolSize: [6, 6],
      // 边缘颜色
      lineStyle: {
        color: "rgba(160,159,246, 0.6)",
        width: 2,
      },
      areaStyle: {
        color: "rgba(114,113,233,.4)",
        opacity: 0.8,
        shadowColor: "rgba(115,149,255,1)",
        shadowBlur: 10,
      },
    },
  ],
});

// 反馈
export const FeedbackOptions = (params) => ({
  title: {
    text: `${params.number}%`,
    left: "45%",
    top: "40%",
    textAlign: "center",
    textStyle: {
      fontSize: "16",
      fontWeight: "500",
      color: "#909dff",
      textAlign: "center",
    },
  },
  series: [
    {
      type: "pie",
      startAngle: 0,
      radius: ["80%", "70%"],
      center: ["50%", "50%"],
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5a8bfa",
                },
                {
                  offset: 1,
                  color: "#831bdb",
                },
              ]),
              shadowColor: "rgba(175,143,230,.5)",
              shadowBlur: 10,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          hoverAnimation: false,
        },
        {
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          value: 100 - params.number,
          hoverAnimation: true,
          itemStyle: {
            color: "rgba(79,76,192, 0.3)",
          },
        },
      ],
    },
  ],
});

//  线下门店流量
export const OfflinePortalOptions = (params) => ({
  color: ["#73A0FA", "#73DEB3", "#32C5E9", "#67E0E3"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
      lineStyle: {
        type: "dashed",
      },
    },
  },
  grid: {
    left: "15",
    right: "15",
    bottom: "0",
    top: "30",
    containLabel: true,
  },
  legend: {
    data: ["门店1", "门店2", "门店3", "门店4"],
    show: true,
    textStyle: {
      color: "#BCDCFF",
    },
  },
  xAxis: [
    {
      type: "category",
      data: params.xData,
      axisLabel: {
        color: "#BCDCF0",
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
    {
      type: "category",
      axisLabel: {
        color: "#BCDCF0",
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "单位/人",
      nameTextStyle: {
        color: "#BCDCFF",
      },
      axisLabel: {
        color: "#BCDCF0",
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#252938",
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },
    {
      type: "value",
      min: 0,
      max: 100,
      interval: 20,
      name: "密度",
      //网格样式
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#94b5ca",
        },
      },
    },
  ],
  series: [
    {
      name: "门店1",
      type: "line",
      data: params.data1,
    },
    {
      name: "门店2",
      type: "line",
      data: params.data2,
    },
    {
      name: "门店3",
      type: "line",
      data: params.data3,
    },
    {
      name: "门店4",
      type: "line",
      data: params.data4,
    },
    {
      name: "额度",
      type: "bar",
      data: params.barData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(34,224,214,.8)",
            },
            {
              offset: 0.5,
              color: "rgba(5,137,186,1)",
            },
            {
              offset: 1,
              color: "rgba(11,12,31,1)",
            },
          ]),
          barBorderRadius: 7.5,
        },
      },
      barMaxWidth: 15,
    },
  ],
});

/**
 * 新增确诊趋势 柱状图
 */
export const DiagnosisTrendOption = (params) => ({
  xAxis: {
    data: params.map(item=> dayjs(item.dateTime).format("MM-DD")),
    axisLine: {
      lineStyle: {
        color: "#ccc",
      },
    },
  },
  yAxis: {
    axisLine: {
      lineStyle: {
        color: "#ccc",
      },
    },
  },
  tooltip: {
    trigger: "axis",
  },
  //控制图表占此容器的位置
  grid: {
    top: 20,
    bottom: 50,
    left: 60,
    right: 50,
  },
  series: [
    {
      name: "感染人数",
      type: "bar",
      data: params.map(item=> item.increase),
      barWidth: "10px",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "#07489f", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#00a3ff", // 100% 处的颜色
              },
            ],
            false
          ),
          barBorderRadius: [30, 30, 0, 0],
        },
      },
    },
    {
      name: "数量",
      type: "line",
      markLine: {
        symbol: "none",
        itemStyle: {
          normal: {
            borderWidth: 0,
            lineStyle: {
              type: "dashed",
              color: "#EA3628",
              width: 1,
            },
          },
        },
        label: {
          position:'start',
          formatter:'{c}',
          normal: {
            padding: 1,
            fontSize: 12,
            fontFamily: "Microsoft YaHei",
            formatter: function (params) {
              return "平均线";
            },
          },
        },
        data: [
          {
            yAxis: params.map(item=> item.increase).reduce((a,b) => Number(a) + Number(b), 0) / 5 ,
          },
        ],
      },
    },
  ],
});

/**
 * 实时各州数据概况
 */
export const AreaScrollBoardOptions = (params) => ({
  header: params.header,
  data: params.data,
});
