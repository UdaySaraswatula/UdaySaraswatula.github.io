define(["require", "exports", "preact/jsx-runtime", "oj-c/input-text"], function (require, exports, jsx_runtime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const InputTextCE = 'oj-c-input-text';
    exports.default = () => {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("div", { children: "Custom element" }), (0, jsx_runtime_1.jsx)(InputTextCE, { id: "it1", "data-test-id": "it1", labelHint: "custom-element input text" })] }) }));
    };
});
