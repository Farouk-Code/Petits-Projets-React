let hidden = false;
const todos = ["Présenter react", "Presenter le JSX", "Créer des composants"];

function App() {
  return (
    <>
      <Title color="green" hidden={hidden}>
        Mon comoposant
      </Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, minus rerum, ducimus quidem atque, sed
        dolore sequi rem consequatur doloremque labore. Ipsum ipsa veritatis distinctio beatae, ullam nesciunt optio
        vero.
      </p>

      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Title({ color, children, hidden }) {
  if (hidden) {
    return null;
  }

  return <h1 style={{ color: color }}>{children}</h1>;
}

export default App;
