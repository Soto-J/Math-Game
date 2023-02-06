"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.getInputValue = void 0;
function getInputValue(elementId) {
    const inputEl = document.getElementById(elementId);
    return inputEl.value;
}
exports.getInputValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map