'use client'
import { createContext, use, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export default function AppProvider({ children }) {

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        message: '',
        noOfRooms: '',
        noOfPersons: '',
    });

    useEffect(()=>{
        if(isFormOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    },[isFormOpen])

    useEffect(() => {
        const data = localStorage.getItem('customerData');
        if(data){
            setCustomerData(JSON.parse(data));
        }
    },[])

    const value = {
        isFormOpen,
        setIsFormOpen,
        customerData,
        setCustomerData,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  }