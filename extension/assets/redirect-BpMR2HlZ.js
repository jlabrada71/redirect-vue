import{d as m,h as a,c as s,a as e,F as o,i as c,o as i,t as l,r as h,b as y,_ as f,g as w}from"./logo-KxWed5dA.js";const v={class:"flex h-96 w-96 bg-gray-100"},x=e("div",{class:"bg-gray-800 w-6 flex items-center justify-center"},[e("span",{class:"text-white -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest"},"Low urgency")],-1),b={class:"flex-1 flex flex-col"},k=e("div",{class:"h-6 bg-gray-800 flex items-center justify-center text-white uppercase tracking-widest"},"High impact",-1),I={class:"flex-1 flex flex-col overflow-hidden"},S={class:"h-1/2 border-b-4 border-gray-200 grid grid-cols-2"},U={class:"border-r-4 border-gray-200 overflow-auto"},L={class:"border-l-4 border-gray-200 overflow-auto"},N={class:"h-1/2 border-t-4 border-gray-200 grid grid-cols-2"},j={class:"border-r-4 border-gray-200 overflow-auto"},H={class:"border-l-4 border-gray-200 overflow-auto"},A=e("div",{class:"h-6 bg-gray-800 flex items-center justify-center text-white whitespace-nowrap text-xs uppercase tracking-widest"},"Low impact",-1),B=e("div",{class:"bg-gray-800 w-6 flex items-center justify-center"},[e("span",{class:"text-white -rotate-90 whitespace-nowrap text-xs uppercase tracking-widest"},"High urgency")],-1),V=m({__name:"TaskPriorities",props:{tasks:{type:Array,required:!0}},setup(p){const n=p,d=a(()=>n.tasks.filter(t=>t.urgency===1&&t.impact===1)),u=a(()=>n.tasks.filter(t=>t.urgency===1&&t.impact===2)),g=a(()=>n.tasks.filter(t=>t.urgency===2&&t.impact===1)),_=a(()=>n.tasks.filter(t=>t.urgency===2&&t.impact===2));return(t,$)=>(i(),s("div",v,[x,e("div",b,[k,e("div",I,[e("div",S,[e("div",U,[e("ul",null,[(i(!0),s(o,null,c(g.value,r=>(i(),s("li",{key:r.id},l(r.name),1))),128))])]),e("div",L,[e("ul",null,[(i(!0),s(o,null,c(d.value,r=>(i(),s("li",{key:r.id},l(r.name),1))),128))])])]),e("div",N,[e("div",j,[e("ul",null,[(i(!0),s(o,null,c(_.value,r=>(i(),s("li",{key:r.id},l(r.name),1))),128))])]),e("div",H,[e("ul",null,[(i(!0),s(o,null,c(u.value,r=>(i(),s("li",{key:r.id},l(r.name),1))),128))])])])]),A]),B]))}}),F=e("header",null,[e("img",{alt:"Vue logo",class:"logo",src:f,width:"125",height:"125"}),e("div",{class:"wrapper"})],-1),R=m({__name:"RedirectApp",setup(p){const d=h([{id:1,name:"Urgent and Important",description:"Some description",urgency:1,impact:1},{id:2,name:"Urgent and not important",description:"Some description",urgency:1,impact:2},{id:3,name:"Not urgent but Important",description:"Some description",urgency:2,impact:1},{id:4,name:"Not urgent and not important",description:"Some description",urgency:2,impact:2},{id:5,name:"Not urgent and not important 2",description:"Some description",urgency:2,impact:2}]);return(u,g)=>(i(),s(o,null,[F,e("main",null,[y(V,{tasks:d.value},null,8,["tasks"])])],64))}});w(R).mount("#app");