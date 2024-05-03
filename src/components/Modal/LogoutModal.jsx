import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const LogoutModal = ({ datamodal, setmodal }) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
		setTimeout(() => {
			setmodal({ show: false });
		}, 200); // Wait for the closing animation to complete (300ms)
	};

	const handleLogout = () => {
		localStorage.clear()
		toast.success("Logged Out Sucessfully")
		// navigate('/login')
		window.location.href = '/login'
	}
	return (
		<>
			<div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
				<div className="p-5 relative h-[20vh]  overflow-hidden w-[30vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  gap-y">
					<button
						onClick={() => {
							closeModal({ show: false });
						}}
						className="absolute top-2 right-3 font-bold text-xl text-red-600"
						title="close"
					>
						<AiOutlineClose />
					</button>
					<div>

						<h1 className="text-center text-2xl">
							Are you sure you want to logout!
						</h1>

						<div className="flex justify-center gap-x-8 items-center h-full">

							<button
								onClick={closeModal}

								className={` outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-red-400 p-2   lg:w-[15vw]   text-black flex  items-center justify-center`}
							>
								Cancel
							</button>
							<button
								onClick={handleLogout}

								className={` outline-none rounded-lg text-base font-semibold shadow hover:shadow-lg  duration-300    p-2 bg-yellow-400  lg:w-[15vw]   text-black flex  items-center justify-center`}
							>
								Logout
							</button>
						</div>
						<div>

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LogoutModal;
