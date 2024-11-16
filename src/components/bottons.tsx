import { ComponentProps } from "react";

interface RoundedNextButtonProps extends ComponentProps<"button"> {}

export default function RoundedNextButton(props: RoundedNextButtonProps) {
    return (
        <button {...props} className="w-10 h-10 text-3xl rounded-full text-white bg-orange-500">&#10140; </button>
    )    
}


