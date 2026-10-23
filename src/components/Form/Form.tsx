'use client'
import { useAppContext } from '@/app/context/Context'
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FormLoader from '../FormLoader/FormLoader';

export default function Form() {
  const { isFormOpen, setIsFormOpen, customerData, setCustomerData } = useAppContext();
  const close = useRef<HTMLDivElement | null>(null);
  const [today, setToday] = useState('');
  const [tomorrow, setTomorrow] = useState('');
  const [loading, setLoading] = useState(false);

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
    function handleClickOutside(event: MouseEvent) {
      if (close.current && !close.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close, setIsFormOpen]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (customerData.checkIn) {
      const selectedDate = new Date(customerData.checkIn);
      selectedDate.setDate(selectedDate.getDate() + 1);
      const newMinCheckOut = selectedDate.toISOString().split("T")[0];

      setTomorrow(newMinCheckOut);

      if (customerData.checkOut && customerData.checkOut < newMinCheckOut) {
        setCustomerData((prevData: any) => ({
          ...prevData,
          checkOut: "",
        }));
      }
    }
  }, [customerData.checkIn]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    toast.promise(
      axios
        .post("/api/contact", customerData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setCustomerData({
              name: "",
              email: "",
              phone: "",
              message: "",
              checkIn: "",
              checkOut: "",
              noOfRooms: "",
              noOfPersons: "",
              roomType: "",
            });
            localStorage.removeItem('customerData');
            const delay = setTimeout(() => {
              setIsFormOpen(false);
              clearTimeout(delay);
            }
              , 2000);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log("Error sending message", error.message);
          setIsFormOpen(false);
          throw error;
        }), {
      loading: "Sending your enquiry...",
      success: "Enquiry sent, we will reply within 24-48 hours",
      error: "Error sending enquery. Please try again.",
    },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 3000,
        },
      }

    );
  }
  function closeForm() {
    setIsFormOpen(false)
    localStorage.removeItem('customerData')
    setCustomerData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      message: '',
      noOfRooms: '',
      noOfPersons: '',
    })
  }

  return (
    <section className='form-section'>
      <div className="form-section-wraper">
        <div className="main-form-container" ref={close}>
          <div className="colse-btn" onClick={closeForm}>
            <i className="fa-regular fa-xmark"></i>
          </div>
          <div className="main-form-title">
            <span>Send Enquiry</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="main-input-container">
                  <label>Check In</label>
                  <input
                    value={customerData.checkIn || ''}
                    onChange={handleChange}
                    name="checkIn"
                    type="date"
                    className="form-control input"
                    placeholder="Check in"
                    min={today}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="main-input-container">
                  <label>Check out</label>
                  <input
                    value={customerData.checkOut || ''}
                    onChange={handleChange}
                    name="checkOut"
                    type="date"
                    className="form-control input"
                    placeholder="Check out"
                    min={tomorrow}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="main-input-container">
                  <label>No Of Persons</label>
                  <input
                    value={customerData.noOfPersons || ''}
                    onChange={handleChange}
                    name="noOfPersons"
                    type="number"
                    className="form-control input"
                    min={1}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="main-input-container">
                  <label>No Of Rooms</label>
                  <input
                    value={customerData.noOfRooms || ''}
                    onChange={handleChange}
                    name="noOfRooms"
                    type="number"
                    className="form-control input"
                    min={1}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <label>Type of Room</label>
                  <select name="roomType" value={customerData.roomType || ''} onChange={handleChange} className="form-control input" required>
                    <option value="">Select Room Type...</option>
                    <option value="Delux">Delux</option>
                    <option value="Super Delux">Super Delux</option>
                    <option value="Executives">Executives</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <label>Name</label>
                  <input
                    value={customerData.name || ''}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="form-control input"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <label>Phone No.</label>
                  <input
                    value={customerData.phone || ''}
                    onChange={handleChange}
                    name="phone"
                    type="tel"
                    className="form-control input"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <label>E-Mail</label>
                  <input
                    value={customerData.email || ''}
                    onChange={handleChange}
                    name="email"
                    type="tel"
                    className="form-control input"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <label>More Details</label>
                  <textarea name="message"
                    value={customerData.message || ''}
                    onChange={handleChange}
                    className="form-control input"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="main-input-container">
                  <button>{loading ? <FormLoader /> : "Submit"}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 4000,
            iconTheme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </section>
  )
}
