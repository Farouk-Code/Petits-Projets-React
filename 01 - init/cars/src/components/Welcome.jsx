/* eslint-disable react/no-unescaped-entities */
const Welcome = () => {
  const helloFirst = () => {
    console.log("Bonjour");
  };

  const helloSecond = (arg) => {
    console.log(arg);
  };
  return (
    <div>
      <button onClick={helloFirst}>Appel d'une fonction</button>
      <button onClick={() => helloSecond("Bonsoir")}>Appel d'une fonction avec un argument</button>
      <button onClick={() => console.log("Bonne nuit")}>consol log sur btn</button>
    </div>
  );
};

export default Welcome;
