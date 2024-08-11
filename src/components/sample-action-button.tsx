"use client";

import { Button } from "@/components/ui/button";
import sampleAction from "@/server/sample-action";
import React from "react";

const SampleActionButton = () => {
  const handleAction = async () => {
    const result = await sampleAction();

    console.log(result);
  };

  return <Button onClick={handleAction}>Sample Action Button</Button>;
};

export default SampleActionButton;
