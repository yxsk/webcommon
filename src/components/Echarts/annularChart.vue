<!--
* Echarts-Annular
* Seong Han
* 2019.07.22
-->
<template>
  <div style="width:100%; height:100%;">
    <div ref="annularChartContainer" style="width:100%; height:100%; z-index:1"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    annularData: Object,//数据
    title: String,//标题
	},
  data() {
    return {
      legendData:[],
      listData: [],
      arrayData:[]
    };
  },
  mounted() {
    this.getData
    const { title,arrayData,listData } = this
    let myChart = echarts.init(this.$refs.annularChartContainer)
    myChart.setOption({
			color: ['#08c','#fa5','#c03', '#609','#703','#0fc'],
      title: {
        text: title,
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
				orient: "horizontal",
				top:"5%",
        data: null
			},
      grid : {
        top : "40%",    //距离容器上边界40像素
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "55%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "20",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
          },
          hoverAnimation: false, 
          data: listData,
        }
      ]
    })
  },
  methods: {},
  computed: {
    getData(){
      const { annularData,legendData,arrayData,listData } = this
      for (var key in annularData){
        legendData.push(key)
        arrayData.push(annularData[key])
      }
      var color= ['#08c','#fa5','#c03', '#609','#703','#0fc']
      //datalist遍历
      for(var i=0; i<legendData.length; i++){
        listData.push({
          value: arrayData[i], name: legendData[i],
          itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{offset: 0,color: '#fff' // 0% 处的颜色
                        }, {offset: 1,color: color[i] // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        })
      }
      return{ legendData,arrayData,listData }
    }
  },
};
</script>

<style></style>
