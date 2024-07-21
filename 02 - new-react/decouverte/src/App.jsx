import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstName: "john",
    lastName: "Doe",
    age: 20,
  });

  const [count, setCount] = useState(0);

  const increaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
    countIncrement();
  };

  const resetAge = () => {
    setPerson({ ...person, age: 20 });
    setCount(0);
  };

  const countIncrement = () => setCount(count + 1);

  return (
    <>
      <p>
        {person.firstName} : {person.age}
      </p>
      <button onClick={increaseAge}>Augmenter age</button>
      <button onClick={resetAge}>Réinitialiser age</button>
      <p>Compteur incrémentation : {count}</p>
    </>
  );
}

export default App;
