import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaShuttleVan, FaHiking, FaBeer } from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            { icon: <FaCocktail />, title: 'Free Cocktails', info: "Lorem Ipsum is simply dummy text of the printing." },
            { icon: <FaHiking />, title: 'Endless Hiking', info: "Lorem Ipsum is simply dummy text of the printing." },
            { icon: <FaShuttleVan />, title: 'Trips', info: "Lorem Ipsum is simply dummy text of the printing." },
            { icon: <FaBeer />, title: 'Awesome Drinks', info: "Lorem Ipsum is simply dummy text of the printing." }
        ]
    }
    render() {
        const oneService = this.state.services.map((service, index) => {
            return <article className="service" key={index}>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
            </article>
        })
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {oneService}
                </div>
            </section>
        );
    }
}

export default Services;