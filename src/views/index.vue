<template>
  <div class="app-container index_ahome">
    <div class="m_title pl_40 bg_w">
      欢迎访问天下第一管理系统！
    </div>
    <div class="ptitle pl_40 bg_w">
         <img src="./image/zh_people.png" >
         <span>参赛人员</span>
    </div>
    <div class="pbottom bg_w">
      <div class="pbottom_son" v-for="(item,i) in workerData" :key="i" :class="{'noborder':i==3}" >
       <div class="mt_29">{{item.name}}</div> 
       <div class="nowrap">
        <span class="big_num tc_num_text">{{item.num}}</span> 
        <span class="look_tx cur_span" @click="tosee(item)">查看</span>
        </div> 
      </div>
    </div>
    <div class="ptitle pl_40 bg_w">
         <img src="./image/pj_title.png" >
         <span>参赛信息</span>
    </div>
    <div class="project_content bg_w">
       <div class="pc_box">
          <div class="pc_box_title">A组</div>
          <div class="pc_box_mid">
           <img src="./image/projectmsg.png" >
           <span class="tc_num_text">{{pageData.projectNum}}</span>
          </div>
          <div class="pc_box_bottom">{{pageData.projectName}}</div>
       </div>
       <div class="pc_box">
          <div class="pc_box_title">B组</div>
          <div class="pc_box_mid">
           <img src="./image/unit.png" >
           <span class="tc_num_text">{{pageData.companyNum}}</span>
          </div>
          <div class="pc_box_bottom">{{pageData.companyName}}</div>
       </div>
       <div class="pc_box">
          <div class="pc_box_title">C组</div>
          <div class="pc_box_mid">
           <img src="./image/teams.png" >
           <span class="tc_num_text">{{pageData.classNum}}</span>
          </div>
          <div class="pc_box_bottom">{{pageData.className}}</div>
       </div>
    </div>
  </div>
</template>

<script>
import { getIndex } from '@/api/index/index.js'
export default {
  name: "Index",
  data() {
    return {
      // 版本号
      version: "3.8.1",
      pageData:{
        projectNum:"",
        projectName:"",
        classNum:"",
        className:"",
        companyNum:"",
        companyName:"",
      },
      workerData:[
           {name:"实名人数/人",num:0,url:"",type:"certNum"},
           {name:"在场人数/人",num:0,url:"",type:"admissionNum"},
           {name:"退场人数/人",num:0,url:"",type:"exitNum"},
           {name:"待审核人数/人",num:0,url:"",type:"noAuditNum"},
      ]
    };
  },
  created(){
       getIndex().then(res=>{
         console.log("RE",res)
         this.pageData = res.data
         this.workerData=[
           {name:"实名人数/人",num:res.data.certNum,url:"",type:"certNum"},
           {name:"在场人数/人",num:res.data.admissionNum,url:"",type:"admissionNum"},
           {name:"退场人数/人",num:res.data.exitNum,url:"",type:"exitNum"},
           {name:"待审核人数/人",num:res.data.noAuditNum,url:"",type:"noAuditNum"},
         ]
       })
  },
  methods: {
    tosee(item){
      this.$router.push("/construction-personnel?type="+item.type)   
    },
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
</style>

