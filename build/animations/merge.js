'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_getElementType=require('../mods/getElementType'),_getElementType2=_interopRequireDefault(_getElementType),_avoidNesting=require('../mods/avoidNesting'),_avoidNesting2=_interopRequireDefault(_avoidNesting),_propsValidator=require('../utils/propsValidator'),_state=require('../utils/state');Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Merge=function(a){function b(){var c,d,e,f;_classCallCheck(this,b);for(var g=arguments.length,h=Array(g),j=0;j<g;j++)h[j]=arguments[j];return f=(d=(e=_possibleConstructorReturn(this,(c=b.__proto__||Object.getPrototypeOf(b)).call.apply(c,[this].concat(h))),e),e.state={styles:{}},e.componentDidMount=function(){e.store(e.props)},e.store=function(k){var l=k.one,m=k.two;e.setState({styles:{animation:''+((0,_state.returnAnimation)(l),(0,_state.returnAnimation)(m)),backfaceVisibility:'visible'}})},d),_possibleConstructorReturn(e,f)}return _inherits(b,a),_createClass(b,[{key:'render',value:function render(){var c=(0,_getElementType2.default)(b,this.props),d=this.state.styles,e=this.props.children,f=(0,_avoidNesting2.default)(c,e);return _react2.default.createElement(f,{style:d},e)}}]),b}(_react.PureComponent);Merge.displayName='Merge',Merge.defaultProps={one:{},two:{},as:'div'},Merge.propTypes={one:_propsValidator.validators.prop,two:_propsValidator.validators.prop,as:(0,_propsValidator.verifyTags)('Merge'),children:(0,_propsValidator.children)('Merge')},exports.default=Merge;