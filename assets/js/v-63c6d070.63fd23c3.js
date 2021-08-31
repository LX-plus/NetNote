"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5918],{4003:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-63c6d070",path:"/net/switch/",title:"交换机配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用设备",slug:"使用设备",children:[]},{level:2,title:"神州数码二层交换机划分vlan如下所示:",slug:"神州数码二层交换机划分vlan如下所示",children:[]},{level:2,title:"神州数码交换机改名如下所示:",slug:"神州数码交换机改名如下所示",children:[]},{level:2,title:"telnet管理:",slug:"telnet管理",children:[]},{level:2,title:"创建vlan，分配端口:",slug:"创建vlan-分配端口",children:[]},{level:2,title:"三层交换机与路由互通:",slug:"三层交换机与路由互通",children:[]},{level:2,title:"VRRP:",slug:"vrrp",children:[]},{level:2,title:"二层隔离:",slug:"二层隔离",children:[]},{level:2,title:"环路检测:",slug:"环路检测",children:[]},{level:2,title:"vsf:",slug:"vsf",children:[]},{level:2,title:"pbr:",slug:"pbr",children:[]},{level:2,title:"发送免费arp报文:",slug:"发送免费arp报文",children:[]},{level:2,title:"sflow采样:",slug:"sflow采样",children:[]},{level:2,title:"配置显示的帮助信息的语言类型:",slug:"配置显示的帮助信息的语言类型",children:[]}],filePathRelative:"net/switch/README.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},5367:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(6252);const l=(0,e._)("h1",{id:"交换机配置",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#交换机配置","aria-hidden":"true"},"#"),(0,e.Uk)(" 交换机配置")],-1),p=(0,e._)("h2",{id:"使用设备",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用设备","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用设备")],-1),c={href:"http://www.dcnetworks.com.cn/goods/43.html",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("DCN S4600 系列全千兆绿色智能安全接入交换机"),r={href:"http://www.dcnetworks.com.cn/goods/24.html",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Uk)("DCN S5750E 系列绿色智能万兆安全汇聚接入交换机"),o=(0,e.uE)('<h2 id="神州数码二层交换机划分vlan如下所示" tabindex="-1"><a class="header-anchor" href="#神州数码二层交换机划分vlan如下所示" aria-hidden="true">#</a> 神州数码二层交换机划分vlan如下所示:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>S4600-28P-SI&gt;enable\nS4600-28P-SI#config\nS4600-28P-SI(config)#vlan 10\nS4600-28P-SI(config-vlan10)#interface ethernet 1/0/1-4\nS4600-28P-SI(config-if-port-range)#switchport access vlan 10\nSet the port Ethernet1/0/1 access vlan 10 successfully\nSet the port Ethernet1/0/2 access vlan 10 successfully\nSet the port Ethernet1/0/3 access vlan 10 successfully\nSet the port Ethernet1/0/4 access vlan 10 successfully\nS4600-28P-SI(config-if-port-range)#exit\nS4600-28P-SI(config)#\n如果还要改其他vlan和端口把上面的数字改一下就行了\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="神州数码交换机改名如下所示" tabindex="-1"><a class="header-anchor" href="#神州数码交换机改名如下所示" aria-hidden="true">#</a> 神州数码交换机改名如下所示:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>S4600-28P-SI<span class="token comment">#config</span>\nS4600-28P-SI<span class="token comment">#hostname xxx </span>\nxxx<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#exit</span>\nxxx<span class="token comment">#</span>\n名字在xxx里改\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="telnet管理" tabindex="-1"><a class="header-anchor" href="#telnet管理" aria-hidden="true">#</a> telnet管理:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span>config\n<span class="token comment">#enable  特权</span>\n<span class="token comment">#config   全局</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#username li password admin  用户名为li 密码为admin</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#enable</span>\n\n password admin  设置特权密码admin \n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface vlan 1   网络 vlan1</span>\n<span class="token punctuation">(</span>config-if-vlan1<span class="token punctuation">)</span><span class="token comment">#ip address 192.168.10.200 255.255.255.0   设置VLAN1的IP以及子网掩码</span>\n<span class="token punctuation">(</span>config-if-vlan1<span class="token punctuation">)</span><span class="token comment">#no shutdown   打开vlan1</span>\n<span class="token comment">#exit</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#telnet-server enable (启用telnet服务）</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#exit 退出</span>\n<span class="token comment">#write  保存</span>\n<span class="token comment">#set default 恢复出厂设置</span>\n<span class="token comment">#reload      重启交换机</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="创建vlan-分配端口" tabindex="-1"><a class="header-anchor" href="#创建vlan-分配端口" aria-hidden="true">#</a> 创建vlan，分配端口:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>方法一：\n(config)#vlan 10          创建vlan10\n(config-vlan10)#exit      退出\n(config)#interface1/0/1-2     进入1-2端口\n(config-if-port-range)#switchport access vlan 10  分配1-2端口到vlan10\n(config-if-port-range)#exit 退出\n(config）#interface vlan 10     进入vlan10\n(config-if-vlan10）ip address 192.168.10.1 255.255.255.0     设置vlan10的网关为192.168.10.1\n\n方法二：\n(config）#vlan 10          创建vlan10\n(config-if-vlan10)switchport e1/0/1-2   分配1-2端口到vlan10\n(config）#interface vlan 10     进入vlan10\n(config-if-vlan10)ip address 192.168.10.1 255.255.255.0   设置vlan10的网关为192.168.10.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="三层交换机与路由互通" tabindex="-1"><a class="header-anchor" href="#三层交换机与路由互通" aria-hidden="true">#</a> 三层交换机与路由互通:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>三层交换机fa0/1接口连接路由fa0/0接口\n三层交换机\n(config)#ip routing\n(config)#interface e0/1\n(config)#no switchport\n(config)#ip address 192.168.1.253 255.255.255.0\n路由\n(config)#interface fa0/0\n(config)#ip address 192.168.1.254 255.255.255.0\n(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.253\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vrrp" tabindex="-1"><a class="header-anchor" href="#vrrp" aria-hidden="true">#</a> VRRP:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#router vrrp 10           /* 创建一个vrrp协议，标识为10 \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="二层隔离" tabindex="-1"><a class="header-anchor" href="#二层隔离" aria-hidden="true">#</a> 二层隔离:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#isolate-port group 1          /*创建隔离组1*/\n(config#)vlan 10\n(config-vlan30)#isolate-port group 1 switchport access e1/0/1-2       /* 将1-2端口加入隔离组*/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="环路检测" tabindex="-1"><a class="header-anchor" href="#环路检测" aria-hidden="true">#</a> 环路检测:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#loopback-detection interval-time 10 10    /*配置环路检测的时间间隔为10s*/\n(config)#loopback-detection control-recovery timeout 1800      /* 环路恢复时间为1800s */\n(config)#interface e1/0/1                                            /*进入需要配置环路检测的端口/*\n(config-if-ethernet1/0/1)#loopback-detection control block     /* 配置发现环路后的方式为阻塞该端口 */\n(config-if-ethernet1/0/1)#loopback-detection specified-vlan 10     /*指定环路检测vlan*/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="vsf" tabindex="-1"><a class="header-anchor" href="#vsf" aria-hidden="true">#</a> vsf:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#vsf domain 1   /* 配置vsf域号为1(域号一致)*/\n(config)#vsf member 1   /* 配置成员端口号为1（另一台为2）*/\n(config)#vsf port-group 1   /*创建堆叠口*/\n(config-vsf-port1)#vsf port-group interface1/0/25    /*将25端口加入堆叠*/\n(config-vsf-port1)#vsf port-group interface1/0/26    /*将26端口加入堆叠*/\n(config-vsf-port1)#exit\n(config）#vsf priority 1             /* 配置vsf优先级为1（越大越优）*/\n(config）#switchport convert mode vsf      /* 修改交换机为vsf模式 */\n\nvsf LACP MAD分裂检测(vsf成员都需配置)\n(config）#port-group 1           /*创建聚合组1*/\n(config）#interfaceport-channel 1     /*进入聚合组1*/\n(config-if-port-channel1)#vsf mad lacp enable    /*开启vsf lacp冲突检测*/\n(config）#exit\n(config）#vsf link delay 2000   /* 配置链路延迟上报为2000毫秒 */\n(config）#vsf mac-address persistent timer  /* 打开vsf的mac计时 */\n(config）#interfacee1/0/23;2/0/23     /*进入lacp检测端口（二层方向）*/\n(config-if-port-range）#swi mode trunk    /* 配置干道 */\n(config-if-port-range）#port-group 1 mode active   /* 将端口加入聚合组1，方式为主动 */\n(config-if-port-range）#lacp timeout short  /* 配置lacp快速检测 */\n\nvsf BFD MAD分裂检测(vsf成员都需配置)\n(config）#vlan 111        /* 创建用于bfd mad检测的vlan */\n(config-vlan111)#switch interface1/0/24      /* 将两台三层之间用于检测的端口加入检测vlan（需物理连线） */\n(config-vlan111)#exit\n(config）#int vlan 111     /* 进入vlan111*/\n(config-if-vlan111)#vsf mad ip address 192.168.1.1 255.255.255.0 member 1   /* 配置bfd的检测vlan ip（另一台需同一网段） */\n(config-if-vlan111)#vsf mad bfd enable   /*开启bfd mad检测*/\n\n删除vsf\n(config）#switch convert mode stand-alone    /* 配置交换机为独立模式 */\n(config）#exit\n(config)#dir                 /* 查看配置文件*/\n(config)#delete vsf.cfg\n(config)#delete vsf_startup.cfg \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="pbr" tabindex="-1"><a class="header-anchor" href="#pbr" aria-hidden="true">#</a> pbr:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list extended internet  /* 创建一个名为“internet”的扩展控制列表 */</span>\n<span class="token punctuation">(</span>config-ip-ext-nacl-internet<span class="token punctuation">)</span><span class="token comment">#permit ip 10.10.0.0 0.0.255.255 202.99.192.0 0.0.0.15   /* 允许10.10.0.0/16访问202.99.192.0/20 */</span>\n<span class="token punctuation">(</span>config-ip-ext-nacl-internet<span class="token punctuation">)</span><span class="token comment">#permit ip 10.100.100.0 0.0.0.255 202.99.192.0 0.0.0.15  /* 允许10.100.100.0/24访问202.99.192.0/20 */</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#class-map 1        /* 创建分类匹配表1 */</span>\n<span class="token punctuation">(</span>config-classmap-1<span class="token punctuation">)</span><span class="token comment">#match access-group internet     /*在分类匹配表中添加“internet”ACL列表 */</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#policy-map 1       /* 创建策略表1 */</span>\n<span class="token punctuation">(</span>config-policymap-1<span class="token punctuation">)</span><span class="token comment">#class 1       /* 策略表1匹配分类表1 */</span>\n<span class="token punctuation">(</span>config-policymap-1-class-1<span class="token punctuation">)</span><span class="token comment">#set ip nexthop 10.10.255.2      /*设置qos流量下一跳的IP地址10.10.255.2（设置数据流需要经过哪个ip）*/</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int e1/0/23       /*进入需要控制的ip的入接口 */</span>\n<span class="token punctuation">(</span>config-if-ethernet1/0/23<span class="token punctuation">)</span><span class="token comment">#service-policy input 1      /* 挂载入口策略1 */</span>\n\n三步，一挂载\n第一步，创建acl\n第二步，创建分类匹配表，匹配acl\n第三步，创建策略，匹配分类匹配表，设置下一跳\n挂载，将策略表挂载到访问端口\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="发送免费arp报文" tabindex="-1"><a class="header-anchor" href="#发送免费arp报文" aria-hidden="true">#</a> 发送免费arp报文:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip gratuitous-arp 400  /*设置免费发送arp报文，间隔为400s*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="sflow采样" tabindex="-1"><a class="header-anchor" href="#sflow采样" aria-hidden="true">#</a> sflow采样:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow agent-address 10.10.200.254     /*设置采样的代理（源）地址为10.10.200.254*/</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow destination 10.10.200.50        /*采样后发送到分析器10.10.200.50*/</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow priority 1                      /*设置收报文的优先级为1（越大越优先，尽量配小）*/</span>\n<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int e1/0/1</span>\n<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow rate input 1000 /*设置采样的输入速率为1000pps*/</span>\n<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow rate output 1000 /*设置采样的输出速率为1000pps*/</span>\n<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow counter-interval 60   /*设置采样的最大间隔为60s*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="配置显示的帮助信息的语言类型" tabindex="-1"><a class="header-anchor" href="#配置显示的帮助信息的语言类型" aria-hidden="true">#</a> 配置显示的帮助信息的语言类型:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SWITCH<span class="token comment">#language ?</span>\n   chinese Set language Chinese\n   english <span class="token builtin class-name">set</span> language English\nSWITCH<span class="token comment">#language chinese</span>\nSWITCH<span class="token comment">#language ?     !请注意使用“？”时，帮助信息已经成为了中文</span>\n   chinese 设置语言为中文\n   english 设置语言为英文\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',26),u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,p,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",c,[i,(0,e.Wm)(a)])]),(0,e._)("li",null,[(0,e._)("a",r,[t,(0,e.Wm)(a)])])]),o],64)}}}}]);