
(function(){
  function safePdfName(v){return String(v||'report').trim().replace(/[\/:*?"<>|]+/g,'_').replace(/\s+/g,'_')||'report'}
  async function strictA4LandscapePdf(node,fileName){
    if(!node)return alert('ไม่พบข้อมูลสำหรับดาวน์โหลด PDF');
    if(!window.html2canvas||!window.jspdf||!window.jspdf.jsPDF){
      alert('ระบบสร้าง PDF ยังโหลดไม่สำเร็จ กรุณาเชื่อมต่ออินเทอร์เน็ต แล้วกด Ctrl + F5 ก่อนลองใหม่');
      return;
    }
    const stage=document.createElement('div');
    stage.style.cssText='position:fixed;left:-100000px;top:0;width:1120px;background:#fff;color:#111;padding:24px;z-index:-1;overflow:visible';
    const copy=node.cloneNode(true);
    copy.style.setProperty('display','block','important');
    copy.style.width='100%';copy.style.maxWidth='100%';copy.style.overflow='visible';
    copy.classList.remove('page');copy.classList.add('active');
    copy.querySelectorAll('.no-print,button,input,select,script,.page-download-button,.universal-print').forEach(x=>x.remove());
    copy.querySelectorAll('.org-chart-wrap').forEach(x=>{x.style.overflow='visible';x.style.width='100%'});
    copy.querySelectorAll('.hierarchy').forEach(x=>{x.style.transformOrigin='top left';x.style.maxWidth='none'});
    stage.appendChild(copy);document.body.appendChild(stage);
    try{
      await new Promise(r=>setTimeout(r,250));
      const canvas=await html2canvas(stage,{scale:1.6,useCORS:true,allowTaint:true,backgroundColor:'#fff',logging:false,windowWidth:stage.scrollWidth,windowHeight:stage.scrollHeight,scrollX:0,scrollY:0});
      const {jsPDF}=window.jspdf;
      const pdf=new jsPDF({orientation:'landscape',unit:'mm',format:'a4',compress:true});
      const pw=pdf.internal.pageSize.getWidth(),ph=pdf.internal.pageSize.getHeight(),m=7,maxW=pw-m*2,maxH=ph-m*2;
      const sourcePageH=Math.max(1,Math.floor(canvas.width*maxH/maxW));
      let y=0,page=0;
      while(y<canvas.height){
        const h=Math.min(sourcePageH,canvas.height-y);
        const pc=document.createElement('canvas');pc.width=canvas.width;pc.height=h;
        const ctx=pc.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,pc.width,pc.height);ctx.drawImage(canvas,0,y,canvas.width,h,0,0,canvas.width,h);
        if(page++)pdf.addPage('a4','landscape');
        pdf.addImage(pc.toDataURL('image/jpeg',0.94),'JPEG',m,m,maxW,h*maxW/canvas.width,'','FAST');
        y+=h;
      }
      pdf.save(safePdfName(fileName)+'.pdf');
      if(typeof showLocalSaveStatus==='function')showLocalSaveStatus('ดาวน์โหลด PDF ลงเครื่องแล้ว');
    }catch(err){console.error('PDF export error',err);alert('ดาวน์โหลด PDF ไม่สำเร็จ: '+(err&&err.message?err.message:'กรุณาลองใหม่'));}
    finally{stage.remove()}
  }
  const orgBtn=document.getElementById('downloadOrganizationPdfBtn');
  if(orgBtn)orgBtn.onclick=async function(){
    try{if(typeof buildOrganizationPrintReport==='function')buildOrganizationPrintReport();}catch(e){console.warn(e)}
    const report=document.getElementById('organizationPrintReport');
    await strictA4LandscapePdf(report&&report.innerHTML.trim()?report:document.getElementById('organization'),'Organization_Chart');
  };
  const secBtn=document.getElementById('downloadSectionChartPdfBtn');
  if(secBtn)secBtn.onclick=async function(){
    const area=document.getElementById('sectionChartArea');
    const sec=(document.getElementById('chartSectionFilter')||{}).value||'Section';
    const wrap=document.createElement('div');wrap.style.background='#fff';wrap.innerHTML='<div style="text-align:center;margin-bottom:14px"><h1 style="margin:0;color:#1f4e79">SECTION ORGANIZATION CHART</h1><div style="font-weight:700;margin-top:5px">'+String(sec).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))+'</div><div style="font-size:12px;margin-top:4px">วันที่ '+new Date().toLocaleDateString('th-TH')+'</div></div>';
    if(area)wrap.appendChild(area.cloneNode(true));
    await strictA4LandscapePdf(wrap,'Section_Organization_Chart_'+sec);
  };
})();
