import React from "react";
import Header from "../../blocks/Header";
import Layout from "../../containers/Layout";


const  Hero:React.FC<{}>  = () => {
    return (
        <div>
            <Layout>
                <Header />
            </Layout>
        </div>
    );
};

export default Hero;


