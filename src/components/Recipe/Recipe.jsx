import React from 'react'
import * as C from './Recipe.styled';

const Recipe = ({recipe}) => {
    const {label, image, url} = recipe;

    return (
        <div>
            <C.Container>
                <C.Content>
                    <h2>{label}</h2>
                    <img src={image} alt={label} />
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Recipe
                    </a>
                </C.Content >
            </C.Container>
        </div>

    )
}

export default Recipe
