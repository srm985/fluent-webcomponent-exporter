import PropTypes from 'prop-types';
import React from 'react';
import {
    DefaultButton,
    PrimaryButton
} from '@fluentui/react';

const ButtonComponent = (props) => {
    const {
        isPrimaryButton,
        label
    } = props;

    const defaultButtonProps = {
        text: label
    };

    return (
        isPrimaryButton ? (
            <PrimaryButton {...defaultButtonProps} />
        ) : (
            <DefaultButton {...defaultButtonProps} />
        )
    );
};

ButtonComponent.propTypes = {
    isPrimaryButton: PropTypes.bool,
    label: PropTypes.string
};

ButtonComponent.defaultProps = {
    isPrimaryButton: false,
    label: ''
};

export default ButtonComponent;
