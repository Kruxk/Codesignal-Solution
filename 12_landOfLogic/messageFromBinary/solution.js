messageFromBinaryCode = code => code.match(/.{1,8}/g).reduce((a,c) => `${a}${String.fromCharCode(parseInt(c, 2))}`, ``)