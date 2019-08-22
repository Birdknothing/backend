const req = require('superagent');
const iconv = require('iconv-lite');
// const req = require('superagent-charset')(reqi);
const utf8 = iconv.decodeStream('utf8');
const rio = require('cheerio');
const path = require('path');
// npm install html-entities 可以了解下字符实体
const fs = require('fs');
req.get('http://127.0.0.1:5500/2019-8-11/lab/css/zsjm.html').end((err, res) => {
  // 默认decodeEntities是true，意味着中文被翻译成字符实体，因此设为false
  const $ = rio.load(res.text, { decodeEntities: false, xmlMode: false });
  fs.writeFileSync(
    './1.html',
    $('script:last-child')
      .remove()
      .end()
      .html()
  );
});
