import LoginButton from "@/components/login-button";
import SampleActionButton from "@/components/sample-action-button";
import SampleProtectedActionButton from "@/components/sample-protected-action-button";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>login page</div>

      <div>
        <LoginButton />
      </div>

      <div>
        <SampleActionButton />
      </div>

      <div>
        <SampleProtectedActionButton />
      </div>
    </div>
  );
};

export default Page;
