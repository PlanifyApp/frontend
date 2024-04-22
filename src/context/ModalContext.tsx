import { ReactNode, RefObject, createContext } from 'react';
import { useModal } from '../hooks/useModal';

export type ModalContextType = {
    isOpen: boolean;
    handleToggle?: () => void;
    ref?: RefObject<HTMLDivElement>;
    buttonRef?: RefObject<HTMLButtonElement>;
};

export const ModalContext = createContext<ModalContextType>({
    isOpen: false
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { ref, buttonRef, isOpen, handleToggle } = useModal();

    return (
        <ModalContext.Provider value={{ isOpen, handleToggle, ref, buttonRef }}>
            {children}
        </ModalContext.Provider>
    );
};
