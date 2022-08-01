"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDAO = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _User = require("../models/User");

var mysql = _interopRequireWildcard(require("mysql"));

var util = _interopRequireWildcard(require("util"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var UserDAO = /*#__PURE__*/function () {
  /**
   * Non-default constructor.
   * 
   * @param host Database Hostname
   * @param username Database Username
   * @param password Database Password
   */
  function UserDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, UserDAO);
    (0, _defineProperty2.default)(this, "host", "");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "schema", "cst391");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    // Set all class properties
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }

  (0, _createClass2.default)(UserDAO, [{
    key: "getAllUsers",
    value: function getAllUsers(callback) {
      var users = [];
      this.pool.getConnection(function (err, connection) {
        // Throw error if an error
        if (err) throw err; // Run query    

        connection.query('SELECT * FROM USERS', function (err, rows, fields) {
          // Release connection in the pool
          connection.release(); // Throw error if an error

          if (err) throw err; // Loop over result set and save the Artist Name in the List of Artists

          for (var x = 0; x < rows.length; ++x) {
            users.push(new _User.User(rows[x].id, rows[x].name, rows[x].password, rows[x].email));
          } // Do a callback to return the results


          callback(users);
        });
      });
    }
  }, {
    key: "getUserById",
    value: function getUserById(userId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var queryResult, user;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  _context.next = 6;
                  return connection.query('SELECT * FROM USERS WHERE ID=?', [userId]);

                case 6:
                  queryResult = _context.sent;

                  if (queryResult.length != 1) {
                    callback(null);
                  }

                  user = new _User.User(queryResult[0].id, queryResult[0].name, queryResult[0].password, queryResult[0].email);
                  callback(user);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "createUser",
    value: function createUser(user, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var queryResponse, userId;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context2.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  connection.query = util.promisify(connection.query);
                  queryResponse = connection.query('INSERT INTO USERS (name, password, string) VALUES (?,?,?)', [user.Name, user.Password, user.Email]);
                  userId = queryResponse.insertId;
                  callback(userId);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "deleteUser",
    value: function deleteUser(userId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var changes, queryResponse;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  connection.release();

                  if (!err) {
                    _context3.next = 3;
                    break;
                  }

                  throw err;

                case 3:
                  changes = 0;
                  connection.query = util.promisify(connection.query);
                  _context3.next = 7;
                  return connection.query("DELETE FROM USERS WHERE ID = ?", [userId]);

                case 7:
                  queryResponse = _context3.sent;
                  changes = changes + queryResponse.affectedRows;
                  callback(changes);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        port: this.port,
        user: this.username,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }]);
  return UserDAO;
}();

exports.UserDAO = UserDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyREFPIiwiaG9zdCIsInBvcnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5pdERiQ29ubmVjdGlvbiIsInBvb2wiLCJjYWxsYmFjayIsInVzZXJzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsInB1c2giLCJVc2VyIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJ1c2VySWQiLCJ1dGlsIiwicHJvbWlzaWZ5IiwicXVlcnlSZXN1bHQiLCJ1c2VyIiwicXVlcnlSZXNwb25zZSIsIk5hbWUiLCJQYXNzd29yZCIsIkVtYWlsIiwiaW5zZXJ0SWQiLCJjaGFuZ2VzIiwiYWZmZWN0ZWRSb3dzIiwibXlzcWwiLCJjcmVhdGVQb29sIiwiZGF0YWJhc2UiLCJzY2hlbWEiLCJjb25uZWN0aW9uTGltaXQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvZGF0YWJhc2UvVXNlckRBTy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCJ1dGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckRBT1xyXG57XHJcbiAgICBwcml2YXRlIGhvc3Q6c3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcG9ydDpudW1iZXIgPSAzMzA2O1xyXG4gICAgcHJpdmF0ZSB1c2VybmFtZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBzY2hlbWE6c3RyaW5nID0gXCJjc3QzOTFcIjtcclxuICAgIHByaXZhdGUgcG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIE5vbi1kZWZhdWx0IGNvbnN0cnVjdG9yLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaG9zdCBEYXRhYmFzZSBIb3N0bmFtZVxyXG4gICAgICogQHBhcmFtIHVzZXJuYW1lIERhdGFiYXNlIFVzZXJuYW1lXHJcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQgRGF0YWJhc2UgUGFzc3dvcmRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyLCB1c2VybmFtZTpzdHJpbmcsIHBhc3N3b3JkOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICAvLyBTZXQgYWxsIGNsYXNzIHByb3BlcnRpZXNcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0aGlzLnBvb2wgPSB0aGlzLmluaXREYkNvbm5lY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsVXNlcnMoY2FsbGJhY2s6IGFueSl7XHJcbiAgICAgICAgbGV0IHVzZXJzOlVzZXJbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXHJcblxyXG4gICAgICAgICAgICAvLyBSdW4gcXVlcnkgICAgXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gVVNFUlMnLCBmdW5jdGlvbiAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRocm93IGVycm9yIGlmIGFuIGVycm9yXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnJcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIHJlc3VsdCBzZXQgYW5kIHNhdmUgdGhlIEFydGlzdCBOYW1lIGluIHRoZSBMaXN0IG9mIEFydGlzdHNcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgeD0wO3ggPCByb3dzLmxlbmd0aDsrK3gpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMucHVzaChuZXcgVXNlcihyb3dzW3hdLmlkLCByb3dzW3hdLm5hbWUsIHJvd3NbeF0ucGFzc3dvcmQsIHJvd3NbeF0uZW1haWwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRG8gYSBjYWxsYmFjayB0byByZXR1cm4gdGhlIHJlc3VsdHNcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVzZXJzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVzZXJCeUlkKHVzZXJJZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5UmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBVU0VSUyBXSEVSRSBJRD0/JywgW3VzZXJJZF0pO1xyXG4gICAgICAgICAgICBpZihxdWVyeVJlc3VsdC5sZW5ndGggIT0gMSl7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHF1ZXJ5UmVzdWx0WzBdLmlkLCBxdWVyeVJlc3VsdFswXS5uYW1lLCBxdWVyeVJlc3VsdFswXS5wYXNzd29yZCwgcXVlcnlSZXN1bHRbMF0uZW1haWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FsbGJhY2sodXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVVzZXIodXNlcjpVc2VyLCBjYWxsYmFjazphbnkpe1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVyclxyXG5cclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXHJcbiAgICAgICAgICAgIGxldCBxdWVyeVJlc3BvbnNlID0gY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gVVNFUlMgKG5hbWUsIHBhc3N3b3JkLCBzdHJpbmcpIFZBTFVFUyAoPyw/LD8pJywgW3VzZXIuTmFtZSwgdXNlci5QYXNzd29yZCwgdXNlci5FbWFpbF0pO1xyXG4gICAgICAgICAgICBsZXQgdXNlcklkID0gcXVlcnlSZXNwb25zZS5pbnNlcnRJZDtcclxuICAgICAgICAgICAgY2FsbGJhY2sodXNlcklkKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVVc2VyKHVzZXJJZDpudW1iZXIsIGNhbGxiYWNrOmFueSl7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXHJcblxyXG4gICAgICAgICAgICBsZXQgY2hhbmdlcyA9IDA7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcclxuICAgICAgICAgICAgbGV0IHF1ZXJ5UmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KFwiREVMRVRFIEZST00gVVNFUlMgV0hFUkUgSUQgPSA/XCIsIFt1c2VySWRdKTtcclxuICAgICAgICAgICAgY2hhbmdlcyA9IGNoYW5nZXMgKyBxdWVyeVJlc3BvbnNlLmFmZmVjdGVkUm93cztcclxuXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGNoYW5nZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdERiQ29ubmVjdGlvbigpOmFueVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBteXNxbC5jcmVhdGVQb29sKHtob3N0OiB0aGlzLmhvc3QsIHBvcnQ6IHRoaXMucG9ydCwgdXNlcjogdGhpcy51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsIGRhdGFiYXNlOiB0aGlzLnNjaGVtYSwgY29ubmVjdGlvbkxpbWl0OiAxMH0pO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OzsrQ0FEQSxvSjs7SUFHYUEsTztFQVNUO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksaUJB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