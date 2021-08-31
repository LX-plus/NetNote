"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6638],{7751:(e,n,l)=>{l.r(n),l.d(n,{data:()=>i});const i={key:"v-7b5c025c",path:"/net/manual/command/17_info-center.html",title:"Info-center（信息中心）命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Info-center enable",slug:"info-center-enable",children:[]},{level:2,title:"Terminal monitor",slug:"terminal-monitor",children:[]},{level:2,title:"Terminal debug",slug:"terminal-debug",children:[]},{level:2,title:"Terminal logging",slug:"terminal-logging",children:[]},{level:2,title:"Terminal trapping",slug:"terminal-trapping",children:[]},{level:2,title:"show info-center",slug:"show-info-center",children:[]},{level:2,title:"show info-center source",slug:"show-info-center-source",children:[]},{level:2,title:"show info-center channel",slug:"show-info-center-channel",children:[]},{level:2,title:"show info-center direction",slug:"show-info-center-direction",children:[]},{level:2,title:"show info-center logbuffer",slug:"show-info-center-logbuffer",children:[]},{level:2,title:"show info-center trapbuffer",slug:"show-info-center-trapbuffer",children:[]},{level:2,title:"show info-center logfile",slug:"show-info-center-logfile",children:[]},{level:2,title:"info-center channel",slug:"info-center-channel",children:[]},{level:2,title:"info-center source",slug:"info-center-source",children:[]},{level:2,title:"info-center console",slug:"info-center-console",children:[]},{level:2,title:"info-center monitor",slug:"info-center-monitor",children:[]},{level:2,title:"info-center logbuffer",slug:"info-center-logbuffer",children:[]},{level:2,title:"info-center trapbuffer",slug:"info-center-trapbuffer",children:[]},{level:2,title:"info-center loghost",slug:"info-center-loghost",children:[]},{level:2,title:"info-center logfile",slug:"info-center-logfile",children:[]},{level:2,title:"info-center reset",slug:"info-center-reset",children:[]},{level:2,title:"info-center save all",slug:"info-center-save-all",children:[]},{level:2,title:"info-center list all disk",slug:"info-center-list-all-disk",children:[]},{level:2,title:"info-center timestamp",slug:"info-center-timestamp",children:[]},{level:2,title:"info-center test",slug:"info-center-test",children:[]}],filePathRelative:"net/manual/command/17_info-center.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},8050:(e,n,l)=>{l.r(n),l.d(n,{default:()=>t});const i=(0,l(6252).uE)('<h1 id="info-center-信息中心-命令" tabindex="-1"><a class="header-anchor" href="#info-center-信息中心-命令" aria-hidden="true">#</a> <code>Info-center</code>（信息中心）命令</h1><p>输出通道有 10 个，0-5 为缺省，如下表：</p><table><thead><tr><th style="text-align:center;">通道号</th><th style="text-align:center;">通道名称（缺省）</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">console</td><td style="text-align:center;">控制台</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">monitor</td><td style="text-align:center;">监视终端</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">loghost</td><td style="text-align:center;">日志主机</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">trapbuffer</td><td style="text-align:center;">告警缓冲</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">logbuffer</td><td style="text-align:center;">日志缓冲</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">Channel5</td><td style="text-align:center;">Snmp 代理(未使用)</td></tr><tr><td style="text-align:center;">6~8</td><td style="text-align:center;">Channeln（n 为6~8）</td><td style="text-align:center;">非缺省通道，配置使用</td></tr><tr><td style="text-align:center;">9</td><td style="text-align:center;">logfile</td><td style="text-align:center;">日志文件</td></tr></tbody></table><h2 id="info-center-enable" tabindex="-1"><a class="header-anchor" href="#info-center-enable" aria-hidden="true">#</a> <code>Info-center enable</code></h2><ul><li>命令： <ul><li><code>info-center enable</code></li><li><code>no info-center enable</code></li></ul></li><li>功能： 该命令负责开启信息中心输出的功能。 无论是否开启输出功能，信息中心仍然可以正常配置。 也就是说，该命令是信息中心控制的信息输出的一个开关。 去使能可以关闭正在输出的信息，使能后原有的配置仍然生效。</li><li>参数：无。</li><li>缺省情况：缺省关闭。</li><li>命令模式：全局配置模式。</li><li>使用指南：全局模式下开启/关闭信息中心输出的功能。</li><li>举例：<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)#info-center enable\nSwitch(config)#no info-center enable\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="terminal-monitor" tabindex="-1"><a class="header-anchor" href="#terminal-monitor" aria-hidden="true">#</a> <code>Terminal monitor</code></h2><ul><li>命令： <ul><li><code>terminal monitor</code></li><li><code>no terminal monitor</code></li></ul></li><li>功能： <ul><li>该命令的功能和 info-center enable 相同地方是能开关信息中心命令输出，但也有区别。</li><li><code>info-center enable</code> 仅仅是开关，关闭后能保存当时三种信息源的开关状态，而 <code>terminal monitor</code> 开启与关闭将对三种信息源统一开启或关闭。</li><li>比如如果仅仅打开了 debug 信息源输出，<code>no info-center enable</code> 将不会有输出，<code>info-center enable</code> 将仍然只有 debug 信息源输出；</li><li>但如果 <code>no terminal monitor</code> 之后再 <code>terminal monitor</code> 则三种信息源都有输出。</li></ul></li><li>参数：无。</li><li>缺省情况：缺省关闭。</li><li>命令模式：全局配置模式。</li><li>使用指南：全局模式下开启/关闭信息中心输出使能。</li><li>举例：<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# terminal monitor\nSwitch(config)#no terminal monitor\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="terminal-debug" tabindex="-1"><a class="header-anchor" href="#terminal-debug" aria-hidden="true">#</a> <code>Terminal debug</code></h2><ul><li>命令： <ul><li><code>terminal debug</code></li><li><code>no terminal debug</code></li></ul></li><li>功能：该命令的功能和 <code>terminal monitor</code> 类似，但这个命令仅仅控制 debug 信息源是否输出。</li><li>参数：无。</li><li>缺省情况：缺省关闭。</li><li>命令模式：全局配置模式。</li><li>使用指南：全局模式下开启/关闭信息中心信息源 debug 输出使能。</li><li>举例：<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# terminal debug\nSwitch(config)#no terminal debug\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="terminal-logging" tabindex="-1"><a class="header-anchor" href="#terminal-logging" aria-hidden="true">#</a> <code>Terminal logging</code></h2><ul><li>命令： <ul><li><code>terminal logging</code></li><li><code>no terminal logging</code></li></ul></li><li>功能：该命令的功能和 <code>terminal monitor</code> 类似，但这个命令仅仅控制 log 信息源是否输出。</li><li>参数：无。</li><li>缺省情况：缺省关闭。</li><li>命令模式：全局配置模式。</li><li>使用指南：全局模式下开启/关闭信息中心信息源 log 输出使能。</li><li>举例：<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# terminal logging\nSwitch(config)#no terminal logging\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="terminal-trapping" tabindex="-1"><a class="header-anchor" href="#terminal-trapping" aria-hidden="true">#</a> <code>Terminal trapping</code></h2><ul><li>命令： <ul><li><code>terminal trapping</code></li><li><code>no terminal trapping</code></li></ul></li><li>功能：该命令的功能和 <code>terminal monitor</code> 类似，但这个命令仅仅控制 trap 信息源是否输出。</li><li>参数：无。</li><li>缺省情况：缺省关闭。</li><li>命令模式：全局配置模式。</li><li>使用指南：全局模式下开启/关闭信息中心信息源trap 输出使能。</li><li>举例：<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# terminal trapping\nSwitch(config)#no terminal trapping\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="show-info-center" tabindex="-1"><a class="header-anchor" href="#show-info-center" aria-hidden="true">#</a> <code>show info-center</code></h2><ul><li><p>命令：</p><ul><li>盒式设备支持：<code>show info-center </code></li><li>机架式设备支持：<code>show info-center slot {&lt;slot ID&gt;}</code></li></ul></li><li><p>功能： 该命令主要用于显示信息中心包含哪些可以配置的资源。 包含了所有信息源、通道以及输出方向各项资源名称信息等。 需要注意的是，snmp 输出方向虽然显示了，但并不支持，也不能配置。</p></li><li><p>缺省情况：缺省关闭。</p></li><li><p>命令模式：所有模式。</p></li><li><p>使用指南：显示信息中心所包含的信息源、通道以及输出方向名称信息。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sysname#show info-center\ncard name master card\nsources\ndebug log trap\nchannels\nchannel 0 name console\nchannel 1 name monitor\nchannel 2 name loghost\nchannel 3 name trapbuffer\nchannel 4 name logbuffer\nchannel 5 name channel5\nchannel 6 name channel6\nchannel 7 name channel7\nchannel 8 name channel8\nchannel 9 name channel9\ndirections\nconsole monitor loghost trapbuffer logbuffer snmpagent logfile\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>显示结果各域说明：</p><table><thead><tr><th style="text-align:center;">域</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">Card name</td><td style="text-align:center;">需要查看信息中心配置的板卡名称，在盒式设备上固定内容为master</td></tr><tr><td style="text-align:center;">card</td><td style="text-align:center;">机架式设备相关说明待后续提交机架式功能时补充。</td></tr><tr><td style="text-align:center;">Sources</td><td style="text-align:center;">所有信息源名称</td></tr><tr><td style="text-align:center;">Channels</td><td style="text-align:center;">所有通道名称及编号</td></tr><tr><td style="text-align:center;">Directions</td><td style="text-align:center;">所有方向名称（snmpagent 未使用）</td></tr><tr><td style="text-align:center;">Slot ID</td><td style="text-align:center;">板卡标识，1，2，3...M1,M2</td></tr></tbody></table></li></ul><h2 id="show-info-center-source" tabindex="-1"><a class="header-anchor" href="#show-info-center-source" aria-hidden="true">#</a> <code>show info-center source</code></h2><ul><li><p>命令：</p><ul><li>盒式设备支持：<code>show info-center source {debug | log | trap}</code></li><li>机架式设备支持：<code>show info-center source {debug | log | trap} slot {&lt;slot ID&gt;}</code></li></ul></li><li><p>功能：显示信息中心指定信息源配置信息。</p></li><li><p>缺省情况：缺省关闭。</p></li><li><p>命令模式：所有模式。</p></li><li><p>使用指南：该命令主要用于显示信息中心指定信息源配置信息。包含信息源名称、时间戳格式</p></li><li><p>以及该信息源绑定的通道配置信息。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sysname#show info-center source debug\ncard name master card\nsource debug\ntime stamp format DATE\nchannels\nchannel 0 name console level debugging prefix off\nchannel 1 name monitor level debugging prefix off\nchannel 4 name logbuffer level errors prefix on\nchannel 9 name channel9 level errors prefix on\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>显示结果各域说明：</p><ul><li>Card name <ul><li>需要查看信息中心配置的板卡名称，在盒式设备上固定内容为 master card。</li><li>机架式设备相关说明待后续提交机架式功能时补充。</li></ul></li><li>Source <ul><li>指定信息源名称</li></ul></li><li>Time stamp <ul><li>时间戳格式，时间戳相关说明可以参考信息源信息的格式章节。</li></ul></li><li>Channels <ul><li>指定信息源绑定的通道名称以及配置。</li><li>其中： <ul><li>level 表示允许显示的信息安全级别。</li><li>Prefix 表示输出的信息是否包含前缀。 前缀信息即信息源信息的格式除 content 外的其他内容。 如果 prefix 状态为 on 则包含这些前缀信息，如果为 off 则仅输出 content。</li></ul></li></ul></li><li>Slot ID <ul><li>板卡标识，1，2，3...M1,M2</li></ul></li></ul></li></ul><h2 id="show-info-center-channel" tabindex="-1"><a class="header-anchor" href="#show-info-center-channel" aria-hidden="true">#</a> <code>show info-center channel</code></h2><ul><li><p>命令：</p><ul><li>盒式设备支持：<code>show info-center channel {&lt;channel ID&gt;|&lt;channel name&gt;}</code></li><li>机架式设备支持：<code>show info-center channel {&lt;channel ID&gt;|&lt;channel name&gt;} slot{&lt;slot ID&gt;}</code></li></ul></li><li><p>功能：显示信息中心指定通道的配置信息。</p></li><li><p>缺省情况：缺省关闭。</p></li><li><p>命令模式：所有模式。</p></li><li><p>使用指南：该命令主要用于显示信息中心指定通道配置信息。包含绑定的信息源、安全级别、前缀开关以及该信息源绑定的输出方向配置信息。</p></li><li><p>举例：显示信息中心指定通道 channel 0 的配置信息。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sysname#show info-center channel 0\ncard name master card\nchannel 0 name console\nsources\nsource debug level debugging prefix off\nsource log level debugging prefix on\nsource trap level debugging prefix on\ndirections\ndirection console\nconsole has no special config\nSysname#\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>显示结果各域说明：</p><ul><li>Card name <ul><li>需要查看信息中心配置的板卡名称，在盒式设备上固定内容为 master card。 机架式设备相关说明待后续提交机架式功能时补充。</li></ul></li><li>Channel <ul><li>指定通道的编号以及名称</li></ul></li><li>Sources <ul><li>与指定通道绑定的信息源配置信息。 包含信息安全级别以及是否带前缀</li></ul></li><li>Directions <ul><li>与指定通道绑定的输出方向配置信息。 每种输出方向的配置信息不尽相同。</li></ul></li><li>Slot ID <ul><li>板卡标识，1，2，3...M1,M2</li></ul></li></ul></li></ul><h2 id="show-info-center-direction" tabindex="-1"><a class="header-anchor" href="#show-info-center-direction" aria-hidden="true">#</a> <code>show info-center direction</code></h2><ul><li><p>命令：</p><ul><li>盒式设备支持：<code>show info-center direction {&lt;direction name&gt;} [channel {&lt;channel ID&gt; | &lt;channel name&gt;}]</code></li><li>机架式设备支持：<code>show info-center direction {&lt;direction name&gt;} [channel {&lt;channel ID&gt; | &lt;channel name&gt;}][slot &lt;slot ID&gt;]</code></li></ul></li><li><p>功能：显示信息中心指定输出方向的配置信息。</p></li><li><p>参数：</p><ul><li>Direction name <ul><li>输出方向的名称目前包含 console，monitor，logbuffer，trapbuffer，loghost，logfile</li></ul></li><li>Channel <ul><li>目前 loghost，logfile 两个输出方向支持绑定多个通道，每个绑定的通道可以有不同的配置信息，所以当指定的输出方向为 loghost 以及 logfile 时需要指定通道才能查看具体配置信息。</li></ul></li><li>Slot ID <ul><li>板卡标识，1，2，3...M1,M2,仅 loghost 以及 logfile 支持</li></ul></li></ul></li><li><p>缺省情况：缺省关闭。</p></li><li><p>命令模式：所有模式。</p></li><li><p>使用指南： 该命令主要用于显示信息中心指定输出方向配置信息。 每种输出方向的配置信息不尽相同。</p></li><li><p>举例：显示信息中心指定输出方向的配置信息。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Sysname#show info-center direction logfile channel 9\npath /mnt/flash/logfile.log\nsize 1000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>显示结果各域说明：</p><ul><li>Path <ul><li>Logfile 存放的路径。<code>/mnt/flash</code> 就是 flash:</li></ul></li><li>Size <ul><li>Logfile 大小，以 KB 为单位。 超过即循环覆盖。 Logbuffer 与 trapbuffer 中 size 以日志条数为单位。</li></ul></li></ul></li></ul><h2 id="show-info-center-logbuffer" tabindex="-1"><a class="header-anchor" href="#show-info-center-logbuffer" aria-hidden="true">#</a> show info-center logbuffer</h2><h2 id="show-info-center-trapbuffer" tabindex="-1"><a class="header-anchor" href="#show-info-center-trapbuffer" aria-hidden="true">#</a> show info-center trapbuffer</h2><h2 id="show-info-center-logfile" tabindex="-1"><a class="header-anchor" href="#show-info-center-logfile" aria-hidden="true">#</a> show info-center logfile</h2><h2 id="info-center-channel" tabindex="-1"><a class="header-anchor" href="#info-center-channel" aria-hidden="true">#</a> info-center channel</h2><h2 id="info-center-source" tabindex="-1"><a class="header-anchor" href="#info-center-source" aria-hidden="true">#</a> info-center source</h2><h2 id="info-center-console" tabindex="-1"><a class="header-anchor" href="#info-center-console" aria-hidden="true">#</a> info-center console</h2><h2 id="info-center-monitor" tabindex="-1"><a class="header-anchor" href="#info-center-monitor" aria-hidden="true">#</a> info-center monitor</h2><h2 id="info-center-logbuffer" tabindex="-1"><a class="header-anchor" href="#info-center-logbuffer" aria-hidden="true">#</a> info-center logbuffer</h2><h2 id="info-center-trapbuffer" tabindex="-1"><a class="header-anchor" href="#info-center-trapbuffer" aria-hidden="true">#</a> info-center trapbuffer</h2><h2 id="info-center-loghost" tabindex="-1"><a class="header-anchor" href="#info-center-loghost" aria-hidden="true">#</a> info-center loghost</h2><h2 id="info-center-logfile" tabindex="-1"><a class="header-anchor" href="#info-center-logfile" aria-hidden="true">#</a> info-center logfile</h2><h2 id="info-center-reset" tabindex="-1"><a class="header-anchor" href="#info-center-reset" aria-hidden="true">#</a> info-center reset</h2><h2 id="info-center-save-all" tabindex="-1"><a class="header-anchor" href="#info-center-save-all" aria-hidden="true">#</a> info-center save all</h2><h2 id="info-center-list-all-disk" tabindex="-1"><a class="header-anchor" href="#info-center-list-all-disk" aria-hidden="true">#</a> info-center list all disk</h2><h2 id="info-center-timestamp" tabindex="-1"><a class="header-anchor" href="#info-center-timestamp" aria-hidden="true">#</a> info-center timestamp</h2><h2 id="info-center-test" tabindex="-1"><a class="header-anchor" href="#info-center-test" aria-hidden="true">#</a> info-center test</h2>',37),t={render:function(e,n){return i}}}}]);