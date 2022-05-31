
const token= {
  token: '__TEMP_TOKEN__'
};

const apis= [
 // 获取用户信息(请求头携带token)
  {
    url: '/mock/login',
    method: 'post',
    response:(req) => {
      if(req.body.username=="admin" && req.body.password=="admin123" ){
          return {
        code: 200,
        message: 'ok',
        data: {
          userId: '0',
          userRole: 'super',
        },
      };
      }else{
        return {
          code: 500,
          message: 'error',
          msg:"用户名或密码错误"
        };
      }
    },
  },
  {
    url: '/mock/logout',
    method: 'post',
    response:() => {
      return {
        code: 200,
        message: 'ok',
        data: {
          userId: '0',
          userName: 'Soybean',
          userPhone: '15170283876',
          userRole: 'super',
        },
      };
    },
  },
  {
    url: '/mock/getInfo',
    method: 'get',
    response:() => {
      return {
        "msg": "操作成功",
        "code": 200,
        "permissions": [
            "*:*:*"
        ],
        "roles": [
            "admin"
        ],
        "user": {
            "searchValue": null,
            "createBy": "admin",
            "createTime": "2022-05-24 19:08:46",
            "updateBy": null,
            "updateTime": null,
            "remark": "超级管理员",
            "params": {},
            "userId": 1,
            "deptId": 103,
            "userName": "admin",
            "nickName": "天下第一",
            "email": "3333717363@qq.com",
            "phonenumber": "15023658456",
            "sex": "0",
            "avatar": "/profile/avatar/2022/03/29/blob_20220329202231A001.jpeg",
            "salt": null,
            "status": "0",
            "delFlag": "0",
            "loginIp": "5555.228.175.85",
            "loginDate": "2022-05-23T23:28:09.000+08:00",
            "dept": {
                "searchValue": null,
                "createBy": null,
                "createTime": null,
                "updateBy": null,
                "updateTime": null,
                "remark": null,
                "params": {},
                "deptId": 103,
                "parentId": 101,
                "ancestors": null,
                "deptName": "武术指导部门",
                "orderNum": "1",
                "leader": "武天老师",
                "phone": null,
                "email": null,
                "status": "0",
                "delFlag": null,
                "parentName": null,
                "children": []
            },
            "roles": [
                {
                    "searchValue": null,
                    "createBy": null,
                    "createTime": null,
                    "updateBy": null,
                    "updateTime": null,
                    "remark": null,
                    "params": {},
                    "roleId": 1,
                    "roleName": "超级管理员",
                    "roleKey": "admin",
                    "roleSort": "1",
                    "dataScope": "1",
                    "menuCheckStrictly": false,
                    "deptCheckStrictly": false,
                    "status": "0",
                    "delFlag": null,
                    "flag": false,
                    "menuIds": null,
                    "deptIds": null,
                    "admin": true
                }
            ],
            "roleIds": null,
            "postIds": null,
            "roleId": null,
            "admin": true
        }
    };
    },
  },
  {
    url: '/mock/getRouters',
    method: 'get',
    response:() => {
      return {
        "msg": "操作成功",
        "code": 200,
        "data": [
            {
                "name": "Daily",
                "path": "/daily",
                "hidden": false,
                "redirect": "noRedirect",
                "component": "Layout",
                "alwaysShow": true,
                "meta": {
                    "title": "考勤管理",
                    "icon": "time",
                    "noCache": false,
                    "link": null
                },
                "children": [
                    {
                        "name": "Dk_count",
                        "path": "dk_count",
                        "hidden": false,
                        "component": "daily/dk_count",
                        "meta": {
                            "title": "考勤统计",
                            "icon": "chart",
                            "noCache": true,
                            "link": null
                        }
                    }
                ]
            }
        ]
    };
    },
  },
  {
    url: '/mock/index',
    method: 'get',
    response:() => {
      return {
        "msg": "操作成功",
        "code": 200,
        "data": {
            "typeStatus": null,
            "typeNum": null,
            "rzStatus": "1",
            "certNum": 5,
            "admissionNum": 5,
            "exitNum": 1,
            "noAuditNum": 1,
            "projectNum": 17,
            "projectName": "0504",
            "classNum": 31,
            "className": "天津饭0504",
            "companyNum": 14,
            "companyName": "贝吉塔0504",
            "todayAttendance": 0,
            "yesterdayAttendance": 0,
            "weekAttendance": 0,
            "monthAttendance": 4
        }
    }
    },
  },
];

export default apis;
