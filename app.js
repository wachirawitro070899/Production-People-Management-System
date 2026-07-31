
const firebaseConfig = {
  apiKey: "AIzaSyCkl4CBeRSSJ18bGWQJr119CILZBZoKSm4",
  authDomain: "production-organization.firebaseapp.com",
  projectId: "production-organization",
  storageBucket: "production-organization.firebasestorage.app",
  messagingSenderId: "20879272032",
  appId: "1:20879272032:web:46a34f1a17c1be1044fb05",
  measurementId: "G-GFFQYMS3QB"
};
const employeeSeedData = [
  {
    "id": "61002",
    "thaiName": "นายวีรพล แสนสิม",
    "name": "MR.WEERAPHON SANSIM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2018-05-02",
    "contractType": "Permanent",
    "position": "Production Manager",
    "section": "Engineering Support Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69008",
    "thaiName": "นายวชิรวิทย์  ร่องจิต",
    "name": "MR.WACHIRAWIT RONGJIT",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-01-26",
    "contractType": "Permanent",
    "position": "Production Engineer",
    "section": "Engineering Support Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69091",
    "thaiName": "นายณัฐพล ธรรมดูล",
    "name": "MR.NATTHAPON THAMMADOOL",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-25",
    "contractType": "Permanent",
    "position": "Tooling Engineer",
    "section": "Engineering Support Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66097",
    "thaiName": "MR.RAHUL SUDHAKARAN",
    "name": "MR.RAHUL SUDHAKARAN",
    "gender": "Male",
    "nationality": "Indian",
    "startDate": "2023-10-01",
    "contractType": "Permanent",
    "position": "Tooling Engineer",
    "section": "Engineering Support Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69039",
    "thaiName": "MR.JIANG,AIDONG",
    "name": "MR.JIANG,AIDONG",
    "gender": "Male",
    "nationality": "Chinese",
    "startDate": "2026-03-06",
    "contractType": "Permanent",
    "position": "Welding Engineer",
    "section": "Engineering Support Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66051",
    "thaiName": "นางสาวกวิสรา สุภาพันธ์",
    "name": "MS. KAWISARA SUPAPAN",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2023-07-17",
    "contractType": "Permanent",
    "position": "Document Control",
    "section": "Support Production Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68061",
    "thaiName": "นางสาวจิตรลดา  พิพัฒนาสุภรณ์",
    "name": "MS.JIDLADA  PHIPHATTHANASUPHON",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2025-11-13",
    "contractType": "Permanent",
    "position": "Store",
    "section": "Support Production Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69103",
    "thaiName": "นางสาววิลาวัลย์ เสาร์แก้ว",
    "name": "MS.WILAWAN SAOKAEW",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-29",
    "contractType": "Permanent",
    "position": "Production Planning",
    "section": "Support Production Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67160",
    "thaiName": "นายวรรณธนะ  ผูกฟัก",
    "name": "MR.WANTANA PHOOKFAK",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2024-12-06",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Machine Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69113",
    "thaiName": "นายดนุพล วิชาดี",
    "name": "MR.DANUPHON WICHADI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Machine Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69033",
    "thaiName": "นายอำนวยชัย แหวนเงิน",
    "name": "MR.AMNUAICHAI WAENGOEN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-03-06",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Machine Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69046",
    "thaiName": "นายอานุภาพ ชาววงค์",
    "name": "MR.ARNUPAP CHAOWONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-03-23",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Machine Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66029",
    "thaiName": "นายฐานันดร โททำ",
    "name": "MR.THANANDORN THOTHAM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2023-04-21",
    "contractType": "Permanent",
    "position": "Supervisor",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68063",
    "thaiName": "นายพงษ์ศักดิ์  ไชยคุณ",
    "name": "MR.PHONGSAK  CHAIYAKUN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2025-12-08",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69015",
    "thaiName": "นายรณกฤต กาทอง",
    "name": "MR.RONNAKIT KATHONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-02-16",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69106",
    "thaiName": "นายธนากร ธรรมดา",
    "name": "MR.THANAKORN THAMMADA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-06",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69107",
    "thaiName": "นายฐานันดร ยังเมือง",
    "name": "MR.THANANDORN YANGMUEANG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-08",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69059",
    "thaiName": "นายณัฐพงษ์ บัวงาม",
    "name": "MR.NUTTHAPHONG BUA-NGAM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-04-20",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69097",
    "thaiName": "นายจิรชนม์ ใจบุญ",
    "name": "MR.JIRACHON JAIBUN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-06-19",
    "contractType": "Permanent",
    "position": "Technician",
    "section": "Tooling Maintenance Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66054",
    "thaiName": "นางสาวสุวนันท์ ธงชัย",
    "name": "MS. SUWANAN THONGCHAI",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2023-07-25",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66118",
    "thaiName": "นางสาวศุกร์กัญญา เนาวราช",
    "name": "MS. SUKANYA  NAOWARAT",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2023-11-13",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67087",
    "thaiName": "นางสาวอรจิรา กมล",
    "name": "MS. ONCHIRA KAMON",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2024-05-06",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67093",
    "thaiName": "นางสาวกัลยา แซ่ม้า",
    "name": "MS. KANLAYA  SEAMA",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2024-05-14",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67151",
    "thaiName": "นายเสกสรร อินสอน",
    "name": "MR. SEKSAN INSORN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2024-09-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68004",
    "thaiName": "นางสาวกนกวรรณ  ศักเหลา",
    "name": "MS. KANOKWAN  SAKLAO",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2025-01-13",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68005",
    "thaiName": "นางสาวธิดา  แซ่กือ",
    "name": "MS. THIDA  SEAKEU",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2025-01-13",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69042",
    "thaiName": "นางสาวมลิวัลย์ มาโสภา",
    "name": "MS.MALIWAN MASOPA",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-03-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69073",
    "thaiName": "นางสาวนรินทรา  บุญศิริ",
    "name": "MS.NARINTRA BOONSIRI",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69077",
    "thaiName": "นางสาวมัชฌิมา  รุ่งระวี",
    "name": "MS.MATCHIMA RUNGRAWEE",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69100",
    "thaiName": "นางสาวอรวรรณ พันโม้",
    "name": "MS.ORAWAN PHANMO",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69115",
    "thaiName": "นางสาวสุภาวิดา คุริโน",
    "name": "MS.SUPAWIDA KURINO",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69116",
    "thaiName": "นางสาวสุพัชชา อินเพ็ง",
    "name": "MS.SUPHATCHA AINPHENG",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69117",
    "thaiName": "นางประภาวรรณ สมสิน",
    "name": "MRS.PRAPHAWAN SOMSIN",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69127",
    "thaiName": "นายศิวดล วงษ์มา",
    "name": "MR.SIWADON WONGMA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN237",
    "thaiName": "นายอานนท์ สิทธิ",
    "name": "MR.ANON SITTI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN238",
    "thaiName": "นางสาวประพิศรา เคียงคำผง",
    "name": "MS.PRAPHISARA KEANGKHAMPONG",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN321",
    "thaiName": "นางสาวพรรษา แซ่กือ",
    "name": "MS.PANSA CAEKUE",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-05",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN331",
    "thaiName": "นายเจริญชัย พิชัย",
    "name": "MR.CHAROENCHAI PICHAI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-07",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN335",
    "thaiName": "นางสาวสายรุ้ง ปาวรีย์",
    "name": "MS.SAIRUNG PAWAREE",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-08",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN351",
    "thaiName": "นายอุดมศักดิ์ สียา",
    "name": "MR.UDOMSAK SEEYA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-18",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN352",
    "thaiName": "นางสาวเกษรินทร์ ศรีเลิศ",
    "name": "MS.KETSARIN SRILOET",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-20",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN363",
    "thaiName": "นางสาวสาริณี ปุ้มสะเกษ",
    "name": "MS.SARINEE PUMSAKES",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-05-25",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN370",
    "thaiName": "นางสาวปิยธิดา หนูแย้ม",
    "name": "MS.BIJATIDA NUYAEM",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-01",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN376",
    "thaiName": "นางสาวนิภาพร พาหา",
    "name": "MS.NIPHAPORN PAHA",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-02",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN393",
    "thaiName": "นางสาวจุฑามาศ รอดภัย",
    "name": "MS.CHUTHAMAT ROTPHAI",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-12",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN411",
    "thaiName": "นางสาวชฏารัตน์ ศาลางาม",
    "name": "MS.CHADARAT SALANGAM",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-25",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN414",
    "thaiName": "นายธวัช สร้อยทอง",
    "name": "MR.CHAITHAWAT SROITONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-06-25",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN418",
    "thaiName": "นางสาวพวงผกา สุพรรณ",
    "name": "MS.PUNGPHAKA SUPHAN",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-29",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN419",
    "thaiName": "นางสาวธิติพร ความรัมย์",
    "name": "MS.THITIPORN KWAMRAM",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-06-29",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN425",
    "thaiName": "นางสาวกมลเนตร การุณ",
    "name": "MS.KAMONNET KARUN",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-01",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN465",
    "thaiName": "นางสาวภาวินี ศรีประโคน",
    "name": "MS.PAWINEE SRIPRAKHON",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-15",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN474",
    "thaiName": "นางสาวมุกถิตา ชาสงวน",
    "name": "MS.MUKTHITA CHASANGUAM",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-20",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN481",
    "thaiName": "นางสาวเกศรินทร์ หาญสุวรรณชัย",
    "name": "MS.KETSARIN HANSUWANNACHAI",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-07-22",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "LH011",
    "thaiName": "MR.AUNG KAUNG MYAT",
    "name": "MR.AUNG KAUNG MYAT",
    "gender": "Male",
    "nationality": "Myanmar",
    "startDate": "2025-12-22",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Sorting Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66119",
    "thaiName": "นายจตุพงษ์ วงษาสืบ",
    "name": "MR.JATUPONG  WONGSASUEP",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2023-11-16",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67046",
    "thaiName": "นายเกียรติศักดิ์ จุปะมะโน",
    "name": "MR.KIADTISAK CHUPAMANO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2024-02-07",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68034",
    "thaiName": "นายวีระกร  อุดทังไข",
    "name": "MR.WEERAKORN AUTTHANGKHAI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2025-05-19",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68049",
    "thaiName": "นายนราธิป บุญภูมิ",
    "name": "MR.NARATHIP BUNPUM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2025-08-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69087",
    "thaiName": "นายวันชนะ คีรถรัมย์",
    "name": "MR.WANCHANA DEERODRAM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69088",
    "thaiName": "นายอภิสิทธิ์ เกยสุวรรณ์",
    "name": "MR.APHISIT KOEISUWAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69122",
    "thaiName": "นายโยธิน จารุสินทร",
    "name": "MR.YOTHIN CHARUSINTHON",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69123",
    "thaiName": "นายอนุชา ตุ้มอ่อน",
    "name": "MR.ANUCHA TUMOON",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN328",
    "thaiName": "นายพีรพงษ์ จันทร์ต่อ",
    "name": "MR.PHIRAPONG JANTO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-07",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN332",
    "thaiName": "นายวัชรินทร์ มั่นคง",
    "name": "MR.WATCHARIN MANKHONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-07",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN349",
    "thaiName": "นายเศรษฐา ผิวขำ",
    "name": "MR.SRETTA PAEWKUM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-18",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN364",
    "thaiName": "นายคำนวณ ม่อมมิตร",
    "name": "MR.KHAMNUAN MOMMIT",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-25",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN407",
    "thaiName": "นายทินกร กุลบุตร",
    "name": "MRTHINNAKORN KULLABUT",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-06-25",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN421",
    "thaiName": "นายสุวิชา เพชรฤทธิ์",
    "name": "MR.SUWICHA PECHRIT",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-01",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN473",
    "thaiName": "นายปารเมศ ชัญถาวร",
    "name": "MR.PARAMET CHANTAWON",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-15",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Welding Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69016",
    "thaiName": "นายสุริยา  ตาเปี้ยสืบ",
    "name": "MR.SURIYA TAPEASUEB",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2026-02-17",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69084",
    "thaiName": "นายกฤษณะ โพศรี",
    "name": "MR.KITSANA PHOSEE",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69114",
    "thaiName": "นายอภิสิทธิ์ ถาวรสันต์",
    "name": "MR.APHISIT TAWONSAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69124",
    "thaiName": "นายวีระยุทธ จะโลนา",
    "name": "MR.WIRAYUT JALONA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69128",
    "thaiName": "นายจีรพล ยืนยิ่ง",
    "name": "MR.JEERAPON YUENYING",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN432",
    "thaiName": "นายศักดิ์ทวี นาถ้ำทอง",
    "name": "MR.SAKTAWEE NATHAMTHONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-03",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN433",
    "thaiName": "นายปิยณัฐ บัวสิม",
    "name": "MR.PIYANATH BUASIM",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-06",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN435",
    "thaiName": "นายสุชาติ วะรามิตร",
    "name": "MS.JUTHAMAT KAEWPAWONG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-06",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN442",
    "thaiName": "นายจัตตุพล ใจเป้ง",
    "name": "MR.JUTTUPOL JAIPENG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-07",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "CNC Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "66016",
    "thaiName": "นายกิตติธัช หม่อมสละ",
    "name": "MR. KITTIHAT MOMSALA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2023-03-24",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69005",
    "thaiName": "นายดำรงค์  ปัตพี",
    "name": "MR.DAMRONG PATTAPHI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-01-17",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69063",
    "thaiName": "นายทนาวุฒิ พิเศษฤทธิ์",
    "name": "MR.THANAWUT PHISETRIT",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-04-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69085",
    "thaiName": "นายทศพณ นวลวัน",
    "name": "MR.THOSSAPHON NUENWAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN450",
    "thaiName": "นายกฤษฎา สิทธิมงคล",
    "name": "MR.KITSADA SITTHIMONGKHON",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-10",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN461",
    "thaiName": "นายภาณุวัฒน์ ผิวขาว",
    "name": "MR.PHANUWAT PHIWKHAO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-13",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN477",
    "thaiName": "นายธนากร อินทรัพย์",
    "name": "MR.TANAKRON AINSAP",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-20",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Bending Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "64016",
    "thaiName": "นางสาวอรพิน เหลาบับภา",
    "name": "MS. ORAPIN LAOBABPA",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2021-04-22",
    "contractType": "Permanent",
    "position": "Leader",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67083",
    "thaiName": "นางสาวอมรพรรณ สวดสม",
    "name": "MS. AMORNPAN SUADSOM",
    "gender": "Female",
    "nationality": "Thai",
    "startDate": "2024-04-29",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "67096",
    "thaiName": "นางสาวดวงกมล นันทะกุล",
    "name": "MS. DUANGKAMON NANTHAKUN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2024-05-14",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN459",
    "thaiName": "นางสาวอรพินท์ จันทร์ศิริ",
    "name": "MS.ORAPIN CHANSIRI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-13",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN475",
    "thaiName": "นางสาววริศรา สิงห์เทศ",
    "name": "MS.WARITSARA SINGTES",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-20",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "LH010",
    "thaiName": "MR.ZIN MYO THANT",
    "name": "MR.ZIN MYO THANT",
    "gender": "Male",
    "nationality": "Myanmar",
    "startDate": "2025-12-22",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Tapping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "65025",
    "thaiName": "นายทรงพล ศิริจันทร์",
    "name": "MR. SONGPHON SIRICHAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2022-05-09",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68050",
    "thaiName": "นายเฉลิมวุฒิ เพ็งประโคน",
    "name": "MRSALOEMWUT PHENGPRAKHON",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2025-08-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "68056",
    "thaiName": "นายสุชาติ พลชาลี",
    "name": "MR.SUCHAT PHONCHALI",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2025-09-22",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69021",
    "thaiName": "นายจักรินทร์  คะสาร",
    "name": "MR.JAKKARIN KASAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-02-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69022",
    "thaiName": "นายนัฐวุฒิ  เสย์",
    "name": "MR.NATTHAWUT SAY",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-02-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69066",
    "thaiName": "นายเกียรติศักดิ์ แล่เพ็ชร",
    "name": "MR.KIATTISAK LAPHET",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-04-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69081",
    "thaiName": "นายธานินทร์  โพยนอก",
    "name": "MR.TANIN POINOG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69089",
    "thaiName": "นายศตวรรษ ขันข่อย",
    "name": "MR.SATTAWAN KHANKHOY",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-05-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69099",
    "thaiName": "นายหาญณรงค์ สีชมภู",
    "name": "MR.HANNARONG SEEHOMPOO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-06-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69120",
    "thaiName": "นายจักพันธ์ ชมภู",
    "name": "MR.JAHKKAPAN CHOMPOO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69121",
    "thaiName": "นายธนพัฒน์ อ่อนมิ่ง",
    "name": "MR.THANAPAT ONMING",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69126",
    "thaiName": "นายอภิชัย สีชมพู",
    "name": "MR.APICHAI SICHOMPHU",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69131",
    "thaiName": "นายภานุวิชญ์ มุ่งหมาย",
    "name": "MR.PHANUWICH MUNGMAY",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "69132",
    "thaiName": "นายศุภกานต์ สมสุวรรณ",
    "name": "MR.SUPHAKAN SOMSUWAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-21",
    "contractType": "Permanent",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN415",
    "thaiName": "นายอัครชัย ศิริวาลย์",
    "name": "MR.OAKKHARACHAI SIRIWAN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-06-29",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN423",
    "thaiName": "นายณัฐดนัย ปะมามะตัง",
    "name": "MR.NATDANAI PANAMATANG",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-01",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN434",
    "thaiName": "นายสุรชัย เพชรสูงเนิน",
    "name": "MRSURACHAI YINDEE",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-06",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN455",
    "thaiName": "นายวันชัย สงล่า",
    "name": "MR.WANCHAI SONGLA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-10",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN456",
    "thaiName": "นายภัทรดนัย ขุ่นสูงเนิน",
    "name": "MR.PATTHARADANAI KHUNSUNGNOEN",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-10",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN458",
    "thaiName": "นายจิรพงษ์ อุ่นธะยา",
    "name": "MR.JIRAPONG UNTHAYA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-11",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN463",
    "thaiName": "นายภูวดล ตรางา",
    "name": "MR.PHUWADOL THANGA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-13",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN464",
    "thaiName": "นายเจษธนะพัฒน์ สุขเขียว",
    "name": "MR.CHETTHANAPHAT SUKKIAO",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-13",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN468",
    "thaiName": "นายวุฒิชัย วงศ์เปียว",
    "name": "MR.WUTTHICHAI WONGPRIAW",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-15",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN469",
    "thaiName": "นายพรชัย จินทา",
    "name": "MR.PORNCHAI JINTA",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-15",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  },
  {
    "id": "NCN476",
    "thaiName": "นายเฉลิมชัย เสนานุช",
    "name": "MR.CHALOEMCHAI SENANUCH",
    "gender": "Male",
    "nationality": "Thai",
    "startDate": "2026-07-20",
    "contractType": "Subcontractor",
    "position": "Operator",
    "section": "Stamping Section",
    "phone": "",
    "photoData": "",
    "currentSkillLevel": 1,
    "skillLevels": {},
    "skillUpdatedAt": "",
    "importSource": "รายชื่อพนักงานโรง 1 ทั้งหมด(2).xlsx"
  }
];

const structures={"Engineering Support Section":["Production Manager","Production Engineer","Tooling Engineer","Welding Engineer"],"Support Production Section":["Production Planning","Document Control","Store"],"Stamping Section":["Supervisor","Leader","Operator"],"Welding Section":["Supervisor","Leader","Welding Engineer","Operator"],"Sorting Section":["Supervisor","Leader","Operator"],"CNC Section":["Supervisor","Leader","Operator"],"Tapping Section":["Leader","Operator"],"Bending Section":["Leader","Operator"],"Machine Maintenance Section":["Supervisor","Leader","Technician"],"Tooling Maintenance Section":["Supervisor","Leader","Technician"]};
const thai={"Engineering Support Section":"หน่วยงานวิศวกรรมสนับสนุนการผลิต","Support Production Section":"หน่วยงานสนับสนุนการผลิต","Stamping Section":"หน่วยงานปั๊มขึ้นรูป","Welding Section":"หน่วยงานเชื่อม","Sorting Section":"หน่วยงานคัดแยก","CNC Section":"หน่วยงาน CNC","Tapping Section":"หน่วยงานต๊าปเกลียว","Bending Section":"หน่วยงานดัดขึ้นรูป","Machine Maintenance Section":"หน่วยงานซ่อมบำรุงเครื่องจักร","Tooling Maintenance Section":"หน่วยงานซ่อมบำรุงแม่พิมพ์"};
let employees=[];let skillAssessments=[];let onlineExamRecords=[];let examAssignments=[];let isAdmin=false;let auth=null,db=null,api={};window.getProductionEmployees=()=>employees;const configured=firebaseConfig&&firebaseConfig.apiKey&&!firebaseConfig.apiKey.includes('YOUR_');
function mergeEmployeeSeed(firestoreEmployees=[]){
 const merged=new Map(employeeSeedData.map(item=>[String(item.id),{...item,createdAt:item.createdAt||new Date().toISOString()}]));
 for(const item of firestoreEmployees){
  const key=String(item.id||item.docId||'');
  if(!key)continue;
  const base=merged.get(key)||{};
  const normalized={...base,...item,id:item.id||base.id||key,photoData:item.photoData||base.photoData||'',skillLevels:item.skillLevels||base.skillLevels||{}};
  // พนักงานรหัส 69039 เป็น Welding Engineer ภายใต้ Engineering Support Section
  if(key==='69039')normalized.section='Engineering Support Section';
  merged.set(key,normalized);
 }
 return [...merged.values()];
}
function resolveEmployee(key){
 const raw=String(key??'');
 return employees.find((e,i)=>String(e.docId||'')===raw||String(e.id||'')===raw||String(i)===raw)||null;
}
function employeeStorageKey(emp,key=''){
 return String(emp?.docId||emp?.id||key||'').replace(/[^A-Za-z0-9_-]/g,'_');
}
// Always show the Excel employee list immediately. Firebase is optional enhancement only.
employees=mergeEmployeeSeed([]);
if(configured){
 try{
  const appMod=await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js');
  const authMod=await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js');
  const fsMod=await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js');
  const app=appMod.initializeApp(firebaseConfig);auth=authMod.getAuth(app);db=fsMod.getFirestore(app);api={...authMod,...fsMod};
  api.onAuthStateChanged(auth,user=>{isAdmin=!!user;updateAuthUI(user);setTimeout(()=>{try{renderAll()}catch(err){console.error('Auth render failed:',err)}},0);});
  api.onSnapshot(api.collection(db,'employees'),snap=>{const cloud=snap.docs.map(d=>({docId:d.id,...d.data()}));employees=mergeEmployeeSeed(cloud);setTimeout(()=>{try{renderAll()}catch(err){console.error('Employee render failed:',err)}},0);},err=>{console.error('Employee read failed:',err);employees=mergeEmployeeSeed([]);setTimeout(()=>{try{renderAll()}catch(renderErr){console.error('Employee fallback render failed:',renderErr)}},0);});
  api.onSnapshot(api.collection(db,'skillAssessments'),snap=>{skillAssessments=snap.docs.map(d=>({docId:d.id,...d.data()}));renderSkillAssessments();},err=>console.error(err));
  api.onSnapshot(api.collection(db,'onlineExamRecords'),snap=>{
    const cloud=snap.docs.map(d=>({docId:d.id,...d.data()}));
    const local=JSON.parse(localStorage.getItem('onlineExamRecords')||'[]');
    const merged=new Map();
    [...cloud,...local].forEach(x=>{
      const key=[String(x.employeeId||x.employeeDocId||'').trim().toLowerCase(),String(x.quarter||x.examSet||'').trim().toUpperCase(),String(x.submittedAt||x.createdAt||x.date||'')].join('::');
      if(!merged.has(key)||x.docId)merged.set(key,x);
    });
    onlineExamRecords=[...merged.values()];
    localStorage.setItem('onlineExamRecords',JSON.stringify(onlineExamRecords));
    renderOnlineExamHistory();
    try{refreshExamLock();}catch(e){console.warn('Exam lock refresh:',e)}
  },err=>{
    console.error(err);
    onlineExamRecords=JSON.parse(localStorage.getItem('onlineExamRecords')||'[]');
    renderOnlineExamHistory();
    try{refreshExamLock();}catch(e){}
  });
  api.onSnapshot(api.collection(db,'examAssignments'),snap=>{examAssignments=snap.docs.map(d=>({docId:d.id,...d.data()}));renderExamApprovals();},err=>console.error(err));
 }catch(err){
  console.error('Firebase unavailable; using embedded employee data.',err);
  document.getElementById('configNotice').classList.remove('hidden');
  document.getElementById('configNotice').textContent='กำลังใช้ข้อมูลพนักงานที่ฝังอยู่ในเว็บ เนื่องจากเชื่อมต่อ Firebase ไม่สำเร็จ';
 }
}else{
 document.getElementById('configNotice').classList.remove('hidden');
 const local=JSON.parse(localStorage.getItem('productionEmployees')||'[]');employees=mergeEmployeeSeed(local);localStorage.setItem('productionEmployees',JSON.stringify(employees));skillAssessments=JSON.parse(localStorage.getItem('skillAssessments')||'[]');onlineExamRecords=JSON.parse(localStorage.getItem('onlineExamRecords')||'[]');examAssignments=JSON.parse(localStorage.getItem('examAssignments')||'[]');setTimeout(()=>{try{renderAll()}catch(err){console.error('Initial render failed:',err)}},0);
}
async function importEmployeeSeedData(){
 const status=document.getElementById('employeeImportStatus');
 if(!isAdmin){alert('กรุณา Login เป็น Admin ก่อนอัปโหลดรายชื่อ');return;}
 if(!confirm('ซิงก์ข้อมูลพนักงาน 116 คนจากไฟล์ล่าสุดเข้า Firebase หรือไม่? ระบบจะรักษารูปและ Skill เดิมไว้'))return;
 status.classList.remove('hidden');status.classList.remove('ok');status.textContent='กำลังอัปโหลดรายชื่อ...';
 try{
  if(configured){
   let done=0;
   for(const item of employeeSeedData){
    const docId=String(item.id).replace(/[^A-Za-z0-9_-]/g,'_');
    const ref=api.doc(db,'employees',docId);
    const existing=employees.find(e=>String(e.id)===String(item.id))||{};
    const data={...item,photoData:existing.photoData||'',skillLevels:existing.skillLevels||{},currentSkillLevel:existing.currentSkillLevel||1,skillUpdatedAt:existing.skillUpdatedAt||'',updatedAt:new Date().toISOString()};
    await api.setDoc(ref,data,{merge:true});done++;status.textContent=`กำลังอัปโหลด ${done}/${employeeSeedData.length} คน...`;
   }
  }else{
   const oldMap=new Map(employees.map(e=>[String(e.id),e]));
   employees=employeeSeedData.map(item=>({...item,...(oldMap.get(String(item.id))||{}),...item,photoData:(oldMap.get(String(item.id))||{}).photoData||'',skillLevels:(oldMap.get(String(item.id))||{}).skillLevels||{},currentSkillLevel:(oldMap.get(String(item.id))||{}).currentSkillLevel||1}));
   localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();
  }
  status.classList.add('ok');status.textContent=`ซิงก์ข้อมูลเรียบร้อย ${employeeSeedData.length} คน`;employees=mergeEmployeeSeed(employees);renderAll();
 }catch(err){console.error(err);status.textContent='อัปโหลดไม่สำเร็จ: '+err.message;alert('อัปโหลดไม่สำเร็จ: '+err.message);}
}
const importEmployeeSeedBtn=document.getElementById('importEmployeeSeedBtn');if(importEmployeeSeedBtn)importEmployeeSeedBtn.onclick=importEmployeeSeedData;
const searchSaveHintBtn=document.getElementById('searchSaveHintBtn');if(searchSaveHintBtn)searchSaveHintBtn.onclick=()=>alert('1) Login เป็น Admin  2) กด แก้ไขข้อมูล ท้ายแถวพนักงาน  3) แก้ข้อมูล  4) กด 💾 บันทึกข้อมูล ด้านล่างหน้าต่าง');
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function buildOrganizationPrintReport(){
 const grouped=Object.keys(structures).map(section=>{const list=employees.filter(e=>e.section===section).slice().sort((a,b)=>((structures[section]||[]).indexOf(a.position)-(structures[section]||[]).indexOf(b.position))||(a.name||'').localeCompare(b.name||''));return {section,list};});
 document.getElementById('organizationPrintReport').innerHTML=`<div class="report-header"><h1>PRODUCTION ORGANIZATION CHART</h1><div>Production Division</div><div>วันที่พิมพ์: ${new Date().toLocaleDateString('th-TH')}</div></div><div class="report-section"><table><thead><tr><th>Section</th><th>ตำแหน่ง</th><th>รหัส</th><th>ชื่อพนักงาน</th><th>เบอร์โทร</th><th>วันที่เริ่มงาน</th><th>อายุงาน</th></tr></thead><tbody>${grouped.map(g=>g.list.length?g.list.map((e,i)=>`<tr>${i===0?`<td rowspan="${g.list.length}"><b>${esc(g.section)}</b><br><small>${esc(thai[g.section]||'')}</small></td>`:''}<td>${esc(e.position||'-')}</td><td>${esc(e.id||'-')}</td><td><b>${esc((e.name||'-').toUpperCase())}</b></td><td>${esc(e.phone||'-')}</td><td>${esc(fmt(e.startDate))}</td><td>${esc(yearsService(e.startDate))}</td></tr>`).join(''):`<tr><td><b>${esc(g.section)}</b></td><td colspan="6">ยังไม่มีพนักงาน</td></tr>`).join('')}</tbody></table></div><div class="report-signatures"><div>Prepared by</div><div>Checked by</div><div>Approved by</div></div>`;
}
function buildExamSkillPrintReport(){
 const emp=currentOnlineEmployee();const q=onlineExamQuarter.value;const req=emp?employeeExamRequirement(emp):null;const qs=emp?examQuestionsFor(emp,q,req?.oldLevel||1,req?.setCode||'A'):(examQuestionBank[q]||[]);const relevantOnline=onlineExamRecords.filter(x=>!emp||x.employeeId===emp.id).slice().sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));const relevantSkills=skillAssessments.filter(x=>!emp||x.employeeId===emp.id).slice().sort((a,b)=>(b.date||'').localeCompare(a.date||''));
 const answerLines=qs.map((x,i)=>`<div class="question-card print-avoid"><h4>${i+1}. ${esc(x.q)}</h4>${x.c.map((c,j)=>`<div>☐ ${String.fromCharCode(65+j)}. ${esc(c)}</div>`).join('')}</div>`).join('');
 document.getElementById('examSkillPrintReport').innerHTML=`<div class="report-header"><h1>TRAINING EXAMINATION & SKILL MATRIX</h1><div>${esc(q)} — ${esc(onlineExamSection.value||'-')}</div></div><div class="report-meta"><div><b>รหัส:</b> ${esc(emp?.id||'________________')}</div><div><b>ชื่อ:</b> ${esc((emp?.name||'________________').toUpperCase())}</div><div><b>Section:</b> ${esc(emp?.section||onlineExamSection.value||'-')}</div><div><b>ผู้ประเมิน:</b> ${esc(document.getElementById('onlineExamEvaluator').value||'________________')}</div></div><div class="report-section"><h3>ส่วนที่ 1: ข้อสอบ ${esc(q)}</h3>${answerLines}<div style="margin-top:14px"><b>คะแนน:</b> ______ / ${qs.length} &nbsp;&nbsp; <b>ผล:</b> ☐ PASS ☐ RE-TRAIN</div></div><div class="report-section print-page-break"><h3>ส่วนที่ 2: Practical Test / Job Observation</h3><table><thead><tr><th>No.</th><th>รายการประเมิน</th><th>ผ่าน</th><th>ไม่ผ่าน</th><th>หมายเหตุ</th></tr></thead><tbody>${[...document.querySelectorAll('#practicalTestArea .practical-item b')].map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.textContent.replace(/^\d+\.\s*/,''))}</td><td>☐</td><td>☐</td><td></td></tr>`).join('')}</tbody></table></div><div class="report-section"><h3>ส่วนที่ 3: ประวัติผลสอบออนไลน์</h3><table><thead><tr><th>วันที่</th><th>ไตรมาส</th><th>คะแนน</th><th>ภาคปฏิบัติ</th><th>ผล</th><th>Level</th><th>ผู้ประเมิน</th></tr></thead><tbody>${relevantOnline.length?relevantOnline.map(x=>`<tr><td>${esc(fmt(x.date))}</td><td>${esc(x.quarter||'-')}</td><td>${esc(x.score)}%</td><td>${esc(x.practicalResult||'-')}</td><td>${esc(x.result||'-')}</td><td>Level ${esc(x.level||'-')}</td><td>${esc(x.evaluator||'-')}</td></tr>`).join(''):'<tr><td colspan="7">ยังไม่มีประวัติ</td></tr>'}</tbody></table></div><div class="report-section"><h3>ส่วนที่ 4: Skill Matrix Assessment Records</h3><table><thead><tr><th>วันที่</th><th>หัวข้อทักษะ</th><th>คะแนน</th><th>ผล</th><th>Skill Level</th><th>ผู้ประเมิน</th></tr></thead><tbody>${relevantSkills.length?relevantSkills.map(x=>`<tr><td>${esc(fmt(x.date))}</td><td>${esc(x.topic||'-')}</td><td>${esc(x.score)}</td><td>${Number(x.score)>=70?'PASS':'RE-TRAIN'}</td><td>Level ${esc(x.level||'-')}</td><td>${esc(x.evaluator||'-')}</td></tr>`).join(''):'<tr><td colspan="6">ยังไม่มีผลการประเมิน</td></tr>'}</tbody></table></div><div class="report-signatures"><div>Employee</div><div>Evaluator / Supervisor</div><div>Manager Approval</div></div>`;
}
function printReport(mode){buildOrganizationPrintReport();buildExamSkillPrintReport();document.body.classList.remove('print-organization','print-exam-skill','print-section-skill','print-skill-card','print-generic');document.body.classList.add(mode);const cleanup=()=>{document.body.classList.remove('print-organization','print-exam-skill','print-section-skill','print-skill-card','print-generic');window.removeEventListener('afterprint',cleanup)};window.addEventListener('afterprint',cleanup);setTimeout(()=>window.print(),100);}
document.getElementById('printOrganizationBtn').onclick=()=>printReport('print-organization');
async function createPendingExamAndPrint(){
 const emp=currentOnlineEmployee();if(!emp)return alert('กรุณาเลือกพนักงานก่อนสั่งพิมพ์ข้อสอบ');
 if(configured&&!isAdmin)return alert('กรุณา Login เป็น Admin เพื่อออกข้อสอบและสร้างรายการรอผลสอบ');
 const requirement=employeeExamRequirement(emp);if(!requirement.isDue)return alert('พนักงานยังไม่ครบกำหนดประเมิน ชุดข้อสอบถูกล็อกถึง '+fmt(requirement.dueDate));const quarter=requirement.quarter,now=new Date().toISOString();
 const duplicate=examAssignments.find(x=>x.employeeId===emp.id&&x.quarter===quarter&&x.status==='WAITING_RESULT');
 if(duplicate&&!confirm('พนักงานคนนี้มีข้อสอบ '+quarter+' ที่รอผลอยู่แล้ว ต้องการพิมพ์ซ้ำหรือไม่?'))return;
 if(!duplicate){
  const isInitial=quarter==='NEW'||requirement.newEmployee;const data={employeeDocId:employeeStorageKey(emp,onlineExamEmployee.value),employeeId:emp.id||'',employeeName:(emp.name||'').toUpperCase(),section:emp.section||onlineExamSection.value,quarter,examSet:(isInitial?'New Employee Initial Skill Assessment':(examLevelRules[requirement.oldLevel]?.name||quarter+' Examination')),currentSkillLevel:requirement.oldLevel,targetSkillLevel:isInitial?'ประเมินจากคะแนน':requirement.targetLevel,lockedTopics:requirement.topics,baselineSkillLevels:employeeSkillLevels(emp),dueDate:requirement.dueDate,status:'WAITING_RESULT',printedAt:now,printedDate:now.slice(0,10),createdBy:auth&&auth.currentUser?auth.currentUser.email:'LOCAL ADMIN'};
  if(configured)await api.addDoc(api.collection(db,'examAssignments'),data);else{data.docId='local-'+Date.now();examAssignments.push(data);localStorage.setItem('examAssignments',JSON.stringify(examAssignments));renderExamApprovals();}
 }
 printReport('print-exam-skill');
}
const printExamSkillBtnEl=document.getElementById('printExamSkillBtn');if(printExamSkillBtnEl)printExamSkillBtnEl.onclick=createPendingExamAndPrint;const printSkillMatrixBtnEl=document.getElementById('printSkillMatrixBtn');if(printSkillMatrixBtnEl)printSkillMatrixBtnEl.onclick=()=>printReport('print-exam-skill');
function yearsService(dateStr){if(!dateStr)return'-';const s=new Date(dateStr+'T00:00:00'),n=new Date();let y=n.getFullYear()-s.getFullYear(),m=n.getMonth()-s.getMonth();if(n.getDate()<s.getDate())m--;if(m<0){y--;m+=12}return `${Math.max(0,y)} ปี ${Math.max(0,m)} เดือน`;}
function fmt(d){if(!d)return'-';return new Date(d+'T00:00:00').toLocaleDateString('th-TH');}
function updateAuthUI(user){document.getElementById('loginBtn').classList.toggle('hidden',!!user);document.getElementById('logoutBtn').classList.toggle('hidden',!user);document.getElementById('userBadge').textContent=user?user.email:'Public Viewer';document.getElementById('roleText').textContent=user?'Admin':'Viewer';document.querySelectorAll('.admin-only,.admin-col').forEach(e=>e.classList.toggle('hidden',!user));}
document.getElementById('loginBtn').onclick=()=>document.getElementById('loginModal').classList.add('show');document.getElementById('cancelLogin').onclick=()=>document.getElementById('loginModal').classList.remove('show');document.getElementById('logoutBtn').onclick=()=>api.signOut(auth);
document.getElementById('submitLogin').onclick=async()=>{if(!configured){document.getElementById('loginError').textContent='กรุณาตั้งค่า Firebase ก่อน';return}try{await api.signInWithEmailAndPassword(auth,document.getElementById('loginEmail').value,document.getElementById('loginPassword').value);document.getElementById('loginModal').classList.remove('show');document.getElementById('loginError').textContent='';}catch(e){console.error('Login failed:',e);const code=String(e?.code||'');let msg='เข้าสู่ระบบไม่สำเร็จ';if(code.includes('invalid-credential')||code.includes('wrong-password')||code.includes('user-not-found'))msg='อีเมลหรือรหัสผ่านไม่ถูกต้อง';else if(code.includes('too-many-requests'))msg='พยายามเข้าสู่ระบบหลายครั้งเกินไป กรุณารอสักครู่';else if(code.includes('network-request-failed'))msg='เชื่อมต่ออินเทอร์เน็ตหรือ Firebase ไม่สำเร็จ';else if(code.includes('unauthorized-domain'))msg='โดเมนเว็บไซต์นี้ยังไม่ได้รับอนุญาตใน Firebase Authentication';else if(e?.message)msg='เข้าสู่ระบบไม่สำเร็จ: '+e.message;document.getElementById('loginError').textContent=msg;}};
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{if(b.classList.contains('hidden'))return;document.querySelectorAll('nav button').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.getElementById(b.dataset.page).classList.add('active');});
const secSel=document.getElementById('empSection'),posSel=document.getElementById('empPosition'),filter=document.getElementById('sectionFilter'),chartFilter=document.getElementById('chartSectionFilter'),chartPositionFilter=document.getElementById('chartPositionFilter'),chartSortBy=document.getElementById('chartSortBy'),chartSortOrder=document.getElementById('chartSortOrder'),chartSearchInput=document.getElementById('chartSearchInput'),editSecSel=document.getElementById('editEmpSection'),editPosSel=document.getElementById('editEmpPosition');Object.keys(structures).forEach(sectionName=>{secSel.add(new Option(sectionName,sectionName));filter.add(new Option(sectionName,sectionName));chartFilter.add(new Option(sectionName,sectionName));editSecSel.add(new Option(sectionName,sectionName));});function updatePos(){posSel.innerHTML='';(structures[secSel.value]||[]).forEach(p=>posSel.add(new Option(p,p)));}function updateEditPos(selected=''){editPosSel.innerHTML='';(structures[editSecSel.value]||[]).forEach(p=>editPosSel.add(new Option(p,p)));if(selected&&[...editPosSel.options].some(o=>o.value===selected))editPosSel.value=selected;}function updateChartPositions(){chartPositionFilter.innerHTML='<option value="all">ทุกตำแหน่ง</option>';const group=employees.filter(e=>normalizedSection(e.section)===normalizedSection(chartFilter.value));sectionPositions(chartFilter.value,group).forEach(p=>chartPositionFilter.add(new Option(p,p)));}secSel.onchange=updatePos;editSecSel.onchange=()=>updateEditPos();updatePos();updateEditPos();filter.onchange=()=>renderSection(filter.value);chartFilter.value='Stamping Section';updateChartPositions();chartFilter.onchange=()=>{updateChartPositions();renderSectionChart(chartFilter.value)};[chartPositionFilter,chartSortBy,chartSortOrder].forEach(el=>el.onchange=()=>renderSectionChart(chartFilter.value));chartSearchInput.oninput=()=>renderSectionChart(chartFilter.value);

const photoInput=document.getElementById('empPhoto'),photoPreview=document.getElementById('photoPreview');
const empIdEl=document.getElementById('empId'),empNameEl=document.getElementById('empName'),startDateEl=document.getElementById('startDate'),empPhoneEl=document.getElementById('empPhone');
const changePhotoInput=document.getElementById('changePhotoInput'),photoStatus=document.getElementById('photoStatus');
const placeholderPhoto='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="100%" height="100%" fill="#eef3f8"/><circle cx="80" cy="58" r="30" fill="#9fb3c8"/><path d="M28 145c4-35 25-53 52-53s48 18 52 53" fill="#9fb3c8"/></svg>`);
photoPreview.src=placeholderPhoto;
let photoData='',editingPhotoDocId='';
function showPhotoStatus(message,isError=false){photoStatus.textContent=message;photoStatus.classList.remove('hidden','ok');if(!isError)photoStatus.classList.add('ok');setTimeout(()=>photoStatus.classList.add('hidden'),3500);}
function compressPhoto(file){return new Promise((resolve,reject)=>{if(!file)return resolve('');const allowed=['image/jpeg','image/png','image/webp'];if(!allowed.includes(file.type))return reject(new Error('รองรับเฉพาะไฟล์ JPG, PNG หรือ WEBP'));if(file.size>5*1024*1024)return reject(new Error('รูปมีขนาดเกิน 5 MB'));const reader=new FileReader();reader.onerror=()=>reject(new Error('อ่านไฟล์รูปไม่สำเร็จ'));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error('เปิดรูปไม่สำเร็จ กรุณาเปลี่ยนเป็น JPG หรือ PNG'));img.onload=()=>{const max=240,scale=Math.min(1,max/Math.max(img.width,img.height));const w=Math.max(1,Math.round(img.width*scale)),h=Math.max(1,Math.round(img.height*scale));const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');ctx.fillStyle='#ffffff';ctx.fillRect(0,0,w,h);ctx.drawImage(img,0,0,w,h);const data=canvas.toDataURL('image/jpeg',0.65);if(data.length>300000)return reject(new Error('รูปยังมีขนาดใหญ่เกินไป กรุณาเลือกรูปอื่น'));resolve(data);};img.src=reader.result;};reader.readAsDataURL(file);});}
photoInput.onchange=async()=>{try{showPhotoStatus('กำลังเตรียมรูป...');photoData=await compressPhoto(photoInput.files[0]);if(photoData){photoPreview.src=photoData;showPhotoStatus('เลือกรูปเรียบร้อยแล้ว');}}catch(err){showPhotoStatus(err.message,true);alert(err.message);photoInput.value='';photoData='';photoPreview.src=placeholderPhoto;}};
function avatar(e,small=false){const src=e.photoData||placeholderPhoto;return `<img class="avatar ${small?'small':''}" src="${src}" alt="รูป ${e.name||'พนักงาน'}">`;}
document.getElementById('employeeForm').onsubmit=async e=>{e.preventDefault();if(!isAdmin){alert('กรุณา Login ด้วยบัญชี Admin');return}const data={id:empIdEl.value.trim(),name:empNameEl.value.trim().toUpperCase(),phone:empPhoneEl.value.trim(),startDate:startDateEl.value,section:secSel.value,position:posSel.value,shift:document.getElementById('empShift').value,photoData,createdAt:new Date().toISOString()};try{showPhotoStatus('กำลังบันทึกข้อมูล...');if(configured)await api.addDoc(api.collection(db,'employees'),data);else{employees.push(data);localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();}e.target.reset();photoData='';photoPreview.src=placeholderPhoto;updatePos();showPhotoStatus('บันทึกพนักงานและรูปเรียบร้อยแล้ว');alert('บันทึกเรียบร้อย');}catch(err){console.error(err);showPhotoStatus('บันทึกไม่สำเร็จ: '+err.message,true);alert('บันทึกไม่สำเร็จ: '+err.message);}};
window.chooseEmployeePhoto=(docId)=>{if(!isAdmin){alert('กรุณา Login ด้วยบัญชี Admin');return}editingPhotoDocId=docId;changePhotoInput.value='';changePhotoInput.click();};
changePhotoInput.onchange=async()=>{if(!editingPhotoDocId||!changePhotoInput.files[0])return;try{showPhotoStatus('กำลังอัปโหลดรูป...');const data=await compressPhoto(changePhotoInput.files[0]);if(configured){const emp=employees.find((e,i)=>String(e.docId||'')===String(editingPhotoDocId)||String(e.id||'')===String(editingPhotoDocId)||String(i)===String(editingPhotoDocId));const docId=String(emp?.docId||emp?.id||editingPhotoDocId).replace(/[^A-Za-z0-9_-]/g,'_');const payload={...(emp||{}),docId,photoData:data,photoUpdatedAt:new Date().toISOString()};await api.setDoc(api.doc(db,'employees',docId),payload,{merge:true});if(emp){Object.assign(emp,payload);localStorage.setItem('productionEmployees',JSON.stringify(employees));}}else{const idx=Number(editingPhotoDocId);employees[idx].photoData=data;localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();}showPhotoStatus('เพิ่ม/เปลี่ยนรูปเรียบร้อยแล้ว');}catch(err){console.error(err);showPhotoStatus('เพิ่มรูปไม่สำเร็จ: '+err.message,true);alert('เพิ่มรูปไม่สำเร็จ: '+err.message);}finally{editingPhotoDocId='';changePhotoInput.value='';}};

let editingEmployeeKey='';
window.openEditEmployee=(key)=>{if(!isAdmin){alert('กรุณา Login ด้วยบัญชี Admin');return}const emp=resolveEmployee(key);if(!emp){alert('ไม่พบข้อมูลพนักงาน');return}editingEmployeeKey=employeeStorageKey(emp,key);document.getElementById('editEmpId').value=emp.id||'';document.getElementById('editThaiName').value=emp.thaiName||'';document.getElementById('editEmpName').value=emp.name||'';document.getElementById('editGender').value=emp.gender||'';document.getElementById('editNationality').value=emp.nationality||'';document.getElementById('editContractType').value=emp.contractType||'Permanent';document.getElementById('editStartDate').value=emp.startDate||'';document.getElementById('editEmpPhone').value=emp.phone||'';document.getElementById('editEmpShift').value=String(emp.shift||emp.workShift||'').toUpperCase().replace('SHIFT ','');editSecSel.value=emp.section||Object.keys(structures)[0];updateEditPos(emp.position||'');document.getElementById('editModal').classList.add('show');};
document.getElementById('cancelEdit').onclick=()=>{document.getElementById('editModal').classList.remove('show');editingEmployeeKey='';};
document.getElementById('editEmployeeForm').onsubmit=async ev=>{ev.preventDefault();if(!isAdmin)return alert('กรุณา Login เป็น Admin');const updated={id:document.getElementById('editEmpId').value.trim(),thaiName:document.getElementById('editThaiName').value.trim(),name:document.getElementById('editEmpName').value.trim().toUpperCase(),gender:document.getElementById('editGender').value,nationality:document.getElementById('editNationality').value.trim(),contractType:document.getElementById('editContractType').value,phone:document.getElementById('editEmpPhone').value.trim(),startDate:document.getElementById('editStartDate').value,section:editSecSel.value,position:editPosSel.value,shift:document.getElementById('editEmpShift').value,updatedAt:new Date().toISOString()};if(!updated.id||!updated.name||!updated.startDate)return alert('กรุณากรอกรหัส ชื่อ และวันที่เริ่มงานให้ครบ');const emp=resolveEmployee(editingEmployeeKey)||resolveEmployee(updated.id);const oldId=String(emp?.id||editingEmployeeKey||updated.id);let idx=employees.findIndex((e,i)=>String(e.docId||'')===String(editingEmployeeKey)||String(e.id||'')===oldId||String(i)===String(editingEmployeeKey));const merged={...(emp||{}),...updated};const docId=String(updated.id).replace(/[^A-Za-z0-9_-]/g,'_');merged.docId=docId;if(idx>=0)employees[idx]=merged;else{employees.push(merged);idx=employees.length-1}localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();showPhotoStatus('เซฟข้อมูลในหน้าเว็บเรียบร้อยแล้ว');let cloudSaved=false;let cloudError='';if(configured&&api&&db){try{await api.setDoc(api.doc(db,'employees',docId),merged,{merge:true});if(emp?.docId&&emp.docId!==docId){try{await api.deleteDoc(api.doc(db,'employees',emp.docId))}catch(_){}}cloudSaved=true;}catch(err){console.error(err);cloudError=err?.message||String(err);}}document.getElementById('editModal').classList.remove('show');editingEmployeeKey='';renderAll();if(cloudSaved)alert('เซฟข้อมูลเรียบร้อยแล้ว และอัปเดต Firebase สำเร็จ');else if(configured)alert('เซฟข้อมูลในหน้าเว็บแล้ว แต่ Firebase ยังบันทึกไม่ได้: '+cloudError+'\nกรุณาตรวจ Firestore Rules หรือสิทธิ์ Admin');else alert('เซฟข้อมูลเรียบร้อยแล้ว');};
window.editPhone=async(key,current='')=>{if(!isAdmin){alert('กรุณา Login ด้วยบัญชี Admin');return}const phone=prompt('กรอกเบอร์โทรติดต่อ',current);if(phone===null)return;try{if(configured){const emp=employees.find((e,i)=>String(e.docId||'')===String(key)||String(e.id||'')===String(key)||String(i)===String(key));const docId=String(emp?.docId||emp?.id||key).replace(/[^A-Za-z0-9_-]/g,'_');const payload={...(emp||{}),docId,phone:phone.trim(),phoneUpdatedAt:new Date().toISOString()};await api.setDoc(api.doc(db,'employees',docId),payload,{merge:true});if(emp){Object.assign(emp,payload);localStorage.setItem('productionEmployees',JSON.stringify(employees));}}else{employees[Number(key)].phone=phone.trim();localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();}showPhotoStatus('แก้ไขเบอร์โทรเรียบร้อยแล้ว');}catch(err){alert('แก้ไขเบอร์โทรไม่สำเร็จ: '+err.message);}};
window.removeEmp=async key=>{if(!isAdmin||!confirm('ยืนยันการลบ?'))return;if(configured)await api.deleteDoc(api.doc(db,'employees',key));else{employees.splice(Number(key),1);localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();}};

const supervisorLeaderRequired=new Set(['Stamping Section','Welding Section','Sorting Section','CNC Section','Machine Maintenance Section','Tooling Maintenance Section']);
function roleRequirementStatus(section,group){if(!supervisorLeaderRequired.has(section))return '<span class="badge">ไม่บังคับ Supervisor/Leader</span>';const hasSup=group.some(e=>String(e.position).toLowerCase()==='supervisor');const hasLead=group.some(e=>String(e.position).toLowerCase()==='leader');return `<span class="badge ${hasSup&&hasLead?'ok':'warn'}">${hasSup?'✓':'✕'} Supervisor &nbsp; ${hasLead?'✓':'✕'} Leader</span>`;}
function sameSection(a,b){return normalizedSection(a)===normalizedSection(b)}
function sectionPositions(s,group=[]){const base=[...(structures[s]||[])]; base.sort((a,b)=>{const order=['Production Manager','Production Engineer','Tooling Engineer','Welding Engineer','Engineer','Supervisor','Leader','Technician','Operator']; return order.indexOf(a)-order.indexOf(b);});group.forEach(e=>{const p=String(e.position||'').trim();if(p&&!base.includes(p))base.push(p)});const rank=p=>{const i=JOB_ORDER.indexOf(String(p||'').trim());if(i>=0)return i;const x=String(p||'').toLowerCase();if(x.includes('manager'))return 0;if(x.includes('engineer'))return 1;if(x.includes('supervisor'))return 2;if(x.includes('leader'))return 3;if(x.includes('technician'))return 4;if(x.includes('operator'))return 5;return 99};return base.sort((a,b)=>rank(a)-rank(b)||String(a).localeCompare(String(b)));}
function renderOrg(){const totalEl=document.getElementById('total'),newMonthEl=document.getElementById('newMonth'),orgSectionsEl=document.getElementById('orgSections');if(totalEl)totalEl.textContent=employees.length;const now=new Date();if(newMonthEl)newMonthEl.textContent=employees.filter(e=>{if(!e.startDate)return false;const d=new Date(e.startDate+'T00:00:00');return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear()}).length;if(!orgSectionsEl)return;orgSectionsEl.innerHTML='';Object.keys(thai).forEach(s=>{const group=employees.filter(e=>sameSection(e.section,s));const c=document.createElement('div');c.className='section-card';c.innerHTML=`<h3>${s}</h3><small>${thai[s]}</small><div style="margin:8px 0">${roleRequirementStatus(s,group)}</div>${sectionPositions(s,group).map(p=>`<div class="position"><b>${p}</b> (${group.filter(e=>String(e.position||'').trim()===p).length})</div>`).join('')}`;c.onclick=()=>{filter.value=s;renderSection(s);document.querySelector('[data-page="section"]').click()};orgSectionsEl.appendChild(c);});}
function renderSection(s){const sectionDetailEl=document.getElementById('sectionDetail');if(!sectionDetailEl)return;const group=employees.filter(e=>sameSection(e.section,s));const positions=sectionPositions(s,group);sectionDetailEl.innerHTML=`<h3>${s}</h3>${thai[s]?`<p>${thai[s]}</p>`:''}<div style="margin-bottom:10px">${roleRequirementStatus(s,group)}</div>${positions.map(p=>{const g=group.filter(e=>String(e.position||'').trim()===p);return `<div class="panel"><b>${p}</b>${g.length?g.map(e=>`<div class="employee-row">${avatar(e)}<div><b>${e.id} — ${e.name}</b><br><small>☎ ${e.phone||'-'} · เริ่มงาน ${fmt(e.startDate)} · อายุงาน ${yearsService(e.startDate)}</small></div></div>`).join(''):'<div class="empty">ยังไม่มีพนักงาน</div>'}</div>`}).join('')}`;}

function roleClass(position=''){const p=position.toLowerCase();if(p.includes('supervisor')||p.includes('manager'))return 'supervisor';if(p.includes('leader'))return 'leader';if(p.includes('operator'))return 'operator';if(p.includes('technician'))return 'technician';if(p.includes('engineer'))return 'engineer';return 'support';}
function roleLetter(position=''){const p=position.toLowerCase();if(p.includes('manager'))return 'M';if(p.includes('supervisor'))return 'S';if(p.includes('leader'))return 'L';if(p.includes('operator'))return 'O';if(p.includes('technician'))return 'T';if(p.includes('engineer'))return 'E';return 'P';}
function sectionChartEmployee(e){const tel=(e.phone||'').replace(/[^0-9+]/g,'');return `<div class="chart-node ${roleClass(e.position)}"><span class="role-badge">${roleLetter(e.position)}</span>${avatar(e)}<span class="online-dot"></span><div class="emp-id">${e.id||'-'}</div><div class="emp-name" title="${e.name||'-'}">${e.name||'-'}</div><div class="emp-role">${e.position||'-'}</div>${e.phone?`<a class="chart-phone" href="tel:${tel}">☎ ${e.phone}</a>`:`<span class="chart-phone">☎ ไม่มีข้อมูล</span>`}<div class="chart-tenure">⌛ ${yearsService(e.startDate)}</div><span class="chart-children-line">+</span></div>`;}
function tenureMonths(dateStr){if(!dateStr)return 0;const s=new Date(dateStr+'T00:00:00'),n=new Date();let m=(n.getFullYear()-s.getFullYear())*12+(n.getMonth()-s.getMonth());if(n.getDate()<s.getDate())m--;return Math.max(0,m);}
function compareEmployees(a,b,sortBy,order,positions){let av,bv;if(sortBy==='name'){av=(a.name||'').toLocaleLowerCase('th');bv=(b.name||'').toLocaleLowerCase('th');}else if(sortBy==='id'){av=(a.id||'').toString();bv=(b.id||'').toString();}else if(sortBy==='startDate'){av=a.startDate||'';bv=b.startDate||'';}else if(sortBy==='tenure'){av=tenureMonths(a.startDate);bv=tenureMonths(b.startDate);}else{av=positions.indexOf(a.position);bv=positions.indexOf(b.position);}let r=typeof av==='number'&&typeof bv==='number'?av-bv:String(av).localeCompare(String(bv),'th',{numeric:true,sensitivity:'base'});return order==='desc'?-r:r;}
function renderSectionChart(s){
 const allInSection=employees.filter(e=>sameSection(e.section,s));
 const positions=sectionPositions(s,allInSection);
 const chartPositionFilterEl=document.getElementById('chartPositionFilter');
 const chartSortByEl=document.getElementById('chartSortBy');
 const chartSortOrderEl=document.getElementById('chartSortOrder');
 const chartSearchInputEl=document.getElementById('chartSearchInput');
 const posFilter=(chartPositionFilterEl&&chartPositionFilterEl.value)||'all';
 const sortBy=(chartSortByEl&&chartSortByEl.value)||'position';
 const order=(chartSortOrderEl&&chartSortOrderEl.value)||'asc';
 const q=((chartSearchInputEl&&chartSearchInputEl.value)||'').trim().toLowerCase();
 let group=[...allInSection];
 if(posFilter!=='all')group=group.filter(e=>e.position===posFilter);
 if(q)group=group.filter(e=>[e.id,e.name,e.phone,e.position].join(' ').toLowerCase().includes(q));
 group.sort((a,b)=>compareEmployees(a,b,sortBy,order,positions));
 const visiblePositions=posFilter==='all'?positions:[posFilter];
 let levels=visiblePositions.map((p,index)=>({position:p,people:group.filter(e=>e.position===p),index}));
 // Engineering Support: show every Engineer title as one sibling level.
 // This keeps Production / Tooling / Welding Engineers side-by-side instead of stacking by job title.
 if(posFilter==='all'&&sameSection(s,'Engineering Support Section')){
   const engineerPeople=group.filter(e=>String(e.position||'').toLowerCase().includes('engineer'));
   const nonEngineerLevels=levels.filter(level=>!String(level.position||'').toLowerCase().includes('engineer'));
   const populatedNonEngineer=nonEngineerLevels.filter(level=>level.people.length);
   const managerLevels=populatedNonEngineer.filter(level=>String(level.position||'').toLowerCase().includes('manager'));
   const lowerLevels=populatedNonEngineer.filter(level=>!String(level.position||'').toLowerCase().includes('manager'));
   levels=[...managerLevels,...(engineerPeople.length?[{position:`Engineer (${engineerPeople.length} คน)`,people:engineerPeople,index:managerLevels.length,isEngineerGroup:true}]:[]),...lowerLevels];
 }
 const chartSummaryEl=document.getElementById('chartSortSummary');if(chartSummaryEl)chartSummaryEl.textContent=`แสดง ${group.length} คน · ${s} · ${posFilter==='all'?'ทุกตำแหน่ง':posFilter}`;
 let html=`<div class="chart-title"><h2 style="margin-bottom:4px">${s}</h2><div style="color:var(--muted)">${thai[s]||''}</div><button class="btn secondary chart-print" onclick="window.print()" style="margin-top:12px">พิมพ์ Section Chart</button></div><div class="hierarchy">`;
 html+=levels.map((level,i)=>`<div class="chart-level ${i===levels.length-1&&levels.length>1?'team-level':''} ${level.isEngineerGroup?'engineer-sibling-level':''}"><div class="chart-position-group"><div class="chart-position-label">${level.position}</div><div class="chart-people-row ${level.isEngineerGroup?'engineer-sibling-row':''}">${level.people.length?level.people.map(sectionChartEmployee).join(''):`<div class="chart-empty">ยังไม่มีพนักงานในตำแหน่งนี้</div>`}</div></div></div>`).join('');
 const sectionChartAreaEl=document.getElementById('sectionChartArea');if(sectionChartAreaEl)sectionChartAreaEl.innerHTML=html+'</div>';
}

function normalizeEmployeeSearchText(value){return String(value||'').toLowerCase().replace(/\s+/g,' ').trim()}function renderSearch(){const inputEl=document.getElementById('searchInput');const resultsEl=document.getElementById('results');if(!inputEl||!resultsEl)return;const q=normalizeEmployeeSearchText(inputEl.value);const terms=q.split(' ').filter(Boolean);const list=employees.map((e,originalIndex)=>({...e,originalIndex})).filter(e=>{if(!terms.length)return true;const section=normalizeEmployeeSearchText(e.section);const searchableText=normalizeEmployeeSearchText([e.id,e.name,e.phone,e.section,e.position,e.startDate,fmt(e.startDate),yearsService(e.startDate),section.replace(/\bsection\b/g,'').replace(/แผนก/g,'')].join(' '));return terms.every(term=>{const core=normalizeEmployeeSearchText(term.replace(/\bsection\b/g,'').replace(/แผนก/g,''));return searchableText.includes(term)||(core&&searchableText.includes(core));});});resultsEl.innerHTML=list.length?list.map(e=>{const key=e.docId||e.id||String(e.originalIndex);const safeKey=encodeURIComponent(key);return `<tr><td>${avatar(e,true)}</td><td>${e.id||''}</td><td>${e.name||''}</td><td>${e.phone||'-'}</td><td>${e.section||''}</td><td>${e.position||''}</td><td>${fmt(e.startDate)}</td><td>${yearsService(e.startDate)}</td><td class="admin-col ${isAdmin?'':'hidden'}"><button type="button" class="btn js-edit-employee" data-key="${safeKey}" style="margin:2px">แก้ไขข้อมูล</button><button type="button" class="btn secondary js-change-photo" data-key="${safeKey}" style="margin:2px">เปลี่ยนรูป</button><button type="button" class="btn danger js-delete-employee" data-key="${safeKey}" style="margin:2px">ลบ</button></td></tr>`;}).join(''):`<tr><td colspan="9" class="empty">ไม่พบข้อมูล</td></tr>`;}
const employeeResultsTable=document.getElementById('results');if(employeeResultsTable)employeeResultsTable.addEventListener('click',event=>{const button=event.target.closest('button[data-key]');if(!button)return;event.preventDefault();event.stopPropagation();const key=decodeURIComponent(button.dataset.key||'');if(button.classList.contains('js-edit-employee'))window.openEditEmployee(key);else if(button.classList.contains('js-change-photo'))window.chooseEmployeePhoto(key);else if(button.classList.contains('js-delete-employee'))window.removeEmp(key);});

const examSkillTopics={
"Production Manager":["Safety Leadership","KPI Management","Manpower Planning","Problem Solving","Audit Management","Training Approval"],
"Engineering Support Section":["Safety & PPE","WI / SOP Understanding","Drawing Reading","Measuring Tool","PFMEA / Control Plan","Jig & Fixture","Machine Parameter","Problem Solving","Engineering Change"],
"Support Production Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Production Planning","Material Control","FIFO / Traceability","Document Control","ERP Data","Record Filling","Abnormal Handling"],
"Stamping Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Drawing Reading","Measuring Tool","Machine Setup","Machine Operation","First-piece Inspection","Process Quality Control","NG Identification","Upper & Lower Die Change","Record Filling","Abnormal Handling","Daily Machine Check"],
"Welding Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Drawing Reading","Measuring Tool","Jig Setup","Welding Operation","First-piece Inspection","Weld Quality Inspection","NG Identification","Electrode Check","Poka-Yoke Verification","Record Filling","Abnormal Handling","Daily Machine Check"],
"Sorting Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Boundary Sample","Visual Inspection","Measuring Tool","Defect Classification","NG Identification","Traceability","Containment","Record Filling","Abnormal Handling"],
"CNC Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Drawing Reading","Measuring Tool","Machine Setup","Program Operation","Tool Offset","Tool Change","First-piece Inspection","Process Quality Control","NG Identification","Tool Life Control","Record Filling","Troubleshooting","Daily Machine Check"],
"Tapping Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Drawing Reading","Measuring Tool","Machine Setup","Tap Change","Machine Operation","First-piece Inspection","Gauge Inspection","Thread Quality","NG Identification","Tool Life Control","Lubrication Control","Record Filling","Abnormal Handling","Daily Machine Check"],
"Bending Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Drawing Reading","Measuring Tool","Machine Setup","Die Setup","Machine Operation","First-piece Inspection","Angle Inspection","Process Quality Control","NG Identification","Springback Adjustment","Record Filling","Abnormal Handling","Daily Machine Check"],
"Machine Maintenance Section":["Safety & PPE","LOTO","WI / SOP Understanding","PM Inspection","Lubrication","Electrical Check","Mechanical Repair","Sensor / PLC Check","Troubleshooting","Breakdown Record","Spare Parts Control","Abnormal Handling"],
"Tooling Maintenance Section":["Safety & PPE","5S Ability","WI / SOP Understanding","Die Structure","Mold PM","Mold Repair","Grinding Standard","Polishing","Tool Measurement","Mold Assembly","Failure Analysis","Tooling Record","Abnormal Handling"]
};

