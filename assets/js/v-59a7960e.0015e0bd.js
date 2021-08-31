"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7198],{4982:(e,i,l)=>{l.r(i),l.d(i,{data:()=>t});const t={key:"v-59a7960e",path:"/net/manual/command/08-1_routing-strategy.html",title:"IP 路由策略命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"ip prefix-list description",slug:"ip-prefix-list-description",children:[]},{level:2,title:"ip prefix-list seq",slug:"ip-prefix-list-seq",children:[]},{level:2,title:"ip prefix-list sequence-number",slug:"ip-prefix-list-sequence-number",children:[]},{level:2,title:"match as-path",slug:"match-as-path",children:[]},{level:2,title:"match community",slug:"match-community",children:[]},{level:2,title:"match interface",slug:"match-interface",children:[]},{level:2,title:"match ip",slug:"match-ip",children:[]},{level:2,title:"match ipv6 address",slug:"match-ipv6-address",children:[]},{level:2,title:"match ipv6 next-hop",slug:"match-ipv6-next-hop",children:[]},{level:2,title:"match metric",slug:"match-metric",children:[]},{level:2,title:"match origin",slug:"match-origin",children:[]},{level:2,title:"match route-type",slug:"match-route-type",children:[]},{level:2,title:"match tag",slug:"match-tag",children:[]},{level:2,title:"route-map",slug:"route-map",children:[]},{level:2,title:"set aggregator",slug:"set-aggregator",children:[]},{level:2,title:"set as-path",slug:"set-as-path",children:[]},{level:2,title:"set atomic-aggregate",slug:"set-atomic-aggregate",children:[]},{level:2,title:"set comm-list",slug:"set-comm-list",children:[]},{level:2,title:"set community",slug:"set-community",children:[]},{level:2,title:"set extcommunity",slug:"set-extcommunity",children:[]},{level:2,title:"set ip next-hop",slug:"set-ip-next-hop",children:[]},{level:2,title:"set local-preference",slug:"set-local-preference",children:[]},{level:2,title:"set metric",slug:"set-metric",children:[]},{level:2,title:"set metric-type",slug:"set-metric-type",children:[]},{level:2,title:"set origin",slug:"set-origin",children:[]},{level:2,title:"set originator-id",slug:"set-originator-id",children:[]},{level:2,title:"set tag",slug:"set-tag",children:[]},{level:2,title:"set vpnv4 next-hop",slug:"set-vpnv4-next-hop",children:[]},{level:2,title:"set weight",slug:"set-weight",children:[]},{level:2,title:"show ip prefix-list <list-name>",slug:"show-ip-prefix-list-list-name",children:[]},{level:2,title:"show ip prefix-list <detail | summary>",slug:"show-ip-prefix-list-detail-summary",children:[]},{level:2,title:"show route-map  33333333333333333333333",slug:"show-route-map-33333333333333333333333",children:[]},{level:2,title:"show router-id",slug:"show-router-id",children:[]}],filePathRelative:"net/manual/command/08-1_routing-strategy.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},8158:(e,i,l)=>{l.r(i),l.d(i,{default:()=>a});const t=(0,l(6252).uE)('<h1 id="ip-路由策略命令" tabindex="-1"><a class="header-anchor" href="#ip-路由策略命令" aria-hidden="true">#</a> IP 路由策略命令</h1><h2 id="ip-prefix-list-description" tabindex="-1"><a class="header-anchor" href="#ip-prefix-list-description" aria-hidden="true">#</a> <code>ip prefix-list description</code></h2><ul><li><p>命令：</p><ul><li><code>ip prefix-list &lt;list_name&gt; description &lt;description&gt;</code></li><li><code>no ip prefix-list &lt;list_name&gt; description</code></li></ul></li><li><p>功能：配置前缀列表的描述文字，本命令的 no 操作为删除描述文字</p></li><li><p>参数： <code>&lt;list _name&gt;</code>为前缀列表名称，<code>&lt; description &gt;</code>为描述文字</p></li><li><p>缺省情况：无</p></li><li><p>命令模式：全局配置模式</p></li><li><p>使用指南：可以使用本命令为一个 prefix-list 进行说明、描述，例如 prefix-list 的用途、注意事项等</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#ip prefix-list 3 description This list is used by BGP\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="ip-prefix-list-seq" tabindex="-1"><a class="header-anchor" href="#ip-prefix-list-seq" aria-hidden="true">#</a> <code>ip prefix-list seq</code></h2><ul><li><p>命令：</p><ul><li><code>ip prefix-list &lt;list_name&gt; [seq &lt;sequence_number&gt;] &lt;deny | permit&gt; &lt; any | ip_addr/mask_length [ge &lt;min_prefix_len&gt;] [le &lt;max_prefix_len&gt;]&gt;</code></li><li><code>no ip prefix-list &lt;list_name&gt; [seq &lt;sequence_number&gt;] [&lt;deny | permit&gt; &lt; any | ip_addr/mask_length [ge &lt;min_prefix_len&gt;] [le &lt;max_prefix_len&gt;]&gt;]</code></li></ul></li><li><p>功能：配置前缀列表，本命令的 no 操作为删除前缀列表</p></li><li><p>参数：</p><ul><li><code>&lt;list _name&gt;</code> 为前缀列表名称</li><li><code>seq</code> 表示后面所接的参数为序列号</li><li><code>&lt;sequence_number&gt;</code>为序列号</li><li><code>deny</code> 表示拒绝该路由</li><li><code>permit</code> 表示接受该路由</li><li><code>any</code> 表示适用于所有前缀及掩码长度的报文</li><li><code>ip_addr/mask_length</code> 表示前缀地址（点分十进制）及掩码长度</li><li><code>ge</code> 表示大于、等于 <code>&lt;min_prefix_len&gt;</code> 为要匹配的最小前缀长度（范围为 0～32 ）</li><li><code>le</code> 表示小于、等于 <code>&lt;max_prefix_len&gt;</code> 为要匹配的最大前缀长度（范围为 0～32 ）</li></ul></li><li><p>缺省情况：无。</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南： 一个 prefix-list 由前缀列表名标识，每个前缀列表可以包含多个表项，每个表项可以独立指定一个网络前缀形式的匹配范围， 并用一个 sequence-number 来标识， sequence-number 指明了在 prefix-list 中进行匹配检查的顺序 在匹配的过程中，交换机按升序依次检查由 sequence -number 标识的各个表项，只要有某一表项满足条件就意味着通过该 prefix-list 的过滤（不会进入下一个表项的测试）需要注意的是，如果定义了一个以上的前缀列表表项，那么至少应该有一个表项的匹配模式是 permit 模式 deny 模式的表项可以先被定义，以快速的过滤掉不符合条件的路由信息，但如果所有表项都是 deny 模式，则任何路由都不会通过该地址前缀列表的过滤可以在定义了多条 deny 模式的表项后定义一条 <code>permit 0.0.0.0/0 ge 0 le 32</code> 的表项,以允许其它所有路由信息通过</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#ip prefix-list mylist seq 12345 deny 10.0.0.0/8 le 22 ge 14\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="ip-prefix-list-sequence-number" tabindex="-1"><a class="header-anchor" href="#ip-prefix-list-sequence-number" aria-hidden="true">#</a> <code>ip prefix-list sequence-number</code></h2><ul><li><p>命令：</p><ul><li><code>ip prefix-list sequence-number</code></li><li><code>no ip prefix-list sequence-number</code></li></ul></li><li><p>功能：启动序号自动生成功能，本命令的 no 操作为关闭前缀列表条目序号</p></li><li><p>参数：无</p></li><li><p>缺省情况：启动序号自动生成功能</p></li><li><p>命令模式：全局配置模式</p></li><li><p>使用指南：可以使用本命令的 no 操作来关闭前缀列表条目序号</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>switch(config)#no ip prefix-list sequence-number\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="match-as-path" tabindex="-1"><a class="header-anchor" href="#match-as-path" aria-hidden="true">#</a> <code>match as-path</code></h2><ul><li><p>命令：</p><ul><li><code>match as-path &lt;list-name&gt;</code></li><li><code>no match as-path [&lt;list-name&gt;]</code></li></ul></li><li><p>功能：配置匹配 BGP 路由信息的 AS 路径域，本命令的 no 操作为删除配置</p></li><li><p>参数： &lt; list-name &gt; 为 access-list 名称</p></li><li><p>命令模式：route-map 配置模式</p></li><li><p>使用指南：本命令按 as-path list 中指定的规则对 BGP 路由信息的 AS 路径域进行匹配，如匹配成功，则执行 route-map 中的 permit 或 deny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match as-path 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-community" tabindex="-1"><a class="header-anchor" href="#match-community" aria-hidden="true">#</a> <code>match community</code></h2><ul><li><p>命令：</p><ul><li><code>match community &lt;community-list-name | community-list-num &gt; [exact-match] </code></li><li><code>no match community [&lt;community-list-name | community-list-num &gt; [exact-match]] </code></li><li><code>功能：配置匹配 BGP 路由信息的团体属性，本命令的 no 操作为删除配置</code></li></ul></li><li><p>参数： <code>&lt; community-list-name &gt;</code> 为 community-list 名称， <code>&lt;community-list-num &gt;</code> 为 community-list序号，取值范围为 1～99（标准ACL）或 100～199（扩展ACL），<code>[exact-match]</code>表示精确匹配</p></li><li><p>命令模式：<code>route-map</code> 配置模式</p></li><li><p>使用指南： 本命令按 community list 中指定的规则对 BGP 路由信息的团体属性进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作。 团体属性通过 match 和 set 可以提供对大量路由应用策略的能力</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match community 100 exact-match\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-interface" tabindex="-1"><a class="header-anchor" href="#match-interface" aria-hidden="true">#</a> <code>match interface</code></h2><ul><li><p>命令：</p><ul><li><code>match interface &lt; interface-name &gt;</code></li><li><code>no match interface [&lt; interface-name &gt;]</code></li></ul></li><li><p>功能：配置对接口匹配，本命令的 no 操作为删除配置。</p></li><li><p>参数：<code>&lt; interface-name &gt;</code>为接口名称。</p></li><li><p>命令模式：route-map 配置模式。</p></li><li><p>使用指南：本命令按路由中的下一跳接口信息进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作。本命令仅用于 RIP 和OSPF 协议。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match interface vlan1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-ip" tabindex="-1"><a class="header-anchor" href="#match-ip" aria-hidden="true">#</a> <code>match ip</code></h2><ul><li><p>命令：</p><ul><li><code>match ip &lt;address | next-hop&gt; &lt;ip-acl-name | ip-acl-num | prefix-list list-name&gt;</code></li><li><code>no match ip &lt;address | next-hop&gt; [&lt;ip-acl-name | ip-acl-num | prefix-list list-name&gt;]</code></li></ul></li><li><p>功能：配置匹配路由前缀或下一跳，本命令的 no 操作为删除配置</p></li><li><p>参数：</p><ul><li><code>&lt; address &gt;</code>表示匹配的是路由前缀，</li><li><code>&lt; next-hop &gt;</code> 表示匹配的是路由下一跳，</li><li><code>&lt; ip-acl-name &gt;</code> 为 <code>ip access-list</code> 名称，</li><li><code>&lt; ip-acl-num &gt;</code>为 <code>ip access-list</code> 序号，取值范围为 1～199 或 1300～2699（扩展范围）</li><li><code>prefix-list</code> 表示要按前缀列表规则进行匹配，<code>list-name</code> 为前缀列表名称</li></ul></li><li><p>命令模式：route-map 配置模式</p></li><li><p>使用指南：本命令按路由中的路由前缀或下一跳信息进行匹配，如果匹配成功，则执行 <code>route-map</code> 中的 <code>permit</code> 或 <code>deny</code> 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match ip address prefix-list mylist\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-ipv6-address" tabindex="-1"><a class="header-anchor" href="#match-ipv6-address" aria-hidden="true">#</a> <code>match ipv6 address</code></h2><ul><li><p>命令：</p><ul><li><code>match ipv6 address &lt;ipv6-acl-name | prefix-list list-name&gt;</code></li><li><code>no match ipv6 address [&lt;ipv6-acl-name | prefix-list list-name&gt;]</code></li></ul></li><li><p>功能：配置匹配 ipv6 路由前缀，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>address</code> 表示匹配的是路由前缀，<code>&lt;ipv6-acl-name&gt;</code> 为 ipv6 access-list 名称，prefix-list 表示要按前缀列表规则进行匹配， list-name 为前缀列表名称</p></li><li><p>命令模式： <code>route-map</code> 配置模式</p></li><li><p>使用指南：本命令按路由中的路由前缀进行匹配，如果匹配成功，则执行 route-map 中 permitdeny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match ipv6 address prefix-list mylist\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-ipv6-next-hop" tabindex="-1"><a class="header-anchor" href="#match-ipv6-next-hop" aria-hidden="true">#</a> <code>match ipv6 next-hop</code></h2><ul><li>命令： <ul><li><code>match ipv6 next-hop &lt;ipv6-address&gt;</code></li><li><code>no match ipv6 next-hop [&lt;ipv6-address&gt;]</code></li></ul></li><li>功能：配置匹配 ipv6 路由下一跳，本命令的 no 操作为删除配置</li><li>参数： next-hop 表示匹配的是路由下一跳， ipv6-address 表示下一跳的接口 ipv6 地址</li><li>命令模式： route-map 配置模式。</li><li>使用指南：本命令按路由中的下一跳信息进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作</li><li>举例：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)# match ipv6 next-hop 2000::1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="match-metric" tabindex="-1"><a class="header-anchor" href="#match-metric" aria-hidden="true">#</a> <code>match metric</code></h2><ul><li><p>命令：</p><ul><li><code>match metric &lt;metric-val&gt;</code></li><li><code>no match metric [&lt;metric-val&gt;]</code></li></ul></li><li><p>功能：配置匹配路由信息的度量值，本命令的 no 操作为删除配置</p></li><li><p>参数： <code>&lt;metric-val &gt;</code>为度量值，范围为 0～4294967295</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：本命令按路由中的度量值进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match metric 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-origin" tabindex="-1"><a class="header-anchor" href="#match-origin" aria-hidden="true">#</a> <code>match origin</code></h2><ul><li><p>命令：</p><ul><li><code>match origin &lt;egp | igp | incomplete&gt;</code></li><li><code>no match origin &lt;egp | igp | incomplete&gt;</code></li></ul></li><li><p>功能：配置匹配 BGP 路由信息的源，本命令的no操作为删除配置。</p></li><li><p>参数：egp 表示路由学习自外部网关协议，igp 表示路由学习自内部网关协议，incomplete</p></li><li><p>表示路由源不能确定</p></li><li><p>命令模式：route-map 配置模式</p></li><li><p>使用指南：本命令按BGP 路由中的源信息进行匹配，如果匹配成功，则执行route-map 中的permit 或deny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match origin egp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-route-type" tabindex="-1"><a class="header-anchor" href="#match-route-type" aria-hidden="true">#</a> <code>match route-type</code></h2><ul><li><p>命令：</p><ul><li><code>match route-type external &lt;type-1 | type-2&gt;</code></li><li><code>no match route-type external [&lt;type-1 | type-2&gt;]</code></li></ul></li><li><p>功能：配置匹配 OSPF 路由信息的路由类型，本命令的 no 操作为删除配置</p></li><li><p>参数：type-1 表示匹配 OSPF 类型 1 外部路由，type-2 表示匹配 OSPF 类型 2 外部路由</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：本命令按 OSPF 路由的类型进行匹配（OSPF AS-external LSA 类型为 type 1 或 type2），如果匹配成功，则执行 route-map 中的 permit 或deny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match route-type external type-1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="match-tag" tabindex="-1"><a class="header-anchor" href="#match-tag" aria-hidden="true">#</a> <code>match tag</code></h2><ul><li><p>命令：</p><ul><li><code>match tag &lt;tag-val&gt;</code></li><li><code>no match tag [&lt;tag-val&gt;]</code></li></ul></li><li><p>功能：配置匹配 OSPF 路由信息的 tag 域，本命令的 no 操作为删除配置</p></li><li><p>参数： <code>&lt;tag-val &gt;</code> 为 tag 值，范围为 0～4294967295</p></li><li><p>命令模式：route-map 配置模式</p></li><li><p>使用指南：本命令按 OSPF 路由中的 tag 值进行匹配，如果匹配成功，则执行 route-map 中的 permit 或 deny 操作</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match tag 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="route-map" tabindex="-1"><a class="header-anchor" href="#route-map" aria-hidden="true">#</a> <code>route-map</code></h2><ul><li><p>命令：</p><ul><li><code>route-map &lt;map_name&gt; {deny | permit} &lt;sequence_num&gt;</code></li><li><code>no route-map &lt;map_name&gt; [{deny | permit} &lt;sequence_num&gt;]</code></li></ul></li><li><p>功能：配置 route-map ，并且进入 route-map 模式，本命令的 no 操作为删除 route-map</p></li><li><p>参数：</p><ul><li><code>&lt;map_name&gt;</code>为 route-map 名称， permit 指定所定义的 route-map 的匹配模式为允许模式， deny 指定所定义的 route-map 的匹配模式为拒绝模式（此模式下set子句不会被执行），</li><li><code>&lt;sequence_num&gt;</code> 为 route-map 序列号，取值范围为 1～65535</li></ul></li><li><p>缺省情况：无</p></li><li><p>命令模式：全局配置模式。</p></li><li><p>使用指南：</p><ul><li>一个 route-map 可由多个节点构成，每个节点是进行匹配检查的一个单元，节点间依据顺序号 sequence-number 标识检查顺序。</li><li>permit 表示当路由项满足该节点的所有 match 子句时，认为通过该节点的过滤，并执行该节点的 set 子句，不进入下一个节点的测试；</li><li>如路由项不满足该节点的 match 子句将进入下一个节点继续测试。</li><li>deny 表示 set 子句不会被执行，当路由项满足该节点的所有 match 子句时被拒绝通过该节点，不进入下一个节点的测试；如路由项不满足该节点的 match 子句，将进入下一个节点继续测试。</li><li>不同节点间是或的关系，即交换机依次检查 route-map 的各个节点, 通过 route-map 的某一节点就意味着通过该 route-map 过滤。</li><li>需要注意的是，如果定义了一个以上的 route-map 节点， route-map 的各个节点中至少应该有一个节点的匹配模式是 permit。</li><li>当一个 route-map 用于路由信息过滤时，如果某路由信息没有通过任一节点，则认为该路由信息没有通过该 route-map。</li><li>当 route-map 的所有节点都是 deny 模式时，所有路由信息都不会通过该 route-map</li></ul></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#match as-path 60\nSwitch(config-route-map)#set weight 30\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h2 id="set-aggregator" tabindex="-1"><a class="header-anchor" href="#set-aggregator" aria-hidden="true">#</a> <code>set aggregator</code></h2><ul><li><p>命令：</p><ul><li><code>set aggregator as &lt;as-number&gt; &lt;ip_addr&gt;</code></li><li><code>no set aggregator as [&lt;as-number&gt; &lt;ip_addr&gt;]</code></li></ul></li><li><p>功能：配置为 BGP 聚合者分配一个 AS 号，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt;as-number &gt;</code> 为 AS 号，<code>&lt;ip_addr&gt;</code> 为聚合者的 ip 地址，点分十进制形式</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set aggregator as 200 10.1.1.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-as-path" tabindex="-1"><a class="header-anchor" href="#set-as-path" aria-hidden="true">#</a> <code>set as-path</code></h2><ul><li><p>命令：</p><ul><li><code>set as-path prepend &lt;as-num&gt;</code></li><li><code>no set as-path prepend [&lt;as-num&gt;]</code></li></ul></li><li><p>功能：配置在 BGP 路由信息的 AS 路径域增加 AS 号，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt; as-num &gt;</code> 为 AS 号，取值范围为 1-4294967295 。可用十进制表示，如 6553700 ；也可用分隔符方式表示，如 100.100 。可连续循环输入多个</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：通过在 BGP 的 AS 域增加 AS 号，可以增加 AS 路径长度，从而影响邻居最佳路径的选择。要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set as-path prepend 200 100.100\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-atomic-aggregate" tabindex="-1"><a class="header-anchor" href="#set-atomic-aggregate" aria-hidden="true">#</a> <code>set atomic-aggregate</code></h2><ul><li><p>命令：</p><ul><li><code>set atomic-aggregate</code></li><li><code>no set atomic-aggregate</code></li></ul></li><li><p>功能：配置 BGP 路由信息的原子聚合属性，本命令的 no 操作为删除配置</p></li><li><p>参数：无</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：BGP 使用原子聚合属性告知其它 BGP 发言者，本地系统选择了一个次具体的路由，而没有选择包含在其内的更具体的路由。要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set atomic-aggregate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-comm-list" tabindex="-1"><a class="header-anchor" href="#set-comm-list" aria-hidden="true">#</a> <code>set comm-list</code></h2><ul><li><p>命令：</p><ul><li><code>set comm-list &lt;community-list-name | community-list-num &gt; delete</code></li><li><code>no set comm-list &lt;community-list-name | community-list-num &gt; delete</code></li></ul></li><li><p>功能：配置 BGP 从入站或出站路由信息中删除团体属性，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt; ommunity-list-name &gt;</code> 为团体列表名称， <code>&lt; community-list-num &gt;</code>为团体列表序号，取值范围为 1～99（标准团体列表）或 100～199（扩展团体列表）</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set comm-list 100 delete\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-community" tabindex="-1"><a class="header-anchor" href="#set-community" aria-hidden="true">#</a> <code>set community</code></h2><ul><li><p>命令：</p><ul><li><code>set community [AA:NN] [internet] [local-AS] [no-advertise] [no-export] [none][additive]</code></li><li><code>no set community [AA:NN] [internet] [local-AS] [no-advertise] [no-export] [none][additive]</code></li></ul></li><li><p>功能：配置 BGP 路由信息的团体属性，本命令的 no 操作为删除配置</p></li><li><p>参数：</p><ul><li><code>[AA:NN]</code>为团体属性值，</li><li><code>[internet]</code>表示因特网范围，</li><li><code>[local-AS]</code>表示本路由不发送到 local AS 外（可以在联盟的子 AS 之间发布），</li><li><code>[no-advertise]</code>表示本路由不发送给任何邻居，</li><li><code>[no-export]</code>表示本路由不发送给EBGP 邻居，</li><li><code>[none]</code>表示从本路由前缀中删除团体属性，</li><li><code>[additive]</code>表示添加在已有团体属性后。 命令模式：route-map 配置模式</li></ul></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set community local-as additive\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-extcommunity" tabindex="-1"><a class="header-anchor" href="#set-extcommunity" aria-hidden="true">#</a> <code>set extcommunity</code></h2><ul><li><p>命令：</p><ul><li><code>set extcommunity &lt;rt | soo&gt; &lt;AA:NN&gt;</code></li><li><code>no set extcommunity &lt;rt | soo&gt; [&lt;AA:NN&gt;]</code></li></ul></li><li><p>功能：配置 BGP 路由信息的扩展团体属性，本命令的 no 操作为删除配置</p></li><li><p>参数：</p><ul><li><code>&lt;rt&gt;</code> 为路由目标（ route target ），</li><li><code>&lt;soo&gt;</code>为源站点（ site of origin ），</li><li><code>&lt;AA:NN&gt;</code>为团体属性值，其中 AA 为 AS 号，取值范围为 1-4294967295 。</li><li>可用十进制表示，如 6553700 ；也可用分隔符方式表示，如 100.100 。</li><li>NN 为任意两字节数字</li></ul></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：设置 rt 为 100:10</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal\nSwitch(config)#route-map r1 permit 5\nSwitch(config-route-map)#set extcommunity rt 100:10\n设置soo 为200.200:10\nSwitch(config)#route-map r1 permit 10\nSwitch(config-route-map)#set extcommunity soo 200.200:10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul><h2 id="set-ip-next-hop" tabindex="-1"><a class="header-anchor" href="#set-ip-next-hop" aria-hidden="true">#</a> <code>set ip next-hop</code></h2><ul><li><p>命令：</p><ul><li><code>set ip next-hop &lt;ip_addr&gt; no</code></li><li><code>set ip next-hop [&lt;ip_addr&gt;] </code></li></ul></li><li><p>功能：配置路由的下一跳，本命令的 no 操作为删除配置。</p></li><li><p>参数：<code>&lt; ip_addr &gt;</code>为下一跳的 ip 地址，点分十进制形式。</p></li><li><p>命令模式： route-map 配置模式。</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set ip next-hop 10.2.2.2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-local-preference" tabindex="-1"><a class="header-anchor" href="#set-local-preference" aria-hidden="true">#</a> <code>set local-preference</code></h2><ul><li><p>命令：</p><ul><li><code>set local-preference &lt;pre_val&gt; no</code></li><li><code>set local-preference [&lt;pre_val&gt;] </code></li></ul></li><li><p>功能：配置 BGP 路由的本地优先级，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt; pre_val &gt;</code>为本地优先级值，范围为 0～4294967295 。命令模式： route-map 配置模式</p></li><li><p>使用指南： 本地优先级属性是给予一个路由的优先程度，并使其与同一目的地的其它路由比较，较高的本地优先级表示该路由更为优选。 本地优先级只在本 AS 内有效，不会传送给 EBGP 邻居。 要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set local-preference 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-metric" tabindex="-1"><a class="header-anchor" href="#set-metric" aria-hidden="true">#</a> <code>set metric</code></h2><ul><li><p>命令：</p><ul><li><code>set metric &lt; metric_val&gt; no </code></li><li><code>set metric [&lt;metric_val&gt;] </code></li></ul></li><li><p>功能：配置路由的度量值，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt; metric_val &gt;</code>为度量值，范围为 1～4294967295</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：度量值可以影响外部邻居到本 AS 的路径选择。度量值越小，优先程度越高。一般情况下，只比较同一 AS 内的邻居的路径的度量值。要扩展比较不同 AS 邻居路径的度量值，需配置命令 bgp always-compare-med 。要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set metric 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-metric-type" tabindex="-1"><a class="header-anchor" href="#set-metric-type" aria-hidden="true">#</a> <code>set metric-type</code></h2><ul><li><p>命令：</p><ul><li><code>set metric-type &lt;type-1 | type-2&gt; no</code></li><li><code>set metric-type [&lt;type-1 | type-2&gt;]</code></li></ul></li><li><p>功能：配置 OSPF 路由信息的度量类型，本命令的 no 操作为删除配置</p></li><li><p>参数： type-1 表示匹配 OSPF 类型 1 外部路由， type-2 表示匹配 OSPF 类型 2 外部路由</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set metric-type type-1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-origin" tabindex="-1"><a class="header-anchor" href="#set-origin" aria-hidden="true">#</a> <code>set origin</code></h2><ul><li><p>命令：</p><ul><li><code>set origin &lt;egp | igp | incomplete &gt; no</code></li><li><code>set origin [&lt;egp | igp | incomplete &gt;]</code></li></ul></li><li><p>功能：配置 BGP 路由信息的源码，本命令的 no 操作为删除配置</p></li><li><p>参数： egp 表示路由学习自外部网关协议， igp 表示路由学习自内部网关协议， incomplete 表示路由源不能确定</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set origin egp\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-originator-id" tabindex="-1"><a class="header-anchor" href="#set-originator-id" aria-hidden="true">#</a> <code>set originator-id</code></h2><ul><li><p>命令：</p><ul><li><code>set originator-id &lt;ip_addr&gt; no</code></li><li><code>set originator-id [&lt;ip_addr&gt;]</code></li></ul></li><li><p>功能：配置 BGP 路由信息的源 ip 地址，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt;ip_addr&gt;</code>为路由的源 ip 地址，点分十进制形式</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set originator-id 10.1.1.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-tag" tabindex="-1"><a class="header-anchor" href="#set-tag" aria-hidden="true">#</a> <code>set tag</code></h2><ul><li><p>命令：</p><ul><li><code>set tag &lt;tag_val&gt; no</code></li><li><code>set tag [&lt;tag_val&gt;]</code></li></ul></li><li><p>功能：配置 OSPF 路由信息的 tag 域，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt; tag-val &gt;</code>为 tag 值，范围为 0～4294967295</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南： AS-external-LSA 类型的 LSA 有一个 route-tag 域，该域一般是由其它路由协议标记的。要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set tag 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-vpnv4-next-hop" tabindex="-1"><a class="header-anchor" href="#set-vpnv4-next-hop" aria-hidden="true">#</a> <code>set vpnv4 next-hop</code></h2><ul><li><p>命令：</p><ul><li><code>set vpnv4 next-hop &lt;ip_addr&gt; no</code></li><li><code>set vpnv4 next-hop [&lt;ip_addr&gt;]</code></li></ul></li><li><p>功能：配置 BGP VPNv4 路由信息的下一跳，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt;ip_addr&gt;</code>为 VPNv4 路由的下一跳 ip 地址，点分十进制形式</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set vpnv4 next-hop 10.1.1.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="set-weight" tabindex="-1"><a class="header-anchor" href="#set-weight" aria-hidden="true">#</a> <code>set weight</code></h2><ul><li><p>命令：</p><ul><li><code>set weight &lt;weight_val&gt; no</code></li><li><code>set weight [&lt;weight_val&gt;]</code></li></ul></li><li><p>功能：配置 BGP 路由信息的权重值，本命令的 no 操作为删除配置</p></li><li><p>参数：<code>&lt;weight_val&gt;</code>为权重值，范围为 0～4294967295</p></li><li><p>命令模式： route-map 配置模式</p></li><li><p>使用指南：权重值用于帮助最佳路径的选择，只在本交换机有效。在到同一目的地有多条路由的情况下，权重值越高越优先。要使用本命令，需首先定义一条 match 语句</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config terminal \nSwitch(config)#route-map r1 permit 5 \nSwitch(config-route-map)#set weight 60\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="show-ip-prefix-list-list-name" tabindex="-1"><a class="header-anchor" href="#show-ip-prefix-list-list-name" aria-hidden="true">#</a> <code>show ip prefix-list &lt;list-name&gt;</code></h2><ul><li><p>命令：</p><ul><li><code>show ip prefix-list [&lt;list-name&gt; [&lt;ip_addr/len&gt; [first-match | longer] | seq &lt;sequence-number&gt;]] </code></li></ul></li><li><p>功能：按前缀列表名称进行显示</p></li><li><p>参数：<code>&lt;list-name&gt;</code>为前缀列表名称，<code>&lt;ip_addr/len&gt;</code>为前缀 ip 地址和掩码长度， first-match 表示显示对特定 ip 地址而言匹配的第一个路由表， longer 表示要查找更长的前缀， seq 表示按序列号进行显示，<code>&lt;sequence-number&gt;</code>为序列号，范围为 0～4294967295</p></li><li><p>缺省情况：无</p></li><li><p>命令模式：特权和配置模式</p></li><li><p>使用指南：不指定前缀列表的名字时，会显示所有的前缀列表</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#show \nip prefix-list ip prefix-list 1: 1 entries \n    deny any\nip prefix-list mylist: 1 entries\n    deny 1.1.1.1/8 \nSwitch#show ip prefix-list mylist 1.1.1.1/8 \n    seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>ip prefix-list mylist: 1 entries</code><ul><li>显示名称为 mylist 的前缀列表，该前缀列表包含 1 个实体</li></ul></li><li><code>seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0)</code><ul><li>表示序列号为 5 的前缀列表内容，<code>hit count: 0</code> 表示被命中 0 次，<code>refcount: 0</code> 表示引用 0 次</li></ul></li></ul></li></ul><h2 id="show-ip-prefix-list-detail-summary" tabindex="-1"><a class="header-anchor" href="#show-ip-prefix-list-detail-summary" aria-hidden="true">#</a> <code>show ip prefix-list &lt;detail | summary&gt;</code></h2><ul><li><p>命令：</p><ul><li><code>show ip prefix-list [&lt;detail | summary&gt; [&lt;list-name&gt;] ] </code></li></ul></li><li><p>功能：显示前缀列表内容</p></li><li><p>参数：detail 表示显示详细信息， summary 表示显示摘要信息，<code>&lt;list-name&gt;</code>为前缀列表名称</p></li><li><p>缺省情况：无</p></li><li><p>命令模式：特权和配置模式</p></li><li><p>使用指南：不指定前缀列表的名字时，会显示所有的前缀列表</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#show ip prefix-list detail mylist \nip prefix-list mylist: \n  count: 2, range entries: 0, \n  sequences: 5 - 10 seq 5 deny 1.1.1.1/8 (hit count: 0, refcount: 0) \n  seq 10 permit 2.2.2.2/8 (hit count: 0, refcount: 0) \nSwitch#show ip prefix-list summary mylist \nip prefix-list mylist: \n  count: 2, range entries: 0, sequences: 5 - 10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>ip prefix-list mylist</code>: <ul><li>显示名称为 mylist 的前缀列表</li></ul></li><li><code>count: 2, range entries: 0, sequences: 5 - 10</code><ul><li><code>count: 2</code> 表示 2 个前缀列表实体，<code>sequences: 5 – 10</code> 显示序列号，5 为起始序列号，10 为尾序列号</li></ul></li><li><code>deny 1.1.1.1/8 (hit count: 0, refcount: 0)</code><ul><li><code>deny 1.1.1.1/8</code> 为前缀列表实体具体内容，<code>hit count: 0</code> 表示被命中 0 次，<code>refcount: 0</code> 表示引用 0 次</li></ul></li></ul></li></ul><h2 id="show-route-map-33333333333333333333333" tabindex="-1"><a class="header-anchor" href="#show-route-map-33333333333333333333333" aria-hidden="true">#</a> <code>show route-map</code> 33333333333333333333333</h2><ul><li><p>命令：</p><ul><li><code>show route-map </code></li></ul></li><li><p>功能：显示 route-map 内容</p></li><li><p>参数：无</p></li><li><p>缺省情况：无</p></li><li><p>命令模式：特权和配置模式</p></li><li><p>使用指南：无</p></li><li><p>举例：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch# show route-map \nroute-map a, deny, sequence 10 \n  Match clauses: \n    as-path 60 \n  Set clauses: \n    metric 10\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><code>route-map a, deny, sequence 10</code><ul><li><code>route-map a</code>表示 oute-map 的名称为 a ， <code>deny</code> 表示模式为 deny ， <code>sequence 10</code> 表示序列号为 10</li></ul></li><li><code>Match clauses:</code><ul><li><code>Match</code> 子句</li></ul></li><li><code>as-path 60</code><ul><li><code>Match</code> 子句的具体内容</li></ul></li><li><code>Set clauses:</code><ul><li><code>Set</code> 子句</li></ul></li><li><code>metric 10</code><ul><li><code>Set</code> 子句的具体内容</li></ul></li></ul></li></ul><h2 id="show-router-id" tabindex="-1"><a class="header-anchor" href="#show-router-id" aria-hidden="true">#</a> <code>show router-id</code></h2><ul><li>命令： <ul><li><code>show router-id</code></li></ul></li><li>功能：显示路由器的 router-id 信息</li><li>缺省情况：不显示</li><li>命令模式：特权和配置模式</li><li>举例：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>例1：\nSwitch#show router-id \nRouter ID: 20.1.1.1 (automatic) \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>例2： \nSwitch#show router-id \nRouter ID: 20.1.1.2 (config)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',70),a={render:function(e,i){return t}}}}]);