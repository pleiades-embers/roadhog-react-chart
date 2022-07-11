import React, { PureComponent } from "react";

import { CenterTabStyle } from "./style";

export default class CenterTab extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      btnGroup: [
        { name: "邻国", value: "ap", select: false },
        { name: "环太", value: "Asia", select: false },
        { name: "美国", value: "America", select: true },
      ],
    };
  }

  onTabClick = ({ value }) => {
    const { btnGroup } = this.state;

    this.setState({
      btnGroup: btnGroup.map((item) => {
        if (item.value === value) {
          return {
            ...item,
            select: true,
          };
        }
        return {
          ...item,
          select: false,
        };
      }),
    });

    this.props.onClick?.(value);
  };

  render() {
    const { btnGroup } = this.state;
    return (
      <CenterTabStyle>
        {btnGroup.map((item) => {
          return (
            <div onClick={() => this.onTabClick(item)}>
              <img
                src={require(`../../../assets/imgs/${
                  item.select ? "button-active" : "button"
                }.png`)}
                className="btn"
              />
              <div>{item.name}</div>
            </div>
          );
        })}
      </CenterTabStyle>
    );
  }
}
