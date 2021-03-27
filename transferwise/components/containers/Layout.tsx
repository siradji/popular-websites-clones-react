import React, {ReactNode} from 'react';


const Layout:React.FC = ({children}) => {
    return (
        <main className="container-custom mx-auto">
            {children}
        </main>
    )
}

export default Layout;