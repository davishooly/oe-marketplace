import React from "react";
import Link from 'next/link'

const AdvertComponent: React.FC = () => {
    return (
        <div>
            <Link href={'/categories'}>
                <a> Advert section </a>
            </Link>
            </div>
    )
};

export default AdvertComponent;
