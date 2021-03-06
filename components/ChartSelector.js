import React from "react";

export default function ChartSelector({ value, setValue }) {
  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div className="sliderWrapper">
      <p className={`sliderText ${value ? "disabled" : null}`}>AMD</p>
      <label className="switch" htmlFor='selector'>
        <input type="checkbox" checked={value} onChange={handleChange} id='selector'/>
        <span className="slider round"></span>
      </label>
      <p className={`sliderText ${value ? null : "disabled"}`}>NVIDIA</p>
    </div>
  );
}
