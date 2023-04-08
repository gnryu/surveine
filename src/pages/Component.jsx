import React from "react";

const Component = ({id, title, content}) => {
    return(
        <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '16px' }}>
            <h2>{title}</h2>
            <p>
                {content}
            </p>
        </div>
    );
};

export default Component;