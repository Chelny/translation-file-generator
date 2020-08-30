import React from 'react'

function ToggleSwitch({ id, label, checked = false, round = false, onToggle }) {
  const onChange = (e) => {
    const checked = e.target.checked
    onToggle(checked)
  }

  return (
    <div className="switch-wrapper">
      <label className="switch">
        <input type="checkbox" id={id} defaultChecked={checked} onChange={onChange} />
        <span className={round ? 'slider round' : 'slider'}></span>
      </label>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default ToggleSwitch
