function Car({ children, color }) {
  return children ? (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      <p>Marque: {children}</p>
      {color ? <p>Couleur: {color}</p> : <p>Couleur: Néant</p>}
    </div>
  ) : (
    <div
      style={{
        backgroundColor: "pink",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    >
      <p>Pas de data !</p>
    </div>
  );
}

export default Car;
