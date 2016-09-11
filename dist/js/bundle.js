(function (React,ReactDOM) {
'use strict';

React = 'default' in React ? React['default'] : React;
ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var NavBar=function(_React$Component){inherits(NavBar,_React$Component);function NavBar(){classCallCheck(this,NavBar);return possibleConstructorReturn(this,(NavBar.__proto__||Object.getPrototypeOf(NavBar)).apply(this,arguments))}createClass(NavBar,[{key:"render",/**
     * The common render method.
     * In charge of displaying the top nav.
     */value:function render(){return React.createElement("div",{className:"nav"},React.createElement("div",{className:"container"},React.createElement("a",{href:"#",className:"nav-arrow arrow"}),React.createElement("h1",{className:"nav-text"},this.props.title),React.createElement("span",{className:"nav-subtext"},this.props.subtitle),React.createElement("button",{className:"btn nav-btn"},"Print")))}}]);return NavBar}(React.Component);NavBar.propTypes={title:React.PropTypes.string,subtitle:React.PropTypes.string};

var CustomerInfo=function(_React$Component){inherits(CustomerInfo,_React$Component);function CustomerInfo(){classCallCheck(this,CustomerInfo);return possibleConstructorReturn(this,(CustomerInfo.__proto__||Object.getPrototypeOf(CustomerInfo)).apply(this,arguments))}createClass(CustomerInfo,[{key:'render',/**
     * The common render method.
     * In charge of displaying the customer infos.
     */value:function render(){var stringDate=formatDate(this.props.orderDate);/** Format passed date as `hh:mm (dd-MM-YYYY)` */function formatDate(date){// The 2 lines below are needed for ios
// since new Date(this.props.orderDate) fails on ios
// with the provided data.json date format
var arr=date.split(/[- :]/);date=new Date(arr[0],arr[1]-1,arr[2],arr[3],arr[4]);var MM=date.getMonth()+1+'',dd=''+date.getDate(),mm=''+date.getMinutes(),hh=date.getHours(),YYYY=date.getFullYear();return hh+':'+(!mm[1]?'0':'')+mm+' ('+(!dd[1]?'0':'')+dd+'-'+(!MM[1]?'0':'')+MM+'-'+YYYY+')'}return React.createElement('div',{className:'customer-info block'},React.createElement('p',{className:'text'},React.createElement('span',{className:'text-label'},'Aangevraagd om:'),' ',stringDate),React.createElement('p',{className:'text'},React.createElement('span',{className:'text-label'},'Email:'),' ',this.props.email),React.createElement('p',{className:'text'},React.createElement('span',{className:'text-label'},'Telefoon:'),' ',this.props.tel))}}]);return CustomerInfo}(React.Component);CustomerInfo.propTypes={orderDate:React.PropTypes.string,email:React.PropTypes.string,tel:React.PropTypes.string};

var OrderInfo=function(_React$Component){inherits(OrderInfo,_React$Component);function OrderInfo(){classCallCheck(this,OrderInfo);return possibleConstructorReturn(this,(OrderInfo.__proto__||Object.getPrototypeOf(OrderInfo)).apply(this,arguments))}createClass(OrderInfo,[{key:'render',/**
     * The common render method.
     * In charge of displaying the order status.
     */value:function render(){var assignedDate=parseDate(this.props.assignedDate);function parseDate(date){// The 2 lines below are needed for ios
// since new Date(this.props.orderDate) fails on ios
// with the provided data.json date format
var arr=date.split(/[- :]/);return new Date(arr[0],arr[1]-1,arr[2],arr[3],arr[4])}/** Format passed date as `hh:mm (dd-MM-YYYY)` */function formatTime(date){var mm=''+date.getMinutes();return date.getHours()+':'+(!mm[1]?'0':'')+mm}function formatDate(date){var MM=date.getMonth()+1+'',dd=''+date.getDate(),YYYY=date.getFullYear();return'('+(!dd[1]?'0':'')+dd+'-'+(!MM[1]?'0':'')+MM+'-'+YYYY+')'}return React.createElement('div',{className:'order-info grid block'},React.createElement('div',{className:'unit one-third'},React.createElement('p',{className:'text text-label'},'Status'),React.createElement('p',{className:'text order-status'},this.props.status==='INPROGRESS'?'In behandeling':this.props.status)),React.createElement('div',{className:'unit one-third'},React.createElement('p',{className:'text text-label'},'Door'),React.createElement('p',{className:'text'},this.props.assignee)),React.createElement('div',{className:'unit one-third'},React.createElement('p',{className:'text text-label'},'Om'),React.createElement('p',{className:'text'},formatTime(assignedDate),' ',React.createElement('span',{className:'text-help'},formatDate(assignedDate)))))}}]);return OrderInfo}(React.Component);OrderInfo.propTypes={status:React.PropTypes.string,assignee:React.PropTypes.string,assignedDate:React.PropTypes.string};

var ProductItem=function(_React$Component){inherits(ProductItem,_React$Component);function ProductItem(){classCallCheck(this,ProductItem);return possibleConstructorReturn(this,(ProductItem.__proto__||Object.getPrototypeOf(ProductItem)).apply(this,arguments))}createClass(ProductItem,[{key:'handleChange',/**
     * When the checkbox is clicked will call `onStatusChange` from the parent.
     */value:function handleChange(){this.props.onStatusChange(this.props.item.id,this.refs.checkbox.checked?'RESERVED':'NEW')}/**
     * Prevent selecting image.
     */},{key:'preventSelection',value:function preventSelection(evt){evt.preventDefault()}/**
     * The common render method.
     * In charge of displaying a single product item.
     */},{key:'render',value:function render(){var item=this.props.item,detail=item.product;return React.createElement('li',{className:'product'},React.createElement('label',{className:'product-img custom-checkbox',onMouseDown:this.preventSelection},React.createElement('input',{className:'product-input',type:'checkbox',checked:item.status!=='NEW',onChange:this.handleChange.bind(this),ref:'checkbox'}),React.createElement('span',{className:'custom-checkbox-indicator'}),React.createElement('img',{src:detail.imageUrl})),React.createElement('a',{href:'#',className:'product-desc'},React.createElement('span',{className:'product-arrow arrow'}),React.createElement('div',{className:'bfc'},React.createElement('h3',{className:'product-title text'},detail.name),React.createElement('p',{className:'text-help text'},detail.description))))}}]);return ProductItem}(React.Component);ProductItem.propTypes={item:React.PropTypes.object,onStatusChange:React.PropTypes.func};

var ProductList=function(_React$Component){inherits(ProductList,_React$Component);// eslint-disable-line
function ProductList(props){classCallCheck(this,ProductList);var _this=possibleConstructorReturn(this,(ProductList.__proto__||Object.getPrototypeOf(ProductList)).call(this,props));_this.handleStatusChange=_this.handleStatusChange.bind(_this);_this.state={items:props.products};return _this}/**
     * Will update our items state array if something changed.
     * @param  {Number} id     - The item id.
     * @param  {String} status - The new item status.
     */createClass(ProductList,[{key:'handleStatusChange',value:function handleStatusChange(id,status){var items=this.state.items,index;index=items.findIndex(function(item){return item.id===id});if(index!==-1&&items[index].status!==status){items[index].status=status;this.setState({items:items})}}/**
     * The common render method.
     * In charge of displaying a list of items.
     */},{key:'render',value:function render(){var _this2=this;// Loop over products to create the product items
var items=this.state.items.map(function(item){return React.createElement(ProductItem,{item:item,key:item.id,onStatusChange:_this2.handleStatusChange})});return React.createElement('ul',{className:'product-list block'},items)}}]);return ProductList}(React.Component);ProductList.propTypes={products:React.PropTypes.array};

var CustomerOrder=function(_React$Component){inherits(CustomerOrder,_React$Component);function CustomerOrder(){classCallCheck(this,CustomerOrder);return possibleConstructorReturn(this,(CustomerOrder.__proto__||Object.getPrototypeOf(CustomerOrder)).apply(this,arguments))}createClass(CustomerOrder,[{key:'render',/**
     * The common render method.
     * This is the main react component aka the big view.
     */value:function render(){var order=this.props.order,customer=order.customer;return React.createElement('div',{className:'order'},React.createElement(NavBar,{title:customer.name,subtitle:customer.id}),React.createElement('div',{className:'container'},React.createElement(CustomerInfo,{orderDate:order.placedAt,email:customer.email,tel:customer.phoneNumber}),React.createElement(OrderInfo,{status:order.status,assignee:order.assignee.name,assignedDate:order.assignedAt}),React.createElement(ProductList,{products:order.items})))}}]);return CustomerOrder}(React.Component);CustomerOrder.propTypes={order:React.PropTypes.object};

var get=function get(url,fn){var request=new XMLHttpRequest;request.open('GET',url);request.onreadystatechange=function(){if(request.readyState!==4||request.status!==200)return;else fn(request)};request.send()};/**
* Render the React root component.
* @param  {Object} request - The xhr request.
*/var render$1=function render$1(request){var res;try{res=JSON.parse(request.responseText)}catch(e){throw new SyntaxError('invalid data passed')}if(res&&res.data){ReactDOM.render(React.createElement(CustomerOrder,{order:res.data}),document.querySelector('.site'))}};// Starts the app
get('data/data.json',render$1);

}(React,ReactDOM));