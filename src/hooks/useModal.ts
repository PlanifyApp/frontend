import { useEffect, useRef, useState } from 'react';

export const useModal = () => {
    const ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClose = (e: MouseEvent) => {
            if (ref.current && buttonRef.current && !buttonRef.current.contains(e.target as Node) && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClose);

        return () => {
            document.removeEventListener('mousedown', handleClose);
        };
    }, []);

    return { ref, buttonRef, isOpen, handleToggle };
};
