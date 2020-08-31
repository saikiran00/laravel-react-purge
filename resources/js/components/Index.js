import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "./Modal";

function Index() {
    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    };
    return (
        <div className="mx-48">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                This is Inside React
            </h2>
            <span className="inline-flex rounded-md shadow-sm mt-4">
                <button
                    onClick={() => setShow(true)}
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                    Click Here to Open
                </button>

                {show && <Modal closeModal={closeModal} />}
            </span>
        </div>
    );
}

export default Index;

// if (document.getElementById("index")) {
//     ReactDOM.render(<Index />, document.getElementById("index"));
// }
