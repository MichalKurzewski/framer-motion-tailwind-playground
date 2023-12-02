import PhoneLayout from "../../Organisms/phoneLayout/PhoneLayout";

import React, { useState } from "react";

function SpinnerContainer() {
  return <div>a</div>;
}

const Item15Numbers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PhoneLayout
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isFooterVisible={false}
      timeoutTime={1000000}
    >
      <SpinnerContainer></SpinnerContainer>
    </PhoneLayout>
  );
};

export default Item15Numbers;
