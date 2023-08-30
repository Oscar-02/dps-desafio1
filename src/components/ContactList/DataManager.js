import React from "react";
import contactFile from "../../data/contactList.json";

function DataCall (){
    return JSON.parse(contactFile);
}