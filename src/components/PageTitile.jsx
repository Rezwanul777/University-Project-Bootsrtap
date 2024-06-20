/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";


const PageTitile = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default PageTitile;