/* eslint-disable react/prop-types */
function Wrapper({ children }) {
  return (
    <div style={{ backgroundColor: "pink", minWidth: "400px", padding: "10px", margin: "5px auto" }}>{children}</div>
  );
}

export default Wrapper;
