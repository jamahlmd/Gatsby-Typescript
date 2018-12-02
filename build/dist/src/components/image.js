"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var gatsby_1 = require("gatsby");
var gatsby_image_1 = require("gatsby-image");
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */
var Image = function () { return (React.createElement(gatsby_1.StaticQuery, { query: gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    "], ["\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    "]))), render: function (data) { return React.createElement(gatsby_image_1.default, { fluid: data.placeholderImage.childImageSharp.fluid }); } })); };
exports.default = Image;
var templateObject_1;
//# sourceMappingURL=image.js.map