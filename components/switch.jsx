import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";

const UPDATE_COMPLETION_STATUS_MUTATION = gql`
  mutation UpdateCompletionStatus(
    $user_id: uuid
    $local_id: Int
    $completion_status: Int
  ) {
    update_user_lesson_status(
      where: { local_lesson_id: { _eq: $local_id }, user_id: { _eq: $user_id } }
      _set: { completion_status: $completion_status }
    ) {
      returning {
        completion_status
      }
    }
  }
`;

export default function Toggle({ isComplete, user_id, local_id }) {
  const [updateCompletionStatusMutation] = useMutation(
    UPDATE_COMPLETION_STATUS_MUTATION
  );

  const [enabled, setEnabled] = useState(isComplete);

  // todo: useState provides previous value -> tried passing the setState call to useEffect but it starts an infinite render. Functional call inside setState also doesn't solve the issue
  const updateStatus = async () => {
    setEnabled((enabled) => !enabled);
    try {
      await updateCompletionStatusMutation({
        variables: { local_id, completion_status: +enabled, user_id },
      });
    } catch (error) {}
  };

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
