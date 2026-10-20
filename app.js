// 好名字 GoodName 網頁版 —— 與 src/core.py 同步的計算邏輯
const T = {"SHULI": {"1": ["吉", "太極之數", "萬物開泰，生發無窮，利祿亨通。"], "2": ["凶", "兩儀之數", "混沌未定，分離破敗，進退失據。"], "3": ["吉", "三才之數", "天地人和，大事大業，繁榮昌隆。"], "4": ["凶", "四象之數", "待於生發，萬事慎重，不具營謀。"], "5": ["吉", "五行之數", "循環相生，圓通暢達，福祉無窮。"], "6": ["吉", "六爻之數", "發展變化，天賦美德，吉祥安泰。"], "7": ["吉", "七政之數", "精悍嚴謹，天賦之力，吉星照耀。"], "8": ["吉", "八卦之數", "意志剛健，努力發達，貫徹志望。"], "9": ["凶", "大成之數", "蘊涵凶險，或成或敗，難以把握。"], "10": ["凶", "終結之數", "雪暗飄零，偶或有成，回顧茫然。"], "11": ["吉", "旱苗逢雨", "萬物更新，調順發達，恢弘澤世。"], "12": ["凶", "掘井無泉", "意志脆弱，家庭寂寞，薄弱無力。"], "13": ["吉", "春日牡丹", "才藝多能，智謀奇略，忍柔當事。"], "14": ["凶", "破兆", "家庭緣薄，孤獨遭難，謀事不達。"], "15": ["吉", "福壽", "福壽圓滿，富貴榮譽，涵養雅量。"], "16": ["吉", "厚重", "厚重載德，安富尊榮，貴人得助。"], "17": ["吉", "剛強", "權威剛強，突破萬難，如能容忍必成。"], "18": ["吉", "鐵鏡重磨", "權威顯達，博得名利，有志竟成。"], "19": ["凶", "多難", "風雲蔽日，辛苦重來，雖有智謀難成。"], "20": ["凶", "屋下藏金", "非業破運，災難重重，敗家短命遭難。"], "21": ["吉", "明月中天", "光風霽月，萬物確立，獨立權威。"], "22": ["凶", "秋草逢霜", "困難疾弱，雖出豪傑，人生波折。"], "23": ["吉", "壯麗", "旭日東升，壯麗壯觀，權威旺盛。"], "24": ["吉", "掘藏得金", "家門餘慶，金錢豐盈，白手成家。"], "25": ["吉", "榮俊", "資性英敏，才能奇特，克服傲慢可成。"], "26": ["凶", "變怪", "變怪之謎，英雄豪傑，波瀾重疊。"], "27": ["凶", "增長", "慾望無止，自我強烈，多受毀謗。"], "28": ["凶", "闊水浮萍", "遭難之數，豪傑氣概，四海漂泊。"], "29": ["吉", "智謀", "智謀優秀，財力歸集，名聞海內。"], "30": ["半吉", "非運", "沉浮不定，凶吉難變，若明若暗。"], "31": ["吉", "春日花開", "智勇得志，博得名利，統領眾人。"], "32": ["吉", "寶馬金鞍", "僥倖多望，貴人得助，財帛如裕。"], "33": ["吉", "旭日升天", "鸞鳳相會，名聞天下，隆昌至極。"], "34": ["凶", "破家", "見識短小，辛苦遭逢，災禍至極。"], "35": ["吉", "高樓望月", "溫和平靜，智達通暢，文昌技藝。"], "36": ["凶", "波瀾重疊", "沉浮萬狀，俠肝義膽，舍己成仁。"], "37": ["吉", "猛虎出林", "權威顯達，熱誠忠信，宜著雅量。"], "38": ["半吉", "磨鐵成針", "意志薄弱，刻意經營，才識不凡，技藝有成。"], "39": ["吉", "富貴榮華", "財帛豐盈，暗藏險象，德澤四方。"], "40": ["凶", "退安", "智謀膽力，冒險投機，沉浮不定。"], "41": ["吉", "有德", "純陽獨秀，德高望重，和順暢達。"], "42": ["凶", "寒蟬在柳", "博識多能，精通世情，如能專心可成。"], "43": ["凶", "散財破產", "諸事不遂，雖有智謀，財來財去。"], "44": ["凶", "煩悶", "破家亡身，暗藏惨淡，事不如意。"], "45": ["吉", "順風", "新生泰和，順風揚帆，智謀經緯。"], "46": ["凶", "浪裡淘金", "載寶沉舟，大命有虧，艱辛困苦。"], "47": ["吉", "點石成金", "花開之象，萬事如意，禎祥吉慶。"], "48": ["吉", "古松立鶴", "智謀兼備，德量榮達，威望成師。"], "49": ["半吉", "轉變", "吉臨則吉，凶來則凶，轉凶為吉。"], "50": ["凶", "小舟入海", "一成一敗，吉凶參半，先得庇蔭後遭凄。"], "51": ["半吉", "沉浮", "盛衰交加，波瀾重疊，如能慎始必得成功。"], "52": ["吉", "達眼", "卓識達眼，先見之明，智謀超群，名利雙收。"], "53": ["凶", "曲卷難星", "外祥內患，外禍內安，先富後貧。"], "54": ["凶", "石上栽花", "難得有活，憂悶煩來，辛驚不絕。"], "55": ["半吉", "善惡", "善善得惡，惡惡得善，外美內苦。"], "56": ["凶", "浪裡行舟", "歷盡艱辛，四周障礙，萬事龃龉。"], "57": ["吉", "日照春松", "寒雪青松，夜鶯吟春，必遭一過，繁榮白事。"], "58": ["半吉", "晚行遇月", "沉浮多端，先苦後甜，寬宏揚名。"], "59": ["凶", "寒蟬悲風", "時運不濟，缺乏忍耐，難望成事。"], "60": ["凶", "無謀", "爭名奪利，黑暗無光，心迷意亂。"], "61": ["吉", "牡丹芙蓉", "花開富貴，名利雙收，定享天賦。"], "62": ["凶", "衰敗", "內外不和，志望難達，災禍頻來。"], "63": ["吉", "舟出平海", "萬物化育，繁榮之象，專心一意，必能成功。"], "64": ["凶", "非命", "骨肉分離，孤獨悲愁，難得心安。"], "65": ["吉", "巨流歸海", "天長地久，家運隆昌，福壽綿長。"], "66": ["凶", "岩頭步馬", "進退維谷，艱難不堪，等待時機。"], "67": ["吉", "順風通達", "天賦幸運，四通八達，家道繁昌。"], "68": ["吉", "順風吹帆", "智慮周密，集眾信達，發明能智。"], "69": ["凶", "非業", "非業非力，精神迫滯，災害交至。"], "70": ["凶", "殘菊逢霜", "寂寞無常，慘淡憂愁，晚景凄涼。"], "71": ["半吉", "石上金花", "石上金花，內心勞苦，貫徹始終，定可昌隆。"], "72": ["凶", "勞苦", "榮苦相伴，陰雲覆月，外表吉祥，內實凶禍。"], "73": ["半吉", "無勇", "盛衰交加，徒有高志，天王福祉，終世平安。"], "74": ["凶", "殘菊經霜", "秋葉寂寞，無能無智，辛苦繁多。"], "75": ["半吉", "退守", "發跡甚遲，雖有吉象，無謀難成。"], "76": ["凶", "離散", "倾覆離散，骨肉分離，內外不和。"], "77": ["半吉", "半吉", "家庭有悅，半吉半凶，能獲援護，陷落不幸。"], "78": ["半吉", "晚苦", "禍福參半，先天智能，中年發達，晚景困苦。"], "79": ["凶", "雲頭望月", "身疲力盡，窮迫不伸，精神不定。"], "80": ["凶", "遁吉", "辛苦不絕，早入隱遁，安心立命，化凶轉吉。"], "81": ["吉", "萬物回春", "還原復始，結出碩果，再獲盛運。"]}, "SIHUA": {"甲": ["廉貞", "破軍", "武曲", "太陽"], "乙": ["天機", "天梁", "紫微", "太陰"], "丙": ["天同", "天機", "文昌", "廉貞"], "丁": ["太陰", "天同", "天機", "巨門"], "戊": ["貪狼", "太陰", "右弼", "天機"], "己": ["武曲", "貪狼", "天梁", "文曲"], "庚": ["太陽", "武曲", "太陰", "天同"], "辛": ["巨門", "太陽", "文曲", "文昌"], "壬": ["天梁", "紫微", "左輔", "武曲"], "癸": ["破軍", "巨門", "太陰", "貪狼"]}, "TIANGAN": {"1": "甲", "2": "乙", "3": "丙", "4": "丁", "5": "戊", "6": "己", "7": "庚", "8": "辛", "9": "壬", "0": "癸"}, "STARS": ["紫微", "天機", "太陽", "武曲", "天同", "廉貞", "太陰", "貪狼", "巨門", "天梁", "破軍", "文昌", "文曲", "左輔", "右弼"], "COMPOUND": ["万俟", "上官", "东方", "东郭", "令狐", "公冶", "公孙", "公孫", "公羊", "北堂", "单于", "南宫", "南宮", "司徒", "司空", "司馬", "司马", "呼延", "單于", "夏侯", "太史", "宇文", "宗政", "尉迟", "尉遲", "左丘", "张廖", "张简", "張廖", "張簡", "微生", "慕容", "拓跋", "東方", "東郭", "梁丘", "欧阳", "歐陽", "澹台", "澹臺", "濮阳", "濮陽", "独孤", "獨孤", "申屠", "百里", "皇甫", "端木", "第五", "羊舌", "聞人", "范姜", "西門", "西门", "諸葛", "诸葛", "赫连", "赫連", "軒轅", "轩辕", "鍾離", "钟离", "長孫", "长孙", "闻人"]};
let DB = {}, NAME_CHARS = {};
const COMPOUND = new Set(T.COMPOUND);
const SHENG = {木:"火",火:"土",土:"金",金:"水",水:"木"};
const KE = {木:"土",土:"水",水:"火",火:"金",金:"木"};
const RAD_WX = {75:"木",118:"木",140:"木",85:"水",86:"火",32:"土",167:"金",96:"金",112:"金"};
const GRIDS = ["天格","人格","地格","外格","總格"];

