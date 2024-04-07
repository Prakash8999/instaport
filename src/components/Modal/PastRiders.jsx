import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { CSSTransition } from "react-transition-group";
const PastRiders = ({ datamodal, setmodal }) => {

	const [showModal, setShowModal] = useState(true);

	// Close the modal when `showModal` state changes
	const closeModal = () => {
		setShowModal(false);
		setTimeout(() => {
			setmodal({ show: false });
		}, 300); // Wait for the closing animation to complete (300ms)
	};

	console.log(datamodal);
	const data = [
		{ id: 1, riderName: 'John Doe', riderNo: 'RD001' },
		{ id: 2, riderName: 'Jane Smith', riderNo: 'RD002' },
		{ id: 3, riderName: 'Alice Johnson', riderNo: 'RD003' },
		{ id: 4, riderName: 'Alice Johnson', riderNo: 'RD003' },
		{ id: 5, riderName: 'Alice Johnson', riderNo: 'RD003' },
		{ id: 6, riderName: 'Alice Johnson', riderNo: 'RD003' },
		{ id: 7, riderName: 'Alice Johnson', riderNo: 'RD003' },
		{ id: 8, riderName: 'Alice Johnson', riderNo: 'RD003' },
		// Add more data as needed
	];





	return (
		<>
			<CSSTransition
				in={showModal}
				classNames="modal"
				timeout={300}
				unmountOnExit
			>



				<div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
					<div className="px-5 pt-8 pb-4 relative max-h-[40vh]  h-fit  overflow-hidden w-[50vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  ">
						<button
							onClick={() => {
								closeModal({ show: false });
							}}
							className="absolute top-2 right-3 font-bold text-xl text-red-600"
							title="close"
						>
							<AiOutlineClose />
						</button>






						{
							datamodal?.length == 0 ? <div className="text-center text-2xl my-auto">
								No Past Drivers

							</div> : <div className="overflow-auto max-h-[40vh]">
								<table className="table-auto w-full">
									<thead className="sticky top-0 z-50 bg-gray-200">
										<tr className="border-b-2 border-slate-200">
											<th className="px-4 py-2">ID</th>
											<th className="px-4 py-2">Rider Name</th>
											<th className="px-4 py-2">Rider No</th>
										</tr>
									</thead>
									<tbody>
										{datamodal.map((value, index) => (
											<tr key={index} className="text-center">
												<td className="border px-4 py-2">#{value._id?.slice(-5)}</td>
												<td className="border px-4 py-2">{value?.fullname}</td>
												<td className="border px-4 py-2">{value?.mobileno}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

						}





					</div>
				</div>
			</CSSTransition>
		</>
	);
};

export default PastRiders;
