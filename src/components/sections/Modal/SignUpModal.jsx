import Close from "../../icons/Close";
import Checkmark from "../../icons/Checkmark";
import { useState, react } from "react";
import { useModalContext } from "../../../contexts/ModalContext";

const initialState = {
    email: "",
    password: "",
}
export default function SignUpModal() {
    const { setActiveModal } = useModalContext();
    const [checked, setChecked] = useState(false);
    const [inputs, setInputs] = useState(initialState);

    function handleInputs(e) {
        setInputs((prevInupts) => {
            return {
                ...prevInputs,
                [e.target.name]: e.target.value,
            };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (checked) {
            console.log(inputs);
            setInputs(initialState);
            setActiveModal("");
        }
    }
    return (
        <section className="grid max-w-3xl grid-cols-2">
            <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center">
                <h4 className="text-primary-50 text-4xl/12 font-bold tracking-tight">
                    Lets Get You Signed Up
                </h4>
                <p className="text-primary-100 text-lg/8">
                    No charges, no fees. Get note taking in minutes!
                </p>
            </div>
            <div className="bg-primary-1400 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10">
                <button
                    className="border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
                    onClick={() => setActiveModal("")}
                >
                    <Close
                        className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties"
                        width={2}
                    />
                </button>
                <div className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight">
                    <label>
                        Email
                        <input
                            className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20"
                            name="email" type="email" placeholder="abc@gmail.com"
                            onChange={handleInputs}
                            value={inputs.email}
                        />
                    </label>
                    <label>
                        Password
                        <input
                            className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20"
                            name="password" type="password" placeholder="****"
                            onChange={handleInputs}
                            value={inputs.password}
                        />
                    </label>
                </div>
                <div>
                    <div
                        className="m-auto mb-4 w-fit cursor-pointer gap-x-2"
                        onClick={() => setChecked((currVal) => !currVal)}>
                        <button
                            className={`border-primary-100 transition-properties mr-2 inline-flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm border-2 ${checked && "bg-primary-100"}`}
                        >
                            <Checkmark className="stroke-primary-1500" />
                        </button>
                        <p className="text-primary-100 inline cursor-pointer text-sm">
                            I agree to all terms
                        </p>
                    </div>
                    <button
                        className="bg-primary-500 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8"
                        onClick={handleSubmit}
                    >Get Started</button>
                </div>

            </div>
        </section>
    )
}
