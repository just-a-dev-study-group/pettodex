"use client";

import sampleAction from "@/server/sample-action";
import React from "react";

const SampleActionButton = () => {
  const handleAction = async () => {
    const result = await sampleAction();

    console.log(result);
  };

  return <button onClick={handleAction}>Sample Action Button</button>;
};

export default SampleActionButton;
