import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../RoomContextProvider';
import HeroStyled from '../components/HeroStyled';


class SingleRoom extends Component {
    state = {
        slug: this.props.match.params.slug
    }

    static contextType = RoomContext;

    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return (
                <div className="error">
                    <h3>No such Room Found ...</h3>
                    <Link to="/rooms/" className="btn-primary">Get Back To Rooms</Link>
                </div>
            )
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [mainImg, ...restImages] = images;
        return (
            <Fragment>
                <HeroStyled img={mainImg}>
                    <Banner title={`${name} Room`}>
                        <Link to="/rooms/" className="btn-primary">Rooms</Link>
                    </Banner>
                </HeroStyled>
                <section className="single-room">
                    <div className="single-room-images">
                        {restImages.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details: </h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info: </h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>Max Capacity: {capacity > 1 ? `${capacity} People` : `${capacity} Person`}</h6>
                            <h6>{pets ? 'Pets Allowed' : 'No Pets Allowed'}</h6>
                            <h6>{breakfast && "Breakfast Included"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras: </h6>
                    <ul className="extras">
                        {extras.map((extra, index) => {
                            return <li key="index">- {extra}</li>
                        })}
                    </ul>
                </section>
            </Fragment>
        );
    }
}

export default SingleRoom;