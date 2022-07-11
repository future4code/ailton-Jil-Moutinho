import React from "react";
import { BASE_URL } from "../../constants/constants";

function ApplicationPage (params) {
    
    return (
        <div>
            <div>
                <input>Choose the travel</input>
                <input>Name</input>
                <input>Age</input>
                <input>Why do you want to apply?</input>
                <input>Profession</input>
                <input>Country</input>

                <div>
                    <button>Enviar</button>
                    <button>Voltar</button>
                </div>
            </div>
        </div>
    )
}
export default ApplicationPage;