function shuli(n){ let k=n; while(k>81) k-=80; if(k<=0) k=1; return T.SHULI[k]; }
function jxScore(n){ return {"吉":2,"半吉":1,"凶":-2}[shuli(n)[0]]; }
function wuxing(n){ return {1:"木",2:"木",3:"火",4:"火",5:"土",6:"土",7:"金",8:"金",9:"水",0:"水"}[n%10]; }
function relation(a,b){ if(a===b) return "比和"; if(SHENG[a]===b) return "相生"; if(SHENG[b]===a) return "被生"; if(KE[a]===b) return "相剋"; return "被剋"; }
function sancai(t,r,d){
  const tw=wuxing(t), rw=wuxing(r), dw=wuxing(d); let s=0; const notes=[];
  let m={相生:[3,"天生人，得長輩庇蔭，成功順利"],比和:[2,"天人比和，成功運平穩"],被生:[1,"人生天，付出多、得助少，但尚可"],相剋:[-3,"天剋人，成功運受壓制，易受上司長輩壓力"],被剋:[-1,"人剋天，自我強，與上位者易有摩擦"]}[relation(tw,rw)];
  s+=m[0]; notes.push("成功運（天→人）："+m[1]);
  m={相生:[2,"人生地，基礎穩固，肯為家庭付出"],比和:[2,"人地比和，基礎運安定"],被生:[3,"地生人，基礎穩健，得部屬家人之助"],相剋:[-1,"人剋地，基礎尚可但辛勞"],被剋:[-3,"地剋人，基礎不穩，易有變動"]}[relation(rw,dw)];
  s+=m[0]; notes.push("基礎運（人→地）："+m[1]);
  const level = s>=4?"大吉":s>=2?"吉":s>=0?"半吉":"凶";
  return {wx:tw+rw+dw, level, score:s, notes};
}
function sihua(n){ const tg=T.TIANGAN[n%10]; const [lu,quan,ke,ji]=T.SIHUA[tg]; return {num:n,tg,祿:lu,權:quan,科:ke,忌:ji}; }
function jiDigits(star){ return Object.keys(T.TIANGAN).map(Number).filter(d=>T.SIHUA[T.TIANGAN[d]][3]===star); }
function luDigits(star){ return Object.keys(T.TIANGAN).map(Number).filter(d=>T.SIHUA[T.TIANGAN[d]][0]===star); }
function charInfo(c, ov){
  const rec=DB[c];
  if(!rec) return {c,t:c,s:ov||null,py:"",rad:null,wx:"",alt:null};
  const [t,s,rad,py,alt]=rec; return {c,t,s:ov||s,py,rad,wx:RAD_WX[rad]||"",alt:(!ov&&alt)?alt:null}; // alt：本字也是繁體字，筆畫不同
}
function splitName(full){
  full=full.replace(/\s/g,"");
  const a=[...full];
  if(a.length>=3 && COMPOUND.has(a[0]+a[1])) return [a.slice(0,2).join(""), a.slice(2).join("")];
  return [a[0]||"", a.slice(1).join("")];
}
function calcWuge(a,g){
  const sum=x=>x.reduce((p,q)=>p+q,0);
  const tian = a.length>=2?sum(a):a[0]+1, ren=a[a.length-1]+g[0], di=g.length>=2?sum(g):g[0]+1, zong=sum(a)+sum(g);
  let wai=tian+di-ren; if(wai<=0) wai=1;
  return {天格:tian,人格:ren,地格:di,外格:wai,總格:zong};
}
function analyze(full, ov={}, avoid=[], want=[]){
  const [sur,given]=splitName(full);
  if(!sur||!given) throw new Error("請輸入完整姓名（姓＋名）");
  const chars=[...(sur+given)].map(c=>charInfo(c,ov[c]));
  for(const ci of chars) if(!ci.s) throw new Error(`找不到「${ci.c}」的康熙筆畫，請在「自訂筆畫」填寫，例如 ${ci.c}=10`);
  const ns=[...sur].length;
  const ge=calcWuge(chars.slice(0,ns).map(c=>c.s), chars.slice(ns).map(c=>c.s));
  const grids={};
  for(const k of GRIDS){ const v=ge[k]; const [jx,title,desc]=shuli(v); grids[k]={num:v,wx:wuxing(v),jx,title,desc,sihua:sihua(v)}; }
  const sc=sancai(ge.天格,ge.人格,ge.地格);
  const zw=[["人格","人格＝姓名命宮（一生/前半生）"],["總格","總格＝姓名身宮（36歲後/後運）"]].map(([k,label])=>{
    const sh=grids[k].sihua; const z={grid:k,label,...sh,warn:[],good:[]};
    if(avoid.includes(sh.忌)) z.warn.push(`⚠ ${sh.忌}化忌與你命盤本命化忌星相同 → 忌上加忌（重忌），宜避開尾數 ${ge[k]%10}`);
    if(want.includes(sh.祿)) z.good.push(`✔ ${sh.祿}化祿，正好補到你想加強的星（灾宮）`);
    return z;
  });
  let score = jxScore(ge.人格)*3 + jxScore(ge.總格)*3 + jxScore(ge.地格)*1.5 + jxScore(ge.外格) + jxScore(ge.天格)*0.5 + sc.score*1.5;
  for(const z of zw){ score -= 6*z.warn.length; score += 3*z.good.length; }
  const total=Math.max(0,Math.min(100,Math.round(50+score*50/27)));
  return {full, sur, given, chars, grids, sancai:sc, ziwei:zw, score:total};
}
const altNote=c=>`※ 「${c.c}」有兩種寫法：按「${c.t}」計 ${c.s} 畫（目前採用）；如證件寫「${c.alt[0]}」本字，康熙為 ${c.alt[1]} 畫，可在自訂筆畫填 ${c.c}=${c.alt[1]}`;
function reportText(r){
  const L=[];
  L.push(`【姓名分析】${r.full}   綜合分：${r.score} / 100`,"","一、康熙筆畫（繁體字形計算）");
  for(const c of r.chars){ L.push(`  ${c.c}（${c.t}）${c.py}  ${c.s} 畫${c.wx?"  字形五行:"+c.wx:""}`); if(c.alt) L.push("     "+altNote(c)); }
  L.push("","二、五格數理（數理定吉凶）");
  for(const k of GRIDS){ const g=r.grids[k]; L.push(`  ${k} ${String(g.num).padStart(2)}（${g.wx}）${g.jx} ─ ${g.title}：${g.desc}`); }
  L.push("",`三、三才配置：${r.sancai.wx}（天人地）→ ${r.sancai.level}`);
  for(const n of r.sancai.notes) L.push("  "+n);
  L.push("","四、數理入盤（命盤決成敗）—— 尾數→天干→四化");
  for(const z of r.ziwei){
    L.push(`  ${z.grid} ${z.num} → 尾數 ${z.num%10} → ${z.tg}干：${z.祿}化祿 ${z.權}化權 ${z.科}化科 ${z.忌}化忌`);
    L.push(`     (${z.label})`); for(const w of [...z.warn,...z.good]) L.push("     "+w);
  }
  L.push("  提示：把人格、總格帶來的化忌星，對照你自己的紫微命盤；若落在本命化忌、灾宮或與地空地劫、擎羊陀羅、火星鈴星同宮，影響更明顯。");
  return L.join("\n");
}
// ---------- 起名 ----------
function mulberry(seed){ return function(){ seed|=0; seed=seed+0x6D2B79F5|0; let t=Math.imul(seed^seed>>>15,1|seed); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function shuffle(a,rnd){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function patterns(sur, nGiven, avoid, want, minSancai=2){
  const bad=new Set(avoid.flatMap(jiDigits)), good=new Set(want.flatMap(luDigits)); const out=[];
  const list = nGiven===1 ? Array.from({length:25},(_,i)=>[i+2]) : [].concat(...Array.from({length:25},(_,i)=>Array.from({length:25},(_,j)=>[i+2,j+2])));
  for(const g of list){
    const ge=calcWuge(sur,g);
    if(shuli(ge.人格)[0]!=="吉"||shuli(ge.總格)[0]!=="吉") continue;
    if(!["吉","半吉"].includes(shuli(ge.地格)[0])||(nGiven>=2&&!["吉","半吉"].includes(shuli(ge.外格)[0]))) continue; // 單名外格固定為2
    if(bad.has(ge.人格%10)||bad.has(ge.總格%10)) continue;
    const sc=sancai(ge.天格,ge.人格,ge.地格); if(sc.score<minSancai) continue;
    let s=sc.score*2+jxScore(ge.地格)+jxScore(ge.外格);
    for(const k of ["人格","總格"]) if(good.has(ge[k]%10)) s+=4;
    out.push({s,g,ge});
  }
  return out.sort((a,b)=>b.s-a.s);
}
const TRAD_FIX={"峯":"峰","嫺":"嫻"}; // 港澳常用寫法，筆畫相同
const MEAN_FIX={...TRAD_FIX,"爲":"為","採":"采","裏":"里","衆":"眾","啓":"啟"};
const trad=c=>{ const t=DB[c]?DB[c][0]:c; return TRAD_FIX[t]||t; };
const tradText=s=>[...s].map(c=>{ const t=DB[c]?DB[c][0]:c; return MEAN_FIX[t]||t; }).join("");
function charsByStroke(gender){
  const idx={};
  for(const [c,info] of Object.entries(NAME_CHARS)){
    if((gender==="M"||gender==="F") && !(info.g===gender||info.g==="N")) continue;
    const rec=DB[c]; if(!rec) continue; (idx[rec[1]]=idx[rec[1]]||[]).push(c);
  }
  return idx;
}
// 名字以繁體顯示；同一批每字只用一次（指定字除外）；雙名同筆畫組合最多2個；exclude＝換一批時已出過的名字；
// 嚴格條件不夠數時，以放寬條件（三才半吉）補足並標 relaxed
function suggest(surname, {n=10,nGiven=2,gender="N",avoid=[],want=[],preferWx=[],seed=1,fixed=null,fixedPos=0,exclude=[]}={}){
  surname=surname.trim(); const sur=[];
  for(const c of surname){ const ci=charInfo(c); if(!ci.s) throw new Error(`找不到姓氏「${c}」的筆畫`); sur.push(ci.s); }
  const surT=[...surname].map(trad).join(""), fixedT=fixed?trad(fixed):null;
  const rnd=mulberry(seed); const idx=charsByStroke(gender);
  const strict=patterns(sur,nGiven,avoid,want), sk=new Set(strict.map(p=>p.g.join("-")));
  const relaxed=patterns(sur,nGiven,avoid,want,0).filter(p=>!sk.has(p.g.join("-")));
  const cap=nGiven>=2?2:n; const out=[]; const seen=new Set([...exclude].map(x=>[...x].map(trad).join(""))); const usedC=new Set(); const perPat={};
  for(const [tier,pats] of [[false,strict],[true,relaxed]]){
    if(out.length>=n) break;
    const cands=[];
    for(const p of pats){
      const lists=p.g.map((s,pos)=>{
        if(fixed && fixedPos===pos) return charInfo(fixed).s===s?[fixed]:[];
        return shuffle([...(idx[s]||[])],rnd);
      });
      if(lists.some(l=>!l.length)) continue;
      const combos = nGiven===1 ? lists[0].map(a=>[a]) : lists[0].flatMap(a=>lists[1].map(b=>[a,b]));
      let tries=0, got=0;
      for(const combo of combos){
        if(++tries>200||got>=(nGiven===1?n:6)) break;
        const tc=combo.map(trad);
        if(new Set(tc).size<tc.length) continue;
        const gs=new Set(combo.filter(c=>c!==fixed).map(c=>(NAME_CHARS[c]||{}).g||"N"));
        if(gender==="N" && gs.has("M") && gs.has("F")) continue; // 不限性別時不混搭男女字
        const name=surT+tc.join(""); if(seen.has(name)) continue;
        const r=analyze(name,{},avoid,want);
        const bonus=combo.filter(c=>{ const w=RAD_WX[DB[c][2]]; return w && preferWx.includes(w); }).length;
        r.rank=r.score+bonus*3; r.meaning=combo.map(c=>`${trad(c)}：${tradText((NAME_CHARS[c]||{}).m||"")}`).join("；");
        r.relaxed=tier; r._g=p.g.join("-"); r._tc=tc.filter(t=>t!==fixedT);
        cands.push(r); seen.add(name); got++;
      }
      if(cands.length>=n*10) break;
    }
    shuffle(cands,rnd); cands.sort((a,b)=>b.rank-a.rank);
    for(const r of cands){
      if(out.length>=n) break;
      if(r._tc.some(t=>usedC.has(t))) continue;
      if((perPat[r._g]||0)>=cap) continue;
      perPat[r._g]=(perPat[r._g]||0)+1; r._tc.forEach(t=>usedC.add(t));
      delete r._g; delete r._tc; out.push(r);
    }
  }
  return {out, pats:strict};
}
function suggestNote(surname,nGiven,gender,avoid,want,got,n){
  if(got>=n) return "";
  const ss=[...surname.trim()].map(c=>charInfo(c).s);
  const pats=patterns(ss,nGiven,avoid,want,0); const idx=charsByStroke(gender);
  if(nGiven===1){
    const parts=pats.map(p=>`${p.g[0]}畫（字庫有 ${(idx[p.g[0]]||[]).length} 字）`);
    return `只找到 ${got} 個（要求 ${n} 個）。單名在「人格、總格皆吉＋三才不凶」下，合格筆畫只有：${parts.join("、")||"沒有"}。每個字一批只用一次，所以名字數受字庫限制。`;
  }
  return `只找到 ${got} 個（要求 ${n} 個）。合格筆畫組合 ${pats.length} 組；可能是已出過的名字被排除、指定字或化忌星條件太嚴。按「生成好名字」可重新開始。`;
}

// ---------- UI ----------
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const jxCls=j=>j==="吉"?"ji":j==="半吉"?"banji":"xiong";
function getStars(name){ return [...document.querySelectorAll(`input[name=${name}]:checked`)].map(i=>i.value); }
function saveChart(){ localStorage.setItem("gn_chart", JSON.stringify({a:getStars("avoid"),w:getStars("want")})); }
function parseOv(s){ const o={}; s.replace(/，/g,",").replace(/＝/g,"=").split(",").forEach(p=>{ const [k,v]=p.split("="); if(k&&v&&/^\d+$/.test(v.trim())) o[[...k.trim()][0]]=+v.trim(); }); return o; }
function reportHTML(r){
  let h=`<div class="score"><b>${r.score}</b><span>綜合分 / 100</span></div>`;
  h+=`<h3>一、康熙筆畫</h3><div class="chars">`+r.chars.map(c=>`<div class="ch"><div class="big">${esc(c.t)}</div><div>${esc(c.c)} · ${esc(c.py)}</div><div><b>${c.s}</b> 畫${c.wx?" · "+c.wx:""}</div></div>`).join("")+`</div>`+r.chars.filter(c=>c.alt).map(c=>`<p class="warn">${esc(altNote(c))}</p>`).join("");
  h+=`<h3>二、五格數理</h3><table class="tbl"><tr><th>格</th><th>數</th><th>五行</th><th>吉凶</th><th>暗示</th></tr>`+GRIDS.map(k=>{const g=r.grids[k];return `<tr><td>${k}</td><td>${g.num}</td><td>${g.wx}</td><td class="${jxCls(g.jx)}">${g.jx}</td><td class="l">${g.title}：${g.desc}</td></tr>`;}).join("")+`</table>`;
  h+=`<h3>三、三才配置：${r.sancai.wx} → <span class="${r.sancai.level.includes("吉")&&r.sancai.level!=="半吉"?"ji":r.sancai.level==="半吉"?"banji":"xiong"}">${r.sancai.level}</span></h3><ul>`+r.sancai.notes.map(n=>`<li>${n}</li>`).join("")+`</ul>`;
  h+=`<h3>四、數理入盤（尾數→天干→四化）</h3>`+r.ziwei.map(z=>`<div class="zw"><b>${z.grid} ${z.num}</b> → 尾數 ${z.num%10} → <b>${z.tg}干</b>：<span class="lu">${z.祿}化祿</span> ${z.權}化權 ${z.科}化科 <span class="xiong">${z.忌}化忌</span><div class="sub">${z.label}</div>${z.warn.map(w=>`<div class="warn">${w}</div>`).join("")}${z.good.map(w=>`<div class="good">${w}</div>`).join("")}</div>`).join("");
  h+=`<p class="sub">提示：把人格、總格帶來的化忌星對照你自己的紫微命盤；若落在本命化忌、灾宮或與地空地劫、擎羊陀羅、火星鈴星同宮，影響更明顯。</p>`;
  return h;
}
function download(name, text){ const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob(["\ufeff"+text],{type:"text/plain;charset=utf-8"})); a.download=name; a.click(); }
let lastA=null, lastS=[], seed=1, hist=new Set();
function doAnalyze(){
  try{ lastA=analyze($("#a-name").value, parseOv($("#a-ov").value), getStars("avoid"), getStars("want")); $("#a-out").innerHTML=reportHTML(lastA); }
  catch(e){ $("#a-out").innerHTML=`<p class="xiong">${esc(e.message)}</p>`; }
}
function doSuggest(newBatch){
  if(newBatch){ seed=Math.floor(Math.random()*1e6)+2; lastS.forEach(r=>hist.add(r.full)); } else hist=new Set();
  try{
    const nGiven=+document.querySelector("input[name=len]:checked").value;
    const {out,pats}=suggest($("#s-sur").value,{n:+$("#s-n").value||10,nGiven,gender:document.querySelector("input[name=gender]:checked").value,
      avoid:getStars("avoid"),want:getStars("want"),preferWx:[...document.querySelectorAll("input[name=wx]:checked")].map(i=>i.value),
      seed,fixed:[...$("#s-fixed").value.trim()][0]||null,fixedPos:nGiven===1?0:+document.querySelector("input[name=fixpos]:checked").value,exclude:hist});
    lastS=out;
    const nWant=+$("#s-n").value||10, nr=out.filter(r=>r.relaxed).length;
    const note=suggestNote($("#s-sur").value,nGiven,document.querySelector("input[name=gender]:checked").value,getStars("avoid"),getStars("want"),out.length,nWant);
    $("#s-info").textContent=`符合「人格、總格皆吉＋三才吉＋避開化忌星」的筆畫組合共 ${pats.length} 組，已挑出 ${out.length} 個名字`+(nr?`（其中 ${nr} 個用放寬條件：三才半吉，已標示）`:"")+(hist.size?`；已排除之前出過的 ${hist.size} 個`:"")+`。${note} 點名字看完整分析。`;
    $("#s-list").innerHTML=out.length?`<table class="tbl"><tr><th>名字</th><th>拼音</th><th>筆畫</th><th>人格</th><th>總格</th><th>三才</th><th>化忌</th><th>分數</th><th>寓意</th></tr>`+out.map((r,i)=>{const g=r.grids;return `<tr class="pick" data-i="${i}"><td><b>${r.full}</b></td><td>${r.chars.map(c=>c.py).join(" ")}</td><td>${r.chars.map(c=>c.s).join("-")}</td><td class="${jxCls(g.人格.jx)}">${g.人格.num}${g.人格.jx}</td><td class="${jxCls(g.總格.jx)}">${g.總格.num}${g.總格.jx}</td><td>${r.sancai.wx} ${r.sancai.level}${r.relaxed?'<span class="banji">（放寬）</span>':""}</td><td>${g.人格.sihua.忌}/${g.總格.sihua.忌}</td><td><b>${r.score}</b></td><td class="l">${r.meaning}</td></tr>`;}).join("")+`</table>`:`<p>${esc(note||"目前條件下找不到合適名字。")} 可改雙名、放寬性別、取消指定字或少勾一些化忌星。</p>`;
    document.querySelectorAll("tr.pick").forEach(tr=>tr.onclick=()=>{ document.querySelectorAll("tr.pick").forEach(x=>x.classList.remove("sel")); tr.classList.add("sel"); $("#s-out").innerHTML=reportHTML(lastS[+tr.dataset.i]); });
    if(out.length){ document.querySelector("tr.pick").click(); }
  }catch(e){ $("#s-list").innerHTML=`<p class="xiong">${esc(e.message)}</p>`; }
}
function doCompare(){
  const names=$("#c-in").value.split(/[\s,，、]+/).filter(Boolean); const rows=[]; const errs=[];
  for(const n of names){ try{ rows.push(analyze(n,{},getStars("avoid"),getStars("want"))); }catch(e){ errs.push(n+"："+e.message); } }
  rows.sort((a,b)=>b.score-a.score);
  const f=(g,k)=>`<td class="${jxCls(g[k].jx)}">${g[k].num}${g[k].jx}</td>`;
  $("#c-out").innerHTML=`<table class="tbl"><tr><th>名字</th>${GRIDS.map(k=>`<th>${k}</th>`).join("")}<th>三才</th><th>人格 祿/忌</th><th>總格 祿/忌</th><th>分數</th></tr>`+rows.map(r=>{const g=r.grids;return `<tr><td><b>${r.full}</b></td>${GRIDS.map(k=>f(g,k)).join("")}<td>${r.sancai.wx} ${r.sancai.level}</td><td>${g.人格.sihua.祿}/${g.人格.sihua.忌}</td><td>${g.總格.sihua.祿}/${g.總格.sihua.忌}</td><td><b>${r.score}</b></td></tr>`;}).join("")+`</table>`+errs.map(e=>`<p class="xiong">${esc(e)}</p>`).join("");
}
function doStroke(){
  $("#k-out").innerHTML=`<table class="tbl"><tr><th>輸入字</th><th>繁體</th><th>康熙筆畫</th><th>拼音</th><th>數理五行</th><th>字形五行</th><th>字庫寓意</th></tr>`+[...$("#k-in").value].filter(c=>c.trim()).map(c=>{const ci=charInfo(c);return `<tr><td>${esc(c)}</td><td class="big2">${esc(ci.t)}</td><td><b>${ci.s||"查無"}</b></td><td>${ci.py}</td><td>${ci.s?wuxing(ci.s):""}</td><td>${ci.wx||"-"}</td><td>${(NAME_CHARS[c]||{}).m||""}</td></tr>`;}).join("")+`</table>`;
}
function initStatic(){
  const box=(name)=>T.STARS.map(s=>`<label class="chip"><input type="checkbox" name="${name}" value="${s}">${s}</label>`).join("");
  $("#avoid-box").innerHTML=box("avoid"); $("#want-box").innerHTML=box("want");
  try{ const c=JSON.parse(localStorage.getItem("gn_chart")||"{}"); (c.a||[]).forEach(s=>{const i=document.querySelector(`input[name=avoid][value="${s}"]`); if(i) i.checked=true;}); (c.w||[]).forEach(s=>{const i=document.querySelector(`input[name=want][value="${s}"]`); if(i) i.checked=true;}); }catch(e){}
  document.querySelectorAll("input[name=avoid],input[name=want]").forEach(i=>i.onchange=()=>{saveChart(); updateChartTip();});
  updateChartTip();
  let rows=""; for(let n=1;n<=81;n++){ const [j,t,d]=T.SHULI[n]; const sh=sihua(n); rows+=`<tr><td>${n}</td><td class="${jxCls(j)}">${j}</td><td>${t}</td><td class="l">${d}</td><td>${wuxing(n)}</td><td>${sh.tg}</td><td>${sh.祿}/${sh.權}/${sh.科}/<span class="xiong">${sh.忌}</span></td></tr>`; }
  $("#t81").innerHTML=`<tr><th>數</th><th>吉凶</th><th>名稱</th><th>暗示</th><th>五行</th><th>天干</th><th>祿/權/科/忌</th></tr>`+rows;
  $("#sihua-tbl").innerHTML=`<tr><th>尾數</th><th>天干</th><th>化祿</th><th>化權</th><th>化科</th><th>化忌</th></tr>`+[1,2,3,4,5,6,7,8,9,0].map(d=>{const tg=T.TIANGAN[d];const s=T.SIHUA[tg];return `<tr><td>${d}</td><td>${tg}</td><td class="lu">${s[0]}</td><td>${s[1]}</td><td>${s[2]}</td><td class="xiong">${s[3]}</td></tr>`;}).join("");
  document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>{ document.querySelectorAll("nav button").forEach(x=>x.classList.remove("on")); b.classList.add("on"); document.querySelectorAll("section").forEach(s=>s.hidden=s.id!==b.dataset.t); });
  $("#a-go").onclick=doAnalyze; $("#a-name").onkeydown=e=>{if(e.key==="Enter")doAnalyze();};
  $("#a-save").onclick=()=>{ if(!lastA) doAnalyze(); if(lastA) download(lastA.full+"_姓名分析.txt", reportText(lastA)); };
  $("#s-go").onclick=()=>doSuggest(false); $("#s-new").onclick=()=>doSuggest(true);
  $("#s-save").onclick=()=>{ if(lastS.length) download($("#s-sur").value+"_起名推薦.txt", lastS.map((r,i)=>`#${i+1} ${r.full}（寓意：${r.meaning}）\n${reportText(r)}\n\n${"=".repeat(60)}\n`).join("\n")); };
  $("#c-go").onclick=doCompare; $("#k-go").onclick=doStroke; $("#k-in").onkeydown=e=>{if(e.key==="Enter")doStroke();};
  $("#clear-chart").onclick=()=>{ document.querySelectorAll("input[name=avoid],input[name=want]").forEach(i=>i.checked=false); saveChart(); updateChartTip(); };
}
function updateChartTip(){ const a=getStars("avoid"), w=getStars("want"); $("#chart-tip").textContent = a.length||w.length ? `目前命盤設定：避開 ${a.join("、")||"—"} 化忌；想加強 ${w.join("、")||"—"}` : "尚未設定命盤（到「我的紫微命盤」勾選後，分析與起名會自動避開重忌）"; }
async function boot(){
  initStatic();
  const [db,nc]=await Promise.all([fetch("data/kangxi_strokes.json").then(r=>r.json()), fetch("data/name_chars.json").then(r=>r.json())]);
  DB=db; NAME_CHARS=nc; $("#loading").remove(); doAnalyze();
}
boot();
