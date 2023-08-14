const fs = require(`fs`);
const lodash = require(`lodash`);

fs.readFile(`./data/file.txt`, `utf-8`, (err, data) => {
  if (err) throw err;
  console.log(data);
  let dataArr = data.split(/\s+/);
  console.log(`${dataArr.length} words`);
  console.log(lodash.reverse(dataArr).join(` `));
  console.log(lodash.uniq(dataArr).join(` `));
  console.log(lodash.uniq(dataArr).length);
  const toSend = {
    uniqToUpper: lodash.uniq(dataArr).join(` `).toUpperCase(),
    uniqBigTan5: lodash
      .uniq(dataArr)
      .filter((word) => word.length > 5)
      .join(` `),
    uniqVowelsWords: lodash
      .uniq(dataArr)
      .map(
        (word) =>
          (word = { word: word, vowelCount: word.match(/[aeiou]/gi).length })
      ),
  };
  module.exports = toSend
});
