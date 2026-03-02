import { createContext, useState } from 'react';

interface ContextProps {
    entrada: string;
    setEntrada: (value: string) => void;
}
interface ChildrenProps {
    children: React.ReactNode;
}
const LetterContext = createContext<ContextProps | null>(null);
function LetterProvider({ children }: ChildrenProps) {
    const [entrada, setEntrada] = useState('')

    return (
        <LetterContext.Provider value={{ entrada, setEntrada }}>
            {children}
        </LetterContext.Provider>
    );
}

export { LetterContext, LetterProvider, type ContextProps };