"use client";

import { Button } from "@/components/ui/button";
import sampleProtectedAction from "@/server/sample-protected-action";
import React from "react";

const SampleProtectedActionButton = () => {
  const handleAction = async () => {
    const result = await sampleProtectedAction();

    console.log(result);
  };

  return <Button onClick={handleAction}>Sample Protected Action Button</Button>;
};

export default SampleProtectedActionButton;
