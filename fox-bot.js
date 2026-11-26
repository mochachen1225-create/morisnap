(function () {
  var MAIL = 'mochachen1225@gmail.com';
  var DATA = {
    zh: {
      fabLabel: '問小狐狸',
      title: '森林小狐狸・懶人小幫手',
      subtitle: '懶得滑長長 FAQ？點按鈕直接問我就好 🦊',
      placeholder: '輸入關鍵字（例：VIP、同步、退款、去背、浮水印）',
      sendBtn: '送出',
      backHome: '← 看其他主題',
      mailBtn: '✉️ 寫信給摩卡',
      greeting: '嗨！我是 MoriSnap 的森林小狐狸 🦊\n既然是懶人相機，當然連看 FAQ 也要省力～點下面你想問的主題，或直接打關鍵字問我！',
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
              a: '完全不是訂閱制，免費版也完全沒廣告、不限拍照張數！VIP 是「一次買斷終身用」，解鎖 1.0 全部 1,200+ 原創插畫貼紙與季節分類、特殊框（含打孔框）、自動色卡、日期字體、列印級畫質、月度拍立得牆海報、更多限動棉紙底、全部小電影風格、關閉浮水印與自訂印章、iCloud 個人雙機同步與雲端資料夾備份！'
            },
            {
              q: '新貼紙和新功能怎麼來？要再付錢嗎？',
              kw: ['更新', '新貼紙', '新功能', '再付費', '再付錢'],
              a: '都透過 App Store 更新直接提供！買過終身 VIP 的人更新後會自動解鎖新內容，完全不需要再付錢 ✨'
            },
            {
              q: '換新手機／iPad 怎麼恢復 VIP？',
              kw: ['換機', '新手機', '恢復', '還原', '購買', 'ipad', '重裝'],
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
          id: 'wish',
          label: '🌟 VIP 許願池',
          items: [
            {
              q: 'VIP 真的可以許願貼紙或功能嗎？',
              kw: ['許願', '建議', '新貼紙', '想要', '點菜', '希望'],
              a: '真的可以！！只要你是 VIP，我們都接受許願 🦊✨ 想看什麼毛孩品種、夜市美食、冷門運動、懷舊小物或順手小功能，點下面的「寫信給摩卡」告訴我們，都會認真收錄進未來的免費更新裡！'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 拍照＆貼紙＆電影',
          items: [
            {
              q: '怎麼錄 3 秒短片？貼紙怎麼旋轉？',
              kw: ['錄影', '短片', '影片', '旋轉', '縮放', '貼紙', '搖一搖'],
              a: '輕按快門是拍照、長按快門就是錄 3 秒有聲微短片！編輯時「搖一搖手機」會換一組貼紙；點貼紙選取後，可以直接拖右下角的 🔄 小圓鈕，一根手指就能同時旋轉＋縮放超方便！'
            },
            {
              q: '有韓系／日系四格、追星合拍、防盜浮水印嗎？',
              kw: ['四格', '韓系', '日系', '人生四格', '追星', '本命', '盜圖', '防盜', '印章', 'logo', '去背', '合拍'],
              a: '通通有！！內建韓系 1×4 ＆ 日系 2×2 人生四格；「一秒去背合拍」可以把本命偶像、動漫角色或毛孩直接疊進鏡頭合照（本機完成絕不上傳）；還支援自訂 @帳號防盜浮水印跟匯入個人 Logo 圖片印章，保護你的美照不被盜！'
            },
            {
              q: '可以手寫塗鴉或做一秒去背貼紙嗎？',
              kw: ['手寫', '塗鴉', 'pencil', '字', '貼紙'],
              a: '可以！編輯頁點「我的去背」就能在本機一秒把相簿照片變貼紙；點 ✏️ 就能打字或直接手寫塗鴉（iPad 支援 Apple Pencil），還能加上純白貼紙邊框！'
            },
            {
              q: '怎麼印出來（4×6 超商列印）？',
              kw: ['列印', '超商', '印出來', '4x6', '虛線', '裁切', '畫質'],
              a: '用「4×6 列印版」匯出，會自動留好 5mm 安全邊距不怕超商機器裁切到字，還能加上淡灰裁切虛線，剪下來剛好是一張卡片！搭配 VIP 列印級畫質印出來最清楚 ✨'
            },
            {
              q: '很暗的地方也能拍嗎？',
              kw: ['暗', '夜拍', '夜景', '晚上', '極光', '夜色', '黑'],
              a: '可以！所有濾鏡都會自動判斷亮度，暗處按快門會自動連拍疊圖（拿穩約半秒就好）；「夜色極光」濾鏡更會收集約 2 秒微光，晚上也很好拍 🌙'
            },
            {
              q: 'IG 限動和小電影怎麼分享？',
              kw: ['電影', '回顧', '浮水印', 'reels', '音樂', '限動', 'ig', '靜音'],
              a: '照片支援一鍵分享與自動棉紙底限動排版；1080p 每週／每月小電影也避開 IG 安全區，而且支援靜音輸出，到 IG 再配喜歡的音樂超方便！右下角小浮水印升級一次買斷 VIP 就能隨時關掉喔。'
            },
            {
              q: '小狐狸是誰？',
              kw: ['小狐狸', '狐狸', '吉祥物', '名字', '是誰'],
              a: '就是我本人啦 🦊！我是 MoriSnap 的專屬吉祥物，名字就叫「小狐狸」～App 裡有 66 款我的日常貼紙，平常也在這個客服小站陪大家聊天解惑！'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 同步＆共享＆備份',
          items: [
            {
              q: 'iPhone 和 iPad 怎麼同步？',
              kw: ['同步', 'icloud', 'ipad', '雙機'],
              a: '升級 VIP 後，在登入同一個 Apple 帳號的 iPhone 和 iPad 上打開「設定 → iCloud 同步」，照片、短片和手帳就會透過你自己的私人 iCloud 自動同步！'
            },
            {
              q: '共享手帳免費嗎？朋友要裝 App 嗎？',
              kw: ['共享', '朋友', '邀請', '一起', '退出'],
              a: '共享手帳「完全免費」，你和朋友都不必買 VIP！朋友裝好 MoriSnap 並登入 iCloud，點你的邀請連結就能一起往同一本相簿貼照片，隨時也能退出。'
            },
            {
              q: '怎麼自動備份到 Google Drive / iCloud Drive？',
              kw: ['備份', 'google', 'drive', '雲端', '資料夾', '過期'],
              a: 'VIP 可以在「設定 → 外部資料夾自動備份」透過系統「檔案」選一個雲端資料夾，之後每拍完都會自動多存一份！如果資料夾被搬動或刪除顯示授權過期，重新選一次資料夾就好。'
            }
          ]
        },
        {
          id: 'rescue',
          label: '🗑️ 誤刪救回＆排解',
          items: [
            {
              q: '換手機或不小心刪掉 App，照片還在嗎？',
              kw: ['刪除', '刪掉', '誤刪', '復原', '救回', '不見', '換手機', '換機', '空間', '容量', 'mb'],
              a: 'iPhone 的 iCloud 備份和換機移轉會帶走 MoriSnap 資料，「自動存到照片」也預設開啟，VIP 還可開 iCloud 同步。但「刪除 App 會刪掉裝置裡的手帳」，建議開著 iPhone iCloud 備份！若是單張誤刪，30 天內都能從「最近刪除」救回。空間方面一般每張約 0.5–1MB、VIP 列印級畫質約 2MB，在設定裡就能看用量與清理舊原圖喔！'
            },
            {
              q: '權限按到拒絕、沒聲音或 iPad 分割畫面卡住？',
              kw: ['權限', '拒絕', '沒聲音', '麥克風', '分割', '相機', '黑畫面'],
              a: '到系統「設定 → MoriSnap」把相機、麥克風或照片重新打開就好！錄短片沒聲音請確認麥克風已開且沒開靜音；部分 iPad 機型分割畫面會由系統暫停相機，切回全螢幕就馬上恢復。'
            }
          ]
        },
        {
          id: 'privacy',
          label: '🔒 隱私安全',
          items: [
            {
              q: '照片會上傳嗎？會洩漏 GPS 定位嗎？',
              kw: ['隱私', '上傳', '伺服器', 'gps', '定位', '位置', '安全'],
              a: '絕對不會！我們沒有開發者伺服器，照片與去背都在你手機裡完成（同步與共享也只存你自己的 iCloud，我們完全看不到），而且不要求定位權限，分享出去的照片完全沒有 GPS 位置！'
            }
          ]
        }
      ]
    },
    en: {
      fabLabel: 'Ask Fox',
      title: 'Mori Fox · Lazy FAQ Helper',
      subtitle: 'Too lazy to read a long FAQ? Just tap a button 🦊',
      placeholder: 'Type a keyword (VIP, sync, refund, watermark…)',
      sendBtn: 'Ask',
      backHome: '← Other topics',
      mailBtn: '✉️ Email Mocha',
      greeting: 'Hi! I\'m the MoriSnap little fox 🦊\nIt\'s a lazy-friendly camera, so our FAQ should be effortless too! Tap a topic below or type a keyword.',
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
              a: 'No subscription — and even Free has zero ads and unlimited photos! One-time lifetime VIP unlocks all 1,200+ illustrated stickers & seasonal packs, special frames (incl. punch frames), auto color palettes, date fonts, Print-Grade Quality, Monthly Polaroid Wall Posters, extra Story cotton papers, all movie styles, watermark toggle, private iCloud Sync & cloud folder backup!'
            },
            {
              q: 'How do new stickers and features arrive?',
              kw: ['update', 'new sticker', 'new feature', 'pay again'],
              a: 'New stickers and features arrive through regular App Store updates. Lifetime VIP owners get all future updates automatically at zero extra cost ✨'
            },
            {
              q: 'How do I restore VIP on a new device?',
              kw: ['restore', 'new phone', 'ipad', 'reinstall', 'purchase'],
              a: 'No need to pay again! Sign in with the same Apple Account, then open MoriSnap → Settings → Restore Purchases ✨'
            },
            {
              q: 'How do I request a refund?',
              kw: ['refund', 'cancel', 'money'],
              a: 'Apple handles all App Store payments directly. Please sign in at reportaproblem.apple.com and choose your MoriSnap purchase to request a refund.'
            }
          ]
        },
        {
          id: 'wish',
          label: '🌟 VIP Wish Box',
          items: [
            {
              q: 'Can VIP members really request stickers or features?',
              kw: ['wish', 'request', 'sticker', 'idea', 'suggest'],
              a: 'YES!! If you\'re VIP, we take wishes 🦊✨ Tell us your dream sticker pack (pet breeds, local snacks, sports, retro items) or a handy feature via email — we read every note and add favorites into free updates!'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 Camera & Stickers',
          items: [
            {
              q: 'How do I record clips or rotate stickers?',
              kw: ['video', 'clip', 'record', 'rotate', 'resize', 'shake', 'sticker'],
              a: 'Tap the shutter for a photo, or press & hold for a 3-second clip with audio. Shake your phone in the editor to shuffle stickers! Tap a sticker and drag the bottom-right 🔄 handle with one finger to rotate & resize at once.'
            },
            {
              q: 'Do you have Korean/Japanese 4-Cut, idol Co-Snap & custom watermarks?',
              kw: ['4-cut', '4cut', 'korean', 'japanese', 'booth', 'idol', 'bias', 'oshi', 'cosnap', 'stamp', 'logo', 'anti-theft', 'steal'],
              a: 'YES to all three!! Shoot Korean 1×4 strips and Japanese 2×2 grids at home; use on-device 1-tap Cutout Co-Snap to pose live with your bias, anime character, or pet (never uploaded); and stamp your own @handle or custom logo image watermark to protect your photos!'
            },
            {
              q: 'Can I make photo cutouts or handwrite?',
              kw: ['cutout', 'lift', 'handwrite', 'pencil', 'draw'],
              a: 'Yes! Tap "My Cutouts" to lift a subject from your photo on-device in one tap. Tap ✏️ to type or doodle with Apple Pencil and add a crisp white border!'
            },
            {
              q: 'How do I print 4×6 cards or shoot in the dark?',
              kw: ['print', '4x6', 'kiosk', 'cut', 'dark', 'night', 'aurora', 'low light'],
              a: 'Use the 4×6 Print Sheet (5mm safe margins + optional dashed cut lines) so photo kiosks never crop your card — VIP Print-Grade Quality looks sharpest! For dark rooms, every filter auto-stacks a quick burst (~0.5s hold), and Night Aurora gathers ~2s of light 🌙'
            },
            {
              q: 'How do IG Stories, 1080p movies & Little Fox work?',
              kw: ['movie', 'recap', 'watermark', 'music', 'story', 'ig', 'mute', 'fox', 'mascot'],
              a: 'Share in one tap or use our cotton-paper Story Layout; 1080p weekly/monthly movies respect IG safe zones and support muted export for IG music! And who am I? I\'m MoriSnap\'s mascot — simply named Little Fox (小狐狸) 🦊'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ Sync & Shared Albums',
          items: [
            {
              q: 'How do I sync iPhone and iPad?',
              kw: ['sync', 'icloud', 'ipad', 'devices'],
              a: 'With VIP, sign into the same Apple Account on both devices and switch on Settings → iCloud Sync. Everything syncs privately through your own Apple iCloud!'
            },
            {
              q: 'Are Shared Albums free? Do friends need VIP?',
              kw: ['share', 'shared', 'friend', 'invite', 'leave'],
              a: 'Shared Albums are 100% free — neither you nor your friends need VIP! Friends just install MoriSnap, sign into iCloud, and tap your invite link to add photos together.'
            },
            {
              q: 'How does cloud folder auto-backup work?',
              kw: ['backup', 'google', 'drive', 'folder', 'expire'],
              a: 'VIP users can pick any folder in Settings → Auto-Backup Folder (iCloud Drive, Google Drive, etc.) via iOS Files so every saved card copies automatically. If moved or deleted, simply re-pick the folder.'
            }
          ]
        },
        {
          id: 'rescue',
          label: '🗑️ Recovery & Fixes',
          items: [
            {
              q: 'Switching phones, deleting the app, or storage size?',
              kw: ['delete', 'deleted', 'recover', 'restore', 'trash', 'lost', 'switch', 'storage', 'space', 'mb'],
              a: 'iPhone iCloud Backup & Quick Start carry MoriSnap over, Auto-Save to Photos is ON by default, and VIP adds iCloud Sync. Deleting the app deletes local diary data, so keep iCloud Backup on (single deleted photos stay in Recently Deleted for 30 days!). Standard cards are ~0.5–1MB (~2MB for VIP Print-Grade Quality), and Settings → Storage lets you clear old originals.'
            },
            {
              q: 'Permissions denied, no sound, or iPad Split View?',
              kw: ['permission', 'camera', 'mic', 'audio', 'sound', 'split'],
              a: 'Open iOS Settings → MoriSnap to re-enable Camera, Microphone, or Photos. For silent clips, check Mic permission and mute switch. If iPad Split View pauses the camera, expand to full screen to resume.'
            }
          ]
        },
        {
          id: 'privacy',
          label: '🔒 Privacy',
          items: [
            {
              q: 'Are photos uploaded? Any GPS location?',
              kw: ['privacy', 'server', 'upload', 'gps', 'location', 'track'],
              a: 'Never! We have zero servers — everything runs on your device (and optional iCloud sync/sharing stays strictly inside your own Apple iCloud). We never ask for Location, and shared photos contain zero GPS data!'
            }
          ]
        }
      ]
    },
    ja: {
      fabLabel: '子ぎつねに聞く',
      title: '森の子ぎつね・ずぼら FAQ 案内',
      subtitle: '長い FAQ を読むのが面倒なときは、ボタンで聞いてね 🦊',
      placeholder: 'キーワードを入力（VIP・同期・返金・透かし…）',
      sendBtn: '送信',
      backHome: '← 他のテーマを見る',
      mailBtn: '✉️ モカにメールする',
      greeting: 'こんにちは！MoriSnap の森の子ぎつねだよ 🦊\nずぼらカメラだから、FAQ もラクに探せるようにしたよ。気になるボタンをタップするか、キーワードを入れてね！',
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
              a: 'サブスクではなく一度きりの買い切り（無料版も広告ゼロ）！VIP は 1,200 種以上の全ステッカー、パンチ穴枠・自動カラーパレット・日付フォント・プリント画質・月間ポスター・追加のストーリー棉紙・iCloud 同期などを永久解放。新ステッカーや機能は App Store 更新で届き、VIP の方は追加料金なしで自動追加されます ✨'
            },
            {
              q: '機種変更や iPad で VIP を復元するには？',
              kw: ['復元', '機種変更', 'ipad', '再インストール'],
              a: '追加料金は不要です！購入時と同じ Apple アカウントでサインインし、MoriSnap → 設定 →「購入を復元」を押すだけ ✨'
            },
            {
              q: '返金したいときは？',
              kw: ['返金', 'キャンセル'],
              a: '決済は Apple が管理しているため、reportaproblem.apple.com にサインインして MoriSnap の購入履歴から申請してくださいね。'
            }
          ]
        },
        {
          id: 'wish',
          label: '🌟 VIP リクエスト',
          items: [
            {
              q: 'VIP ならステッカーや機能をリクエストできる？',
              kw: ['リクエスト', 'お願い', 'ほしい', 'ステッカー', '機能'],
              a: 'もちろん！！VIP の方からのリクエストはいつでも大歓迎 🦊✨ ほしい動物・ご当地グルメ・趣味・レトロ雑貨のイラストステッカーや便利機能があれば、ぜひメールで教えてね！'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 撮影・ステッカー',
          items: [
            {
              q: '3秒動画の撮り方・ステッカーの回転方法は？',
              kw: ['動画', '録画', '回転', '拡大', 'ステッカー', '振る'],
              a: 'シャッターを軽く押すと写真、長押しで音付き3秒動画が撮れます！編集画面でスマホを振るとステッカーをシャッフル。ステッカーをタップして右下の 🔄 ハンドルを1本指で動かせば回転とサイズ変更が同時にできるよ！'
            },
            {
              q: '韓国・日本風 4 カットや推し合写、転載防止透かしはある？',
              kw: ['4カット', '韓国', '日本', '推し', '合写', '転載', 'スタンプ', 'ロゴ', '透かし'],
              a: 'ぜんぶ入ってるよ！！韓国風 1×4 と日本風 2×2 の 4 カット、端末内 1 秒切り抜きで推しやペットと撮れる合写、さらに @ID や自作ロゴ画像を入れられる無断転載防止スタンプまで対応してるよ！'
            },
            {
              q: '写真の切り抜きや手書きはできる？',
              kw: ['切り抜き', '手書き', 'ペン', 'pencil'],
              a: 'できるよ！編集画面の「マイ切り抜き」で端末内ですぐ切り抜きステッカーが作れて、✏️ ボタンで文字や手書き（Apple Pencil 対応）も白いフチ付きで貼れます！'
            },
            {
              q: '4×6 印刷・暗い場所の撮影・IG ストーリーと子ぎつね',
              kw: ['ムービー', '透かし', '音楽', '印刷', 'プリント', '暗い', '夜景', 'ストーリー', '無音', '子ぎつね', '誰'],
              a: '4×6 プリント用は 5mm 安全余白＋切り取り点線つき！暗い場所では全フィルターが自動連写（約0.5秒）、夜色オーロラは約2秒で明るく撮れます🌙 ストーリー用棉紙レイアウト＆ 1080p ムービー（無音書き出し対応）も完備。そしてぼくは公式マスコットの「子ぎつね（小狐狸）」だよ 🦊'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 同期・共有・バックアップ',
          items: [
            {
              q: 'iPhone と iPad で同期するには？',
              kw: ['同期', 'icloud', 'ipad'],
              a: 'VIP なら同じ Apple アカウントの両端末で「設定 → iCloud 同期」をオンにするだけ！ご自身の iCloud 経由で自動同期されます。'
            },
            {
              q: '共有手帳は無料？友だちも VIP が必要？',
              kw: ['共有', '友だち', '招待', '退出'],
              a: '共有手帳は完全無料！あなたも友だちも VIP 不要です。友だちが MoriSnap を入れて招待リンクを開くだけで一緒に写真を集められます。'
            },
            {
              q: 'Google Drive や iCloud Drive に自動バックアップできる？',
              kw: ['バックアップ', 'google', 'drive', 'フォルダ'],
              a: 'VIP は「設定 → 外部フォルダ自動バックアップ」から好きなフォルダを選ぶと自動でコピー保存されます。フォルダ移動などで期限切れが出たら選び直すだけで再開できます！'
            }
          ]
        },
        {
          id: 'rescue',
          label: '🗑️ 復元・困ったとき',
          items: [
            {
              q: '機種変更・アプリ削除・スマホの容量は大丈夫？',
              kw: ['消した', '削除', '戻す', '復元', 'ゴミ箱', '機種変更', '容量', 'ストレージ', 'mb'],
              a: 'iPhone の iCloud バックアップや移行で引き継がれ、写真アプリへの自動保存も初期オンです。アプリ自体を削除すると端末内の手帳も消えるので iCloud バックアップ推奨（単体削除は 30 日間復元可）。容量は通常 0.5〜1MB／プリント画質約 2MB で、設定から元データの整理もできます！'
            },
            {
              q: '許可をオフにした・音が出ない・iPad 分割画面で止まる',
              kw: ['許可', '権限', '音', 'マイク', '分割', 'カメラ'],
              a: 'iOS の「設定 → MoriSnap」からカメラ・マイク・写真をオンにしてね。音が入らないときはマイク許可と消音スイッチを確認、iPad の分割表示で止まるときは全画面に戻すと再開します！'
            }
          ]
        },
        {
          id: 'privacy',
          label: '🔒 プライバシー',
          items: [
            {
              q: '写真はサーバーに送られる？GPS は残る？',
              kw: ['プライバシー', 'サーバー', '位置', 'gps', '安全'],
              a: '送られません！独自サーバーはなく処理はすべて端末内（iCloud 同期／共有もご自身の iCloud のみ）。位置情報も使わず、シェアした写真に GPS は一切入りません！'
            }
          ]
        }
      ]
    },
    ko: {
      fabLabel: '여우에게 묻기',
      title: '숲속 아기 여우 · 귀차니스트 FAQ 도우미',
      subtitle: '긴 FAQ 읽기 귀찮다면 버튼만 톡 눌러 물어보세요 🦊',
      placeholder: '키워드 입력 (VIP, 동기화, 환불, 워터마크…)',
      sendBtn: '질문',
      backHome: '← 다른 주제 보기',
      mailBtn: '✉️ 모카에게 메일 쓰기',
      greeting: '안녕! MoriSnap 숲속 아기 여우야 🦊\n귀차니스트 카메라니까 FAQ도 편하게 찾아야지! 아래 주제를 누르거나 키워드를 바로 입력해 봐.',
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
              a: '구독제가 아닌 평생 1회 구매(무료도 광고 0)! VIP는 1,200+ 전체 스티커·펀치 프레임·자동 컬러 팔레트·날짜 폰트·인화급 화질·월간 포스터·추가 스토리 코튼지·iCloud 동기화 등을 모두 해제해요. 새 스티커와 기능은 App Store 업데이트로 제공되며 VIP는 추가 결제 없이 자동 적용됩니다 ✨'
            },
            {
              q: '새 기기나 iPad에서 VIP를 어떻게 복원하나요?',
              kw: ['복원', '새 폰', '기기', 'ipad', '재설치'],
              a: '다시 결제할 필요 없어요! 구매한 같은 Apple 계정으로 로그인하고 MoriSnap → 설정 → \'구매 복원\'을 누르면 바로 열려요 ✨'
            },
            {
              q: '환불은 어떻게 하나요?',
              kw: ['환불', '취소'],
              a: '결제는 Apple App Store에서 직접 관리해요. reportaproblem.apple.com 에 로그인해서 MoriSnap 결제를 선택해 신청해 주세요.'
            }
          ]
        },
        {
          id: 'wish',
          label: '🌟 VIP 소원 우체통',
          items: [
            {
              q: 'VIP면 정말 스티커나 기능을 소원 빌 수 있나요?',
              kw: ['소원', '요청', '스티커', '원하는', '기능'],
              a: '당연하죠!! VIP라면 무엇이든 소원 받아요 🦊✨ 보고 싶은 반려동물, 간식, 운동, 레트로 소품 일러스트 스티커나 작은 기능이 있다면 메일로 알려주세요. 업데이트에 정성껏 담아볼게요!'
            }
          ]
        },
        {
          id: 'camera',
          label: '📸 촬영 & 스티커',
          items: [
            {
              q: '3초 영상 찍기 & 스티커 회전은 어떻게 해요?',
              kw: ['영상', '동영상', '녹화', '회전', '크기', '흔들', '스티커'],
              a: '셔터를 짧게 누르면 사진, 길게 누르면 소리 담긴 3초 영상! 편집할 때 폰을 흔들면 스티커 조합이 바뀌어요. 스티커를 눌러 오른쪽 아래 🔄 동그란 핸들을 한 손가락으로 끌면 회전과 크기 조절이 한 번에 돼요!'
            },
            {
              q: '한국·일본식 네컷, 최애 합사진, 도용 방지 워터마크도 되나요?',
              kw: ['네컷', '인생네컷', '한국', '일본', '최애', '덕질', '합사진', '도용', '스탬프', '로고', '워터마크'],
              a: '전부 다 돼요!! 한국식 1×4·일본식 2×2 인생네컷, 기기 내 1초 누끼로 최애나 반려동물과 함께 찍는 합사진(서버 전송 0), 그리고 @아이디나 내 로고 이미지를 넣는 도용 방지 워터마크 스탬프까지 모두 지원해요!'
            },
            {
              q: '내 사진 누끼 스티커나 손글씨도 되나요?',
              kw: ['누끼', '손글씨', '낙서', '펜슬', 'pencil'],
              a: '네! 편집 화면의 \'내 누끼\'로 기기 안에서 바로 1초 누끼 스티커를 만들고, ✏️ 버튼으로 글씨나 손글씨(iPad Apple Pencil 지원)도 흰 테두리와 함께 붙여요!'
            },
            {
              q: '4×6 인화 · 야간 촬영 · IG 스토리 공유 · 아기 여우 소개',
              kw: ['주간', '영상', '워터마크', '음악', '영화', '인화', '출력', '어두운', '야간', '스토리', '무음', '여우', '누구'],
              a: '4×6 인화용은 5mm 안전 여백＋자르기 점선으로 깔끔하게 출력! 어두운 곳에선 모든 필터가 자동 연사(~0.5초), 밤빛 오로라는 ~2초 집광 촬영을 지원해요 🌙 코튼지 스토리 레이아웃 & 1080p 영상(무음 내보내기 지원)도 완비! 그리고 나는 MoriSnap 공식 마스코트 \'아기 여우(小狐狸)\'야 🦊'
            }
          ]
        },
        {
          id: 'sync',
          label: '☁️ 동기화 & 공유 & 백업',
          items: [
            {
              q: 'iPhone과 iPad를 어떻게 동기화하나요?',
              kw: ['동기화', 'icloud', 'ipad'],
              a: 'VIP 구매 후 같은 Apple 계정으로 로그인된 두 기기에서 \'설정 → iCloud 동기화\'를 켜면 내 개인 iCloud로 자동 동기화돼요!'
            },
            {
              q: '공유 다이어리는 무료인가요? 친구도 VIP가 필요한가요?',
              kw: ['공유', '친구', '초대', '나가기'],
              a: '공유 다이어리는 완전 무료! 나도 친구도 VIP가 필요 없어요. 친구가 MoriSnap을 설치하고 초대 링크만 누르면 함께 사진을 모을 수 있어요.'
            },
            {
              q: 'Google Drive / iCloud Drive 자동 백업은요?',
              kw: ['백업', 'google', 'drive', '폴더', '클라우드'],
              a: 'VIP는 \'설정 → 외부 폴더 자동 백업\'에서 원하는 폴더를 고르면 저장할 때마다 자동 복사돼요. 폴더 이동으로 권한이 만료되면 다시 선택해 주면 바로 재개됩니다!'
            }
          ]
        },
        {
          id: 'rescue',
          label: '🗑️ 복구 & 문제 해결',
          items: [
            {
              q: '기기 변경 · 앱 삭제 · 저장 공간이 궁금해요',
              kw: ['삭제', '지웠', '복구', '휴지통', '사라졌', '기기', '용량', '공간', 'mb'],
              a: 'iPhone iCloud 백업과 기기 이동으로 데이터가 함께 옮겨지며 \'사진 앱 자동 저장\'도 기본 켜짐이에요. 단, 앱을 삭제하면 기기 내 다이어리도 삭제되니 iCloud 백업을 켜두세요(개별 삭제는 30일간 복구 가능). 용량은 일반 0.5~1MB / 인화급 약 2MB이며 설정에서 오래된 원본만 정리할 수 있어요!'
            },
            {
              q: '권한 거부 / 영상 무음 / iPad 분할 화면 멈춤',
              kw: ['권한', '거부', '소리', '마이크', '분할', '카메라'],
              a: 'iOS \'설정 → MoriSnap\'에서 카메라·마이크·사진 권한을 다시 켜주세요. 소리가 안 나면 마이크 권한과 무음 스위치를 확인하고, iPad 분할 화면에서 카메라가 멈추면 전체 화면으로 전환하면 바로 돌아와요!'
            }
          ]
        },
        {
          id: 'privacy',
          label: '🔒 개인정보',
          items: [
            {
              q: '사진이 업로드되거나 GPS 위치가 남나요?',
              kw: ['개인정보', '서버', '업로드', 'gps', '위치', '안전'],
              a: '절대 아니에요! 개발자 서버가 없고 모든 처리는 내 기기 안에서 이뤄져요(iCloud 동기화·공유도 오직 내 Apple iCloud에만 저장). 위치 권한도 안 쓰고 공유 사진에 GPS도 전혀 안 남아요!'
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
            '<img class="foxbot-ava" src="assets/fox_happy.png" alt="Mori Fox">' +
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
        gmail: '📮 用 Gmail 網頁版開信（推薦）',
        native: '📱 用系統郵件 App 開啟（iPhone / Mac）',
        copy: '📋 複製信箱與主旨',
        copied: '✅ 已複製信箱與主旨！直接貼進常用信箱即可'
      },
      en: {
        title: '✉️ Choose how to email Mocha',
        toLbl: 'To: ',
        subLbl: 'Subject: ',
        gmail: '📮 Open in Gmail Web (Recommended)',
        native: '📱 Open Default Mail App',
        copy: '📋 Copy Email & Subject',
        copied: '✅ Copied! Paste into any mail app you like'
      },
      ja: {
        title: '✉️ モカへのメール送信方法',
        toLbl: '宛先：',
        subLbl: '件名：',
        gmail: '📮 Gmail ウェブ版で開く（おすすめ）',
        native: '📱 標準メールアプリで開く',
        copy: '📋 アドレスと件名をコピー',
        copied: '✅ コピーしました！お使いのメールに貼り付けてね'
      },
      ko: {
        title: '✉️ 모카에게 메일 보내기',
        toLbl: '받는 사람: ',
        subLbl: '제목: ',
        gmail: '📮 Gmail 웹에서 열기 (추천)',
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
