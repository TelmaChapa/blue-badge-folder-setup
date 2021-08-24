import { useState, useEffect } from "react";
import "./ApiForm.css";

const ApiForm = () => {
    const [choice, setChoice] = useState("");
    const [data, setData] = useState([]);
    const API_URL = "https://ghibliapi.herokuapp.com/"

    console.log(choice);

    useEffect(() => {
        let endpoint;
        if(choice) {
            if(choice === "locations"){
                endpoint = "locations"
            } else {
                console.log("The user chose species");
            }
            fetch(API_URL + endpoint)
            .then((res) => res.json())
            .then((json) => console.log(json))
        }
    }, [choice]);
    console.log(data);

    return(
        <div>
            <form>
                <label htmlFor="endpoint">Pick an API endpoint: </label>
                <select onChange={(e) => {setChoice(e.target.value)}} name="endpoint">
                    <option value="" selected disabled hidden></option>
                    <option value="species">Species</option>
                    <option value="locations">Locations</option>
                </select>
            </form>
        </div>
    )
}

export default ApiForm;