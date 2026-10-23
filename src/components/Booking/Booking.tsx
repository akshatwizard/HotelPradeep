'use client';
import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/app/context/Context';
import Form from '../Form/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface CustomerData {
    checkIn: string | null;
    checkOut: string | null;
    noOfPersons: number | string;
    noOfRooms: number | string;
}

export default function Booking() {
    const { isFormOpen, setIsFormOpen, customerData, setCustomerData } = useAppContext();

    const [today, setToday] = useState<string>('');
    const [tomorrow, setTomorrow] = useState<string>('');

    useEffect(() => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(currentDate.getDate() + 1);
        const formattedTomorrow = tomorrowDate.toISOString().split('T')[0];
        setTomorrow(formattedTomorrow);
        setToday(formattedDate);
    }, []);

    useEffect(() => {
        if (customerData.checkIn) {
            const selectedDate = new Date(customerData.checkIn);
            selectedDate.setDate(selectedDate.getDate() + 1);
            const newMinCheckOut = selectedDate.toISOString().split('T')[0];
            setTomorrow(newMinCheckOut);

            if (customerData.checkOut && customerData.checkOut < newMinCheckOut) {
                setCustomerData((prevData: CustomerData) => ({
                    ...prevData,
                    checkOut: '',
                }));
            }
        }
    }, [customerData.checkIn, setCustomerData]);

    const handleChange = (name: keyof CustomerData, value: string | number | Date) => {
        const formattedValue = value instanceof Date ? value.toISOString().split('T')[0] : value;
        setCustomerData((prevData: CustomerData) => ({ ...prevData, [name]: formattedValue }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('customerData', JSON.stringify(customerData));
        setIsFormOpen(true);
    };

    return (
        <section
            id="booking-form"
            className="section-padding bg-img bg-fixed"
            data-overlay-dark="5"
            data-background="/img/bg-image/varanasi.jpg"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center mb-20">
                        <div className="section-subtitle">Hotel Experience</div>
                        <div className="section-title white">Booking Form</div>
                    </div>
                </div>
                <div className="booking-inner clearfix">
                    <form className="form1 clearfix" onSubmit={handleSubmit}>
                        <div className="col1 c1">
                            <div className="input1_wrapper border-l border-b border-t border-r">
                                <label>Check in</label>
                                <div className="input1_inner">
                                    <DatePicker
                                        selected={customerData.checkIn ? new Date(customerData.checkIn) : null}
                                        onChange={(date: Date | null) => handleChange('checkIn', date || '')}
                                        className="form-control "
                                        placeholderText="Check in"
                                        minDate={new Date()}
                                        dateFormat="yyyy-MM-dd"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col1 c2">
                            <div className="input1_wrapper border-l border-b border-t border-r">
                                <label>Check out</label>
                                <div className="input1_inner">
                                    <DatePicker
                                        selected={customerData.checkOut ? new Date(customerData.checkOut) : null}
                                        onChange={(date: Date | null) => handleChange('checkOut', date || '')}
                                        className="form-control input"
                                        placeholderText="Check out"
                                        minDate={customerData.checkIn ? new Date(new Date(customerData.checkIn).setDate(new Date(customerData.checkIn).getDate() + 1)) : new Date(tomorrow)}
                                        dateFormat="yyyy-MM-dd"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c3">
                            <div className="select1_wrapper border-l border-b border-t border-r">
                                <label>No. of Persons</label>
                                <div className="input1_inner rn">
                                    <input
                                        value={customerData.noOfPersons || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('noOfPersons', e.target.value)}
                                        type="number"
                                        className="form-control input"
                                        placeholder="No. Of Persons"
                                        min={1}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c4">
                            <div className="select1_wrapper border-l border-b border-t border-r">
                                <label>No. Of Rooms</label>
                                <div className="input1_inner rn">
                                    <input
                                        value={customerData.noOfRooms || ''}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('noOfRooms', e.target.value)}
                                        type="number"
                                        className="form-control input"
                                        placeholder="No. Of Rooms"
                                        min={1}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col3 c5">
                            <button type="submit" className="btn-form1-submit">
                                Check Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {isFormOpen && <Form />}
        </section>
    );
}
