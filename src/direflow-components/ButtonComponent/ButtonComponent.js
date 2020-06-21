import PropTypes from 'prop-types';
import React from 'react';
import {
    PrimaryButton
} from '@fluentui/react';

const ButtonComponent = (props) => {
    const {
        label
    } = props;

    return (
        <PrimaryButton text={label} />
    );
};

ButtonComponent.propTypes = {
    label: PropTypes.string
};

ButtonComponent.defaultProps = {
    label: ''
};

export default ButtonComponent;
