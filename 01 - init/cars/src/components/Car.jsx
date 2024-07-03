/* eslint-disable react/prop-types */
import Wrapper from "./Wrapper";
function Car({ children, color }) {
  let colorInfo = "";
  color ? (colorInfo = color) : (colorInfo = "Néant");
  return (
    children && (
      <Wrapper>
        <p>Marque: {children}</p>
        <p>Couleur: {colorInfo}</p>
      </Wrapper>
    )
  );
}

export default Car;
