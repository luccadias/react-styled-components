import React from 'react'
import PropTypes from 'prop-types'

import { Paragraph } from './style'

// const fontSize = 15

const Text = ({text}) => <Paragraph>{text}</Paragraph>

Text.prototype = {
    text: PropTypes.string
}

export default Text