import { useState } from "react";

function App() {
    const auth = {
        username: "admin",
        password: "admin",
    };
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
        // console.log(inputValues);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(errors);
        if (
            inputValues.username !== auth.username &&
            inputValues.password !== auth.password
        ) {
            setErrors({ ...errors, username: "Password doesnt match" });
        }
    };
    return (
        <main className="h-screen bg-green-200 flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className={`${
                            errors.username !== "" ? "border-red-500" : ""
                        } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`}
                        id="username"
                        name="username"
                        type="text"
                        placeholder="michael_alexander"
                        value={inputValues.username}
                        onChange={handleChange}
                    />
                    <p
                        className={`${
                            errors.username !== "" ? "block" : ""
                        }hidden mt-3 text-red-500 text-xs italic`}
                    >
                        {errors.username}
                    </p>
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                    />
                    {/* <p className="mt-3 text-red-500 text-xs italic">
                        Please choose a password.
                    </p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
            </form>
        </main>
    );
}

export default App;
