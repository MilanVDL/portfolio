import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
            <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
                04. Contact
            </p>
            <h2 className="font-titleFont text-5xl font-semibold">Neem Contact Op</h2>
            <p className="max-w-[600px] text-center text-textDark">
                Al ben ik op het moment niet actief op zoek naar nieuwe mogelijkheden, mijn postvak 
                is altijd open. Of je een vraag hebt of alleen hallo wilt zeggen, ik zou mijn best doen om te reageren.
            </p>
            <a href="mailto:immarlux@gmail.com">
                <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                    Neem Contact Op
                </button>
            </a>
        </section>
    );
}

export default Contact;