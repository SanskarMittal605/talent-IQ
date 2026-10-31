import { Code2Icon, PlusIcon, ChevronDownIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { LoaderIcon } from "react-hot-toast";
import { useState } from "react";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl overflow-visible">
        <h3 className="font-bold text-2xl mb-6">Create New Session</h3>

        <div className="space-y-8">
          {/* PROBLEM SELECTION */}
          <div className="space-y-2">
            <label className="label">
              <span className="label-text font-semibold">Select Problem</span>
              <span className="label-text-alt text-error">*</span>
            </label>

            {/* CUSTOM SCROLLABLE DROPDOWN */}
            <div className="relative">
              <button
                type="button"
                className="select w-full flex items-center justify-between font-normal"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <span className="truncate">
                  {roomConfig.problem
                    ? `${roomConfig.problem}(${roomConfig.difficulty})`
                    : "Choosing a coding problem..."}
                </span>

                <ChevronDownIcon className="size-4 shrink-0" />
              </button>

              {isDropdownOpen && (
                <ul className="absolute left-0 right-0 top-full mt-2 z-[100] max-h-60 overflow-y-auto rounded-box border border-base-300 bg-base-100 p-2 shadow-xl">
                  <li>
                    <button
                      type="button"
                      className="w-full rounded-lg px-4 py-2 text-left text-base-content/60"
                      disabled
                    >
                      Choosing a coding problem...
                    </button>
                  </li>

                  {problems.map((problem) => (
                    <li key={problem.id}>
                      <button
                        type="button"
                        className={`w-full rounded-lg px-4 py-2 text-left transition-colors hover:bg-base-200 ${
                          roomConfig.problem === problem.title
                            ? "bg-base-200 font-semibold"
                            : ""
                        }`}
                        onClick={() => {
                          setRoomConfig({
                            difficulty: problem.difficulty,
                            problem: problem.title,
                          });
                          setIsDropdownOpen(false);
                        }}
                      >
                        {problem.title}({problem.difficulty})
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* ROOM SUMMARY */}
          {roomConfig.problem && (
            <div className="alert alert-success">
              <Code2Icon className="size-5" />
              <div>
                <p className="font-semibold">Room Summary:</p>
                <p>
                  Problem:{" "}
                  <span className="font-medium">{roomConfig.problem}</span>
                </p>
                <p>
                  Max Participants:{" "}
                  <span className="font-medium">2 (1-on-1 session)</span>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary gap-2"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-5 animate-spin" />
            ) : (
              <PlusIcon className="size-5" />
            )}

            {isCreating ? "Creating..." : "Create"}
          </button>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}

export default CreateSessionModal;
