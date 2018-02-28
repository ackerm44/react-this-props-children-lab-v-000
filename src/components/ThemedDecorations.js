import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
        className: this.props.theme
      })
    )
    return (
      <div>
        {children}
      </div>
    )
  }
}





// <ThemedParty theme="heaven">
//   <p>A decoration</p>
//   <p>Some other decoration</p>
//   <p>A last decoration</p>
// </ThemedParty>



// 1. In the `components/ThemedDecorations.js` file, create a `ThemedDecorations` React component.
// 2. This component renders out all of its children, while adding a `className` prop to every child.
