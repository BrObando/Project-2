const fetch = require("node-fetch");

module.exports = {
  index: async function (req, res, next) {
    // console.log('testing fetch');
    const URL = `http://www.gamespot.com/api/articles/?api_key=${process.env.APIKEY}&format=json`;
    const config = {
      method: 'GET',
       };

    try {
      const apiResponse = await fetch(URL, config);
         if (apiResponse.statusText !== "OK") {
      console.log('something is wrong girl');
        throw new Error(apiResponse.statusText);
      }
console.log(apiResponse)
      const apiData = await apiResponse.json();
      const results = apiData.results;
      console.log(apiData)
      res.render('news/index', { news: results });
    } catch(err) {
      res.send({ error: err.message });
    }
  },

  // show: async function (_req, res, _next) {
  //   const URL = `https://games-news-api.p.rapidapi.com/news/${_req.params.id}`;
  //   const config = {
  //     method: "GET",
  //   };

  //   try {
  //     const apiResponse = await fetch(URL, config);
  //     console.log('something is wrong');

  //     if(apiResponse.statusText !== 'OK') {
  //       console.log('there is an error');
  //       throw Error(apiResponse.statusText);
  //     }

  //     const newsData = await apiResponse.json();

  //     const { id, name, sprites, types } = newsData;
  //     console.log({ id, name, sprites, types });
  //     const image = sprites.front_default;
  //     res.render('news/show', { name: name, image });
  //   } catch(err) {
  //     res.send(err.message);
  //   }
  // }
};
