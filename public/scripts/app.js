"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Page */
var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "page", className: "container-fluid" },
                React.createElement(Header, null),
                React.createElement(ContentLayout, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Page;
}(React.Component);

/* Header */


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "header" },
                React.createElement(InnerHeader, null)
            );
        }
    }]);

    return Header;
}(React.Component);

var InnerHeader = function (_React$Component3) {
    _inherits(InnerHeader, _React$Component3);

    function InnerHeader() {
        _classCallCheck(this, InnerHeader);

        return _possibleConstructorReturn(this, (InnerHeader.__proto__ || Object.getPrototypeOf(InnerHeader)).apply(this, arguments));
    }

    _createClass(InnerHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "inner-header" },
                React.createElement(TopHeader, null),
                React.createElement(MidHeader, null),
                React.createElement(BottomHeader, null)
            );
        }
    }]);

    return InnerHeader;
}(React.Component);

var SocialLink = function SocialLink(nameStr, linkStr) {
    return React.createElement(
        "span",
        { className: "socialLinkSpan" },
        React.createElement(
            "a",
            { href: linkStr },
            React.createElement("i", { className: nameStr + ' fa-1x' })
        )
    );
};

var TopHeader = function (_React$Component4) {
    _inherits(TopHeader, _React$Component4);

    function TopHeader() {
        _classCallCheck(this, TopHeader);

        return _possibleConstructorReturn(this, (TopHeader.__proto__ || Object.getPrototypeOf(TopHeader)).apply(this, arguments));
    }

    _createClass(TopHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "top-header", className: "row" },
                React.createElement(
                    "div",
                    { id: "ticker", className: "col-12 col-sm-8" },
                    React.createElement(
                        "span",
                        { className: "tickerText" },
                        "This is some important ticker news."
                    )
                ),
                React.createElement(
                    "div",
                    { id: "social-icons", className: "col-12 col-sm-4 xsAlignCenterRight" },
                    new SocialLink('fab fa-linkedin', 'https://linkedin.com/in/ChristopherBuck'),
                    new SocialLink('fab fa-twitter-square', 'https://twitter.com/ChrisBuck')
                )
            );
        }
    }]);

    return TopHeader;
}(React.Component);

var Branding = function (_React$Component5) {
    _inherits(Branding, _React$Component5);

    function Branding() {
        _classCallCheck(this, Branding);

        return _possibleConstructorReturn(this, (Branding.__proto__ || Object.getPrototypeOf(Branding)).apply(this, arguments));
    }

    _createClass(Branding, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "branding", className: "col-12 col-sm-11" },
                React.createElement(
                    "div",
                    { id: "title-row", className: "row" },
                    React.createElement(
                        "div",
                        { id: "logo-wrapper", className: "col" },
                        React.createElement(
                            "a",
                            { href: "https://chrisbuck.github.io" },
                            React.createElement(
                                "div",
                                { id: "logo-inner-wrapper" },
                                React.createElement("img", { id: "logo", src: "/public/images/headshot.png" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "title-outer-wrapper", className: "col" },
                        React.createElement(
                            "div",
                            { id: "title-wrapper" },
                            React.createElement(
                                "span",
                                { id: "title" },
                                "chrisbuck.github.io"
                            )
                        )
                    )
                ),
                React.createElement("div", { id: "subtitle-row", className: "row" })
            );
        }
    }]);

    return Branding;
}(React.Component);

var MainMenu = function (_React$Component6) {
    _inherits(MainMenu, _React$Component6);

    function MainMenu() {
        _classCallCheck(this, MainMenu);

        return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
    }

    _createClass(MainMenu, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "main-menu", className: "col-12 col-sm-1" },
                React.createElement(
                    "div",
                    { id: "menu-btn-wrapper" },
                    React.createElement(
                        "a",
                        { id: "main-menu-link", href: "#" },
                        React.createElement("i", { className: "fas fa-bars" })
                    )
                )
            );
        }
    }]);

    return MainMenu;
}(React.Component);

var MidHeader = function (_React$Component7) {
    _inherits(MidHeader, _React$Component7);

    function MidHeader() {
        _classCallCheck(this, MidHeader);

        return _possibleConstructorReturn(this, (MidHeader.__proto__ || Object.getPrototypeOf(MidHeader)).apply(this, arguments));
    }

    _createClass(MidHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "mid-header", className: "row" },
                React.createElement(Branding, null),
                React.createElement(MainMenu, null)
            );
        }
    }]);

    return MidHeader;
}(React.Component);

var BottomHeader = function (_React$Component8) {
    _inherits(BottomHeader, _React$Component8);

    function BottomHeader() {
        _classCallCheck(this, BottomHeader);

        return _possibleConstructorReturn(this, (BottomHeader.__proto__ || Object.getPrototypeOf(BottomHeader)).apply(this, arguments));
    }

    _createClass(BottomHeader, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "bottom-header", className: "row xsDisplayNone" },
                React.createElement(
                    "h3",
                    null,
                    "BottomHeader"
                )
            );
        }
    }]);

    return BottomHeader;
}(React.Component);

