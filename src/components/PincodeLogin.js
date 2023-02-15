import React from "react";
import PincodeInput from "@laurent-debug/react-pincode-input/dist/PincodeInput";

function PincodeLogin() {
  
  const onCompleted = (pincode) => {
    console.log(pincode);
  };
  return (
    <>
      <h5 className="text-center pt-2">Saisir votre code secret</h5>
      <PincodeInput digitsNumber = {6} pincodeInputClass="text-danger" hiddenDigits={false}
        onCompleted={onCompleted}
      />
    </>
  );
}

export default PincodeLogin;