import React from 'react'
import Skills from "./components/Skills.jsx";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-black">
                <div className=" text-purple-300 p-5">
                    Rajat Kumar Singh
                </div>
                <h1 className="text-white mx-10">
                    Skills
                </h1>
                <div className="flex flex-row mx-10 my-4">
                    <Skills/>
                </div>
            </div>
        </>
    )
}
export default App
