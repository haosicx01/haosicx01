<!--
 * @Author: your name
 * @Date: 2021-12-24 09:34:04
 * @LastEditTime: 2021-12-24 17:59:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ZoomlaCMS-VueCli-Portal002/src/views/chengxu.vue
-->
<template>
<div class="chengxu">
  <!-- banner图 -->
  <div class="bannerPic">
    <b-container fluid="xl">
        <b-row>
          <b-col cols='12' class="bannerText" >{{bannerText[0].name}}</b-col>
        </b-row>
        <b-row>
            <b-col  cols='10' class="bannerText1" >{{bannerText[1].name}}</b-col>
        </b-row>
    </b-container>
  </div>
  <!-- 第一行 -->
  <b-container fluid="xl" style="padding-bottom:2rem">
    <!-- 标题 -->
    <b-row>
      <b-col class="SERVICE mt-4">
        <div class="se1">服务亮点</div>
        <div class="se2">SERVICE HIGHLIGHTS</div>
      </b-col>
    </b-row>
    <!-- 内容 -->
     <b-row>
      <b-col md="3" cols="6" class="oneInfoBox" v-for="(item,index) in oneInfoText"  :key="index" >
        <div  class="oneInfo">
          <div style="width:100%">
            <img class="oneImg" :src="item.img" alt="">
            <div  >{{item.name}}</div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <!-- 第二行 -->
  <b-container fluid="xl" style="background:#F4F4F4">
     <!-- 标题 -->
    <b-row style="padding-top:2rem">
      <b-col class="SERVICE">
        <div class="se1">特色功能</div>
        <div class="se2">CHARECTERISTIC  FUNCTION</div>
      </b-col>
    </b-row>
    <!-- 内容1 -->
    <b-row class="twoBox1">
      <b-col md="4">
        <img style="width:100%" src="../assets/images/解决方案-01/浮图秀图片_huaban.com_20211217172503@2x.png" alt="">
      </b-col>
      <b-col md="8"> 
        <div class="twoText1">重点产业分析报告</div>
        <div class="twoText2">十二大重点产业分析报告(互联网产业、旅游产业、医药产业、低碳制造业、房地产也、现代物流业、医疗健康产业、教育文化体育产业、农业、现代金融服务业、会展业、海洋产业（含汽油）等等)，十二大重点产业知识产权概况（包括：产业传利申请授权趋势、有效发明专利概况、产业专利价值概况、产业主要申请人分布、产业主要发明人分布、产业主要技术分布、对标省市相关产业专利对比分析），平台出具分析报告并汇报成果，每年对重点产业分析报告数据进行更新维护。</div>
            <b-img  class=" twoImage1 mt-4" src="../assets/images/解决方案-01/分析5 拷贝@2x.png" alt="" />
      </b-col>
    </b-row>
    <!-- 内容2 -->
     <b-row class="twoBox1">
      <b-col md="8"> 
        <div class="twoText1 text-right">重点产业分析报告</div>
        <div class="twoText2 text-right">采用人工智能技术，通过企业提供的企业信息，如企业规模，企业类型，企业年产值等信息智能匹配企业相关或者可以申报的省市、国家级等科技计划、科技奖励、政策与税收优惠，并自动推送。</div>
          <b-img  class="twoImage2 float-right mt-4" src="../assets/images/解决方案-01/亩均税收1 拷贝@2x.png" alt="" />
      </b-col>
       <b-col md="4">
        <img style="width:100%" src="../assets/images/解决方案-01/浮图秀图片_huaban.com_20211217172040@2x.png" alt="">
      </b-col>
    </b-row>
    <!-- 内容3 -->
 <b-row class="twoBox1">
     <b-col md="4">
        <img style="width:100%" src="../assets/images/解决方案-01/浮图秀图片_huaban.com_20211220151513@2x.png" alt="">
      </b-col>
      <b-col md="8"> 
        <div class="twoText1 text-left">知识产权价值智能评估</div>
        <div class="twoText2 text-left">结合国内外广泛的专利交易、评估数据，通过26个评估指标建立和开发了专利市场价格智能评估体系，用户只需要输入专利公开号即可了解国内单价专利市场货币值，评估结果同时提供专利的市场吸引力、市场覆盖率、申请人（或专利权人）维度、技术质量、法律维度等5个维度的评估情况，实现为用户提供方便、快速、朱雀的国内单价专利价值评估服务。</div>
        <b-img class="twoImage3 mt-4" src="../assets/images/解决方案-01/法律 拷贝@2x.png" alt="" />
      </b-col>
    </b-row>
    <b-row class=" d-flex justify-content-center" >
      <b-col md="3" class="bottom mb-3 d-flex justify-content-center align-items-center">
       <div class="text-white">显示更多特色功能</div> 
      </b-col>
    </b-row>
  </b-container>
   <!-- 第三行 -->
  <b-container fluid="xl" class="mt-5">
    <!-- 标题 -->
    <b-row>
      <b-col class="SERVICE">
        <div class="se1">重点案例</div>
        <div class="se2">KEY  CASES</div>
      </b-col>
    </b-row>
    <!-- 内容 -->
    <b-row class="mt-4" v-for="(item,index) in threeBanner" :key="index">
        <div class="threeBox ">
          <b-row >
            <b-col  md="3.5" >
              <h3 class="font-weight-bold">{{item.title}}</h3>
            </b-col>
            <b-col md="3" >
              <div class="look d-flex align-items-center justify-content-center ">查看该项目网址</div>
            </b-col>
          </b-row>
          <div class="mt-3" >{{item.name}}</div>
        </div>
        <b-img style="width:100%" :src="item.img" alt="" />
        
    </b-row>
  </b-container>
