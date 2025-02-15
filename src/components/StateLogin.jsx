import { useState } from "react";

export default function StateLogin() {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [enteredPassword, setEnteredPassword] = useState("");

    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
    });

    const emailIsInvalid = enteredValues.email !== "" && !enteredValues.email.includes("@");

    function handleSubmit(event) {
        event.preventDefault();
        console.log("SUBMITTED");
        console.log(enteredValues);

        // Reset
        // setEnteredValues({
        //     email: "",
        //     password: "",
        // });
    }

    function handleInputChange(identifier, event) {
        setEnteredValues((prevValues) => {
            return {
                ...prevValues,
                [identifier]: event.target.value,
            };
        });
    }

    function handleEmailChange(event) {
        setEnteredEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setEnteredPassword(event.target.value);
    }

    return (
        <form onClick={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(event) => handleInputChange("email", event)}
                        value={enteredValues.email}
                    />
                    <div className="control-error">{emailIsInvalid && "Please enter a valid email."}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) => handleInputChange("password", event)}
                        value={enteredValues.password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
