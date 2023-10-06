import Diena from './Diena';

function App() {
  const visasStundas = {
    Pirmdiena:[
      "Sports",
    "Dabaszinības",
    "Vēsture",
    "Krievu valoda"
    ],
    Otrdiena:[
      "Math",
      "Dabaszinības",
      "dator sistemas",
    ]
  }
  return( 
  <>
  <div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={otrdienasStundas}/>
  </div>
  </>
  );
}

export default App;
