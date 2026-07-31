
(function(){
'use strict';
function approvalBlock(){return '<div class="matrix-approval-box"><div class="matrix-approval-title">การตรวจสอบและอนุมัติ / REVIEW & APPROVAL</div><div class="matrix-approval-grid"><div class="matrix-approval-cell"><div class="matrix-sign-line">ผู้จัดทำ / Prepared by</div><div class="matrix-sign-date">ชื่อ-ลายเซ็น ____________________ &nbsp; วันที่ ____/____/______</div></div><div class="matrix-approval-cell"><div class="matrix-sign-line">ผู้ตรวจสอบ / Reviewed by</div><div class="matrix-sign-date">ชื่อ-ลายเซ็น ____________________ &nbsp; วันที่ ____/____/______</div></div><div class="matrix-approval-cell"><div class="matrix-sign-line">ผู้อนุมัติ / Approved by</div><div class="matrix-sign-date">ชื่อ-ลายเซ็น ____________________ &nbsp; วันที่ ____/____/______</div></div></div></div>';}
var original=window.skillMatrixHTML;
if(typeof original==='function'){
 window.skillMatrixHTML=function(section,list,editable){
   var html=original(section,list,editable);
   return html+approvalBlock();
 };
}
function rerender(){try{if(typeof window.renderSectionSkillMatrix==='function')window.renderSectionSkillMatrix();}catch(e){console.error('V131 Skill Matrix refresh:',e);}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(rerender,450)});else setTimeout(rerender,450);
})();
