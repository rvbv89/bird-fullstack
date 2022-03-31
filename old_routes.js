app.get("/photo/:comname", async (req, res) => {
    const comname = req.params.comname;
    console.log(comname)
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${comname}`,
        {
          headers: {
            Authorization:
              "Client-ID GVPDbDdKZe9uvSf5CPNjJ83BuhDEwWxQ6WDT50hiyd8",
            "Access-Control-Allow-Origin": "*",
          },
          params: {
            collections: "t_b6QAI_quY"
          }
        }
      );
      const data = response.data;
      res.send(JSON.stringify(data));
      // const data = response.data;
      // console.log(data);
    } catch (error) {
      console.log(error.response.status);
    }
  });

  const onClickPic = async function onClickPic(name) {
    const ebird_url = `http://localhost:5000/photo/${name}`;
    await axios
      .get(ebird_url)
      .then((res) =>
       console.log(res.data)
      )};