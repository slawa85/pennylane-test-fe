import React from 'react';

const Ingredient = (props) => {
    const {data: { name, id }, onClick} = props;

    return (
        <button type="button" key={id} id={id} className="btn btn-light" onClick={onClick}>
            {name}
        </button>
    );
}

export default Ingredient;
