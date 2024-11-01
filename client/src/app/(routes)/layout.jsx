import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
           
            <main>
                {children}
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default Layout;