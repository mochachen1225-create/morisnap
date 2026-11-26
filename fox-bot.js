(function () {
  var MAIL = 'mochachen1225@gmail.com';
  var DATA = {
    zh: {
      fabLabel: '問小狐狸',
      title: '小狐狸・懶人小幫手',
      subtitle: '懶得滑長長 FAQ？點按鈕直接問我就好 🦊',
      placeholder: '輸入關鍵字（例：小工具、暗房、地圖、封存檔、戳印）',
      sendBtn: '送出',
      backHome: '← 看其他主題',
      mailBtn: '✉️ 寫信給摩卡',
      greeting: '嗨！我是 MoriSnap 的小狐狸 🦊\n既然是懶人相機，當然連看 FAQ 也要省力～點下面你想問的主題，或直接打關鍵字問我！',
      topicPrompt: '你想了解哪一題呢？點一下我馬上回答 👇',
      notFound: '這題小狐狸暫時沒有內建答案耶 🥺 你可以點下面換個主題，或直接寫信給摩卡（繁中／EN／日／韓都可以），我們會親自回覆你！',
      topics: [
        {
          id: 'vip',
          label: '💳 價錢＆VIP',
          items: [
            {
              q: '是訂閱制嗎？VIP 1.0 有什麼？',
              kw: ['錢', '價格', '訂閱', '免費', 'vip', '買斷', '廣告', '收費', '打孔', '色卡', '海報'],
              a: '完全不是訂閱制，免費版也完全沒廣告、不限拍照張數！VIP 是「一次買斷終身用」，解鎖 1.0 全部 1,200+ 原創插畫貼紙與季節分類、心情戳印全套、活頁與車票打孔框、自動色卡、日期字體、列印級畫質、今晚才顯影、足跡地圖（4 種風格與郵戳）、月度拍立得牆海報、更多限動棉紙底、全部小電影風格、關閉浮水印與自訂印章、iCloud 個人雙機同步（含自製貼紙、印章、濾鏡與牆面風格）及雲端資料夾備份！'
            },
            {
              q: '新貼紙和新功能怎麼來？要再付錢嗎？',
              kw: ['更新', '新貼紙', '新功能', '再付費', '再付錢'],
              a: '都透過 App Store 更新直接提供！買過終身 VIP 的人更新後會自動解鎖新內容，完全不需要再付錢 ✨'
            },
            {
              q: '換新手機／iPad 怎麼恢復 VIP？',
              kw: ['恢復', '還原', '購買', 'ipad', '重裝'],
              a: '不用再付錢！只要登入當時買 VIP 的同一個 Apple 帳號，打開 MoriSnap → 設定 → 點「恢復購買」就會秒解鎖 ✨'
            },
            {
              q: '怎麼申請退款？',
              kw: ['退款', '退費', '取消'],
              a: '付款由 Apple App Store 直接處理，請到 reportaproblem.apple.com 登入你的 Apple 帳號，選 MoriSnap 那筆交易就能申請退款喔。'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ 小工具＆暗房＆地圖',
          items: [
            {
              q: '怎麼把 MoriSnap 加到主畫面（小工具）？',
              kw: ['小工具', '主畫面', '桌面', '冰箱貼', '月曆', '本月封面', '去年的今天', 'widget'],
              a: '先打開 App 一次，回主畫面長按空白處 → 點左上「＋」→ 搜尋 MoriSnap，就有冰箱貼（小）、本月封面（中）、磁鐵月曆（大）三種大小！冰箱貼會自動挑照片，有「去年的今天」會優先放那張喔 ✨'
            },
            {
              q: '「今晚才顯影」是什麼？',
              kw: ['今晚', '顯影', '暗房', '通知', '晚上', '洗出來'],
              a: 'VIP 可以在設定裡打開！白天用相機拍的照片先放進暗房，晚上（可選 18:00–23:00）一起洗出來並收到一則手機本機通知。從相簿匯入、存進共享手帳的照片不會進暗房；關掉開關就會立刻全部顯影！'
            },
            {
              q: '足跡地圖會知道我在哪裡嗎？',
              kw: ['地圖', '足跡', '位置', '定位', '座標', '城市', '隱私'],
              a: '不會追蹤你的精確位置！足跡地圖預設關閉，只有開啟時才會問一次「大概位置」，只在手機離線換算成城市名稱（不存精確座標），資料也只在你的手機和自己的 iCloud。匯入原檔照片則會讀照片本身的位置換算城市。'
            },
            {
              q: '為什麼足跡地圖上沒有國界？',
              kw: ['國界', '邊界', '國家', '地圖'],
              a: '我們只想單純記錄你去過的每一座城市，所以地圖只畫溫柔的海岸線與城市郵戳，不畫國界 🗺️'
            },
            {
              q: '卡片上怎麼印城市？',
              kw: ['印城市', '卡片城市', '城市名', '相框', '日期後面'],
              a: '先在設定打開「足跡地圖」（VIP），拍完照的編輯頁、相框下面那排小按鈕點「📍 城市」，日期後面就會印上城市名喔！'
            },
            {
              q: '聊天軟體存的照片沒有日期和地點怎麼辦？',
              kw: ['聊天', '聊天軟體', '沒日期', '日期', '改日期', '地點', '補日期'],
              a: '聊天軟體存下來的照片常被清掉拍攝日期和地點。只要打開照片詳情頁點上方「日期」就能修改（卡片上印的日期也會一起換新！），點「📍 城市」就能手動選城市喔！'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 拍照＆戳印＆電影',
          items: [
            {
              q: '照片可以左右滑嗎？',
              kw: ['左右滑', '滑動', '上一張', '下一張', '翻頁', '瀏覽'],
              a: '可以喔！點開任何一張照片後左右滑，就能在剛剛看的範圍裡切換（手帳牆、某一天、或足跡地圖的某個城市）；還在暗房的照片會先跳過。'
            },
            {
              q: '心情天氣戳印怎麼用？',
              kw: ['戳印', '印章', '心情', '天氣', '晴', '雨', '歇腳', '蓋章'],
              a: '拍完在編輯頁直接點「晴、雨、咖啡歇腳」，就會像木頭印章一樣蓋在卡片角落！更多款（共 12 顆，前 3 顆免費）在貼紙抽屜的「印章」分頁裡喔。'
            },
            {
              q: '怎麼錄 3 秒短片、旋轉貼紙或用 26 款日期貼紙？',
              kw: ['錄影', '短片', '影片', '旋轉', '縮放', '貼紙', '搖一搖', '去背', '手寫', 'pencil', '四格', '合拍', '日期貼紙'],
              a: '輕按快門（或音量鍵）拍照、長按錄 3 秒有聲微短片！搖一搖手機可換貼紙，內建 26 款自動帶入當天日期的日期貼紙（前 10 款免費），點貼紙拖右下 🔄 圓點可單指旋轉縮放；也支援韓系 1×4／日系 2×2 四格、本機一秒去背合拍與 Apple Pencil 手寫塗鴉！'
            },
            {
              q: '怎麼印出來（4×6 超商列印）？',
              kw: ['列印', '超商', '印出來', '4x6', '虛線', '裁切', '畫質'],
              a: '用「4×6 列印版」匯出，會自動留好 5mm 安全邊距不怕超商列印裁到字，還能加淡灰裁切虛線，剪下來剛好是一張卡片！搭配 VIP 列印級畫質最清楚 ✨'
            },
            {
              q: '很暗的地方也能拍嗎？',
              kw: ['暗', '夜拍', '夜景', '晚上', '極光', '夜色', '黑'],
              a: '可以！所有濾鏡都會自動判斷亮度，暗處按快門會自動連拍疊圖（拿穩約半秒）；「夜色極光」濾鏡更會收集約 2 秒微光，晚上也很好拍 🌙'
            },
            {
              q: '分享時跳出短影音／貼文／訊息選單，選了沒反應？',
              kw: ['分享', '沒反應', '選單', '短影音', '貼文', '訊息', '限動', '一鍵發限動'],
              a: '那個選單是對方社群 App 自己的分享畫面，MoriSnap 沒辦法控制。想發限動請用 MoriSnap 裡的「一鍵發限動」按鈕最穩（9 種棉紙底色限動排版與海報限動尺寸都支援）；想發短影音請用「小電影」做成影片再分享！'
            },
            {
              q: '小電影會存在哪裡？',
              kw: ['小電影', '存在哪裡', '存檔', '不見', '找不到', '電影', '時光放映機'],
              a: '小電影是即時做給你預覽的，按「存檔」才會存進手機的「照片」App；沒按存檔就不會留下。它不會出現在手帳牆上，想再看可以開「時光放映機」或重新做一支喔 🎬'
            },
            {
              q: '限動排版、Photo Dump 小電影與自動挑精華怎麼用？',
              kw: ['回顧', 'photo dump', '對拍', '挑精華', '精華', '音樂', '靜音', '底色', '海報'],
              a: '限動排版內建 9 種棉紙底色（米白、淡灰免費）＋夾子、紙膠帶小裝飾，可一鍵換個樣子；月度海報限動尺寸也能一鍵發限動！1080p 每週／每月小電影含免費對拍 Photo Dump 範本與「自動挑精華」開關，也可靜音輸出再自由配樂。'
            },
            {
              q: '小狐狸是誰？',
              kw: ['小狐狸', '狐狸', '吉祥物', '名字', '是誰'],
              a: '就是我本人啦 🦊！我是 MoriSnap 的專屬吉祥物，名字就叫「小狐狸」～App 裡有 66 款我的日常貼紙，暗房、地圖跟客服小站也都是我在陪大家！'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 同步＆共享＆換機',
          items: [
            {
              q: '換手機或不小心刪掉 App，照片還在嗎？',
              kw: ['換手機', '換機', '封存檔', '匯出', '匯入', '刪除', '刪掉', '誤刪', '空間', '容量', 'mb'],
              a: '可以到「設定 → 匯出／匯入封存檔」一鍵打包全部手帳存到「檔案」或雲端硬碟，新手機匯入就復原！此外 iPhone 的 iCloud 備份／換機移轉、預設開啟的「自動存到照片」與 VIP iCloud 同步也能保護資料。請注意刪除 App 會刪掉本機手帳；單張誤刪 30 天內可從最近刪除救回，設定裡也能看空間用量（一般約 0.5–1MB／列印級約 2MB）。'
            },
            {
              q: 'iCloud 同步和「另存到雲端硬碟資料夾」有什麼不同？',
              kw: ['同步', 'icloud', 'ipad', '雙機', '備份', '雲端', '資料夾', '另存', '不同', '差別', '檔案'],
              a: '・iCloud 同步（VIP）：讓你的 iPhone 和 iPad 手帳一模一樣（照片、貼紙、印章、濾鏡、牆面風格全同步），換手機打開就回來。\n・另存一份到雲端硬碟資料夾（VIP）：每存一張就複製一份圖片到你選的資料夾——只要雲端硬碟 App 出現在 iPhone「檔案」裡就能直接選，不用另設帳號，適合想在電腦看或多留備份的人。\n兩者可以一起開，也可以只開一個；換機整本搬家則可用「匯出／匯入封存檔」！'
            },
            {
              q: '共享手帳免費嗎？誰可以刪照片？',
              kw: ['共享', '朋友', '邀請', '一起', '多選', '帳號', '誰可以刪', '刪照片', '下載到照片'],
              a: '共享手帳完全免費（不用 VIP、不用註冊帳號）！每個人都可以刪自己上傳的照片，建立者可以刪所有人的照片方便整理，一般成員不能刪別人的。刪掉會先放進自己的「最近刪除」30 天；想留一份可以先點「下載到照片」喔。'
            },
            {
              q: '朋友刪掉共享照片，我這邊怎麼還在？',
              kw: ['還在', '沒同步', '更新', '共享刪除', '朋友刪掉'],
              a: '會在手機收到 iCloud 通知、或下次打開 MoriSnap 時更新（通常幾秒到幾十秒）。如果 App 一直開著，回到主畫面再打開一次就會立刻更新喔！'
            },
            {
              q: '朋友退出或被移出共享手帳，照片會怎樣？',
              kw: ['退出', '移出', '離開', '踢出', '共享'],
              a: '這本手帳會從他的手機上消失，但他之前下載到「照片」App 的不受影響；手帳裡原本的照片都還在，其他成員照樣看得到！'
            }
          ]
        },
        {
          id: 'help',
          label: '💛 字太小＆排解＆隱私',
          items: [
            {
              q: '覺得字太小怎麼辦？',
              kw: ['字太小', '字體', '大字', '放大', '旁白', 'voiceover'],
              a: 'MoriSnap 會自動跟著 iPhone 的「文字大小」系統設定變大，也支援旁白（VoiceOver）朗讀喔 💛'
            },
            {
              q: '權限按到拒絕、沒聲音或 iPad 分割畫面卡住？',
              kw: ['權限', '拒絕', '沒聲音', '麥克風', '分割', '相機', '黑畫面'],
              a: '到系統「設定 → MoriSnap」把相機、麥克風、照片、位置或通知重新打開就好！錄短片沒聲音請確認麥克風已開；iPad 分割畫面若暫停相機，切回全螢幕就馬上恢復。'
            },
            {
              q: '照片會上傳嗎？資料安全嗎？',
              kw: ['隱私', '上傳', '伺服器', 'gps', '安全', '廣告'],
              a: '我們零伺服器、無廣告、無分析工具！去背、貼紙、挑精華全在手機完成；同步與共享只存你自己的 iCloud，足跡地圖只記城市不存座標，今晚顯影只用本機通知！'
            },
            {
              q: 'VIP 可以許願貼紙或功能嗎？',
              kw: ['許願', '建議', '想要', '點菜', '希望'],
              a: '當然可以！！只要你是 VIP，隨時歡迎點下方「寫信給摩卡」許願想看到的插畫貼紙或小功能 🦊✨'
            }
          ]
        }
      ]
    },
    en: {
      fabLabel: 'Ask Fox',
      title: 'Little Fox · Lazy FAQ Helper',
      subtitle: 'Too lazy to read a long FAQ? Just tap a button 🦊',
      placeholder: 'Type a keyword (widget, darkroom, map, archive, stamp…)',
      sendBtn: 'Ask',
      backHome: '← Other topics',
      mailBtn: '✉️ Email Mocha',
      greeting: 'Hi! I\'m Little Fox from MoriSnap 🦊\nIt\'s a lazy-friendly camera, so our FAQ should be effortless too! Tap a topic below or type a keyword.',
      topicPrompt: 'Pick a question and I\'ll answer right away 👇',
      notFound: 'Hmm, I don\'t have a preset answer for that yet 🥺 Try another topic below, or email Mocha directly — we reply personally!',
      topics: [
        {
          id: 'vip',
          label: '💳 Pricing & VIP',
          items: [
            {
              q: 'Is it a subscription? What does 1.0 VIP include?',
              kw: ['price', 'cost', 'sub', 'subscription', 'free', 'vip', 'ad', 'ads', 'poster', 'punch', 'palette'],
              a: 'No subscription — and even Free has zero ads and unlimited photos! One-time lifetime VIP unlocks all 1,200+ illustrated stickers & seasonal packs, all 12 mood stamps, punch frames, auto color palettes, date fonts, Print-Grade Quality, Develop Tonight, Footprint Map (4 styles & postmarks), Monthly Wall Posters, extra Story cotton papers, all movie styles, watermark toggle, private iCloud Sync (incl. cutouts, stamps, custom filters & themes) & cloud folder backup!'
            },
            {
              q: 'How do new stickers and features arrive?',
              kw: ['update', 'new sticker', 'new feature', 'pay again'],
              a: 'New stickers and features arrive through regular App Store updates. Lifetime VIP owners get all future updates automatically at zero extra cost ✨'
            },
            {
              q: 'How do I restore VIP or request a refund?',
              kw: ['restore', 'refund', 'cancel', 'purchase'],
              a: 'To restore VIP on any device, sign in with the same Apple Account and tap MoriSnap → Settings → Restore Purchases. For refunds, Apple handles billing directly at reportaproblem.apple.com.'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ Widgets, Darkroom & Map',
          items: [
            {
              q: 'How do I add MoriSnap widgets to my Home Screen?',
              kw: ['widget', 'home screen', 'fridge', 'magnet', 'calendar', 'on this day'],
              a: 'Open MoriSnap once, long-press an empty area on your Home Screen → tap "+" at top-left → search MoriSnap! Pick from Fridge Magnet (small — automatically shows "On This Day" when available), Month Cover (medium), or Magnet Calendar (large).'
            },
            {
              q: 'What is "Develop Tonight"?',
              kw: ['develop', 'tonight', 'darkroom', 'notification', 'wait'],
              a: 'VIP members can turn on Develop Tonight in Settings: daytime camera snaps rest in a cozy darkroom and develop together at your chosen evening time (18:00–23:00) with a local notification. Library imports and Shared Album photos skip the darkroom, and turning it off develops everything immediately!'
            },
            {
              q: 'Does the Footprint Map know my exact location?',
              kw: ['map', 'footprint', 'location', 'gps', 'city', 'track'],
              a: 'Never exact coordinates! Footprint Map is off by default and only asks for approximate location when you turn it on. MoriSnap converts it offline into a city name only — stored strictly on your device and your own iCloud. Imported photos use their own embedded location on-device.'
            },
            {
              q: 'Why are there no country borders on the map?',
              kw: ['border', 'country', 'borders', 'coastline'],
              a: 'We simply want to remember the cities you\'ve visited, so our map draws gentle coastlines and city postmarks with no borders 🗺️'
            },
            {
              q: 'How do I print the city name on my photo card?',
              kw: ['print city', 'city name', 'on card', 'frame', 'beside date'],
              a: 'Turn on Footprint Map in Settings (VIP), then tap "📍 City" in the small toolbar below the frame in the editor — the city name prints right beside the date!'
            },
            {
              q: 'Photos from chat apps have no date or location?',
              kw: ['chat', 'date', 'missing', 'edit date', 'location', 'city'],
              a: 'Chat apps often strip date and location info. Open the photo\'s detail page, tap the date at the top to change it (the printed date on the photo card updates too!), and tap "📍 City" to pick the city manually.'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 Camera, Stamps & Movies',
          items: [
            {
              q: 'Can I swipe left and right between photos?',
              kw: ['swipe', 'next', 'previous', 'browse', 'left', 'right'],
              a: 'Yes! Open any photo and swipe left or right to browse within your current view (journal wall, a specific day, or a Footprint Map city). Photos still in the darkroom are skipped automatically.'
            },
            {
              q: 'How do Mood & Weather Stamps work?',
              kw: ['stamp', 'mood', 'weather', 'sunny', 'rainy', 'coffee'],
              a: 'Right after snapping, tap Sunny, Rainy, or Coffee Break in the editor to stamp a woodblock ink mark in the corner! Find all 12 stamps (first 3 free) in the sticker drawer\'s Stamps tab.'
            },
            {
              q: 'Share menu options (short video, post, message) do nothing?',
              kw: ['share', 'nothing', 'unresponsive', 'menu', 'post', 'story', 'short video'],
              a: 'That popup belongs to the other social app, so MoriSnap can\'t control it. For Stories, use MoriSnap\'s built-in "Share to Story" button (supported on our 9-shade Story layouts and Story-sized posters); for short videos, export via Little Movies first!'
            },
            {
              q: 'Where are little movies saved?',
              kw: ['where', 'movie', 'saved', 'save', 'photos app', 'projector', 'missing'],
              a: 'Little movies are rendered live for preview — they save to your phone\'s Photos app only when you tap "Save". They don\'t appear on the journal wall; open Time Projector or make a new one anytime 🎬'
            },
            {
              q: '4×6 printing, night shooting & 9-shade Story/Photo Dump?',
              kw: ['print', '4x6', 'kiosk', 'dark', 'night', 'aurora', 'photo dump', 'highlights', 'mute', 'beat', 'cotton', 'poster'],
              a: 'Use 4×6 Print Sheet (5mm safe margins + cut lines) for kiosk printing. Every filter auto-stacks low-light bursts (~0.5s) and Night Aurora gathers ~2s of light 🌙 Story Layout offers 9 cotton-paper shades + clip/tape accents (cream & gray free), posters share to Stories in one tap, and 1080p movies feature free beat-synced Photo Dump & Auto-pick highlights!'
            },
            {
              q: '3s clips, 26 date stickers, cutouts & Little Fox?',
              kw: ['video', 'clip', '4-cut', 'cutout', 'rotate', 'shake', 'fox', 'mascot', 'date sticker'],
              a: 'Tap shutter (or volume button) for photos, hold for 3s clips! Shake to shuffle stickers, choose from 26 dynamic date stickers (first 10 free), drag 🔄 to rotate/resize, enjoy 4-Cut booths & 1-tap on-device cutout Co-Snaps. And I\'m MoriSnap\'s mascot — Little Fox (小狐狸) 🦊'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ Sync, Sharing & Switching',
          items: [
            {
              q: 'Switching phones, backup archives, or storage space?',
              kw: ['switch', 'new phone', 'archive', 'export', 'import', 'storage', 'space', 'mb'],
              a: 'Go to Settings → Export / Import Archive to pack your entire diary into one file (save to Files or your cloud drive) and restore on a new phone! iPhone iCloud Backup, Auto-Save to Photos, and VIP iCloud Sync also keep memories safe. Deleting the app deletes local data (single deleted photos stay in Recently Deleted 30 days). Cards are ~0.5–1MB (~2MB Print-Grade).'
            },
            {
              q: 'iCloud Sync vs. saving a copy to a cloud drive folder?',
              kw: ['sync', 'icloud', 'ipad', 'backup', 'folder', 'cloud drive', 'files', 'difference', 'copy'],
              a: '• iCloud Sync (VIP): Keeps your iPhone & iPad diaries identical (photos, cutouts, stamps, custom filters & themes).\n• Save a Copy to Cloud Folder (VIP): Copies each saved card to any cloud drive folder visible in Apple\'s Files app (no extra account setup) — great for computer viewing or extra backup.\nUse either or both; use Export/Import Archive when moving to a new phone!'
            },
            {
              q: 'Shared Albums: deleting photos, sync delay & leaving?',
              kw: ['shared', 'friend', 'invite', 'delete', 'who can', 'leave', 'removed', 'remove', 'still there', 'refresh'],
              a: 'Shared Albums are 100% free via iCloud! Members can delete their own uploads, and the creator can delete any photo (deleted shots stay in your Recently Deleted 30 days). Deletions sync in seconds via iCloud notification or next time you reopen MoriSnap (go Home and reopen if it stayed open). If a friend leaves/is removed, the album leaves their phone while photos already saved to Photos stay safe, and everyone else keeps all album photos.'
            }
          ]
        },
        {
          id: 'help',
          label: '💛 Text Size, Fixes & Privacy',
          items: [
            {
              q: 'Text feels too small? Accessibility support?',
              kw: ['text', 'font', 'small', 'large', 'size', 'voiceover'],
              a: 'MoriSnap automatically scales with your iPhone\'s system Text Size setting and supports VoiceOver 💛'
            },
            {
              q: 'Permissions denied, privacy, or VIP wishes?',
              kw: ['permission', 'camera', 'mic', 'privacy', 'server', 'wish', 'split'],
              a: 'Re-enable permissions in iOS Settings → MoriSnap (for iPad Split View camera pause, return to full screen). MoriSnap has zero servers, zero ads, city-only optional map, and local-only notifications. VIP members can email sticker/feature wishes anytime 🦊'
            }
          ]
        }
      ]
    },
    ja: {
      fabLabel: '子ぎつねに聞く',
      title: '子ぎつね・ずぼら FAQ 案内',
      subtitle: '長い FAQ を読むのが面倒なときは、ボタンで聞いてね 🦊',
      placeholder: 'キーワードを入力（ウィジェット・暗室・マップ・日付…）',
      sendBtn: '送信',
      backHome: '← 他のテーマを見る',
      mailBtn: '✉️ モカにメールする',
      greeting: 'こんにちは！MoriSnap の子ぎつねだよ 🦊\nずぼらカメラだから、FAQ もラクに探せるようにしたよ。気になるボタンをタップするか、キーワードを入れてね！',
      topicPrompt: '知りたい質問をタップしてね 👇',
      notFound: 'ごめんね、その質問はまだ登録されてないみたい 🥺 別のボタンを試すか、下のボタンからモカにメールしてね！',
      topics: [
        {
          id: 'vip',
          label: '💳 料金・VIP',
          items: [
            {
              q: 'サブスクですか？VIP の内容とアップデートは？',
              kw: ['料金', '値段', 'サブスク', '無料', 'vip', '買い切り', '広告', 'アップデート', 'ポスター'],
              a: 'サブスクではなく一度きりの買い切り（無料版も広告ゼロ）！VIP は 1,200 種以上の全ステッカー、気分スタンプ全 12 種、パンチ枠・自動カラーパレット・日付フォント・プリント画質・今夜現像・足あとマップ（4 スタイル＆消印）・月間ポスター・iCloud 個人同期などを永久解放。今後のアップデートも追加料金なしです ✨'
            },
            {
              q: 'VIP の復元や返金について',
              kw: ['復元', '返金', 'キャンセル', 'ipad'],
              a: '同じ Apple アカウントで MoriSnap → 設定 →「購入を復元」を押せばすぐ戻ります。返金は Apple の reportaproblem.apple.com から手続きできます。'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ ウィジェット・暗室・マップ',
          items: [
            {
              q: 'ホーム画面（ウィジェット）に追加するには？',
              kw: ['ウィジェット', 'ホーム画面', '冷蔵庫', 'マグネット', 'カレンダー', '去年の今日'],
              a: 'アプリを一度開いてから、ホーム画面の空きスペースを長押し → 左上「＋」→ MoriSnap を検索！冷蔵庫マグネット（去年の今日を優先表示）・今月の表紙・マグネットカレンダーの 3 サイズから選べるよ ✨'
            },
            {
              q: '「今夜現像」とは何ですか？',
              kw: ['今夜', '現像', '暗室', '通知', '夜'],
              a: 'VIP でオンにできる機能！昼にカメラで撮った写真を暗室にあずけて、夜（18:00〜23:00 で選択可）にまとめて現像＆端末内ローカル通知でお知らせします。アルバム取り込みや共有手帳は暗室に入らず、オフにすれば即現像されます！'
            },
            {
              q: '足あとマップは正確な位置を記録しますか？',
              kw: ['マップ', '地図', '足あと', '位置', 'gps', '都市'],
              a: '正確な座標は保存しません！初期オフで、オンにしたときだけ「おおよその位置情報」を使い、端末内で都市名だけに変換して保存します（端末とご自身の iCloud 内のみ）。アルバム取り込み写真は写真自体の位置情報を使います。'
            },
            {
              q: 'なぜマップに国境がないのですか？',
              kw: ['国境', '境界', '国', 'マップ'],
              a: '訪れた都市の思い出だけをシンプルに残したいため、やさしい海岸線と都市消印のみを描き、国境線は入れていません 🗺️'
            },
            {
              q: 'カードに都市名を印字するには？',
              kw: ['都市名', '印字', 'カード', 'フレーム下'],
              a: 'まず設定で「足あとマップ」（VIP）をオンにしてね！撮影後の編集画面でフレーム下の小さなボタン列から「📍 都市」を押すと、日付の後ろに都市名が入るよ。'
            },
            {
              q: 'チャットアプリ保存の写真に日付や場所がないときは？',
              kw: ['チャット', '日付', '場所', '変更', '消えた'],
              a: 'チャットアプリ保存で消えた日付や場所も大丈夫！写真の詳細画面で上部の日付をタップして修正でき（カードの日付も再印字されます！）、📍都市から都市名も手動で選べます。'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 撮影・スタンプ・ムービー',
          items: [
            {
              q: '写真は左右にスワイプできますか？',
              kw: ['スワイプ', '左右', '次', '前', '切り替え'],
              a: 'できるよ！写真を開いたまま左右へスワイプすると、見ていた範囲（手帳ウォール・その日・足あとマップの都市）の中で前後に切り替えられます。暗室の写真は自動でスキップされるよ。'
            },
            {
              q: '気分・天気スタンプはどう使いますか？',
              kw: ['スタンプ', '気分', '天気', '晴れ', '雨', 'コーヒー'],
              a: '撮影後の編集画面で晴れ・雨・コーヒー一息をタップすると、木製スタンプのように角へポンと押せます！全 12 種（最初の 3 種無料）はステッカーの「スタンプ」タブにあるよ。'
            },
            {
              q: '共有メニュー（ショート動画・投稿など）を選んでも反応しないときは？',
              kw: ['共有', 'シェア', '反応しない', 'メニュー', '投稿', 'ストーリー'],
              a: 'そのメニューは相手先 SNS アプリ側の画面なので MoriSnap からは制御できません。ストーリーはアプリ内の「ストーリーへ共有」ボタンが一番確実（9色棉紙＆ポスターも対応）！ショート動画は先に「ショートムービー」で動画を作ってから共有してね。'
            },
            {
              q: 'ショートムービーはどこに保存されますか？',
              kw: ['どこ', '保存', 'ムービー', '写真アプリ', '見当たらない', 'プロジェクター'],
              a: 'ショートムービーはその場でプレビュー用に作られ、「保存」を押したときだけスマホの「写真」アプリに保存されます！手帳ウォールには並ばないので、見返すときはタイムプロジェクターや再作成を使ってね 🎬'
            },
            {
              q: '4×6 印刷・夜景・9色ストーリー＆フォトダンプは？',
              kw: ['印刷', 'プリント', '暗い', '夜景', 'フォトダンプ', 'ハイライト', '無音', '棉紙', 'ポスター'],
              a: '4×6 プリント用は 5mm 安全余白＋点線つき。暗所では全フィルター自動連写（約0.5秒）、夜色オーロラは約2秒🌙 ストーリー用は 9 色の棉紙＋クリップ・マステ飾り（オフ白・薄灰無料）、ポスターもワンタップ共有、1080p ムービーは無料の対拍フォトダンプ＆自動ハイライト対応！'
            },
            {
              q: '3秒動画・26種日付ステッカー・切り抜き・子ぎつね',
              kw: ['動画', '4カット', '切り抜き', '回転', '振る', '子ぎつね', '誰', '日付ステッカー'],
              a: '短押し（音量ボタンも可）で写真、長押しで3秒動画！スマホを振ってステッカー変更、自動日付ステッカーも全 26 種（最初の 10 種無料）、🔄 で1本指回転・拡大、4 カットや 1 秒切り抜き合写も楽しめます。ぼくは公式マスコットの「子ぎつね」だよ 🦊'
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
              kw: ['同期', 'icloud', '違い', 'クラウド', 'フォルダ', 'バックアップ', 'ファイル', 'パソコン'],
              a: '・iCloud 同期（VIP）：iPhone と iPad の手帳をまるごと同期（写真・自作切り抜き・スタンプ・フィルター・壁テーマ）。\n・クラウドフォルダにもう 1 部保存（VIP）：保存のたびに iPhone の「ファイル」に見えるクラウドフォルダへ画像をコピー（追加アカウント不要）。PC 閲覧や別バックアップに便利！\n両方オンでも片方だけでも OK、機種変更の引っ越しはアーカイブ書き出しも使えます。'
            },
            {
              q: '共有手帳の削除権限・反映タイミング・退出したら？',
              kw: ['共有', '友だち', '招待', '削除', '誰', '退出', '抜け', '外さ', '残って', '反映'],
              a: '共有手帳は完全無料！メンバーは自分の写真のみ、作成者は全員の写真を削除できます（削除分は自分の「最近削除した項目」に 30 日保管）。友だちの削除は iCloud 通知や次回起動時に反映（通常数秒〜数十秒、開いたままならホームへ戻って開き直すと即更新）。退出・除外されても保存済み写真と他メンバーの手帳写真はそのまま残ります。'
            }
          ]
        },
        {
          id: 'help',
          label: '💛 文字サイズ・プライバシー・リクエスト',
          items: [
            {
              q: '文字が小さく感じます',
              kw: ['文字', '小さい', '大きい', 'サイズ', 'voiceover'],
              a: 'iPhone の「文字サイズ」設定に合わせて自動で大きくなり、VoiceOver にも対応しています 💛'
            },
            {
              q: '権限・プライバシー・VIP リクエストについて',
              kw: ['許可', '権限', 'プライバシー', 'サーバー', 'リクエスト', 'ほしい'],
              a: '権限は iOS「設定 → MoriSnap」から再設定できます。MoriSnap は独自サーバーゼロ・広告ゼロ、マップは都市名のみ、今夜現像はローカル通知のみ。VIP リクエストもメールでいつでも歓迎です 🦊'
            }
          ]
        }
      ]
    },
    ko: {
      fabLabel: '여우에게 묻기',
      title: '아기 여우 · 귀차니스트 FAQ 도우미',
      subtitle: '긴 FAQ 읽기 귀찮다면 버튼만 톡 눌러 물어보세요 🦊',
      placeholder: '키워드 입력 (위젯, 암실, 지도, 아카이브, 도장…)',
      sendBtn: '질문',
      backHome: '← 다른 주제 보기',
      mailBtn: '✉️ 모카에게 메일 쓰기',
      greeting: '안녕! MoriSnap 아기 여우야 🦊\n귀차니스트 카메라니까 FAQ도 편하게 찾아야지! 아래 주제를 누르거나 키워드를 바로 입력해 봐.',
      topicPrompt: '궁금한 질문을 눌러줘 👇',
      notFound: '앗, 아직 준비되지 않은 질문이야 🥺 아래에서 다른 주제를 골라보거나 모카에게 직접 메일을 보내줘!',
      topics: [
        {
          id: 'vip',
          label: '💳 요금 & VIP',
          items: [
            {
              q: '구독제인가요? VIP 혜택과 업데이트는요?',
              kw: ['가격', '요금', '구독', '무료', 'vip', '광고', '결제', '업데이트', '포스터'],
              a: '구독제가 아닌 평생 1회 구매(무료도 광고 0)! VIP는 1,200+ 전체 스티커·기분 도장 12종·펀치 프레임·자동 컬러 팔레트·날짜 폰트·인화급 화질·오늘 밤 현상·발자국 지도(4스타일 & 소인)·월간 포스터·iCloud 개인 동기화 등을 모두 해제해요. 이후 업데이트도 추가 결제 없이 자동 적용됩니다 ✨'
            },
            {
              q: 'VIP 복원과 환불은 어떻게 하나요?',
              kw: ['복원', '환불', '취소', 'ipad'],
              a: '구매한 Apple 계정으로 MoriSnap → 설정 → \'구매 복원\'을 누르면 바로 열려요. 환불은 Apple 공식 reportaproblem.apple.com 에서 신청할 수 있습니다.'
            }
          ]
        },
        {
          id: 'newfeat',
          label: '🗺️ 위젯 · 암실 · 지도',
          items: [
            {
              q: '홈 화면(위젯)에 어떻게 추가하나요?',
              kw: ['위젯', '홈 화면', '냉장고', '자석', '달력', '작년의 오늘'],
              a: '앱을 한 번 연 뒤 홈 화면 빈 곳을 길게 누르기 → 왼쪽 위 \'＋\' → MoriSnap 검색! 냉장고 자석(\'작년의 오늘\' 우선 표시)·이달의 커버·자석 달력 3가지 크기가 있어요 ✨'
            },
            {
              q: '\'오늘 밤 현상\'은 무엇인가요?',
              kw: ['오늘 밤', '현상', '암실', '알림', '밤'],
              a: 'VIP에서 켤 수 있는 기능이에요! 낮에 카메라로 찍은 사진은 암실에 두고, 밤에 정한 시간(18:00~23:00)에 한꺼번에 현상되며 기기 로컬 알림이 와요. 앨범 불러오기·공유 다이어리는 암실에 안 들어가고, 끄면 즉시 현상됩니다!'
            },
            {
              q: '발자국 지도가 내 정확한 위치를 아나요?',
              kw: ['지도', '발자국', '위치', 'gps', '도시', '추적'],
              a: '정확한 좌표는 저장하지 않아요! 기본 꺼짐이며 직접 켠 경우에만 \'대략적인 위치\'를 기기 안에서 오프라인으로 도시 이름만 변환해 내 기기와 내 iCloud에만 보관합니다. 앨범 원본 사진은 사진 자체의 위치로 도시를 찾아요.'
            },
            {
              q: '지도에 국경선이 없는 이유는요?',
              kw: ['국경', '경계', '국가', '지도'],
              a: '다녀온 도시의 추억만 담백하게 기록하고 싶어서 해안선과 도시 소인만 그리고 국경선은 표시하지 않았어요 🗺️'
            },
            {
              q: '카드에 도시 이름을 인쇄하려면?',
              kw: ['도시 인쇄', '도시 이름', '카드 도시', '프레임 아래'],
              a: '먼저 설정에서 \'발자국 지도\'(VIP)를 켜고, 촬영 후 편집 화면 프레임 아래 작은 버튼 줄에서 \'📍 도시\'를 누르면 날짜 뒤에 도시 이름이 인쇄돼요!'
            },
            {
              q: '메신저 앱에서 저장한 사진에 날짜와 위치가 없어요',
              kw: ['메신저', '채팅', '날짜', '위치', '수정', '없어요'],
              a: '메신저에서 저장한 사진은 날짜·위치가 지워질 때가 많아요. 사진 상세 화면에서 위쪽 날짜를 눌러 고치면 카드 날짜도 함께 바뀌고, \'📍 도시\'에서 도시도 직접 선택할 수 있어요!'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 촬영 · 도장 · 영화',
          items: [
            {
              q: '사진을 좌우로 스와이프할 수 있나요?',
              kw: ['스와이프', '좌우', '넘기', '이전', '다음'],
              a: '응! 아무 사진이나 연 뒤 좌우로 스와이프하면 방금 보던 범위(다이어리 벽·그날·발자국 지도 도시) 안에서 앞뒤로 넘길 수 있어. 암실 사진은 자동으로 건너뛰어 줘!'
            },
            {
              q: '기분·날씨 스탬프는 어떻게 쓰나요?',
              kw: ['도장', '스탬프', '기분', '날씨', '맑음', '비', '커피'],
              a: '촬영 후 편집 화면에서 맑음·비·커피 휴식을 누르면 나무 도장처럼 모서리에 콕 찍혀요! 전체 12종(앞 3종 무료)은 스티커 서랍의 \'도장\' 탭에 있어요.'
            },
            {
              q: '공유 메뉴(숏폼·게시물·메시지)를 눌러도 반응이 없어요',
              kw: ['공유', '반응', '메뉴', '숏폼', '게시물', '스토리'],
              a: '그 메뉴는 상대 SNS 앱 자체의 공유 화면이라 MoriSnap에서 제어할 수 없어. 스토리는 MoriSnap 안의 \'스토리로 바로 공유\' 버튼이 가장 확실해(9가지 코튼지 스토리·포스터 모두 지원)! 숏폼은 먼저 \'미니 영화\'로 영상을 만든 뒤 공유해 줘.'
            },
            {
              q: '미니 영화는 어디에 저장되나요?',
              kw: ['어디', '저장', '영화', '영상', '사진 앱', '프로젝터', '안 보여'],
              a: '미니 영화는 실시간 미리보기용으로 만들어지며, \'저장\'을 눌렀을 때만 휴대폰의 \'사진\' 앱에 저장돼요! 다이어리 벽에는 남지 않으니 다시 볼 땐 타임 프로젝터나 새로 만들기를 이용해 줘 🎬'
            },
            {
              q: '4×6 인화 · 야간 촬영 · 9색 스토리 & 포토 덤프',
              kw: ['인화', '4x6', '어두운', '야간', '포토 덤프', '하이라이트', '무음', '코튼지', '포스터'],
              a: '4×6 인화용은 5mm 안전 여백＋자르기 점선 제공! 어두울 땐 모든 필터 자동 연사(~0.5초), 밤빛 오로라는 ~2초 집광 🌙 스토리 레이아웃은 9가지 코튼지 배경색＋클립·테이프 장식(크림·연회색 무료), 포스터 원탭 스토리 공유, 1080p 영상은 무료 포토 덤프 & 하이라이트 자동 선택까지 지원해요!'
            },
            {
              q: '3초 영상 · 26종 날짜 스티커 · 누끼 · 아기 여우',
              kw: ['동영상', '네컷', '인생네컷', '누끼', '회전', '흔들', '여우', '누구', '날짜 스티커'],
              a: '짧게 누르면(볼륨 버튼 포함) 사진, 길게 누르면 3초 영상! 흔들어서 스티커 교체, 자동 날짜 스티커 26종(앞 10종 무료), 🔄 한 손가락 회전·크기 조절, 네컷과 1초 누끼 합사진까지 지원해요. 나는 공식 마스코트 \'아기 여우\'야 🦊'
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
              kw: ['동기화', 'icloud', '차이', '클라우드', '폴더', '백업', '파일', '사본'],
              a: '・iCloud 동기화(VIP): iPhone과 iPad 다이어리를 똑같이 맞춰줘요(사진·자작 누끼·스탬프·필터·벽 테마 포함).\n・클라우드 폴더 사본 저장(VIP): 카드를 저장할 때마다 iPhone \'파일\' 앱에 보이는 클라우드 폴더로 이미지를 한 장씩 복사해 줘요(별도 계정 설정 불필요). PC 보기나 추가 백업에 딱 좋아요!\n둘 다 켜거나 하나만 켜도 되고, 기기 변경 전체 이사는 아카이브 내보내기를 쓰면 돼요.'
            },
            {
              q: '공유 다이어리 사진 삭제 · 반영 시점 · 나가면?',
              kw: ['공유', '친구', '초대', '삭제', '누가', '나가', '제외', '내보내', '남아', '반영'],
              a: '공유 다이어리는 완전 무료! 누구나 자신의 사진을 삭제할 수 있고, 만든 사람은 모든 사진을 삭제할 수 있어요(삭제분은 \'최근 삭제된 항목\'에 30일 보관). 친구가 지운 사진은 iCloud 알림이나 다음 앱 실행 시 반영되며(보통 몇 초~수십 초, 앱이 켜져 있었다면 홈으로 나갔다 다시 열면 즉시 갱신!), 나가거나 제외돼도 미리 저장한 사진과 다른 멤버의 사진은 그대로 남아요!'
            }
          ]
        },
        {
          id: 'help',
          label: '💛 큰 글씨 · 개인정보 · 소원',
          items: [
            {
              q: '글자가 너무 작게 보여요',
              kw: ['글자', '작아', '크기', '큰 글씨', '폰트', 'voiceover'],
              a: 'iPhone의 시스템 \'텍스트 크기\' 설정에 맞춰 자동으로 커지고 VoiceOver도 지원해요 💛'
            },
            {
              q: '권한 · 개인정보 · VIP 소원 안내',
              kw: ['권한', '개인정보', '서버', '소원', '요청'],
              a: '권한은 iOS \'설정 → MoriSnap\'에서 다시 켤 수 있어요. MoriSnap은 자체 서버 0·광고 0, 발자국 지도는 도시명만, 오늘 밤 현상은 로컬 알림만 사용합니다. VIP 소원 메일도 언제든 환영해요 🦊'
            }
          ]
        }
      ]
    }
  };

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
    var msgsEl, chipsEl, inputEl, titleEl, subEl, sendEl;

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
          '<form class="foxbot-form">' +
            '<input type="text" class="foxbot-input" autocomplete="off">' +
            '<button type="submit" class="foxbot-send"></button>' +
          '</form>' +
        '</div>';
      titleEl = container.querySelector('.foxbot-title');
      subEl = container.querySelector('.foxbot-sub');
      msgsEl = container.querySelector('.foxbot-msgs');
      chipsEl = container.querySelector('.foxbot-chips');
      inputEl = container.querySelector('.foxbot-input');
      sendEl = container.querySelector('.foxbot-send');
      var closeBtn = container.querySelector('.foxbot-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          container.classList.remove('open');
        });
      }
      container.querySelector('.foxbot-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var q = inputEl.value.trim();
        if (!q) return;
        inputEl.value = '';
        handleSearch(q);
      });
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

    function handleSearch(query) {
      var d = DATA[currentLang] || DATA.zh;
      addMsg('user', query);
      var low = query.toLowerCase();
      var best = null;
      var bestScore = 0;
      d.topics.forEach(function (t) {
        t.items.forEach(function (it) {
          var score = 0;
          it.kw.forEach(function (k) {
            if (low.indexOf(k.toLowerCase()) !== -1) score += 2;
          });
          if (it.q.toLowerCase().indexOf(low) !== -1) score += 3;
          if (it.a.toLowerCase().indexOf(low) !== -1) score += 1;
          if (score > bestScore) {
            bestScore = score;
            best = { item: it, topic: t };
          }
        });
      });
      if (best) {
        addMsg('bot', best.item.a);
        renderFollowup(best.topic);
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
