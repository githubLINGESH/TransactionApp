import React from "react";
import LetterIconComponent from "./LetterIconComponent";
import ButtonComponent from "./ButtonComponent";
import { useNavigate } from "react-router-dom";

const UserRender = ({ firstname, lastname, id }) => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="">
          <LetterIconComponent firstname={firstname} />
        </div>
        <div className="pt-3.5 font-semibold">
          <span>
            {firstname} {lastname}
          </span>
        </div>
      </div>
      <div className="  ">
        <ButtonComponent title={"Send money"} onClick = {()=>{
          navigate(`/send?firstname=${firstname}&lastname=${lastname}&userId=${id}`)
        }}/>
      </div>
    </div>
  );
};

export default UserRender;
