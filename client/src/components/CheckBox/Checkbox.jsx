import React, { useState } from "react";

import PropTypes from "prop-types";

export default function Checkbox({ label, value }){
    const [ checkedState, setCheckedState ] = useState(value);

    const handleChange = () => {
        setCheckedState(!checkedState);
    };

    return(
        <label>
                <input type="checkbox" checked={checkedState} onChange={() => handleChange()} />
                {label}
        </label>
    );
}

Checkbox.defaultProps = {
    value: false
}