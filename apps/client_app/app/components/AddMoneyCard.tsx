import { Inputbox } from "./Inputbox";
import { Button2 } from "./Button2";
export function AddMoneyCard() {
  return (
    <div className="border-2 w-full max-w-full pb-16 pt-8 px-6 bg-white rounded-2xl">
      <div className=" text-center font-montserrat font-bold border-b pb-1 border-slate-300 text-3xl">
        Add Money
      </div>
      <div>
        <Inputbox 
          labelClassName="font-afacad font-bold"
          label="Amount"
          placeholder="Add Amount"
        />
      </div>

      <div className="items-start">
        <div className="pt-8">
          <label className="font-afacad font-bold" htmlFor="banks">
            Choose your bank!
          </label>
        </div>
        <div className="w-max ">
          <select name="supported banks" id="banks">
            <option value="Axix bank ">Axis bank </option>
            <option value="kotak bank ">kotak bank </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <Button2 name="Add Money" className="border-2  px-4 py-2 bg-Myblue text-white rounded-lg"/>
      </div>
    </div>
  );
}
