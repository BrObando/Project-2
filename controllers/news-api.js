const fetch = require("node-fetch");

module.exports = {
  index: async function (req, res, next) {
    const URL = `http://www.gamespot.com/api/articles/?api_key=${process.env.APIKEY}&format=json`;
    const config = {
      method: "GET",
    };

    try {
      const apiResponse = await fetch(URL, config);
      if (apiResponse.statusText !== "OK") {
        console.log("something is wrong girl");
        throw new Error(apiResponse.statusText);
      }
      console.log(apiResponse);
      const apiData = await apiResponse.json();
      const results = apiData.results;
      console.log(apiData);
      res.render("news/index", { news: results });
    } catch (err) {
      res.send({ error: err.message });
    }
  },
};
