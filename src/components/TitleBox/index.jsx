import React, { PureComponent } from "react"

import { TitleBoxStyle } from "./style";


export default class  TitleBox extends PureComponent{

    constructor(props) {
        super(props)
    }
    render(){
        return (
            <TitleBoxStyle>
                <div className="font">{this.props.title}</div>
                <img
                    src={require("../../assets/imgs/title-box.png")}
                    className="title-box"
                />
            </TitleBoxStyle>
        )
    }

}