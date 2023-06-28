import * as React from "react";
import { useState, useEffect } from "react";
export default function AddPatient() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-tr from-gray-400 to-white place-content-start items-center flex flex-col pl-8 pt-8">
        <div className="bg-white rounded-lg h-4/5 w-3/6 pl-8 pt-8">
          <div className="border-b-black w-11/12 border border-transparent font-bold">
            <h1 className="">Add Patient</h1>
          </div>
          <div className="shrink w-128 flex flex-col p-1">
            <div className="w-72 mt-2">
              <label htmlFor="PatientName" className="text-gray-600">
                Patient Name
              </label>
            </div>
            <div className="flex flex-col mt-3">
              <div className="w-72 mr-2">
                <input
                  placeholder="Patient First Name"
                  className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2 mb-2 capitalize"
                  name="PatientFirstName"
                ></input>
              </div>
              <div className="w-72">
                <input
                  placeholder="Patient Last Name"
                  className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2 capitalize"
                  name="PatientLastName"
                ></input>
              </div>
            </div>
          </div>
          <div className="shrink w-96 flex flex-col p-1">
            <div className="w-72 mt-2">
              <label htmlFor="PatientAddress" className="text-gray-600">
                Patient Address
              </label>
            </div>
            <div className="w-72 mt-3">
              <input
                placeholder="Patient Address Line 1"
                className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2 capitalize"
                name="PatientAddress"
              ></input>
            </div>
            <div className="w-72 mt-2">
              <input
                placeholder="Patient Address Line 2"
                className="border focus:border-blue-500 w-72 object-fill rounded-lg bg-gray-200 h-8 pl-2 capitalize"
                name="PatientAddress"
              ></input>
            </div>
            <div className="w-72 mt-2">
              <input
                placeholder="Patient ZIP Code"
                className="border focus:border-blue-500 w-36 object-fill rounded-lg bg-gray-200 h-8 pl-2"
                name="PatientAddress"
              ></input>
            </div>
          </div>
          <button className="rounded-lg transition duration:300 p-2 mt-2 hover:text-white hover:bg-blue-500 w-32 border border-blue-500 ">
            Add Patient
          </button>
        </div>
      </div>
    </>
  );
}