import React from "react";
import "./../Menu.scss";
import { useState } from "react";
import {House, HouseFill, Person, PersonFill, Envelope, EnvelopeFill, Gear, GearFill, BoxArrowLeft} from "react-bootstrap-icons"
import {School, SchoolOutlined} from "@mui/icons-material"

const  Menu_Items = () => {


    const [clicked, setClicked] = useState({
        house: false,
        school: false,
    });

  return (
    <div className="MenuItems">
        <div className="brand">F.</div>

        <div className="items">

            {/* {
                clicked.house ? <HouseFill/> : <House onClick={() => {
                    setClicked(perviouseState => {
                        return {...perviouseState, house: true};
                    })}} />
            }
            {
                clicked.school ? <School/> : <SchoolOutlined onClick={() => { setClicked(perviouseState => {
                        return {...perviouseState, school: true};
                    })}} />
            } */}

            <House/>
            <SchoolOutlined/>
            <Person/>
            <Envelope/>
            <Gear/>
        </div>

        <div className="leave">
            <BoxArrowLeft/>
        </div>

    </div>
  );
};

export default Menu_Items;
