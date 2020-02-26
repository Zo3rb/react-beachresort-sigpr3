import React, { Fragment } from 'react';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../RoomContextProvider';
import Loading from './Loading';

const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {value => {
                const { rooms, sortedRooms, loading } = value
                if (loading) {
                    return <Loading />
                }
                return (
                    <Fragment>
                        <RoomsList rooms={sortedRooms} />
                    </Fragment>
                )
            }}
        </RoomConsumer>
    );
}

export default RoomsContainer;
