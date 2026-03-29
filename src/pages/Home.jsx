import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Home</h1>
            <p>base page</p>
            <div>
                <button
                className="counter text-2xl border-2 rounded-md shadow-2xl"
                onClick={() => setCount((count) => count + 1)}
                >
                Count is {count}
                </button>
            </div>
        </div>
    );
}