"use client";

import sampleProtectedAction from "@/server/sample-protected-action";
import React from "react";

const SampleProtectedActionButton = () => {
  const handleAction = async () => {
    const result = await sampleProtectedAction();

    console.log(result);
  };

  return <button onClick={handleAction}>Sample Protected Action Button</button>;
};

export default SampleProtectedActionButton;
