(function () {
  var MAIL = 'mochachen1225@gmail.com';
  var SYNONYMS = [
    ['手帳牆', '相簿', '日記牆', '牆面', 'gallery', 'journal wall', 'album', '手帳ウォール', '다이어리 벽', '앨범'],
    ['月曆', '日曆', '月曆頁', '日曆頁', '行事曆', 'calendar', 'month view', 'カレンダー', '캘린더', '달력'],
    ['拍立得', '照片卡', '卡片', '相片', '看照片', '詳情', 'photo card', 'card', 'フォトカード', '포토카드', '사진'],
    ['icon', '圖示', '換icon', '切換icon', '桌面圖示', 'app圖示', 'app icon', 'アイコン', '아이콘'],
    ['四格', '拍貼', '4格', '1x4', '2x2', '4-cut', 'four cut', 'photo booth', '4カット', '4コマ', '네컷'],
    ['合拍', '去背', '同框', '毛孩', '偶像', '本命', 'co-snap', 'cosnap', 'cutout', '切り抜き', '合写', '누끼', '합사진'],
    ['小電影', '影片', '回顧', 'photo dump', '時光放映機', 'movie', 'video', 'recap', 'projector', 'ムービー', '動画', '영화', '영상'],
    ['共享', '朋友', '一起寫', '邀請', 'shared', 'friends', 'invite', '共有', '友だち', '공유', '친구'],
    ['暗房', '今晚', '顯影', 'darkroom', 'develop tonight', '今夜現像', '오늘 밤 현상', '암실'],
    ['地圖', '足跡', '郵戳', '城市', 'map', 'footprint', 'postmark', 'city', 'マップ', '足あと', '지도', '발자국'],
    ['濾鏡', '夜拍', '極光', '骰子', 'filter', 'night', 'aurora', 'フィルター', '필터'],
    ['牆面風格', '背景', '底紙', '主題', '切換版面', '版面', '外觀風格', '極簡深色', '森林文青', 'wall style', 'theme', 'background', 'layout', 'appearance', 'minimal dark', '背景テーマ', 'レイアウト', '外観スタイル', '배경 테마', '레이아웃', '화면 스타일'],
    ['小工具', '主畫面', '桌面', '冰箱貼', 'widget', 'home screen', 'ウィジェット', '위젯'],
    ['浮水印', '印章', '防盜', 'watermark', 'stamp', '透かし', '워터마크'],
    ['列印', '超商', '4x6', 'print', 'kiosk', 'プリント', '인화'],
    ['換手機', '備份', '封存檔', '同步', 'backup', 'archive', 'sync', 'switch phone', '機種変更', 'アーカイブ', '기기 변경', '아카이브']
  ];

  var DATA = {
    zh: {
      fabLabel: '問小狐狸',
      title: '小狐狸・懶人小幫手',
      subtitle: '輸入關鍵字即時搜，或點主題直接問我 🦊',
      placeholder: '搜關鍵字（手帳牆、月曆、換圖示、拍立得、四格、合拍…）',
      sendBtn: '搜尋',
      backHome: '← 看其他主題',
      mailBtn: '✉️ 寫信給摩卡',
      moreMatches: '🔎 相關解答（點一下直接看）：',
      liveLabel: '⚡ 即時建議：',
      greeting: '嗨！我是 MoriSnap 的小狐狸 🦊\n想知道怎麼進手帳牆、看月曆、切圖示或任何功能？直接打關鍵字搜尋，或點下面主題問我！',
      topicPrompt: '你想了解哪一題呢？點一下我馬上回答 👇',
      notFound: '這題小狐狸暫時沒有找到完全相符的答案 🥺 試試換個簡短關鍵字（例如「月曆」「圖示」「四格」「共享」），或直接寫信給摩卡，我們會親自回覆你！',
      topics: [
        {
          id: 'basics',
          label: '🧭 基礎操作（手帳牆・月曆・照片卡・換圖示）',
          items: [
            {
              q: '怎麼進入手帳牆？怎麼回到相機？',
              kw: ['手帳牆', '進入', '打開', '相簿', '日記牆', '在哪', '回到相機', '縮圖', '左下角'],
              a: '進手帳牆超簡單：\n① 在相機畫面「左下角」，點最近一張照片縮圖（寫著「手帳牆」，還沒拍過時是疊片圖示），就會打開手帳牆。\n② 拍完照按存檔時，直接點「看手帳」也會立刻跳進去。\n③ 要回相機拍照，點手帳牆「左上角的 📷 相機圖示」就秒切回去！'
            },
            {
              q: '怎麼看月曆頁（日曆頁）？一天拍很多張怎麼換「代表封面」？',
              kw: ['月曆', '日曆', '月曆頁', '日曆頁', '代表封面', '依天收合', '全部攤開', '疊牌', '長按'],
              a: '看月曆只要 2 步：\n① 進入手帳牆 → 點上方左側的月份選單（📅 2026 年 11 月 ▾）→ 選「月曆頁」，就會看到每天一張代表照片的整月月曆（左右滑或點箭頭切月份）。\n② 同一個選單裡也能切換「依天收合」（一天疊成一張代表封面）或「全部攤開」。\n③ 想換某天的代表封面？點進那一天後「長按」你最喜歡的那張 → 選「設為這天的代表照片」即可 📅'
            },
            {
              q: '怎麼看單張拍立得風照片卡？點開後可以做什麼？',
              kw: ['拍立得', '照片卡', '看照片', '單張', '放大', '詳情', '左右滑', '怎麼看', '編輯', '搬移'],
              a: '在手帳牆（或月曆裡點進某一天）直接點一下卡片，就能全螢幕放大檢視（微短片會自動循環播放）！\n如果那天拍了超過 1 張且開著「依天收合」，先點疊牌展開當天全部卡片，再點單張就會打開。\n點開後可以：\n・左右滑動翻看上一張／下一張\n・點上方「日期」補改拍攝日期（卡片上的日期也會一起更新！）\n・點「📍 城市」手動補選城市\n・點上方手帳名稱，把照片移進「共享手帳」\n・底部可一鍵發限動、4×6 列印、下載到「照片」App 或刪除 ✨'
            },
            {
              q: '怎麼切換桌面 App Icon（圖示）？12 款季節圖示怎麼解鎖？',
              kw: ['icon', '圖示', '換icon', '切換icon', '桌面圖示', '季節圖示', '自動換季', '櫻花', '楓葉', '下雪', '聖誕', '新年', '帥氣'],
              a: '換桌面圖示步驟：\n① 進入手帳牆 → 點右上角「⚙️ 設定」（VIP 是 👑 皇冠圖示）\n② 往下滑到「App 圖示」區塊，就能在「復古皮革相機」與「小狐狸」兩種風格、共 12 款季節圖示之間自由點選切換！\n・經典 2 款免費隨時換；5 大季節款當季免費開放（櫻花 3–4 月、楓葉 10–11 月、下雪 12–2 月、聖誕 12/1–12/31、新年 12/26–2/15），VIP 全年 12 款隨時換。\n・也可打開「跟著季節自動換」讓它隨日期自動換裝。\n・備註：換圖示時 iPhone 會跳出一則系統提示，這是 iOS 的規定；帥氣極簡深色金屬相機系列也將在後續更新登場 🖤'
            },
            {
              q: '怎麼切換版面、牆面背景與外觀風格（森林文青／極簡深色）？',
              kw: ['牆面', '牆面風格', '背景', '底紙', '背景照', '牛皮紙', '方格', '深色', '主題', '切換版面', '版面', '外觀風格', '極簡深色', '森林文青', '簡約風格'],
              a: '多種版面與風格隨你切：\n① 手帳牆排列版面：點上方左側月份選單（📅 ▾），自由切「依天收合」「全部攤開」或「月曆頁」。\n② 牆面背景風格：點右上「⋯（更多）」→「展示牆面風格」，可換奶油棉紙、牛皮紙、方格筆記、午夜書桌，VIP 也能自訂背景照。\n③ 四格／限動版面：四格可切 1×4 與 2×2；限動有 9 色棉紙一鍵換裝。\n④ 外觀風格（1.1 免費更新即將登場）：到「設定 › 外觀風格」可一鍵切「極簡深色（Minimal Dark）」，自動連動霧黑介面、酷感濾鏡與極簡貼紙，切回森林文青立即恢復 🎨'
            }
          ]
        },
        {
          id: 'top3',
          label: '⭐ 必看 5 題（特色・浮水印・共享・VIP）',
          items: [
            {
              q: '免費的相機 App 那麼多，為什麼要用 MoriSnap？',
              kw: ['為什麼', '差別', '一般相機', '免費相機', '不同', '特色', '值得', '好用'],
              a: 'MoriSnap 不只是相機，是懶人的生活手帳！一般相機拍完，照片就躺在相簿裡；MoriSnap 會幫你把照片變成有日期的手帳卡片，自動排進手帳牆和月曆，週末再剪成一支小電影。你不用寫字、不用整理，回頭看每一天都在。而且免費就能用，喜歡再一次買斷 VIP，不訂閱 🦊'
            },
            {
              q: '卡片上的浮水印怎麼關？',
              kw: ['浮水印', '關閉浮水印', '拿掉', '右下角', '防盜', '小印章', 'watermark'],
              a: '卡片上可能有兩種字：\n① 右下角的「MoriSnap」小字是品牌浮水印 → VIP 一次買斷後，到「設定 › 個人專屬貼紙與印章」打開「隱藏品牌小浮水印」就會拿掉。\n② 你自己的帳號或國旗是「防盜小印章」→ 免費就能關：編輯頁右上「防盜小印章」選「關閉」就好 ✨'
            },
            {
              q: '怎麼和朋友共享手帳？',
              kw: ['怎麼共享', '共享手帳', '邀請朋友', '一起寫', '共寫', '連結'],
              a: '完全免費、不用註冊帳號，3 步驟：\n① 打開手帳牆，點上方手帳名稱 →「新增共享手帳本」取名字\n② 再點手帳名稱 →「管理共享手帳本」→「邀請朋友一起貼」，把連結傳給朋友\n③ 朋友點開連結、裝好 MoriSnap 就加入了！之後拍照存檔時把「🔒 個人私密」換成這本手帳即可，照片存在建立者的 iCloud，朋友不用多佔空間 👥'
            },
            {
              q: '加入共享手帳為什麼要登入 iCloud（還要驗證）？會收錢嗎？',
              kw: ['一定要icloud', 'icloud要錢', '雙重驗證', '驗證', '很煩', '共享付費', '佔空間', '5gb', 'apple帳號', '安全嗎', '要付錢'],
              a: '完全不用付費，也不是叫你買雲端空間！需要登入 Apple 帳號（與雙重驗證），就像「社區門禁核對受邀名單」一樣——Apple 要確認是受邀的家人朋友本人，才不會隨便誰拿到連結就能偷看私密照片，連我們也看不到。\n只需要確認這一次，不用辦 MoriSnap 帳號；而且照片放在建立者的空間，加入的朋友不會用到自己的容量，免費 5GB 就夠 🔐'
            },
            {
              q: 'VIP 是每個功能都要另外付錢嗎？',
              kw: ['另外付錢', '分開買', '單買', '解鎖全部', '幣別', '新台幣', 'vip怎麼算'],
              a: '不是！VIP 一次買斷就解鎖全部：所有濾鏡、貼紙、相框、影片範本、足跡地圖、今晚才顯影⋯⋯不用每項另外買，也不訂閱。價格以 App Store 顯示為準，會用你所在國家的幣別（台灣是新台幣）✨'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 拍照・四格・合拍・貼紙・電影',
          items: [
            {
              q: '韓系 1×4 ＆ 日系 2×2 四格拍貼怎麼拍？可以挑舊照嗎？',
              kw: ['四格', '拍貼', '1x4', '2x2', '倒數', '連拍', '挑四張', '拼貼'],
              a: '兩種拍法都可以！\n① 即時連拍：在相機觀景窗右下角點「四格模式」，按快門就會 3-2-1 倒數連拍 4 張，拍完在編輯頁自由切韓系 1×4 長條或日系 2×2 拼貼。\n② 挑舊照拼貼：進入手帳牆 → 點右上角「⋯（更多）」→「四格拍貼」，就能從已拍的照片挑 4 張一鍵合成，也能配相框和貼紙喔 🎞️'
            },
            {
              q: '「本機 1 秒去背合拍」怎麼用？毛孩或偶像都可以嗎？',
              kw: ['去背', '合拍', '同框', '毛孩', '寵物', '偶像', '本命', '追星', '立牌'],
              a: '在相機畫面點「合拍」，從手機相簿挑一張毛孩、偶像、動漫角色或娃照，手機會在本機 1 秒自動去背（完全不上傳伺服器），直接疊進即時相機畫面裡！你可以自由拖拉縮放或水平翻轉，單張拍照和四格模式通通都能一起合照 💖'
            },
            {
              q: '14 款濾鏡、隨機骰子、自訂濾鏡、打孔框與日期字體怎麼用？',
              kw: ['濾鏡', '骰子', '自訂濾鏡', '色卡', '打孔框', '活頁', '車票', '日期字體', '手寫字體', '相簿匯入'],
              a: '・拍照濾鏡：相機下方可滑選 14 款日系透光感濾鏡，點左邊「🎲 骰子」隨機抽濾鏡；也可以自訂專屬濾鏡配方並存起來！快門旁也能匯入相簿舊照。\n・卡片與字體：拍完進編輯頁，可換經典框／色塊框，VIP 還解鎖活頁打孔框、車票打孔框、自動色卡圓點，以及打字機／極簡／手寫風 3 款日期字體 🎨'
            },
            {
              q: '怎麼錄 3 秒短片、搖一搖換貼紙或用 26 款日期貼紙？',
              kw: ['錄影', '短片', '影片', '旋轉', '縮放', '貼紙', '搖一搖', '手寫', 'pencil', '日期貼紙', '音量鍵'],
              a: '輕按快門（或音量鍵）拍照、長按錄 3 秒有聲微短片！拍完搖一搖手機就能換一組貼紙，內建 1,200+ 原創插畫貼紙與 26 款自動帶入當天日期的日期貼紙（前 10 款免費）；點貼紙拖右下 🔄 圓點可單指旋轉縮放，點 ✏️ 還可用手指或 Apple Pencil 手寫塗鴉加白邊！'
            },
            {
              q: '心情天氣戳印怎麼用？',
              kw: ['戳印', '印章', '心情', '天氣', '晴', '雨', '歇腳', '蓋章'],
              a: '拍完在編輯頁直接點「晴、雨、咖啡歇腳」，就會像木頭印章一樣蓋在卡片角落！更多款（共 12 顆，前 3 顆免費）在貼紙抽屜的「印章」分頁裡喔。'
            },
            {
              q: '很暗的地方也能拍嗎？',
              kw: ['暗', '夜拍', '夜景', '晚上', '極光', '夜色', '黑'],
              a: '可以！所有濾鏡都會自動判斷亮度，暗處按快門會自動連拍疊圖提亮降噪（拿穩約半秒）；切到「夜色極光」濾鏡更會收集約 2 秒微光，夜晚也能拍出清晰氛圍感 🌙'
            },
            {
              q: '每週／每月小電影、時光放映機、月度海報在哪裡？',
              kw: ['小電影', '存在哪裡', '存檔', '時光放映機', '月度海報', '回顧', 'photo dump', '挑精華', '音樂', '靜音'],
              a: '都在手帳牆裡！\n・每週／每月小電影：點手帳牆右上角「🎞️ 膠捲圖示」，內建免費 Photo Dump 範本與「自動挑精華」開關，可選內建輕音樂或靜音輸出；按「存檔」才會存進手機「照片」App（不會出現在手帳牆上）。\n・時光放映機：點手帳牆月份選單旁的「時光放映機」按鈕，就能用復古幻燈片喀噠聲重溫整月。\n・月度海報：點月份選單（📅 2026 年 11 月 ▾）→「月度海報」，限動尺寸支援一鍵發限動 🎬'
            },
            {
              q: '怎麼印出來（4×6 超商列印）與 9 色限動排版？',
              kw: ['列印', '超商', '印出來', '4x6', '虛線', '裁切', '畫質', '限動', '棉紙', '一鍵發限動', '分享', '沒反應'],
              a: '・4×6 列印版：點開照片卡選列印，會自動留好 5mm 安全邊距＋可選淡灰裁切虛線，搭配 VIP 列印級畫質（2160×2700）超商印最清楚！\n・9 色限動排版：米白、淡灰免費，VIP 全 9 色棉紙＋夾子膠帶一鍵換裝。若其他社群 App 分享選單點了沒反應，建議直接使用 MoriSnap 內的「一鍵發限動」按鈕最穩 ✨'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ 小工具・暗房・足跡地圖',
          items: [
            {
              q: '怎麼把 MoriSnap 加到主畫面（小工具）？',
              kw: ['小工具', '主畫面', '桌面', '冰箱貼', '月曆', '本月封面', '去年的今天', '暗房倒數', 'widget'],
              a: '先打開 App 一次，回主畫面長按空白處 → 點左上「＋」→ 搜尋 MoriSnap，就有冰箱貼（小）、本月封面（中）、磁鐵月曆（大），還有「暗房倒數」（開今晚才顯影時看暗房裡幾張、還要多久洗好）！冰箱貼有「去年的今天」會優先放那張喔 ✨'
            },
            {
              q: '「今晚才顯影」是什麼？',
              kw: ['今晚', '顯影', '暗房', '通知', '晚上', '洗出來'],
              a: 'VIP 可以在設定裡打開！白天用相機拍的照片先放進暗房，晚上（可選 18:00–23:00）一起洗出來並收到一則手機本機通知。從相簿匯入、存進共享手帳的照片不會進暗房；關掉開關就會立刻全部顯影！'
            },
            {
              q: '足跡地圖在哪裡？會知道我的精確位置嗎？',
              kw: ['地圖', '足跡', '位置', '定位', '座標', '城市', '隱私', '國界', '郵戳'],
              a: '進入手帳牆 → 點右上角「⋯（更多）」→「足跡地圖」就能打開（4 種紙紋地圖＋城市郵戳，不畫國界）。\n足跡地圖預設關閉，開啟時只問一次「大概位置」，在手機離線換算成城市名稱（不存精確座標），資料只存在你的手機和自己的 iCloud 🗺️'
            },
            {
              q: '卡片上怎麼印城市？聊天軟體存的圖沒日期地點怎麼辦？',
              kw: ['印城市', '卡片城市', '城市名', '聊天', '聊天軟體', '沒日期', '改日期', '補日期', '地點'],
              a: '・印城市：先在設定開「足跡地圖」（VIP），拍完在編輯頁相框下方點「📍 城市」，卡片日期後就會印上城市名。\n・補改日期／城市：打開照片詳情頁點上方「日期」即可修改（卡片上印的日期會一起換新！），點「📍 城市」也能手動搜尋補選城市。'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 同步・共享・換機・空間',
          items: [
            {
              q: '換手機或不小心刪掉 App，照片還在嗎？會佔很多空間嗎？',
              kw: ['換手機', '換機', '封存檔', '匯出', '匯入', '刪除', '刪掉', '誤刪', '空間', '容量', 'mb', '草稿'],
              a: '到「設定 → 匯出／匯入封存檔」可一鍵打包全部手帳存到「檔案」或雲端硬碟，新手機匯入就復原！另外 iCloud 備份、預設開啟的「自動存到照片」與 VIP iCloud 同步也能保護資料（拍照閃退也有照片草稿保護）。\n一般照片卡約 0.5–1MB、VIP 列印級約 2MB，可在「設定 → 儲存空間」管理；App 內單張誤刪 30 天內可從「最近刪除」救回。'
            },
            {
              q: 'iCloud 同步和「另存到雲端硬碟資料夾」有什麼不同？',
              kw: ['同步', 'icloud', 'ipad', '雙機', '備份', '雲端', '資料夾', '另存', '不同', '差別', '檔案', '灰色'],
              a: '・iCloud 同步（VIP）：讓你的 iPhone 和 iPad 手帳一模一樣（照片、貼紙、印章、濾鏡、牆面風格全同步），換手機打開就回來。\n・另存一份到資料夾（VIP）：每存一張就複製一份圖片到你選的資料夾（建議先建一個 MoriSnap 資料夾），可選 iCloud Drive 或「我的 iPhone」裡的資料夾，免另設帳號。\n・小提醒：有些雲端硬碟 App 不開放選資料夾（會顯示灰色），這時請改選 iCloud Drive，或在照片詳情頁按分享存進去！'
            },
            {
              q: '共享手帳誰可以刪照片？朋友刪了怎麼還在？退出會怎樣？',
              kw: ['共享', '朋友', '誰可以刪', '刪照片', '下載到照片', '還在', '沒同步', '退出', '移出', '多選'],
              a: '・刪除權限：每人都能刪自己的照片，建立者可刪所有人的（刪掉先進自己「最近刪除」30 天；支援多選批次放進共享手帳）。\n・同步時間：朋友刪掉後會透過 iCloud 通知在幾秒～幾十秒內同步；若 App 一直開著，回主畫面再打開就會立刻更新。\n・退出後：手帳會從他手機消失，但他之前存到「照片」App 的不受影響，原本手帳裡的照片其他成員照樣看得到！'
            }
          ]
        },
        {
          id: 'vip',
          label: '💳 VIP・恢復購買・字太小・小狐狸',
          items: [
            {
              q: '是訂閱制嗎？VIP 1.0 有什麼？更新要再付錢嗎？',
              kw: ['錢', '價格', '訂閱', '免費', 'vip', '買斷', '廣告', '收費', '更新', '新貼紙', '新功能'],
              a: '完全不是訂閱制，免費版也零廣告、不限張數！VIP 是「一次買斷終身用」，解鎖 1.0 全部 1,200+ 貼紙與季節分類、26 款日期貼紙、12 顆戳印、打孔框、自動色卡、日期字體、列印級畫質、今晚才顯影、足跡地圖、月度海報、9 色限動、全部小電影風格、關閉浮水印、全年 12 款季節圖示、iCloud 雙機同步與雲端資料夾備份——之後 App Store 更新加的新素材也完全免費自動解鎖 ✨'
            },
            {
              q: '換新手機／iPad 怎麼恢復 VIP？怎麼申請退款？',
              kw: ['恢復', '還原', '購買', 'ipad', '重裝', '退款', '退費', '取消'],
              a: '・恢復 VIP：登入當初購買的同一個 Apple 帳號 → MoriSnap → 設定 → 點「恢復購買」就秒解鎖！\n・申請退款：付款由 Apple 處理，請至 reportaproblem.apple.com 登入申請。'
            },
            {
              q: '覺得字太小、權限按拒絕、沒聲音或 iPad 分割畫面卡住？',
              kw: ['字太小', '字體', '大字', '放大', '旁白', 'voiceover', '權限', '拒絕', '沒聲音', '麥克風', '分割', '黑畫面'],
              a: '・大字與旁白：MoriSnap 自動跟著 iPhone 系統「文字大小」放大，並支援旁白（VoiceOver）。\n・權限與聲音：到系統「設定 → MoriSnap」把相機、麥克風、照片、位置或通知重新打開即可；iPad 分割畫面若暫停相機，切回全螢幕就恢復 💛'
            },
            {
              q: '小狐狸是誰？VIP 可以許願嗎？',
              kw: ['小狐狸', '狐狸', '吉祥物', '名字', '是誰', '許願', '建議', '想要', '隱私', '伺服器'],
              a: '就是我本人啦 🦊！我是 MoriSnap 的專屬吉祥物「小狐狸」（App 裡有 66 款我的插畫貼紙）。我們零伺服器、無廣告、無分析工具；只要你是 VIP，隨時點下方「寫信給摩卡」許願想看到的貼紙或小功能 ✨'
            }
          ]
        }
      ]
    },
    en: {
      fabLabel: 'Ask Fox',
      title: 'Little Fox · Lazy FAQ Helper',
      subtitle: 'Search any keyword or tap a topic below 🦊',
      placeholder: 'Search (journal wall, calendar, icon, 4-cut, co-snap…)',
      sendBtn: 'Search',
      backHome: '← Other topics',
      mailBtn: '✉️ Email Mocha',
      moreMatches: '🔎 Related answers (tap to read):',
      liveLabel: '⚡ Quick matches:',
      greeting: 'Hi! I\'m Little Fox from MoriSnap 🦊\nNeed help finding the journal wall, calendar, app icons, or any feature? Type a keyword to search or tap a topic below!',
      topicPrompt: 'Pick a question and I\'ll answer right away 👇',
      notFound: 'Hmm, I didn\'t find an exact match for that 🥺 Try a shorter keyword (like "calendar", "icon", "4-cut", "shared"), or email Mocha directly — we reply personally!',
      topics: [
        {
          id: 'basics',
          label: '🧭 Basics (Wall · Calendar · Photo Cards · Icons)',
          items: [
            {
              q: 'How do I open the Journal Wall and go back to the camera?',
              kw: ['journal wall', 'gallery', 'album', 'open wall', 'back to camera', 'thumbnail', 'bottom left', 'where'],
              a: 'Super easy:\n① On the camera screen, tap the latest photo thumbnail at the bottom-left (labeled "Journal" — or the stack icon before your first shot) to open your Journal Wall.\n② Right after saving a shot, tapping "View Journal" jumps straight in too.\n③ To shoot again, tap the 📷 camera icon at the top-left of the Journal Wall!'
            },
            {
              q: 'How do I view the Calendar page & change a day\'s featured cover?',
              kw: ['calendar', 'month view', 'day cover', 'featured', 'stack', 'expand', 'collapse', 'long press'],
              a: 'Two quick taps:\n① On the Journal Wall, tap the month pill at the top-left (📅 e.g. Nov 2026 ▾) → choose "Calendar" to see your month grid with one cover photo per recorded day (swipe or tap arrows to switch months).\n② In the same menu, switch between "Stack by Day" (one cover per day) and "Show Every Photo".\n③ To change a day\'s cover: open that day from the wall or calendar, touch & hold your favorite shot → tap "Feature This Photo for the Day" 📅'
            },
            {
              q: 'How do I view a full photo card and what can I do inside it?',
              kw: ['photo card', 'view photo', 'detail', 'full screen', 'swipe', 'edit date', 'move', 'share', 'delete'],
              a: 'Tap any card on the Journal Wall (or inside a day on the Calendar) to open it full screen (3-second clips auto-loop!). If a day has multiple shots while "Stack by Day" is on, tap the stack first to see all shots from that day, then tap any card.\nInside a card you can:\n• Swipe left/right to browse previous & next shots\n• Tap the date at top to fix the shooting date (updates the printed card date too!)\n• Tap "📍 City" to pick/change the city\n• Tap the journal name to move it to a Shared Journal\n• Share to Stories, print 4×6, save to Photos, or delete ✨'
            },
            {
              q: 'How do I change the Home Screen App Icon?',
              kw: ['icon', 'app icon', 'change icon', 'switch icon', 'seasonal icon', 'sakura', 'maple', 'snow', 'christmas', 'new year', 'minimal'],
              a: 'To switch your App Icon:\n① Open the Journal Wall → tap ⚙️ Settings at the top-right (👑 crown if you\'re VIP)\n② Scroll to the "App Icon" section to pick from 12 icons across Vintage Leather Camera & Little Fox!\n• The 2 Classic icons are free anytime; 5 seasonal icons unlock free in season (Sakura Mar–Apr, Maple Oct–Nov, Snow Dec–Feb, Christmas Dec 1–31, New Year Dec 26–Feb 15), and VIP unlocks all 12 year-round.\n• Toggle "Change with the seasons" for automatic seasonal icon swaps. (iOS always displays a brief confirmation alert when any app changes its icon; sleek metallic dark camera icons are also arriving in an upcoming update 🖤)'
            },
            {
              q: 'How do I switch layouts, wall backgrounds & app appearance styles?',
              kw: ['wall style', 'background', 'theme', 'paper', 'kraft', 'grid', 'dark', 'custom background', 'layout', 'switch layout', 'appearance', 'minimal dark', 'forest'],
              a: 'Switch layouts & styles anytime:\n① Wall layout: Tap the top-left month pill (📅 ▾) to switch between Stack by Day, Show Every Photo, and Calendar.\n② Wall background: Tap "⋯ (More)" → "Wall Style" for Cream Paper, Kraft, Grid, Midnight Desk, or a custom photo (VIP).\n③ 4-Cut & Story layouts: Toggle 1×4 vs. 2×2 in 4-Cut, or shuffle 9 cotton-paper Story layouts in one tap.\n④ Appearance Style (Coming free in 1.1): Settings › Appearance will add a one-tap switch between Warm Forest and Minimal Dark with matching dark UI, editorial filters & minimal stickers 🎨'
            }
          ]
        },
        {
          id: 'top3',
          label: '⭐ Top 5 (Why · Watermark · Share · VIP)',
          items: [
            {
              q: 'There are so many free camera apps — why use MoriSnap?',
              kw: ['why', 'different', 'compare', 'ordinary', 'camera app', 'worth'],
              a: 'MoriSnap isn\'t just a camera; it\'s a photo diary for lazy days! With ordinary camera apps, photos just sit in your camera roll. MoriSnap turns each shot into a dated journal card and automatically fills your journal wall, calendar, and a weekly movie—no writing or sorting needed. Free to use, and VIP is a one-time purchase with no subscription 🦊'
            },
            {
              q: 'How do I remove the watermark on my cards?',
              kw: ['watermark', 'remove', 'hide', 'brand', 'stamp', 'bottom right'],
              a: 'There are two kinds of text on a card:\n① Small "MoriSnap" text at bottom right (brand watermark) → With one-time VIP, go to Settings › My Stickers & Stamp and turn on "Hide Brand Watermark".\n② Your own handle or flag (anti-theft stamp) → Free to turn off: tap the stamp button at top right of the editor and choose "Off" ✨'
            },
            {
              q: 'How do I share a journal with friends?',
              kw: ['how to share', 'shared journal', 'invite', 'friends', 'together'],
              a: 'Free and no signup needed, in 3 steps:\n① On your journal wall, tap the journal name at the top → "New shared journal" and name it\n② Tap the name again → "Manage shared journals" → "Invite friends" and send the link\n③ Your friend opens the link and installs MoriSnap! When saving a photo, switch "🔒 Private" to that journal. Photos live in the creator\'s iCloud without using friends\' storage 👥'
            },
            {
              q: 'Why do I need to sign in to iCloud (and verify) to join a shared journal? Will it cost money?',
              kw: ['require icloud', 'pay for icloud', 'verify', '2fa', 'two-factor', '5gb', 'storage', 'safe', 'private', 'apple account'],
              a: '100% free — no need to buy cloud storage! Signing in with your Apple Account (and Apple\'s verification) works like a private guest list at the door: Apple makes sure only invited friends and family can open the album so strangers with a link can\'t peek (even we can\'t see them).\nYou only verify once with no MoriSnap account needed, and photos use the creator\'s iCloud — friends use zero personal storage (free 5GB is plenty) 🔐'
            },
            {
              q: 'Do I have to pay separately for each VIP feature?',
              kw: ['separately', 'per item', 'unlock all', 'each feature', 'currency', 'pay again'],
              a: 'No! One-time VIP unlocks everything at once: all filters, stickers, frames, movie templates, Footprint Map, Develop Tonight, and more—no per-item charges and no subscriptions. Pricing is shown in your local currency on the App Store ✨'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 Camera, 4-Cut, Co-Snap & Movies',
          items: [
            {
              q: 'How do Korean 1×4 & Japanese 2×2 4-Cut booths work?',
              kw: ['4-cut', 'four cut', 'booth', '1x4', '2x2', 'countdown', 'collage'],
              a: 'Two easy ways:\n① Live booth: Tap the 4-Cut button at the bottom-right of the camera viewfinder to shoot 4 countdown frames, then switch between Korean 1×4 strip and Japanese 2×2 grid in the editor.\n② From existing photos: On the Journal Wall, tap "⋯" → "4-Cut Photo Booth" to pick any 4 shots and turn them into a 4-Cut card 🎞️'
            },
            {
              q: 'How does 1-Sec On-Device Cutout Co-Snap work?',
              kw: ['co-snap', 'cosnap', 'cutout', 'pet', 'idol', 'overlay', 'lift'],
              a: 'Tap "Co-Snap" in the camera and pick any photo of your pet, favorite character, plushie, or idol — MoriSnap lifts the subject cleanly on-device in 1 second (never uploaded!) and places them right inside your live viewfinder. Drag, resize, or flip them — works on both single shots and 4-Cut booths 💖'
            },
            {
              q: '14 filters, random dice, custom recipes, punch frames & fonts?',
              kw: ['filter', 'dice', 'custom filter', 'punch', 'palette', 'date font', 'import'],
              a: '• Filters: Swipe 14 airy film filters in the camera, tap the 🎲 dice to shuffle randomly, save your own custom filter recipe, or import photos from your library next to the shutter.\n• Frames & fonts: Switch frames in the editor; VIP unlocks Binder-Punch & Ticket-Punch frames, Auto Color Palette dots, and Typewriter / Minimal / Handwritten date fonts 🎨'
            },
            {
              q: '3s clips, shake stickers, 26 date stickers & 12 mood stamps?',
              kw: ['video', 'clip', 'rotate', 'shake', 'date sticker', 'stamp', 'mood', 'weather', 'pencil', 'doodle', 'volume'],
              a: 'Tap shutter (or volume button) for photos, hold for 3-second clips! Shake to shuffle stickers, choose from 1,200+ illustrated stickers & 26 dynamic date stickers (first 10 free), drag 🔄 to rotate/resize with one finger, tap Sunny/Rainy/Coffee for woodblock mood stamps (12 total, 3 free), or tap ✏️ to doodle with Apple Pencil!'
            },
            {
              q: 'Can I shoot in dark rooms or at night?',
              kw: ['dark', 'night', 'aurora', 'low light'],
              a: 'Yes! Every filter auto-stacks quick bursts in low light (hold steady ~0.5s), and Night Aurora gathers ~2s of ambient light for crisp evening memories 🌙'
            },
            {
              q: 'Where are Weekly Movies, Time Projector & Monthly Posters?',
              kw: ['movie', 'weekly', 'saved', 'photos app', 'projector', 'poster', 'photo dump', 'highlights', 'mute'],
              a: 'All right on the Journal Wall!\n• Weekly/Monthly Movies: Tap the 🎞️ film icon at top-right — includes free Photo Dump & Auto-pick highlights, plus muted export. Tap "Save" to export to your Photos app (movies don\'t appear on the wall).\n• Time Projector: Tap the Projector button next to the month pill for 35mm slide playback.\n• Monthly Poster: Tap the month pill (📅) → "Monthly Poster" for one-tap Story export 🎬'
            },
            {
              q: '4×6 printing, 9-shade Story layouts & share menu tips?',
              kw: ['print', '4x6', 'kiosk', 'story', 'cotton', 'share', 'unresponsive', 'menu'],
              a: '4×6 Print Sheet adds 5mm safe margins + optional cut lines (pair with VIP 2160×2700 Print-Grade Quality). Story Layout offers 9 cotton-paper shades + clip/tape accents (cream & soft gray free). If another social app\'s share popup doesn\'t respond, use MoriSnap\'s built-in "Share to Story" button instead ✨'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ Widgets, Darkroom & Map',
          items: [
            {
              q: 'How do I add MoriSnap widgets to my Home Screen?',
              kw: ['widget', 'home screen', 'fridge', 'magnet', 'calendar', 'on this day', 'countdown'],
              a: 'Open MoriSnap once, long-press an empty area on your Home Screen → tap "+" at top-left → search MoriSnap! Pick from Fridge Magnet ("On This Day"), Month Cover, Magnet Calendar, or Darkroom Countdown (shows pending photos & time left when VIP Develop Tonight is on)!'
            },
            {
              q: 'What is "Develop Tonight"?',
              kw: ['develop', 'tonight', 'darkroom', 'notification', 'wait'],
              a: 'VIP members can turn on Develop Tonight in Settings: daytime camera snaps rest in a cozy darkroom and develop together at your chosen evening time (18:00–23:00) with a local notification. Library imports and Shared Album photos skip the darkroom, and turning it off develops everything immediately!'
            },
            {
              q: 'Where is the Footprint Map & does it track my exact location?',
              kw: ['map', 'footprint', 'location', 'gps', 'city', 'track', 'border', 'postmark'],
              a: 'Open the Journal Wall → tap "⋯" (More) → "Footprint Map" (4 paper styles & city postmarks, gentle coastlines with no borders).\nIt\'s off by default and only asks for approximate location when enabled, converting offline into a city name only — stored strictly on your device and your own iCloud 🗺️'
            },
            {
              q: 'Printing city names & fixing dates on chat-app photos?',
              kw: ['print city', 'city name', 'chat', 'date', 'missing', 'edit date'],
              a: '• Print city: Enable Footprint Map in Settings (VIP), then tap "📍 City" below the frame in the editor.\n• Fix chat photos: Open the photo\'s detail page, tap the date at top to change it (the printed card date updates too!), and tap "📍 City" to choose a city manually.'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ Sync, Sharing & Switching',
          items: [
            {
              q: 'Switching phones, backup archives, or storage space?',
              kw: ['switch', 'new phone', 'archive', 'export', 'import', 'storage', 'space', 'mb', 'draft'],
              a: 'Go to Settings → Export / Import Archive to pack your entire diary into one file (save to Files or your cloud drive) and restore on a new phone! iPhone iCloud Backup, Auto-Save to Photos, VIP iCloud Sync, and auto-saved drafts also protect your photos. Deleting the app deletes local data (single deleted photos stay in Recently Deleted 30 days). Cards are ~0.5–1MB (~2MB Print-Grade).'
            },
            {
              q: 'iCloud Sync vs. saving a copy to a cloud drive folder?',
              kw: ['sync', 'icloud', 'ipad', 'backup', 'folder', 'cloud drive', 'files', 'difference', 'copy', 'gray', 'grey'],
              a: '• iCloud Sync (VIP): Keeps your iPhone & iPad diaries identical (photos, cutouts, stamps, custom filters & themes).\n• Save a Copy to Folder (VIP): Copies each saved card to a folder in iCloud Drive or "On My iPhone" (create a "MoriSnap" folder first) with no extra login.\n• Note: Some cloud drive apps don\'t allow folder picking (they appear grayed out) — use iCloud Drive instead, or tap Share on a photo\'s detail page to save there!'
            },
            {
              q: 'Shared Albums: deleting photos, sync delay & leaving?',
              kw: ['shared', 'friend', 'invite', 'delete', 'who can', 'leave', 'removed', 'remove', 'still there', 'refresh'],
              a: 'Shared Albums are 100% free via iCloud! Members can delete their own uploads, and the creator can delete any photo (deleted shots stay in your Recently Deleted 30 days). Deletions sync in seconds via iCloud notification or next time you reopen MoriSnap (go Home and reopen if it stayed open). If a friend leaves/is removed, the album leaves their phone while photos already saved to Photos stay safe, and everyone else keeps all album photos.'
            }
          ]
        },
        {
          id: 'vip',
          label: '💳 VIP, Text Size & Little Fox',
          items: [
            {
              q: 'Is it a subscription? What does 1.0 VIP include & how do updates work?',
              kw: ['price', 'cost', 'sub', 'subscription', 'free', 'vip', 'ad', 'ads', 'update', 'new sticker'],
              a: 'No subscription — and even Free has zero ads and unlimited photos! One-time lifetime VIP unlocks all 1,200+ illustrated stickers & seasonal packs, all 26 date stickers, all 12 mood stamps, punch frames, auto color palettes, date fonts, Print-Grade Quality, Develop Tonight, Footprint Map, Monthly Wall Posters, 9 Story cotton papers, all movie styles, watermark toggle, all 12 seasonal icons year-round, private iCloud Sync & cloud folder backup — plus future App Store update additions at zero extra cost ✨'
            },
            {
              q: 'How do I restore VIP or request a refund?',
              kw: ['restore', 'refund', 'cancel', 'purchase'],
              a: 'To restore VIP on any device, sign in with the same Apple Account and tap MoriSnap → Settings → Restore Purchases. For refunds, Apple handles billing directly at reportaproblem.apple.com.'
            },
            {
              q: 'Text size, permissions, privacy & Little Fox?',
              kw: ['text', 'font', 'small', 'large', 'voiceover', 'permission', 'camera', 'mic', 'privacy', 'server', 'wish', 'fox', 'mascot'],
              a: 'MoriSnap scales automatically with iOS Text Size and supports VoiceOver 💛 Re-enable permissions in iOS Settings → MoriSnap (return to full screen if iPad Split View pauses camera). Zero servers, zero ads — and I\'m Little Fox, MoriSnap\'s mascot! VIP members can email sticker or feature wishes anytime 🦊'
            }
          ]
        }
      ]
    },
    ja: {
      fabLabel: '子ぎつねに聞く',
      title: '子ぎつね・ずぼら FAQ 案内',
      subtitle: 'キーワード検索もボタン質問もすぐ答えられるよ 🦊',
      placeholder: 'キーワード検索（手帳ウォール・カレンダー・アイコン・4カット…）',
      sendBtn: '検索',
      backHome: '← 他のテーマを見る',
      mailBtn: '✉️ モカにメールする',
      moreMatches: '🔎 関連する質問（タップして見る）：',
      liveLabel: '⚡ 候補：',
      greeting: 'こんにちは！MoriSnap の子ぎつねだよ 🦊\n手帳ウォールの開き方、カレンダー、アイコン変更、機能の使い方まで、キーワードを入れるかボタンをタップして聞いてね！',
      topicPrompt: '知りたい質問をタップしてね 👇',
      notFound: 'ごめんね、ぴったりの答えが見つからなかったよ 🥺 短いキーワード（例：「カレンダー」「アイコン」「4カット」「共有」）で試すか、下のボタンからモカにメールしてね！',
      topics: [
        {
          id: 'basics',
          label: '🧭 基本操作（手帳ウォール・カレンダー・写真・アイコン）',
          items: [
            {
              q: '手帳ウォールはどうやって開くの？カメラに戻るには？',
              kw: ['手帳ウォール', '開き方', '開く', 'アルバム', 'どこ', 'カメラに戻る', '左下', 'サムネイル'],
              a: 'かんたんだよ：\n① カメラ画面の「左下」にある最新写真のサムネイル（「手帳」と表示／最初の 1 枚前は重ねアイコン）をタップすると手帳ウォールが開きます。\n② 撮影後の保存時に「手帳を見る」を押してもそのまま開けます。\n③ カメラに戻るときは、手帳ウォール「左上の 📷 カメラアイコン」をタップ！'
            },
            {
              q: 'カレンダーページの見方と「この日の代表写真」の変え方は？',
              kw: ['カレンダー', '月暦', '代表写真', '代表表紙', '日ごとにまとめる', 'すべて広げる', '長押し'],
              a: '2 ステップで見られるよ：\n① 手帳ウォール上部の左にある月メニュー（📅 2026 年 11 月 ▾）→「カレンダー」を選ぶと、記録した日に代表写真が並んだ月カレンダーが開きます（スワイプや矢印で月移動）。\n② 同じメニューで「日ごとにまとめる」「すべて広げる」も切り替えられます。\n③ 代表写真を変えたい日は、その日を開いて好きな写真を「長押し」→「この日の代表写真にする」を選んでね 📅'
            },
            {
              q: 'フォトカードを 1 枚ずつ見るには？開いたあとにできることは？',
              kw: ['フォトカード', '写真を見る', '1枚', '詳細', 'スワイプ', '拡大', '日付変更', '移動', '削除'],
              a: '手帳ウォール（またはカレンダーから開いた日）でカードをタップすると全画面で開きます（3 秒動画は自動ループ再生）。「日ごとにまとめる」がオンで複数枚ある日は、まず束をタップして広げてから選んでね。\n開いた画面では：\n・左右スワイプで前後の写真へ移動\n・上部の「日付」をタップして撮影日を修正（カードの印字日付も更新！）\n・「📍 都市」で都市名を手動選択\n・手帳名をタップして共有手帳へ移動\n・下部からストーリー共有、4×6 印刷、「写真」保存、削除ができます ✨'
            },
            {
              q: 'ホーム画面のアプリアイコンはどうやって変えるの？',
              kw: ['アイコン', 'icon', 'アプリアイコン', '変更', '着せ替え', '季節', '自動', '桜', '紅葉', '雪', 'クリスマス', 'お正月'],
              a: 'アイコン変更の手順：\n① 手帳ウォール右上「⚙️ 設定」（VIP は 👑 王冠アイコン）を開く\n② 下へスクロールして「アプリアイコン」から、レトロ革カメラ＆子ぎつねの計 12 種をワンタップで切り替え！\n・定番 2 種はいつでも無料。5 つの季節アイコンはその季節に無料解放（さくら 3–4 月・もみじ 10–11 月・ゆき 12–2 月・クリスマス 12/1–12/31・お正月 12/26–2/15）、VIP は年中 12 種すべて使えます。\n・「季節にあわせて自動で変更」もオンにできるよ。（変更時に iOS の短い確認通知が出るのは iPhone の仕様です。クール金属レザー系も今後のアップデートで登場予定 🖤）'
            },
            {
              q: 'レイアウト・背景テーマ・外観スタイル（森の文青／ミニマルダーク）の切替は？',
              kw: ['背景', '背景テーマ', '壁テーマ', '紙', 'クラフト', '方眼', 'ダーク', 'レイアウト', '切替', '外観スタイル', 'ミニマルダーク'],
              a: '自由に切り替えられます：\n① 手帳ウォール表示：左上部の月メニュー（📅 ▾）で「日ごとにまとめる」「すべて広げる」「カレンダー」を切替。\n② 背景テーマ：右上「⋯（その他）」→「背景テーマ」でクリーム紙・クラフト・方眼・ミッドナイトデスクへ（VIP は背景写真も可）。\n③ 4 カット／ストーリー：1×4 と 2×2 切替、9 色棉紙レイアウト着せ替え。\n④ 外観スタイル（1.1 無料予定）：「設定 › 外観スタイル」で無料のミニマルダークへ一括切替し、ダーク画面・フィルター・ミニマルステッカーが連動します 🎨'
            }
          ]
        },
        {
          id: 'top3',
          label: '⭐ まず気になる 5 問（違い・透かし・共有・VIP）',
          items: [
            {
              q: '無料のカメラアプリはたくさんあるのに、なぜ MoriSnap なの？',
              kw: ['違い', 'なぜ', 'ふつうのカメラ', '無料カメラ', '特徴', 'おすすめ'],
              a: 'MoriSnap は単なるカメラではなく、めんどくさがりのための生活手帳です！ふつうのカメラは撮ったあとアルバムに眠ったままですが、MoriSnap は写真を日付入り手帳カードに変え、手帳ウォールやカレンダーに自動整理し、週末はムービーまで作ってくれます。無料で使えて、VIP もサブスクなしの買い切りです 🦊'
            },
            {
              q: 'カード上の透かしはどうやって消せますか？',
              kw: ['透かし', '消す', '非表示', 'ロゴ', '右下', '個人スタンプ'],
              a: 'カードの文字は 2 種類あります：\n① 右下の小さな「MoriSnap」（ブランド透かし）→ VIP（買い切り）なら「設定 › マイステッカー＆スタンプ」で「ブランド透かしを隠す」をオン。\n② 自分の ID や国旗（個人スタンプ）→ 無料でオフにできます：編集画面右上のスタンプボタン →「オフ」✨'
            },
            {
              q: '友だちと共有手帳を使うには？',
              kw: ['共有手帳', '友だち', '招待', '使い方', '一緒に'],
              a: '無料・アカウント不要、3 ステップです：\n① 手帳ウォール上の手帳名をタップ →「共有手帳を作成」で名前をつける\n② もう一度手帳名をタップ →「共有手帳の管理」→「友だちを招待」でリンクを送る\n③ 友だちがリンクを開いて MoriSnap を入れれば参加完了！保存時に「🔒 プライベート」をその手帳に切り替えるだけ。写真は作成者の iCloud に入り、友だちの容量は使いません 👥'
            },
            {
              q: '共有手帳に参加するとき、なぜ iCloud ログイン（認証）が必要なの？お金はかかりますか？',
              kw: ['icloud必要', '認証', '2ファクタ', '有料', '5gb', '容量', '安全', '無料', 'appleアカウント'],
              a: '料金は一切かからず、有料プランも不要です！Apple アカウントのログイン・認証は「招待された人だけが入れる鍵つきの扉」のようなもので、招待した家族や友だち本人かを Apple が確認し、知らない人から大切な写真を守ります（開発者にも見えません）。\n確認は最初の 1 回だけで会員登録不要。写真は作成者の iCloud に保存されるため友だちの容量は消費せず、無料 5GB で十分です 🔐'
            },
            {
              q: 'VIP は機能ごとに別料金がかかりますか？',
              kw: ['別料金', '個別', '追加購入', '全部解放', '通貨', '機能ごと'],
              a: 'いいえ！VIP の一度きりの買い切りですべて解放されます：全フィルター・ステッカー・フレーム・動画テンプレート・足あとマップ・今夜現像まで追加購入もサブスクも不要です。価格は App Store に各国の通貨で表示されます ✨'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 撮影・4カット・合写・ムービー',
          items: [
            {
              q: '韓国風 1×4 ＆ 日本風 2×2 の 4 カットはどう撮るの？',
              kw: ['4カット', '4コマ', '1x4', '2x2', 'タイマー', '連写', '4枚'],
              a: '2 通りの作り方があるよ：\n① カメラで連写：ファインダー右下の「4 カット」をオンにしてシャッターを押すと 3-2-1 で 4 枚連続撮影！編集画面で 1×4 と 2×2 を切り替えられます。\n② 写真から作成：手帳ウォール右上「⋯」→「4 コマフォト」で、撮った写真から 4 枚選んでまとめられます 🎞️'
            },
            {
              q: '端末内 1 秒切り抜き「合写」の使い方は？',
              kw: ['切り抜き', '合写', '推し', 'ペット', '合成', '一緒に撮る'],
              a: 'カメラ画面の「合写」からペットや推し・ぬいぐるみの写真を選ぶと、スマホ内で 1 秒自動切り抜き（サーバー送信なし）！リアルタイムのカメラ画面に重ねて移動・拡大・反転でき、1 枚撮影でも 4 カットでも一緒に撮れます 💖'
            },
            {
              q: '14 種フィルター・ランダムサイコロ・パンチ枠・日付フォント',
              kw: ['フィルター', 'サイコロ', 'カスタムフィルター', 'パンチ枠', 'カラーパレット', '日付フォント', '取り込み'],
              a: '・カメラ下で 14 種の透明感フィルターを選べ、左の 🎲 サイコロでランダム切替やカスタムレシピ保存も OK！シャッター横からアルバム取り込みもできます。\n・編集画面では VIP でルーズリーフ＆切符パンチ枠、自動カラーパレット、タイプライター／ミニマル／手書き風の日付フォントが使えます 🎨'
            },
            {
              q: '3 秒動画・振るだけステッカー・26 種日付ステッカー・気分スタンプ',
              kw: ['動画', '3秒', '回転', '振る', 'ステッカー', '日付ステッカー', 'スタンプ', '気分', '天気', '手書き', 'pencil'],
              a: 'シャッター短押し（音量ボタンも可）で写真、長押しで音付き 3 秒動画！スマホを振ってステッカー変更、自動日付ステッカー 26 種（最初の 10 種無料）、🔄 で 1 本指回転＆拡大縮小、気分・天気スタンプ 12 種（最初の 3 種無料）、✏️ 手書き（Apple Pencil 対応）も楽しめます！'
            },
            {
              q: '暗い場所でも撮れますか？',
              kw: ['暗い', '夜景', '夜', 'オーロラ'],
              a: 'はい！全フィルターで暗所オート連写合成（約 0.5 秒構えるだけ）、さらに「夜色オーロラ」は約 2 秒かけて光を集めてきれいに撮れます 🌙'
            },
            {
              q: '週末ムービー・タイムプロジェクター・月間ポスターはどこ？',
              kw: ['ムービー', 'どこ', '保存', '写真アプリ', 'プロジェクター', 'ポスター', 'フォトダンプ', 'ハイライト', '無音'],
              a: 'すべて手帳ウォールから使えるよ！\n・週末／月間ムービー：手帳ウォール右上の 🎞️ フィルムアイコンから作成（「保存」を押したときだけ写真アプリに保存・手帳ウォールには並びません）。無料フォトダンプ＆自動ハイライト、無音書き出し対応。\n・タイムプロジェクター：月メニュー横のボタンからスライド再生。\n・月間ポスター：月メニュー（📅）→「月間ポスター」でストーリーにもワンタップ共有 🎬'
            },
            {
              q: '4×6 印刷・9 色ストーリー＆共有メニューが反応しないとき',
              kw: ['印刷', 'プリント', '4x6', 'ストーリー', '棉紙', '共有', '反応しない'],
              a: '4×6 プリント用は 5mm 安全余白＋点線つき（VIP プリント画質と相性抜群）。ストーリー用レイアウトは 9 色の棉紙（オフ白・薄灰無料）。他社 SNS 側の共有ポップアップが反応しないときは、MoriSnap 内の「ストーリーへ共有」ボタンを使ってね ✨'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ ウィジェット・暗室・マップ',
          items: [
            {
              q: 'ホーム画面（ウィジェット）に追加するには？',
              kw: ['ウィジェット', 'ホーム画面', '冷蔵庫', 'マグネット', 'カレンダー', '去年の今日', 'カウントダウン'],
              a: 'アプリを一度開いてから、ホーム画面の空きスペースを長押し → 左上「＋」→ MoriSnap を検索！冷蔵庫マグネット（去年の今日を優先表示）・今月の表紙・マグネットカレンダーに加え、「暗室カウントダウン」（VIP 今夜現像の枚数と残り時間）もあるよ ✨'
            },
            {
              q: '「今夜現像」とは何ですか？',
              kw: ['今夜', '現像', '暗室', '通知', '夜'],
              a: 'VIP でオンにできる機能！昼にカメラで撮った写真を暗室にあずけて、夜（18:00〜23:00 で選択可）にまとめて現像＆端末内ローカル通知でお知らせします。アルバム取り込みや共有手帳は暗室に入らず、オフにすれば即現像されます！'
            },
            {
              q: '足あとマップはどこ？正確な位置は記録されますか？',
              kw: ['マップ', '地図', '足あと', '位置', 'gps', '都市', '国境', '消印'],
              a: '手帳ウォール右上「⋯（その他）」→「足あとマップ」で開けます（4 種の紙マップ＆都市消印、国境線なし）。\n初期オフで、オンにしたときだけ「おおよその位置情報」を端末内でオフライン変換して都市名だけを保存します 🗺️'
            },
            {
              q: 'カードに都市名を印字＆チャット保存写真の日付修正',
              kw: ['都市名', '印字', 'チャット', '日付', '場所', '変更', '消えた'],
              a: '・都市名印字：設定で「足あとマップ」（VIP）をオン → 編集画面フレーム下の「📍 都市」をタップ。\n・日付／都市修正：写真詳細画面の上部で日付をタップするとカード印字も一緒に更新、📍 都市から手動選択もできます！'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 機種変更・同期・共有',
          items: [
            {
              q: '機種変更・アーカイブ書き出し・容量は大丈夫？',
              kw: ['機種変更', 'アーカイブ', '書き出し', '読み込み', '消した', '容量', 'mb'],
              a: '「設定 → アーカイブを書き出し／読み込み」で手帳全体を 1 ファイルにまとめて「ファイル」やクラウドへ保存でき、新機種で読み込むだけで復元！iPhone の iCloud バックアップや写真自動保存、VIP 同期も併用できます。通常 0.5〜1MB／プリント画質約 2MB です。'
            },
            {
              q: 'iCloud 同期と「クラウドフォルダに別保存」の違いは？',
              kw: ['同期', 'icloud', '違い', 'クラウド', 'フォルダ', 'バックアップ', 'ファイル', 'パソコン', 'グレー'],
              a: '・iCloud 同期（VIP）：iPhone と iPad の手帳をまるごと同期（写真・自作切り抜き・スタンプ・フィルター・壁テーマ）。\n・フォルダにもう 1 部保存（VIP）：保存のたびに iCloud Drive や「この iPhone 内」の選んだフォルダへ画像をコピー（先に MoriSnap フォルダを作ると便利・追加アカウント不要）。\n・ご注意：クラウドアプリによってはフォルダ選択非対応（グレー表示）のことがあります。その場合は iCloud Drive を選ぶか、写真詳細の共有から保存してね！'
            },
            {
              q: '共有手帳の削除権限・反映タイミング・退出したら？',
              kw: ['共有', '友だち', '招待', '削除', '誰', '退出', '抜け', '外さ', '残って', '反映'],
              a: '共有手帳は完全無料！メンバーは自分の写真のみ、作成者は全員の写真を削除できます（削除分は自分の「最近削除した項目」に 30 日保管）。友だちの削除は iCloud 通知や次回起動時に反映（通常数秒〜数十秒、開いたままならホームへ戻って開き直すと即更新）。退出・除外されても保存済み写真と他メンバーの手帳写真はそのまま残ります。'
            }
          ]
        },
        {
          id: 'vip',
          label: '💳 VIP・文字サイズ・子ぎつね',
          items: [
            {
              q: 'サブスクですか？VIP の内容とアップデートは？',
              kw: ['料金', '値段', 'サブスク', '無料', 'vip', '買い切り', '広告', 'アップデート'],
              a: 'サブスクではなく一度きりの買い切り（無料版も広告ゼロ）！VIP は 1,200 種以上の全ステッカー、26 種日付ステッカー、気分スタンプ全 12 種、パンチ枠・自動カラーパレット・日付フォント・プリント画質・今夜現像・足あとマップ・月間ポスター・12 種季節アイコン年中自由・iCloud 個人同期などを永久解放。今後のアップデートも追加料金なしです ✨'
            },
            {
              q: 'VIP の復元や返金について',
              kw: ['復元', '返金', 'キャンセル', 'ipad'],
              a: '同じ Apple アカウントで MoriSnap → 設定 →「購入を復元」を押せばすぐ戻ります。返金は Apple の reportaproblem.apple.com から手続きできます。'
            },
            {
              q: '文字サイズ・権限・プライバシー・子ぎつね',
              kw: ['文字', '小さい', 'サイズ', 'voiceover', '許可', '権限', 'プライバシー', 'サーバー', 'リクエスト', '子ぎつね', '誰'],
              a: 'iPhone の「文字サイズ」設定に合わせて自動で大きくなり VoiceOver 対応 💛 権限は iOS「設定 → MoriSnap」から再設定できます。独自サーバーゼロ・広告ゼロ。ぼくは公式マスコットの「子ぎつね」だよ！VIP リクエストもいつでも歓迎 🦊'
            }
          ]
        }
      ]
    },
    ko: {
      fabLabel: '여우에게 묻기',
      title: '아기 여우 · 귀차니스트 FAQ 도우미',
      subtitle: '키워드 검색도 버튼 질문도 바로 답해드려요 🦊',
      placeholder: '키워드 검색 (다이어리 벽, 캘린더, 아이콘, 네컷, 누끼…)',
      sendBtn: '검색',
      backHome: '← 다른 주제 보기',
      mailBtn: '✉️ 모카에게 메일 쓰기',
      moreMatches: '🔎 관련 질문 (눌러서 바로 보기):',
      liveLabel: '⚡ 추천 결과:',
      greeting: '안녕! MoriSnap 아기 여우야 🦊\n다이어리 벽 들어가는 법, 달력 보기, 아이콘 변경이나 기능 사용법이 궁금하면 키워드를 검색하거나 아래 버튼을 눌러봐!',
      topicPrompt: '궁금한 질문을 눌러줘 👇',
      notFound: '앗, 딱 맞는 답을 못 찾았어 🥺 짧은 키워드(예: "캘린더", "아이콘", "네컷", "공유")로 다시 검색하거나 아래 버튼으로 모카에게 메일을 보내줘!',
      topics: [
        {
          id: 'basics',
          label: '🧭 기본 사용법 (다이어리 벽·캘린더·사진·아이콘)',
          items: [
            {
              q: '다이어리 벽에 어떻게 들어가나요? 카메라로 돌아가려면?',
              kw: ['다이어리 벽', '들어가', '열기', '앨범', '어디', '카메라', '왼쪽 아래', '썸네일'],
              a: '아주 간단해:\n① 카메라 화면 "왼쪽 아래" 최근 사진 썸네일("다이어리" 표시 / 첫 촬영 전엔 겹친 아이콘)을 누르면 다이어리 벽이 열려요.\n② 촬영 후 저장할 때 "다이어리 보기"를 눌러도 바로 이동해요.\n③ 다시 촬영하려면 다이어리 벽 "왼쪽 위 📷 카메라 아이콘"을 누르면 끝!'
            },
            {
              q: '캘린더(달력) 페이지 보는 법 & 하루 대표 사진 바꾸기',
              kw: ['캘린더', '달력', '대표 사진', '커버', '날짜별', '모아 보기', '펼쳐 보기', '길게'],
              a: '두 번만 누르면 돼:\n① 다이어리 벽 위쪽 왼쪽의 월 메뉴(📅 2026년 11월 ▾) → "캘린더"를 누르면 기록한 날마다 대표 사진이 담긴 월간 달력이 열려요(좌우 스와이프나 화살표로 월 이동).\n② 같은 메뉴에서 "날짜별로 모아 보기" / "모두 펼쳐 보기" 전환도 가능해요.\n③ 그날 대표 사진을 바꾸려면 해당 날짜를 연 뒤 마음에 드는 사진을 "길게 누르기" → "이 날의 대표 사진으로 설정"을 골라줘 📅'
            },
            {
              q: '포토카드를 크게 보려면? 연 뒤에 어떤 기능을 쓸 수 있나요?',
              kw: ['포토카드', '사진 보기', '크게', '상세', '스와이프', '날짜 수정', '이동', '삭제'],
              a: '다이어리 벽(또는 캘린더에서 연 날짜)에서 카드를 한 번 누르면 전체 화면으로 열려요(3초 영상은 자동 반복 재생). "날짜별로 모아 보기" 상태에서 여러 장이 겹쳐 있으면 먼저 묶음을 눌러 펼친 뒤 카드를 골라줘.\n열린 화면에서는:\n・좌우 스와이프로 이전·다음 사진 넘기기\n・위쪽 "날짜"를 눌러 촬영 날짜 수정(카드 인쇄 날짜도 함께 갱신!)\n・"📍 도시"에서 도시 수동 선택\n・다이어리 이름을 눌러 공유 다이어리로 이동\n・아래에서 스토리 공유, 4×6 인화, 사진 앱 저장, 삭제 가능 ✨'
            },
            {
              q: '홈 화면 앱 아이콘은 어떻게 바꾸나요? 12종 시즌 아이콘 안내',
              kw: ['아이콘', 'icon', '앱 아이콘', '변경', '바꾸기', '계절', '자동 변경', '벚꽃', '단풍', '눈', '크리스마스', '새해'],
              a: '앱 아이콘 바꾸는 법:\n① 다이어리 벽 오른쪽 위 "⚙️ 설정"(VIP는 👑 왕관 아이콘) 열기\n② 아래로 내려 "앱 아이콘"에서 빈티지 가죽 카메라 & 아기 여우 총 12종 중 원하는 아이콘을 탭!\n・클래식 2종은 평생 무료, 5가지 시즌 아이콘은 해당 계절에 무료 개방(벚꽃 3–4월·단풍 10–11월·눈 12–2월·크리스마스 12/1–12/31·새해 12/26–2/15), VIP는 1년 내내 12종 전부 자유 전환.\n・"계절에 맞춰 자동 변경"도 켤 수 있어요. (변경 시 iPhone 안내창이 뜨는 건 iOS 규칙이며, 시크 메탈 다크 카메라 라인도 곧 업데이트로 찾아올 예정이야 🖤)'
            },
            {
              q: '레이아웃 · 배경 테마 · 화면 스타일(숲 감성 / 미니멀 다크) 전환 방법',
              kw: ['배경', '배경 테마', '벽 테마', '종이', '크래프트', '모눈', '다크', '레이아웃', '전환', '화면 스타일', '미니멀 다크'],
              a: '원하는 대로 바꿀 수 있어:\n① 다이어리 벽 보기: 왼쪽 위 월 메뉴(📅 ▾)에서 날짜별로 모아 보기 / 모두 펼쳐 보기 / 캘린더 전환.\n② 배경 테마: 오른쪽 위 "⋯(더 보기)" → "배경 테마"에서 크림 종이·크래프트·모눈·미드나잇 데스크 선택(VIP는 내 사진 배경도 가능).\n③ 네컷·스토리 레이아웃: 1×4 / 2×2 전환 및 9가지 코튼지 레이아웃 원탭 교체.\n④ 화면 스타일(1.1 무료 예정): "설정 › 화면 스타일"에서 무료 미니멀 다크로 원탭 전환하면 다크 UI와 시크 필터·미니멀 스티커가 함께 연동돼 🎨'
            }
          ]
        },
        {
          id: 'top3',
          label: '⭐ 핵심 질문 5가지 (차이·워터마크·공유·VIP)',
          items: [
            {
              q: '무료 카메라 앱이 많은데 왜 MoriSnap을 쓰나요?',
              kw: ['왜', '차이', '일반 카메라', '무료 카메라', '다른 점', '장점'],
              a: 'MoriSnap은 단순한 카메라가 아니라 귀차니스트를 위한 생활 다이어리예요! 일반 카메라는 사진이 앨범에 그대로 쌓이지만, MoriSnap은 사진을 날짜가 들어간 다이어리 카드로 바꿔 다이어리 벽과 달력에 알아서 정리하고 주말엔 작은 영화까지 만들어 줘요. 무료로 쓸 수 있고 VIP도 구독 없는 한 번 구매예요 🦊'
            },
            {
              q: '카드 위 워터마크는 어떻게 끄나요?',
              kw: ['워터마크', '지우기', '끄기', '숨기기', '오른쪽 아래', '스탬프'],
              a: '카드에는 두 가지 글자가 있을 수 있어요:\n① 오른쪽 아래 작은 \'MoriSnap\' (브랜드 워터마크) → VIP(한 번 구매)라면 \'설정 › 내 스티커 & 스탬프\'에서 \'브랜드 워터마크 숨기기\'를 켜면 사라져요.\n② 내 계정이나 국기 (원본 보호 스탬프) → 무료로 끌 수 있어요: 편집 화면 오른쪽 위 스탬프 버튼 → \'끄기\' ✨'
            },
            {
              q: '친구와 공유 다이어리는 어떻게 쓰나요?',
              kw: ['공유 다이어리', '공유 방법', '친구 초대', '함께', '링크'],
              a: '무료·가입 불필요, 3단계면 끝:\n① 다이어리 벽 위쪽 다이어리 이름을 눌러 \'공유 다이어리 만들기\'로 이름 정하기\n② 이름을 다시 눌러 \'공유 다이어리 관리\' → \'친구 초대\'에서 링크 보내기\n③ 친구가 링크를 열고 MoriSnap을 설치하면 바로 참여! 저장할 때 \'🔒 비공개\'를 그 다이어리로 바꾸면 모두의 폰에 올라가요. 사진은 만든 사람의 iCloud에 저장돼 친구 용량은 쓰지 않아요 👥'
            },
            {
              q: '공유 다이어리에 참여할 때 왜 iCloud 로그인(인증)을 해야 하나요? 돈이 드나요?',
              kw: ['icloud 필요', '이중 인증', '인증', '유료', '돈', '5gb', '용량', '안전', 'apple 계정'],
              a: '비용은 전혀 들지 않으며 유료 용량을 살 필요도 없어요! Apple 계정 로그인과 인증은 "초대받은 사람만 들어올 수 있는 현관문 출입 확인"과 같아서, 모르는 사람이 링크로 사적인 사진을 볼 수 없게 지켜줘요(개발자도 볼 수 없습니다).\n처음 한 번만 확인하면 되고 회원가입 불필요! 사진은 만든 사람의 iCloud에 저장되어 친구 용량은 쓰지 않으며 무료 5GB로 충분해요 🔐'
            },
            {
              q: 'VIP는 기능마다 따로 결제해야 하나요?',
              kw: ['따로 결제', '개별 결제', '기능마다', '전부 해제', '통화', '한 번 구매'],
              a: '아니요! VIP 한 번 구매로 모든 기능이 한꺼번에 열립니다: 전체 필터·스티커·프레임·영상 템플릿·발자국 지도·오늘 밤 현상까지 개별 결제도 구독도 없어요. 가격은 App Store에서 현지 통화로 확인할 수 있습니다 ✨'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 촬영 · 네컷 · 누끼 · 영화',
          items: [
            {
              q: '한국식 1×4 & 일본식 2×2 네컷 사진은 어떻게 찍나요?',
              kw: ['네컷', '네컷 사진', '1x4', '2x2', '타이머', '연사', '4장'],
              a: '두 가지 방법이 있어!\n① 바로 연사: 카메라 뷰파인더 오른쪽 아래 "네컷 모드"를 켜고 셔터를 누르면 3-2-1 카운트다운으로 4장 연속 촬영! 편집 화면에서 1×4 / 2×2 전환 가능.\n② 기존 사진으로 만들기: 다이어리 벽 오른쪽 위 "⋯" → "네컷 카드"에서 사진 4장을 골라 바로 꾸밀 수 있어요 🎞️'
            },
            {
              q: '기기 내 1초 누끼 "합사진"은 어떻게 쓰나요?',
              kw: ['누끼', '합사진', '최애', '반려동물', '아이돌', '같이 찍기'],
              a: '카메라 화면에서 "합사진"을 누르고 반려동물이나 최애·인형 사진을 고르면 기기 안에서 1초 만에 자동 누끼 완성(서버 전송 없음)! 실시간 카메라 화면에 올려 이동·크기 조절·좌우 반전까지 자유롭게, 단일 촬영과 네컷 모두 함께 찍을 수 있어요 💖'
            },
            {
              q: '14종 필터 · 랜덤 주사위 · 펀치 프레임 & 날짜 폰트',
              kw: ['필터', '주사위', '커스텀 필터', '펀치', '팔레트', '날짜 폰트', '불러오기'],
              a: '・카메라 아래에서 14종 감성 필터를 고르거나 왼쪽 🎲 주사위로 랜덤 뽑기, 나만의 커스텀 필터 저장도 가능! 셔터 옆에서 앨범 사진 불러오기도 돼요.\n・편집 화면에서 VIP는 바인더·티켓 펀치 프레임, 자동 컬러 팔레트, 타자기/미니멀/손글씨 날짜 폰트까지 해제돼요 🎨'
            },
            {
              q: '3초 영상 · 흔들어 스티커 교체 · 26종 날짜 스티커 & 기분 도장',
              kw: ['동영상', '3초', '회전', '흔들', '스티커', '날짜 스티커', '도장', '스탬프', '기분', '날씨', '손글씨', 'pencil'],
              a: '셔터 짧게(볼륨 버튼 포함) 사진, 길게 3초 영상! 흔들어 스티커 교체, 자동 날짜 스티커 26종(앞 10종 무료), 🔄 한 손가락 회전·크기 조절, 기분·날씨 도장 12종(앞 3종 무료), ✏️ 손글씨(Apple Pencil 지원)까지 모두 지원해요!'
            },
            {
              q: '어두운 곳에서도 잘 찍히나요?',
              kw: ['어두운', '야간', '밤', '오로라'],
              a: '응! 모든 필터가 밝기를 자동 감지해 어두울 땐 자동 연사 합성(~0.5초), "밤빛 오로라" 필터는 ~2초간 빛을 모아 야경도 선명하게 담아줘요 🌙'
            },
            {
              q: '주간 작은 영화 · 타임 프로젝터 · 월간 포스터는 어디에 있나요?',
              kw: ['영화', '영상', '어디', '저장', '사진 앱', '프로젝터', '포스터', '포토 덤프', '하이라이트', '무음'],
              a: '모두 다이어리 벽에 있어!\n・주간/월간 작은 영화: 다이어리 벽 오른쪽 위 🎞️ 필름 아이콘("저장"을 눌러야 사진 앱에 저장되며 다이어리 벽에는 남지 않아요). 무료 포토 덤프 & 하이라이트 자동 선택, 무음 내보내기 지원.\n・타임 프로젝터: 월 메뉴 옆 버튼으로 슬라이드 감상.\n・월간 포스터: 월 메뉴(📅) → "월간 포스터"로 스토리 원탭 공유 🎬'
            },
            {
              q: '4×6 인화 · 9색 스토리 레이아웃 & 공유 메뉴 무반응 해결',
              kw: ['인화', '4x6', '스토리', '코튼지', '공유', '반응', '메뉴'],
              a: '4×6 인화용은 5mm 안전 여백＋자르기 점선 제공(VIP 인화급 화질과 함께 쓰면 최고!). 스토리 레이아웃은 9가지 코튼지 배경(크림·연회색 무료). 타 SNS 공유 팝업이 반응 없을 땐 MoriSnap 안의 "스토리로 바로 공유" 버튼을 써줘 ✨'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ 위젯 · 암실 · 지도',
          items: [
            {
              q: '홈 화면(위젯)에 어떻게 추가하나요?',
              kw: ['위젯', '홈 화면', '냉장고', '자석', '달력', '작년의 오늘', '카운트다운'],
              a: '앱을 한 번 연 뒤 홈 화면 빈 곳을 길게 누르기 → 왼쪽 위 \'＋\' → MoriSnap 검색! 냉장고 자석(\'작년의 오늘\' 우선 표시)·이달의 커버·자석 달력에 더해 \'암실 카운트다운\'(VIP 오늘 밤 현상 장수와 남은 시간 표시)도 있어요 ✨'
            },
            {
              q: '\'오늘 밤 현상\'은 무엇인가요?',
              kw: ['오늘 밤', '현상', '암실', '알림', '밤'],
              a: 'VIP에서 켤 수 있는 기능이에요! 낮에 카메라로 찍은 사진은 암실에 두고, 밤에 정한 시간(18:00~23:00)에 한꺼번에 현상되며 기기 로컬 알림이 와요. 앨범 불러오기·공유 다이어리는 암실에 안 들어가고, 끄면 즉시 현상됩니다!'
            },
            {
              q: '발자국 지도는 어디에 있나요? 정확한 위치를 추적하나요?',
              kw: ['지도', '발자국', '위치', 'gps', '도시', '추적', '국경', '소인'],
              a: '다이어리 벽 오른쪽 위 "⋯(더 보기)" → "발자취 지도"에서 열 수 있어요(4가지 스타일 & 도시 소인, 국경선 없음).\n기본 꺼짐이며 켰을 때만 "대략적인 위치"를 기기 안에서 오프라인으로 도시 이름만 변환해 보관해요 🗺️'
            },
            {
              q: '카드에 도시 이름 인쇄 & 메신저 사진 날짜/위치 수정',
              kw: ['도시 인쇄', '도시 이름', '메신저', '채팅', '날짜', '위치', '수정'],
              a: '・도시 인쇄: 설정에서 "발자국 지도"(VIP) 켜기 → 편집 화면 프레임 아래 "📍 도시" 탭.\n・날짜/위치 수정: 사진 상세 화면 위쪽 날짜를 눌러 고치면 카드 날짜도 함께 바뀌고, "📍 도시"에서 도시도 직접 고를 수 있어요!'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 기기 변경 · 동기화 · 공유',
          items: [
            {
              q: '기기 변경 · 아카이브 백업 · 저장 공간',
              kw: ['기기', '새 폰', '아카이브', '내보내기', '가져오기', '용량', 'mb'],
              a: '\'설정 → 아카이브 내보내기／가져오기\'로 전체 다이어리를 한 파일로 묶어 파일 앱·클라우드에 보관하고 새 폰에서 그대로 복원할 수 있어요! iCloud 백업·사진 자동 저장·VIP 동기화도 지원해요. 일반 0.5~1MB / 인화급 약 2MB입니다.'
            },
            {
              q: 'iCloud 동기화와 클라우드 폴더 사본 저장의 차이는?',
              kw: ['동기화', 'icloud', '차이', '클라우드', '폴더', '백업', '파일', '사본', '회색'],
              a: '・iCloud 동기화(VIP): iPhone과 iPad 다이어리를 똑같이 맞춰줘요(사진·자작 누끼·스탬프·필터·벽 테마 포함).\n・폴더에 사본 저장(VIP): 카드를 저장할 때마다 iCloud Drive 또는 \'나의 iPhone\'의 선택한 폴더로 이미지를 복사해요(먼저 MoriSnap 폴더를 만들어 두면 좋아요・별도 가입 불필요).\n・참고: 일부 클라우드 앱은 폴더 선택을 지원하지 않아 회색으로 보일 수 있어요. 이때는 iCloud Drive를 쓰거나 사진 상세 화면에서 공유로 저장해 주세요!'
            },
            {
              q: '공유 다이어리 사진 삭제 · 반영 시점 · 나가면?',
              kw: ['공유', '친구', '초대', '삭제', '누가', '나가', '제외', '내보내', '남아', '반영'],
              a: '공유 다이어리는 완전 무료! 누구나 자신의 사진을 삭제할 수 있고, 만든 사람은 모든 사진을 삭제할 수 있어요(삭제분은 \'최근 삭제된 항목\'에 30일 보관). 친구가 지운 사진은 iCloud 알림이나 다음 앱 실행 시 반영되며(보통 몇 초~수십 초, 앱이 켜져 있었다면 홈으로 나갔다 다시 열면 즉시 갱신!), 나가거나 제외돼도 미리 저장한 사진과 다른 멤버의 사진은 그대로 남아요!'
            }
          ]
        },
        {
          id: 'vip',
          label: '💳 VIP · 큰 글씨 · 아기 여우',
          items: [
            {
              q: '구독제인가요? VIP 혜택과 업데이트는요?',
              kw: ['가격', '요금', '구독', '무료', 'vip', '광고', '결제', '업데이트'],
              a: '구독제가 아닌 평생 1회 구매(무료도 광고 0)! VIP는 1,200+ 전체 스티커·26종 날짜 스티커·기분 도장 12종·펀치 프레임·자동 컬러 팔레트·날짜 폰트·인화급 화질·오늘 밤 현상·발자국 지도·월간 포스터·12종 계절 아이콘 연중 자유·iCloud 개인 동기화 등을 모두 해제해요. 이후 업데이트도 추가 결제 없이 자동 적용됩니다 ✨'
            },
            {
              q: 'VIP 복원과 환불은 어떻게 하나요?',
              kw: ['복원', '환불', '취소', 'ipad'],
              a: '구매한 Apple 계정으로 MoriSnap → 설정 → \'구매 복원\'을 누르면 바로 열려요. 환불은 Apple 공식 reportaproblem.apple.com 에서 신청할 수 있습니다.'
            },
            {
              q: '글자 크기 · 권한 · 개인정보 · 아기 여우',
              kw: ['글자', '작아', '크기', 'voiceover', '권한', '개인정보', '서버', '소원', '여우', '누구'],
              a: 'iPhone의 시스템 \'텍스트 크기\' 설정에 맞춰 자동으로 커지고 VoiceOver도 지원해요 💛 권한은 iOS \'설정 → MoriSnap\'에서 다시 켤 수 있습니다. 자체 서버 0·광고 0, 나는 공식 마스코트 \'아기 여우\'야! VIP 소원 메일도 언제든 환영해요 🦊'
            }
          ]
        }
      ]
    }
  };

  function expandTerms(query) {
    var low = query.toLowerCase().trim();
    if (!low) return [];
    var parts = low.split(/[\s,、，。？！?!・/]+/).filter(Boolean);
    var terms = [low];
    parts.forEach(function (p) {
      if (p && terms.indexOf(p) === -1) terms.push(p);
    });
    SYNONYMS.forEach(function (group) {
      var hit = group.some(function (w) {
        var wl = w.toLowerCase();
        return low.indexOf(wl) !== -1 || parts.some(function (p) { return p.length >= 2 && wl.indexOf(p) !== -1; });
      });
      if (hit) {
        group.forEach(function (w) {
          var wl = w.toLowerCase();
          if (terms.indexOf(wl) === -1) terms.push(wl);
        });
      }
    });
    return terms;
  }

  function rankMatches(lang, query) {
    var d = DATA[lang] || DATA.zh;
    var low = query.toLowerCase().trim();
    if (!low) return [];
    var terms = expandTerms(low);
    var results = [];
    d.topics.forEach(function (t) {
      t.items.forEach(function (it) {
        var score = 0;
        var ql = it.q.toLowerCase();
        var al = it.a.toLowerCase();
        if (ql.indexOf(low) !== -1) score += 10;
        if (al.indexOf(low) !== -1) score += 4;
        it.kw.forEach(function (k) {
          var kl = k.toLowerCase();
          if (low.indexOf(kl) !== -1 || (low.length >= 2 && kl.indexOf(low) !== -1)) score += 6;
        });
        terms.forEach(function (tm) {
          if (tm === low || tm.length < 1) return;
          if (ql.indexOf(tm) !== -1) score += 3;
          if (al.indexOf(tm) !== -1) score += 1;
          it.kw.forEach(function (k) {
            var kl = k.toLowerCase();
            if (kl === tm) score += 4;
            else if (tm.length >= 2 && kl.indexOf(tm) !== -1) score += 2;
          });
        });
        if (score > 0) {
          results.push({ item: it, topic: t, score: score });
        }
      });
    });
    results.sort(function (a, b) { return b.score - a.score; });
    return results;
  }

  function mailHref(lang) {
    var subjects = {
      zh: "[MoriSnap] 問題回報與意見回饋",
      en: "[MoriSnap] Support & Feedback",
      ja: "[MoriSnap] お問い合わせ・ご要望",
      ko: "[MoriSnap] 문의 및 의견"
    };
    var bodies = {
      zh: "裝置型號（例：iPhone 16 / iPad Air）：\niOS 版本：\n想詢問或許願的內容：\n",
      en: "Device model (e.g. iPhone 16 / iPad Air):\niOS version:\nHow can we help or what is your wish:\n",
      ja: "機種（例：iPhone 16 / iPad Air）：\niOS バージョン：\nお問い合わせ・リクエスト内容：\n",
      ko: "기기 모델(예: iPhone 16 / iPad Air):\niOS 버전:\n문의 또는 소원 내용:\n"
    };
    var l = subjects[lang] ? lang : "zh";
    return "mailto:" + MAIL + "?subject=" + encodeURIComponent(subjects[l]) + "&body=" + encodeURIComponent(bodies[l]);
  }

  function getLang() {
    var active = document.querySelector('.lang-panel.active');
    if (active) return active.getAttribute('data-lang') || 'zh';
    var h = location.hash.replace('#', '');
    return DATA[h] ? h : 'zh';
  }

  function buildBotUI(container, isFloating) {
    var currentLang = getLang();
    var msgsEl, chipsEl, inputEl, titleEl, subEl, sendEl, liveBar;

    function createMarkup() {
      container.innerHTML =
        '<div class="foxbot-card">' +
          '<div class="foxbot-head">' +
            '<img class="foxbot-ava" src="assets/fox_happy.png" alt="Little Fox">' +
            '<div class="foxbot-head-text">' +
              '<strong class="foxbot-title"></strong>' +
              '<span class="foxbot-sub"></span>' +
            '</div>' +
            (isFloating ? '<button type="button" class="foxbot-close" aria-label="Close">×</button>' : '') +
          '</div>' +
          '<div class="foxbot-msgs" aria-live="polite"></div>' +
          '<div class="foxbot-chips"></div>' +
          '<div class="foxbot-live-bar"></div>' +
          '<form class="foxbot-form">' +
            '<input type="text" class="foxbot-input" autocomplete="off">' +
            '<button type="submit" class="foxbot-send"></button>' +
          '</form>' +
        '</div>';
      titleEl = container.querySelector('.foxbot-title');
      subEl = container.querySelector('.foxbot-sub');
      msgsEl = container.querySelector('.foxbot-msgs');
      chipsEl = container.querySelector('.foxbot-chips');
      liveBar = container.querySelector('.foxbot-live-bar');
      inputEl = container.querySelector('.foxbot-input');
      sendEl = container.querySelector('.foxbot-send');
      var closeBtn = container.querySelector('.foxbot-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          container.classList.remove('open');
        });
      }
      inputEl.addEventListener('input', function () {
        renderLiveSuggestions(inputEl.value.trim());
      });
      container.querySelector('.foxbot-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var q = inputEl.value.trim();
        if (!q) return;
        inputEl.value = '';
        renderLiveSuggestions('');
        handleSearch(q);
      });
    }

    function renderLiveSuggestions(q) {
      var d = DATA[currentLang] || DATA.zh;
      if (!q) {
        liveBar.classList.remove('show');
        liveBar.innerHTML = '';
        return;
      }
      var matches = rankMatches(currentLang, q).slice(0, 4);
      if (!matches.length) {
        liveBar.classList.remove('show');
        liveBar.innerHTML = '';
        return;
      }
      liveBar.innerHTML = '';
      var lbl = document.createElement('span');
      lbl.className = 'foxbot-match-hint';
      lbl.textContent = d.liveLabel;
      liveBar.appendChild(lbl);
      matches.forEach(function (m) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'foxbot-live-chip';
        b.textContent = m.item.q;
        b.addEventListener('click', function () {
          inputEl.value = '';
          renderLiveSuggestions('');
          addMsg('user', m.item.q);
          addMsg('bot', m.item.a);
          renderFollowup(m.topic);
        });
        liveBar.appendChild(b);
      });
      liveBar.classList.add('show');
    }

    function addMsg(who, text) {
      var row = document.createElement('div');
      row.className = 'foxbot-msg ' + who;
      var bubble = document.createElement('div');
      bubble.className = 'foxbot-bubble';
      text.split('\n').forEach(function (line, i) {
        if (i > 0) bubble.appendChild(document.createElement('br'));
        bubble.appendChild(document.createTextNode(line));
      });
      row.appendChild(bubble);
      msgsEl.appendChild(row);
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }

    function renderTopics() {
      var d = DATA[currentLang] || DATA.zh;
      chipsEl.innerHTML = '';
      d.topics.forEach(function (t) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'foxbot-chip';
        b.textContent = t.label;
        b.addEventListener('click', function () {
          addMsg('user', t.label);
          if (t.items.length === 1) {
            addMsg('bot', t.items[0].a);
            renderFollowup(t);
          } else {
            addMsg('bot', d.topicPrompt);
            renderQuestions(t);
          }
        });
        chipsEl.appendChild(b);
      });
      var mail = document.createElement('a');
      mail.className = 'foxbot-chip mail-chip';
      mail.href = mailHref(currentLang);
      mail.textContent = d.mailBtn;
      chipsEl.appendChild(mail);
    }

    function renderQuestions(topic) {
      var d = DATA[currentLang] || DATA.zh;
      chipsEl.innerHTML = '';
      topic.items.forEach(function (it) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'foxbot-chip q-chip';
        b.textContent = it.q;
        b.addEventListener('click', function () {
          addMsg('user', it.q);
          addMsg('bot', it.a);
          renderFollowup(topic);
        });
        chipsEl.appendChild(b);
      });
      var back = document.createElement('button');
      back.type = 'button';
      back.className = 'foxbot-chip back-chip';
      back.textContent = d.backHome;
      back.addEventListener('click', function () {
        renderTopics();
      });
      chipsEl.appendChild(back);
    }

    function renderFollowup(topic) {
      var d = DATA[currentLang] || DATA.zh;
      chipsEl.innerHTML = '';
      if (topic && topic.items.length > 1) {
        topic.items.forEach(function (it) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'foxbot-chip q-chip';
          b.textContent = it.q;
          b.addEventListener('click', function () {
            addMsg('user', it.q);
            addMsg('bot', it.a);
          });
          chipsEl.appendChild(b);
        });
      }
      var back = document.createElement('button');
      back.type = 'button';
      back.className = 'foxbot-chip back-chip';
      back.textContent = d.backHome;
      back.addEventListener('click', function () {
        renderTopics();
      });
      chipsEl.appendChild(back);
      var mail = document.createElement('a');
      mail.className = 'foxbot-chip mail-chip';
      mail.href = mailHref(currentLang);
      mail.textContent = d.mailBtn;
      chipsEl.appendChild(mail);
    }

    function renderSearchResults(matches) {
      var d = DATA[currentLang] || DATA.zh;
      chipsEl.innerHTML = '';
      var others = matches.slice(1, 5);
      if (others.length) {
        var hint = document.createElement('div');
        hint.className = 'foxbot-match-hint';
        hint.textContent = d.moreMatches;
        chipsEl.appendChild(hint);
        others.forEach(function (m) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'foxbot-chip q-chip';
          b.textContent = m.item.q;
          b.addEventListener('click', function () {
            addMsg('user', m.item.q);
            addMsg('bot', m.item.a);
          });
          chipsEl.appendChild(b);
        });
      }
      var back = document.createElement('button');
      back.type = 'button';
      back.className = 'foxbot-chip back-chip';
      back.textContent = d.backHome;
      back.addEventListener('click', function () {
        renderTopics();
      });
      chipsEl.appendChild(back);
      var mail = document.createElement('a');
      mail.className = 'foxbot-chip mail-chip';
      mail.href = mailHref(currentLang);
      mail.textContent = d.mailBtn;
      chipsEl.appendChild(mail);
    }

    function handleSearch(query) {
      var d = DATA[currentLang] || DATA.zh;
      addMsg('user', query);
      var matches = rankMatches(currentLang, query);
      if (matches.length) {
        var top = matches[0];
        addMsg('bot', '【' + top.item.q + '】\n' + top.item.a);
        if (matches.length > 1) {
          renderSearchResults(matches);
        } else {
          renderFollowup(top.topic);
        }
      } else {
        addMsg('bot', d.notFound);
        renderTopics();
      }
    }

    function resetForLang(lang) {
      currentLang = DATA[lang] ? lang : 'zh';
      var d = DATA[currentLang];
      titleEl.textContent = d.title;
      subEl.textContent = d.subtitle;
      inputEl.placeholder = d.placeholder;
      sendEl.textContent = d.sendBtn;
      inputEl.value = '';
      renderLiveSuggestions('');
      msgsEl.innerHTML = '';
      addMsg('bot', d.greeting);
      renderTopics();
    }

    createMarkup();
    resetForLang(currentLang);
    return { resetForLang: resetForLang };
  }

  function setupMailModal() {
    var UI = {
      zh: {
        title: '✉️ 選擇寫信方式給摩卡',
        toLbl: '收件信箱：',
        subLbl: '預設主旨：',
        gmail: '📮 用網頁信箱開信（推薦）',
        native: '📱 用系統郵件 App 開啟（iPhone / Mac）',
        copy: '📋 複製信箱與主旨',
        copied: '✅ 已複製信箱與主旨！直接貼進常用信箱即可'
      },
      en: {
        title: '✉️ Choose how to email Mocha',
        toLbl: 'To: ',
        subLbl: 'Subject: ',
        gmail: '📮 Open in Webmail (Recommended)',
        native: '📱 Open Default Mail App',
        copy: '📋 Copy Email & Subject',
        copied: '✅ Copied! Paste into any mail app you like'
      },
      ja: {
        title: '✉️ モカへのメール送信方法',
        toLbl: '宛先：',
        subLbl: '件名：',
        gmail: '📮 ウェブメールで開く（おすすめ）',
        native: '📱 標準メールアプリで開く',
        copy: '📋 アドレスと件名をコピー',
        copied: '✅ コピーしました！お使いのメールに貼り付けてね'
      },
      ko: {
        title: '✉️ 모카에게 메일 보내기',
        toLbl: '받는 사람: ',
        subLbl: '제목: ',
        gmail: '📮 웹메일에서 열기 (추천)',
        native: '📱 기본 메일 앱으로 열기',
        copy: '📋 이메일과 제목 복사하기',
        copied: '✅ 복사 완료! 편한 메일 앱에 붙여넣어 주세요'
      }
    };

    var backdrop = document.createElement('div');
    backdrop.className = 'mailmodal-backdrop';
    backdrop.innerHTML =
      '<div class="mailmodal-box" role="dialog" aria-modal="true">' +
        '<div class="mailmodal-top">' +
          '<strong class="mm-title"></strong>' +
          '<button type="button" class="foxbot-close mm-close" aria-label="Close">×</button>' +
        '</div>' +
        '<div class="mailmodal-info">' +
          '<div class="mm-to"></div>' +
          '<div class="mm-sub"></div>' +
        '</div>' +
        '<div class="mailmodal-actions">' +
          '<a class="mailmodal-btn primary mm-gmail" target="_blank" rel="noopener"></a>' +
          '<a class="mailmodal-btn mm-native"></a>' +
          '<button type="button" class="mailmodal-btn copy-btn mm-copy"></button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(backdrop);

    var titleEl = backdrop.querySelector('.mm-title');
    var toEl = backdrop.querySelector('.mm-to');
    var subEl = backdrop.querySelector('.mm-sub');
    var gmailBtn = backdrop.querySelector('.mm-gmail');
    var nativeBtn = backdrop.querySelector('.mm-native');
    var copyBtn = backdrop.querySelector('.mm-copy');
    var closeBtn = backdrop.querySelector('.mm-close');
    var currentCopyText = MAIL;
    var currentLang = 'zh';

    function close() { backdrop.classList.remove('open'); }
    closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', function (e) { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    copyBtn.addEventListener('click', function () {
      var u = UI[currentLang] || UI.zh;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentCopyText).then(function () {
          copyBtn.textContent = u.copied;
        }).catch(function () {
          window.prompt('', currentCopyText);
        });
      } else {
        window.prompt('', currentCopyText);
      }
    });

    function openForHref(href) {
      currentLang = getLang();
      var u = UI[currentLang] || UI.zh;
      var withoutScheme = href.replace(/^mailto:/i, '');
      var parts = withoutScheme.split('?');
      var to = decodeURIComponent(parts[0] || MAIL);
      var params = new URLSearchParams(parts[1] || '');
      var su = params.get('subject') || '[MoriSnap]';
      var body = params.get('body') || '';
      titleEl.textContent = u.title;
      toEl.textContent = u.toLbl + to;
      subEl.textContent = u.subLbl + su;
      gmailBtn.textContent = u.gmail;
      gmailBtn.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) + '&su=' + encodeURIComponent(su) + (body ? '&body=' + encodeURIComponent(body) : '');
      nativeBtn.textContent = u.native;
      nativeBtn.href = href;
      copyBtn.textContent = u.copy;
      currentCopyText = to + '\n' + su + (body ? '\n\n' + body : '');
      backdrop.classList.add('open');
    }

    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="mailto:"]') : null;
      if (!a || a.classList.contains('mm-native')) return;
      e.preventDefault();
      openForHref(a.getAttribute('href'));
    });
  }

  function init() {
    setupMailModal();
    var instances = [];
    var inlineMount = document.getElementById('foxbot-inline');
    if (inlineMount) {
      instances.push(buildBotUI(inlineMount, false));
    } else {
      var fab = document.createElement('button');
      fab.type = 'button';
      fab.className = 'foxbot-fab';
      fab.innerHTML = '<img src="assets/fox_happy.png" alt=""><span></span>';
      var drawer = document.createElement('div');
      drawer.className = 'foxbot-drawer';
      document.body.appendChild(drawer);
      document.body.appendChild(fab);
      var inst = buildBotUI(drawer, true);
      instances.push(inst);
      function updateFab(lang) {
        var d = DATA[lang] || DATA.zh;
        fab.querySelector('span').textContent = d.fabLabel;
      }
      updateFab(getLang());
      fab.addEventListener('click', function () {
        drawer.classList.toggle('open');
      });
      instances.push({ resetForLang: updateFab });
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        instances.forEach(function (i) { i.resetForLang(lang); });
      });
    });
    window.addEventListener('hashchange', function () {
      var lang = getLang();
      instances.forEach(function (i) { i.resetForLang(lang); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
