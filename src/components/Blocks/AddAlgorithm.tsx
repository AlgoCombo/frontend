import algorithms from "@/constants/algorithms";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";

function AddAlgorithm() {
  const modal2 = useRef<any>(null);

  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      {selected ? (
        <div
          className="h-40 cursor-pointer rounded-xl text-black border border-zinc-300 transition flex flex-col justify-between"
          onClick={() => modal2.current!.showModal()}
        >
          <div className="p-5 rounded-t-xl flex items-center justify-between text-black">
            <h1>{selected.name}</h1>
            <h1 className="text-black tracking-widest text-xs">ALGORITHM</h1>
          </div>
          <div className="p-5 text-black">
            <p className="text-xs">{selected.description}</p>
          </div>
        </div>
      ) : (
        <div
          className="h-40 cursor-pointer rounded-xl text-black border border-zinc-300 transition flex flex-col justify-between"
          onClick={() => modal2.current!.showModal()}
        >
          <div className="flex justify-end p-5 mt-auto">
            <h2 className="text-3xl font-bold">Select Algorithm</h2>
          </div>
        </div>
      )}

      <dialog ref={modal2} id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black">
          <h1 className="text-xl font-black">Select an Algorithm</h1>
          <div className="mt-4 border rounded-xl p-2 overflow-y-auto max-h-[20rem] ">
            {algorithms.map((algo) => (
              <div
                key={algo.name}
                className="p-3 cursor-pointer transition flex items-center justify-between rounded-lg"
                onClick={() => {
                  setSelected(algo);
                  modal2.current.close();
                }}
              >
                <div className="">
                  <h1 className="font-bold">{algo.name}</h1>
                  <p className="text-xs">{algo.description}</p>
                </div>
                {selected == algo && <CheckIcon className="w-5 h-5" />}
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddAlgorithm;
