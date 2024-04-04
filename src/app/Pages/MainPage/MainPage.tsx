"use client";
import { BillInputComponent } from "@/app/Components/BillInputComponent";
import { GroupInputComponent } from "@/app/Components/GroupInputComponent";
import { CustomTipInputComponent } from "@/app/Components/CustomTipInputComponent";
import React, { useState } from "react";
import { Button } from "flowbite-react";

const MainPage = () => {
  const [billInput, setBillInput] = useState<number>(0);
  const [tipInput, setTipInput] = useState<number>(0);
  const [groupInput, setGroupInput] = useState<number>(0);


  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillInput(parseInt(e.target.value));
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupInput(parseInt(e.target.value));
  };

  const handleTipChange = (tip: number) => {
    setTipInput(tip);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipInput(parseInt(e.target.value));
  };

  const handleReset = () => {
    setBillInput(0);
    setTipInput(0);
    setGroupInput(0);
  };

  const calculateTotal = () => {
    // Perform calculations here
    // Calculate tax amount
    const tipAmount =
      Math.ceil(((billInput * (tipInput / 100)) / groupInput) * 100) / 100;

    // Calculate total per person
    const totalPerPerson = billInput / groupInput + tipAmount;
    return { tipAmount, totalPerPerson };
  };

  const { tipAmount, totalPerPerson } = calculateTotal();

  return (
    <div className="lg:mx-96 font-sans">
      <div className="text-center text-3xl lg:mt-10">Splitter</div>

      {/** Inputs */}
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 rounded-md bg-slate-800 lg:gap-4 lg:mt-32">
        <div className="rounded-md col-span-2 col-end-3 bg-slate-400">
          <div className="ml-10 mt-5 font-bold">Enter Bill</div>
          <div className="rounded-full p-0.5 mx-3 bg-slate-100" />
          <BillInputComponent onChange={handleBillChange} />
          <div className="ml-10 font-bold">Select Tip %</div>
          <div className="rounded-full p-0.5 mx-3 bg-slate-100" />
          <div className="mb-10 mx-10 my-3 grid grid-cols-3 justify-center gap-3">
            <Button
              gradientDuoTone="purpleToBlue"
              color={"blue"}
              className="px-5"
              onClick={() => handleTipChange(5)}
            >
              5%
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              color={"blue"}
              className="px-5"
              onClick={() => handleTipChange(10)}
            >
              10%
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              color={"blue"}
              className="px-5"
              onClick={() => handleTipChange(15)}
            >
              15%
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              color={"blue"}
              className="px-5"
              onClick={() => handleTipChange(20)}
            >
              20%
            </Button>
            <Button
              gradientDuoTone="purpleToBlue"
              color={"blue"}
              className="px-5"
              onClick={() => handleTipChange(25)}
            >
              25%
            </Button>
            <CustomTipInputComponent onChange={handleCustomChange}/>
            
          </div>
          <div className="ml-10 font-bold">Number of People</div>
          <div className="rounded-full p-0.5 mx-3 bg-slate-100" />
          <GroupInputComponent onChange={handleGroupChange} />
        </div>

        {/** Totals */}
        <div className="rounded-md bg-slate-200 text-black col-span-3 lg:col-span-1 mt-2 lg:mt-0">
          <div className="ml-3 my-5 pt-5">
            <div>
              <div className="font-bold">Tip Amount (Per Person)</div>
              <div className="ml-4 pb-16">
                <div className="rounded-full p-0.5 mr-3 bg-slate-950" />
                {tipAmount || tipAmount === 0
                  ? `$${tipAmount.toFixed(2)}`
                  : "$0"}
              </div>
            </div>
            <div>
              <div className="font-bold">Total (Per Person)</div>
              <div className="ml-4 pb-5">
                <div className="rounded-full p-0.5 mr-3 bg-slate-950" />
                {totalPerPerson || totalPerPerson === 0
                  ? `$${totalPerPerson.toFixed(2)}`
                  : "$0"}
              </div>
            </div>
            <div className="flex m-5 justify-end rounded-md">
              <Button
                gradientDuoTone="purpleToBlue"
                color={"blue"}
                className="px-5"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
