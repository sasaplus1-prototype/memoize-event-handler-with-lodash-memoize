(function(){

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

  const getClickHandlerMemoize = _.memoize(
    function getClickHandlerMemoize(that) {
      console.log('getClickHandlerMemoize');

      return onClick.bind(that);
    }
  );

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

      return (
        <div>
          <div>memoize</div>
          <button onClick={getClickHandlerMemoize(this)}>update</button>
        </div>
      );
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

      return (
        <div>
          <div>unmemoize</div>
          <button onClick={getClickHandlerUnMemoize(this)}>update</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Memoize />, document.getElementById('js-memoize'));
  ReactDOM.render(<UnMemoize />, document.getElementById('js-unmemoize'));

}());
