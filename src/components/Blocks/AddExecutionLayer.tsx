import { getIconUrl } from "@/utils";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

function AddExecutionLayer() {
  const modal2 = useRef<any>(null);

  const [selected, setSelected] = useState<any>(null);

  const { theme } = useTheme();

  const layers = [
    {
      name: "1Inch",
      icon: "cow",
    },
  ];

  return (
    <>
      {selected ? (
        <div
          className="h-30 cursor-pointer rounded-xl border border-zinc-300 transition flex flex-col justify-between theme-colors"
          onClick={() => modal2.current!.showModal()}
        >
          <div className="p-5 rounded-t-xl flex items-center justify-end">
            {/* <h1>{selected.name}</h1> */}
            <h1 className="    tracking-widest text-xs">EXECUTION</h1>
          </div>
          <div className="flex justify-end p-5">
            <p className="text-3xl">{selected.name}</p>
          </div>
        </div>
      ) : (
        <div
          className="h-30 cursor-pointer rounded-xl border border-zinc-300 transition flex flex-col justify-between"
          onClick={() => modal2.current!.showModal()}
        >
          <div className="flex justify-end p-5 mt-auto">
            <h2 className="text-2xl font-bold">Select Execution Layer</h2>
          </div>
        </div>
      )}

      <dialog ref={modal2} id="my_modal_2" className="modal">
        <div
          className={`modal-box ${theme === "dark" ? "bg-white" : "bg-black"}`}
        >
          <h1 className="text-xl font-black">Select an Execution Layer</h1>
          <div className="mt-4 border rounded-xl p-2 overflow-y-auto max-h-[20rem]">
            {layers.map((layer) => (
              <div
                key={layer.name}
                className="p-3 cursor-pointer transition flex items-center justify-between rounded-lg"
                onClick={() => {
                  setSelected(layer);
                  modal2.current.close();
                }}
              >
                <div className="flex items-center space-x-2">
                  {/* <img src={getIconUrl(layer.icon)  } className="w-5 h-5" /> */}
                  <p className="underline">1</p>
                  <h1 className="font-bold">{layer.name}</h1>
                </div>
                {selected == layer && <CheckIcon className="w-5 h-5" />}
              </div>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddExecutionLayer;
