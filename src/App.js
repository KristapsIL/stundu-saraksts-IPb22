import Diena from './Diena';

function App() {
  const pirmdienasStundas = [
    "Sports",
    "Dabaszinības",
    "Vēsture",
    "Krievu valoda"
]
const otrdienasStundas = [
  "Sports",
  "Dabaszinības",
  "Vēsture",
  "Krievu valoda"
]
  return( 
  <>
  <div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
  </div>
  </>
  );
}

export default App;
