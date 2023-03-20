import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";

//https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook

export default function Toggle() {
  const router = useRouter();
  const page = router.asPath;
  const [enabled, setEnabled] = useState(false);
  function updateStatus() {
    setEnabled(!enabled);
  }
  return (
    <>
      <Switch
        onClick={updateStatus}
        className={`flex items-center gap-2 rounded-full ${
          enabled ? "bg-emerald-500" : "bg-gray-900"
        } px-3 py-3`}
        checked={enabled}
      >
        <div
          className={`${
            enabled ? "bg-emerald-400" : "bg-gray-600"
          } inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Toggle Completed</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </div>
        <p className={`font-medium text-white`}>
          {enabled ? "Well Done!" : "Completed?"}
        </p>
      </Switch>
      <div
        className={`h-20 border border-dashed transition-colors duration-300 ease-in-out ${
          enabled ? "border-emerald-500" : "border-transparent"
        }`}
      ></div>
    </>
  );
}
