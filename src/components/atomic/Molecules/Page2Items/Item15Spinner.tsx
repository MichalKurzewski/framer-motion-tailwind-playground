import PhoneLayout from "../../Organisms/phoneLayout/PhoneLayout";

import { useState } from "react";

function SpinnerContainer() {
  return <div>a</div>;
}

const Item15Spinner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PhoneLayout isOpen={isOpen} setIsOpen={setIsOpen} isFooterVisible={false}>
      <SpinnerContainer></SpinnerContainer>
    </PhoneLayout>
  );
};

export default Item15Spinner;
