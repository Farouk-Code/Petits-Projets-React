/* eslint-disable react/prop-types */
export function Range({ min, max, onChange, value }) {
  return (
    <div>
      <span>Prix : {value}</span>
      <input type="range" className="form-range" min={min} max={max} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
