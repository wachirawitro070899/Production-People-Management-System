
(function(){
'use strict';
function escV(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function norm(v){return String(v||'').trim().toLowerCase().replace(/\s+/g,' ')}
function secEq(a,b){return norm(a).replace(/ section$/,'')===norm(b).replace(/ section$/,'')}
function shiftOf(e){var x=String((e&&(e.shift||e.workShift||e.shiftName||e.team))||'').trim().toUpperCase();if(x==='A'||x==='SHIFT A'||x==='กะ A'||x==='กะA')return'A';if(x==='B'||x==='SHIFT B'||x==='กะ B'||x==='กะB')return'B';return'U'}
function roleRank(p){var x=norm(p),order=['production manager','manager','assistant manager','senior engineer','production engineer','tooling engineer','welding engineer','engineer','supervisor','leader','technician','senior operator','operator','trainee'];for(var i=0;i<order.length;i++)if(x.indexOf(order[i])>=0)return i;return 999}
function cssRole(p){var x=norm(p);if(x.indexOf('supervisor')>=0)return'supervisor';if(x.indexOf('leader')>=0)return'leader';if(x.indexOf('engineer')>=0)return'engineer';if(x.indexOf('technician')>=0)return'technician';return'operator'}
function sortEmp(a,b){var r=roleRank(a.position)-roleRank(b.position);if(r)return r;var da=Date.parse(a.startDate||'9999-12-31'),db=Date.parse(b.startDate||'9999-12-31');if(da!==db)return da-db;return String(a.id||'').localeCompare(String(b.id||''),undefined,{numeric:true})}
function data(){try{return typeof window.getProductionEmployees==='function'?(window.getProductionEmployees()||[]):[]}catch(e){return[]}}
var blank='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="#e5edf6"/><circle cx="40" cy="30" r="15" fill="#9fb4cb"/><path d="M15 75c2-20 13-30 25-30s23 10 25 30" fill="#9fb4cb"/></svg>');
function person(e,showShift){var s=shiftOf(e),badge=showShift?'<span class="v129-shift '+(s==='B'?'b':s==='U'?'u':'')+'">'+(s==='A'?'กะ A':s==='B'?'กะ B':'ไม่ระบุกะ')+'</span>':'';var photo=(e&&e.photoData)||blank;return '<div class="v129-person '+cssRole(e.position)+'"><img src="'+escV(photo)+'" alt=""><b title="'+escV(e.name||'')+'">'+escV(e.name||e.thaiName||'-')+'</b><small>'+escV(e.id||'-')+'</small><small>'+escV(e.position||'-')+'</small>'+badge+'</div>'}
function renderV130Org(){
 var host=document.getElementById('allOrganizationChart');if(!host)return;
 var list=data().filter(Boolean).slice();if(!list.length){host.innerHTML='<div class="empty" style="padding:70px">กำลังโหลดข้อมูลพนักงาน...</div>';return}
 list.sort(sortEmp);var manager=list.find(function(e){return norm(e.position).indexOf('production manager')>=0})||list[0];
 var selected=((document.getElementById('organizationShiftFilter')||{}).value||'ALL').toUpperCase();
 var filtered=list.filter(function(e){return e!==manager&&(selected==='ALL'||shiftOf(e)===selected)});
 var sections=[];filtered.forEach(function(e){var s=String(e.section||'ไม่ระบุ Section').trim();if(!sections.some(function(x){return secEq(x,s)}))sections.push(s)});sections.sort();
 var a=list.filter(function(e){return e!==manager&&shiftOf(e)==='A'}).length,b=list.filter(function(e){return e!==manager&&shiftOf(e)==='B'}).length,u=list.filter(function(e){return e!==manager&&shiftOf(e)==='U'}).length;
 var summary='<div class="v129-org-summary"><span>พนักงาน '+(list.length-1)+' คน</span><span>กะ A '+a+' คน</span><span>กะ B '+b+' คน</span>'+(u?'<span>ไม่ระบุกะ '+u+' คน</span>':'')+'<span>'+sections.length+' Sections</span></div>';
 var mgr='<div class="v129-manager-row"><div class="v129-manager-card"><img src="'+escV(manager.photoData||blank)+'" alt=""><b>'+escV(manager.name||'-')+'</b><small>'+escV(manager.id||'-')+'</small><small>'+escV(manager.position||'Production Manager')+'</small></div></div>';
 var grids=sections.map(function(sec){var group=filtered.filter(function(e){return secEq(e.section,sec)}).sort(sortEmp);var roles=[];group.forEach(function(e){var p=String(e.position||'ไม่ระบุตำแหน่ง').trim();if(roles.indexOf(p)<0)roles.push(p)});roles.sort(function(a,b){return roleRank(a)-roleRank(b)||a.localeCompare(b)});return '<section class="v129-section"><div class="v129-section-title">'+escV(sec)+'<small>'+group.length+' คน</small></div>'+roles.map(function(role){return '<div class="v129-role"><div class="v129-role-title">'+escV(role)+'</div><div class="v129-people">'+group.filter(function(e){return String(e.position||'ไม่ระบุตำแหน่ง').trim()===role}).map(function(e){return person(e,selected==='ALL')}).join('')+'</div></div>'}).join('')+'</section>'}).join('');
 host.innerHTML='<div class="v129-org-canvas">'+summary+mgr+'<div class="v129-section-grid">'+(grids||'<div class="empty">ไม่มีข้อมูลตามตัวกรอง</div>')+'</div></div>';
}
window.renderAllOrganizationChart=renderV130Org;
function bind(){var f=document.getElementById('organizationShiftFilter');if(f)f.addEventListener('change',renderV130Org);renderV130Org();setTimeout(renderV130Org,700);setTimeout(renderV130Org,1800)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
window.addEventListener('load',function(){setTimeout(renderV130Org,400)});
setInterval(function(){var h=document.getElementById('allOrganizationChart');if(h&&(!h.children.length||!h.textContent.trim()||h.textContent.indexOf('กำลังโหลด')>=0))renderV130Org()},2000);
})();
