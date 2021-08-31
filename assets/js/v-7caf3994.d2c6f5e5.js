"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3955],{6913:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-7caf3994",path:"/start/mermaid.html",title:"mermaid 语法",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"流程图",slug:"流程图",children:[]},{level:2,title:"序列图",slug:"序列图",children:[]},{level:2,title:"类图",slug:"类图",children:[]},{level:2,title:"状态图",slug:"状态图",children:[]},{level:2,title:"实体关系图",slug:"实体关系图",children:[]},{level:2,title:"用户旅程图",slug:"用户旅程图",children:[]},{level:2,title:"甘特图",slug:"甘特图",children:[]},{level:2,title:"指令图",slug:"指令图",children:[]},{level:2,title:"饼图",slug:"饼图",children:[]}],filePathRelative:"start/mermaid.md",git:{updatedTime:1630372804e3,contributors:[{name:"Yue_plus",email:"Yue_plus@foxmail.com",commits:1}]}}},2871:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Le});var s=a(6252);const r=(0,s._)("h1",{id:"mermaid-语法",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#mermaid-语法","aria-hidden":"true"},"#"),(0,s.Uk)(" mermaid 语法")],-1),l=(0,s.Uk)("该项目通过 "),i={href:"https://github.com/eFrane/vuepress-plugin-mermaidjs",target:"_blank",rel:"noopener noreferrer"},t=(0,s.Uk)("vuepress-plugin-mermaidjs"),m=(0,s.Uk)(" 插件来支持使用 "),o={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("mermaid-js"),p=(0,s.Uk)("（"),c={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("GitHub"),d=(0,s.Uk)("）绘制各种图表。"),g=(0,s._)("p",null,"支持：",-1),h={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("流程图"),v={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("序列图"),_={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("类图"),D={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},q=(0,s.Uk)("状态图"),U={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},E=(0,s.Uk)("实体关系图"),M={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},R=(0,s.Uk)("用户旅程图"),j={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},A=(0,s.Uk)("甘特图"),w={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("指令图"),S={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},W=(0,s.Uk)("饼图"),C={href:"https://baijiahao.baidu.com/s?id=1666117882411053133",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("关于写作那些事之快速上手Mermaid流程图"),L={id:"流程图",tabindex:"-1"},B=(0,s._)("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#",-1),H=(0,s.Uk)(),G={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},T=(0,s.Uk)("流程图"),Y=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>graph LR\n    A[Hard edge] --&gt;|Link text| B(Round edge)\n    B --&gt; C{Decision}\n    C --&gt;|One| D[Result one]\n    C --&gt;|Two| E[Result two]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>graph LR\n    A[Hard edge] --&gt;|Link text| B(Round edge)\n    B --&gt; C{Decision}\n    C --&gt;|One| D[Result one]\n    C --&gt;|Two| E[Result two]\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),I={id:"序列图",tabindex:"-1"},O=(0,s._)("a",{class:"header-anchor",href:"#序列图","aria-hidden":"true"},"#",-1),F=(0,s.Uk)(),N={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("序列图"),z=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>sequenceDiagram\n    autonumber\n    Alice-&gt;&gt;John: Hello John, how are you?\n    loop Healthcheck\n        John-&gt;&gt;John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts!\n    John--&gt;&gt;Alice: Great!\n    John-&gt;&gt;Bob: How about you?\n    Bob--&gt;&gt;John: Jolly good!\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sequenceDiagram\n    autonumber\n    Alice-&gt;&gt;John: Hello John, how are you?\n    loop Healthcheck\n        John-&gt;&gt;John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts!\n    John--&gt;&gt;Alice: Great!\n    John-&gt;&gt;Bob: How about you?\n    Bob--&gt;&gt;John: Jolly good!\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',2),K={id:"类图",tabindex:"-1"},V=(0,s._)("a",{class:"header-anchor",href:"#类图","aria-hidden":"true"},"#",-1),X=(0,s.Uk)(),Q={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},Z=(0,s.Uk)("类图"),$=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>classDiagram\nclassA --|&gt; classB : Inheritance\nclassC --* classD : Composition\nclassE --o classF : Aggregation\nclassG --&gt; classH : Association\nclassI -- classJ : Link(Solid)\nclassK ..&gt; classL : Dependency\nclassM ..|&gt; classN : Realization\nclassO .. classP : Link(Dashed)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>classDiagram\nclassA --|&gt; classB : Inheritance\nclassC --* classD : Composition\nclassE --o classF : Aggregation\nclassG --&gt; classH : Association\nclassI -- classJ : Link(Solid)\nclassK ..&gt; classL : Dependency\nclassM ..|&gt; classN : Realization\nclassO .. classP : Link(Dashed)\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',2),ee={id:"状态图",tabindex:"-1"},ne=(0,s._)("a",{class:"header-anchor",href:"#状态图","aria-hidden":"true"},"#",-1),ae=(0,s.Uk)(),se={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},re=(0,s.Uk)("状态图"),le=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>    stateDiagram-v2\n        State1: The state with a note\n        note right of State1\n            Important information! You can write\n            notes.\n        end note\n        State1 --&gt; State2\n        note left of State2 : This is the note to the left.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    stateDiagram-v2\n        State1: The state with a note\n        note right of State1\n            Important information! You can write\n            notes.\n        end note\n        State1 --&gt; State2\n        note left of State2 : This is the note to the left.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',2),ie={id:"实体关系图",tabindex:"-1"},te=(0,s._)("a",{class:"header-anchor",href:"#实体关系图","aria-hidden":"true"},"#",-1),me=(0,s.Uk)(),oe={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},be=(0,s.Uk)("实体关系图"),pe=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>erDiagram\n    CUSTOMER ||--o{ ORDER : places\n    ORDER ||--|{ LINE-ITEM : contains\n    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),ce={id:"用户旅程图",tabindex:"-1"},ue=(0,s._)("a",{class:"header-anchor",href:"#用户旅程图","aria-hidden":"true"},"#",-1),de=(0,s.Uk)(),ge={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},he=(0,s.Uk)("用户旅程图"),ke=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journey\n    title My working day\n    section Go to work\n      Make tea: 5: Me\n      Go upstairs: 3: Me\n      Do work: 1: Me, Cat\n    section Go home\n      Go downstairs: 5: Me\n      Sit down: 5: Me\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',2),ve={id:"甘特图",tabindex:"-1"},fe=(0,s._)("a",{class:"header-anchor",href:"#甘特图","aria-hidden":"true"},"#",-1),_e=(0,s.Uk)(),xe={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},De=(0,s.Uk)("甘特图"),qe=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>gantt\n    title A Gantt Diagram\n    dateFormat  YYYY-MM-DD\n    section Section\n    A task           :a1, 2014-01-01, 30d\n    Another task     :after a1  , 20d\n    section Another\n    Task in sec      :2014-01-12  , 12d\n    another task      : 24d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>gantt\n    title A Gantt Diagram\n    dateFormat  YYYY-MM-DD\n    section Section\n    A task           :a1, 2014-01-01, 30d\n    Another task     :after a1  , 20d\n    section Another\n    Task in sec      :2014-01-12  , 12d\n    another task      : 24d\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',2),Ue={id:"指令图",tabindex:"-1"},Ee=(0,s._)("a",{class:"header-anchor",href:"#指令图","aria-hidden":"true"},"#",-1),Me=(0,s.Uk)(),Re={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},je=(0,s.Uk)("指令图"),Ae=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%\nsequenceDiagram\n%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%\nAlice-&gt;&gt;Bob: Hi Bob\nBob-&gt;&gt;Alice: Hi Alice\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%\nsequenceDiagram\n%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%\nAlice-&gt;&gt;Bob: Hi Bob\nBob-&gt;&gt;Alice: Hi Alice\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',2),we={id:"饼图",tabindex:"-1"},ye=(0,s._)("a",{class:"header-anchor",href:"#饼图","aria-hidden":"true"},"#",-1),Se=(0,s.Uk)(),We={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},Ce=(0,s.Uk)("饼图"),Je=(0,s.uE)('<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>pie\n    title Key elements in Product X\n    &quot;Calcium&quot; : 42.96\n    &quot;Potassium&quot; : 50.05\n    &quot;Magnesium&quot; : 10.01\n    &quot;Iron&quot; :  5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pie\n    title Key elements in Product X\n    &quot;Calcium&quot; : 42.96\n    &quot;Potassium&quot; : 50.05\n    &quot;Magnesium&quot; : 10.01\n    &quot;Iron&quot; :  5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),Le={render:function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("p",null,[l,(0,s._)("a",i,[t,(0,s.Wm)(a)]),m,(0,s._)("a",o,[b,(0,s.Wm)(a)]),p,(0,s._)("a",c,[u,(0,s.Wm)(a)]),d]),g,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",h,[k,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",v,[f,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",_,[x,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",D,[q,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",U,[E,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",M,[R,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",j,[A,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",w,[y,(0,s.Wm)(a)])]),(0,s._)("li",null,[(0,s._)("a",S,[W,(0,s.Wm)(a)])])]),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s._)("a",C,[J,(0,s.Wm)(a)])])]),(0,s._)("h2",L,[B,H,(0,s._)("a",G,[T,(0,s.Wm)(a)])]),Y,(0,s._)("h2",I,[O,F,(0,s._)("a",N,[P,(0,s.Wm)(a)])]),z,(0,s._)("h2",K,[V,X,(0,s._)("a",Q,[Z,(0,s.Wm)(a)])]),$,(0,s._)("h2",ee,[ne,ae,(0,s._)("a",se,[re,(0,s.Wm)(a)])]),le,(0,s._)("h2",ie,[te,me,(0,s._)("a",oe,[be,(0,s.Wm)(a)])]),pe,(0,s._)("h2",ce,[ue,de,(0,s._)("a",ge,[he,(0,s.Wm)(a)])]),ke,(0,s._)("h2",ve,[fe,_e,(0,s._)("a",xe,[De,(0,s.Wm)(a)])]),qe,(0,s._)("h2",Ue,[Ee,Me,(0,s._)("a",Re,[je,(0,s.Wm)(a)])]),Ae,(0,s._)("h2",we,[ye,Se,(0,s._)("a",We,[Ce,(0,s.Wm)(a)])]),Je],64)}}}}]);