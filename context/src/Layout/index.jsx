import React from 'react';
import '../style/common.less';

class Layout extends React.Component {
  render() {
    const { link } = this.props,
      link1 = link[0],
      link2 = link[1];
    return (
      <div>
        {this.props.children}
        <div className="links">
          <a href={link1 + '.html'}>{link1}</a>
          <a href={link2 + '.html'}>{link2}</a>
        </div>

      </div>
    );
  }
}

export default Layout;