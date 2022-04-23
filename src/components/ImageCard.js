import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setGridSpan);
    }

    setGridSpan = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {
        const { description, urls:{regular}} = this.props.image;

        return (
         <img alt={description} src={regular} ref={this.imageRef} />
        )
    }
}

export default ImageCard;