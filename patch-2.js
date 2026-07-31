
(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const norm=v=>String(v||'').trim().replace(/\s+/g,' ').toLowerCase();
  const esc83=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const topics={
    'Engineering Support Section':['Safety & PPE','WI / SOP Understanding','Drawing Reading','Measuring Tool','PFMEA / Control Plan','Jig & Fixture','Machine Parameter','Problem Solving','Engineering Change'],
    'Support Production Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Production Planning','Material Control','FIFO / Traceability','Document Control','ERP Data','Record Filling','Abnormal Handling'],
    'Stamping Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Drawing Reading','Measuring Tool','Machine Setup','Machine Operation','First-piece Inspection','Process Quality Control','NG Identification','Upper & Lower Die Change','Record Filling','Abnormal Handling','Daily Machine Check'],
    'Welding Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Drawing Reading','Measuring Tool','Jig Setup','Welding Operation','First-piece Inspection','Weld Quality Inspection','NG Identification','Electrode Check','Poka-Yoke Verification','Record Filling','Abnormal Handling','Daily Machine Check'],
    'Sorting Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Boundary Sample','Visual Inspection','Measuring Tool','Defect Classification','NG Identification','Traceability','Containment','Record Filling','Abnormal Handling'],
    'CNC Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Drawing Reading','Measuring Tool','Machine Setup','Program Operation','Tool Offset','Tool Change','First-piece Inspection','Process Quality Control','NG Identification','Tool Life Control','Record Filling','Troubleshooting','Daily Machine Check'],
    'Tapping Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Drawing Reading','Measuring Tool','Machine Setup','Tap Change','Machine Operation','First-piece Inspection','Gauge Inspection','Thread Quality','NG Identification','Tool Life Control','Lubrication Control','Record Filling','Abnormal Handling','Daily Machine Check'],
    'Bending Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Drawing Reading','Measuring Tool','Machine Setup','Die Setup','Machine Operation','First-piece Inspection','Angle Inspection','Process Quality Control','NG Identification','Springback Adjustment','Record Filling','Abnormal Handling','Daily Machine Check'],
    'Machine Maintenance Section':['Safety & PPE','LOTO','WI / SOP Understanding','PM Inspection','Lubrication','Electrical Check','Mechanical Repair','Sensor / PLC Check','Troubleshooting','Breakdown Record','Spare Parts Control','Abnormal Handling'],
    'Tooling Maintenance Section':['Safety & PPE','5S Ability','WI / SOP Understanding','Die Structure','Mold PM','Mold Repair','Grinding Standard','Polishing','Tool Measurement','Mold Assembly','Failure Analysis','Tooling Record','Abnormal Handling']
  };
  const machines={
    'Engineering Support Section':['Production Support Area','Process Engineering Area','Inspection Support Area'],
    'Support Production Section':['Production Planning Area','Document Control Area','Store Area'],
    'Stamping Section':['Press Machine 01','Press Machine 02','Press Machine 03','Press Machine 08','Die Setup Area'],
    'Welding Section':['Spot Welding 01','Spot Welding 02','Nut Welding','Welding Jig Area'],
    'Sorting Section':['Sorting 1','Sorting 2','Final Inspection Area'],
    'CNC Section':['CNC Machine 01','CNC Machine 02','CNC Machine 03'],
    'Tapping Section':['Tapping Machine 01','Tapping Machine 02'],
    'Bending Section':['Bending Machine 01','Bending Machine 02'],
    'Machine Maintenance Section':['Machine Maintenance Workshop','PM Area','Utility Area'],
    'Tooling Maintenance Section':['Tooling Workshop','Mold PM Area','Mold Repair Area']
  };
  function employees(){
    try{const x=window.getProductionEmployees&&window.getProductionEmployees();if(Array.isArray(x)&&x.length)return x;}catch(e){}
    try{const x=JSON.parse(localStorage.getItem('productionEmployees')||'[]');if(Array.isArray(x))return x;}catch(e){}
    return [];
  }
  function sections(){
    const vals=[...Object.keys(topics),...employees().map(e=>e.section)].filter(Boolean).map(v=>String(v).trim());
    return [...new Set(vals)];
  }
  function fillSections(el){
    if(!el)return;
    const old=el.value;
    el.innerHTML=sections().map(s=>`<option value="${esc83(s)}">${esc83(s)}</option>`).join('');
    const matched=sections().find(s=>norm(s)===norm(old));
    el.value=matched||sections()[0]||'';
    el.disabled=false;
  }
  function sectionEmployees(sec){return employees().filter(e=>norm(e.section)===norm(sec)).sort((a,b)=>String(a.name||'').localeCompare(String(b.name||'')));}
  function empKey(e,i){return String(e.docId||e.id||i);}
  function levels(e,sec){const saved=e.skillLevels||{};const fallback=Math.max(1,Math.min(5,Number(e.currentSkillLevel||1)));return Object.fromEntries((topics[sec]||[]).map(t=>[t,Math.max(1,Math.min(5,Number(saved[t]||fallback)))]));}
  function saveEmployee(e){
    const all=employees();const idx=all.findIndex((x,i)=>String(x.docId||x.id||i)===String(e.docId||e.id||all.indexOf(e)));
    if(idx>=0)all[idx]=e;
    try{localStorage.setItem('productionEmployees',JSON.stringify(all));localStorage.setItem('productionEmployeesSavedAt',new Date().toISOString());}catch(err){}
  }
  function renderMatrix(){
    if(typeof window.renderSectionSkillMatrix==='function'){window.renderSectionSkillMatrix();return;}
    const secEl=$('skillMatrixSection'),area=$('sectionSkillMatrixArea'),summary=$('skillMatrixSummary');if(!secEl||!area)return;
    const sec=secEl.value,list=sectionEmployees(sec),skills=topics[sec]||[];
    if(summary)summary.innerHTML=`<div class="stat"><span>พนักงานใน Section</span><b>${list.length}</b></div><div class="stat"><span>หัวข้อทักษะ</span><b>${skills.length}</b></div><div class="stat"><span>การบันทึก</span><b style="font-size:18px">อัตโนมัติ</b></div><div class="stat"><span>ความถี่ประเมิน</span><b style="font-size:20px">3 เดือน</b></div>`;
    if(!list.length){area.innerHTML='<div class="empty" style="padding:30px">ไม่พบพนักงานใน Section นี้ กรุณาตรวจสอบชื่อ Section ในข้อมูลพนักงาน</div>';return;}
    const scoreInfo=score=>score<=25?{level:1,cls:'rank-1'}:score<=37?{level:2,cls:'rank-2'}:score<=49?{level:3,cls:'rank-3'}:score<=61?{level:4,cls:'rank-4'}:{level:5,cls:'rank-5'};
    const criteria=[
      [1,'เริ่มต้น','14 – 25 คะแนน',['ยังไม่มีความรู้หรือประสบการณ์ในเรื่องนี้','ต้องมีผู้แนะนำ/ควบคุมอย่างใกล้ชิด','ทำตามคำแนะนำได้'],['No knowledge or experience','Requires close supervision','Can follow instructions']],
      [2,'กำลังเรียนรู้','26 – 37 คะแนน',['มีความรู้พื้นฐานบางส่วน','สามารถทำงานง่าย ๆ ได้','ยังต้องการคำแนะนำ'],['Basic knowledge','Can perform simple tasks','Requires some guidance']],
      [3,'ปฏิบัติได้','38 – 49 คะแนน',['มีความรู้และทักษะเพียงพอ','สามารถทำงานทั่วไปได้ด้วยตนเอง','แก้ปัญหาทั่วไปได้'],['Adequate knowledge and skills','Can work independently','Can solve common problems']],
      [4,'ชำนาญ','50 – 61 คะแนน',['มีความรู้และประสบการณ์สูง','ทำงานได้รวดเร็วและถูกต้อง','แก้ไขปัญหาที่ซับซ้อนได้'],['High knowledge and experience','Works quickly and accurately','Can solve complex problems']],
      [5,'ผู้เชี่ยวชาญ','62 – 70 คะแนน',['เชี่ยวชาญในเรื่องนี้อย่างแท้จริง','สามารถสอน/ถ่ายทอดความรู้ได้','พัฒนาและปรับปรุงงานได้'],['Expert in this area','Can train and transfer knowledge','Can improve and develop work']]
    ];
    const rows=list.map((e,i)=>{const lv=levels(e,sec),key=empKey(e,employees().indexOf(e)),score=skills.reduce((sum,s)=>sum+(Number(lv[s])||1),0),rank=scoreInfo(score);return `<tr><td>${i+1}</td><td>${e.photoData?`<img src="${e.photoData}" class="matrix-avatar">`:'-'}</td><td>${esc83(e.id||'-')}</td><td class="emp-col"><b>${esc83(String(e.name||'-').toUpperCase())}</b><br><small>${esc83(e.position||'-')}</small></td>${skills.map(s=>`<td><select class="v83-level skill-cell-select" data-key="${encodeURIComponent(key)}" data-skill="${encodeURIComponent(s)}">${[1,2,3,4,5].map(n=>`<option value="${n}" ${lv[s]===n?'selected':''}>${n}</option>`).join('')}</select></td>`).join('')}<td class="total-score"><b>${score}</b></td><td><span class="rank-badge ${rank.cls}">ระดับ ${rank.level}</span></td></tr>`}).join('');
    area.innerHTML=`<div class="matrix-report-head"><div><h1>SKILL MATRIX — ${esc83(sec)}</h1><div>ประเมินทักษะพนักงานตามมาตรฐาน 5 ระดับ (1–5) &nbsp; | &nbsp; คะแนนรวม 14–70 คะแนน</div></div></div><div class="matrix-info-strip"><div><b>Section</b><span>${esc83(sec)}</span></div><div><b>วันที่ประเมิน</b><span>${new Date().toLocaleDateString('th-TH')}</span></div><div><b>ผู้ประเมิน</b><span>Admin</span></div></div><div class="skill-table-shell"><table class="skill-table matrix-modern"><thead><tr><th>No.</th><th>รูป</th><th>รหัส</th><th class="emp-col">ชื่อ / ตำแหน่ง</th>${skills.map(s=>`<th>${esc83(s)}<small>1 – 5</small></th>`).join('')}<th>คะแนนรวม<small>(14 – 70)</small></th><th>ระดับ</th></tr></thead><tbody>${rows}</tbody></table></div><div class="criteria-wrap"><div class="criteria-title">เกณฑ์การให้คะแนน (SCORING CRITERIA)</div><div class="criteria-grid">${criteria.map(d=>`<div class="criteria-card criteria-${d[0]}"><div class="criteria-card-head">ระดับ ${d[0]}<small>(${d[1]})</small><b>${d[2]}</b></div><ul>${d[3].map(x=>`<li>${x}</li>`).join('')}</ul><ul class="criteria-en">${d[4].map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</div><div class="criteria-note"><b>หมายเหตุ:</b> คะแนนรวมขั้นต่ำ 14 คะแนน และสูงสุด 70 คะแนน (14 ทักษะ × 5 คะแนน = 70 คะแนน)</div></div>`;
    area.querySelectorAll('.v83-level').forEach(sel=>sel.addEventListener('change',()=>{
      const key=decodeURIComponent(sel.dataset.key),skill=decodeURIComponent(sel.dataset.skill),all=employees();
      const e=all.find((x,i)=>String(x.docId||x.id||i)===key);if(!e)return;
      e.skillLevels={...(e.skillLevels||{}),[skill]:Number(sel.value)};e.currentSkillLevel=Math.min(...Object.values(e.skillLevels).map(Number));e.skillUpdatedAt=new Date().toISOString();
      try{localStorage.setItem('productionEmployees',JSON.stringify(all));}catch(err){}
      sel.style.outline='2px solid #16a34a';setTimeout(()=>sel.style.outline='',700);renderCard();
    }));
  }
  function fillEmployee(){
    const sec=$('skillCardSection'),emp=$('skillCardEmployee');if(!sec||!emp)return;
    const list=sectionEmployees(sec.value),old=emp.value;
    emp.innerHTML='<option value="">เลือกพนักงาน</option>'+list.map((e,i)=>`<option value="${encodeURIComponent(empKey(e,employees().indexOf(e)))}">${esc83(e.id||'-')} — ${esc83(String(e.name||'').toUpperCase())}</option>`).join('');
    emp.value=[...emp.options].some(o=>o.value===old)?old:(list[0]?encodeURIComponent(empKey(list[0],employees().indexOf(list[0]))):'');emp.disabled=false;
    const machine=$('skillCardMachine');if(machine){const keep=machine.value;machine.innerHTML='<option value="">เลือกเครื่องจักร/พื้นที่</option>'+((machines[sec.value]||['Production Area']).map(x=>`<option value="${esc83(x)}">${esc83(x)}</option>`).join(''));if([...machine.options].some(o=>o.value===keep))machine.value=keep;machine.disabled=false;}
    const ap=$('skillCardApprover');if(ap){const keep=ap.value;const names=sectionEmployees('Engineering Support Section').map(e=>e.name).filter(Boolean);ap.innerHTML='<option value="">เลือกผู้อนุมัติ</option>'+[...new Set(names)].map(x=>`<option value="${esc83(x)}">${esc83(x)}</option>`).join('');if([...ap.options].some(o=>o.value===keep))ap.value=keep;ap.disabled=false;}
    renderCard();
  }
  function selectedEmployee(){const el=$('skillCardEmployee');if(!el||!el.value)return null;const key=decodeURIComponent(el.value);return employees().find((e,i)=>String(e.docId||e.id||i)===key)||null;}
  function renderCard(){
    if(typeof window.renderSkillCardPreview==='function'){window.renderSkillCardPreview();return;}
    const area=$('skillCardPreview');if(!area)return;const e=selectedEmployee();if(!e){area.innerHTML='<div class="empty" style="padding:30px">กรุณาเลือกพนักงาน</div>';return;}
    const sec=e.section||$('skillCardSection')?.value||'',lv=levels(e,sec),machine=$('skillCardMachine')?.value||e.assignedMachine||'-',approver=$('skillCardApprover')?.value||e.skillApprovedBy||'-';
    area.innerHTML=`<div class="skill-card"><div class="skill-card-head"><b>EMPLOYEE SKILL CARD</b><span>${esc83(sec)}</span></div><div class="skill-card-body">${e.photoData?`<img class="skill-card-photo" src="${e.photoData}">`:'<div class="skill-card-photo"></div>'}<div class="skill-card-info"><h2>${esc83(String(e.name||'-').toUpperCase())}</h2><div><b>Emp.ID:</b> ${esc83(e.id||'-')}</div><div><b>Position:</b> ${esc83(e.position||'-')}</div><div><b>Machine:</b> ${esc83(machine)}</div><div><b>Approved by:</b> ${esc83(approver)}</div></div><div></div><div class="skill-card-skills">${Object.entries(lv).map(([s,n])=>`<div class="skill-card-skill"><span>${esc83(s)}</span><span class="level-dot lv${n}">${n}</span></div>`).join('')}</div></div></div>`;
  }
  function bind(){
    const sm=$('skillMatrixSection'),sq=$('skillMatrixQuarter'),ss=$('skillMatrixStatus'),search=$('skillMatrixSearch'),sc=$('skillCardSection'),se=$('skillCardEmployee'),machine=$('skillCardMachine'),ap=$('skillCardApprover');
    fillSections(sm);fillSections(sc);
    if(sm){sm.onchange=renderMatrix;sm.style.pointerEvents='auto';}
    if(sq)sq.onchange=renderMatrix;if(ss)ss.onchange=renderMatrix;if(search)search.oninput=renderMatrix;
    if(sc){sc.onchange=fillEmployee;sc.style.pointerEvents='auto';}
    if(se){se.onchange=renderCard;se.style.pointerEvents='auto';}
    if(machine){machine.onchange=()=>{const e=selectedEmployee();if(e){e.assignedMachine=machine.value;saveEmployee(e)}renderCard();};}
    if(ap){ap.onchange=()=>{const e=selectedEmployee();if(e){e.skillApprovedBy=ap.value;saveEmployee(e)}renderCard();};}
    renderMatrix();fillEmployee();
  }
  let tries=0;function start(){tries++;if($('skillMatrixSection')&&$('skillCardSection'))bind();if(tries<20&&(!employees().length||!$('skillCardEmployee')?.options.length))setTimeout(start,500);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
  window.addEventListener('storage',()=>{renderMatrix();fillEmployee();});
})();
