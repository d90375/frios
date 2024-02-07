import Image from "next/image"
import { useState } from "react"
import NavLink from "../NavLink"

const Hero = () => {

    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
            <section>
                <div className="custom-screen items-center gap-12 text-gray-600 flex flex-col sm:justify-center sm:text-center xl:flex-row xl:text-left">
                    <div className='flex-none space-y-5 max-w-4xl xl:max-w-2xl'>
                        <h1 className="text-4xl text-white font-extrabold sm:text-6xl">
                            Mastering computer science fundamentals
                        </h1>
                        <p className="text-gray-300 max-w-xl sm:mx-auto xl:mx-0">
                            The IO Academy is an online learning platform that provides interactive courses and projects in Computer Science to high schoolers and adults of all backgrounds.
                        </p>
                        <div className="items-center gap-x-3 font-medium text-sm sm:flex sm:justify-center xl:justify-start">
                            <NavLink
                                href="#pricing"
                                className="block text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-700"
                                scroll={false}
                            >
                                Get started
                            </NavLink>
                            <NavLink
                                href="#cta"
                                className="block text-gray-100 bg-gray-700 hover:bg-gray-800 mt-3 sm:mt-0"
                                scroll={false}
                            >
                                Learn more
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Hero