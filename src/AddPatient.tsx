import * as React from "react";
import { useState, useEffect } from "react";
export default function AddPatient() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tr from-gray-400 to-white place-content-start items-center flex flex-col pl-8 pt-8">
        <div className="bg-white rounded-lg h-4/5 w-3/6 pl-8 pt-8">
        <div className="shrink w-96 flex flex-col p-1">
          <div className="w-72">
            <label htmlFor="PatientName" className="text-gray-600">Patient Name</label>
          </div>
          <div className="w-72">
            <input
              placeholder="Patient Name"
              className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2"
              name="PatientName"
            ></input>
          </div>
        </div>
        <div className="shrink w-96 flex flex-col p-1">
          <div className="w-72">
            <label htmlFor="PatientAddress" className="text-gray-600">Patient Address</label>
          </div>
          <div className="w-72">
            <input
            placeholder="Patient Address"
              className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2"
              name="PatientAddress"
            ></input>
          </div>
        </div>
        <button className="rounded-lg transition duration:300 p-2 mt-2  hover:bg-blue-300 w-32">Add Patient</button>
        </div>
        
      </div>
    </>
  );
}
