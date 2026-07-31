Production People Management System - V200 Stable

วิธีอัปโหลด
1. ลบไฟล์เดิมใน Repository
2. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดภายใน ZIP นี้ลงที่ root ของ Repository
3. Settings > Pages: main / (root)
4. เปิดเว็บแล้วกด Ctrl+F5 หนึ่งครั้ง

การปรับปรุง
- แยก CSS และ JavaScript ออกจาก index.html เพื่อลดโค้ดซ้อนในหน้าเดียว
- ลบไฟล์สำเนา script_*.js, index.html.js และ 404.html.js
- ใส่เลขเวอร์ชันใน asset URL เพื่อลดปัญหา cache เก่า
- 404.html ส่งกลับหน้าหลักเสมอ ไม่เก็บสำเนาแอปคนละเวอร์ชัน
- คง Firebase project และข้อมูลพนักงานเดิม
- ตรวจ JavaScript syntax ทุกไฟล์ก่อนจัดส่ง

หมายเหตุ
ความเสถียรของข้อมูลข้ามเครื่องขึ้นอยู่กับ Firebase Authentication, Firestore Rules และอินเทอร์เน็ตด้วย
