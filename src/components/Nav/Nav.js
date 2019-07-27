import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './Nav.scss'

const Nav = props => {
    const { tokens, sizeUnit, onClickSizeUnit } = props
    return (
        <aside className="nav">
            <div className="nav-section">
                <h1 className="nav__title">Heartwood Tokens</h1>
            </div>
            <div className="nav-section nav-controls">
                <p className="nav-section__title">Size Unit</p>
                <button className={cx("nav-controls__btn", { "nav-controls__btn--current": sizeUnit === 'rem' })} onClick={() => onClickSizeUnit('rem')}>rem</button>
                <button className={cx("nav-controls__btn", { "nav-controls__btn--current": sizeUnit === 'px' })} onClick={() => onClickSizeUnit('px')}>px</button>
            </div>
            <ul className="nav__list">
                {Object.keys(tokens).map(cat => (
                    <li key={cat} className="nav__item"><a className="nav__link" href={`#${cat}`}>{cat.split('-').join(' ')}</a></li>
                ))}
            </ul>
        </aside>
    )
}

Nav.propTypes = {
    tokens: PropTypes.object.isRequired,
    onClickSizeUnit: PropTypes.func.isRequired,
    sizeUnit: PropTypes.oneOf(['rem', 'px'])
}

export default Nav
