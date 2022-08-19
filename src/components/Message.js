import { useState } from "react";
export const Message = () => {
    const [message, setMessage] = useState('Welcome Visitors')
    return (
        <div>
            <h1>
                {message}
            </h1>
            <button onClick={() => setMessage('Hello Ready for rock and roll')}>Subscribe</button>
        </div>

    )

}
