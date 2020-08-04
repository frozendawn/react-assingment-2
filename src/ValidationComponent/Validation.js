import React from 'react';


function Validation (props) {

    let condition = null;

        if (props.textLength >= 5) {
            condition = (
                <div>
                    text long enough
                </div>
            );

            
        } else {
            condition = (
                <div>
                    text not long enough
                </div>
            );
        }
    
    return(
        <div>
            
            {condition}
        </div>
    )
}

export default Validation;