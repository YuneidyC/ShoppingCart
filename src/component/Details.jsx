import { useContext, useEffect, useRef } from 'react';

import AppContext from '@Context/AppContext';

function Details() {
    const { selectedProduct, isDetailsOpen, closeDetails } = useContext(AppContext);
    const modalRef = useRef(null);
    const firstFocusRef = useRef(null);

    useEffect(() => {
        if (!isDetailsOpen) return;

        const modalNode = modalRef.current;
        const focusableSelector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
        const focusable = modalNode.querySelectorAll(focusableSelector);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeDetails();
            }

            if (e.key === 'Tab') {
                if (focusable.length === 0) {
                    e.preventDefault();
                    return;
                }
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        // Move focus to the modal
        (first || firstFocusRef.current)?.focus();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isDetailsOpen, closeDetails]);

    if (!isDetailsOpen || !selectedProduct) return null;

    return (
        <div
            className="details-overlay"
            onClick={closeDetails}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="details-title"
                className="details-modal"
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
            >
                <div className="flex justify-between items-start mb-4">
                    <h2 id="details-title" className="text-xl font-bold">{selectedProduct.title}</h2>
                    <button
                        ref={firstFocusRef}
                        className="text-gray-600 hover:text-gray-900"
                        onClick={closeDetails}
                        aria-label="Close details"
                    >
                        ✕
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 flex items-center justify-center">
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="max-h-40" />
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-lg font-semibold mb-2">${selectedProduct.price}</p>
                        {selectedProduct.category && (
                            <p className="text-sm text-gray-500 mb-2">Category: {selectedProduct.category}</p>
                        )}
                        <p className="text-sm text-gray-700">{selectedProduct.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
