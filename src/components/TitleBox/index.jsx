import React, { PureComponent } from "react"

import { TitleBoxStyle } from "./style";


export default class  TitleBox extends PureComponent{

    constructor(props) {
        super(props)
    }
    render(){
        const {title,big}=this.props
        return (
            <TitleBoxStyle>
                <div className={big?"font-big":"font"}>{title}</div>
                <img
                    src={require(`../../assets/imgs/title-box${big?"-"+big:""}.png`)}
                    className={big?"title-box-big":"title-box"}
                />
            </TitleBoxStyle>
        )
    }

}