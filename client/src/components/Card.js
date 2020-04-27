import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <>
                {this.props.cards.map((card) => (
                    <div key={card.id} className="col s3">
                        <img src={card.imageUrl} style={style.thumbnail}/>
                    </div>
                ))}
            </>
        )
    }
}

const style = {
    thumbnail: {
        width: '200px'
    }
}

export default Card;