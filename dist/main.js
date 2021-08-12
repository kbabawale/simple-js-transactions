/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { addUser, depositFunds, transferFunds, checkBalance, sendOutside } = __webpack_require__(/*! ./controller.js */ \"./controller.js\");\n\nconst initApp = () => {\n    const submitButton = document.querySelector('#submitBtn');\n    submitButton.addEventListener('click', runApp);\n}\n\nconst runApp = () => {\n    addUser({ name: 'User A', balance: 0 });\n    addUser({ name: 'User B', balance: 0 });\n    depositFunds('User A', 10);\n    depositFunds('User B', 20);\n    transferFunds('User B', 'User A', 15);\n    checkBalance('User A');\n    checkBalance('User B');\n    sendOutside('User A', 25);\n}\n\ninitApp();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./controller.js":
/*!***********************!*\
  !*** ./controller.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var AppUsers = [];\n\nexports.addUser = (user) => {\n    AppUsers = [...AppUsers, user];\n    console.log(user, 'ADDED USER');\n    return `${user.name} added`;\n}\n\nexports.depositFunds = (user, amount) => {\n    let foundUser = AppUsers.filter(x => x.name == user)[0];\n    if (foundUser) {\n        foundUser['balance'] += parseInt(amount);\n        let pool = AppUsers.filter(x => x.name !== user);\n        AppUsers = [...pool, foundUser];\n        console.log(foundUser, 'DEPOSITED FUNDS');\n        return true;\n    }\n    return false;\n}\n\nexports.transferFunds = (fromUser, toUser, amount) => {\n    let fromUserFound = AppUsers.filter(x => x.name == fromUser)[0];\n    let toUserFound = AppUsers.filter(x => x.name == toUser)[0];\n\n    if (fromUserFound && toUserFound) {\n        fromUserFound['balance'] -= parseInt(amount);\n        toUserFound['balance'] += parseInt(amount);\n        let pool = AppUsers.filter(x => x.name !== fromUser && x.name !== toUser);\n        AppUsers = [...pool, fromUserFound, toUserFound];\n        console.log(fromUserFound, toUserFound, 'TRANSFERRED FUNDS');\n        return true;\n    }\n    return false;\n}\n\nexports.checkBalance = (user) => {\n    let foundUser = AppUsers.filter(x => x.name == user)[0];\n    if (foundUser) {\n        console.log(foundUser['balance'], 'GOT BALANCE');\n        return foundUser['balance'];\n    }\n    return false;\n}\n\nexports.sendOutside = (user, amount) => {\n    let foundUser = AppUsers.filter(x => x.name == user)[0];\n    if (foundUser) {\n        foundUser['balance'] -= parseInt(amount);\n        let pool = AppUsers.filter(x => x.name !== user);\n        AppUsers = [...pool, foundUser];\n        console.log(foundUser, 'SENT FUNDS OUTSIDE');\n        return true;\n    }\n    return false;\n}\n\n//# sourceURL=webpack:///./controller.js?");

/***/ })

/******/ });