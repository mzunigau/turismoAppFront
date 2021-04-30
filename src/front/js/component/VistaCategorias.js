import { Col, Card, Button } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const DestinationCard = props => {
    const { store, actions } = useContext (Context);
    const destStore = store.destination.filter (dest => dest.name == props.destination.name);
    useEffect(() => actions.destDescription (props.destination.url), []);

    return (
        <Col>
			<Card>
				<Card.Img variant="left" src="https://fakeimg.pl/845x360" />
				<Card.Body>
					<Card.Title>{props.destination.name}</Card.Title>
					{destinationStore[0] ? (
						<Card.Text>
							<p>Gender: {destinationStore[0].gender}</p>
							<p>Hair Color: {destinationStore[0].hair_color}</p>
							<p>Eye Color: {destinationStore[0].eye_color}</p>
						</Card.Text>
					) : (
						""
					)}
					<Link to={"/singledestinationcard/" + props.destination.uid} data={charStore}>
						<Button variant="outline-primary">Learn More</Button>
					</Link>
					<Button
						variant="outline-warning"
						className="likeBtn"
						onClick={() => actions.addItem(props.character.name)}>
						&#9825;
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

DestinationCard.propTypes = {
	index: PropTypes.number,
	destination: PropTypes.object,
	id: PropTypes.number
};

export default DestinationCard;