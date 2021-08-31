"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4781],{2862:(e,l,r)=>{r.r(l),r.d(l,{data:()=>s});const s={key:"v-7b7c4070",path:"/serve/WS/FS/",title:"文件和储存服务",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本磁盘管理",slug:"基本磁盘管理",children:[]},{level:2,title:"配置储存池",slug:"配置储存池",children:[]},{level:2,title:"配置 RAID 10",slug:"配置-raid-10",children:[]},{level:2,title:"配置 iSCSI",slug:"配置-iscsi",children:[{level:3,title:"什么是 iSCSI？",slug:"什么是-iscsi",children:[]},{level:3,title:"新建 iSCSI 虚拟磁盘",slug:"新建-iscsi-虚拟磁盘",children:[]},{level:3,title:"新建 iSCSI 目标",slug:"新建-iscsi-目标",children:[]},{level:3,title:"iSCSI 发起程序",slug:"iscsi-发起程序",children:[]}]},{level:2,title:"配置 CHAP 双向认证",slug:"配置-chap-双向认证",children:[{level:3,title:"连接时",slug:"连接时",children:[]}]}],filePathRelative:"serve/WS/FS/README.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},5134:(e,l,r)=>{r.r(l),r.d(l,{default:()=>ke});var s=r(6252),i=r(4252),n=r(8014),a=r(572),t=r(4685),o=r(8504),c=r(4091),_=r(3624),d=r(4139),u=r(8875),h=r(3140),p=r(7791);const g=(0,s._)("h1",{id:"文件和储存服务",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#文件和储存服务","aria-hidden":"true"},"#"),(0,s.Uk)(" 文件和储存服务")],-1),k={class:"custom-container tip"},m=(0,s._)("p",{class:"custom-container-title"},"TIP",-1),U=(0,s._)("p",null,"Windows Server 中的存储为专注虚拟化工作负载的软件定义数据中心 (SDDC) 客户提供了新的和改进的功能。 Windows Server 还为使用文件服务器处于现有工作负荷的企业客户提供广泛的支持。",-1),S={href:"https://docs.microsoft.com/zh-cn/windows-server/storage/storage",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("Windows Server 存储文档 | Microsoft Docs"),b=(0,s._)("h2",{id:"基本磁盘管理",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#基本磁盘管理","aria-hidden":"true"},"#"),(0,s.Uk)(" 基本磁盘管理")],-1),I=(0,s._)("p",null,[(0,s.Uk)("Windows 10 右键 "),(0,s._)("strong",null,"此电脑"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"管理"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"储存"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"磁盘管理")],-1),C=(0,s._)("p",null,[(0,s.Uk)("Windows Server 点击 "),(0,s._)("strong",null,"服务器管理器"),(0,s.Uk)(" 右上角的 "),(0,s._)("em",null,"工具"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"计算机管理"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"储存"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"磁盘管理")],-1),v=(0,s._)("p",null,[(0,s._)("img",{src:i,alt:"计算机管理 -> 磁盘管理"})],-1),x={href:"https://docs.microsoft.com/zh-cn/windows-server/storage/disk-management/overview-of-disk-management",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("磁盘管理概述 | Microsoft Docs"),D=(0,s._)("h2",{id:"配置储存池",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置储存池","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置储存池")],-1),w=(0,s._)("h2",{id:"配置-raid-10",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置-raid-10","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置 RAID 10")],-1),W=(0,s._)("p",null,"参考：",-1),R={href:"https://www.bilibili.com/video/BV1h54y1j7zS",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("2020中职网搭国赛 故障转移群集配置_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"),z=(0,s.Uk)(" [00:00 ~ 01:39]"),E={href:"https://blog.csdn.net/weixin_42747982/article/details/83685711",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("Windows磁盘管理、动态磁盘、RAID10_razorx的博客-CSDN博客"),B={href:"https://blog.csdn.net/c1052981766/article/details/49612793",target:"_blank",rel:"noopener noreferrer"},H=(0,s.Uk)("RAID0 RAID1 RAID5 RAID10区别_c1052981766的专栏-CSDN博客"),M=(0,s._)("p",null,"RAID 10 至少需要使用 4 块硬盘。",-1),N=(0,s._)("p",null,"先新建两个储存池（两个硬盘组一个储存池）：",-1),Y=(0,s._)("p",null,[(0,s._)("img",{src:n,alt:"新建储存池"}),(0,s._)("img",{src:a,alt:"新建储存池向导"})],-1),F=(0,s._)("p",null,"然后从储存池创建虚拟磁盘：",-1),T=(0,s._)("p",null,[(0,s._)("img",{src:t,alt:"新建虚拟磁盘"})],-1),y=(0,s._)("p",null,[(0,s._)("strong",null,"选择储存数据布局"),(0,s.Uk)(" 选择 "),(0,s._)("code",null,"Simple"),(0,s.Uk)("（简单，也就是带区卷，"),(0,s._)("code",null,"RAID 0"),(0,s.Uk)("）：")],-1),q=(0,s._)("p",null,[(0,s._)("img",{src:o,alt:"选择储存数据布局"})],-1),L=(0,s._)("p",null,[(0,s._)("strong",null,"指定虚拟磁盘大小"),(0,s.Uk)(" 选择 "),(0,s._)("strong",null,"最大大小"),(0,s.Uk)("：")],-1),O=(0,s._)("p",null,[(0,s._)("img",{src:c,alt:"指定虚拟磁盘大小"})],-1),V=(0,s._)("p",null,[(0,s.Uk)("建立完两个虚拟磁盘后，"),(0,s._)("strong",null,"计算机管理"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"储存"),(0,s.Uk)(" -> "),(0,s._)("strong",null,"磁盘管理"),(0,s.Uk)(" 内应该有两个未分配的磁盘。 右键其中一个 "),(0,s._)("strong",null,"新建带区卷"),(0,s.Uk)("（"),(0,s._)("code",null,"RAID 1"),(0,s.Uk)("）：")],-1),G=(0,s._)("p",null,[(0,s._)("img",{src:_,alt:"新建带区卷向导"})],-1),J=(0,s._)("p",null,"添加另一块未分配的磁盘",-1),K=(0,s._)("p",null,[(0,s._)("img",{src:d,alt:"选择磁盘"})],-1),Q=(0,s._)("p",null,[(0,s.Uk)("接下来分配驱动器号； 格式化卷时： 文件系统："),(0,s._)("code",null,"NTFS"),(0,s.Uk)("； 分配单元大小："),(0,s._)("code",null,"4096"),(0,s.Uk)("； 勾选 "),(0,s._)("strong",null,"执行快速格式化")],-1),X=(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s.Uk)("Yue_plus: 是的，没错。"),(0,s._)("code",null,"RAID 1"),(0,s.Uk)(" + "),(0,s._)("code",null,"RAID 0"),(0,s.Uk)(" = "),(0,s._)("code",null,"RAID 10"),(0,s.Uk)("。23333")])],-1),Z=(0,s._)("h2",{id:"配置-iscsi",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置-iscsi","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置 iSCSI")],-1),$=(0,s._)("h3",{id:"什么是-iscsi",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#什么是-iscsi","aria-hidden":"true"},"#"),(0,s.Uk)(" 什么是 iSCSI？")],-1),ee={href:"https://docs.microsoft.com/zh-cn/windows-server/storage/iscsi/iscsi-target-server",target:"_blank",rel:"noopener noreferrer"},le=(0,s.Uk)("iSCSI 目标服务器概述 | Microsoft Docs"),re={href:"https://zhuanlan.zhihu.com/p/60986068",target:"_blank",rel:"noopener noreferrer"},se=(0,s.Uk)("iSCSI的基本架构及操作简介 - 知乎"),ie={href:"https://baike.baidu.com/item/iSCSI/2169135?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},ne=(0,s.Uk)("iSCSI_百度百科"),ae=(0,s._)("h3",{id:"新建-iscsi-虚拟磁盘",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#新建-iscsi-虚拟磁盘","aria-hidden":"true"},"#"),(0,s.Uk)(" 新建 iSCSI 虚拟磁盘")],-1),te=(0,s._)("h3",{id:"新建-iscsi-目标",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#新建-iscsi-目标","aria-hidden":"true"},"#"),(0,s.Uk)(" 新建 iSCSI 目标")],-1),oe=(0,s._)("h3",{id:"iscsi-发起程序",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#iscsi-发起程序","aria-hidden":"true"},"#"),(0,s.Uk)(" iSCSI 发起程序")],-1),ce=(0,s._)("h2",{id:"配置-chap-双向认证",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#配置-chap-双向认证","aria-hidden":"true"},"#"),(0,s.Uk)(" 配置 CHAP 双向认证")],-1),_e=(0,s._)("p",null,[(0,s.Uk)("在 "),(0,s._)("a",{href:"#%E6%96%B0%E5%BB%BA-iscsi-%E7%9B%AE%E6%A0%87"},"新建 iSCSI 目标"),(0,s.Uk)(" 时可以配置 CHAP 身份验证； 也可以在 iSCSI 目标属性中更改认证密码。")],-1),de=(0,s._)("p",null,[(0,s._)("img",{src:u,alt:"iSCSI 目标属性"})],-1),ue=(0,s._)("h3",{id:"连接时",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#连接时","aria-hidden":"true"},"#"),(0,s.Uk)(" 连接时")],-1),he=(0,s._)("p",null,[(0,s._)("img",{src:h,alt:""})],-1),pe=(0,s._)("p",null,[(0,s.Uk)("如果开启了 "),(0,s._)("strong",null,"反向 CHAP"),(0,s.Uk)(" 认证，连接时需要到 "),(0,s._)("strong",null,"配置"),(0,s.Uk)(" 选项卡中设置反向 CHAP 密码：")],-1),ge=(0,s._)("p",null,[(0,s._)("img",{src:p,alt:""})],-1),ke={render:function(e,l){const r=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[g,(0,s._)("div",k,[m,U,(0,s._)("p",null,[(0,s._)("a",S,[f,(0,s.Wm)(r)])])]),b,I,C,v,(0,s._)("p",null,[(0,s._)("a",x,[A,(0,s.Wm)(r)])]),D,w,W,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",R,[j,(0,s.Wm)(r)]),z]),(0,s._)("li",null,[(0,s._)("a",E,[P,(0,s.Wm)(r)])]),(0,s._)("li",null,[(0,s._)("a",B,[H,(0,s.Wm)(r)])])]),M,N,Y,F,T,y,q,L,O,V,G,J,K,Q,X,Z,$,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",ee,[le,(0,s.Wm)(r)])]),(0,s._)("li",null,[(0,s._)("a",re,[se,(0,s.Wm)(r)])]),(0,s._)("li",null,[(0,s._)("a",ie,[ne,(0,s.Wm)(r)])])]),ae,te,oe,ce,_e,de,ue,he,pe,ge],64)}}},4252:(e,l,r)=>{e.exports=r.p+"assets/img/01.28d9c281.jpg"},8014:(e,l,r)=>{e.exports=r.p+"assets/img/02.011c953a.jpg"},572:(e,l,r)=>{e.exports=r.p+"assets/img/03.15e4b3a2.jpg"},4685:(e,l,r)=>{e.exports=r.p+"assets/img/04.97349c18.jpg"},8504:(e,l,r)=>{e.exports=r.p+"assets/img/05.6491a19a.jpg"},4091:(e,l,r)=>{e.exports=r.p+"assets/img/06.25c7133b.jpg"},3624:(e,l,r)=>{e.exports=r.p+"assets/img/07.7596a6ae.jpg"},4139:(e,l,r)=>{e.exports=r.p+"assets/img/08.7055bfe7.jpg"},8875:(e,l,r)=>{e.exports=r.p+"assets/img/09.4724a1cb.jpg"},7791:(e,l,r)=>{e.exports=r.p+"assets/img/10.7aff086c.jpg"},3140:(e,l,r)=>{e.exports=r.p+"assets/img/11.327ad3f5.jpg"}}]);