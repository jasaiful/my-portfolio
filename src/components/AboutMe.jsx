

const AboutMe = () => {
    return (
        <div name='about' className='w-full bg-base-50 h-screen pt-24'>
            <div className='max-w-6xl mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-rose-600 '>About Me</p>
                    <p className="text-xl mt-5 text-justify">
                        I am available for exciting opportunities to apply my passion and skills in front-end development, eager to contribute, learn, and grow in collaborative projects.
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="mt-5 space-y-8">
                        <h2 className="font-semibold mt-5 text-2xl">Personal Info:</h2>
                        <div>
                            <h4 className="text-lg border-b-2">Name:</h4>
                            <p className="text-xl font-semibold">Julfiker Ali</p>
                        </div>
                        <div>
                            <h4 className="text-lg border-b-2">Email:</h4>
                            <p className="text-xl font-semibold">jasaiful@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="text-lg border-b-2">Contact Number:</h4>
                            <p className="text-xl font-semibold">+880 162 058 5826</p>
                        </div>
                        <div>
                            <h4 className="text-lg border-b-2">From:</h4>
                            <p className="text-xl font-semibold">Noakhali, Bangladesh</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-5">
                        <img className="hover:scale-110 w-5/12 duration-500 rounded-xl" src="https://i.ibb.co/vDJx30T/image.png" alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;