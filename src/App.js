import Diena from './Diena';
import {useEffect, useState} from "react";

function App() {

  const [stundas, setStundas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getStundas(){
      const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
      const data = await response.json();
      console.log(data["IPb22"]);
      const cleansedData = [
        {
          diena:"Pirmdiena",
          stundas: data.IPb22[0].classes,
        },
        {
          diena:"Otrdiena",
          stundas: data.IPb22[1].classes,
        },
        {
          diena:"Tresdiena",
          stundas: data.IPb22[2].classes,
        },
        {
          diena:"Ceturdiena",
          stundas: data.IPb22[3].classes,
        },
        {
          diena:"Piekdiena",
          stundas: data.IPb22[4].classes,
        },
      ]
      setStundas(cleansedData);
      setLoading(false);
    }
    getStundas();
  },[])

  const visasStundas = [
    {diena:"Pirmdiena",
    stundas:[
    "Sports",
    "Dabaszinības",
    "Vēsture",
    "Krievu valoda"
    ]},
    {diena:"Otrdiena",
      stundas :[
      "Math",
      "Dabaszinības",
      "dator sistemas",
    ]},
    {diena:"Tresdiena",
      stundas :[
      "Lat",
      "Prog",
      "Vest",
      "Sport"
    ]},
    {diena:"Ceturtdiena",
      stundas :[
      "Math",
      "Dabaszinības",
      "aaaa",
      "Sleepy"
    ]},
    {diena:"Piekdiena",
      stundas :[
      "Math",
      "Dabaszinības",
      "dator sistemas",
    ]},
  ]


  const dienaJSX = stundas.map((diena, indekss)=>{
    return <Diena diena={indekss} diena={diena.diena} stundas={diena.stundas}/>
  })


  return( 
  <>
  <div>
    {loading ? <p>Loading...</p>:dienaJSX }
  </div>
  </>
  );
}

export default App;
