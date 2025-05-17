'use client';
import React, { createContext, useContext, useState, ReactNode } from "react";

type EventFilterContextType = {
    filter: string;
    setFilter: (filter: string) => void;
};

const EventFilterContext = createContext<EventFilterContextType | undefined>(undefined);

export const useEventFilter = () => {
    const context = useContext(EventFilterContext);
    if (!context) throw new Error("useEventFilter must be used within EventFilterProvider");
    return context;
};

export const EventFilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<string>("All Events");
    return (
        <EventFilterContext.Provider value={{ filter, setFilter }}>
        {children}
        </EventFilterContext.Provider>
    );
};