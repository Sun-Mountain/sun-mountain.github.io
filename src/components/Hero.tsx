'use client';

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { SHOW_TRANSITIONS } from "@/store/transitionSlice";

import SwitchComponent from "./SwitchComponent";

const Hero = () => {
  const [transitions, setTransitions] = useState(true);
  const welcome = "Welcome".split('');
  const dispatch = useAppDispatch();
  const showTransitions = useAppSelector(state => state.SHOW_TRANSITIONS.transitionState);

  const handleTransitionToggle = () => {
    setTransitions(!transitions);
    dispatch(SHOW_TRANSITIONS(!transitions));
  }

  return (
    <header>
      <SwitchComponent
        isChecked={transitions}
        handleToggle={handleTransitionToggle}
        labelText="Transitions"
      />
      <h1>
        {welcome.map((letter, index) => (
          <span key={index} className={`${showTransitions ? 'transition' : ''}`}>{letter}</span>
        ))}
      </h1>
    </header>
  )
}

export default Hero