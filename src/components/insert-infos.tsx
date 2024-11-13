interface inputProps {
    nameLabel: string
    nameInputs: string
}

export default function InsertInfosInput(props: inputProps) {

    return (
        <div className="flex flex-col text-wrap mb-4">
            <label className="text-black text-2xl" htmlFor={props.nameInputs}>{props.nameLabel}</label>
            <input className="bg-gray-300 text-black  max-w-60 rounded-md px-2" type="text" name={ props.nameInputs}/> 

    </div>
    )    
}