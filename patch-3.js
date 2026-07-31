
(function(){
  'use strict';
  function safeName(value){
    return String(value || 'document').trim().replace(/[^A-Za-z0-9ก-๙_-]+/g,'_').replace(/^_+|_+$/g,'') || 'document';
  }
  function saveBlob(blob, filename){
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(function(){ URL.revokeObjectURL(url); link.remove(); }, 1500);
  }
  function documentHtml(title, content, landscape){
    var css = Array.prototype.map.call(document.querySelectorAll('style'), function(x){ return x.textContent || ''; }).join('\n');
    return '<!doctype html><html lang="th"><head><meta charset="utf-8">'+
      '<meta name="viewport" content="width=device-width,initial-scale=1">'+
      '<title>'+String(title).replace(/[&<>"\']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];})+'</title>'+
      '<style>'+css+'\n'+
      'html,body{background:#fff!important;color:#111!important;margin:0!important;padding:0!important;width:100%!important;overflow:visible!important}'+
      'body{padding:2mm 3mm!important}.page,.panel{display:block!important;box-shadow:none!important;border-radius:0!important;margin:0!important;padding:0!important;max-width:none!important;width:100%!important}'+
      '.no-print,button,input,select{display:none!important}'+
      '.skill-table{width:100%!important;max-width:100%!important;min-width:0!important;table-layout:fixed!important;border-collapse:collapse!important;font-size:6.2pt!important;line-height:1.12!important}'+
      '.skill-table thead{display:table-header-group!important}.skill-table tbody{display:table-row-group!important}.skill-table tr{break-inside:avoid!important;page-break-inside:avoid!important}'+
      '.skill-table th,.skill-table td{box-sizing:border-box!important;padding:1.2mm .55mm!important;white-space:normal!important;overflow-wrap:anywhere!important;word-break:break-word!important;text-align:center!important;vertical-align:middle!important}'+
      '.skill-table th:nth-child(1),.skill-table td:nth-child(1){width:6mm!important}'+
      '.skill-table th:nth-child(2),.skill-table td:nth-child(2){width:7mm!important}'+
      '.skill-table th:nth-child(3),.skill-table td:nth-child(3){width:14mm!important}'+
      '.skill-table th:nth-child(4),.skill-table td:nth-child(4){width:43mm!important;text-align:left!important}'+
      '.skill-table th:nth-child(n+5),.skill-table td:nth-child(n+5){width:auto!important}'+
      '.skill-table img{width:6mm!important;height:6mm!important;object-fit:cover!important}'+
      '.skill-table small{font-size:5.5pt!important}.skill-table b{font-size:6.3pt!important}'+
      '.skill-card{max-width:100%!important;box-shadow:none!important}'+
      '@page{size:A4 '+(landscape?'landscape':'portrait')+';margin:4mm 5mm}'+
      '@media print{html,body{width:100%!important}.skill-table{width:100%!important;max-width:100%!important}}'+
      '</style></head><body>'+content+'</body></html>';
  }
  function cloneVisible(node){
    var copy = node.cloneNode(true);
    Array.prototype.forEach.call(copy.querySelectorAll('.no-print,button,script'), function(x){ x.remove(); });
    var originalSelects = node.querySelectorAll('select');
    Array.prototype.forEach.call(copy.querySelectorAll('select'), function(sel, i){
      var original = originalSelects[i];
      var span = document.createElement('span');
      span.textContent = original && original.selectedOptions && original.selectedOptions[0] ? original.selectedOptions[0].textContent : '-';
      sel.replaceWith(span);
    });
    return copy.outerHTML;
  }
  function printNode(node, title, landscape){
    if(!node || !String(node.textContent || '').trim()){
      alert('ยังไม่มีข้อมูลสำหรับพิมพ์ กรุณาเลือก Section หรือพนักงานก่อน');
      return;
    }
    var popup = window.open('', '_blank');
    if(!popup){
      alert('เบราว์เซอร์บล็อกหน้าต่างพิมพ์ กรุณาอนุญาต Pop-up แล้วลองอีกครั้ง');
      return;
    }
    popup.document.open();
    popup.document.write(documentHtml(title, cloneVisible(node), landscape));
    popup.document.close();
    popup.focus();
    setTimeout(function(){ popup.print(); }, 500);
  }
  function downloadHtml(node, title, filename, landscape){
    if(!node || !String(node.textContent || '').trim()){
      alert('ยังไม่มีข้อมูลสำหรับดาวน์โหลด กรุณาเลือก Section หรือพนักงานก่อน');
      return;
    }
    saveBlob(new Blob(['\ufeff', documentHtml(title, cloneVisible(node), landscape)], {type:'text/html;charset=utf-8'}), filename);
  }
  function matrixSection(){
    var select = document.getElementById('skillMatrixSection');
    return select ? select.value : 'Section';
  }
  function currentCardName(){
    var select = document.getElementById('skillCardEmployee');
    return select && select.selectedOptions && select.selectedOptions[0] ? select.selectedOptions[0].textContent : 'Employee';
  }
  function bind(){
    var matrixArea = document.getElementById('sectionSkillMatrixArea');
    var cardArea = document.getElementById('skillCardPreview');
    var b;
    b = document.getElementById('printSectionSkillBtn');
    if(b) b.onclick = function(){ printNode(matrixArea, 'Skill Matrix - '+matrixSection(), true); };
    b = document.getElementById('downloadSectionSkillDataBtn');
    if(b) b.onclick = function(){ downloadHtml(matrixArea, 'Skill Matrix - '+matrixSection(), safeName(matrixSection()+'_Skill_Matrix')+'.html', true); };
    b = document.getElementById('printSkillCardBtn');
    if(b) b.onclick = function(){ printNode(cardArea, 'Employee Skill Card - '+currentCardName(), true); };
    b = document.getElementById('downloadEmployeeSkillCardBtn');
    if(b) b.onclick = function(){ downloadHtml(cardArea, 'Employee Skill Card - '+currentCardName(), safeName('Employee_Skill_Card_'+currentCardName())+'.html', true); };
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
  setTimeout(bind, 1200);
})();

// v107: Competency Gap Analysis
function requiredLevelByPosition(position){
  const p=String(position||'').toLowerCase();
  if(/manager|supervisor|engineer/.test(p))return 5;
  if(/leader|technician/.test(p))return 4;
  return 3;
}
function competencyGapForEmployee(emp){
  const levels=employeeSkillLevels(emp),required=requiredLevelByPosition(emp.position),items=Object.entries(levels).map(([skill,current])=>({skill,current:Number(current)||1,required,gap:Math.max(0,required-(Number(current)||1))}));
  const missing=items.filter(x=>x.gap>0).sort((a,b)=>b.gap-a.gap||a.skill.localeCompare(b.skill));
  const maxGap=missing.length?Math.max(...missing.map(x=>x.gap)):0;
  const current=items.length?Math.min(...items.map(x=>x.current)):1;
  let action='รักษาระดับและประเมินตามรอบ Q';
  if(missing.length){
    if(maxGap>=3)action='อบรมพื้นฐาน + OJT + New/Level Exam';
    else if(maxGap===2)action='Training + OJT + สอบตาม Level';
    else action='ทบทวน WI/OJT + สอบรอบปัจจุบัน';
  }
  return {required,current,missing,maxGap,ready:missing.length===0,action};
}
function refreshGapFilters(){
  const sec=document.getElementById('gapSectionFilter'),pos=document.getElementById('gapPositionFilter');if(!sec||!pos)return;
  const sv=sec.value||'ALL',pv=pos.value||'ALL';
  const sections=[...new Set(employees.map(e=>e.section).filter(Boolean))].sort(),positions=[...new Set(employees.map(e=>e.position).filter(Boolean))].sort();
  sec.innerHTML='<option value="ALL">ทุก Section</option>'+sections.map(x=>`<option>${esc(x)}</option>`).join('');
  pos.innerHTML='<option value="ALL">ทุกตำแหน่ง</option>'+positions.map(x=>`<option>${esc(x)}</option>`).join('');
  if([...sec.options].some(o=>o.value===sv))sec.value=sv;if([...pos.options].some(o=>o.value===pv))pos.value=pv;
}
function filteredGapEmployees(){
  const sec=document.getElementById('gapSectionFilter')?.value||'ALL',pos=document.getElementById('gapPositionFilter')?.value||'ALL',status=document.getElementById('gapStatusFilter')?.value||'ALL',q=(document.getElementById('gapSearchInput')?.value||'').trim().toLowerCase();
  return employees.filter(e=>{const g=competencyGapForEmployee(e);return(sec==='ALL'||e.section===sec)&&(pos==='ALL'||e.position===pos)&&(status==='ALL'||(status==='GAP'&&!g.ready)||(status==='READY'&&g.ready))&&(!q||String(e.id||'').toLowerCase().includes(q)||String(e.name||'').toLowerCase().includes(q));});
}
function renderCompetencyGap(){
  const rows=document.getElementById('gapRows'),summary=document.getElementById('gapSummary');if(!rows||!summary)return;refreshGapFilters();const list=filteredGapEmployees(),data=list.map(e=>({e,g:competencyGapForEmployee(e)})),ready=data.filter(x=>x.g.ready).length,gap=data.length-ready,totalMissing=data.reduce((n,x)=>n+x.g.missing.length,0);
  summary.innerHTML=`<div class="stat"><span>พนักงานที่แสดง</span><b>${data.length}</b></div><div class="stat"><span>ครบตามเกณฑ์</span><b style="color:#067647">${ready}</b></div><div class="stat"><span>มี Skill Gap</span><b style="color:#b42318">${gap}</b></div><div class="stat"><span>หัวข้อที่ต้องพัฒนา</span><b>${totalMissing}</b></div>`;
  rows.innerHTML=data.length?data.map(({e,g})=>`<tr><td><b>${esc(e.id||'-')}</b><br>${esc((e.name||'-').toUpperCase())}</td><td>${esc(e.section||'-')}</td><td>${esc(e.position||'-')}</td><td><b>Level ${g.required}</b></td><td><b>Level ${g.current}</b></td><td>${g.missing.length?g.missing.map(x=>`<div>${esc(x.skill)}: L${x.current} → L${x.required} <b style="color:#b42318">(-${x.gap})</b></div>`).join(''):'<span class="pass">ไม่มี Gap</span>'}</td><td>${g.maxGap?`<b style="color:#b42318">-${g.maxGap} Level</b>`:'0'}</td><td>${g.ready?'<span class="status-ok">READY</span>':'<span class="status-overdue">GAP</span>'}</td><td>${esc(g.action)}</td></tr>`).join(''):'<tr><td colspan="9" class="empty">ไม่พบข้อมูล</td></tr>';
}
function downloadCompetencyGapCsv(){
  const rows=[['Employee ID','Name','Section','Position','Required Level','Current Level','Missing Skills','Maximum Gap','Status','Action Required']];
  filteredGapEmployees().forEach(e=>{const g=competencyGapForEmployee(e);rows.push([e.id||'',e.name||'',e.section||'',e.position||'',g.required,g.current,g.missing.map(x=>`${x.skill}:L${x.current}->L${x.required}`).join(' | '),g.maxGap,g.ready?'READY':'GAP',g.action])});downloadCsv(rows,'Competency_Gap_Analysis');
}
['gapSectionFilter','gapPositionFilter','gapStatusFilter','gapSearchInput'].forEach(id=>{const el=document.getElementById(id);if(el){el.addEventListener('change',renderCompetencyGap);el.addEventListener('input',renderCompetencyGap)}});const gapDl=document.getElementById('downloadGapCsvBtn');if(gapDl)gapDl.onclick=downloadCompetencyGapCsv;

