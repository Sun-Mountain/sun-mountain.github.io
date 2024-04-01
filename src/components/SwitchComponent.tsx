'use client';

import { useState } from "react";

interface SwitchComponentProps {
  isChecked: boolean,
  handleToggle?: () => void
}

const SwitchComponent = ({
  isChecked = false,
  handleToggle
}: SwitchComponentProps) => {
  const [isToggled, setIsToggled] = useState(isChecked)

  const onClick = () => {
    setIsToggled(!isToggled);
    handleToggle && handleToggle();
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onClick={onClick} />
      <span className="slider round"></span>
    </label>
  )
}

export default SwitchComponent