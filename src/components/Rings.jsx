import React, { Component } from 'react';

import RingStyle from "./css/Rings.module.scss"

export default class Rings extends Component {
    render() {
        return (
            <div>
                <div className={RingStyle.circleWrapAnimated}>
                    <div className={RingStyle.circle}>
                        <div className={RingStyle.circle} />
                    </div>
                </div>
                <div className={RingStyle.circleWrapAnimatedSecond}>
                    <div className={RingStyle.circle}>
                        <div className={RingStyle.circle} />
                    </div>
                </div>
                <div className={RingStyle.circleWrap}>
                    <div className={RingStyle.circleNoResize} />
                </div>
            </div>
        )
    }
}