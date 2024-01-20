import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

type SubmitButtonProps = {
  children: React.ReactNode;
};
function SubmitButton({ children }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group h-[3rem] w-[8rem] font-semibold bg-gray-900 text-white rounded-full outline-none transition-all
      flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
      disabled:scale-100 disabled:bg-opacity-65"
    >
      {pending ? (
        <div className="w-5 h-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {children}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}

export default SubmitButton;
