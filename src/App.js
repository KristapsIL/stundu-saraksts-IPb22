import Diena from './Diena';

function App() {
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
  const dienaJSX = visasStundas.map((diena, indekss)=>{
    return <Diena diena={indekss} diena={diena.diena} stundas={diena.stundas}/>
  })


  return( 
  <>
  <div>
    {dienaJSX}
  </div>
  </>
  );
}

export default App;