/* Content */


function debounce(fn, ms) {
    var _this9 = this,
        _arguments = arguments;

    var timer = void 0;
    return function (_) {
        clearTimeout(timer);
        timer = setTimeout(function (_) {
            timer = null;
            fn.apply(_this9, _arguments);
        }, ms);
    };
}
var DesktopLayout = function DesktopLayout() {
    return React.createElement(
        "div",
        { id: "contentLayout", className: "row" },
        React.createElement(LeftSidebar, null),
        React.createElement(Article, null),
        React.createElement(RightSidebar, null)
    );
};
var MobileLayout = function MobileLayout() {
    return React.createElement(
        "div",
        { id: "contentLayout" },
        React.createElement(Article, null),
        React.createElement(LeftSidebar, null),
        React.createElement(RightSidebar, null)
    );
};

var ContentLayout = function (_React$Component9) {
    _inherits(ContentLayout, _React$Component9);

    function ContentLayout() {
        _classCallCheck(this, ContentLayout);

        return _possibleConstructorReturn(this, (ContentLayout.__proto__ || Object.getPrototypeOf(ContentLayout)).apply(this, arguments));
    }

    _createClass(ContentLayout, [{
        key: "getDimensions",
        value: function getDimensions() {
            var dimensions = {
                height: window.innerHeight,
                width: window.innerWidth
            };
            window.dimensions = dimensions;
            return dimensions;
        }
    }, {
        key: "render",
        value: function render() {
            var _this11 = this;

            var dimensions = this.getDimensions();

            window.addEventListener('resize', function () {
                dimensions = _this11.getDimensions();
                //render();
            });

            return React.createElement(
                "div",
                { id: "main-content", className: "container-fluid" },
                dimensions.width <= 576 ? React.createElement(MobileLayout, null) : null,
                dimensions.width > 576 ? React.createElement(DesktopLayout, null) : null
            );
        }
    }]);

    return ContentLayout;
}(React.Component);

var Content = function (_React$Component10) {
    _inherits(Content, _React$Component10);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "page" },
                React.createElement(LeftSidebar, null),
                React.createElement(Article, null),
                React.createElement(RightSidebar, null)
            );
        }
    }]);

    return Content;
}(React.Component);

var Article = function (_React$Component11) {
    _inherits(Article, _React$Component11);

    function Article() {
        _classCallCheck(this, Article);

        return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
    }

    _createClass(Article, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "article" },
                React.createElement(
                    "h2",
                    null,
                    "Article"
                ),
                React.createElement(Banner, null),
                React.createElement(Entry, null)
            );
        }
    }]);

    return Article;
}(React.Component);

var Banner = function (_React$Component12) {
    _inherits(Banner, _React$Component12);

    function Banner() {
        _classCallCheck(this, Banner);

        return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
    }

    _createClass(Banner, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "banner" },
                React.createElement(
                    "h3",
                    null,
                    "Banner"
                )
            );
        }
    }]);

    return Banner;
}(React.Component);

var Entry = function (_React$Component13) {
    _inherits(Entry, _React$Component13);

    function Entry() {
        _classCallCheck(this, Entry);

        return _possibleConstructorReturn(this, (Entry.__proto__ || Object.getPrototypeOf(Entry)).apply(this, arguments));
    }

    _createClass(Entry, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "entry" },
                React.createElement(
                    "h3",
                    null,
                    "Entry"
                )
            );
        }
    }]);

    return Entry;
}(React.Component);

var LeftSidebar = function (_React$Component14) {
    _inherits(LeftSidebar, _React$Component14);

    function LeftSidebar() {
        _classCallCheck(this, LeftSidebar);

        return _possibleConstructorReturn(this, (LeftSidebar.__proto__ || Object.getPrototypeOf(LeftSidebar)).apply(this, arguments));
    }

    _createClass(LeftSidebar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "left-sidebar" },
                React.createElement(
                    "h2",
                    null,
                    "Left Sidebar"
                )
            );
        }
    }]);

    return LeftSidebar;
}(React.Component);

var RightSidebar = function (_React$Component15) {
    _inherits(RightSidebar, _React$Component15);

    function RightSidebar() {
        _classCallCheck(this, RightSidebar);

        return _possibleConstructorReturn(this, (RightSidebar.__proto__ || Object.getPrototypeOf(RightSidebar)).apply(this, arguments));
    }

    _createClass(RightSidebar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "right-sidebar" },
                React.createElement(
                    "h2",
                    null,
                    "Right Sidebar"
                )
            );
        }
    }]);

    return RightSidebar;
}(React.Component);

var Footer = function (_React$Component16) {
    _inherits(Footer, _React$Component16);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "footer" },
                React.createElement(
                    "h2",
                    null,
                    "Footer"
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var render = function render() {
    var jsx = React.createElement(
        "div",
        null,
        React.createElement(Page, null)
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
