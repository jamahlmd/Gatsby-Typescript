"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var header_1 = require("./header");
require("./layout.css");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query SiteTitleQuery {\n        site {\n          siteMetadata {\n            title\n          }\n        }\n      }\n    "], ["\n      query SiteTitleQuery {\n        site {\n          siteMetadata {\n            title\n          }\n        }\n      }\n    "]))), render: function (data) { return (React.createElement(React.Fragment, null,
            React.createElement(react_helmet_1.default, { title: data.site.siteMetadata.title, meta: [
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ] },
                React.createElement("html", { lang: "en" })),
            React.createElement(header_1.default, { siteTitle: data.site.siteMetadata.title }),
            React.createElement("div", { style: {
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                } }, children))); } }));
};
exports.default = Layout;
var templateObject_1;
//# sourceMappingURL=layout.js.map