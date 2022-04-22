import React from 'react';
import "./ImageList.css";

const ImageList = (props) => {
    const images = props.images.map(
        ({description, urls, id}) => <img src={urls.regular} alt={description} key={id} />
    );

    return (
        <div className='image-list'>{images}</div>
    )
}

export default ImageList;