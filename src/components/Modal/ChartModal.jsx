import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

const ChartModal = ({ dataModal, setModal }) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {

		setModal(false);

	};

	return (
		<>
			{/* <CSSTransition> */}

			<div className='h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center top-0 left-0 z-[100]'>


				<div className='h-[80vh] relative w-[60vw] bg-[#FFFDE6] rounded-lg flex flex-col md:gap-y-1 '>
					<button onClick={closeModal} className=" absolute top-2 right-3 font-bold text-xl text-red-600">
						<AiOutlineClose
							className=''
						/>
					</button>




				</div>


			</div>
			{/* </CSSTransition> */}
		</>
	)
}

export default ChartModal