</div>
</template>
<script>
 export default {
    name: 'DealRepair',
    data () {
      return {
        bannerText:[
            { name:'智慧科创解决方案' },
            { name:'面向科技工作者、企业管理者和科技爱好者提供综合服务，通过运用大数据分析技术，为科技工作者提供 各类科技创新相关业务，方便科技工作者利用最新互联网模式和各类资源，解决难题。' }
        ],
        oneInfoText:[
          { name:'原创媒体  每日播报' ,img:require('../assets/images/解决方案-01/1.@2x.png') },
          { name:'科创企业  服务对接' ,img:require('../assets/images/解决方案-01/6.@2x.png') },
          { name:'海量汇聚  资源共享' ,img:require('../assets/images/解决方案-01/2.@2x.png') },
          { name:'全球资源  趋势研判' ,img:require('../assets/images/解决方案-01/4.@2x.png') },
          { name:'多种语言  信息推送' ,img:require('../assets/images/解决方案-01/7.@2x.png') },
          { name:'知识图谱  技术追踪' ,img:require('../assets/images/解决方案-01/5.@2x.png') },
          { name:'全球专利  快速评估' ,img:require('../assets/images/解决方案-01/8.@2x.png') },
          { name:'成功转化  精准匹配' ,img:require('../assets/images/解决方案-01/3.@2x.png') },
        ],
        twoBottom1:[
          { name:'十二大重点产业分析报告' ,img:require('../assets/images/解决方案-01/分析5@2x.png') },
          { name:'十二大重点产业知识产权概况' ,img:require('../assets/images/解决方案-01/知识产权@2x.png') },
        ],
        threeBanner:[
          { title:'椰城创新云',name:'“椰城创新云”作为海口市科技创新综合服务的互联网平台， 以促进知识产权和科技成果的创造、运用、保护、管理和服务为宗旨，面向科技工作者、企业管理者 和科技爱好者提供综合服务。' ,img:require('../assets/images/解决方案-01/无人机@2x.png')},
          { title:'长三角G60科创云',name:'“长三角G60科创云” 以服务科技创新为中心，面向G60的科技工作者、企业管理者和科技爱好者，提供科技创新需求方与供给方的双向互动服务，实现组织在线、沟通在线、业务在线和数据在线。' ,img:require('../assets/images/解决方案-01/无人机@2x.png')},
        ]
      }
    },
    mounted(){
    },
    methods:{

    }
}
</script>
<style scoped lang='scss'>
.bannerPic{
  height:28rem;
  background: url('../assets/images/解决方案-01/浮图秀图片_huaban.com_20211220175905 拷贝@2x.png') top center no-repeat; 
  background-size: 100%; 
  font-size:1.5rem;
}
.bannerText{
  margin-top: 7.8rem;
  font-size: 2rem /* 30/16 */;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
}
.bannerText1{
  margin-top: 0.5rem;
  font-size: 1rem /* 30/16 */;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
}

.SERVICE{
  text-align: center;
  .se1{
    font-size: 1.4rem /* 20/16 */;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
  }
  .se2{
    font-size: 1.5rem /* 24/16 */;
    font-family: PingFang SC;
    font-weight: bold;
    color: #333333;
    opacity: 0.29;
  }
}

.oneInfoBox{
  margin-top: 2.5rem;
  .oneInfo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #FFFFFF;
    width:100%;;
    height: 250px;
    box-shadow: 0px 22px 54px 0px rgba(0, 0, 0, 0.05);
  }
}

.twoBox1{
  padding: 2rem;
  .twoText1{
    font-size: 1.5rem;
    font-weight: bold;
    font-family: PingFang SC;
  }
  .twoText2{
    font-size: 0.9rem;
    margin-top: 0.2rem;
    font-family: PingFang SC;
  }
  
}
.bottom{
  height: 56px;
  background: linear-gradient(125deg, #926CE8, #4368EC);
  border-radius: 9px;
}
.twoImage1{
  width: 25rem;
}
.twoImage2{
  width: 35rem;
}
.twoImage3{
  width: 40rem;
}
.threeBox{
  width: 100%;
  padding: 2rem;
  text-indent: 2rem;
  background: fff;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.11);
    .look{
      text-indent: 0rem;
      padding: 0.2rem 2rem;
      margin-left: 1rem;
      background: rgba(17, 79, 191, 0);
      border: 1px solid #5C7DF6;
      border-radius: 15px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #5C7DF6;
    }
}
@media screen and (max-width:768px){ /*小于768px私有*/
 .bannerPic {
    height: 10rem;
   .bannerText{
     text-align: center !important;
    margin-top: 1rem !important ;
    font-size: 1rem  !important;
  }
  .bannerText1{
    font-size: 0.1rem  !important;
    margin-top: 0rem !important;
    line-height: 0.9rem;
  }
 }
 .oneInfoBox{
   width: 100%;
   font-size: 0.1rem;
   margin-top: 0rem !important;
   .oneInfo{
     width: 100%;
     height: 130px;
     margin-top: 1rem;
   }
   .oneImg{
     width: 3rem;
   }
 }
  .twoImage1{
    width: 20rem;
  }
  .twoImage2{
    width: 20rem;
    margin-bottom: 1rem;

  }
  .twoImage3{
    width: 20rem;
  }
  .bottom{
    width: 50%;
    height: 36px;
    font-size: 0.75rem;
    border-radius: 9px;
  }
}
</style>