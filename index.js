(function () {
  'use strict';

  _.memoize.Cache = WeakMap;

  function onClick() {
    console.log('click update');
    this.setState({
      value: Math.random()
    }, () => {
      console.log(this.state);
    });
  }

  const getClickHandlerMemoize = _.memoize(function getClickHandlerMemoize(that) {
    console.log('getClickHandlerMemoize');
    return onClick.bind(that);
  });

  const getClickHandlerUnMemoize = function getClickHandlerMemoize(that) {
    console.log('getClickHandlerUnMemoize');
    return onClick.bind(that);
  };

  class Memoize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null
      };
    }

    render() {
      console.warn('start render Memoize');
      return React.createElement("div", null, React.createElement("div", null, "memoize"), React.createElement("button", {
        onClick: getClickHandlerMemoize(this)
      }, "update"));
    }

  }

  class UnMemoize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null
      };
    }

    render() {
      console.warn('start render UnMemoize');
      return React.createElement("div", null, React.createElement("div", null, "unmemoize"), React.createElement("button", {
        onClick: getClickHandlerUnMemoize(this)
      }, "update"));
    }

  }

  ReactDOM.render(React.createElement(Memoize, null), document.getElementById('js-memoize'));
  ReactDOM.render(React.createElement(UnMemoize, null), document.getElementById('js-unmemoize'));
})();
