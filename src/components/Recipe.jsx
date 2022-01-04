import React from 'react';

const Recipe = (props) => {
    const { data: { name, id, image, author, ingredients } } = props;

    return (
        <div className='recipe-list-item'>
            <div className='recipe-image'>
                <img src={image} alt="" className='recipe-item-img'/>
            </div>
            <div className='recipe-text'>
                <div className='recipe-title'>
                    {name}
                </div>
                <div className='recipe-author'>
                    Author: {author.name}
                </div>
                <div className='recipe-ingredients'>
                    <ul className=''>
                        {
                            ingredients.map(i => {
                                return <li>{i}</li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Recipe;
