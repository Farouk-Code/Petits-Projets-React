/* eslint-disable react/prop-types */
const Toto = ({ name, theState, totosResponse }) => {
  return (
    <div>
      <h2>{name}</h2>
      {theState.momMessage === null ? (
        <button disabled>Réponse</button>
      ) : (
        <button onClick={totosResponse}>Réponse</button>
      )}
      <p>{theState.totosMessage}</p>
    </div>
  );
};

export default Toto;
