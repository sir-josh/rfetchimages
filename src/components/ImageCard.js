import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props){
        super(props);

        this.state = { Imagespan: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setGridSpan);
    }

    setGridSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/10 + 1);

        this.setState({ Imagespan: spans });
    }

    render() {
        const { description, urls:{regular}} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.Imagespan}`}}>
                <img alt={description} src={regular} ref={this.imageRef} />
            </div>
        )
    }
}

export default ImageCard;