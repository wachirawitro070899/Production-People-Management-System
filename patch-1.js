
(function(){
  let portalEmployee=null;
  const $=id=>document.getElementById(id);
  const norm=v=>String(v||'').trim().replace(/\s+/g,'').toUpperCase();
  function addHeaderButtons(){
    const actions=document.querySelector('.top-actions');
    if(!actions||$('employeePortalBtn'))return;
    const enter=document.createElement('button');enter.id='employeePortalBtn';enter.className='btn light';enter.type='button';enter.textContent='พนักงานเข้าสอบ';
    const exit=document.createElement('button');exit.id='employeePortalExit';exit.className='btn light employee-portal-only';exit.type='button';exit.textContent='ออกจากหน้าทดสอบ';
    actions.append(enter,exit); enter.onclick=openPortal; exit.onclick=exitPortal;
  }
  function openPortal(){
    $('employeePortalError').classList.add('hidden'); $('employeePortalId').value='';
    $('employeePortalModal').classList.add('show');
    try{ if(typeof renderOnlineExamEmployees==='function')renderOnlineExamEmployees(); }catch(e){console.warn(e)}
    setTimeout(()=>$('employeePortalId').focus(),50);
  }
  function employeeList(){
    try{
      if(typeof window.getProductionEmployees==='function'){const list=window.getProductionEmployees();if(Array.isArray(list))return list;}
      if(Array.isArray(window.employees))return window.employees;
    }catch(e){console.warn('Employee list unavailable:',e)}
    return [];
  }
  function findEmployee(id){
    const clean=norm(id); if(!clean)return null;
    const list=employeeList();
    let emp=list.find(e=>[e.id,e.employeeId,e.empId,e.code].some(v=>norm(v)===clean));
    if(emp)return emp;
    const sel=$('onlineExamEmployee');
    if(sel){
      const opt=[...sel.options].find(o=>norm(o.value)===clean||norm(o.textContent).startsWith(clean+'—')||norm(o.textContent).startsWith(clean+'-')||norm(o.textContent).includes(clean));
      if(opt){
        emp=list.find(e=>String(e.id||'')===String(opt.value))||list.find(e=>norm(e.id)===norm(opt.value));
        if(emp)return emp;
      }
    }
    return null;
  }
  function showError(msg){const e=$('employeePortalError');e.textContent=msg;e.classList.remove('hidden');}
  async function enterPortal(){
    const btn=$('employeePortalEnter'); const raw=$('employeePortalId').value;
    if(!norm(raw))return showError('กรุณากรอกรหัสพนักงาน');
    btn.disabled=true; btn.textContent='กำลังตรวจสอบ...';
    try{
      let emp=null;
      for(let i=0;i<20&&!emp;i++){
        try{if(typeof renderOnlineExamEmployees==='function')renderOnlineExamEmployees();}catch(e){}
        emp=findEmployee(raw);
        if(!emp)await new Promise(r=>setTimeout(r,250));
      }
      if(!emp)return showError('ไม่พบรหัสพนักงาน หรือข้อมูลพนักงานยังไม่ถูกซิงก์ กรุณาตรวจสอบรหัสแล้วลองอีกครั้ง');
      portalEmployee=emp; window.currentPortalEmployee=emp; sessionStorage.setItem('employeeExamId',String(emp.id||emp.employeeId||''));
      $('employeePortalModal').classList.remove('show'); document.body.classList.add('employee-exam-mode');
      document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      const page=$('onlineExam'); if(!page)throw new Error('ไม่พบหน้า Online Examination'); page.classList.add('active');
      const section=$('onlineExamSection');
      if(section&&emp.section){section.value=emp.section;}
      if(typeof renderOnlineExamEmployees==='function')renderOnlineExamEmployees();
      const sel=$('onlineExamEmployee');
      if(sel){
        let opt=[...sel.options].find(o=>norm(o.value)===norm(emp.id)||norm(o.textContent).includes(norm(emp.id)));
        if(!opt){
          opt=document.createElement('option');
          opt.value=emp.docId||String((employeeList()||[]).indexOf(emp));
          opt.textContent=`${emp.id||'-'} — ${(emp.name||'').toUpperCase()}`;
          sel.appendChild(opt);
        }
        sel.value=opt.value;
      }
      if(typeof refreshExamLock==='function')refreshExamLock();
      const startBtn=$('startOnlineExam');
      if(startBtn&&typeof window.startOnlineExamination==='function')startBtn.onclick=window.startOnlineExamination;
      const badge=$('userBadge'); if(badge)badge.textContent=`ผู้เข้าสอบ: ${emp.id||'-'} — ${(emp.name||'').toUpperCase()}`;
      const first=page.querySelector('.panel');
      let identity=$('employeeIdentity'); if(first&&!identity){identity=document.createElement('div');identity.id='employeeIdentity';identity.className='notice';first.insertBefore(identity,first.children[1]||null);}
      if(identity)identity.textContent=`${emp.id||'-'} — ${(emp.name||'').toUpperCase()} · ${emp.section||'-'} · ${emp.position||'-'}`;
      window.scrollTo({top:0,behavior:'smooth'});
    }catch(err){console.error(err);showError('ไม่สามารถเปิดหน้าทดสอบได้: '+(err.message||err));}
    finally{btn.disabled=false;btn.textContent='เข้าสู่หน้าทดสอบ';}
  }
  function exitPortal(){
    sessionStorage.removeItem('employeeExamId'); portalEmployee=null; window.currentPortalEmployee=null; document.body.classList.remove('employee-exam-mode');
    const sel=$('onlineExamEmployee');if(sel)sel.disabled=false;
    const identity=$('employeeIdentity');if(identity)identity.remove();
    const badge=$('userBadge');if(badge)badge.textContent=(window.auth&&auth.currentUser)?auth.currentUser.email:'Public Viewer';
    const orgBtn=document.querySelector('nav button[data-page="organization"]');if(orgBtn)orgBtn.click();
  }
  function init(){
    sessionStorage.removeItem('employeeExamId');window.currentPortalEmployee=null;document.body.classList.remove('employee-exam-mode');addHeaderButtons();
    if($('employeePortalEnter'))$('employeePortalEnter').onclick=enterPortal;
    if($('employeePortalCancel'))$('employeePortalCancel').onclick=()=>$('employeePortalModal').classList.remove('show');
    if($('employeePortalId'))$('employeePortalId').addEventListener('keydown',e=>{if(e.key==='Enter')enterPortal()});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
