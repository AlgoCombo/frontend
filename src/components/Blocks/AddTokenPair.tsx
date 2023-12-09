import tokens from "@/constants/tokens";
import { getIconUrl } from "@/utils";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

function AddTokenPair() {
  const modal1 = useRef<any>(null);

  const [selectedPair, setSelectedPair] = useState<any>(null);

  return (
    <>
      {selectedPair ? (
        <div
          className="h-40 bg-primary-500 hover:shadow-md hover:shadow-primary-700 cursor-pointer rounded-xl text-white transition flex flex-col justify-between"
          onClick={() => modal1.current!.showModal()}
        >
          <div className="flex items-center justify-between p-5 bg-primary-800 rounded-t-xl">
            <div className="flex items-center space-x-1">
              <img src={getIconUrl(selectedPair.token0)} className="w-5 h-5" />
              <span>{selectedPair.token0} -</span>
              <img src={getIconUrl(selectedPair.token1)} className="w-5 h-5" />
              <span>{selectedPair.token1}</span>
            </div>
            <h1 className="text-primary-400 tracking-widest text-xs">PAIR</h1>
          </div>
          <div className="flex justify-end p-5">
            <h2 className="text-4xl font-bold">123.43</h2>
          </div>
        </div>
      ) : (
        <div
          className="h-40 bg-primary-500 hover:shadow-md hover:shadow-primary-700 cursor-pointer rounded-xl text-white transition flex flex-col justify-between"
          onClick={() => modal1.current!.showModal()}
        >
          <div className="flex justify-end p-5 mt-auto">
            <h2 className="text-3xl font-bold">Select Pair</h2>
          </div>
        </div>
        // <div
        //   className="text-primary-100/80 border border-primary-400/60 shadow-md hover:shadow-primary-400 h-40 rounded-xl flex flex-col items-center justify-center space-y-3 cursor-pointer hover:bg-primary-400/10 transition"
        // >
        //   <PlusIcon className="w-6 h-6" />
        //   <h1>Add Token Pair</h1>
        // </div>
      )}

      <dialog ref={modal1} id="my_modal_1" className="modal">
        <div className="modal-box">
          <h1 className="text-xl font-black">Select a Token Pair</h1>
          <div className="mt-4 border rounded-xl p-2 overflow-y-auto max-h-[20rem] ">
            {tokens.map((token) => (
              <div
                key={token.token0 + token.token1}
                className="hover:bg-gray-200 p-3 cursor-pointer transition flex items-center justify-between rounded-lg"
                onClick={() => {
                  setSelectedPair(token);
                  modal1.current.close();
                }}
              >
                <div className="flex items-center space-x-1">
                  <img src={getIconUrl(token.token0)} className="w-5 h-5" />
                  <span>{token.token0} -</span>
                  <img src={getIconUrl(token.token1)} className="w-5 h-5" />
                  <span>{token.token1}</span>
                </div>
                {selectedPair == token && <CheckIcon className="w-5 h-5" />}
              </div>
            ))}
          </div>

          {/* <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div> */}
        </div>
      </dialog>
    </>
  );
}

export default AddTokenPair;
