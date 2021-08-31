"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8186],{158:(a,e,i)=>{i.r(e),i.d(e,{data:()=>l});const l={key:"v-6e088d5f",path:"/net/manual/command/03-2_MAC.html",title:"MAC 地址表配置命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"2.1 MAC地址表配置命令",slug:"_2-1-mac地址表配置命令",children:[{level:3,title:"2.1.1 mac-address-table avoid-collision",slug:"_2-1-1-mac-address-table-avoid-collision",children:[]},{level:3,title:"2.1.2 clear collision-mac-address-table",slug:"_2-1-2-clear-collision-mac-address-table",children:[]},{level:3,title:"2.1.3 clear mac-address-table dynamic",slug:"_2-1-3-clear-mac-address-table-dynamic",children:[]},{level:3,title:"2.1.4 mac-address-learning cpu-control",slug:"_2-1-4-mac-address-learning-cpu-control",children:[]},{level:3,title:"2.1.5 mac-address-table aging-time",slug:"_2-1-5-mac-address-table-aging-time",children:[]},{level:3,title:"2.1.6 mac-address-table static | static-multicast | blackhole",slug:"_2-1-6-mac-address-table-static-static-multicast-blackhole",children:[]},{level:3,title:"2.1.7 show collision-mac-address-table",slug:"_2-1-7-show-collision-mac-address-table",children:[]},{level:3,title:"2.1.8 show mac-address-table",slug:"_2-1-8-show-mac-address-table",children:[]}]},{level:2,title:"2.2 MAC Notification配置命令",slug:"_2-2-mac-notification配置命令",children:[{level:3,title:"2.2.1 snmp-server enable traps mac-notification",slug:"_2-2-1-snmp-server-enable-traps-mac-notification",children:[]},{level:3,title:"2.2.2 mac-address-table notification",slug:"_2-2-2-mac-address-table-notification",children:[]},{level:3,title:"2.2.3 mac-address-table notification interval",slug:"_2-2-3-mac-address-table-notification-interval",children:[]},{level:3,title:"2.2.4 mac-address-table notification history-size",slug:"_2-2-4-mac-address-table-notification-history-size",children:[]},{level:3,title:"2.2.5 mac-notification",slug:"_2-2-5-mac-notification",children:[]},{level:3,title:"2.2.6 show mac-notification summary",slug:"_2-2-6-show-mac-notification-summary",children:[]},{level:3,title:"2.2.7 clear mac-notification statistics",slug:"_2-2-7-clear-mac-notification-statistics",children:[]}]}],filePathRelative:"net/manual/command/03-2_MAC.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},8012:(a,e,i)=>{i.r(e),i.d(e,{default:()=>t});const l=(0,i(6252).uE)('<h1 id="mac-地址表配置命令" tabindex="-1"><a class="header-anchor" href="#mac-地址表配置命令" aria-hidden="true">#</a> MAC 地址表配置命令</h1><h2 id="_2-1-mac地址表配置命令" tabindex="-1"><a class="header-anchor" href="#_2-1-mac地址表配置命令" aria-hidden="true">#</a> 2.1 MAC地址表配置命令</h2><h3 id="_2-1-1-mac-address-table-avoid-collision" tabindex="-1"><a class="header-anchor" href="#_2-1-1-mac-address-table-avoid-collision" aria-hidden="true">#</a> 2.1.1 mac-address-table avoid-collision</h3><ul><li>S5750E交换机不支持此命令。</li></ul><h3 id="_2-1-2-clear-collision-mac-address-table" tabindex="-1"><a class="header-anchor" href="#_2-1-2-clear-collision-mac-address-table" aria-hidden="true">#</a> 2.1.2 clear collision-mac-address-table</h3><ul><li><p>命令：<code>clear collision-mac-address-table</code></p></li><li><p>功能：清空 hash 冲突表。</p></li><li><p>参数：无</p></li><li><p>命令模式：特权用户配置模式。</p></li><li><p>使用指南：如果使能了 hash 冲突 mac 下发 ffp 表项功能（mac-address-table avoid-collision），已经下发 ffp 的冲突 mac 将不能清除。</p></li><li><p>举例：清空 hash 冲突 mac 表。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#clear collision-mac-address-table\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-1-3-clear-mac-address-table-dynamic" tabindex="-1"><a class="header-anchor" href="#_2-1-3-clear-mac-address-table-dynamic" aria-hidden="true">#</a> 2.1.3 clear mac-address-table dynamic</h3><ul><li><p>命令：<code>clear mac-address-table dynamic [address &lt;mac-addr&gt;] [vlan &lt;vlan-id&gt;] [interface [ethernet | portchannel] &lt;interface-name&gt;]</code></p></li><li><p>功能：删除动态地址表项。</p></li><li><p>参数： <code>&lt;mac-addr&gt;</code> 要删除的MAC地址；<code>&lt;interface-name&gt;</code> 转发MAC数据包的端口名称；<code>&lt;vlan-id&gt;</code> 为 VLAN 号。</p></li><li><p>命令模式：特权用户配置模式。</p></li><li><p>使用指南：删除交换机 MAC 地址表中存在的所有 DYNAMIC 地址表项，而不能删除 APPLICATION、SYSTEM 类型表项。MAC地址表项根据来源不同可以分为几类：DYNAMIC、STATIC、APPLICATION、SYSTEM。DYNAMIC 类型是交换机自动学习到的动态 MAC 地址表项，能够被交换机自动老化。</p></li><li><p>举例：删除所有动态 MAC。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#clear mac-address-table dynamic\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-1-4-mac-address-learning-cpu-control" tabindex="-1"><a class="header-anchor" href="#_2-1-4-mac-address-learning-cpu-control" aria-hidden="true">#</a> 2.1.4 mac-address-learning cpu-control</h3><ul><li><p>命令：<code>mac-address-learning cpu-control no mac-address-learning cpu-control</code></p></li><li><p>功能：使能软件控制 mac 地址学习；no 命令恢复为硬件自动学习 mac 地址。</p></li><li><p>参数：无。</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>缺省情况：缺省为硬件自动学习。</p></li><li><p>使用指南：port-security，private-vlan，mac-notification，mac-limit 等功能都需要 mac 软学习的支持，如果要使能这些功能必须要打开 mac 软学习。</p></li><li><p>举例：打开 mac 软学习。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#mac-address-learning cpu-control\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-1-5-mac-address-table-aging-time" tabindex="-1"><a class="header-anchor" href="#_2-1-5-mac-address-table-aging-time" aria-hidden="true">#</a> 2.1.5 mac-address-table aging-time</h3><ul><li><p>命令：<code>mac-address-table aging-time &lt;0 | aging-time&gt; no mac-address-table aging-time</code></p></li><li><p>功能：设置 mac 地址表的老化时间。参数：0表示动态表项不老化，<code>&lt;aging-time&gt;</code>是要设置的老化时间，取值范围<code>&lt;10-1000000&gt;</code>，单位是秒。</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>缺省情况：缺省的老化时间为300秒。</p></li><li><p>使用指南：当地址表项在老化时间内没有被命中，该表项将会老化。老化时间要根据具体的网络运行情况来设置，一般采用缺省值即可。</p></li><li><p>举例：设置老化时间为600秒。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# mac-address-table aging-time 600\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-1-6-mac-address-table-static-static-multicast-blackhole" tabindex="-1"><a class="header-anchor" href="#_2-1-6-mac-address-table-static-static-multicast-blackhole" aria-hidden="true">#</a> 2.1.6 mac-address-table static | static-multicast | blackhole</h3><p>-- 命令：<code>mac-address-table {static | static-multicast | blackhole} address &lt;mac-addr&gt; vlan &lt;vlan-id&gt; [interface [ethernet | portchannel] &lt;interface-name&gt;] | [source|destination|both|] no mac-address-table {static | static-multicast | blackhole | dynamic} [address &lt;mac-addr&gt;] [vlan &lt;vlan-id&gt;] [interface [ethernet | portchannel] &lt;interface-name&gt;]</code> -- 功能：添加或修改静态地址表项、静态组播MAC地址、过滤地址表项，此命令的 no 操作为删除静态地址表项、静态组播 MAC 地址、过滤地址表项。 -- 参数：static 静态表项；static-multicast 静态组播表项；blackhole 过滤表项，配置过滤表项的目的是丢弃指定 MAC 地址的帧，用于 过滤不想让其通过的流量，可以选择过滤源地址、目标地址或同时过滤，可以过滤源地址和目标地址，当选择过滤表项时，blackhole 地址不能 基于端口，不对 interface 进行配置；dynamic 动态地址表项；<code>&lt;mac-addr&gt;</code> 要添加或删除的MAC地址；<code>&lt;interface-name&gt;</code> 转发 MAC 数据 包的端口名称；<code>&lt;vlan-id&gt;</code> 为 VLAN 号；source 表示基于源地址过滤；destination 表示基于目的地址过滤；both 表示基于源地址和目的地址 过滤，默认是 both 选项。</p><ul><li><p>命令模式：全局配置模式。</p></li><li><p>缺省情况：当配置 VLAN 接口并且该 VLAN 接口 UP 后，系统会生成一个系统固有 MAC 地址与该 VLAN 号对应的静态地址映射表项。</p></li><li><p>使用指南：在某些特殊用途或者交换机不能动态的学习到 MAC 地址，用户可以使用本命令将MAC地址与端口及 VLAN 手工建立映射关系。 命令no mac-address-table 为删除MAC地址表项时，可以删除交换机 MAC 地址表中存在的所有 DYNAMIC、STATIC、过 滤MAC地址表项，而不能删除 APPLICATION、SYSTEM 类型表项。MAC地址表项根据来源不同可以分为几类：DYNAMIC、ST ATIC、APPLICATION、SYSTEM。DYNAMIC 类型是交换机自动学习到的动态MAC地址表项，能够被交换机自动老化；STAT IC 类型是用户添加的静态 MAC 地址表项（包括 blackhole 类型表项）；APPLICATION 类型是交换机上层应用协议（如dot1x、 security port...）添加的静态 MAC 地址表项；SYSTEM 类型是交换机根据 VLAN 接口状态而添加的静态 MAC 地址表项。添加 S TATIC 类型表项时，可以覆盖冲突的 DYNAMIC 类型表项，而不能覆盖冲突的 APPLICATION、SYSTEM 类型表项。本命令可以用来 配置静态组播 MAC，配置静态组播 MAC 后，当交换机收到该组播 MAC 的流量后会转发到指定 VLAN 的指定端口。</p></li><li><p>举例：端口1/0/1属于 VLAN200，与MAC地址为 00-03-0f-f0-00-18 建立地址映射。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)#mac-address-table static address 00-03-0f-f0-00-18 vlan 200 interface ethernet 1/0/1 \n配置一条静态组播MAC 01-00-5e-00-00-01，出口为1/0/1。\nSwitch(config)#mac-address-table static-multicast address 01-00-5e-00-00-01 vlan 1 interface ethernet1/0/1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h3 id="_2-1-7-show-collision-mac-address-table" tabindex="-1"><a class="header-anchor" href="#_2-1-7-show-collision-mac-address-table" aria-hidden="true">#</a> 2.1.7 show collision-mac-address-table</h3><ul><li><p>命令：<code>show collision-mac-address-table</code></p></li><li><p>功能：打印 hash 冲突 mac 表。</p></li><li><p>参数：无</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：如果使能了 hash 冲突 mac 下发 ffp 表项功能（mac-address-table avoid-collision），已经下发 ffp 的冲突 mac 地址前以*标记。</p></li><li><p>举例：打印 hash 冲突 mac 表。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#show collision-mac-address-table \nThe max number can be recorded is 200 \nThe max number of collision is 0 \nThe current number recorded is 0 \nMAC Address VLAN Collision-count\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul><h3 id="_2-1-8-show-mac-address-table" tabindex="-1"><a class="header-anchor" href="#_2-1-8-show-mac-address-table" aria-hidden="true">#</a> 2.1.8 show mac-address-table</h3><ul><li><p>命令：<code>show mac-address-table [static | blackhole | multicast | aging-time &lt;aging-time&gt; | count] [address &lt;mac-addr&gt;] [vlan &lt;vlan-id&gt;] [count] [interface&lt;interface-name&gt;] </code></p></li><li><p>功能：显示交换机当前的MAC地址表的内容</p></li><li><p>参数：static 静态表项；blackhole 过滤表项；aging-time <code>&lt;aging-time&gt;</code>MAC地址老化时间；multicast 组播表项；count 显示表项的条目总数；<code>&lt;mac-addr&gt;</code> 要显示的表项包含的MAC地址；<code>&lt;vlan-id&gt;</code> 要显示的表项包含的 VLAN 号；<code>&lt;interface-name&gt;</code> 要显示的表项包含的端口名称。</p></li><li><p>命令模式：特权和配置模式。</p></li><li><p>缺省情况：系统缺省不显示 MAC 地址表的内容。</p></li><li><p>使用指南：本命令可以分类显示各种 MAC 地址表项，也可以使用命令 show mac-address-table 显示当前交换机内所有的 MAC 地址表项。</p></li><li><p>举例：显示当前 MAC 地址表中的过滤表项。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#show mac-address-table blackhole\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="_2-2-mac-notification配置命令" tabindex="-1"><a class="header-anchor" href="#_2-2-mac-notification配置命令" aria-hidden="true">#</a> 2.2 MAC Notification配置命令</h2><h3 id="_2-2-1-snmp-server-enable-traps-mac-notification" tabindex="-1"><a class="header-anchor" href="#_2-2-1-snmp-server-enable-traps-mac-notification" aria-hidden="true">#</a> 2.2.1 snmp-server enable traps mac-notification</h3><ul><li><p>命令：<code>snmp-server enable traps mac-notification no snmp-server enable traps mac-notification</code></p></li><li><p>功能：全局配置打开 MAC 地址 trap 通知；no 命令全局关闭 MAC 地址 trap 通知。</p></li><li><p>参数：无。</p></li><li><p>缺省情况：全局关闭 MAC 地址 trap 通知。</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：该命令和 MAC 地址通知开关一起使用，该开关关闭的情况下，其余配置可见，但是功能失效。</p></li><li><p>举例：在交换机上打开 MAC 地址 trap 通知。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#snmp-server enable traps mac-notification\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-2-2-mac-address-table-notification" tabindex="-1"><a class="header-anchor" href="#_2-2-2-mac-address-table-notification" aria-hidden="true">#</a> 2.2.2 mac-address-table notification</h3><ul><li><p>命令：<code>mac-address-table notification no mac-address-table notification</code></p></li><li><p>功能：全局配置打开 MAC 地址通知；no 命令全局关闭 MAC 地址通知。</p></li><li><p>参数：无。</p></li><li><p>缺省情况：全局关闭 MAC 地址通知。</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：该命令和 snmp 部分 trap 开关一起使用，该开关关闭的情况下，其余配置可见，但是功能失效。</p></li><li><p>举例：在交换机上打开 MAC 地址通知。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#mac-address-table notification\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-2-3-mac-address-table-notification-interval" tabindex="-1"><a class="header-anchor" href="#_2-2-3-mac-address-table-notification-interval" aria-hidden="true">#</a> 2.2.3 mac-address-table notification interval</h3><ul><li><p>命令：<code>mac-address-table notification interval &lt;0-86400&gt; no mac-address-table notification interval</code></p></li><li><p>功能：配置发送 MAC 地址通知的时间间隔；no 命令恢复该时间间隔为默认值。</p></li><li><p>参数：interval :发送通知的时间间隔，单位为：秒；范围：0-86400。</p></li><li><p>缺省情况：MAC 地址通知的时间间隔为默认值30s</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：该命令在全局开关关闭后可以继续配置。</p></li><li><p>举例：将交换机发送 MAC 地址通知的时间间隔改为30s。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#mac-address-table notification interval 30\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-2-4-mac-address-table-notification-history-size" tabindex="-1"><a class="header-anchor" href="#_2-2-4-mac-address-table-notification-history-size" aria-hidden="true">#</a> 2.2.4 mac-address-table notification history-size</h3><ul><li><p>命令：<code>mac-address-table notification history-size &lt;0-500&gt; no mac-address-table notification history-size</code></p></li><li><p>功能：配置存储 MAC 变化消息的最大条数。</p></li><li><p>参数：history-size:发送通知的数据长度，范围：0-500。</p></li><li><p>缺省情况：MAC 变化消息的最大条数为默认值10</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：该命令在全局开关关闭后可以继续配置。</p></li><li><p>举例：将交换机发送MAC变化消息的最大条数改为256。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#mac-address-table notification history-size 256\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h3 id="_2-2-5-mac-notification" tabindex="-1"><a class="header-anchor" href="#_2-2-5-mac-notification" aria-hidden="true">#</a> 2.2.5 mac-notification</h3><ul><li><p>命令：<code>mac-notification {added | both | removed} no mac-notification</code></p></li><li><p>功能：配置指定端口 MAC 地址通知功能；no 命令取消该端口 MAC 地址通知功能。</p></li><li><p>参数：</p><ul><li>added：添加的 MAC 地址；</li><li>removed：删除的 MAC 地址；</li><li>both：添加和删除的 MAC 地址。</li></ul></li><li><p>缺省情况：缺省端口不做 MAC 地址通知功能。</p></li><li><p>命令模式：端口配置模式。</p></li><li><p>使用指南：该命令在全局开关关闭后可以继续配置。</p></li><li><p>举例：将交换机的端口ethernet 1/0/5配置对添加的 MAC 地址进行通知。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(Config)#in ethernet 1/0/5 \nSwitch(Config-if-ethernet 1/0/5)#mac-notification added\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h3 id="_2-2-6-show-mac-notification-summary" tabindex="-1"><a class="header-anchor" href="#_2-2-6-show-mac-notification-summary" aria-hidden="true">#</a> 2.2.6 show mac-notification summary</h3><ul><li><p>命令：<code>show mac-notification summary</code></p></li><li><p>功能：显示 MAC 通知的配置情况和通知报文数据。</p></li><li><p>参数：无。</p></li><li><p>缺省情况：缺省情况下不显示。</p></li><li><p>命令模式：特权模式。</p></li><li><p>使用指南：可以通过该命令查看 MAC 地址的操作情况和 MAC 通知 trap 的发送情况。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#show mac-notification summary \nMAC address notification:enabled \nMAC address snmp traps:enabled \nMAC address notification interval = 10 \nMAC address notification history log size = 120 \nMAC address added = 0 MAC address removed = 0 \nMAC address snmp traps generated = 0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li></ul><h3 id="_2-2-7-clear-mac-notification-statistics" tabindex="-1"><a class="header-anchor" href="#_2-2-7-clear-mac-notification-statistics" aria-hidden="true">#</a> 2.2.7 clear mac-notification statistics</h3><ul><li><p>命令：<code>clear mac-notification statistics</code></p></li><li><p>功能：清除MAC操作和MAC通知trap的计数值。</p></li><li><p>参数：无。</p></li><li><p>缺省情况：无。</p></li><li><p>命令模式：特权模式。</p></li><li><p>使用指南：该命令和show命令一起使用，执行该命令后可以通过show命令查看该命令执行的结果。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch# clear mac-notification statistics\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul>',34),t={render:function(a,e){return l}}}}]);