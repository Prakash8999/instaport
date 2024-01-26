import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group';
import { server } from '../..';
import InputComp from '../InputComp';

const TransactionModal = ({ dataModal, setModal }) => {
	const closeModal = () => {
		setModal(false);
	};

	const [transactionID, setTransactionId] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios(`${server}/api/rider/pay/${dataModal?._id}`, {
				method: "PATCH",
				data: {
					transactionID: transactionID
				},
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,

				},

			}
			).then((res) => {
				console.log(res);
			})
		} catch (error) {

		}
	}

	return (

		<div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
			<div className="p-5 relative h-fit overflow-hidden w-[40vw]  bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  ">
				<button
					onClick={() => {
						closeModal({ show: false });
					}}
					className="absolute top-2 right-3 font-bold text-xl text-red-600"
					title="close"
				>
					<AiOutlineClose />
				</button>

				<div className='w-full h-full '>

					<div className='flex items-center gap-x-2 text-xl justify-center'>

						<p>

							{
								!dataModal?.completed ? "Pay" : "Paid"
							}
						</p>
						<p>

							{
								dataModal?.amount
							}
						</p>
						<p>
							to Rider- {dataModal?.rider?.fullname}
						</p>
					</div>
					<div className=''>



						<form onSubmit={handleSubmit} className='flex justify-center flex-col gap-y-4 mt-4'>


							<InputComp type="text" onChange={(e) => {
								setTransactionId(e.target.value)
							}}
								className={'w-[50%] '}
								placeholder={"Enter TransactionId"}
							/>

							<button type='submit' className='bg-blue-600 text-white rounded-lg text-xl px-3 py-1 w-fit'>

								Submit
							</button>
						</form>
					</div>

				</div>


			</div>

		</div>

	)
}

export default TransactionModal