const trainingCatalog={
"Production Manager":{Q1:["KPI & Production Target Management","Leadership and Communication"],Q2:["Cost Reduction / Productivity Improvement","Risk Management"],Q3:["Internal Audit & Corrective Action","Manpower and Capacity Planning"],Q4:["Management Review","Annual KPI and Training Effectiveness Review"]},
"Engineering Support Section":{Q1:["Drawing / Specification Reading","Process Flow and PFMEA"],Q2:["Jig, Fixture and Tooling Design","Machine Parameter Standardization"],Q3:["Problem Solving: 5 Why / Fishbone","Process Capability and Improvement"],Q4:["Engineering Change Control","Lessons Learned and Standard Revision"]},
"Support Production Section":{Q1:["Production Planning and Material Control","Document Control"],Q2:["Inventory Accuracy / FIFO","Capacity and Delivery Planning"],Q3:["Traceability and Record Control","ERP / Production Data Accuracy"],Q4:["Stock Taking and Annual Plan Review","Document Retention Review"]},
"Stamping Section":{Q1:["Machine Safety and Daily Check","Die Setup and First Piece Inspection"],Q2:["Stamping Defect Identification","OEE and Downtime Recording"],Q3:["Die Protection / Sensor Check","Quality Patrol and Reaction Plan"],Q4:["Setup Skill Re-certification","Abnormality Response Drill"]},
"Welding Section":{Q1:["Welding Safety and PPE","Jig Setup / First Piece Check"],Q2:["Welding Defects and Acceptance Criteria","Electrode Carbon Paper Test"],Q3:["Welding Parameter Control","Poka-Yoke Verification"],Q4:["Welder Re-certification","Abnormality and Quality Response"]},
"Sorting Section":{Q1:["Sorting Standard and Boundary Samples","Traceability and Lot Control"],Q2:["Defect Classification","Inspection Tool Usage"],Q3:["Containment and Escalation","Human Error Prevention"],Q4:["Inspector Re-certification","Annual Defect Recognition Test"]},
"CNC Section":{Q1:["CNC Safety and Daily Check","Program / Tool Offset Basics"],Q2:["Measurement Tools and Drawing Reading","Tool Life Control"],Q3:["CNC Defects and Troubleshooting","First Piece and Patrol Inspection"],Q4:["Setup Re-certification","Program Backup and Change Control"]},
"Tapping Section":{Q1:["Tapping Machine Safety","Tap Setup and Thread Inspection"],Q2:["Thread Defect Identification","Gauge Usage and Control"],Q3:["Tool Life and Lubrication Control","Poka-Yoke Verification"],Q4:["Setup Re-certification","Annual Thread Inspection Test"]},
"Bending Section":{Q1:["Bending Machine Safety","Die Setup and First Piece Check"],Q2:["Angle / Dimension Measurement","Bending Defect Recognition"],Q3:["Parameter and Springback Control","OEE / Downtime Recording"],Q4:["Setup Re-certification","Annual Quality Criteria Test"]},
"Machine Maintenance Section":{Q1:["LOTO and Electrical Safety","Preventive Maintenance Standard"],Q2:["Troubleshooting Method","Spare Part and Breakdown Record"],Q3:["Sensor / PLC Basic Check","Predictive Maintenance"],Q4:["Emergency Breakdown Drill","Annual Maintenance Skill Test"]},
"Tooling Maintenance Section":{Q1:["Tooling Safety and Die Structure","Preventive Die Maintenance"],Q2:["Grinding / Repair Standard","Tooling Measurement"],Q3:["Die Failure Analysis","Spare Tooling Management"],Q4:["Tooling Repair Re-certification","Annual Tooling Skill Test"]}}
;
const examQuestionBank={
Q1:[
{q:"ก่อนเริ่มงานกับเครื่องจักร พนักงานต้องทำสิ่งใดก่อน",c:["ตรวจ PPE และอุปกรณ์ความปลอดภัย","เริ่มเครื่องทันที","ข้าม Daily Check","ถอด Guard"],a:0},
{q:"LOTO มีวัตถุประสงค์หลักเพื่ออะไร",c:["เพิ่มความเร็วเครื่อง","ป้องกันพลังงานอันตรายระหว่างซ่อมหรือ Setup","ลดจำนวนพนักงาน","บันทึก OEE"],a:1},
{q:"เมื่อพบชิ้นงาน NG ต้องทำอย่างไร",c:["ปะปนกับงานดี","แยก ระบุ และแจ้งหัวหน้างาน","ส่งให้ลูกค้าทันที","แก้ Drawing"],a:1},
{q:"Dummy Test ใช้เพื่ออะไร",c:["ตรวจสอบระบบหรือเงื่อนไขก่อนผลิตจริง","แทนการตรวจ First Piece เสมอ","ใช้เฉพาะซ่อมเครื่อง","ใช้คำนวณเงินเดือน"],a:0},
{q:"5ส. ข้อใดเกี่ยวกับการรักษามาตรฐานให้ต่อเนื่อง",c:["สะสาง","สะดวก","สร้างมาตรฐาน","สุขลักษณะ"],a:2},
{q:"หาก Guard หรือ Safety Device ผิดปกติควรทำอย่างไร",c:["ผลิตต่อ","หยุดเครื่องและแจ้งผู้รับผิดชอบ","ใช้มือกดแทน","ปิดสัญญาณเตือน"],a:1},
{q:"เอกสารใดใช้กำหนดวิธีทำงานมาตรฐาน",c:["WI","ใบลา","ใบเงินเดือน","แผนผังที่จอดรถ"],a:0},
{q:"การแยก Hold/NG Box มีประโยชน์อะไร",c:["ป้องกันการปะปนและควบคุมสถานะชิ้นงาน","เพิ่ม Cycle Time","ลดแสงสว่าง","ใช้เก็บเครื่องมือส่วนตัว"],a:0},
{q:"เมื่อเกิดอุบัติเหตุหรือ Near Miss ควรทำอย่างไร",c:["ปกปิด","รายงานทันทีและปฏิบัติตามแผนฉุกเฉิน","กลับบ้านโดยไม่แจ้ง","ลบหลักฐาน"],a:1},
{q:"Quality Awareness หมายถึงข้อใด",c:["ทุกคนรับผิดชอบคุณภาพในกระบวนการของตน","QC เท่านั้นที่รับผิดชอบ","ตรวจเฉพาะงานสุดท้าย","ยอมรับ NG ได้หากผลิตทัน"],a:0}],
Q2:[
{q:"ก่อน Start Machine ต้องตรวจสิ่งใด",c:["Daily Check และ Safety Device","โทรศัพท์ส่วนตัว","สีเสื้อพนักงาน","ยอดขาย"],a:0},
{q:"First Piece Inspection ทำเมื่อใด",c:["หลัง Setup/เปลี่ยนรุ่นก่อนผลิตต่อเนื่อง","หลังส่งสินค้า","ปีละครั้ง","ไม่จำเป็น"],a:0},
{q:"OEE ประกอบด้วยอะไร",c:["Availability, Performance, Quality","Cost, Sale, Profit","Man, Money, Market","Input, Output, Tax"],a:0},
{q:"เมื่อ Sensor ไม่ทำงานควรทำอย่างไร",c:["Bypass ทันที","หยุดและแจ้งผู้รับผิดชอบตาม WI","ใช้เทปปิดไฟ","ผลิตต่อจนจบ Lot"],a:1},
{q:"การบันทึก Downtime มีจุดประสงค์อะไร",c:["วิเคราะห์การสูญเสียและปรับปรุงเครื่องจักร","เพิ่มเอกสารโดยไม่มีประโยชน์","ใช้แทนใบลา","เปลี่ยน Part No."],a:0},
{q:"การ Setup ที่ถูกต้องต้องอ้างอิงอะไร",c:["WI/Parameter Standard","ความจำอย่างเดียว","ค่าของงานรุ่นอื่น","คำบอกเล่าไม่เป็นทางการ"],a:0},
{q:"หากค่าพารามิเตอร์เกินมาตรฐานควรทำอย่างไร",c:["ปรับกลับตามมาตรฐานและแจ้งเมื่อผิดปกติ","ปล่อยผ่าน","ลบค่ามาตรฐาน","เพิ่มความเร็วอย่างเดียว"],a:0},
{q:"การใช้เครื่องมือวัดต้องตรวจอะไร",c:["สถานะสอบเทียบและความเหมาะสม","สีของกล่อง","ราคาซื้อ","ชื่อผู้ขายเท่านั้น"],a:0},
{q:"Changeover หมายถึงอะไร",c:["การเปลี่ยนรุ่น/ตั้งค่าเพื่อผลิตงานใหม่","การพักกลางวัน","การตรวจเงินเดือน","การดับไฟโรงงาน"],a:0},
{q:"หลังซ่อมหรือปรับเครื่องควรทำอะไร",c:["ทดสอบและยืนยันคุณภาพก่อนผลิตต่อ","ผลิตทันทีโดยไม่ตรวจ","ยกเลิก Check Sheet","ปิด Alarm"],a:0}],
Q3:[
{q:"5 Why ใช้เพื่ออะไร",c:["ค้นหาสาเหตุรากของปัญหา","คำนวณ OEE","กำหนดวันลา","วัดความแข็ง"],a:0},
{q:"Fishbone Diagram ใช้ทำอะไร",c:["จัดกลุ่มสาเหตุที่เป็นไปได้","วัดขนาดชิ้นงาน","ออกใบสั่งซื้อ","บันทึกเวลาเข้างาน"],a:0},
{q:"Poka-Yoke คืออะไร",c:["การป้องกันความผิดพลาด","การเพิ่มเอกสาร","การทำ OT","การเก็บสต็อก"],a:0},
{q:"Control Plan ใช้เพื่ออะไร",c:["กำหนดจุดควบคุม วิธีตรวจ และ Reaction Plan","ใช้แทน Drawing","ใช้คำนวณโบนัส","ใช้สั่งอาหาร"],a:0},
{q:"เมื่อพบแนวโน้มผิดปกติใน SPC ควรทำอย่างไร",c:["ตอบสนองตาม Reaction Plan","ลบข้อมูล","ผลิตต่อโดยไม่แจ้ง","เปลี่ยน Spec เอง"],a:0},
{q:"Corrective Action ต่างจาก Containment อย่างไร",c:["Corrective Action แก้สาเหตุราก ส่วน Containment ควบคุมผลกระทบทันที","เหมือนกันทุกอย่าง","Containment ใช้เฉพาะ HR","Corrective Action ไม่ต้องติดตาม"],a:0},
{q:"Open Point Record ใช้เพื่ออะไร",c:["ติดตามประเด็นค้าง ผู้รับผิดชอบ และกำหนดเสร็จ","เก็บชิ้นงาน NG","บันทึกเงินเดือน","แทน WI"],a:0},
{q:"Traceability มีประโยชน์อะไร",c:["สอบย้อน Lot/กระบวนการ/ผู้ปฏิบัติงานได้","ลดความสว่าง","ใช้แทนการตรวจ","เพิ่ม Scrap"],a:0},
{q:"การตรวจ Patrol มีเป้าหมายอะไร",c:["ติดตามความสอดคล้องของกระบวนการระหว่างผลิต","ตรวจเฉพาะวัน Audit","ใช้แทน First Piece ทั้งหมด","ตรวจเฉพาะบรรจุภัณฑ์"],a:0},
{q:"หลังดำเนินการแก้ไขปัญหาต้องทำอะไร",c:["ตรวจสอบประสิทธิผลและปรับมาตรฐานเมื่อจำเป็น","ปิดประเด็นทันทีโดยไม่ตรวจ","ลบหลักฐาน","ยกเลิก Training"],a:0}],
Q4:[
{q:"Cross Training มีวัตถุประสงค์อะไร",c:["เพิ่มความสามารถทำงานหลายกระบวนการ","ลดมาตรฐาน","แทนการสอบทั้งหมด","ยกเลิก WI"],a:0},
{q:"Skill Matrix ใช้เพื่ออะไร",c:["แสดงระดับความสามารถและช่องว่างการพัฒนา","คำนวณสต็อก","วัดไฟฟ้า","ออก Invoice"],a:0},
{q:"Level 3 โดยทั่วไปหมายถึงอะไร",c:["ทำงานตาม WI ได้ด้วยตนเอง","ยังไม่เคยอบรม","เป็น Trainer ทุกงาน","แก้โปรแกรม PLC ได้ทุกกรณี"],a:0},
{q:"Level 5 โดยทั่วไปควรทำอะไรได้",c:["สอนผู้อื่นและปรับปรุงมาตรฐานได้","ทำงานได้เฉพาะเมื่อมีคนคุม","ยังไม่ผ่านข้อเขียน","ไม่ต้องปฏิบัติตาม WI"],a:0},
{q:"Kaizen คืออะไร",c:["การปรับปรุงอย่างต่อเนื่อง","การหยุดผลิตถาวร","การเพิ่ม NG","การยกเลิกมาตรฐาน"],a:0},
{q:"TPM มุ่งเน้นอะไร",c:["เพิ่มประสิทธิผลเครื่องจักรโดยทุกฝ่ายมีส่วนร่วม","ซ่อมเมื่อเสียเท่านั้น","QC ทำคนเดียว","ลดการตรวจสอบ"],a:0},
{q:"Autonomous Maintenance คืออะไร",c:["ผู้ใช้งานดูแลพื้นฐาน เช่น ทำความสะอาด ตรวจ และหล่อลื่น","เปลี่ยนโปรแกรมเครื่องโดยไม่อนุมัติ","ซ่อมไฟฟ้าแรงสูงทุกคน","ยกเลิก PM"],a:0},
{q:"หัวหน้างานควรทำอย่างไรเมื่อพนักงานไม่ผ่าน",c:["จัด Re-training และประเมินซ้ำ","ปรับ Level ขึ้นทันที","ลบผลสอบ","ให้ทำงานเสี่ยงต่อ"],a:0},
{q:"การประเมิน Skill ที่น่าเชื่อถือควรมีอะไร",c:["ข้อเขียน ภาคปฏิบัติ Job Observation และการอนุมัติ","คะแนนข้อเขียนอย่างเดียวเสมอ","อายุงานอย่างเดียว","ความรู้สึกผู้ประเมิน"],a:0},
{q:"ก่อนปรับ Skill Level ต้องทำอะไร",c:["ตรวจหลักฐานว่าเกณฑ์ครบและหัวหน้าอนุมัติ","ปรับตามความต้องการทันที","ไม่ต้องบันทึก","ดูเฉพาะจำนวน OT"],a:0}]};
const onlineExamEmployee=document.getElementById('onlineExamEmployee'),onlineExamSection=document.getElementById('onlineExamSection'),onlineExamQuarter=document.getElementById('onlineExamQuarter'),onlineExamArea=document.getElementById('onlineExamArea'),onlineExamResult=document.getElementById('onlineExamResult'),practicalTestArea=document.getElementById('practicalTestArea'),onlineExamHistory=document.getElementById('onlineExamHistory');
Object.keys(structures).forEach(x=>onlineExamSection.add(new Option(x,x)));onlineExamSection.value='Stamping Section';onlineExamQuarter.value=examQuarterByMonth();
function examQuarterByMonth(date=new Date()){
  const month=date.getMonth()+1;
  return month<=3?'Q1':month<=6?'Q2':month<=9?'Q3':'Q4';
}
function examYear(date=new Date()){return date.getFullYear();}
function stableExamHash(text){let h=0;for(const ch of String(text||''))h=((h*31)+ch.charCodeAt(0))>>>0;return h;}
function employeeExamSet(emp,level,quarter){
  const sets=['A','B','C'];
  const seed=`${emp?.id||emp?.employeeId||emp?.docId||''}|${examYear()}|${quarter}|L${level}`;
  return sets[stableExamHash(seed)%sets.length];
}
function isNewEmployeeAssessment(emp,quarter){return String(quarter||'').toUpperCase()==='NEW'||(!emp?.skillUpdatedAt&&!emp?.lastExamAt&&(!emp?.skillLevels||!Object.keys(emp.skillLevels).length));}
function initialSkillLevelFromScore(score){score=Number(score)||0;return score>=90?5:score>=75?4:score>=60?3:score>=40?2:1;}
function examQuestionsFor(emp,quarter,level,setCode){
  const keys=['Q1','Q2','Q3','Q4'];
  if(String(quarter||'').toUpperCase()==='NEW'){
    const all=keys.flatMap(k=>(examQuestionBank[k]||[]));
    const seed=String(emp?.id||emp?.employeeId||emp?.docId||'NEW');
    let h=0;for(const ch of seed)h=(h*31+ch.charCodeAt(0))>>>0;
    return all.map((q,i)=>({q,sort:((h^(i*2654435761))>>>0)})).sort((a,b)=>a.sort-b.sort).slice(0,20).map(x=>x.q);
  }
  const primary=(examQuestionBank[quarter]||[]).slice();
  const extra=keys.filter(k=>k!==quarter).flatMap(k=>(examQuestionBank[k]||[]));
  const pool=[...primary,...extra];
  if(!pool.length)return [];
  const count=Math.min(primary.length||10,pool.length);
  const offset=(Math.max(1,Number(level)||1)-1)*3+(['A','B','C'].indexOf(setCode)*2);
  const out=[];const used=new Set();
  for(let i=0;out.length<count&&i<pool.length*2;i++){
    const q=pool[(offset+i)%pool.length];
    const key=q.q;
    if(!used.has(key)){used.add(key);out.push(q);}
  }
  return out;
}
const examLevelRules={
  1:{quarter:'Q1',name:'Foundation Test / ข้อสอบพื้นฐาน',target:2},
  2:{quarter:'Q2',name:'Operation Qualification / ข้อสอบปฏิบัติงาน',target:3},
  3:{quarter:'Q3',name:'Advanced Operator / ข้อสอบขั้นสูง',target:4},
  4:{quarter:'Q4',name:'Trainer & Expert / ข้อสอบผู้สอน',target:5},
  5:{quarter:'',name:'ไม่ต้องสอบเพิ่ม / Maintain Level 5',target:5}
};
function employeeBaselineLevel(emp){const vals=Object.values(employeeSkillLevels(emp)).map(Number).filter(Number.isFinite);return vals.length?Math.max(1,Math.min(5,Math.min(...vals))):Math.max(1,Math.min(5,Number(emp.currentSkillLevel||1)));}
function employeeExamRequirement(emp){if(!emp)return null;const oldLevel=employeeBaselineLevel(emp),rule=examLevelRules[oldLevel]||examLevelRules[1],newEmployee=isNewEmployeeAssessment(emp),quarter=newEmployee?'NEW':examQuarterByMonth(),setCode=newEmployee?'INITIAL':employeeExamSet(emp,oldLevel,quarter),dates=skillDates(emp),skills=employeeSkillLevels(emp),topics=newEmployee?Object.keys(skills):Object.entries(skills).filter(([,v])=>Number(v)===oldLevel).map(([k])=>k),hasPreviousReview=!!emp.skillUpdatedAt;return {oldLevel,targetLevel:newEmployee?'ประเมินจากคะแนน':rule.target,quarter,setCode,setName:newEmployee?'Initial Skill Assessment':`Level ${oldLevel} — ชุด ${setCode}`,dueDate:hasPreviousReview?dates.next:isoDate(new Date()),days:hasPreviousReview?dates.days:0,isDue:!hasPreviousReview||dates.days<=0,topics:topics.length?topics:Object.keys(skills),hasPreviousReview,newEmployee};}
function renderOnlineExamEmployees(){const section=onlineExamSection.value;const previous=onlineExamEmployee.value;const list=employees.filter(e=>!section||normalizedSection(e.section)===normalizedSection(section)).sort((a,b)=>(a.name||'').localeCompare(b.name||''));onlineExamEmployee.innerHTML='<option value="">เลือกพนักงาน ('+list.length+' คน)</option>'+list.map(e=>`<option value="${e.docId||employees.indexOf(e)}">${e.id||'-'} — ${(e.name||'').toUpperCase()}</option>`).join('');if([...onlineExamEmployee.options].some(o=>o.value===previous))onlineExamEmployee.value=previous;else onlineExamEmployee.value='';onlineExamEmployee.disabled=false;}
function examSubmissionKey(emp,quarter){
  const employeeId=String(emp?.id||emp?.employeeId||'').trim().toLowerCase();
  return employeeId+'::'+String(quarter||'').trim().toUpperCase();
}
function submittedExamRecord(emp,quarter){
  const q=String(quarter||'').trim().toUpperCase();
  const key=examSubmissionKey(emp,q);
  const employeeId=String(emp?.id||emp?.employeeId||'').trim().toLowerCase();
  const employeeDocId=String(emp?.docId||emp?.employeeDocId||'').trim().toLowerCase();
  const employeeLocks=emp?.examSubmissionLocks||{};
  if(employeeLocks[q])return employeeLocks[q];
  let local=[];
  try{local=JSON.parse(localStorage.getItem('onlineExamRecords')||'[]')}catch(_){local=[]}
  const records=[...onlineExamRecords,...local];
  return records.find(x=>{
    if(x?.submissionStatus==='RESET')return false;
    const xq=String(x?.quarter||x?.examSet||'').trim().toUpperCase();
    if(xq!==q)return false;
    const xid=String(x?.employeeId||'').trim().toLowerCase();
    const xdoc=String(x?.employeeDocId||'').trim().toLowerCase();
    return examSubmissionKey({id:xid||xdoc},xq)===key || (employeeId&&xid===employeeId) || (employeeDocId&&xdoc===employeeDocId);
  })||null;
}
const examSubmitInProgress=new Set();
function examAttemptLockId(emp,quarter){
  return (employeeStorageKey(emp)||String(emp?.id||'employee')).replace(/[^A-Za-z0-9_-]/g,'_')+'__'+String(quarter||'Q1').toUpperCase();
}
function submittedAtText(record){
  const raw=record?.submittedAt||record?.createdAt||record?.date;
  if(!raw)return '-';
  const d=new Date(raw);
  return Number.isNaN(d.getTime())?fmt(raw):d.toLocaleString('th-TH',{dateStyle:'short',timeStyle:'short'});
}
function currentOnlineEmployee(){
  // Employee portal must always use the employee who entered the portal.
  // Do not depend on the dropdown value because the option value may be a Firestore docId.
  if(window.currentPortalEmployee)return window.currentPortalEmployee;
  return resolveEmployee(onlineExamEmployee.value);
}
function refreshExamLock(){
 const emp=currentOnlineEmployee(),box=document.getElementById('examLockBox'),startBtn=document.getElementById('startOnlineExam'),printBtn=document.getElementById('printExamSkillBtn');
 const employeeMode=document.body.classList.contains('employee-exam-mode');
 onlineExamSection.disabled=employeeMode;onlineExamEmployee.disabled=employeeMode;
 startBtn.disabled=false;printBtn.disabled=false;startBtn.textContent='เริ่มทำข้อสอบ';printBtn.textContent='พิมพ์ข้อสอบ + Skill Matrix / บันทึก PDF';
 box.className='exam-lock-box ready';
 if(!emp){onlineExamQuarter.disabled=false;document.getElementById('examLockMessage').textContent='เลือก Section และพนักงานเพื่อดูระดับ Skill และชุดข้อสอบ';['examOldLevel','examAssignedSet','examTargetLevel','examDueDate'].forEach(id=>document.getElementById(id).textContent='-');document.getElementById('examLockedTopics').textContent='';renderPracticalTest();return;}
 const r=employeeExamRequirement(emp);
 if(r.oldLevel>=5){
   onlineExamQuarter.value='Q4';onlineExamQuarter.disabled=true;startBtn.disabled=true;startBtn.classList.add('exam-locked-btn');startBtn.textContent='Level 5 — ไม่ต้องสอบเพิ่ม';printBtn.disabled=employeeMode;box.className='exam-lock-box ready';
   document.getElementById('examOldLevel').textContent='Level 5';document.getElementById('examAssignedSet').textContent='ไม่ต้องสอบเพิ่ม';document.getElementById('examTargetLevel').textContent='รักษา Level 5';document.getElementById('examDueDate').textContent=fmt(r.dueDate);document.getElementById('examLockedTopics').innerHTML='<b>สถานะ:</b> ครบระดับสูงสุดแล้ว ให้ประเมินทบทวนตามรอบ 3 เดือน';document.getElementById('examLockMessage').textContent='พนักงานอยู่ Level 5 แล้ว ระบบไม่กำหนดข้อสอบชุดใหม่';renderPracticalTest();return;
 }
 if(employeeMode||r.newEmployee)onlineExamQuarter.value=r.quarter;
 onlineExamQuarter.disabled=employeeMode;
 const chosenQuarter=onlineExamQuarter.value||r.quarter;
 const submitted=submittedExamRecord(emp,chosenQuarter);
 document.getElementById('examOldLevel').textContent=r.newEmployee?'ยังไม่มี Skill เริ่มต้น':'Level '+r.oldLevel;document.getElementById('examAssignedSet').textContent=r.newEmployee?'พนักงานใหม่ / Initial Assessment':chosenQuarter+' / Level '+r.oldLevel+' / ชุด '+r.setCode;document.getElementById('examTargetLevel').textContent=r.newEmployee?'ระบบกำหนด Level 1–5 จากคะแนน':'Level '+r.targetLevel;document.getElementById('examDueDate').textContent=fmt(r.dueDate);document.getElementById('examLockedTopics').innerHTML='<b>หัวข้อที่จะประเมิน:</b> '+((r.topics||[]).map(esc).join(' • ')||'-');
 if(submitted){
   box.className='exam-lock-box locked';startBtn.disabled=true;startBtn.classList.add('exam-locked-btn');startBtn.textContent='ส่งข้อสอบแล้ว — ห้ามสอบใหม่';printBtn.disabled=employeeMode;
   document.getElementById('examLockMessage').innerHTML=`<b>ล็อกการสอบแล้ว</b> พนักงานส่งข้อสอบชุด ${esc(chosenQuarter)} เมื่อ ${esc(submittedAtText(submitted))} ผล ${esc(submitted.result||'-')} คะแนน ${esc(submitted.score??'-')}% จึงไม่สามารถสอบซ้ำได้`;
 }else{
   startBtn.classList.remove('exam-locked-btn');document.getElementById('examLockMessage').textContent=employeeMode?'ระบบกำหนดชุดข้อสอบตามระดับของพนักงาน กดส่งได้เพียง 1 ครั้ง และจะล็อกทันทีไม่ว่าผ่านหรือไม่ผ่าน':'โหมด Admin / Engineering สามารถเลือกชุดข้อสอบและผู้ประเมินได้ตามปกติ โดยพนักงานแต่ละคนส่งได้เพียง 1 ครั้งต่อชุดข้อสอบ';
 }
 renderPracticalTest();
}
onlineExamEmployee.onchange=refreshExamLock;onlineExamSection.onchange=()=>{renderOnlineExamEmployees();refreshExamLock();renderPracticalTest();};onlineExamQuarter.onchange=()=>{refreshExamLock();renderPracticalTest();};
function renderPracticalTest(){const emp=currentOnlineEmployee(),sec=emp?.section||onlineExamSection.value,r=employeeExamRequirement(emp);const list=emp?(r?.topics||[]):(examSkillTopics[sec]||[]);practicalTestArea.innerHTML=`<div class="notice" style="grid-column:1/-1"><b>Practical Test / Job Observation</b><br>${emp?'ประเมินเฉพาะหัวข้อระดับปัจจุบัน คะแนนจะบันทึกอัตโนมัติ ส่วนระดับต้องรอผู้ประเมินอนุมัติ':'เลือกพนักงานเพื่อแสดงหัวข้อที่ต้องประเมิน'}</div>`+list.map((x,i)=>`<div class="practical-item"><b>${i+1}. ${x}</b><select class="practical-status" data-skill-name="${encodeURIComponent(x)}"><option value="">ยังไม่ประเมิน</option><option value="PASS">ผ่าน</option><option value="FAIL">ไม่ผ่าน</option></select></div>`).join('');}
function startOnlineExamination(){
  try{
    const emp=window.currentPortalEmployee||currentOnlineEmployee();
    if(!emp){alert('ไม่พบข้อมูลพนักงาน กรุณาออกแล้วเข้าสู่หน้าทดสอบใหม่');return;}
    let r=null;
    try{r=employeeExamRequirement(emp);}catch(err){console.warn('Skill requirement fallback:',err);}
    if(!r){
      const oldLevel=Math.max(1,Math.min(5,Number(emp.currentSkillLevel||emp.skillLevel||1)||1));
      const rule=examLevelRules[oldLevel]||examLevelRules[1];
      r={oldLevel,targetLevel:rule.target,quarter:rule.quarter,setName:rule.name,topics:[]};
    }
    if(Number(r.oldLevel)>=5&&!r.newEmployee){alert('พนักงานอยู่ Level 5 แล้ว ไม่ต้องสอบเพิ่ม');refreshExamLock();return;}
    const employeeMode=document.body.classList.contains('employee-exam-mode')||!!window.currentPortalEmployee;
    const q=employeeMode?r.quarter:(onlineExamQuarter.value||r.quarter||'Q1');
    const previousSubmission=submittedExamRecord(emp,q);
    if(previousSubmission){alert(`พนักงานคนนี้ส่งข้อสอบ ${q} แล้วเมื่อ ${submittedAtText(previousSubmission)}\nผล: ${previousSubmission.result||'-'} คะแนน: ${previousSubmission.score??'-'}%\nระบบไม่อนุญาตให้สอบใหม่`);refreshExamLock();return;}
    const qs=examQuestionsFor(emp,q,r.oldLevel,r.setCode);
    if(!qs.length){alert('ยังไม่มีข้อสอบสำหรับ '+q);return;}
    if(employeeMode&&onlineExamQuarter)onlineExamQuarter.value=q;
    onlineExamArea.classList.remove('hidden');
    onlineExamResult.classList.add('hidden');
    document.getElementById('onlineExamStatus').textContent=`กำลังทำ ${q} · ${qs.length} ข้อ`;
    onlineExamArea.innerHTML=`<form id="onlineExamForm"><h3>${r.newEmployee?'แบบประเมินพนักงานใหม่':q+' — Level '+r.oldLevel+' / ชุด '+r.setCode}</h3><div class="notice"><b>${emp.id||emp.employeeId||'-'} — ${(emp.name||'').toUpperCase()}</b><br>${r.newEmployee?'ใช้ประเมิน Skill เริ่มต้น ระบบจะกำหนด Level 1–5 และใส่ Skill Matrix อัตโนมัติ':'รอบสอบตามเดือน: '+q+' · ข้อสอบตามระดับ: Level '+r.oldLevel+' · ชุดข้อสอบ: '+r.setCode}</div>${qs.map((x,i)=>`<div class="question-card"><h4>${i+1}. ${x.q}</h4>${x.c.map((c,j)=>`<label class="answer-option"><input type="radio" name="q${i}" value="${j}">${c}</label>`).join('')}</div>`).join('')}<button id="submitOnlineExamBtn" class="btn" type="button">ส่งข้อสอบและตรวจคะแนน</button></form>`;
    const form=document.getElementById('onlineExamForm');
    const submitExamBtn=document.getElementById('submitOnlineExamBtn');
    if(form)form.onsubmit=submitOnlineExam;
    if(submitExamBtn)submitExamBtn.onclick=()=>submitOnlineExam({preventDefault(){},target:form,submitter:submitExamBtn});
    onlineExamArea.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(err){
    console.error('Start examination error:',err);
    alert('ไม่สามารถเปิดข้อสอบได้: '+(err.message||err));
  }
}
window.startOnlineExamination=startOnlineExamination;
document.getElementById('startOnlineExam').onclick=startOnlineExamination;
async function submitOnlineExam(ev){
  ev.preventDefault();
  const submitBtn=ev.submitter||ev.target.querySelector('button[type="submit"]');
  if(submitBtn){submitBtn.disabled=true;submitBtn.textContent='กำลังตรวจคะแนน...';}
  try{
    const emp=window.currentPortalEmployee||currentOnlineEmployee();
    if(!emp){alert('ไม่พบข้อมูลพนักงาน กรุณาออกจากหน้าสอบแล้วเข้าสู่ระบบใหม่');return;}
    let requirement=null;
    try{requirement=employeeExamRequirement(emp);}catch(err){console.warn('Requirement fallback:',err);}
    if(!requirement){
      const oldLevel=Math.max(1,Math.min(5,Number(emp.currentSkillLevel||emp.skillLevel||1)||1));
      const rule=examLevelRules[oldLevel]||examLevelRules[1];
      requirement={oldLevel,targetLevel:rule.target,quarter:rule.quarter,dueDate:'',topics:[]};
    }
    if(Number(requirement.oldLevel)>=5&&!requirement.newEmployee){alert('พนักงานอยู่ Level 5 แล้ว ไม่ต้องสอบเพิ่ม');refreshExamLock();return;}
    const employeeMode=document.body.classList.contains('employee-exam-mode')||!!window.currentPortalEmployee;
    const quarter=employeeMode?requirement.quarter:(onlineExamQuarter.value||requirement.quarter||'Q1');
    const attemptLockId=examAttemptLockId(emp,quarter);
    if(examSubmitInProgress.has(attemptLockId)){alert('กำลังส่งข้อสอบ กรุณารอสักครู่ ห้ามกดส่งซ้ำ');return;}
    const duplicateSubmission=submittedExamRecord(emp,quarter);
    if(duplicateSubmission){alert(`ไม่สามารถส่งซ้ำได้ พนักงานส่งข้อสอบ ${quarter} แล้วเมื่อ ${submittedAtText(duplicateSubmission)}`);refreshExamLock();return;}
    examSubmitInProgress.add(attemptLockId);
    const qs=examQuestionsFor(emp,quarter,requirement.oldLevel,requirement.setCode||employeeExamSet(emp,requirement.oldLevel,quarter));
    if(!qs.length){alert('ไม่พบชุดข้อสอบสำหรับ '+quarter);return;}
    const fd=new FormData(ev.target);let correct=0,answered=0;
    qs.forEach((x,i)=>{const v=fd.get('q'+i);if(v!==null){answered++;if(Number(v)===Number(x.a))correct++;}});
    if(answered<qs.length){
      const missing=[];
      qs.forEach((x,i)=>{if(fd.get('q'+i)===null)missing.push(i+1);});
      alert('กรุณาตอบคำถามให้ครบทุกข้อ\nข้อที่ยังไม่ได้ตอบ: '+missing.join(', '));
      const firstMissing=ev.target.querySelector('input[name="q'+(missing[0]-1)+'"]');
      if(firstMissing)firstMissing.closest('.question-card')?.scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    const score=Math.round(correct/qs.length*100);
    const practicalRows=[...document.querySelectorAll('.practical-status')].map(x=>({skill:decodeURIComponent(x.dataset.skillName||''),status:x.value}));
    const practical=practicalRows.map(x=>x.status).filter(Boolean);
    const practicalResult=!practicalRows.length?'PENDING':(practical.length===practicalRows.length&&practical.every(x=>x==='PASS')?'PASS':practical.some(x=>x==='FAIL')?'FAIL':'PENDING');
    const isInitial=String(quarter).toUpperCase()==='NEW'||!!requirement.newEmployee;
    const initialAssignedLevel=isInitial?initialSkillLevelFromScore(score):null;
    const writtenPassed=isInitial?true:score>=80;
    const passed=writtenPassed;
    const evaluator=document.getElementById('onlineExamEvaluator')?.value?.trim()||'Employee Self Test';
    const now=new Date().toISOString();
    const levels=employeeSkillLevels(emp);
    const topics=(requirement.topics&&requirement.topics.length?requirement.topics:practicalRows.map(x=>x.skill)).filter(Boolean);
    const skillResults=topics.map(skill=>({skill,status:(practicalRows.find(x=>x.skill===skill)||{}).status||'PENDING',oldLevel:Number(levels[skill]||requirement.oldLevel),level:Number(levels[skill]||requirement.oldLevel)}));
    // v99: ทุก Level ปรับ Skill Matrix อัตโนมัติเมื่อคะแนนข้อเขียนผ่านเกณฑ์ 80%
    // อัปเดตเฉพาะหัวข้อ Skill ที่ถูกกำหนดอยู่ในข้อสอบชุดนั้น และไม่เกิน Level 5
    const autoPromote=!isInitial&&passed&&Number(requirement.oldLevel)<5;
    const approvedLevel=isInitial?initialAssignedLevel:(autoPromote?Math.min(5,Number(requirement.targetLevel)):Number(requirement.oldLevel));
    const approvalRequired=false;
    const finalResult=isInitial?'INITIAL_SKILL_ASSIGNED':(autoPromote?'PASS_AUTO_UPDATED':'RE-TRAIN');
    const data={employeeDocId:employeeStorageKey(emp,onlineExamEmployee?.value||''),employeeId:emp.id||emp.employeeId||'',employeeName:(emp.name||'').toUpperCase(),section:emp.section||onlineExamSection?.value||'',quarter,examSet:(isInitial?'New Employee Initial Skill Assessment':(examLevelRules[requirement.oldLevel]?.name||quarter+' Examination')),oldSkillLevel:requirement.oldLevel,targetSkillLevel:isInitial?initialAssignedLevel:requirement.targetLevel,dueDate:requirement.dueDate||'',lockedTopics:topics,score,correct,total:qs.length,practicalResult,result:finalResult,level:approvedLevel,evaluator,date:now.slice(0,10),createdAt:now,submittedAt:now,submissionStatus:'SUBMITTED_LOCKED',attemptNumber:1,retakeAllowed:false,skillResults,approvalRequired,autoPromoted:autoPromote,initialAssessment:isInitial,initialAssignedLevel};

    const updatedScores={...(emp.skillScores||{})};
    const updatedLevels={...employeeSkillLevels(emp)};
    topics.forEach(skill=>{
      updatedScores[skill]=score;
      if(isInitial)updatedLevels[skill]=initialAssignedLevel;
      else if(autoPromote)updatedLevels[skill]=Math.min(5,Math.max(Number(updatedLevels[skill]||requirement.oldLevel),approvedLevel));
    });
    const submissionLock={employeeId:data.employeeId,employeeDocId:data.employeeDocId,quarter,submittedAt:now,createdAt:now,score,result:finalResult,submissionStatus:'SUBMITTED_LOCKED',retakeAllowed:false};
    const matrixLevels=Object.values(updatedLevels).map(Number).filter(x=>Number.isFinite(x)&&x>0);
    const recalculatedCurrentLevel=matrixLevels.length?Math.min(...matrixLevels):Number(requirement.oldLevel);
    Object.assign(emp,{skillScores:updatedScores,skillLevels:updatedLevels,currentSkillLevel:recalculatedCurrentLevel,lastExamScore:score,lastExamAt:now,lastExamStatus:isInitial?'INITIAL_SKILL_ASSIGNED':(autoPromote?'AUTO_UPDATED':'RE_TEST'),examSubmissionLocks:{...(emp.examSubmissionLocks||{}),[quarter]:submissionLock}});
    if(isInitial){emp.skillUpdatedAt=now;emp.skillApprovedBy='AUTO: New Employee Initial Assessment';emp.initialAssessmentAt=now;}
    else if(autoPromote){emp.skillUpdatedAt=now;emp.skillApprovedBy='AUTO: Passed Examination (80%+)';}

    // บันทึกในเครื่องก่อนเสมอ และใช้หนึ่งรายการต่อพนักงานต่อชุดข้อสอบ
    onlineExamRecords=onlineExamRecords.filter(x=>examSubmissionKey({id:x.employeeId||x.employeeDocId},x.quarter)!==examSubmissionKey(emp,quarter));
    onlineExamRecords.push(data);
    skillResults.forEach(x=>skillAssessments.push({employeeId:data.employeeId,employeeName:data.employeeName,section:data.section,topic:x.skill,score:data.score,practicalResult:x.status,result:isInitial?'INITIAL LEVEL '+initialAssignedLevel:(autoPromote?'PASS / AUTO UPDATED':approvalRequired?'WAITING APPROVAL':writtenPassed?'WRITTEN PASS':'RE-TRAIN'),level:isInitial?initialAssignedLevel:(autoPromote?approvedLevel:x.level),evaluator:data.evaluator,date:data.date,createdAt:data.createdAt}));
    localStorage.setItem('onlineExamRecords',JSON.stringify(onlineExamRecords));
    localStorage.setItem('skillAssessments',JSON.stringify(skillAssessments));
    localStorage.setItem('productionEmployees',JSON.stringify(employees));

    let cloudSaved=false,cloudError='';
    if(configured){
      try{
        // ใช้ Document ID คงที่: พนักงาน 1 คน + ชุดข้อสอบ 1 ชุด = บันทึกได้เพียง 1 รายการ
        await api.setDoc(api.doc(db,'onlineExamRecords',attemptLockId),data,{merge:false});
        for(const x of skillResults){await api.addDoc(api.collection(db,'skillAssessments'),{employeeDocId:data.employeeDocId,employeeId:data.employeeId,employeeName:data.employeeName,section:data.section,position:emp.position||'',topic:x.skill,score:data.score,practicalResult:x.status,result:isInitial?'INITIAL LEVEL '+initialAssignedLevel:(autoPromote?'PASS / AUTO UPDATED':approvalRequired?'WAITING APPROVAL':writtenPassed?'WRITTEN PASS':'RE-TRAIN'),level:isInitial?initialAssignedLevel:(autoPromote?approvedLevel:x.level),evaluator:data.evaluator,date:data.date,createdAt:data.createdAt,approvalRequired});}
        const docId=String(emp.docId||emp.id||emp.employeeId||'').replace(/[^A-Za-z0-9_-]/g,'_');
        if(docId)await api.setDoc(api.doc(db,'employees',docId),{...emp,docId},{merge:true});
        cloudSaved=true;
      }catch(err){cloudError=err?.message||String(err);console.warn('Firebase exam save failed, local result retained:',err);}
    }

    onlineExamResult.classList.remove('hidden');
    const resultMessage=!writtenPassed?'ไม่ผ่าน — ระบบล็อกผลสอบรอบนี้แล้ว':`ผ่าน — ระบบปรับหัวข้อ Skill ในข้อสอบเป็น Level ${approvedLevel} อัตโนมัติ`;
    onlineExamResult.innerHTML=`<div class="score-box"><div>ผลสอบ ${esc(data.examSet)}</div><strong>${score}%</strong><div>${correct}/${qs.length} ข้อ</div><p class="${writtenPassed?'pass':'fail'}">${resultMessage}</p><div>ภาคปฏิบัติ: ${practicalResult} · ระดับรวมหลังอัปเดต: Level ${recalculatedCurrentLevel} · หัวข้อที่สอบอัปเดตเป็น Level ${approvedLevel}</div><div style="margin-top:8px;font-size:13px">บันทึกคะแนนลง Skill Matrix แล้ว${configured?(cloudSaved?' และซิงก์ Firebase สำเร็จ':' ในเครื่องนี้ (Firebase ยังไม่สำเร็จ)'):''}</div>${cloudError?`<div class="notice" style="margin-top:10px">Firebase: ${esc(cloudError)}</div>`:''}</div>`;
    document.getElementById('onlineExamStatus').textContent=`สอบเสร็จ ${score}% · ${autoPromote?'SKILL MATRIX AUTO UPDATED':'LOCKED / RE-TRAIN'}`;
    renderOnlineExamHistory();renderSkillAssessments();refreshExamLock();
    onlineExamArea.classList.add('hidden');
    try{renderSectionSkillMatrix()}catch(uiErr){console.warn('Skill Matrix refresh after exam:',uiErr)}
    try{refreshSkillCardEmployees();renderSkillCardPreview()}catch(uiErr){console.warn('Skill Card refresh after exam:',uiErr)}
    onlineExamResult.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(err){console.error('Submit examination error:',err);alert('ตรวจคะแนนไม่สำเร็จ: '+(err?.message||err));}
  finally{
    try{const emp=window.currentPortalEmployee||currentOnlineEmployee();if(emp){let req=null;try{req=employeeExamRequirement(emp)}catch(_){};const q=(document.body.classList.contains('employee-exam-mode')||window.currentPortalEmployee)?req?.quarter:(onlineExamQuarter.value||req?.quarter||'Q1');examSubmitInProgress.delete(examAttemptLockId(emp,q));}}catch(_){}
    if(submitBtn){submitBtn.disabled=false;submitBtn.textContent='ส่งข้อสอบและตรวจคะแนน';}
  }
}
function renderOnlineExamHistory(){
  const unique=new Map();
  onlineExamRecords.slice().sort((a,b)=>(b.submittedAt||b.createdAt||'').localeCompare(a.submittedAt||a.createdAt||'')).forEach(x=>{
    const key=String(x.employeeId||x.employeeDocId||'').trim().toLowerCase()+'::'+String(x.quarter||x.examSet||'').trim().toUpperCase();
    if(!unique.has(key))unique.set(key,x);
  });
  const list=[...unique.values()];
  onlineExamHistory.innerHTML=list.length?list.map(x=>`<tr><td>${esc(submittedAtText(x))}</td><td>${esc(x.employeeId||'-')}</td><td>${esc((x.employeeName||'-').toUpperCase())}</td><td>${esc(x.section||'-')}</td><td>${esc(x.quarter||x.examSet||'-')}</td><td>${esc(x.score??'-')}%</td><td>${esc(x.practicalResult||'-')}</td><td class="${String(x.result||'').startsWith('PASS')?'pass':'fail'}">${esc(x.result||'-')}</td><td><span class="status-approved">ส่งแล้ว / Locked</span></td><td>Level ${esc(x.level||'-')}</td><td>${esc(x.evaluator||'-')}</td></tr>`).join(''):'<tr><td colspan="11" class="empty">ยังไม่มีประวัติการส่งข้อสอบ</td></tr>';
}
renderPracticalTest();

const annualTrainings=["Safety Orientation and Emergency Response","Fire Evacuation Drill","5S and Workplace Organization","Quality Policy / Customer Requirements","ISO 9001 Awareness and Internal Audit","Environmental and Chemical Handling","PPE and Machine Safety","Lockout-Tagout (for authorized persons)","First Aid and Accident Reporting","Code of Conduct / Workplace Rules","Cybersecurity and Data Protection","Job-specific Skill Re-certification"];
const trainingSection=document.getElementById('trainingSection'),trainingQuarter=document.getElementById('trainingQuarter');Object.keys(structures).forEach(x=>trainingSection.add(new Option(x,x)));trainingSection.value='Stamping Section';
function renderTrainingPlan(){const sec=trainingSection.value,q=trainingQuarter.value,items=(trainingCatalog[sec]||{})[q]||[];trainingPlanArea.innerHTML=`<h3>${sec} — ${q}</h3><table><thead><tr><th>No.</th><th>Training Topic</th><th>Method</th><th>Evidence</th></tr></thead><tbody>${items.map((x,i)=>`<tr><td>${i+1}</td><td>${x}</td><td>Classroom + OJT</td><td>Attendance, Training Record, Test / Job Observation</td></tr>`).join('')}</tbody></table>`;}
trainingSection.onchange=renderTrainingPlan;trainingQuarter.onchange=renderTrainingPlan;annualTrainingArea.innerHTML=`<table><thead><tr><th>No.</th><th>Annual Training Topic</th><th>Frequency</th></tr></thead><tbody>${annualTrainings.map((x,i)=>`<tr><td>${i+1}</td><td>${x}</td><td>อย่างน้อยปีละ 1 ครั้ง</td></tr>`).join('')}</tbody></table>`;
function skillLevelFromScore(score){if(score<60)return 1;if(score<70)return 2;if(score<80)return 3;if(score<90)return 4;return 5;}
function assignmentStatusLabel(x){if(x.status==='APPROVED')return '<span class="status-approved">อนุมัติแล้ว</span>';if(x.status==='RE_TEST')return '<span class="status-retest">ต้องสอบใหม่</span>';return '<span class="status-waiting">รอผลสอบ</span>';}
function renderExamApprovals(){const body=document.getElementById('examApprovalRows');if(!body)return;const rows=examAssignments.slice().sort((a,b)=>(b.printedAt||'').localeCompare(a.printedAt||''));document.getElementById('pendingExamCount').textContent='รอผลสอบ '+rows.filter(x=>x.status==='WAITING_RESULT').length+' รายการ';body.innerHTML=rows.length?rows.map(x=>{const waiting=x.status==='WAITING_RESULT';return `<tr class="approval-row"><td>${fmt(x.printedDate)}</td><td><b>${esc((x.employeeName||'-').toUpperCase())}</b><br><small>${esc(x.employeeId||'-')}</small></td><td>${esc(x.section||'-')}</td><td>${esc(x.quarter||'-')}</td><td class="skill-current">Level ${esc(x.currentSkillLevel||1)}</td><td>${assignmentStatusLabel(x)}</td><td>${waiting?`<input id="score-${esc(x.docId)}" type="number" min="0" max="100" placeholder="0-100">`:esc(x.score??'-')}</td><td>${waiting?`<select id="practical-${esc(x.docId)}"><option value="">เลือกผล</option><option value="PASS">PASS</option><option value="FAIL">FAIL</option></select>`:esc(x.practicalResult||'-')}</td><td>${waiting?`<select id="level-${esc(x.docId)}"><option value="">เลือกระดับ</option><option value="${Number(x.targetSkillLevel||Math.min(5,Number(x.currentSkillLevel||1)+1))}" selected>Level ${Number(x.targetSkillLevel||Math.min(5,Number(x.currentSkillLevel||1)+1))} (ล็อก)</option></select>`:'Level '+esc(x.approvedSkillLevel||x.currentSkillLevel||1)}</td><td>${waiting?`<input id="approver-${esc(x.docId)}" placeholder="ชื่อ Admin">`:esc(x.approvedBy||'-')}</td><td>${waiting?`<button class="btn admin-only ${isAdmin?'':'hidden'}" type="button" data-approve-exam="${esc(x.docId)}">อนุมัติผล</button>`:'-'}</td></tr>`}).join(''):'<tr><td colspan="11" class="empty">ยังไม่มีรายการสั่งพิมพ์ข้อสอบ</td></tr>';body.querySelectorAll('[data-approve-exam]').forEach(btn=>btn.onclick=()=>approvePrintedExam(btn.dataset.approveExam));}
async function approvePrintedExam(docId){if(!isAdmin)return alert('กรุณา Login เป็น Admin');const item=examAssignments.find(x=>x.docId===docId);if(!item)return;const score=Number(document.getElementById('score-'+docId).value),practical=document.getElementById('practical-'+docId).value,newLevel=Number(document.getElementById('level-'+docId).value),approver=document.getElementById('approver-'+docId).value.trim();if(!Number.isFinite(score)||score<0||score>100)return alert('กรุณากรอกคะแนน 0-100');if(!practical)return alert('กรุณาเลือกผลภาคปฏิบัติ');if(!newLevel)return alert('กรุณาเลือกระดับ Skill ใหม่');if(!approver)return alert('กรุณากรอกชื่อผู้อนุมัติ');const passed=score>=80&&practical==='PASS';if(passed&&newLevel<Number(item.currentSkillLevel||1))return alert('ระดับใหม่ต้องไม่น้อยกว่าระดับปัจจุบัน');if(!passed&&newLevel>Number(item.currentSkillLevel||1))return alert('ผลสอบไม่ผ่าน ระบบล็อกให้คง Skill Level เดิม');const now=new Date().toISOString(),status=passed?'APPROVED':'RE_TEST',result=passed?'PASS':'RE-TRAIN';const assignmentUpdate={score,practicalResult:practical,approvedSkillLevel:passed?newLevel:Number(item.currentSkillLevel||1),approvedBy:approver,approvedAt:now,status,result};const emp=employees.find(e=>(e.docId||'')===item.employeeDocId)||employees.find(e=>e.id===item.employeeId);if(configured){await api.updateDoc(api.doc(db,'examAssignments',docId),assignmentUpdate);await api.addDoc(api.collection(db,'onlineExamRecords'),{employeeDocId:item.employeeDocId,employeeId:item.employeeId,employeeName:item.employeeName,section:item.section,quarter:item.quarter,score,correct:'-',total:'-',practicalResult:practical,result,level:assignmentUpdate.approvedSkillLevel,evaluator:approver,date:now.slice(0,10),createdAt:now,approvalSource:'PRINTED_EXAM'});await api.addDoc(api.collection(db,'skillAssessments'),{employeeDocId:item.employeeDocId,employeeId:item.employeeId,employeeName:item.employeeName,section:item.section,position:emp?.position||'',topic:`${item.quarter} Printed Exam`,score,level:assignmentUpdate.approvedSkillLevel,evaluator:approver,date:now.slice(0,10),createdAt:now,result});if(passed&&item.employeeDocId){const base={...(item.baselineSkillLevels||employeeSkillLevels(emp))};(item.lockedTopics||Object.keys(base)).forEach(k=>base[k]=newLevel);await api.updateDoc(api.doc(db,'employees',item.employeeDocId),{skillLevels:base,currentSkillLevel:newLevel,skillUpdatedAt:now,skillApprovedBy:approver,previousSkillSnapshot:{capturedAt:item.printedAt||now,levels:item.baselineSkillLevels||{},overall:item.currentSkillLevel||1}});}}else{Object.assign(item,assignmentUpdate);localStorage.setItem('examAssignments',JSON.stringify(examAssignments));onlineExamRecords.push({employeeId:item.employeeId,employeeName:item.employeeName,section:item.section,quarter:item.quarter,score,practicalResult:practical,result,level:assignmentUpdate.approvedSkillLevel,evaluator:approver,date:now.slice(0,10),createdAt:now});skillAssessments.push({employeeId:item.employeeId,employeeName:item.employeeName,section:item.section,topic:`${item.quarter} Printed Exam`,score,level:assignmentUpdate.approvedSkillLevel,evaluator:approver,date:now.slice(0,10),createdAt:now,result});if(passed&&emp){const base={...(item.baselineSkillLevels||employeeSkillLevels(emp))};(item.lockedTopics||Object.keys(base)).forEach(k=>base[k]=newLevel);Object.assign(emp,{skillLevels:base,currentSkillLevel:newLevel,skillUpdatedAt:now,skillApprovedBy:approver,previousSkillSnapshot:{capturedAt:item.printedAt||now,levels:item.baselineSkillLevels||{},overall:item.currentSkillLevel||1}});}localStorage.setItem('onlineExamRecords',JSON.stringify(onlineExamRecords));localStorage.setItem('skillAssessments',JSON.stringify(skillAssessments));localStorage.setItem('productionEmployees',JSON.stringify(employees));renderAll();}alert(passed?`อนุมัติผลสอบแล้ว และปรับ Skill เป็น Level ${newLevel}`:'บันทึกผลไม่ผ่านแล้ว สถานะเป็นต้องสอบใหม่');}
function renderExamEmployees(){examEmployee.innerHTML='<option value="">เลือกพนักงาน</option>'+employees.slice().sort((a,b)=>(a.name||'').localeCompare(b.name||'')).map(e=>`<option value="${e.docId||employees.indexOf(e)}">${e.id||'-'} — ${(e.name||'').toUpperCase()} — ${e.section||'-'}</option>`).join('');}
function renderSkillAssessments(){
  const pending=onlineExamRecords.filter(x=>x.approvalRequired===true||x.result==='WAITING_APPROVAL').sort((a,b)=>(b.createdAt||b.date||'').localeCompare(a.createdAt||a.date||''));
  const count=document.getElementById('pendingLevel3Count');if(count)count.textContent=`รออนุมัติ ${pending.length} รายการ`;
  examResults.innerHTML=pending.length?pending.map(x=>{const topics=(x.lockedTopics||x.skillResults?.map(a=>a.skill)||[]).join(', ')||x.quarter||'-';return `<tr><td>${fmt(x.date)}</td><td><b>${esc(x.employeeId||'-')} — ${esc((x.employeeName||'-').toUpperCase())}</b></td><td>${esc(x.section||'-')}</td><td>${esc(topics)}</td><td><b>${esc(x.score??'-')}%</b></td><td>Level ${esc(x.oldSkillLevel||x.level||3)}</td><td>Level ${esc(x.targetSkillLevel||Math.min(5,Number(x.oldSkillLevel||x.level||3)+1))}</td><td>${esc(x.evaluator||'-')}</td><td><input id="pending-approver-${esc(x.docId||x.createdAt)}" placeholder="ชื่อผู้อนุมัติ"></td><td><div style="display:flex;gap:6px"><button class="btn admin-only ${isAdmin?'':'hidden'}" type="button" data-pending-approve="${esc(x.docId||x.createdAt)}">อนุมัติ</button><button class="btn secondary admin-only ${isAdmin?'':'hidden'}" type="button" data-pending-reject="${esc(x.docId||x.createdAt)}">ไม่อนุมัติ</button></div></td></tr>`}).join(''):'<tr><td colspan="10" class="empty">ยังไม่มีรายการ Level 3 ขึ้นไปที่รออนุมัติ</td></tr>';
  examResults.querySelectorAll('[data-pending-approve]').forEach(b=>b.onclick=()=>approvePendingLevel3(b.dataset.pendingApprove,true));
  examResults.querySelectorAll('[data-pending-reject]').forEach(b=>b.onclick=()=>approvePendingLevel3(b.dataset.pendingReject,false));
}
async function approvePendingLevel3(recordKey,approved){
  if(!isAdmin)return alert('กรุณา Login เป็น Admin');
  const item=onlineExamRecords.find(x=>(x.docId||x.createdAt)===recordKey);if(!item)return alert('ไม่พบรายการรออนุมัติ');
  const approver=(document.getElementById('pending-approver-'+recordKey)?.value||'').trim();if(!approver)return alert('กรุณากรอกชื่อผู้อนุมัติ');
  const emp=employees.find(e=>(e.docId||'')===item.employeeDocId)||employees.find(e=>String(e.id||e.employeeId||'')===String(item.employeeId||''));if(!emp)return alert('ไม่พบข้อมูลพนักงาน');
  const now=new Date().toISOString(),target=Number(item.targetSkillLevel||Math.min(5,Number(item.oldSkillLevel||item.level||3)+1));
  const topics=(item.lockedTopics||item.skillResults?.map(a=>a.skill)||[]).filter(Boolean);
  const scores={...(emp.skillScores||{})};topics.forEach(t=>scores[t]=Number(item.score||0));
  const levels={...employeeSkillLevels(emp)};if(approved)topics.forEach(t=>levels[t]=target);
  Object.assign(emp,{skillScores:scores,skillLevels:levels,currentSkillLevel:approved?target:Number(item.oldSkillLevel||item.level||3),lastExamScore:Number(item.score||0),lastExamAt:item.createdAt||now,lastExamStatus:approved?'APPROVED':'REJECTED',skillUpdatedAt:approved?now:emp.skillUpdatedAt,skillApprovedBy:approved?approver:emp.skillApprovedBy});
  const update={approvalRequired:false,result:approved?'APPROVED':'REJECTED',level:approved?target:Number(item.oldSkillLevel||item.level||3),approvedBy:approver,approvedAt:now};
  Object.assign(item,update);
  try{
    if(configured){
      if(item.docId)await api.updateDoc(api.doc(db,'onlineExamRecords',item.docId),update);
      if(emp.docId)await api.updateDoc(api.doc(db,'employees',emp.docId),{skillScores:scores,skillLevels:levels,currentSkillLevel:emp.currentSkillLevel,lastExamScore:emp.lastExamScore,lastExamAt:emp.lastExamAt,lastExamStatus:emp.lastExamStatus,skillUpdatedAt:emp.skillUpdatedAt||'',skillApprovedBy:emp.skillApprovedBy||''});
      for(const topic of topics){await api.addDoc(api.collection(db,'skillAssessments'),{employeeDocId:emp.docId||'',employeeId:emp.id||emp.employeeId||'',employeeName:(emp.name||'').toUpperCase(),section:emp.section||'',position:emp.position||'',topic,score:Number(item.score||0),level:approved?target:Number(item.oldSkillLevel||item.level||3),evaluator:approver,date:now.slice(0,10),createdAt:now,result:approved?'APPROVED':'REJECTED'});}
    }else{
      localStorage.setItem('onlineExamRecords',JSON.stringify(onlineExamRecords));localStorage.setItem('productionEmployees',JSON.stringify(employees));
    }
    renderAll();alert(approved?`อนุมัติแล้ว ระบบปรับ Skill เป็น Level ${target}`:'บันทึกไม่อนุมัติแล้ว ระดับเดิมยังคงอยู่');
  }catch(err){console.error(err);alert('บันทึกไม่สำเร็จ: '+(err?.message||err));}
}
const oldSkillExamForm=document.getElementById('skillExamForm');
if(oldSkillExamForm) oldSkillExamForm.onsubmit=e=>e.preventDefault();
examDate.value=new Date().toISOString().slice(0,10);



// ===== v15 SECTION SKILL MATRIX + SKILL CARD =====
const sectionSkills=examSkillTopics;
const skillSections=Object.keys(sectionSkills);

// Version 36: Master dropdown data for all repeatable/categorical fields.
const machineMaster={
  'Engineering Support Section':['Production Support Area','Process Engineering Area','Inspection Support Area'],
  'Stamping Section':['Press Machine 01','Press Machine 02','Press Machine 03','Press Machine 08','Material Loading Area','Die Setup Area'],
  'Welding Section':['Spot Welding 01','Spot Welding 02','Nut Welding','Welding Jig Area','Destructive Test Area'],
  'CNC Section':['CNC Machine 01','CNC Machine 02','CNC Machine 03','Tool Setting Area'],
  'Sorting Section':['Sorting Table 01','Sorting Table 02','Final Inspection Area'],
  'Tapping Section':['Tapping Machine 01','Tapping Machine 02','Thread Inspection Area'],
  'Bending Section':['Bending Machine 01','Bending Machine 02','Angle Inspection Area'],
  'Machine Maintenance Section':['Machine Maintenance Workshop','PM Area','Utility Area'],
  'Tooling Maintenance Section':['Tooling Workshop','Mold PM Area','Mold Repair Area']
};
function uniqueValues(values){return [...new Set(values.filter(Boolean).map(v=>String(v).trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));}
function setSelectOptions(el,values,placeholder,selected=''){
  if(!el)return;
  const keep=selected||el.value||'';
  el.innerHTML=`<option value="">${placeholder}</option>`+uniqueValues(values).map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join('');
  if(keep && [...el.options].some(o=>o.value===keep))el.value=keep;
}
function approverCandidates(){
  const targetSection='Engineering Support Section';
  const normalize=v=>String(v||'').trim().replace(/\s+/g,' ').toLowerCase();
  const names=employees
    .filter(e=>normalize(e.section)===normalize(targetSection))
    .map(e=>e.name||e.thaiName);
  return uniqueValues(names);
}
function machinesForSection(section){return machineMaster[section]||['Production Area','Machine 01','Machine 02','Inspection Area'];}
function refreshCommonDropdowns(){
  const empOnline=currentOnlineEmployee?.();
  const section=empOnline?.section||document.getElementById('onlineExamSection')?.value||'';
  const evaluators=approverCandidates();
  setSelectOptions(document.getElementById('onlineExamEvaluator'),evaluators,'เลือกผู้ประเมิน');
  setSelectOptions(document.getElementById('examEvaluator'),evaluators,'เลือกผู้ประเมิน');
  setSelectOptions(document.getElementById('skillCardApprover'),evaluators,'เลือกผู้อนุมัติ',document.getElementById('skillCardApprover')?.value);
  const cardEmp=typeof getCardEmployee==='function'?getCardEmployee():null;
  const cardSection=cardEmp?.section||document.getElementById('skillCardSection')?.value||'';
  setSelectOptions(document.getElementById('skillCardMachine'),machinesForSection(cardSection),'เลือกเครื่องจักร/พื้นที่',document.getElementById('skillCardMachine')?.value);
  const examEmp=document.getElementById('examEmployee');
  const selectedEmp=examEmp?.value?resolveEmployee(decodeURIComponent(examEmp.value)):null;
  const examSection=selectedEmp?.section||section;
  setSelectOptions(document.getElementById('examTopic'),sectionSkills[examSection]||[],'เลือกหัวข้อทักษะ',document.getElementById('examTopic')?.value);
}

function isoDate(d){return d.toISOString().slice(0,10)}
function addMonthsISO(dateStr,months){const d=dateStr?new Date(dateStr+'T00:00:00'):new Date();if(isNaN(d))return isoDate(new Date());d.setMonth(d.getMonth()+months);return isoDate(d)}
function quarterOf(d=new Date()){return 'Q'+(Math.floor(d.getMonth()/3)+1)}
function employeeSkillLevels(emp){const skills=(examSkillTopics&&examSkillTopics[emp.section])||[];const saved=emp.skillLevels||{};const fallback=Number(emp.currentSkillLevel||1);return Object.fromEntries(skills.map(k=>[k,Math.max(1,Math.min(5,Number(saved[k]||fallback||1)))]))}
function skillDates(emp){const last=(emp.skillUpdatedAt||emp.updatedAt||emp.createdAt||emp.startDate||isoDate(new Date())).slice(0,10);const next=addMonthsISO(last,3);const days=Math.ceil((new Date(next+'T00:00:00')-new Date())/86400000);return {last,next,days,status:days<0?'OVER':days<=30?'SOON':'OK'}}
function dueBadge(emp){const d=skillDates(emp);return `<span class="due-badge ${d.status==='OVER'?'due-over':d.status==='SOON'?'due-soon':'due-ok'}">${d.status==='OVER'?'เกินกำหนด '+Math.abs(d.days)+' วัน':d.status==='SOON'?'เหลือ '+d.days+' วัน':'ครบกำหนด '+fmt(d.next)}</span>`}
function levelCircle(n){return `<span class="level-dot lv${n}">${n}</span>`}
const smSection=document.getElementById('skillMatrixSection'),smQuarter=document.getElementById('skillMatrixQuarter'),smSearch=document.getElementById('skillMatrixSearch'),smStatus=document.getElementById('skillMatrixStatus');
const scSection=document.getElementById('skillCardSection'),scEmployee=document.getElementById('skillCardEmployee'),scMachine=document.getElementById('skillCardMachine'),scApprover=document.getElementById('skillCardApprover');
function refreshSkillPageSectionDropdowns(){
  const sections=uniqueValues([...skillSections,...employees.map(e=>e.section)]);
  const fill=(el,preferred)=>{if(!el)return;const old=el.value;el.innerHTML='';sections.forEach(sec=>el.add(new Option(sec,sec)));const target=sections.includes(old)?old:(sections.includes(preferred)?preferred:(sections[0]||''));if(target)el.value=target;};
  fill(smSection,'Stamping Section');fill(scSection,'Stamping Section');
}
refreshSkillPageSectionDropdowns();
const acceptanceLevels=[
  {level:1,min:14,max:25,label:'เริ่มต้น',work:'ต้องมีผู้ควบคุมอย่างใกล้ชิด',cls:'acc-1'},
  {level:2,min:26,max:37,label:'กำลังเรียนรู้',work:'ทำงานง่ายได้และยังต้องมีคำแนะนำ',cls:'acc-2'},
  {level:3,min:38,max:49,label:'ปฏิบัติได้',work:'ทำงานทั่วไปได้ด้วยตนเอง',cls:'acc-3'},
  {level:4,min:50,max:61,label:'ชำนาญ',work:'ทำงานได้รวดเร็ว ถูกต้อง และแก้ปัญหาได้',cls:'acc-4'},
  {level:5,min:62,max:70,label:'ผู้เชี่ยวชาญ',work:'สอน ถ่ายทอด และพัฒนางานได้',cls:'acc-5'}
];
function acceptanceByTotal(total){const n=Number(total);if(!Number.isFinite(n))return null;return acceptanceLevels.find(x=>n>=x.min&&n<=x.max)||(n<14?acceptanceLevels[0]:acceptanceLevels[4])}
function employeeAcceptance(emp,skills){const levels=employeeSkillLevels(emp);const values=skills.map(k=>Number(levels[k])).filter(Number.isFinite);if(!values.length)return {score:null,level:null,label:'ยังไม่มีคะแนน',work:'รอผลการประเมิน',cls:'acc-none'};const score=values.reduce((sum,n)=>sum+n,0),a=acceptanceByTotal(score);return {...a,score}}
function acceptanceBadge(a){return `<span style="display:inline-block;padding:4px 7px;border-radius:999px;font-weight:800;font-size:11px;background:${a.level>=4?'#dcfce7':a.level===3?'#fef3c7':a.level?'#fee2e2':'#e2e8f0'};color:${a.level>=4?'#166534':a.level===3?'#92400e':a.level?'#991b1b':'#475569'}">${a.level?'A'+a.level+' · ':''}${esc(a.label)}</span>`}

function skillMatrixCriteriaTables(){const details=[
{n:1,t:'เริ่มต้น',r:'14 – 25 คะแนน',th:['ยังไม่มีความรู้หรือประสบการณ์ในเรื่องนี้','ต้องมีผู้แนะนำ/ควบคุมอย่างใกล้ชิด','ทำตามคำแนะนำได้'],en:['No knowledge or experience','Requires close supervision','Can follow instructions']},
{n:2,t:'กำลังพัฒนา',r:'26 – 37 คะแนน',th:['มีความรู้พื้นฐานบางส่วน','สามารถทำงานง่าย ๆ ได้','ยังต้องการคำแนะนำ'],en:['Basic knowledge','Can perform simple tasks','Requires some guidance']},
{n:3,t:'ปฏิบัติได้',r:'38 – 49 คะแนน',th:['มีความรู้และทักษะเพียงพอ','สามารถทำงานทั่วไปได้ด้วยตนเอง','แก้ปัญหาทั่วไปได้'],en:['Adequate knowledge and skills','Can work independently','Can solve common problems']},
{n:4,t:'ชำนาญ',r:'50 – 61 คะแนน',th:['มีความรู้และประสบการณ์สูง','ทำงานได้รวดเร็วและถูกต้อง','แก้ไขปัญหาที่ซับซ้อนได้'],en:['High knowledge and experience','Works quickly and accurately','Can solve complex problems']},
{n:5,t:'ผู้เชี่ยวชาญ',r:'62 – 70 คะแนน',th:['เชี่ยวชาญในเรื่องนี้อย่างแท้จริง','สามารถสอน/ถ่ายทอดความรู้ได้','พัฒนาและปรับปรุงงานได้'],en:['Expert in this area','Can train and transfer knowledge','Can improve and develop work']}
];return `<div class="criteria-wrap"><div class="criteria-title">เกณฑ์การให้คะแนน (SCORING CRITERIA)</div><div class="criteria-grid">${details.map(d=>`<div class="criteria-card criteria-${d.n}"><div class="criteria-card-head">ระดับ ${d.n}<small>(${esc(d.t)})</small><b>${d.r}</b></div><ul>${d.th.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><ul class="criteria-en">${d.en.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div><div class="criteria-note"><b>หมายเหตุ:</b> คะแนนรวมขั้นต่ำ 14 คะแนน และสูงสุด 70 คะแนน (14 ทักษะ × 5 คะแนน = 70 คะแนน)</div></div>`}
function skillMatrixHeader(section){const logo=document.querySelector('.company-logo')?.src||'';return `<div class="matrix-report-head"><img class="matrix-company-logo" src="${logo}" alt="Company logo"><div class="matrix-title-block"><h1>SKILL MATRIX</h1><div class="matrix-section-name">${esc(section)}</div><div class="matrix-subtitle">ประเมินทักษะพนักงานตามมาตรฐาน 5 ระดับ (1–5) · คะแนนรวม 14–70 คะแนน</div></div><div class="matrix-dept-block"><b>Production Department</b><span>รอบประเมิน ${smQuarter.value==='AUTO'?quarterOf():smQuarter.value}</span></div></div><div class="matrix-info-strip"><div><b>Section</b><span>${esc(section)}</span></div><div><b>วันที่ประเมิน</b><span>${new Date().toLocaleDateString('th-TH')}</span></div><div><b>ผู้ประเมิน</b><span>Admin / Section Engineering</span></div></div>`}
function filteredSkillEmployees(section){const q=(smSearch.value||'').toLowerCase().trim();return employees.filter(e=>e.section===section).filter(e=>!q||`${e.id} ${e.name}`.toLowerCase().includes(q)).filter(e=>smStatus.value==='ALL'||(smStatus.value==='DUE'?skillDates(e).status!=='OK':skillDates(e).status==='OK')).sort((a,b)=>(a.position||'').localeCompare(b.position||'')||(a.name||'').localeCompare(b.name||''))}
function skillMatrixHTML(section,list,editable=true){const skills=sectionSkills[section]||[];const rows=list.map((e,i)=>{const levels=employeeSkillLevels(e),acceptance=employeeAcceptance(e,skills),key=e.docId||employees.indexOf(e);return `<tr><td>${i+1}</td><td>${avatar(e,true)}</td><td>${esc(e.id||'-')}</td><td class="emp-col"><b>${esc((e.name||'-').toUpperCase())}</b><br><small>${esc(e.position||'-')}</small></td>${skills.map(skill=>`<td>${editable?`<select class="skill-cell-select" data-skill-emp="${encodeURIComponent(key)}" data-skill-name="${encodeURIComponent(skill)}">${[1,2,3,4,5].map(n=>`<option value="${n}" ${levels[skill]===n?'selected':''}>${n}</option>`).join('')}</select>`:`<span class="matrix-print-level lvbox-${levels[skill]}">${levels[skill]}</span>`}</td>`).join('')}<td class="total-score"><b>${acceptance.score===null?'-':acceptance.score}</b></td><td><span class="rank-badge rank-${acceptance.level||0}">ระดับ ${acceptance.level||'-'}</span></td></tr>`}).join('');return `${skillMatrixHeader(section)}<div class="skill-table-shell"><table class="skill-table matrix-modern"><thead><tr><th>No.</th><th>รูป</th><th>รหัส</th><th class="emp-col">ชื่อ / ตำแหน่ง</th>${skills.map(x=>`<th>${esc(x)}<small>1 – 5</small></th>`).join('')}<th>คะแนนรวม<small>(14 – 70)</small></th><th>ระดับ</th></tr></thead><tbody>${rows||`<tr><td colspan="${skills.length+6}" class="empty">ยังไม่มีพนักงาน</td></tr>`}</tbody></table></div>${skillMatrixCriteriaTables()}<div class="report-approval-signatures"><div><b>ผู้จัดทำ / Prepared by</b><span>ชื่อ ____________________</span><span>ลายเซ็น ____________________</span><span>วันที่ ____/____/______</span></div><div><b>ผู้ตรวจสอบ / Reviewed by</b><span>ชื่อ ____________________</span><span>ลายเซ็น ____________________</span><span>วันที่ ____/____/______</span></div><div><b>ผู้อนุมัติ / Approved by</b><span>ชื่อ ____________________</span><span>ลายเซ็น ____________________</span><span>วันที่ ____/____/______</span></div></div>`}

const JOB_ORDER=['Production Manager','Assistant Manager','Senior Engineer','Production Engineer','Tooling Engineer','Welding Engineer','Engineer','Supervisor','Leader','Technician','Senior Operator','Operator','Trainee'];
function sortEmployeesStandard(list){
 return list.slice().sort((a,b)=>{
  const pa=JOB_ORDER.indexOf(a.position||''); const pb=JOB_ORDER.indexOf(b.position||'');
  const oa=pa===-1?999:pa, ob=pb===-1?999:pb;
  if(oa!==ob) return oa-ob;
  const da=new Date(a.startDate||a.joinDate||0).getTime()||0;
  const db=new Date(b.startDate||b.joinDate||0).getTime()||0;
  if(da!==db) return da-db;
  return String(a.id||'').localeCompare(String(b.id||''),undefined,{numeric:true});
 });
}

let pendingSkillMatrixChanges={};
function showLocalSaveStatus(message='บันทึกลงเครื่องอัตโนมัติแล้ว'){let box=document.getElementById('localAutoSaveStatus');if(!box){box=document.createElement('div');box.id='localAutoSaveStatus';box.style.cssText='position:fixed;right:18px;bottom:18px;z-index:9999;background:#067647;color:#fff;padding:11px 16px;border-radius:10px;box-shadow:0 5px 18px rgba(0,0,0,.18);font-weight:700';document.body.appendChild(box)}box.textContent='✓ '+message;box.style.display='block';clearTimeout(window.__localSaveTimer);window.__localSaveTimer=setTimeout(()=>box.style.display='none',1800)}
function saveEmployeesToThisComputer(){localStorage.setItem('productionEmployees',JSON.stringify(employees));localStorage.setItem('productionEmployeesSavedAt',new Date().toISOString());showLocalSaveStatus()}
function renderSectionSkillMatrix(){const sec=smSection.value;const list=sortEmployeesStandard(filteredSkillEmployees(sec));const due=list.filter(e=>skillDates(e).status!=='OK').length;document.getElementById('skillMatrixSummary').innerHTML=`<div class="stat"><span>พนักงานใน Section</span><b>${list.length}</b></div><div class="stat"><span>ถึงกำหนด/เกินกำหนด</span><b style="color:${due?'#b42318':'#067647'}">${due}</b></div><div class="stat"><span>รอบประเมิน</span><b style="font-size:22px">${smQuarter.value==='AUTO'?quarterOf():smQuarter.value}</b></div><div class="stat"><span>ความถี่</span><b style="font-size:22px">3 เดือน</b></div>`;const area=document.getElementById('sectionSkillMatrixArea');area.innerHTML=skillMatrixHTML(sec,list,true);area.querySelectorAll('[data-skill-emp]').forEach(sel=>sel.onchange=()=>{const key=decodeURIComponent(sel.dataset.skillEmp),skill=decodeURIComponent(sel.dataset.skillName);const emp=employees.find((e,i)=>String(e.docId||'')===key||String(e.id||'')===key||String(i)===key);if(!emp)return;const levels={...employeeSkillLevels(emp),[skill]:Number(sel.value)};Object.assign(emp,{skillLevels:levels,currentSkillLevel:Math.min(...Object.values(levels).map(Number)),skillUpdatedAt:new Date().toISOString(),skillApprovedBy:emp.skillApprovedBy||'LOCAL USER'});saveEmployeesToThisComputer();sel.style.outline='2px solid #16a34a';setTimeout(()=>sel.style.outline='',900);renderSkillCardPreview();});}
async function saveAllSkillMatrixChanges(){if(!isAdmin)return alert('กรุณา Login เป็น Admin');const entries=Object.entries(pendingSkillMatrixChanges);if(!entries.length)return alert('ยังไม่มีการเปลี่ยนแปลง Skill Matrix');const now=new Date().toISOString(),approver=auth?.currentUser?.email||'ADMIN';let saved=0;try{for(const [key,changes] of entries){let emp=configured?employees.find(e=>String(e.docId||e.id)===String(key)):employees[Number(key)];if(!emp)continue;const levels={...employeeSkillLevels(emp),...changes};const docId=String(emp.docId||emp.id||key).replace(/[^A-Za-z0-9_-]/g,'_');const update={skillLevels:levels,skillUpdatedAt:now,currentSkillLevel:Math.min(...Object.values(levels).map(Number)),skillApprovedBy:approver};Object.assign(emp,update,{docId});localStorage.setItem('productionEmployees',JSON.stringify(employees));if(configured)await api.setDoc(api.doc(db,'employees',docId),{...emp,...update},{merge:true});saved++;}pendingSkillMatrixChanges={};renderAll();alert(`บันทึก Skill Matrix สำเร็จ ${saved} คน และกำหนดประเมินครั้งถัดไปอีก 3 เดือน`);}catch(err){console.error(err);alert('บันทึก Skill Matrix ไม่สำเร็จ: '+(err?.message||err));}}
async function saveSkillLevel(key,skill,level){pendingSkillMatrixChanges[key]=pendingSkillMatrixChanges[key]||{};pendingSkillMatrixChanges[key][skill]=Number(level);return saveAllSkillMatrixChanges();}
[smSection,smQuarter,smStatus].forEach(x=>x.onchange=renderSectionSkillMatrix);smSearch.oninput=renderSectionSkillMatrix;
function buildSectionSkillPrint(all=false){const secs=all?skillSections:[smSection.value];document.getElementById('sectionSkillPrintReport').innerHTML=secs.map((sec,i)=>`<div class="${i?'print-page-break':''}">${skillMatrixHTML(sec,sortEmployeesStandard(employees.filter(e=>e.section===sec)),false)}</div>`).join('');printReport('print-section-skill')}
document.getElementById('printSectionSkillBtn').onclick=()=>buildSectionSkillPrint(false);document.getElementById('printAllSkillBtn').onclick=()=>buildSectionSkillPrint(true);
function normalizedSection(v){return String(v||'').trim().toLowerCase().replace(/\s+/g,' ')}
function employeeCardKey(e){return String(e.docId||e.id||employees.indexOf(e))}
function refreshSkillCardEmployees(){refreshSkillPageSectionDropdowns();const sec=normalizedSection(scSection.value);const list=sortEmployeesStandard(employees.filter(e=>normalizedSection(e.section)===sec));const old=scEmployee.value;scEmployee.innerHTML='<option value="">เลือกพนักงาน ('+list.length+' คน)</option>'+list.map(e=>`<option value="${encodeURIComponent(employeeCardKey(e))}">${esc(e.id||'-')} — ${esc((e.name||'').toUpperCase())}</option>`).join('');if([...scEmployee.options].some(o=>o.value===old))scEmployee.value=old;else if(list.length)scEmployee.value=encodeURIComponent(employeeCardKey(list[0]));else scEmployee.value='';renderSkillCardPreview()}
function getCardEmployee(){if(!scEmployee.value)return null;const k=decodeURIComponent(scEmployee.value);return employees.find((e,i)=>String(e.docId||'')===k||String(e.id||'')===k||String(i)===k)||null}
function skillCardHTML(emp){if(!emp)return '<div class="empty">เลือกพนักงานเพื่อแสดง Skill Card</div>';const levels=employeeSkillLevels(emp),dates=skillDates(emp),skills=sectionSkills[emp.section]||Object.keys(levels),acceptance=employeeAcceptance(emp,skills),machine=scMachine.value||emp.assignedMachine||'-',approver=scApprover.value||emp.skillApprovedBy||'Production Manager';return `<div class="skill-card skill-card-modern"><div class="skill-card-head"><div><b>EMPLOYEE SKILL CARD</b><small>${esc(emp.section||'-')}</small></div><span class="rank-badge rank-${acceptance.level||0}">ระดับ ${acceptance.level||'-'}</span></div><div class="skill-card-body"><img class="skill-card-photo" src="${emp.photoData||placeholderPhoto}"><div class="skill-card-info"><h2>${esc((emp.name||'-').toUpperCase())}</h2><div class="card-info-grid"><span><b>Emp.ID</b>${esc(emp.id||'-')}</span><span><b>Position</b>${esc(emp.position||'-')}</span><span><b>Machine / Area</b>${esc(machine)}</span><span><b>Last Update</b>${fmt(dates.last)}</span><span><b>Next Update</b>${fmt(dates.next)}</span><span><b>Approved by</b>${esc(approver)}</span></div></div><div class="card-score-box"><small>คะแนนรวม</small><strong>${acceptance.score===null?'-':acceptance.score}</strong><span>/ 70</span><b>${esc(acceptance.label)}</b></div><div class="skill-card-skills">${skills.map(k=>`<div class="skill-card-skill"><span>${esc(k)}</span><span class="level-pill level-${levels[k]||1}">${levels[k]||1}</span></div>`).join('')}</div><div class="card-criteria-mini"><b>เกณฑ์ระดับ:</b><span>1 = 14–25</span><span>2 = 26–37</span><span>3 = 38–49</span><span>4 = 50–61</span><span>5 = 62–70</span></div></div></div>`}
function renderSkillCardPreview(){document.getElementById('skillCardPreview').innerHTML=skillCardHTML(getCardEmployee())}
scSection.onchange=()=>{refreshSkillCardEmployees();refreshCommonDropdowns();renderEvaluationPlan()};scEmployee.onchange=()=>{const emp=getCardEmployee();refreshCommonDropdowns();scMachine.value=emp?.assignedMachine||'';scApprover.value=emp?.skillApprovedBy||'';renderSkillCardPreview()};
let skillCardAutoSaveTimer;
function autoSaveSkillCardToComputer(){clearTimeout(skillCardAutoSaveTimer);skillCardAutoSaveTimer=setTimeout(()=>{const emp=getCardEmployee();if(!emp)return;emp.assignedMachine=scMachine.value.trim();emp.skillApprovedBy=scApprover.value.trim();emp.skillUpdatedAt=new Date().toISOString();saveEmployeesToThisComputer();renderSkillCardPreview()},450)}
scMachine.onchange=()=>{renderSkillCardPreview();autoSaveSkillCardToComputer()};scApprover.onchange=()=>{renderSkillCardPreview();autoSaveSkillCardToComputer()};
async function saveSkillCardData(){if(!isAdmin)return alert('กรุณา Login เป็น Admin');const emp=getCardEmployee();if(!emp)return alert('กรุณาเลือกพนักงาน');const machine=scMachine.value.trim(),approver=scApprover.value.trim();if(!machine)return alert('กรุณากรอกเครื่องจักร/พื้นที่ประจำ');if(!approver)return alert('กรุณากรอกผู้อนุมัติ');const now=new Date().toISOString(),docId=String(emp.docId||emp.id||'').replace(/[^A-Za-z0-9_-]/g,'_');const update={assignedMachine:machine,skillApprovedBy:approver,skillUpdatedAt:now};Object.assign(emp,update,{docId});localStorage.setItem('productionEmployees',JSON.stringify(employees));try{if(configured)await api.setDoc(api.doc(db,'employees',docId),{...emp,...update},{merge:true});renderSkillCardPreview();alert('บันทึก Skill Card สำเร็จ');}catch(err){console.error(err);alert('บันทึกในหน้าเว็บแล้ว แต่ Firebase บันทึกไม่สำเร็จ: '+(err?.message||err));}}
function printCards(allSection=false){const list=allSection?employees.filter(e=>e.section===scSection.value):[getCardEmployee()].filter(Boolean);if(!list.length)return alert('กรุณาเลือกพนักงาน');document.getElementById('skillCardPrintReport').innerHTML=`<div class="skill-card-grid">${list.map(skillCardHTML).join('')}</div>`;printReport('print-skill-card')}
document.getElementById('printSkillCardBtn').onclick=()=>printCards(false);document.getElementById('printSectionCardsBtn').onclick=()=>printCards(true);
function printGeneric(title,html){document.getElementById('genericPrintReport').innerHTML=`<div class="report-header"><h1>${esc(title)}</h1><div>วันที่พิมพ์ ${new Date().toLocaleDateString('th-TH')}</div></div>${html}`;printReport('print-generic')}
function addUniversalPrintButtons(){const map=[['section','พิมพ์ Section List / PDF',()=>printGeneric('SECTION EMPLOYEE LIST',document.getElementById('sectionDetail').innerHTML)],['sectionChart','พิมพ์ Section Chart / PDF',()=>printGeneric('SECTION ORGANIZATION CHART',document.getElementById('sectionChartArea').innerHTML)],['search','พิมพ์รายชื่อพนักงาน / PDF',()=>printGeneric('EMPLOYEE LIST',document.querySelector('#search .panel:last-child').innerHTML)],['training','พิมพ์ Training Plan / PDF',()=>printGeneric('TRAINING PLAN',document.getElementById('training').innerHTML)],['onlineExam','พิมพ์รายการรอผลและประวัติ / PDF',()=>printGeneric('EXAM STATUS & HISTORY',document.getElementById('onlineExam').innerHTML)],['skillMatrix','พิมพ์ผลประเมิน / PDF',()=>printGeneric('SKILL ASSESSMENT RECORDS',document.getElementById('skillMatrix').innerHTML)]];map.forEach(([id,text,fn])=>{const page=document.getElementById(id);if(!page||page.querySelector('.universal-print'))return;const b=document.createElement('button');b.className='btn secondary no-print universal-print';b.textContent=text;b.style.marginBottom='10px';b.onclick=fn;page.prepend(b)})}
addUniversalPrintButtons();

const pageDownloadNames={competencyGap:'Competency_Gap_Analysis',organization:'Organization_Chart',section:'Section_Employee_List',sectionChart:'Section_Organization_Chart',add:'Add_Employee_Form',search:'Employee_Search_List',training:'Training_Plan',evaluationPlan:'Evaluation_Plan',onlineExam:'Online_Examination',sectionSkillMatrix:'Section_Skill_Matrix',skillCards:'Employee_Skill_Card',skillMatrix:'Skill_Matrix_Examination',exportCenter:'Export_Center'};
function pdfSafeName(v){return String(v||'Document').trim().replace(/[^A-Za-z0-9ก-๙_-]+/g,'_').replace(/^_+|_+$/g,'')||'Document'}
function downloadBlobFile(blob,fileName){
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=fileName;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1200);
}
function csvCell(v){const t=String(v??'').replace(/"/g,'""');return `"${t}"`}
function downloadSelectedSectionSkillData(){
  const sec=smSection?.value||'';
  if(!sec)return alert('กรุณาเลือก Section');
  const list=employees.filter(e=>normalizedSection(e.section)===normalizedSection(sec));
  if(!list.length)return alert('ไม่พบข้อมูลพนักงานใน Section ที่เลือก');
  const skills=sectionSkills[sec]||sectionSkills[Object.keys(sectionSkills).find(k=>normalizedSection(k)===normalizedSection(sec))]||[];
  const rows=[['No.','Employee ID','Employee Name','Position','Section',...skills,'Last Update','Next Evaluation']];
  list.forEach((e,i)=>{const lv=employeeSkillLevels(e),d=skillDates(e);rows.push([i+1,e.id||'',e.name||'',e.position||'',e.section||sec,...skills.map(x=>Number(lv[x]||1)),d.last,d.next])});
  const csv='\ufeff'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n');
  downloadBlobFile(new Blob([csv],{type:'text/csv;charset=utf-8'}),pdfSafeName(sec+'_Skill_Matrix')+'.csv');
}
function downloadSelectedEmployeeSkillCard(){
  const emp=getCardEmployee();
  if(!emp)return alert('กรุณาเลือกพนักงาน');
  const html=`<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(emp.name||'Employee Skill Card')}</title><style>body{font-family:Arial,"Noto Sans Thai",sans-serif;background:#eef2f7;margin:0;padding:24px;color:#111}.sheet{max-width:1100px;margin:auto;background:#fff;padding:20px;border-radius:14px;box-shadow:0 8px 30px #0002}table{border-collapse:collapse;width:100%}th,td{border:1px solid #bbb;padding:7px}button{padding:10px 16px;margin-bottom:14px}@media print{body{background:#fff;padding:0}.sheet{box-shadow:none;max-width:none}button{display:none}}</style>
<style id="v132-print-layout-fix">
/* V132: correct hierarchy and compact professional Skill Matrix print */
.matrix-report-head{grid-template-columns:72px minmax(0,1fr) 210px!important;min-height:0!important}
.matrix-title-block{min-width:0}.matrix-title-block h1{font-size:24px!important;line-height:1!important;letter-spacing:.2px}.matrix-section-name{font-size:17px;font-weight:800;color:#16457c;margin-top:4px;line-height:1.15}.matrix-subtitle{margin-top:4px!important}.matrix-info-strip{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important;border:1px solid #b9cce3!important;border-radius:8px!important;overflow:hidden!important}.matrix-info-strip>div{min-height:48px!important;border:0!important;border-right:1px solid #d4dfec!important;border-radius:0!important}.matrix-info-strip>div:last-child{border-right:0!important}
@media print{
 @page{size:A4 landscape;margin:5mm!important}
 body.print-section-skill #sectionSkillPrintReport{width:auto!important;padding:0!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport>div{width:100%!important;margin:0!important;padding:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-report-head{display:grid!important;grid-template-columns:15mm minmax(0,1fr) 42mm!important;align-items:center!important;min-height:15mm!important;height:auto!important;padding:1.5mm 2mm!important;margin:0 0 1mm!important;border-radius:1.5mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-company-logo{display:block!important;width:13mm!important;height:11mm!important;object-fit:contain!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-title-block h1{font-size:13pt!important;line-height:1!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-section-name{font-size:9pt!important;margin-top:.7mm!important;line-height:1!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-subtitle{font-size:6pt!important;line-height:1.1!important;margin-top:.7mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-dept-block{font-size:6pt!important;line-height:1.15!important;gap:.5mm!important;text-align:right!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-dept-block b{font-size:6.5pt!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip{display:grid!important;grid-template-columns:repeat(3,1fr)!important;margin:0 0 1mm!important;border-radius:1mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip>div{min-height:9mm!important;padding:1mm 1.5mm!important;display:flex!important;flex-direction:column!important;justify-content:center!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip b{font-size:5.5pt!important;margin-bottom:.4mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip span{font-size:6.2pt!important;line-height:1.1!important}
 body.print-section-skill #sectionSkillPrintReport .skill-table-shell{margin:0!important;padding:0!important}
 body.print-section-skill #sectionSkillPrintReport .criteria-wrap{margin-top:1mm!important}
 body.print-section-skill #sectionSkillPrintReport .report-approval-signatures{margin-top:2mm!important}
}
</style>
</head><body><div class="sheet"><button onclick="window.print()">พิมพ์ / บันทึกเป็น PDF</button>${skillCardHTML(emp)}</div>


<style id="v120-compact-print-criteria">
@media print{
  @page{size:A4 landscape;margin:4mm!important}
  body.print-section-skill #sectionSkillPrintReport{padding:0!important;margin:0!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head{margin:0 0 1.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head h1{font-size:15pt!important;line-height:1.05!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head>div>div{font-size:7pt!important;margin-top:.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-info-strip{margin-bottom:1.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-info-strip>div{padding:1.2mm 2mm!important}

  body.print-section-skill #sectionSkillPrintReport .criteria-wrap{
    break-before:auto!important;page-break-before:auto!important;
    break-inside:avoid!important;page-break-inside:avoid!important;
    margin-top:1.5mm!important;border-radius:1.5mm!important;
  }
  body.print-section-skill #sectionSkillPrintReport .criteria-title{padding:1.2mm!important;font-size:7pt!important;line-height:1.1!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-grid{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card{break-inside:avoid!important;page-break-inside:avoid!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card-head{padding:1.2mm .8mm!important;font-size:6.5pt!important;line-height:1.12!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card-head b{margin-top:.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card ul{margin:1.1mm 1.3mm .8mm 3.4mm!important;padding:0!important;font-size:5.7pt!important;line-height:1.22!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card .criteria-en{margin-top:.7mm!important;padding-top:.8mm!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-note{padding:1.1mm 2mm!important;font-size:5.8pt!important;line-height:1.15!important}
}
</style>



</body></html>`;
  downloadBlobFile(new Blob([html],{type:'text/html;charset=utf-8'}),pdfSafeName('Employee_Skill_Card_'+(emp.id||emp.name))+'.html');
}
const downloadSectionSkillDataBtn=document.getElementById('downloadSectionSkillDataBtn');
if(downloadSectionSkillDataBtn)downloadSectionSkillDataBtn.onclick=downloadSelectedSectionSkillData;
const downloadEmployeeSkillCardBtn=document.getElementById('downloadEmployeeSkillCardBtn');
if(downloadEmployeeSkillCardBtn)downloadEmployeeSkillCardBtn.onclick=downloadSelectedEmployeeSkillCard;

function downloadTextFile(content,fileName,mime='text/html;charset=utf-8'){
  const blob=new Blob(['\ufeff',content],{type:mime});
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=pdfSafeName(fileName);document.body.appendChild(a);a.click();
  setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},1000);
}
function csvEscape(v){const x=String(v??'');return /[",\n\r]/.test(x)?'"'+x.replace(/"/g,'""')+'"':x}
function downloadCsv(rows,fileName){downloadTextFile(rows.map(r=>r.map(csvEscape).join(',')).join('\r\n'),fileName+'.csv','text/csv;charset=utf-8')}
function standaloneHtml(title,node){
  const copy=node.cloneNode(true);copy.style.display='block';copy.classList.remove('page');copy.classList.add('active');
  copy.querySelectorAll('.no-print,.page-download-button,.universal-print,button,script').forEach(el=>el.remove());
  const srcSelects=node.querySelectorAll('select'),srcInputs=node.querySelectorAll('input');
  copy.querySelectorAll('select').forEach((s,i)=>{const src=srcSelects[i];const span=document.createElement('span');span.textContent=src?.selectedOptions?.[0]?.textContent||src?.value||'-';s.replaceWith(span)});
  copy.querySelectorAll('input').forEach((inp,i)=>{const src=srcInputs[i];const span=document.createElement('span');span.textContent=src?.type==='checkbox'?(src.checked?'✓':''):(src?.value||'');inp.replaceWith(span)});
  const styles=[...document.querySelectorAll('style')].map(x=>x.textContent).join('\n');
  return `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>${styles}body{background:#fff;padding:20px}.page{display:block!important}.panel{box-shadow:none;border:1px solid #dbe3ec}.no-print{display:none!important}</style>
<style id="v132-print-layout-fix">
/* V132: correct hierarchy and compact professional Skill Matrix print */
.matrix-report-head{grid-template-columns:72px minmax(0,1fr) 210px!important;min-height:0!important}
.matrix-title-block{min-width:0}.matrix-title-block h1{font-size:24px!important;line-height:1!important;letter-spacing:.2px}.matrix-section-name{font-size:17px;font-weight:800;color:#16457c;margin-top:4px;line-height:1.15}.matrix-subtitle{margin-top:4px!important}.matrix-info-strip{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:0!important;border:1px solid #b9cce3!important;border-radius:8px!important;overflow:hidden!important}.matrix-info-strip>div{min-height:48px!important;border:0!important;border-right:1px solid #d4dfec!important;border-radius:0!important}.matrix-info-strip>div:last-child{border-right:0!important}
@media print{
 @page{size:A4 landscape;margin:5mm!important}
 body.print-section-skill #sectionSkillPrintReport{width:auto!important;padding:0!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport>div{width:100%!important;margin:0!important;padding:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-report-head{display:grid!important;grid-template-columns:15mm minmax(0,1fr) 42mm!important;align-items:center!important;min-height:15mm!important;height:auto!important;padding:1.5mm 2mm!important;margin:0 0 1mm!important;border-radius:1.5mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-company-logo{display:block!important;width:13mm!important;height:11mm!important;object-fit:contain!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-title-block h1{font-size:13pt!important;line-height:1!important;margin:0!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-section-name{font-size:9pt!important;margin-top:.7mm!important;line-height:1!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-subtitle{font-size:6pt!important;line-height:1.1!important;margin-top:.7mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-dept-block{font-size:6pt!important;line-height:1.15!important;gap:.5mm!important;text-align:right!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-dept-block b{font-size:6.5pt!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip{display:grid!important;grid-template-columns:repeat(3,1fr)!important;margin:0 0 1mm!important;border-radius:1mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip>div{min-height:9mm!important;padding:1mm 1.5mm!important;display:flex!important;flex-direction:column!important;justify-content:center!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip b{font-size:5.5pt!important;margin-bottom:.4mm!important}
 body.print-section-skill #sectionSkillPrintReport .matrix-info-strip span{font-size:6.2pt!important;line-height:1.1!important}
 body.print-section-skill #sectionSkillPrintReport .skill-table-shell{margin:0!important;padding:0!important}
 body.print-section-skill #sectionSkillPrintReport .criteria-wrap{margin-top:1mm!important}
 body.print-section-skill #sectionSkillPrintReport .report-approval-signatures{margin-top:2mm!important}
}
</style>
</head><body><h1>${esc(title)}</h1><div>วันที่ดาวน์โหลด ${new Date().toLocaleString('th-TH')}</div><hr>${copy.outerHTML}
<style id="v120-compact-print-criteria">
@media print{
  @page{size:A4 landscape;margin:4mm!important}
  body.print-section-skill #sectionSkillPrintReport{padding:0!important;margin:0!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head{margin:0 0 1.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head h1{font-size:15pt!important;line-height:1.05!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-report-head>div>div{font-size:7pt!important;margin-top:.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-info-strip{margin-bottom:1.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .matrix-info-strip>div{padding:1.2mm 2mm!important}

  body.print-section-skill #sectionSkillPrintReport .criteria-wrap{
    break-before:auto!important;page-break-before:auto!important;
    break-inside:avoid!important;page-break-inside:avoid!important;
    margin-top:1.5mm!important;border-radius:1.5mm!important;
  }
  body.print-section-skill #sectionSkillPrintReport .criteria-title{padding:1.2mm!important;font-size:7pt!important;line-height:1.1!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-grid{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr))!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card{break-inside:avoid!important;page-break-inside:avoid!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card-head{padding:1.2mm .8mm!important;font-size:6.5pt!important;line-height:1.12!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card-head b{margin-top:.5mm!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card ul{margin:1.1mm 1.3mm .8mm 3.4mm!important;padding:0!important;font-size:5.7pt!important;line-height:1.22!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-card .criteria-en{margin-top:.7mm!important;padding-top:.8mm!important}
  body.print-section-skill #sectionSkillPrintReport .criteria-note{padding:1.1mm 2mm!important;font-size:5.8pt!important;line-height:1.15!important}
}
</style>
</body></html>`;
}
async function downloadPrintNodePdf(node,fileName,orientation='landscape'){
  if(!node)return alert('ไม่พบเอกสารสำหรับดาวน์โหลด');
  if(window.html2canvas&&window.jspdf){
    const stage=document.createElement('div');stage.style.cssText='position:fixed;left:-100000px;top:0;z-index:-1;background:#fff;color:#111;padding:24px;width:'+(orientation==='landscape'?'1120px':'790px')+';height:auto;overflow:visible';
    const copy=node.cloneNode(true);copy.style.display='block';copy.classList.remove('page');copy.classList.add('active');copy.querySelectorAll('.no-print,.page-download-button,.universal-print,button').forEach(el=>el.remove());stage.appendChild(copy);document.body.appendChild(stage);
    try{await new Promise(r=>setTimeout(r,120));const canvas=await html2canvas(stage,{scale:1.45,useCORS:true,allowTaint:true,backgroundColor:'#fff',logging:false,windowWidth:stage.scrollWidth,windowHeight:stage.scrollHeight});const {jsPDF}=window.jspdf,pdf=new jsPDF({orientation,unit:'mm',format:'a4'}),pw=pdf.internal.pageSize.getWidth(),ph=pdf.internal.pageSize.getHeight(),m=7,maxW=pw-m*2,maxH=ph-m*2,sourcePageH=Math.max(1,Math.floor(canvas.width*maxH/maxW)),pageCanvas=document.createElement('canvas'),ctx=pageCanvas.getContext('2d');let y=0,page=0;while(y<canvas.height){const h0=Math.min(sourcePageH,canvas.height-y);pageCanvas.width=canvas.width;pageCanvas.height=h0;ctx.fillStyle='#fff';ctx.fillRect(0,0,pageCanvas.width,pageCanvas.height);ctx.drawImage(canvas,0,y,canvas.width,h0,0,0,canvas.width,h0);if(page++)pdf.addPage('a4',orientation);pdf.addImage(pageCanvas.toDataURL('image/jpeg',.92),'JPEG',m,m,maxW,h0*maxW/canvas.width,'','FAST');y+=h0}pdf.save(pdfSafeName(fileName)+'.pdf');showLocalSaveStatus('ดาวน์โหลด PDF ลงเครื่องแล้ว');return}catch(err){console.warn('PDF library failed, using HTML fallback',err)}finally{stage.remove()}
  }
  downloadTextFile(standaloneHtml(fileName,node),pdfSafeName(fileName)+'.html');showLocalSaveStatus('ดาวน์โหลดข้อมูลเป็นไฟล์ HTML แล้ว');
}
async function downloadPageToComputer(pageId){
  const name=pageDownloadNames[pageId]||pageId;
  if(pageId==='search'||pageId==='section'){
    const q=String(document.getElementById('searchInput')?.value||'').trim().toLowerCase();
    const sec=String(window.currentSection||'').trim().toLowerCase();
    const list=employees.filter(e=>{const hay=[e.id,e.name,e.phone,e.section,e.position].join(' ').toLowerCase();return pageId==='search'?(!q||hay.includes(q)):(!sec||String(e.section||'').toLowerCase()===sec)});
    downloadCsv([['Employee ID','Name','Phone','Section','Position','Start Date'],...list.map(e=>[e.id,e.name,e.phone,e.section,e.position,e.startDate])],name);showLocalSaveStatus('ดาวน์โหลด CSV ลงเครื่องแล้ว');return;
  }
  if(pageId==='sectionSkillMatrix'){
    const sec=smSection.value,list=employees.filter(e=>normalizedSection(e.section)===normalizedSection(sec)),skills=sectionSkillNames(sec);
    downloadCsv([['Employee ID','Name','Section','Position',...skills],...list.map(e=>{const lv=employeeSkillLevels(e);return[e.id,e.name,e.section,e.position,...skills.map(k=>lv[k]||1)]})],sec+'_Skill_Matrix');showLocalSaveStatus('ดาวน์โหลด Skill Matrix CSV แล้ว');return;
  }
  let node=document.getElementById(pageId);if(pageId==='organization'){buildOrganizationPrintReport();node=document.getElementById('organizationPrintReport')}else if(pageId==='skillCards'){const emp=getCardEmployee();if(!emp)return alert('กรุณาเลือกพนักงาน');document.getElementById('skillCardPrintReport').innerHTML=`<div class="skill-card-grid">${skillCardHTML(emp)}</div>`;node=document.getElementById('skillCardPrintReport')}
  await downloadPrintNodePdf(node,name,'landscape');
}
function addDownloadButtonEveryPage(){document.querySelectorAll('main .page').forEach(page=>{if(page.querySelector('.page-download-button'))return;const wrap=document.createElement('div');wrap.className='report-actions no-print';wrap.style.cssText='display:flex;justify-content:flex-end;margin-bottom:10px';const b=document.createElement('button');b.type='button';b.className='btn page-download-button';b.textContent='⬇️ ดาวน์โหลดข้อมูลลงเครื่อง';b.onclick=()=>downloadPageToComputer(page.id);wrap.appendChild(b);page.prepend(wrap)})}
addDownloadButtonEveryPage();
/* v80 removed premature renderAll wrapper */

// ===== v16 QR EMPLOYEE SECTION SKILL VIEW =====
function qrSkillViewRequested(){return new URLSearchParams(location.search).get('view')==='employee-skill'}
function findQrEmployee(){
  const p=new URLSearchParams(location.search), id=(p.get('employee')||'').trim();
  return employees.find(e=>String(e.id||'').trim()===id)||employees.find(e=>String(e.docId||'').trim()===id);
}
async function downloadQrEmployeeSkillPdf(){
  const card=document.querySelector('#qrEmployeeSkillView .qr-public-card');
  if(!card)return alert('ไม่พบข้อมูล Skill Matrix สำหรับดาวน์โหลด');
  if(!window.html2canvas||!window.jspdf){
    alert('กำลังโหลดระบบ PDF กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่');
    return;
  }
  const btns=card.querySelector('.qr-pdf-actions');
  try{
    if(btns)btns.style.visibility='hidden';
    await new Promise(r=>setTimeout(r,120));
    const canvas=await html2canvas(card,{scale:2,useCORS:true,backgroundColor:'#ffffff',logging:false});
    const {jsPDF}=window.jspdf;
    const pdf=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
    const pageW=pdf.internal.pageSize.getWidth(),pageH=pdf.internal.pageSize.getHeight(),margin=8;
    const maxW=pageW-margin*2,maxH=pageH-margin*2;
    let w=maxW,h=canvas.height*w/canvas.width;
    if(h>maxH){h=maxH;w=canvas.width*h/canvas.height}
    pdf.addImage(canvas.toDataURL('image/jpeg',0.95),'JPEG',(pageW-w)/2,margin,w,h,'','FAST');
    const emp=findQrEmployee();
    const safe=String((emp&&emp.id)||(emp&&emp.name)||'employee').replace(/[^a-zA-Z0-9_-]+/g,'_');
    pdf.save(`Skill_Matrix_${safe}.pdf`);
  }catch(err){
    console.error(err);alert('ไม่สามารถดาวน์โหลด PDF ได้ กรุณาลองใหม่อีกครั้ง');
  }finally{if(btns)btns.style.visibility='visible'}
}
function renderQrEmployeeSkillView(){
  if(!qrSkillViewRequested())return false;
  const emp=findQrEmployee();
  document.querySelectorAll('header,nav,.sidebar,.topbar,.app-nav,.no-print').forEach(x=>x.style.display='none');
  document.querySelectorAll('main .page').forEach(x=>x.classList.remove('active'));
  let page=document.getElementById('qrEmployeeSkillView');
  if(!page){
    page=document.createElement('section');page.id='qrEmployeeSkillView';page.className='page active';
    const main=document.querySelector('main')||document.body;main.appendChild(page);
  }
  page.classList.add('active');
  if(!emp){page.innerHTML='<div class="panel"><h2>ไม่พบข้อมูลพนักงาน</h2><p>กรุณาตรวจสอบ QR Code หรือรหัสพนักงาน</p></div>';return true}
  const levels=employeeSkillLevels(emp),dates=skillDates(emp),skills=sectionSkills[emp.section]||[];
  page.innerHTML=`<div class="panel qr-public-card">
    <div class="qr-public-head"><div><h1>EMPLOYEE SKILL MATRIX</h1><div>${esc(emp.section||'-')}</div></div><div class="qr-pdf-actions no-print"><button class="btn secondary" type="button" onclick="window.print()">พิมพ์</button><button class="btn light" type="button" onclick="downloadQrEmployeeSkillPdf()">ดาวน์โหลด PDF</button></div></div>
    <div class="qr-employee-summary">${avatar(emp,true)}<div><h2>${esc((emp.name||'-').toUpperCase())}</h2><div><b>Emp.ID:</b> ${esc(emp.id||'-')}</div><div><b>Position:</b> ${esc(emp.position||'-')}</div><div><b>Section:</b> ${esc(emp.section||'-')}</div><div><b>Last Update:</b> ${fmt(dates.last)}</div><div><b>Next Update:</b> ${fmt(dates.next)}</div></div></div>
    <div class="skill-legend qr-legend"><div>${levelCircle(1)} ไม่ได้เลย</div><div>${levelCircle(2)} พื้นฐาน</div><div>${levelCircle(3)} ปฏิบัติได้</div><div>${levelCircle(4)} เชี่ยวชาญ</div><div>${levelCircle(5)} ผู้เชี่ยวชาญ/สอนได้</div></div>
    <table class="skill-table qr-one-employee"><thead><tr><th>No.</th><th>ทักษะของ ${esc(emp.section||'Section')}</th><th>ระดับ</th><th>สถานะ</th></tr></thead><tbody>${skills.map((skill,i)=>{const v=levels[skill]||1;return `<tr><td>${i+1}</td><td><b>${esc(skill)}</b></td><td>${levelCircle(v)}</td><td>${v>=3?'<span class="status-approved">ปฏิบัติงานได้</span>':'<span class="status-retest">ต้องพัฒนา</span>'}</td></tr>`}).join('')}</tbody></table>
    <div class="qr-public-note">QR Code นี้แสดงเฉพาะข้อมูล Skill Matrix ของ Section และพนักงานรายนี้เท่านั้น</div>
  </div>`;
  document.title=`Skill Matrix - ${emp.id||emp.name||''}`;
  return true;
}
const qrStyle=document.createElement('style');qrStyle.textContent=`
#qrEmployeeSkillView{max-width:1050px;margin:18px auto;padding:0 12px}.qr-public-card{border:2px solid #12367a}.qr-public-head{display:flex;justify-content:space-between;align-items:center;background:#0c3274;color:white;padding:16px;border-radius:10px 10px 0 0}.qr-public-head h1{margin:0}.qr-pdf-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}.qr-employee-summary{display:grid;grid-template-columns:90px 1fr;gap:18px;align-items:center;padding:18px}.qr-employee-summary .avatar,.qr-employee-summary img{width:82px;height:100px;object-fit:cover}.qr-employee-summary h2{margin:0 0 8px;color:#0c3274}.qr-legend{margin:0 18px 14px}.qr-one-employee{margin-top:8px}.qr-public-note{margin-top:14px;padding:10px;background:#eef4ff;border-radius:8px;text-align:center;font-weight:700}@media(max-width:600px){#qrEmployeeSkillView{margin:0;padding:0}.qr-public-card{border:0;border-radius:0}.qr-public-head{border-radius:0;padding:12px}.qr-public-head h1{font-size:20px}.qr-public-head .btn{font-size:12px;padding:7px}.qr-employee-summary{grid-template-columns:72px 1fr;padding:12px;gap:12px}.qr-employee-summary .avatar,.qr-employee-summary img{width:65px;height:80px}.qr-one-employee th,.qr-one-employee td{padding:7px;font-size:12px}}@media print{#qrEmployeeSkillView{max-width:none;margin:0}.qr-public-head .btn,.qr-pdf-actions{display:none!important}.qr-public-card{border:1px solid #888;box-shadow:none}}
`;document.head.appendChild(qrStyle);
/* v80 removed premature renderAll wrapper */
// ===== END v16 =====

// ===== END v15 =====


const evaluationPlanSeed=[{"id": "CN-10-1", "employeeName": "MR.KITSANA PHOSEE", "section": "CNC", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "CN-10-6", "employeeName": "MR.KITSANA PHOSEE", "section": "CNC", "position": "Operator", "date": "2026-07-06", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "CN-10-14", "employeeName": "MR.KITSANA PHOSEE", "section": "CNC", "position": "Operator", "date": "2026-07-14", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "CN-10-22", "employeeName": "MR.KITSANA PHOSEE", "section": "CNC", "position": "Operator", "date": "2026-07-22", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "CN-10-31", "employeeName": "MR.KITSANA PHOSEE", "section": "CNC", "position": "Operator", "date": "2026-07-31", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-10-3", "employeeName": "MR.DUMRONG PATTAPHI", "section": "Bending", "position": "Operator", "date": "2026-07-03", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-10-7", "employeeName": "MR.DUMRONG PATTAPHI", "section": "Bending", "position": "Operator", "date": "2026-07-07", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-10-13", "employeeName": "MR.DUMRONG PATTAPHI", "section": "Bending", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-10-21", "employeeName": "MR.DUMRONG PATTAPHI", "section": "Bending", "position": "Operator", "date": "2026-07-21", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-10-27", "employeeName": "MR.DUMRONG PATTAPHI", "section": "Bending", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-12-1", "employeeName": "MR.THANAWUT PHISETRIT", "section": "Bending", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-12-8", "employeeName": "MR.THANAWUT PHISETRIT", "section": "Bending", "position": "Operator", "date": "2026-07-08", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-12-18", "employeeName": "MR.THANAWUT PHISETRIT", "section": "Bending", "position": "Operator", "date": "2026-07-18", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-12-30", "employeeName": "MR.THANAWUT PHISETRIT", "section": "Bending", "position": "Operator", "date": "2026-07-30", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-14-2", "employeeName": "MR.THOSSAPHON NUENWAN", "section": "Bending", "position": "Operator", "date": "2026-07-02", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-14-11", "employeeName": "MR.THOSSAPHON NUENWAN", "section": "Bending", "position": "Operator", "date": "2026-07-11", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-14-16", "employeeName": "MR.THOSSAPHON NUENWAN", "section": "Bending", "position": "Operator", "date": "2026-07-16", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-14-25", "employeeName": "MR.THOSSAPHON NUENWAN", "section": "Bending", "position": "Operator", "date": "2026-07-25", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "BE-14-29", "employeeName": "MR.THOSSAPHON NUENWAN", "section": "Bending", "position": "Operator", "date": "2026-07-29", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-10-1", "employeeName": "MR.SONGPHON SIRICHAN", "section": "Stamping", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-10-8", "employeeName": "MR.SONGPHON SIRICHAN", "section": "Stamping", "position": "Operator", "date": "2026-07-08", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-10-13", "employeeName": "MR.SONGPHON SIRICHAN", "section": "Stamping", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-10-25", "employeeName": "MR.SONGPHON SIRICHAN", "section": "Stamping", "position": "Operator", "date": "2026-07-25", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-10-31", "employeeName": "MR.SONGPHON SIRICHAN", "section": "Stamping", "position": "Operator", "date": "2026-07-31", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-12-4", "employeeName": "MR.SALOEMWUT PANGPRALHON", "section": "Stamping", "position": "Operator", "date": "2026-07-04", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-12-10", "employeeName": "MR.SALOEMWUT PANGPRALHON", "section": "Stamping", "position": "Operator", "date": "2026-07-10", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-12-15", "employeeName": "MR.SALOEMWUT PANGPRALHON", "section": "Stamping", "position": "Operator", "date": "2026-07-15", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-12-20", "employeeName": "MR.SALOEMWUT PANGPRALHON", "section": "Stamping", "position": "Operator", "date": "2026-07-20", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-12-27", "employeeName": "MR.SALOEMWUT PANGPRALHON", "section": "Stamping", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-14-3", "employeeName": "MR.SUCHT PHONMANI", "section": "Stamping", "position": "Operator", "date": "2026-07-03", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-14-9", "employeeName": "MR.SUCHT PHONMANI", "section": "Stamping", "position": "Operator", "date": "2026-07-09", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-14-13", "employeeName": "MR.SUCHT PHONMANI", "section": "Stamping", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-14-23", "employeeName": "MR.SUCHT PHONMANI", "section": "Stamping", "position": "Operator", "date": "2026-07-23", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-14-27", "employeeName": "MR.SUCHT PHONMANI", "section": "Stamping", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-16-2", "employeeName": "MR.JAKKARIN KASAN", "section": "Stamping", "position": "Operator", "date": "2026-07-02", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-16-6", "employeeName": "MR.JAKKARIN KASAN", "section": "Stamping", "position": "Operator", "date": "2026-07-06", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-16-14", "employeeName": "MR.JAKKARIN KASAN", "section": "Stamping", "position": "Operator", "date": "2026-07-14", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-16-21", "employeeName": "MR.JAKKARIN KASAN", "section": "Stamping", "position": "Operator", "date": "2026-07-21", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-16-30", "employeeName": "MR.JAKKARIN KASAN", "section": "Stamping", "position": "Operator", "date": "2026-07-30", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-18-3", "employeeName": "MR.NATTHAWUT SAY", "section": "Stamping", "position": "Operator", "date": "2026-07-03", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-18-11", "employeeName": "MR.NATTHAWUT SAY", "section": "Stamping", "position": "Operator", "date": "2026-07-11", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-18-16", "employeeName": "MR.NATTHAWUT SAY", "section": "Stamping", "position": "Operator", "date": "2026-07-16", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-18-25", "employeeName": "MR.NATTHAWUT SAY", "section": "Stamping", "position": "Operator", "date": "2026-07-25", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-18-29", "employeeName": "MR.NATTHAWUT SAY", "section": "Stamping", "position": "Operator", "date": "2026-07-29", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-20-1", "employeeName": "MR.KIATTISAK LAPHET", "section": "Stamping", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-20-7", "employeeName": "MR.KIATTISAK LAPHET", "section": "Stamping", "position": "Operator", "date": "2026-07-07", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-20-13", "employeeName": "MR.KIATTISAK LAPHET", "section": "Stamping", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-20-23", "employeeName": "MR.KIATTISAK LAPHET", "section": "Stamping", "position": "Operator", "date": "2026-07-23", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-20-31", "employeeName": "MR.KIATTISAK LAPHET", "section": "Stamping", "position": "Operator", "date": "2026-07-31", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-22-4", "employeeName": "MR.TANIN POINOG", "section": "Stamping", "position": "Operator", "date": "2026-07-04", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-22-8", "employeeName": "MR.TANIN POINOG", "section": "Stamping", "position": "Operator", "date": "2026-07-08", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-22-14", "employeeName": "MR.TANIN POINOG", "section": "Stamping", "position": "Operator", "date": "2026-07-14", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-22-21", "employeeName": "MR.TANIN POINOG", "section": "Stamping", "position": "Operator", "date": "2026-07-21", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-22-27", "employeeName": "MR.TANIN POINOG", "section": "Stamping", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-24-2", "employeeName": "MR.SATTHAWAT KHANKHOI", "section": "Stamping", "position": "Operator", "date": "2026-07-02", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-24-10", "employeeName": "MR.SATTHAWAT KHANKHOI", "section": "Stamping", "position": "Operator", "date": "2026-07-10", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-24-18", "employeeName": "MR.SATTHAWAT KHANKHOI", "section": "Stamping", "position": "Operator", "date": "2026-07-18", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-24-24", "employeeName": "MR.SATTHAWAT KHANKHOI", "section": "Stamping", "position": "Operator", "date": "2026-07-24", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-24-29", "employeeName": "MR.SATTHAWAT KHANKHOI", "section": "Stamping", "position": "Operator", "date": "2026-07-29", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-26-4", "employeeName": "MR.CHANCHAI SAEYANG", "section": "Stamping", "position": "Operator", "date": "2026-07-04", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-26-7", "employeeName": "MR.CHANCHAI SAEYANG", "section": "Stamping", "position": "Operator", "date": "2026-07-07", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-26-15", "employeeName": "MR.CHANCHAI SAEYANG", "section": "Stamping", "position": "Operator", "date": "2026-07-15", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-26-20", "employeeName": "MR.CHANCHAI SAEYANG", "section": "Stamping", "position": "Operator", "date": "2026-07-20", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-26-31", "employeeName": "MR.CHANCHAI SAEYANG", "section": "Stamping", "position": "Operator", "date": "2026-07-31", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-28-1", "employeeName": "MR.HANNARONG SEECHOMPOO", "section": "Stamping", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-28-9", "employeeName": "MR.HANNARONG SEECHOMPOO", "section": "Stamping", "position": "Operator", "date": "2026-07-09", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-28-13", "employeeName": "MR.HANNARONG SEECHOMPOO", "section": "Stamping", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-28-25", "employeeName": "MR.HANNARONG SEECHOMPOO", "section": "Stamping", "position": "Operator", "date": "2026-07-25", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "ST-28-27", "employeeName": "MR.HANNARONG SEECHOMPOO", "section": "Stamping", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-10-4", "employeeName": "MR.KIADTISAK CHUPAMANO", "section": "Welding", "position": "Operator", "date": "2026-07-04", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-10-7", "employeeName": "MR.KIADTISAK CHUPAMANO", "section": "Welding", "position": "Operator", "date": "2026-07-07", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-10-18", "employeeName": "MR.KIADTISAK CHUPAMANO", "section": "Welding", "position": "Operator", "date": "2026-07-18", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-10-22", "employeeName": "MR.KIADTISAK CHUPAMANO", "section": "Welding", "position": "Operator", "date": "2026-07-22", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-10-27", "employeeName": "MR.KIADTISAK CHUPAMANO", "section": "Welding", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-12-3", "employeeName": "MR.NARATHIP BOONPUM", "section": "Welding", "position": "Operator", "date": "2026-07-03", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-12-6", "employeeName": "MR.NARATHIP BOONPUM", "section": "Welding", "position": "Operator", "date": "2026-07-06", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-12-15", "employeeName": "MR.NARATHIP BOONPUM", "section": "Welding", "position": "Operator", "date": "2026-07-15", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-12-20", "employeeName": "MR.NARATHIP BOONPUM", "section": "Welding", "position": "Operator", "date": "2026-07-20", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-12-29", "employeeName": "MR.NARATHIP BOONPUM", "section": "Welding", "position": "Operator", "date": "2026-07-29", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-14-1", "employeeName": "MR.WANCHANA DEERODRAM", "section": "Welding", "position": "Operator", "date": "2026-07-01", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-14-9", "employeeName": "MR.WANCHANA DEERODRAM", "section": "Welding", "position": "Operator", "date": "2026-07-09", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-14-16", "employeeName": "MR.WANCHANA DEERODRAM", "section": "Welding", "position": "Operator", "date": "2026-07-16", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-14-25", "employeeName": "MR.WANCHANA DEERODRAM", "section": "Welding", "position": "Operator", "date": "2026-07-25", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-14-27", "employeeName": "MR.WANCHANA DEERODRAM", "section": "Welding", "position": "Operator", "date": "2026-07-27", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-16-2", "employeeName": "MR.APISIT KEOISUWAN", "section": "Welding", "position": "Operator", "date": "2026-07-02", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-16-10", "employeeName": "MR.APISIT KEOISUWAN", "section": "Welding", "position": "Operator", "date": "2026-07-10", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-16-13", "employeeName": "MR.APISIT KEOISUWAN", "section": "Welding", "position": "Operator", "date": "2026-07-13", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-16-21", "employeeName": "MR.APISIT KEOISUWAN", "section": "Welding", "position": "Operator", "date": "2026-07-21", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}, {"id": "WE-16-31", "employeeName": "MR.APISIT KEOISUWAN", "section": "Welding", "position": "Operator", "date": "2026-07-31", "evaluationType": "Routine Job Observation", "evaluator": "", "status": "PLANNED", "score": null, "result": "", "source": "07-2026.xlsx"}];
const observationChecklist=[["Standard Operation", "ปฏิบัติตามขั้นตอน WI"], ["Standard Operation", "ปฏิบัติตาม Key Point ของ WI"], ["Standard Operation", "ทำงานภายในเวลามาตรฐาน"], ["Safety", "ไม่มีการเคลื่อนไหวที่เป็นอันตราย"], ["Safety", "ใช้อุปกรณ์ป้องกันตาม WI"], ["Safety", "สภาพพื้นที่ทำงานและ 5S"], ["Safety", "ตรวจสอบอุปกรณ์ Safety"], ["Equipment", "อุปกรณ์ไม่มีความเสียหายหรือเสียงผิดปกติ"], ["Equipment", "ตรวจเช็คอุปกรณ์ก่อนใช้งาน"], ["Quality", "ตรวจ First Piece ก่อนเริ่มงาน"], ["Quality", "Part ตรงกับ Label"], ["Quality", "ตรวจระหว่างกระบวนการตามความถี่"], ["Quality", "เข้าใจจุดสำคัญ SC Point"], ["Quality", "บันทึกผลการตรวจครบถ้วน"], ["Work Efficiency", "ไม่มีการเคลื่อนไหวหรือเดินสูญเปล่า"], ["Work Efficiency", "ลดการรอคอยและ Delay"], ["Ergonomics", "ท่าทางการทำงานเหมาะสม"], ["Ergonomics", "ภาระงานเหมาะสม"], ["Ergonomics", "สภาพแวดล้อม แสงและเสียงเหมาะสม"]];
let evaluationPlans=JSON.parse(localStorage.getItem('evaluationPlansV37')||'null')||evaluationPlanSeed;
let activeEvaluationId='';
function saveEvaluationPlans(){localStorage.setItem('evaluationPlansV37',JSON.stringify(evaluationPlans));}
function evaluationDisplayStatus(x){if(x.status==='COMPLETED')return x.result==='PASS'?'COMPLETED':'FAILED';if(new Date(x.date+'T23:59:59')<new Date())return 'OVERDUE';return x.status||'PLANNED';}
function populateEvaluationDropdowns(){
 const empSel=document.getElementById('evalEmployee'),secSel=document.getElementById('evalSection'),ev1=document.getElementById('evalEvaluator'),ev2=document.getElementById('observationEvaluator');if(!empSel)return;
 const cur=empSel.value;empSel.innerHTML='<option value="">เลือกพนักงาน</option>'+employees.slice().sort((a,b)=>(a.name||'').localeCompare(b.name||'')).map(e=>`<option value="${esc(e.id||e.name)}">${esc(e.id||'-')} — ${esc((e.name||'').toUpperCase())}</option>`).join('');empSel.value=cur;
 secSel.innerHTML=sections.map(s=>`<option>${esc(s)}</option>`).join('');
 const evaluators=employees.filter(e=>['Production Manager','Production Supervisor','Leader','Production Engineer','Engineer'].some(p=>(e.position||'').includes(p)));
 const opts='<option value="">เลือกผู้ประเมิน</option>'+evaluators.map(e=>`<option>${esc((e.name||'').toUpperCase())}</option>`).join('');ev1.innerHTML=opts;ev2.innerHTML=opts;
}
function renderEvaluationPlan(){
 const body=document.getElementById('evalRows');if(!body)return;populateEvaluationDropdowns();
 const sec=document.getElementById('evalFilterSection').value,st=document.getElementById('evalFilterStatus').value,month=document.getElementById('evalFilterMonth').value,q=document.getElementById('evalSearch').value.trim().toLowerCase();
 const rows=evaluationPlans.filter(x=>(sec==='ALL'||x.section===sec)&&(!month||x.date.startsWith(month))&&(!q||(x.employeeName||'').toLowerCase().includes(q))).filter(x=>st==='ALL'||evaluationDisplayStatus(x)===st).sort((a,b)=>a.date.localeCompare(b.date)||a.employeeName.localeCompare(b.employeeName));
 const counts={total:rows.length,planned:0,done:0,failed:0,overdue:0};rows.forEach(x=>{const s=evaluationDisplayStatus(x);if(s==='PLANNED')counts.planned++;if(s==='COMPLETED')counts.done++;if(s==='FAILED')counts.failed++;if(s==='OVERDUE')counts.overdue++;});
 document.getElementById('evalKpi').innerHTML=`<div class="stat"><span>ทั้งหมด</span><b>${counts.total}</b></div><div class="stat"><span>รอประเมิน</span><b>${counts.planned}</b></div><div class="stat"><span>ประเมินแล้ว</span><b>${counts.done}</b></div><div class="stat"><span>ไม่ผ่าน</span><b>${counts.failed}</b></div><div class="stat"><span>เกินกำหนด</span><b>${counts.overdue}</b></div>`;
 body.innerHTML=rows.length?rows.map(x=>{const s=evaluationDisplayStatus(x),cls=s==='COMPLETED'?'eval-done':s==='FAILED'?'eval-fail':s==='OVERDUE'?'eval-overdue':'eval-planned';return `<tr><td>${esc(fmt(x.date))}</td><td>${esc(x.employeeName)}</td><td>${esc(x.section)}</td><td>${esc(x.evaluationType)}</td><td>${esc(x.evaluator||'-')}</td><td>${x.score==null?'-':x.score+'%'}</td><td>${esc(x.result||'-')}</td><td><span class="eval-status ${cls}">${s}</span></td><td><div class="eval-actions"><button class="btn secondary" onclick="window.startJobObservation('${x.id}')">เริ่มประเมิน</button><button class="btn danger admin-only ${isAdmin?'':'hidden'}" onclick="window.deleteEvaluation('${x.id}')">ลบ</button></div></td></tr>`;}).join(''):'<tr><td colspan="9" class="empty">ไม่พบแผนประเมิน</td></tr>';
}
window.startJobObservation=id=>{const x=evaluationPlans.find(a=>a.id===id);if(!x)return;activeEvaluationId=id;document.getElementById('observationPanel').classList.remove('hidden');document.getElementById('observationTitle').textContent='Job Observation — '+x.employeeName;document.getElementById('observationMeta').textContent=`${x.section} · ${fmt(x.date)} · ${x.evaluationType}`;document.getElementById('observationEvaluator').value=x.evaluator||'';document.getElementById('observationNote').value=x.note||'';const saved=x.checks||{};document.getElementById('observationChecks').innerHTML=observationChecklist.map((a,i)=>`<div class="check-row"><div><b>${i+1}. ${esc(a[1])}</b><div class="exam-note">${esc(a[0])}</div></div><select class="obs-grade" data-i="${i}"><option value="GOOD">Good / ดี</option><option value="GUIDANCE">Guidance / ต้องแนะนำ</option><option value="COUNTERMEASURE">Countermeasure / ต้องแก้ไข</option></select><input class="obs-note" data-i="${i}" placeholder="หมายเหตุ"></div>`).join('');document.querySelectorAll('.obs-grade').forEach(el=>{el.value=(saved[el.dataset.i]||{}).grade||'GOOD';el.onchange=calcObservationScore;});document.querySelectorAll('.obs-note').forEach(el=>el.value=(saved[el.dataset.i]||{}).note||'');calcObservationScore();document.getElementById('observationPanel').scrollIntoView({behavior:'smooth'});};
function calcObservationScore(){const grades=[...document.querySelectorAll('.obs-grade')].map(x=>x.value),points=grades.reduce((s,g)=>s+(g==='GOOD'?100:g==='GUIDANCE'?50:0),0),score=grades.length?Math.round(points/grades.length):0,criticalFail=[3,4,6].some(i=>grades[i]==='COUNTERMEASURE'),pass=score>=80&&!criticalFail;document.getElementById('observationScore').value=score+'%';document.getElementById('observationResult').value=pass?'PASS':'FAIL';return {score,pass};}
window.deleteEvaluation=id=>{if(!isAdmin)return alert('กรุณา Login เป็น Admin');if(!confirm('ลบรายการนี้หรือไม่?'))return;evaluationPlans=evaluationPlans.filter(x=>x.id!==id);saveEvaluationPlans();renderEvaluationPlan();};
document.getElementById('evalEmployee').onchange=e=>{const emp=employees.find(x=>String(x.id||x.name)===e.target.value);if(emp)document.getElementById('evalSection').value=emp.section||'';};
document.getElementById('evalPlanForm').onsubmit=e=>{e.preventDefault();if(!isAdmin)return alert('กรุณา Login เป็น Admin');const emp=employees.find(x=>String(x.id||x.name)===document.getElementById('evalEmployee').value);if(!emp)return alert('เลือกพนักงาน');evaluationPlans.push({id:'EV-'+Date.now(),employeeId:emp.id||'',employeeName:(emp.name||'').toUpperCase(),section:document.getElementById('evalSection').value,position:emp.position||'',date:document.getElementById('evalDate').value,evaluationType:document.getElementById('evalType').value,evaluator:document.getElementById('evalEvaluator').value,status:document.getElementById('evalStatus').value,score:null,result:''});saveEvaluationPlans();e.target.reset();renderEvaluationPlan();};
['evalFilterSection','evalFilterStatus','evalFilterMonth'].forEach(id=>document.getElementById(id).onchange=renderEvaluationPlan);document.getElementById('evalSearch').oninput=renderEvaluationPlan;
document.getElementById('closeObservation').onclick=()=>document.getElementById('observationPanel').classList.add('hidden');
document.getElementById('saveObservation').onclick=()=>{if(!isAdmin)return alert('กรุณา Login เป็น Admin');const x=evaluationPlans.find(a=>a.id===activeEvaluationId);if(!x)return;const r=calcObservationScore(),checks={};document.querySelectorAll('.obs-grade').forEach(el=>checks[el.dataset.i]={grade:el.value,note:document.querySelector(`.obs-note[data-i="${el.dataset.i}"]`).value});Object.assign(x,{checks,score:r.score,result:r.pass?'PASS':'FAIL',status:'COMPLETED',evaluator:document.getElementById('observationEvaluator').value,note:document.getElementById('observationNote').value,completedAt:new Date().toISOString()});saveEvaluationPlans();renderEvaluationPlan();alert('บันทึกผล Job Observation แล้ว');};
document.getElementById('evalPrintBtn').onclick=()=>printGeneric('EVALUATION PLAN / JOB OBSERVATION PLAN',document.getElementById('evaluationPlan').innerHTML);

const employeeSearchInput=document.getElementById('searchInput');if(employeeSearchInput){['input','keyup','change','search'].forEach(evt=>employeeSearchInput.addEventListener(evt,renderSearch));}
function orgCardClass(position){
 const p=String(position||'').toLowerCase();
 if(p.includes('manager'))return 'manager';
 if(p.includes('supervisor'))return 'supervisor';
 if(p.includes('leader'))return 'leader';
 if(p.includes('engineer'))return 'engineer';
 if(p.includes('technician'))return 'technician';
 return 'operator';
}
function normalizeEmployeeShift(e){
 const raw=String((e&&((e.shift||e.workShift||e.shiftName||e.team)))||'').trim().toUpperCase();
 if(raw==='A'||raw==='SHIFT A'||raw==='กะ A'||raw==='กะA')return 'A';
 if(raw==='B'||raw==='SHIFT B'||raw==='กะ B'||raw==='กะB')return 'B';
 return 'UNASSIGNED';
}
function renderAllOrganizationChart(){
 const host=document.getElementById('allOrganizationChart');
 if(!host)return;
 const list=Array.isArray(employees)?employees.filter(Boolean):[];
 if(!list.length){host.innerHTML='<div class="empty" style="padding:80px 20px">ยังไม่มีข้อมูลพนักงาน</div>';return;}
 const rank=p=>{const i=JOB_ORDER.indexOf(String(p||'').trim());return i<0?999:i};
 const senior=(a,b)=>{const ra=rank(a.position),rb=rank(b.position);if(ra!==rb)return ra-rb;const da=Date.parse(a.startDate||'9999-12-31'),db=Date.parse(b.startDate||'9999-12-31');if(da!==db)return da-db;return String(a.id||'').localeCompare(String(b.id||''),undefined,{numeric:true})};
 const managers=list.filter(e=>String(e.position||'').toLowerCase().includes('production manager')).sort(senior);
 const manager=managers[0]||list.slice().sort(senior)[0];
 const filterEl=document.getElementById('organizationShiftFilter');
 const selected=(filterEl&&filterEl.value)||'ALL';
 const shiftLabel=e=>{const sh=normalizeEmployeeShift(e);return sh==='A'?'<span class="org-shift-badge">กะ A</span>':sh==='B'?'<span class="org-shift-badge shift-b">กะ B</span>':'<span class="org-shift-badge unassigned">ไม่ระบุกะ</span>'};
 const card=(e,showShift)=>`<div class="org-mini-card ${orgCardClass(e.position)}"><img class="org-mini-photo" src="${e.photoData||placeholderPhoto}" alt=""><div class="org-mini-name">${esc(e.name||e.thaiName||'-')}</div><div class="org-mini-id">${esc(e.id||'-')}</div><div class="org-mini-position">${esc(e.position||'-')}</div>${showShift?shiftLabel(e):''}</div>`;
 const allSections=[...Object.keys(structures),...[...new Set(list.map(e=>String(e.section||'').trim()).filter(Boolean))].filter(sec=>!Object.keys(structures).some(x=>sameSection(x,sec)))];
 function sectionBranch(sec,shift,showShift){
   const group=list.filter(e=>e!==manager&&sameSection(e.section,sec)&&(shift==='ALL'||normalizeEmployeeShift(e)===shift)).sort(senior);
   if(!group.length)return '';
   const positions=[...new Set(group.map(e=>String(e.position||'').trim()).filter(Boolean))].sort((a,b)=>rank(a)-rank(b)||a.localeCompare(b));
   return `<div class="org-section-branch"><div class="org-section-heading" onclick="document.getElementById('chartSectionFilter').value='${esc(sec)}';document.querySelector('[data-page=sectionChart]').click();setTimeout(()=>renderSectionChart('${esc(sec)}'),0)">${esc(sec)}<small>${esc(thai[sec]||'')} · ${group.length} คน</small></div>${positions.map(pos=>`<div class="org-role-group"><div class="org-role-label">${esc(pos)}</div><div class="org-people-grid">${group.filter(e=>String(e.position||'').trim()===pos).map(e=>card(e,showShift)).join('')}</div></div>`).join('')}</div>`;
 }
 function combinedProduction(){
   const branches=allSections.map(sec=>sectionBranch(sec,'ALL',true)).filter(Boolean).join('');
   const aCount=list.filter(e=>e!==manager&&normalizeEmployeeShift(e)==='A').length;
   const bCount=list.filter(e=>e!==manager&&normalizeEmployeeShift(e)==='B').length;
   const uCount=list.filter(e=>e!==manager&&normalizeEmployeeShift(e)==='UNASSIGNED').length;
   return `<div class="production-org-summary"><span>พนักงานทั้งหมด ${Math.max(0,list.length-1)} คน</span><span>กะ A ${aCount} คน</span><span>กะ B ${bCount} คน</span>${uCount?`<span>ไม่ระบุกะ ${uCount} คน</span>`:''}<span>${allSections.filter(sec=>list.some(e=>e!==manager&&sameSection(e.section,sec))).length} Sections</span></div><div class="production-org-branches">${branches||'<div class="empty">ยังไม่มีข้อมูล Section</div>'}</div>`;
 }
 function shiftColumn(shift,title,cls){
   const branches=allSections.map(sec=>sectionBranch(sec,shift,false)).filter(Boolean).join('');
   const count=list.filter(e=>e!==manager&&normalizeEmployeeShift(e)===shift).length;
   return `<section class="shift-org-column ${cls}"><div class="shift-org-title ${cls}">${title} <small>(${count} คน)</small></div><div class="shift-section-grid">${branches||'<div class="empty">ยังไม่มีพนักงานในกะนี้</div>'}</div></section>`;
 }
 let content='';
 if(selected==='ALL')content=combinedProduction();
 else if(selected==='A')content=`<div class="shift-org-columns">${shiftColumn('A','SHIFT A / กะ A','shift-a')}</div>`;
 else if(selected==='B')content=`<div class="shift-org-columns">${shiftColumn('B','SHIFT B / กะ B','shift-b')}</div>`;
 else content=`<div class="shift-org-columns">${shiftColumn('UNASSIGNED','ยังไม่ระบุกะ','unassigned')}</div>`;
 host.innerHTML=`<div class="all-org-canvas"><div class="all-org-manager">${card(manager,false)}</div>${content}</div>`;
 const sc=document.getElementById('sectionCount');if(sc)sc.textContent=new Set(list.map(e=>String(e.section||'').trim()).filter(Boolean)).size;
}
const organizationShiftFilter=document.getElementById('organizationShiftFilter');if(organizationShiftFilter)organizationShiftFilter.onchange=renderAllOrganizationChart;

window.addEventListener('load',()=>setTimeout(()=>{try{renderSearch();renderSectionChart((document.getElementById('chartSectionFilter')||{}).value||'Stamping Section')}catch(err){console.error('Final employee page refresh failed:',err)}},100));function renderAll(){
 const safeRender=(name,fn)=>{try{fn()}catch(err){console.error(name+' render failed:',err)}};
 // Critical employee pages render first and independently.
 safeRender('Search Employee',()=>renderSearch());
 safeRender('Section Organization Chart',()=>renderSectionChart((document.getElementById('chartSectionFilter')||{}).value||'Stamping Section'));
 safeRender('Section View',()=>renderSection((document.getElementById('sectionFilter')||{}).value||'Stamping Section'));
 safeRender('Organization',()=>renderOrg());
 safeRender('All Organization Chart',()=>renderAllOrganizationChart());
 safeRender('Competency Gap',()=>renderCompetencyGap());
 safeRender('Training Plan',()=>renderTrainingPlan());
 safeRender('Exam Employees',()=>renderExamEmployees());
 safeRender('Online Exam Employees',()=>renderOnlineExamEmployees());
 safeRender('Online Exam History',()=>renderOnlineExamHistory());
 safeRender('Practical Test',()=>renderPracticalTest());
 safeRender('Exam Lock',()=>refreshExamLock());
 safeRender('Skill Assessments',()=>renderSkillAssessments());
 safeRender('Exam Approvals',()=>renderExamApprovals());
 safeRender('Auth UI',()=>updateAuthUI(auth&&auth.currentUser));
 const examViewerNoteEl=document.getElementById('examViewerNote');if(examViewerNoteEl)examViewerNoteEl.classList.toggle('hidden',isAdmin);
 safeRender('Common Dropdowns',()=>refreshCommonDropdowns());
 safeRender('Section Skill Matrix',()=>renderSectionSkillMatrix());
 safeRender('Skill Card',()=>{refreshSkillCardEmployees();renderSkillCardPreview()});
 safeRender('QR Skill',()=>renderQrEmployeeSkillView());
}
renderAll();
setInterval(renderAll,3600000);

// ===== v28 EXPORT CENTER =====
function exportSafeName(v){return String(v||'file').trim().replace(/[^A-Za-z0-9ก-๙_-]+/g,'_').replace(/^_+|_+$/g,'')||'file'}
function exportSetStatus(t,busy=false){const el=document.getElementById('exportStatus');if(el)el.textContent=t;const page=document.getElementById('exportCenter');if(page)page.classList.toggle('export-working',busy)}
function exportDownloadBlob(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},800)}
function exportEmployeesRows(){return employees.map((e,i)=>({No:i+1,'Employee ID':e.id||'','Name':e.name||'','Section':e.section||'','Position':e.position||'','Phone':e.phone||'','Start Date':e.startDate||'','Machine':e.assignedMachine||'','Skill Approved By':e.skillApprovedBy||'','Skill Updated At':e.skillUpdatedAt||''}))}
function exportCsv(rows){if(!rows.length)return '';const hs=Object.keys(rows[0]);const q=v=>'"'+String(v??'').replace(/"/g,'""')+'"';return '\ufeff'+[hs.map(q).join(','),...rows.map(r=>hs.map(h=>q(r[h])).join(','))].join('\r\n')}
function exportEmployeesCsvBlob(){return new Blob([exportCsv(exportEmployeesRows())],{type:'text/csv;charset=utf-8'})}
function exportEmployeesXlsxBlob(){if(!window.XLSX)throw new Error('ไม่พบระบบ Excel');const wb=XLSX.utils.book_new(),ws=XLSX.utils.json_to_sheet(exportEmployeesRows());XLSX.utils.book_append_sheet(wb,ws,'Employees');const out=XLSX.write(wb,{bookType:'xlsx',type:'array'});return new Blob([out],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
function exportSkillMatrixRows(){const rows=[];employees.forEach(e=>{const lv=employeeSkillLevels(e),skills=Object.keys(lv),acc=employeeAcceptance(e,skills);Object.entries(lv).forEach(([skill,level])=>rows.push({'Employee ID':e.id||'','Name':e.name||'','Section':e.section||'','Position':e.position||'','Skill':skill,'Level':Number(level)||1,'Total Skill Score':acc.score??'','Acceptance Level':acc.level?'A'+acc.level:'','Work Authorization':acc.work||'รอผลการประเมิน','Last Update':e.skillUpdatedAt||'','Approved By':e.skillApprovedBy||''}))});return rows}
function exportSkillMatrixXlsxBlob(){if(!window.XLSX)throw new Error('ไม่พบระบบ Excel');const wb=XLSX.utils.book_new(),ws=XLSX.utils.json_to_sheet(exportSkillMatrixRows());XLSX.utils.book_append_sheet(wb,ws,'Skill Matrix');const out=XLSX.write(wb,{bookType:'xlsx',type:'array'});return new Blob([out],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
async function exportNodeCanvas(node,orientation='landscape'){const canvas=await html2canvas(node,{scale:1.7,useCORS:true,backgroundColor:'#ffffff',logging:false,windowWidth:Math.max(node.scrollWidth,1200)});const {jsPDF}=window.jspdf,pdf=new jsPDF({orientation,unit:'mm',format:'a4'}),pw=pdf.internal.pageSize.getWidth(),ph=pdf.internal.pageSize.getHeight(),m=7,maxW=pw-m*2,maxH=ph-m*2;let w=maxW,h=canvas.height*w/canvas.width;if(h>maxH){h=maxH;w=canvas.width*h/canvas.height}pdf.addImage(canvas.toDataURL('image/jpeg',.93),'JPEG',(pw-w)/2,m,w,h,'','FAST');return pdf}
async function exportHtmlPdfBlob(title,html,orientation='landscape'){
 const wrap=document.createElement('div');wrap.style.cssText='position:fixed;left:-100000px;top:0;width:1120px;background:white;padding:24px;z-index:-1';wrap.innerHTML=`<div style="font-family:Segoe UI,Tahoma,sans-serif"><h1 style="color:#1f4e79;margin:0 0 6px">${esc(title)}</h1><div style="margin-bottom:14px">วันที่ ${new Date().toLocaleDateString('th-TH')}</div>${html}</div>`;document.body.appendChild(wrap);try{const pdf=await exportNodeCanvas(wrap,orientation);return pdf.output('blob')}finally{wrap.remove()}
}
async function exportAllSkillCardsBlob(list=employees){if(!window.jspdf||!window.html2canvas)throw new Error('ไม่พบระบบ PDF');const {jsPDF}=window.jspdf,pdf=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});let first=true;for(let i=0;i<list.length;i++){exportSetStatus(`กำลังสร้าง Skill Card ${i+1}/${list.length}`,true);const wrap=document.createElement('div');wrap.style.cssText='position:fixed;left:-100000px;top:0;width:1050px;background:white;padding:18px';wrap.innerHTML=skillCardHTML(list[i]);document.body.appendChild(wrap);try{const c=await html2canvas(wrap,{scale:1.5,useCORS:true,backgroundColor:'#fff',logging:false});if(!first)pdf.addPage('a4','landscape');first=false;const pw=pdf.internal.pageSize.getWidth(),ph=pdf.internal.pageSize.getHeight(),m=8;let w=pw-m*2,h=c.height*w/c.width;if(h>ph-m*2){h=ph-m*2;w=c.width*h/c.height}pdf.addImage(c.toDataURL('image/jpeg',.93),'JPEG',(pw-w)/2,m,w,h,'','FAST')}finally{wrap.remove()}}return pdf.output('blob')}
function exportMatrixTable(section){const list=employees.filter(e=>e.section===section),skills=sectionSkills[section]||[];return `<div style="page-break-after:always"><h2 style="color:#1f4e79">${esc(section)} - Skill Matrix</h2><table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr><th style="border:1px solid #bbb;padding:5px">ID</th><th style="border:1px solid #bbb;padding:5px">Name</th>${skills.map(x=>`<th style="border:1px solid #bbb;padding:5px">${esc(x)}</th>`).join('')}</tr></thead><tbody>${list.map(e=>{const lv=employeeSkillLevels(e);return `<tr><td style="border:1px solid #bbb;padding:5px">${esc(e.id||'')}</td><td style="border:1px solid #bbb;padding:5px">${esc(e.name||'')}</td>${skills.map(x=>`<td style="border:1px solid #bbb;padding:5px;text-align:center">${Number(lv[x])||1}</td>`).join('')}</tr>`}).join('')}</tbody></table></div>`}
async function exportAllMatricesBlob(){const sections=[...new Set(employees.map(e=>e.section).filter(Boolean))];return exportHtmlPdfBlob('ALL SECTION SKILL MATRIX',sections.map(exportMatrixTable).join(''),'landscape')}
async function exportSectionChartsBlob(){const sections=[...new Set(employees.map(e=>e.section).filter(Boolean))];let html='';for(const sec of sections){try{chartFilter.value=sec;renderSectionChart(sec);html+=`<div style="page-break-after:always"><h2>${esc(sec)}</h2>${document.getElementById('sectionChartArea').innerHTML}</div>`}catch(e){html+=`<h2>${esc(sec)}</h2>`}}return exportHtmlPdfBlob('ALL SECTION ORGANIZATION CHART',html,'landscape')}
function exportBackupBlob(){const data={exportedAt:new Date().toISOString(),employees,trainingPlans:window.trainingPlans||[],examResults:window.examResultsData||window.skillAssessments||[],onlineExamHistory:window.onlineExamResults||[],localStorage:{productionEmployees:localStorage.getItem('productionEmployees')}};return new Blob([JSON.stringify(data,null,2)],{type:'application/json;charset=utf-8'})}
async function exportRun(fn,ok){try{exportSetStatus('กำลังเตรียมไฟล์...',true);await fn();exportSetStatus(ok||'ดาวน์โหลดสำเร็จ',false)}catch(err){console.error(err);exportSetStatus('เกิดข้อผิดพลาด',false);alert('ดาวน์โหลดไม่สำเร็จ: '+(err?.message||err))}}
function bindExportCenter(){
 const $=id=>document.getElementById(id);if(!$('exportCenter')||$('exportCenter').dataset.bound)return;$('exportCenter').dataset.bound='1';
 $('exportEmployeesExcel').onclick=()=>exportRun(async()=>exportDownloadBlob(exportEmployeesXlsxBlob(),'Employee_List.xlsx'));
 $('exportEmployeesCsv').onclick=()=>exportRun(async()=>exportDownloadBlob(exportEmployeesCsvBlob(),'Employee_List.csv'));
 $('exportSkillMatrixExcel').onclick=()=>exportRun(async()=>exportDownloadBlob(exportSkillMatrixXlsxBlob(),'Skill_Matrix_All.xlsx'));
 $('exportBackupJson').onclick=()=>exportRun(async()=>exportDownloadBlob(exportBackupBlob(),'Production_Organization_Backup.json'));
 $('exportAllSkillCardsPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportAllSkillCardsBlob(employees),'All_Employee_Skill_Cards.pdf'));
 $('exportSectionSkillCardsPdf').onclick=()=>exportRun(async()=>{const sec=scSection.value||employees[0]?.section,list=employees.filter(e=>e.section===sec);exportDownloadBlob(await exportAllSkillCardsBlob(list),`${exportSafeName(sec)}_Skill_Cards.pdf`)});
 $('exportAllSkillMatrixPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportAllMatricesBlob(),'All_Section_Skill_Matrix.pdf'));
 $('exportTrainingPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportHtmlPdfBlob('TRAINING PLAN',document.getElementById('training').innerHTML),'Training_Plan.pdf'));
 $('exportExamPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportHtmlPdfBlob('EXAMINATION RESULT',document.getElementById('skillMatrix').innerHTML),'Examination_Result.pdf'));
 $('exportOrganizationPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportHtmlPdfBlob('PRODUCTION ORGANIZATION',document.getElementById('organization').innerHTML),'Production_Organization.pdf'));
 $('exportSectionChartsPdf').onclick=()=>exportRun(async()=>exportDownloadBlob(await exportSectionChartsBlob(),'All_Section_Charts.pdf'));
 $('exportAllZip').onclick=()=>exportRun(async()=>{if(!window.JSZip)throw new Error('ไม่พบระบบ ZIP');const z=new JSZip();z.file('Employee_List.xlsx',exportEmployeesXlsxBlob());z.file('Employee_List.csv',exportEmployeesCsvBlob());z.file('Skill_Matrix_All.xlsx',exportSkillMatrixXlsxBlob());z.file('Production_Organization_Backup.json',exportBackupBlob());z.file('All_Employee_Skill_Cards.pdf',await exportAllSkillCardsBlob(employees));z.file('All_Section_Skill_Matrix.pdf',await exportAllMatricesBlob());z.file('Training_Plan.pdf',await exportHtmlPdfBlob('TRAINING PLAN',document.getElementById('training').innerHTML));z.file('Examination_Result.pdf',await exportHtmlPdfBlob('EXAMINATION RESULT',document.getElementById('skillMatrix').innerHTML));z.file('Production_Organization.pdf',await exportHtmlPdfBlob('PRODUCTION ORGANIZATION',document.getElementById('organization').innerHTML));exportSetStatus('กำลังรวมไฟล์ ZIP...',true);exportDownloadBlob(await z.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}}),'Production_Organization_All_Exports.zip')},'ดาวน์โหลด ZIP สำเร็จ');
}
bindExportCenter();


// ===== v76 SAFE SECTION FILTER + EXAM BUTTON PATCH =====
(function(){
  const byId=id=>document.getElementById(id);
  const normalize=v=>String(v||'').trim().toLowerCase().replace(/\s+/g,' ');
  function availableSections(){
    const values=[];
    try{values.push(...Object.keys(structures||{}));}catch(e){}
    try{values.push(...(employees||[]).map(e=>e.section));}catch(e){}
    return [...new Set(values.filter(Boolean).map(v=>String(v).trim()))];
  }
  function ensureSectionOptions(select){
    if(!select)return;
    const current=select.value;
    const sections=availableSections();
    const existing=[...select.options].map(o=>normalize(o.value));
    sections.forEach(sec=>{if(!existing.includes(normalize(sec)))select.add(new Option(sec,sec));});
    if(current&&sections.some(sec=>normalize(sec)===normalize(current)))select.value=sections.find(sec=>normalize(sec)===normalize(current));
    else if(!select.value&&sections.length)select.value=sections[0];
  }
  function refreshSectionPages(){
    const sm=byId('skillMatrixSection'),sc=byId('skillCardSection'),oe=byId('onlineExamSection');
    ensureSectionOptions(sm);ensureSectionOptions(sc);ensureSectionOptions(oe);
    try{renderSectionSkillMatrix();}catch(e){console.warn('Section Skill Matrix refresh:',e);}
    try{refreshSkillCardEmployees();}catch(e){console.warn('Skill Card refresh:',e);}
    try{renderOnlineExamEmployees();refreshExamLock();renderPracticalTest();}catch(e){console.warn('Online Exam refresh:',e);}
    const start=byId('startOnlineExam');
    if(start){start.onclick=startOnlineExamination;try{refreshExamLock();}catch(e){start.disabled=false;}}
  }
  const sm=byId('skillMatrixSection'),sc=byId('skillCardSection'),oe=byId('onlineExamSection');
  if(sm)sm.addEventListener('change',()=>{try{renderSectionSkillMatrix();}catch(e){console.error(e);}});
  if(sc)sc.addEventListener('change',()=>{try{refreshSkillCardEmployees();}catch(e){console.error(e);}});
  if(oe)oe.addEventListener('change',()=>{try{renderOnlineExamEmployees();refreshExamLock();renderPracticalTest();}catch(e){console.error(e);}});
  const start=byId('startOnlineExam');
  if(start){start.onclick=startOnlineExamination;try{refreshExamLock();}catch(e){start.disabled=false;}}
  [0,500,1500,3000].forEach(ms=>setTimeout(refreshSectionPages,ms));
})();
// ===== END v76 PATCH =====

// ===== END v28 =====


// ===== V140 STABILITY + COMPLETE DATA REFRESH =====
(function v140StabilityFix(){
  const pageRenderers={
    dashboard:()=>renderOrg(),
    organization:()=>{ if(typeof renderOrg==='function')renderOrg(); if(typeof renderAllOrganizationChart==='function')renderAllOrganizationChart(); },
    section:()=>renderSection((document.getElementById('sectionFilter')||{}).value||Object.keys(structures)[0]),
    sectionChart:()=>renderSectionChart((document.getElementById('chartSectionFilter')||{}).value||Object.keys(structures)[0]),
    search:()=>renderSearch(),
    training:()=>renderTrainingPlan(),
    evaluation:()=>renderSkillAssessments(),
    onlineExam:()=>{renderOnlineExamEmployees();renderPracticalTest();renderOnlineExamHistory();renderExamApprovals();},
    sectionSkillMatrix:()=>renderSectionSkillMatrix(),
    skillCard:()=>{refreshSkillCardEmployees();renderSkillCardPreview();},
    competencyGap:()=>renderCompetencyGap()
  };
  function safe(name,fn){try{if(typeof fn==='function')fn();}catch(err){console.error('V140 '+name,err);}}
  function refreshPage(pageId){
    safe(pageId,pageRenderers[pageId]);
    safe('summary',()=>{const t=document.getElementById('total');if(t)t.textContent=employees.length;});
  }
  function refreshAllStable(){
    Object.entries(pageRenderers).forEach(([name,fn])=>safe(name,fn));
    window.__APP_DATA_COUNT=employees.length;
    window.__APP_LAST_REFRESH=new Date().toISOString();
  }
  document.querySelectorAll('nav button[data-page]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const pageId=btn.dataset.page;
      requestAnimationFrame(()=>refreshPage(pageId));
      setTimeout(()=>refreshPage(pageId),120);
    });
  });
  window.refreshAllAppData=refreshAllStable;
  window.getAppHealth=()=>({employees:employees.length,skills:skillAssessments.length,exams:onlineExamRecords.length,assignments:examAssignments.length,lastRefresh:window.__APP_LAST_REFRESH||''});
  [0,300,1000,2500].forEach(ms=>setTimeout(refreshAllStable,ms));
  window.addEventListener('focus',()=>setTimeout(refreshAllStable,50));
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeout(refreshAllStable,50);});
})();
// ===== END V140 =====

