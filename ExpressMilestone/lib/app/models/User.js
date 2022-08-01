"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var User = /*#__PURE__*/function () {
  function User(id, name, password, email) {
    (0, _classCallCheck2.default)(this, User);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "email", "");
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
  }

  (0, _createClass2.default)(User, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "Password",
    get: function get() {
      return this.password;
    },
    set: function set(password) {
      this.password = password;
    }
  }, {
    key: "Email",
    get: function get() {
      return this.email;
    },
    set: function set(email) {
      this.email = email;
    }
  }]);
  return User;
}();

exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VyIiwiaWQiLCJuYW1lIiwicGFzc3dvcmQiLCJlbWFpbCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbHMvVXNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVXNlclxyXG57XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIG5hbWU6c3RyaW5nLCBwYXNzd29yZDpzdHJpbmcsIGVtYWlsOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBJZCgpOm51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgc2V0IElkKGlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE5hbWUoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgc2V0IE5hbWUobmFtZTpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUGFzc3dvcmQoKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZDtcclxuICAgIH1cclxuICAgIHNldCBQYXNzd29yZChwYXNzd29yZDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFbWFpbCgpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xyXG4gICAgfVxyXG4gICAgc2V0IEVtYWlsKGVtYWlsOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxJO0VBT1QsY0FBWUMsRUFBWixFQUF1QkMsSUFBdkIsRUFBb0NDLFFBQXBDLEVBQXFEQyxLQUFyRCxFQUNBO0lBQUE7SUFBQSwwQ0FOcUIsQ0FBQyxDQU10QjtJQUFBLDRDQUx1QixFQUt2QjtJQUFBLGdEQUoyQixFQUkzQjtJQUFBLDZDQUh3QixFQUd4QjtJQUNJLEtBQUtILEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLElBQUwsR0FBWUEsSUFBWjtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBS0MsS0FBTCxHQUFhQSxLQUFiO0VBQ0g7Ozs7U0FFRCxlQUNBO01BQ0ksT0FBTyxLQUFLSCxFQUFaO0lBQ0gsQztTQUNELGFBQU9BLEVBQVAsRUFDQTtNQUNJLEtBQUtBLEVBQUwsR0FBVUEsRUFBVjtJQUNIOzs7U0FFRCxlQUNBO01BQ0ksT0FBTyxLQUFLQyxJQUFaO0lBQ0gsQztTQUNELGFBQVNBLElBQVQsRUFDQTtNQUNJLEtBQUtBLElBQUwsR0FBWUEsSUFBWjtJQUNIOzs7U0FFRCxlQUNBO01BQ0ksT0FBTyxLQUFLQyxRQUFaO0lBQ0gsQztTQUNELGFBQWFBLFFBQWIsRUFDQTtNQUNJLEtBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0g7OztTQUVELGVBQ0E7TUFDSSxPQUFPLEtBQUtDLEtBQVo7SUFDSCxDO1NBQ0QsYUFBVUEsS0FBVixFQUNBO01BQ0ksS0FBS0EsS0FBTCxHQUFhQSxLQUFiO0lBQ0gifQ==