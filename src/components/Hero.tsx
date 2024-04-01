'use client';

import { useState } from "react";

import SwitchComponent from "./SwitchComponent";
import { showTransition } from "@/store/transitionSlice";
import { useAppDispatch } from "@/store/store";

const Hero = () => {
  const [transitions, setTransitions] = useState(true);
  const welcome = "Welcome".split('');
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    setTransitions(!transitions);
    dispatch(showTransition(!transitions));
  }

  return (
    <header>
      <SwitchComponent isChecked={transitions} handleToggle={handleToggle} />
      <h1>
        {welcome.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </header>
  )
}

export default Hero