import { useEffect, useState } from "react";
import { connection } from "../../services/signalr";
export const TestPage = () => {
    const [message, setMessage] = useState("...loading");
    const [counter, setCounter] = useState(1);

    const [error, setError] = useState("");
    /*
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
    */
    useEffect(() => {
        const receiveMessage = (receivedMessage: string) => {
            console.log("Received message:", receivedMessage);
        };

        connection.on("ReceiveMessage", receiveMessage);

        if (connection.state === "Disconnected") {
            connection.start()
                .then(() => {
                    console.log("SignalR connected!");
                })
                .catch(error => {
                    console.error("SignalR connection failed:", error);
                });
        }

        return () => {
            connection.off("ReceiveMessage", receiveMessage);
        };
    }, []);

    const sendHello = async () => {
        setCounter(counter + 1);
        console.log('attempting to send')
        try {
            await connection.invoke("SendMessage", "hello " + counter);
            setError("");
        } catch (sendError) {
            console.error("SignalR message failed:", sendError);
            setError("Unable to send the message.");
        }
    };

    return (
        <div className="bg-[var(--bg)]/75 p-10 m-0 ">
            <h2 className="w-full">Page for test</h2>
            <p>{message}</p>
            {error && <p role="alert">{error}</p>}
            <button  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors"  onClick={sendHello}>Send hello</button>

        </div>
    );
};