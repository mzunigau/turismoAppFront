import React from "react";
import { Tabs, Tab, Card, Button } from "react-bootstrap";
import { PillsCard } from "./pillsCard";

export const TabNav = () => {
	return (
		<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
			<Tab eventKey="playa" title="Playa">
				<PillsCard />
			</Tab>
			<Tab eventKey="montaña" title="Montaña">
				<PillsCard />
			</Tab>
			<Tab eventKey="ríos" title="Ríos">
				<PillsCard />
			</Tab>
			<Tab eventKey="aventura" title="Aventura">
				<PillsCard />
			</Tab>
			<Tab eventKey="relax" title="Relax">
				<PillsCard />
			</Tab>
			<Tab eventKey="fiesta" title="Fiesta">
				<PillsCard />
			</Tab>
		</Tabs>
	);
};
