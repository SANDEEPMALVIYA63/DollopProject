import React from 'react';
import MainLayout from '../components/MainLayout';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    // Loop to create page numbers
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <>
        
        
          
        <div className="pagination">
            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
            )}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    style={{ fontWeight: page === currentPage ? 'bold' : 'normal' }}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
            )}
        </div>
        
        </>
    );
};


export default Pagination;
