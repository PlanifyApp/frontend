import { ReactNode, RefObject, createContext, useEffect, useRef, useState } from 'react';

export type ModalContextType = {
    open: boolean;
    toggleClick?: () => void;
    modalRef?: RefObject<HTMLDivElement>;
    buttonRef?: RefObject<HTMLButtonElement>;
};

export const ModalContext = createContext<ModalContextType>({
    open: false
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const onFocusOut = (e: MouseEvent) => {
            if (
                modalRef.current &&
                buttonRef.current &&
                !modalRef.current.contains(e.target as Node) &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener('click', onFocusOut);
        return () => {
            document.removeEventListener('click', onFocusOut);
        };
    }, []);

    return (
        <ModalContext.Provider value={{ open, toggleClick, modalRef, buttonRef }}>
            {children}
        </ModalContext.Provider>
    );
};
