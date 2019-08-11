const rp = require('request-promise');

exports.translate = (english: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const options = {
      body: {
        "english": english,
      },
      json: true,
      method: 'POST',
      uri: 'https://www.wookietranslator.com/translate',
    };
    rp(options)
      .then((res: any) => {
        resolve(res as string);
      })
      .catch((err: any) => {
        reject(err as string);
      });
  });
};
