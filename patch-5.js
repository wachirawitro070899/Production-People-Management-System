
(function(){
  function bind(){
    var b=document.getElementById('printSectionSkillBtn');
    if(b)b.onclick=function(){buildSectionSkillPrint(false)};
    b=document.getElementById('printAllSkillBtn');
    if(b)b.onclick=function(){buildSectionSkillPrint(true)};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
})();
