import React from "react";
import ContainerDiv from "../Container";
import socials from '../../utils/social_media.json';
import { Image, Row, Col } from "react-bootstrap";
import buildRoutes from "../../utils/buildRoutes";

function SocialMediaMap({ title, image, alt, description, technologies, claNM }) {
    return (
        socials.map(social => (
            <ContainerDiv className="card mb-3">
                <Row className='card-title'>
                    <Col s={5} lg={10}>
                        <h3 className="card-title mt-3">{social.title}</h3>
                    </Col>
                </Row>
                <Row className="allSocialMediaImages">
                    <Col s={4} m={6} lg={8}>
                        <Image className={social.claNM} src={buildRoutes(social.image)} alt={social.alt} />
                    </Col>
                </Row>
                    <Row>
                        <Col s={4} m={6} lg={12}>
                            <p className="description">{social.description}</p>
                            <p className="technologies">Tools Utilized: {social.technologies}</p>
                        </Col>
                    </Row>
            </ContainerDiv>
        ))
    );
};

export default SocialMediaMap;