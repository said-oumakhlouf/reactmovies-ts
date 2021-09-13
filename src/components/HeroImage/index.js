import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ title, image, text }) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

HeroImage.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
}

export default HeroImage