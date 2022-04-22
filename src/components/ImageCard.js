import React, { Component } from 'react'

export class ImageCard extends Component {

    render() {
        const { description, urls:{regular}} = this.props.image;

        return (
         <img alt={description} src={regular} />
        )
    }
}

export default ImageCard;