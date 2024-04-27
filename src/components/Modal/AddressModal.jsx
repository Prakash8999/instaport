import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';
import { v4 as uuidv4 } from 'uuid';
import PlacesAutocomplete from 'react-places-autocomplete';
import { CSSTransition } from "react-transition-group";
import InputComp from "../InputComp";
import axios from "axios";
import { server } from "../..";
const AddressModal = ({ datamodal, setmodalAddress }) => {
	const weight = ['0-1 kg', '1-5 kg', '5-10 kg', '10-15 kg', '15-20 kg'];
	const [isEditable, setisEditable] = useState(false);
	const [loading, setLoading] = useState(false)
	const [loadingFair, setLoadingFair] = useState(false)
	const handleEditClick = () => {
		setisEditable(!isEditable);
	};
	const addressInitialState = {
		text: datamodal?.PickupAddress?.text,
		latitude: datamodal?.PickupAddress?.latitude,
		longitude: datamodal?.PickupAddress?.longitude,
		'building_and_flat': datamodal?.PickupAddress?.building_and_flat,
		'floor_and_wing': datamodal?.PickupAddress?.floor_and_wing,
		'key': datamodal?.PickupAddress?.key,
		'instructions': "",
		'phone_number': "",
		'address': datamodal?.PickupAddress?.address,
		'name': "",
		'date': datamodal?.PickupAddress?.date,
		'time': "",
	}

	const initialFormState = {
		delivery_type: "now",
		parcel_weight: weight[0],
		phone_number: "",
		payment_method: "cod",
		package: "",
		parcel_value: 0,
		vehicle: "scooty"
	}

	const [showModal, setShowModal] = useState(true);
	const [distance, setDistance] = useState(0);

	const [formState, setFormState] = useState(initialFormState)
	const [drop, setDrop] = useState({
		address: datamodal?.DropPoint?.address,
		building_and_flat: datamodal?.DropPoint?.building_and_flat,
		date: datamodal?.DropPoint?.date,
		floor_and_wing: datamodal?.DropPoint?.floor_and_wing,
		fromtime: datamodal?.DropPoint?.fromtime,
		instructions: datamodal?.DropPoint?.instructions,
		key: datamodal?.DropPoint?.key,
		latitude: datamodal?.DropPoint?.latitude,
		longitude: datamodal?.DropPoint?.longitude,
		name: datamodal?.DropPoint?.name,
		phone_number: datamodal?.DropPoint?.phone_number,
		text: datamodal?.DropPoint?.text,
		totime: datamodal?.DropPoint?.totime
	})
	const [pickup, setPickup] = useState(addressInitialState)
	const [droplocations, setDroplocations] = useState(datamodal?.Droplocations || []);

	const [amount, setAmount] = useState(0.0);
	useEffect(() => {
		setPickup(datamodal?.PickupAddress)
		setDrop(datamodal?.DropPoint)
		setDroplocations(datamodal?.Droplocations)
	}, [datamodal])


	const closeModal = () => {
		setShowModal(false);
		setTimeout(() => {
			setmodalAddress({ show: false });
		}, 300);
	};

	const calculateDistance = async (source, destination) => {
		try {
			let url = 'https://instaport-backend-main.vercel.app/distance';
			const response = await axios(url, {
				method: "POST",
				data: {
					source, destination
				}
			})
			return response.data;
		} catch (error) {
			console.log(error);
			alert("Something went wrong! Try reloading the page!");
			return 0;
		}
	}

	const fetchDistanceAndCost = async (save) => {

		setLoadingFair(true)

		axios("https://instaport-backend-main.vercel.app/price/get")
			.then(async (res) => {
				let priceData = res.data?.priceManipulation;
				const mainDistance = await calculateDistance(pickup, drop);
				let distance = mainDistance;
				let price = 0;
				if (droplocations.length != 0) {
					price = mainDistance * priceData?.per_kilometer_charge;

					for (let index = 0; index < droplocations.length; index++) {
						const element = droplocations[index];
						if (index == 0) {
							let gap = await calculateDistance(drop, element)
							distance += gap;
							price += gap * priceData.additional_per_kilometer_charge
						} else {
							let gap = await calculateDistance(droplocations[index - 1], element)
							distance += gap;
							price += gap * priceData.additional_per_kilometer_charge
						}
					}
					if (distance < 1.0) {
						price = priceData?.base_order_charges
					} else {
						price = priceData?.per_kilometer_charge * distance + priceData?.base_order_charges
					}
				} else {
					if (mainDistance < 1.0) {
						price = priceData?.base_order_charges
						setLoadingFair(false)
					} else {
						price = priceData?.per_kilometer_charge * mainDistance + priceData?.base_order_charges
						setLoadingFair(false)
					}
				}
				let finalAmount = datamodal?.parcel_weight === weight[0] || datamodal?.parcel_weight == weight[1] ? price : datamodal?.parcel_weight === weight[2] ? price + 50 : datamodal?.parcel_weight === weight[3] ? price + 100 : price + 150
				if (mainDistance == 0) {
					setAmount(0)
					setLoadingFair(false)
				} else {
					setAmount(finalAmount)
					setLoadingFair(false)
				}
				if(save){
					handleUpdateAddress(finalAmount)
				}
			})
	}

	const token = localStorage.getItem("token");
	const handleUpdateAddress = async (finalAmount) => {
		setLoading(true)
		try {
			await axios(`${server}/order/update`, {
				method: "PATCH",

				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				data: {
					_id: datamodal?.id,
					amount: finalAmount,
					pickup: pickup,
					droplocations: droplocations,
					drop: drop
				},
			})
				.then((res) => {
					console.log(res);
					if (!res?.data?.error) {
						toast.success(res?.data?.message)
						setLoading(false)
						window.location.reload()

					} else {
						toast.error(res?.data?.message)
						setLoading(false)
					}
					
				})
				.catch((err) => {
					setLoading(false)
					toast.error("Something Went Wrong!")
					console.log(err);
				})

		} catch (error) {
			console.log(error);
			setLoading(false)

		}

	};



	return (
		<>
			<CSSTransition
				in={showModal}
				classNames="modal"
				timeout={300}
				unmountOnExit
			>

				<div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
					<div className="px-5 pt-8 pb-4 relative h-fit     overflow-hidden w-[70vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  ">
						<button
							onClick={() => {
								closeModal({ show: false });
							}}
							className="absolute top-2 right-3 font-bold text-xl text-red-600"
							title="close"
						>
							<AiOutlineClose />
						</button>

						<div className="grid grid-cols-2 gap-4 ">
							<PlacesAutocomplete

								value={pickup.text}
								searchOptions={{
									componentRestrictions: {
										country: ['in']
									}
								}}
								onChange={(e) => {
									setPickup({ ...pickup, text: e, })
								}}
								onSelect={(e) => {

									setPickup({ ...pickup, text: e, })
									geocodeByAddress(e)
										.then(results => getLatLng(results[0]))
										.then(latLng => {
											setPickup({ ...pickup, latitude: latLng.lat, longitude: latLng.lng, text: e })

										})
										.catch(error => console.error('Error', error));
								}}
								debounce={200}
								shouldFetchSuggestions={true}
							>
								{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div className='relative w-full'>
										<label htmlFor="">Pickup Address:</label>
										<input
											{...getInputProps({
												placeholder: 'Pick your pickup address',
												className: 'w-full location-search-input outline-none rounded-xl px-7 py-3 border-accentYellow border-2 w-full',
											})}
										/>
										<div className="absolute autocomplete-dropdown-container w-full shadow-lg z-10">
											{loading && <div className='w-full px-3 py-3 bg-white'>Loading...</div>}
											{suggestions.map((suggestion, index) => {

												const className = suggestion.active
													? 'suggestion-item--active px-3 py-3'
													: 'suggestion-item px-3 py-3';
												const style = suggestion.active
													? { backgroundColor: '#eee', cursor: 'pointer' }
													: { backgroundColor: '#ffffff', cursor: 'pointer' };
												return (
													<div
														key={index}
														{...getSuggestionItemProps(suggestion, {
															className,
															style,
														})}
													>
														<span>{suggestion.description}</span>
													</div>
												);
											})}
										</div>
									</div>
								)}
							</PlacesAutocomplete>



							<PlacesAutocomplete

								value={drop.text}
								searchOptions={{
									componentRestrictions: {
										country: ['in']
									}
								}}

								onChange={(e) => {
									setDrop({ ...drop, text: e, })
								}}
								onSelect={(e) => {

									setDrop({ ...drop, text: e, })
									geocodeByAddress(e)
										.then(results => getLatLng(results[0]))
										.then(latLng => {
											setDrop({ ...drop, latitude: latLng.lat, longitude: latLng.lng, text: e })

										})
										.catch(error => console.error('Error', error));
								}}
								debounce={200}
								shouldFetchSuggestions={true}
							>
								{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div className='relative w-full'>
										<label htmlFor="">Drop Point 1:</label>
										<input

											{...getInputProps({
												placeholder: 'Pick your pickup address',
												className: 'w-full location-search-input outline-none rounded-xl px-7 py-3 border-accentYellow border-2 w-full',
											})}

										/>
										<div className="absolute autocomplete-dropdown-container w-full shadow-lg z-10">
											{loading && <div className='w-full px-3 py-3 bg-white'>Loading...</div>}
											{suggestions.map((suggestion, index) => {

												const className = suggestion.active
													? 'suggestion-item--active px-3 py-3'
													: 'suggestion-item px-3 py-3';
												const style = suggestion.active
													? { backgroundColor: '#eee', cursor: 'pointer' }
													: { backgroundColor: '#ffffff', cursor: 'pointer' };
												// console.log(suggestion);

												return (
													<div
														key={index}
														{...getSuggestionItemProps(suggestion, {
															className,
															style,
														})}
													>
														<span>{suggestion.description}</span>
													</div>
												);
											})}
										</div>
									</div>
								)}
							</PlacesAutocomplete>





							{

								Array.isArray(droplocations) && droplocations?.map((value, index) => (

									<PlacesAutocomplete
									key={index}
										searchOptions={{
											componentRestrictions: {
												country: ['in']
											}
										}}

										value={value.text}
										onChange={(e) => {
											let obj = { ...droplocations[index] }
											obj.text = e;
											let arr = [...droplocations]
											arr[index] = obj
											setDroplocations(arr);
										}}
										onSelect={(e) => {
											let obj = { ...droplocations[index] }
											obj.text = e;
											let arr = [...droplocations]
											arr[index] = obj
											setDroplocations(arr);
											geocodeByAddress(e)
												.then(results => getLatLng(results[0]))
												.then(latLng => {
													let obj = { ...droplocations[index] }
													obj.text = e
													obj.latitude = latLng.lat
													obj.longitude = latLng.lng
													let arr = [...droplocations];
													arr[index] = obj;
													setDroplocations(arr);
												})
												.catch(error => console.error('Error', error));
										}}


										debounce={200}
										shouldFetchSuggestions={true}
									>
										{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
											<div className='relative w-full'>
												<label htmlFor="">Drop Point {index + 2}:</label>



												<input
													// disabled={!isEditable}
													key={index}
													{...getInputProps({
														placeholder: 'Pick your pickup address',
														className: 'w-full location-search-input outline-none rounded-xl px-7 py-3 border-accentYellow border-2 w-full',
													})}
													value={value?.text}
												/>
												<div className="absolute autocomplete-dropdown-container w-full shadow-lg z-10">
													{loading && <div className='w-full px-3 py-3 bg-white'>Loading...</div>}
													{suggestions.map((suggestion, index) => {

														const className = suggestion.active
															? 'suggestion-item--active px-3 py-3'
															: 'suggestion-item px-3 py-3';
														const style = suggestion.active
															? { backgroundColor: '#eee', cursor: 'pointer' }
															: { backgroundColor: '#ffffff', cursor: 'pointer' };
														// console.log(suggestion);

														return (
															<div
																key={index}
																{...getSuggestionItemProps(suggestion, {
																	className,
																	style,
																})}
															>
																<span>{suggestion.description}</span>
															</div>
														);
													})}
												</div>
											</div>
										)}
									</PlacesAutocomplete>
								))
							}





						</div>



						<div className="flex gap-x-10 justify-center mt-5">

							<div className="flex flex-col items-center">

								<button

									onClick={() => fetchDistanceAndCost(false)} 
									disabled={loadingFair}
									className="disabled:cursor-not-allowed text-white border-yellow-300 self-center bg-yellow-400 h-11 w-32 px-3 py-1  rounded-3xl">

									{loadingFair ? 'Calculating' : 'Calculate Fare'}

								</button>
								<p>
									{amount ?  amount.toFixed(2)  : datamodal?.amount?.toFixed(2)} Rs
								</p>
							</div>

							{/* {isEditable ? ( */}
							<div className="">
								<button
									disabled={loading || loadingFair}
									type="button"
									onClick={() => fetchDistanceAndCost(true)} 
									// disabled={loading}
									className={
										"disabled:cursor-not-allowed text-white border-yellow-300 self-center bg-yellow-400 h-11 px-4 py-1 w-32 rounded-3xl"
									}
								>
									{
										loading ? 'Saving' : 'Save'
									}
								</button>
							</div>
							{/* ) : (
								<div className="">
									<button
										// disabled={loading}
										type="button"
										onClick={handleEditClick}
										className={
											"text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-32 rounded-3xl"
										}
									>
										Edit Address
									</button>
								</div>
							)} */}
						</div>
					</div>
				</div>
			</CSSTransition>
		</>
	);
};

export default AddressModal;
