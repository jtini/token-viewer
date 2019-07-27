import React, { Component } from 'react';
import Token from "../Token/Token"
import Nav from "../Nav/Nav"
import tokens from '../../tokens/scss'
import './TokensWrapper.scss'

export default class TokensWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sizeUnit: 'rem'
        }
    }

    handleClickSizeUnit = unit => {
        this.setState({
            sizeUnit: unit
        })
    }

    render() {
        const { sizeUnit } = this.state
        return (
            <>
                <main className="tokens-viewer">
                    {Object.keys(tokens).map(catKey => {
                        const catName = catKey;
                        const category = tokens[catKey]

                        return (
                            <section key={catName} id={catName} className="tokens__category">
                                <h2>{catName.split('-').join(' ')}</h2>
                                {Object.keys(category).map(typeKey => {
                                    const item = category[typeKey]

                                    if (item.name) {
                                        return <Token key={item.name} category={catName} type={typeKey} sizeUnit={sizeUnit} {...item} />
                                    }

                                    return (
                                        <div key={typeKey} id={`${catName}-${typeKey}`}>
                                            <h3>{typeKey}</h3>
                                            {Object.keys(item).map(itemKey => {
                                                const subitem = item[itemKey]
                                                return (
                                                    <Token key={itemKey} category={catName} type={typeKey} item={itemKey} sizeUnit={sizeUnit} {...subitem} />
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </section>
                        )
                    })}
                </main>
                <Nav tokens={tokens} sizeUnit={sizeUnit} onClickSizeUnit={this.handleClickSizeUnit} />
            </>

        )
    }
}