import { useEffect, useState } from "react";

export const TestPage = () => {
    const [message, setMessage] = useState("...loading");
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:5235/api/test")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`API request failed (${response.status})`);
                }

                return response.json();
            })
            .then(data => {
                setMessage(data.message);
            })
            .catch((requestError) => {
                console.error("API test failed:", requestError);
                setError("Unable to load the API test. Please try again later.");
            });
    }, []);

    return (
        <div className="bg-[var(--bg)]/75 p-10 m-0 ">
            <h2 className="w-full">Page for test</h2>
            <p>{message}</p>
            {error && <p role="alert">{error}</p>}

        </div>
    );
};