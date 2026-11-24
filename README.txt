WEDDING INVITATION - HOW TO EDIT
=================================

FOLDER
  index.html     -> all the TEXT (names, date, programme, location, thank you)
  css/style.css  -> colors, fonts, sizes, layout
  js/script.js   -> countdown date, music, animations, guestbook link
  images/        -> all photos (replace a file, keep the SAME name)
  audio/music.mp3-> background music (replace, keep the name)
  og.jpg         -> photo shown when you share the link (1200 x 630 px)

HOW TO EDIT
  1. Open the folder in a text editor (VS Code, Notepad++).
  2. Change the text, then save.
  3. Double-click index.html to test it in your browser.

COMMON CHANGES
  Names / text ........ index.html. Every text has 2 versions:
                        Khmer = the text between the tags
                        English = the data-en="..." part
                        Change both.
  Date / countdown .... js/script.js -> search "EDIT: wedding date"
                        (also change the date text in index.html)
  Photos .............. images/gallery-1.jpg ... gallery-6.jpg (slideshow)
                        images/hero-1.jpg (first photo), cover-bg.jpg, map.jpg
                        images/qr-gift.png (gift QR code)
  Music ............... audio/music.mp3
  Google Maps link .... index.html -> search "maps.app.goo.gl"
  Colors .............. css/style.css -> the first lines (--navy, --gold ...)
  Guestbook ........... js/script.js -> WISH_URL (Google Apps Script link)

LINK PREVIEW (Telegram / Messenger)
  In index.html (top) edit og:title, og:description and og:url.
  og:image must be your full address, for example:
  https://YOUR-SITE.netlify.app/og.jpg
  After each change: upload everything again, then in Telegram use
  @WebpageBot -> "Update preview again". For Facebook / Messenger use
  https://developers.facebook.com/tools/debug/ -> "Scrape Again".
  If the old preview stays, change the end of the og.jpg address
  (og.jpg?v=6, ?v=7 ...) in index.html so it is fetched fresh.

UPLOAD TO NETLIFY
  Drag the whole folder (or this zip) into the Netlify deploy box.
  index.html must be at the top level, next to og.jpg.

GUEST NAME (added)
  Personal link ....... https://YOUR-SITE.vercel.app/?to=Sokha
  Guests can also type their own name on the cover; it pre-fills the guestbook.
  Google Sheets link formula:  ="https://YOUR-SITE.vercel.app/?to="&ENCODEURL(A2)

UPLOAD TO VERCEL
  Push the folder to GitHub -> vercel.com -> Add New Project -> Import -> Deploy
  (Framework: Other, no build command). Or run:  npx vercel --prod
  Then update og:url and og:image in index.html to your Vercel address.
