import React from "react";

export default function ChartSelector({ value, setValue }) {
  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div className="sliderWrapper">
      <p className="sliderText">AMD</p>
      <label className="switch">
        <input type="checkbox" checked={value} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
      <p className="sliderText">NVIDIA</p>
    </div>
  );
}
