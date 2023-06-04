/* eslint-disable no-unused-vars */
import { useState, useEffect, } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Pocetna = () => {
  const {data, isPanding , error} = useFetch('http://localhost:8000/blogs');

 return (
    <div className="pocetna">
      {isPanding && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && (<BlogList blogs={data} title="Svi naslovi" />)}
    </div>
  );
};

export default Pocetna;

//fetch(url).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err));
