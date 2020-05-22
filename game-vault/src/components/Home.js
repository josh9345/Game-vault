import React from "react";

function Home() {
  let json = "";

  const request = async () => {
    let response = await fetch("https://api.rawg.io/api/games");
    let json = await response.json();
    console.log(json.seo_title);
    return json;
  };
  const useRequest = async () => {
    const res = await request();
    return res;
  };
  const data = useRequest();

  console.log(data);
  return <div>{data.seo_title}</div>;
}

export default Home;
