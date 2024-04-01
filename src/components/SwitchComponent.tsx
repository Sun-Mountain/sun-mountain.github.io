'use client';

import { useState } from "react";

interface SwitchComponentProps {
  isChecked: boolean,
  handleToggle?: () => void,
  labelText?: string
}

const SwitchComponent = ({
  isChecked = false,
  handleToggle,
  labelText
}: SwitchComponentProps) => {
  const [isToggled, setIsToggled] = useState(isChecked)

  const onClick = () => {
    setIsToggled(!isToggled);
    handleToggle && handleToggle();
  }

  return (
    <label className="switch-group">
      {labelText && <div>{labelText}</div>}
      <div className="switch">
        <input type="checkbox" checked={isToggled} onClick={onClick} />
        <span className="slider round"></span>
      </div>
    </label>
  )
}

export default SwitchComponent