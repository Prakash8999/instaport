import React, { useState, useEffect } from 'react';

import AsyncSelect from 'react-select/async';
import { server } from '..';
import axios from 'axios';
import toast from 'react-hot-toast';

const filterRiders = (inputValue, query) => {
	return inputValue?.filter((rider) => {
		return rider?.orders?.length < 2 && rider?.status != 'offline' && rider?.approve && rider?.fullname?.toLowerCase()?.includes(query.toLowerCase())
	}
	);
};





const promiseOptions = (input) =>

	new Promise((resolve) => {
		axios(`${server}/rider/riders`, {
			headers: {
				// Authorization: `Bearer ${localStorage.getItem("token")}`,
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((res) => {

			let data = res?.data?.rider?.map((rider, index) => {
				return {
					...rider,
					label: rider?.fullname,
					value: rider?._id,

				}
			})
			resolve(filterRiders(data, input));
		});


	});

export default ({ order }) => {
	const [rider, setRider] = useState({ ...order?.rider, label: order?.rider?.fullname, value: order?.rider?._id })
	useEffect(() => {
		setRider({ ...order?.rider, label: order?.rider?.fullname, value: order?.rider?._id })
	}, [order])


	const assignRider = () => {
		console.log(rider.value);
		axios(`${server}/rider/admin/reassign/${order?._id}`, {
			method: "PATCH",
			data: {
				newRider: rider.value,
				oldRider: order?.rider?._id
			},
			headers: {
				// Authorization: `Bearer ${localStorage.getItem("token")}`,
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((res) => {
			if (!res?.data?.error) {
				toast.success(res?.data?.message)
			}
			toast.error(res?.data?.message)

		}).catch((err)=>{
toast.error(err?.message)
		})
	}


	const selectTheme = {
		control: (styles, { isFocused }) => {
			return ({ ...styles, backgroundColor: '#fff', padding: "0.25rem", borderRadius: "0.375rem", border: `2px solid rgb(250 204 21);`, color: "#00000" })
		},
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isFocused ? 'rgb(250 204 21)' : "#fff",
				color: '#000',
			};
		},
		theme: (theme) => ({
			...theme,
			borderRadius: 0,
			colors: {
				...theme.colors,
				primary25: 'green',
				primary: '#fff',
			},
		})
	}


	return <>
		<div className='flex gap-x-3'>

			<AsyncSelect styles={selectTheme} isDisabled={order?.status == 'delivered'} onChange={(e) => {

				setRider(e)
			}} value={rider} cacheOptions defaultOptions defaultValue={{ ...order?.rider, label: order?.rider?.fullname, value: order?.rider?._id }} loadOptions={promiseOptions} className='w-[80%]   ' />
			<button onClick={assignRider} disabled={order?.status == 'delivered'} className="text-white border-yellow-300 self-center bg-yellow-400 h-11 w-24 px-4 py-1  rounded-3xl">

				Assign
			</button>
		</div>
	</>
}