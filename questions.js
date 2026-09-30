/*
 * 題庫整理自 source.pptx 第 4–63 頁。
 * answerIndex 使用 0 起算；options 保留簡報中的 A／B／C 選項文字。
 */
window.QUESTIONS = [
  {
    id: 1, number: "01",
    title: "飲食均衡了，就完全不用補充？",
    question: "我每天都有吃飯、蔬菜、水果，還需要保健食品嗎？",
    options: ["A 一定不需要", "B 可能仍有需要", "C 要看個人"],
    answerIndex: 2, answerText: "C｜要看個人的飲食與需求",
    explanation: "均衡飲食是基礎，但「吃得到」不等於「每天都吃足」。\n• 不同人的飲食型態、食量與生活習慣不同。\n• 補充品比較適合扮演「補足飲食缺口」的角色，而不是取代食物。\n• 先把飲食做好，再檢視是否有需要補足的地方。\n資料／依據：NIH ODS｜Multivitamin/mineral Supplements",
    takeaway: "食物打底，補充品補足。"
  },
  {
    id: 2, number: "02",
    title: "我現在很健康，就不用保養？",
    question: "我現在感覺自己很健康，是不是不用保養也沒差？",
    options: ["A 健康就不用", "B 人人都要", "C 看平常習慣"],
    answerIndex: 1, answerText: "B｜健康感覺良好，不代表可以停止保養",
    explanation: "「沒有症狀」與「不需要保養」是兩件不同的事。\n• 身體許多變化是逐步累積的，等到明顯不舒服才處理，往往已經錯過平常可以做的管理。\n• 飲食、活動、睡眠、壓力與營養攝取，都是日常保養的一部分。\n• 「保養」不是代表你生病，而是趁健康時維持好的生活與營養習慣；補充品則只是其中一個可能的工具。\n資料／依據：NIH News in Health｜Do You Need Dietary Supplements?",
    takeaway: "感覺健康，是保養的好時機，不是停止保養的理由。"
  },
  {
    id: 3, number: "03",
    title: "天然食物一定比較好？",
    question: "既然天然食物比較好，那吃保健食品是不是沒意義？",
    options: ["A 沒意義", "B 補充品取代食物", "C 兩者角色不同"],
    answerIndex: 2, answerText: "C｜食物與補充品可以扮演不同角色",
    explanation: "不是「天然 vs. 膠囊」，而是「打底 vs. 補足」。\n• 食物提供多種營養與其他成分。\n• 補充品可以較方便、穩定地提供特定營養素。\n• 真正的重點是不要用補充品取代多樣化飲食。\n資料／依據：NIH ODS｜Multivitamin/mineral Supplements",
    takeaway: "吃得好，再補得剛好。"
  },
  {
    id: 4, number: "04",
    title: "營養素越多越好？",
    question: "維生素吃多一點，是不是效果就更強？",
    options: ["A 越多越好", "B 越少越好", "C 適量比較重要"],
    answerIndex: 2, answerText: "C｜適量、持續、符合需求",
    explanation: "營養素不是單純的「越多越有效」。\n• 不同營養素有不同的安全攝取範圍。\n• 高劑量並不等於更好的營養管理。\n• 應一起考量飲食、產品含量與總攝取量。\n資料／依據：NIH ODS｜Dietary Supplements: What You Need to Know",
    takeaway: "不是追求最高，而是追求合適。"
  },
  {
    id: 5, number: "05",
    title: "水溶性就可以多吃？",
    question: "維生素 C、B 群會排掉，所以吃多一點沒關係？",
    options: ["A 沒關係", "B 有些仍有上限", "C 越多越好"],
    answerIndex: 1, answerText: "B｜水溶性不等於無限量安全",
    explanation: "人體會排出部分多餘水溶性維生素，但不代表高劑量永遠沒有風險。\n• 不同營養素仍有各自的安全考量。\n• 補充時要看來源、劑量與每日總攝取量。\n• 「能排掉」不能當成唯一判斷標準。\n資料／依據：NIH ODS｜Vitamin & Mineral Fact Sheets",
    takeaway: "能排掉，不代表可以無限量。"
  },
  {
    id: 6, number: "06",
    title: "綜合維生素沒讓人長壽，就沒用？",
    question: "研究沒有證明綜合維生素能讓人長壽，那吃它幹嘛？",
    options: ["A 完全沒用", "B 是萬靈丹", "C 不是萬靈丹"],
    answerIndex: 2, answerText: "C｜不是萬靈丹，不代表沒有營養補充角色",
    explanation: "不能把「不是萬靈丹」等同於「完全沒有用途」。\n• 綜合維生素可以提供多種維生素與礦物質。\n• 對於飲食攝取不足的人，補充適當營養素可能有實際價值。\n• 它不能取代飲食，也不能被當成治療工具。\n資料／依據：NIH ODS｜Multivitamin/mineral Supplements",
    takeaway: "不是神藥，也不代表沒有用途。"
  },
  {
    id: 7, number: "07",
    title: "魚油只是吃心安？",
    question: "魚油不就是把魚油裝進膠囊？真的有必要嗎？",
    options: ["A 完全沒必要", "B 看飲食", "C 膠囊越多越好"],
    answerIndex: 1, answerText: "B｜先看自己平常的 Omega-3 來源",
    explanation: "Omega-3 包括 ALA、EPA、DHA；魚類與海鮮是 EPA、DHA 的重要來源。\n• 不同人的魚類攝取量差異很大。\n• 如果平常很少吃魚，可以先檢視 Omega-3 的飲食來源。\n• 補充品的價值在於方便提供特定營養素，而不是取代食物。\n資料／依據：NIH ODS｜Omega-3 Fatty Acids",
    takeaway: "先看你平常吃多少，再談要不要補。"
  },
  {
    id: 8, number: "08",
    title: "魚油是不是愈大顆愈好？",
    question: "魚油膠囊愈大顆，代表 Omega-3 越多、效果越好嗎？",
    options: ["A 大顆一定好", "B 小顆一定好", "C 看 EPA＋DHA"],
    answerIndex: 2, answerText: "C｜不要只看膠囊大小，要看 EPA＋DHA",
    explanation: "真正值得比較的，是每份提供多少 EPA 與 DHA，而不是膠囊外觀大小。\n• 不同魚油產品的魚油總量、EPA、DHA 濃度可能差很多。\n• 比較時可先看標示上的 EPA＋DHA，而不是只看「魚油幾毫克」。\n• 例如 USANA 台灣 BiOmega 每份 4 粒，EPA 600 mg＋DHA 500 mg＝1,100 mg。\n案例觀察｜BiOmega 台灣資料：每份 4 粒，EPA 600 mg、DHA 500 mg，合計 1,100 mg。\n資料／依據：USANA 台灣 BiOmega 營養標示；NIH ODS｜Omega-3 Fatty Acids",
    takeaway: "魚油看濃度，先看 EPA＋DHA。"
  },
  {
    id: 9, number: "09",
    title: "益生菌是不是菌數越多越好？",
    question: "100 億 CFU 一定比 10 億 CFU 好嗎？",
    options: ["A 看 CFU 就好", "B 看菌株＋菌量", "C 越多一定越好"],
    answerIndex: 1, answerText: "B｜菌株、菌量與配方一起看",
    explanation: "• 先看菌株，不只看菌數：不同菌株的研究與用途可能不同，所以不能只用 CFU 高低判斷好不好。\n• 挑選有專利科研技術支持的菌種：有清楚的菌株來源、研究資料與技術依據，選擇時更容易判斷產品資訊是否完整。\n• 再看配方是否適合自己：不含乳製品的配方，對乳糖不耐症者可以更友善。",
    takeaway: "益生菌不是「菌數越多越好」，而是看菌株、研究依據與配方是否適合自己。"
  },
  {
    id: 10, number: "10",
    title: "吃益生菌沒立即有感就是沒效？",
    question: "益生菌吃幾天沒有明顯感覺，是不是代表沒效？",
    options: ["A 沒感覺＝沒效", "B 一定立刻有感", "C 不能只看立即感受"],
    answerIndex: 2, answerText: "C｜不能只用立即感受判斷",
    explanation: "營養補充與益生菌研究，不一定都會產生立即、明顯的主觀感受。\n• 不同菌株、族群、劑量與研究目的會影響結果。\n• 「有沒有立即感覺」不適合當唯一判斷標準。\n• 更合理的是看產品資訊與適用情境，再做持續觀察。\n資料／依據：NIH NCCIH｜Probiotics: Usefulness and Safety",
    takeaway: "沒有立即感覺，不等於沒有價值。"
  },
  {
    id: 11, number: "11",
    title: "鈣只有年紀大才需要？",
    question: "鈣不是年紀大了才需要補嗎？",
    options: ["A 是", "B 不是", "C 只要女性需要"],
    answerIndex: 1, answerText: "B｜鈣是每天都需要的營養素",
    explanation: "鈣不是「老了才需要」，而是每天都參與正常生理功能。\n• 鈣是骨骼與牙齒的重要礦物質。\n• 也參與肌肉與神經等正常生理功能。\n• 重點是日常攝取是否足夠，而不是只看年齡。\n資料／依據：NIH ODS｜Calcium",
    takeaway: "不是等年紀大了才開始在意鈣。"
  },
  {
    id: 12, number: "12",
    title: "維生素 D 只跟骨頭有關？",
    question: "維生素 D 不就是拿來補鈣、顧骨頭？",
    options: ["A 只有骨頭", "B 還有其他角色", "C 越高越好"],
    answerIndex: 1, answerText: "B｜角色不只與骨骼有關",
    explanation: "維生素 D 有助鈣吸收，也參與肌肉與免疫系統等功能。\n• 維生素 D 與鈣的吸收及骨骼健康密切相關。\n• 它也參與其他正常生理功能。\n• 但同樣不是越高越好，重點是維持適當營養狀態。\n資料／依據：NIH ODS｜Vitamin D",
    takeaway: "維生素 D 不只是一顆「骨骼維生素」。"
  },
  {
    id: 13, number: "13",
    title: "鈣片不能和魚油一起吃？",
    question: "鈣片和魚油一起吃，會發生皂化反應，所以不能一起吃？",
    options: ["A 真的不能一起吃", "B 一定會皂化", "C 這說法被過度簡化"],
    answerIndex: 2, answerText: "C｜「皂化」這個說法被過度簡化",
    explanation: "鈣與脂肪酸形成鈣鹽，在特定化學／消化條件下確實可以發生；但不能因此推論「一般鈣片＋魚油一起吃就會把魚油全部皂化、失效」。\n• 研究確實觀察到鈣與長鏈脂肪酸在腸道消化環境中可形成不溶性鈣皂，這是脂質消化的一部分。\n• 但這與日常補充品「一吃就皂化、所以不能同時吃」是兩個不同層次的說法。\n• 因此不能把「可能形成鈣皂」直接等同於「鈣片與魚油不可同時食用」。若有特定藥物或醫療狀況，仍應依醫囑或詢問專業人員。\n資料／依據：PubMed｜Calcium Alters the Interfacial Organization of Hydrolyzed Lipids during Intestinal Digestion；相關 calcium soap 研究",
    takeaway: "有化學現象，不代表日常搭配就等於「互相抵消」。"
  },
  {
    id: 14, number: "14",
    title: "顆數多＋價格低，就一定划算？",
    question: "保健食品我都挑顆數多＋價格低才划算，對吧？",
    options: ["A 顆數多就划算", "B 價格低就划算", "C 要看完整配方"],
    answerIndex: 2, answerText: "C｜不能只看顆數與單價",
    explanation: "「顆數多」與「單價低」都不能直接等於「划算」。真正的比較，要把通路、成分與每份實際提供的營養一起看。\n• 先看通路：來源是否清楚、產品資訊與售後服務是否容易查證。\n• 再看成分：每份含量、有效成分、原料／菌株、配方設計，以及一瓶／一盒到底能提供多少「有效攝取量」。\n• 最後才看價格：用「每份有效成分的成本」比較，而不是單純用「幾顆／多少錢」比較。以 USANA 為例，可以直接從官方台灣產品標示與官方產品資訊核對每份成分，再做同類產品比較；這比單看品牌或顆數更有意義。\n資料／依據：NIH ODS｜Dietary Supplements；FDA｜Dietary Supplements；產品官方標示\n比較順序：通路／來源 → 每份有效成分 → 配方與品質資訊 → 每份成本",
    takeaway: "買保健食品不是買「最多顆」，而是買「每一份真正得到什麼」。"
  },
  {
    id: 15, number: "15",
    title: "吃了保健食品就可以少管生活？",
    question: "每天吃保健食品，是不是就可以少管飲食、睡眠和運動？",
    options: ["A 可以", "B 不能取代", "C 看吃多少"],
    answerIndex: 1, answerText: "B｜保健食品是加分，不是替代品",
    explanation: "健康生活的核心仍然是飲食、活動、睡眠與其他生活習慣。\n• 補充品不能取代多樣化飲食。\n• 規律活動與充足睡眠仍然重要。\n• 適當營養補充可以是健康生活的一部分，而不是免除健康習慣的理由。\n資料／依據：TFDA｜健康食品概說；NIH ODS｜Dietary Supplements",
    takeaway: "補充，是健康生活的一部分，不是健康生活的替代品。"
  }
];
