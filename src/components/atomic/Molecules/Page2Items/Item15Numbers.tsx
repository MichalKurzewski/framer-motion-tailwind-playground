import ProgressBarIndicator from "../../Atoms/ProgressBarIndicator";
import PhoneLayout from "../../Organisms/phoneLayout/PhoneLayout";

import React, { useState } from "react";
const Item15ProgressBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PhoneLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isFooterVisible={false}
      timeoutTime={1000000}
    >
      <ProgressBarIndicator />
    </PhoneLayout>
  );
};

export default Item15ProgressBar;
