<template>
  <div class="app-container dk_count">
    <el-form :model="queryParams" ref="queryForm" :inline="true">
       <el-form-item label="" >
         <el-date-picker
           v-model="dateRange"
           size="small"
           style="width: 240px"
           value-format="yyyy-MM-dd"
           type="daterange"
           range-separator="-"
           start-placeholder="开始日期"
           end-placeholder="结束日期"
         ></el-date-picker>
      </el-form-item>
      <el-form-item label="" prop="projectId">
        <el-select v-model="queryParams.projectId" @change="selectChange" placeholder="项目"  clearable   size="small">
          <el-option
            v-for="project in projectList"
            :key="project.id"
            :label="project.pname"
            :value="project.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button size="mini"
          type="primary"
          icon="el-icon-search"
          
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button size="mini" icon="el-icon-refresh"  @click="resetQuery"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
    <el-tabs stretch v-model="queryParams.type" @tab-click="tabClick">
    <el-tab-pane label="工种统计" name="1">
      <div style="text-align: center;margin: 15px 0;">
       <span v-if="dateRange && dateRange.length">{{dateRange[0]}}~~{{dateRange[1]}}</span>
       <span style="margin-left: 30px;" v-show="selectProjectName">项目：{{selectProjectName}}</span>
      </div>
      <div style="text-align: center;padding-bottom: 10px;border-bottom: 2px solid #dfe4ed;;margin-bottom: 15px;">
       工种考勤人数统计(累计用工{{totalCount + ""}}人·天)
      </div>
      <el-table v-loading="loading" border :data="list">
      <el-table-column label="工种" prop="" align="center" >
        <template  slot-scope="{row}">
          <span class="cur_span" @click="toDkIndex({GzId:row.countId})">
        <span>{{row.countName}}</span>
        <span v-if="row.countNum">({{row.countNum}})</span>
        </span>
      </template>
    </el-table-column>
      <el-table-column label="班组明细" prop="" align="center" >
         <template slot-scope="{row}" v-if="row.banZuList && row.banZuList.length">
         <span class="cur_span" v-for="(item,i) in row.banZuList" :key="i" @click="toDkIndex({BzId:item.countId,GzId:row.countId})">
            <span>{{item.countName}}</span>
            <span v-if="item.countNum">({{item.countNum}})；</span>
         </span>
      </template>
    </el-table-column>
      <el-table-column label="承建单位明细" prop="" align="center" >
         <template slot-scope="{row}" v-if="row.cjsList && row.cjsList.length">
         <span class="cur_span" v-for="(item,i) in row.cjsList" :key="i" @click="toDkIndex({CjDwId:item.countId,GzId:row.countId})">
            <span>{{item.countName}}</span>
            <span v-if="item.countNum">({{item.countNum}})；</span>
         </span>
      </template>
    </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
    <!-- 
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    /> -->
  </div>
</template>
<script>
import { getList } from '@/api/daily/dailyCount.js'
import { getTeamProjectList } from '@/api/projectManagement/index'
import moment from "moment"
// import { getGongZhongDict } from '@/api/BusinessConfig/index'
// import { Image } from 'element-ui'
// const { ImageViewer } = Image.components
export default {
  name: 'dailyconut',
  data () {
    return {
      loading:false,
      showViewer: false,
      queryParams: {
        projectId: '',
        type:"1"
      },
      totalCount: 0,
      total: 0,
      loading: false,
      list: [],
      dateRange: [],
      projectList: [],
      selectProjectName:""
    }
  },
  async created () {
    this.dateRange =[moment().format('YYYY-MM-DD'),moment().format('YYYY-MM-DD')]
    const resPl = await getTeamProjectList()
    this.projectList = resPl.data
    this.getList()
  },
  methods: {
    selectChange(value){
       this.selectProjectName = value ?  this.projectList.find(val=>val.id == value).pname : ""
    },
    toDkIndex(item){
      let second =Object.entries(item)[1] ? `&${Object.entries(item)[1][0]}=${Object.entries(item)[1][1]}` : ""
      let date =this.dateRange && this.dateRange.length==2 ? `date1=${this.dateRange[0]}&date2=${this.dateRange[1]}&` : ""
      this.$router.push(`/daily/dk_index?${date}projectId=${this.queryParams.projectId}&${Object.entries(item)[0][0]}=${Object.entries(item)[0][1]}${second}`)
    },
    tabClick(){
      this.list = []
      this.getList()
    },
    findGongZhongDictLable (value) {
      const findData = this.GongZhongDict.find(v => v.dictValue === value) || {}
      return findData.dictLabel
    },
    getList () {
      this.loading = true
      getList(this.addDateRange(this.queryParams, this.dateRange,"","news")).then(res => {
        console.log("aaaaaaaa",res)
        this.list = res.data
        this.loading = false
        if(this.list && this.list.length){
          this.totalCount = this.list[0].totalCount
        }else{
          this.totalCount = 0
        }
      })
    },
    handleQuery () {
      this.queryParams.pageNum = 1;
      this.getList()
    },
    resetQuery() {
      this.dateRange = []
      this.selectProjectName = ""
      this.resetForm("queryForm");
      this.handleQuery();
    },
    handlePrvClick(row) {
      this.imgList = row.urlAddress ? row.urlAddress.split(',').map(v => `/jianzhu${v}`) : []
      this.showViewer = true
    },
    handlePrvClickAfter(row) {
      this.imgList = row.urlAddressAfter ? row.urlAddressAfter.split(',').map(v => `/jianzhu${v}`) : []
      this.showViewer = true
    },
    handleExport () {
      this.download(
        "/zSys-ri-bao/export",
        {
          ...this.queryParams,
        },
        `日报_${new Date().getTime()}.xlsx`
      );

    },
    //打卡时间
    formatDate(row, column) {
      // 获取单元格数据
      let data = row[column.property]
      if(data == null) {
        return null
      }
      let dt = new Date(data)
      return  dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
    },
    //打卡日期
    formatDate2(row, column) {
      // 获取单元格数据
      let data = row[column.property]
      if(data == null) {
        return null
      }
      let dt = new Date(data)
      return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
    },
  }
}
</script>
