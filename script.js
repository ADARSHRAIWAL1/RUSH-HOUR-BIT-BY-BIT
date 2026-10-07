/* ===== EDIT THESE ===== */
const C={
 start:"2026-12-05T09:00:00+05:30",
 regClose:"2026-11-28T23:59:00+05:30",
 registered:87,capacity:120,
 formUrl:"#",rulebookUrl:"#",
 rubric:[["Idea & problem clarity",15],["Product build",25],["Adaptability to Rush shocks",20],["Journey & reports",25],["Final pitch",15]],
 heads:[["President","President"],["Vice President","Vice President"],["General Secretary","General Secretary"]],
 mentors:[["Judge Name","Role, Company"],["Judge Name","Role, Company"],["Mentor Name","Role, Company"],["Mentor Name","Role, Company"]],
 board:[["Team Alpha",86,"Finalist"],["Team Nova",78,"Shortlisted"],["Team X",61,"Eliminated"]]
};
const $=i=>document.getElementById(i),z=n=>String(n).padStart(2,"0");
document.querySelectorAll("[data-link]").forEach(a=>{const u=a.dataset.link==="form"?C.formUrl:C.rulebookUrl;a.href=u;if(u!=="#")a.target="_blank"});
function tick(){const n=Date.now();
 let t=Math.max(0,new Date(C.start)-n);
 $("d").textContent=z(Math.floor(t/864e5));$("h").textContent=z(Math.floor(t/36e5)%24);$("m").textContent=z(Math.floor(t/6e4)%60);$("s").textContent=z(Math.floor(t/1e3)%60);
 t=Math.max(0,new Date(C.regClose)-n);
 $("rd").textContent=Math.floor(t/864e5);$("rh").textContent=Math.floor(t/36e5)%24;$("rm").textContent=Math.floor(t/6e4)%60;$("rs").textContent=Math.floor(t/1e3)%60}
tick();setInterval(tick,1000);
$("bar").style.width=C.registered/C.capacity*100+"%";
$("rc").textContent=C.registered+" / "+C.capacity+" teams registered";
$("rl").textContent=new Date(C.regClose).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"});
$("pts").innerHTML=C.rubric.map(r=>`<div><span>${r[0]}</span><i style="width:${r[1]*4}%"></i><b>${r[1]}</b></div>`).join("");
const prof=a=>a.map(p=>`<div class="pr"><div class="ph">${p[0][0]}</div><div><h3>${p[0]}</h3><em>${p[1]}</em><p>Short bio and relevant experience go here.</p></div></div>`).join("");
$("heads").innerHTML=prof(C.heads);$("ment").innerHTML=prof(C.mentors);
let f="All";const st=["All","Shortlisted","Finalist","Eliminated"];
function draw(){$("fl").innerHTML=st.map(s=>`<button class="${s===f?"on":""}" aria-pressed="${s===f}">${s}</button>`).join("");
 [...$("fl").children].forEach((b,i)=>b.onclick=()=>{f=st[i];draw()});
 $("lb").innerHTML=C.board.slice().sort((a,b)=>b[1]-a[1]).filter(r=>f==="All"||r[2]===f).map((r,i)=>`<tr><td>${i+1}</td><td>${r[1]}</td><td>${r[0]}</td><td><span class="pill ${r[2]}">${r[2]}</span></td></tr>`).join("")}
draw();