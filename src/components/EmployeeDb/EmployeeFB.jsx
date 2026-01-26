import { useState, useRef, useEffect } from "react";
import { Plus, ArrowUp, ChevronDown } from "lucide-react";

const EmployeeFeedback = () => {
  const [report, setReport] = useState("");
  const textareaRef = useRef(null);

  // Auto-resize logic
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to calculate correctly
      textarea.style.height = "auto";
      // Set height based on scroll height (content size)
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [report]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 p-2 px-10 bg-transparent">
      <form
        className="
          max-w-4xl mx-auto 
          bg-white dark:bg-[#1a1a1a] 
          border border-gray-200 dark:border-[#2e2e2e] 
          rounded-2xl shadow-2xl p-3
          transition-all duration-200
        "
      >
        {/* Top Row: Meta Inputs */}
        <div className="flex flex-wrap items-center gap-2 mb-2 px-1">
          <input
            type="text"
            placeholder="Employee ID"
            className="bg-gray-100 dark:bg-[#2b2b2b] text-xs py-1 px-3 rounded-full outline-none text-gray-700 dark:text-gray-300 w-32 border border-transparent focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
          <input
            type="text"
            placeholder="Task Title"
            className="bg-gray-100 dark:bg-[#2b2b2b] text-xs py-1 px-3 rounded-full outline-none text-gray-700 dark:text-gray-300 flex-1 min-w-30 border border-transparent focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
          />
          <div className="relative flex items-center">
            <select className="appearance-none bg-gray-100 dark:bg-[#2b2b2b] text-xs py-1 pl-3 pr-8 rounded-full outline-none text-gray-700 dark:text-gray-300 cursor-pointer border border-transparent focus:border-gray-400 dark:focus:border-gray-600 transition-colors">
              <option value="">Work Progress</option>
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Blocked</option>
            </select>
            <ChevronDown className="absolute right-2.5 pointer-events-none text-gray-500" size={14} />
          </div>
        </div>

        {/* Middle: Auto-expanding Textarea */}
        <textarea
          ref={textareaRef}
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Write your work progress report..."
          rows={1}
          className="
            w-full bg-transparent 
            text-gray-800 dark:text-gray-200 
            placeholder-gray-500 
            outline-none resize-none 
            text-sm px-2 py-1
            max-h-50 overflow-y-auto
            leading-relaxed
          "
        />

        {/* Bottom Bar: Actions & Status */}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-[#2e2e2e]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Plus size={16} strokeWidth={2.5} />
            </button>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-tight">
               Feedback + Progress Channel 
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-[11px] text-gray-500 dark:text-gray-400 font-medium">
              <span>{report.length > 0 ?  `Typing... (${report.length} chars) ` : "Ready"}</span>
              <span className="mx-2 text-gray-300 dark:text-gray-700">|</span>
            </div>
            <button
              type="submit"
              disabled={!report.trim()}
              className={`
                p-1.5 rounded-full transition-all active:scale-90
                ${report.trim() 
                  ? "bg-indigo-600 dark:bg-white text-white dark:text-black opacity-100" 
                  : "bg-gray-200 dark:bg-[#2b2b2b] text-gray-400 dark:text-gray-600 cursor-not-allowed"}
              `}
            >
              <ArrowUp size={18} strokeWidth={3} />
            </button>
          </div>
        </div>
      </form>

    </div>
  );
};

export default EmployeeFeedback;