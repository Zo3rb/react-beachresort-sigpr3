import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomContextProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    // getData

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(room => room.price));
        let maxSize = Math.max(...rooms.map(room => room.size));
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price: maxPrice,
            size: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        })
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug)
        return room;
    }

    handleChange = e => {
        const type = e.target.type
        const name = e.target.name
        const value = e.target.value
        console.log(name, type, value);
    }

    filterRoom = () => {
        console.log("Hello World");
    }

    render() {
        return (
            <RoomContext.Provider value={
                {
                    ...this.state,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange,
                    filterRoom: this.filterRoom
                }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContextProvider, RoomConsumer, RoomContext }