import React from 'react'
import PropTypes from 'prop-types'
import Clipboard from 'react-clipboard.js';
import tokens from '../../tokens/scss'

import './Token.scss'

const textCats = ['text-color', 'font-size', 'line-height', 'font-family', 'font-weight', 'layout']
const swatchCats = ['color', 'background-color', 'border-color', 'layer', 'margin', 'padding', 'spacing', 'border-radius']

const Token = props => {
    const { name, category, value, type, item, sizeUnit } = props
    let textValue = value
    let style = {}
    let textSample = 'Hello human!'

    // Convert to pixels if desired
    if (sizeUnit === 'px' && textValue.indexOf('rem') > -1) {
        textValue = `${parseFloat(textValue, 10) * 16}px`
    }

    // For nice appearance
    const borderColor = tokens['border-color'].base.base.value
    const darkBg = tokens['color'].greyscale['10'].value
    const codeFont = tokens['font-family'].code.value

    if (category === 'color' || category === 'background-color') {
        style.backgroundColor = value
    }
    if (category === 'background-color' && type === 'base') {
        style.border = `1px solid ${borderColor}`
    }
    if (category === 'text-color') {
        style.color = value

        if (type === 'code') {
            style.backgroundColor = darkBg
            style.fontFamily = codeFont
        }
    }
    if (category === 'border-color') {
        style.border = `1px solid ${value}`
        style.backgroundColor = '#fff'
    }
    if (category === 'layer') {
        style.boxShadow = value
        style.height = '5rem'
        style.backgroundColor = '#fff'
    }
    if (category === 'font-family') {
        style.fontFamily = value
        textSample = value.split(',')[0].split("'")
    }
    if (category === 'font-size' || category === 'line-height') {
        style.fontSize = value
        textSample = textValue
    }
    if (category === 'font-weight') {
        style.fontWeight = value
        textSample = textValue
    }
    if (category === 'margin' || category === 'padding' || category === 'spacing') {
        style.height = value
        style.borderRadius = 0
        style.width = '15rem'
    }
    if (category === 'border-radius') {
        style.borderRadius = value
        style.border = `1px solid ${borderColor}`
        style.backgroundColor = "#fff"
    }
    if (category === 'layout') {
        textSample = textValue
    }

    return (
        <div className="token">
            <span>
                <Clipboard className="token__name" data-clipboard-text={`$${name}`}>
                    <code>{`$${name}`}</code>
                </Clipboard>
            </span>
            {
                swatchCats.indexOf(category) > -1 &&
                <div className="token__swatch-wrapper">
                    <div
                        className="token__swatch"
                        style={style}
                    />
                    <p>{textValue}</p>
                </div>
            }
            {
                textCats.indexOf(category) > -1 &&
                <p className="token__text" style={style}>{textSample}</p>
            }
        </div >
    )
}

Token.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    item: PropTypes.string,
    sizeUnit: PropTypes.oneOf(['rem', 'px'])
}

Token.defaultProps = {
    sizeUnit: 'rem'
}

export default Token