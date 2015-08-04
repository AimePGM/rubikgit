// Generated by CoffeeScript 1.6.3
(function() {
  var BL, BR, Cube, DB, DBL, DF, DFR, DL, DLF, DR, DRB, FL, FR, UB, UBR, UF, UFL, UL, ULB, UR, URF, cornerColor, cornerFacelet, edgeColor, edgeFacelet, _ref, _ref1, _ref2;

  _ref = [0, 1, 2, 3, 4, 5, 6, 7], URF = _ref[0], UFL = _ref[1], ULB = _ref[2], UBR = _ref[3], DFR = _ref[4], DLF = _ref[5], DBL = _ref[6], DRB = _ref[7];

  _ref1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], UR = _ref1[0], UF = _ref1[1], UL = _ref1[2], UB = _ref1[3], DR = _ref1[4], DF = _ref1[5], DL = _ref1[6], DB = _ref1[7], FR = _ref1[8], FL = _ref1[9], BL = _ref1[10], BR = _ref1[11];

  _ref2 = (function() {
    var B, D, F, L, R, U;
    U = function(x) {
      return x - 1;
    };
    R = function(x) {
      return U(9) + x;
    };
    F = function(x) {
      return R(9) + x;
    };
    D = function(x) {
      return F(9) + x;
    };
    L = function(x) {
      return D(9) + x;
    };
    B = function(x) {
      return L(9) + x;
    };
    return [[[U(9), R(1), F(3)], [U(7), F(1), L(3)], [U(1), L(1), B(3)], [U(3), B(1), R(3)], [D(3), F(9), R(7)], [D(1), L(9), F(7)], [D(7), B(9), L(7)], [D(9), R(9), B(7)]], [[U(6), R(2)], [U(8), F(2)], [U(4), L(2)], [U(2), B(2)], [D(6), R(8)], [D(2), F(8)], [D(4), L(8)], [D(8), B(8)], [F(6), R(4)], [F(4), L(6)], [B(6), L(4)], [B(4), R(6)]]];
  })(), cornerFacelet = _ref2[0], edgeFacelet = _ref2[1];

  cornerColor = [['U', 'R', 'F'], ['U', 'F', 'L'], ['U', 'L', 'B'], ['U', 'B', 'R'], ['D', 'F', 'R'], ['D', 'L', 'F'], ['D', 'B', 'L'], ['D', 'R', 'B']];

  edgeColor = [['U', 'R'], ['U', 'F'], ['U', 'L'], ['U', 'B'], ['D', 'R'], ['D', 'F'], ['D', 'L'], ['D', 'B'], ['F', 'R'], ['F', 'L'], ['B', 'L'], ['B', 'R']];

  Cube = (function() {
    var faceNames, faceNums, parseAlg;

    function Cube(other) {
      var x;
      if (other != null) {
        this.init(other);
      } else {
        this.identity();
      }
      this.newCp = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 7; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
      this.newEp = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 11; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
      this.newCo = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 7; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
      this.newEo = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 11; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
    }

    Cube.prototype.init = function(state) {
      this.cp = state.cp.slice(0);
      this.co = state.co.slice(0);
      this.ep = state.ep.slice(0);
      return this.eo = state.eo.slice(0);
    };

    Cube.prototype.identity = function() {
      var x;
      this.cp = [0, 1, 2, 3, 4, 5, 6, 7];
      this.co = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 7; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
      this.ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      return this.eo = (function() {
        var _i, _results;
        _results = [];
        for (x = _i = 0; _i <= 11; x = ++_i) {
          _results.push(0);
        }
        return _results;
      })();
    };

    Cube.prototype.toJSON = function() {
      return {
        cp: this.cp,
        co: this.co,
        ep: this.ep,
        eo: this.eo
      };
    };

    Cube.prototype.asString = function() {
      var c, corner, edge, i, n, ori, result, _i, _j, _k, _l, _len, _m, _ref3, _ref4;
      result = [];
      _ref3 = [[4, 'U'], [13, 'R'], [22, 'F'], [31, 'D'], [40, 'L'], [49, 'B']];
      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
        _ref4 = _ref3[_i], i = _ref4[0], c = _ref4[1];
        result[i] = c;
      }
      for (i = _j = 0; _j <= 7; i = ++_j) {
        corner = this.cp[i];
        ori = this.co[i];
        for (n = _k = 0; _k <= 2; n = ++_k) {
          result[cornerFacelet[i][(n + ori) % 3]] = cornerColor[corner][n];
        }
      }
      for (i = _l = 0; _l <= 11; i = ++_l) {
        edge = this.ep[i];
        ori = this.eo[i];
        for (n = _m = 0; _m <= 1; n = ++_m) {
          result[edgeFacelet[i][(n + ori) % 2]] = edgeColor[edge][n];
        }
      }
      return result.join('');
    };

    Cube.fromString = function(str) {
      var col1, col2, cube, i, j, ori, _i, _j, _k, _l, _m, _ref3;
      cube = new Cube;
      for (i = _i = 0; _i <= 7; i = ++_i) {
        for (ori = _j = 0; _j <= 2; ori = ++_j) {
          if ((_ref3 = str[cornerFacelet[i][ori]]) === 'U' || _ref3 === 'D') {
            break;
          }
        }
        col1 = str[cornerFacelet[i][(ori + 1) % 3]];
        col2 = str[cornerFacelet[i][(ori + 2) % 3]];
        for (j = _k = 0; _k <= 7; j = ++_k) {
          if (col1 === cornerColor[j][1] && col2 === cornerColor[j][2]) {
            cube.cp[i] = j;
            cube.co[i] = ori % 3;
          }
        }
      }
      for (i = _l = 0; _l <= 11; i = ++_l) {
        for (j = _m = 0; _m <= 11; j = ++_m) {
          if (str[edgeFacelet[i][0]] === edgeColor[j][0] && str[edgeFacelet[i][1]] === edgeColor[j][1]) {
            cube.ep[i] = j;
            cube.eo[i] = 0;
            break;
          }
          if (str[edgeFacelet[i][0]] === edgeColor[j][1] && str[edgeFacelet[i][1]] === edgeColor[j][0]) {
            cube.ep[i] = j;
            cube.eo[i] = 1;
            break;
          }
        }
      }
      return cube;
    };

    Cube.prototype.clone = function() {
      return new Cube(this.toJSON());
    };

    Cube.prototype.randomize = (function() {
      var mixPerm, randOri, randint, result;
      randint = function(min, max) {
        return min + (Math.random() * (max - min + 1) | 0);
      };
      mixPerm = function(arr) {
        var i, max, r, _i, _ref3, _ref4, _ref5, _results;
        max = arr.length - 1;
        _results = [];
        for (i = _i = 0, _ref3 = max - 2; 0 <= _ref3 ? _i <= _ref3 : _i >= _ref3; i = 0 <= _ref3 ? ++_i : --_i) {
          r = randint(i, max);
          if (i !== r) {
            _ref4 = [arr[r], arr[i]], arr[i] = _ref4[0], arr[r] = _ref4[1];
            _results.push((_ref5 = [arr[max - 1], arr[max]], arr[max] = _ref5[0], arr[max - 1] = _ref5[1], _ref5));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      randOri = function(arr, max) {
        var i, ori, _i, _ref3;
        ori = 0;
        for (i = _i = 0, _ref3 = arr.length - 2; 0 <= _ref3 ? _i <= _ref3 : _i >= _ref3; i = 0 <= _ref3 ? ++_i : --_i) {
          ori += (arr[i] = randint(0, max - 1));
        }
        return arr[arr.length - 1] = (max - ori % max) % max;
      };
      result = function() {
        mixPerm(this.cp);
        mixPerm(this.ep);
        randOri(this.co, 3);
        randOri(this.eo, 2);
        return this;
      };
      return result;
    })();

    Cube.random = function() {
      return (new Cube).randomize();
    };

    Cube.prototype.isSolved = function() {
      var c, e, _i, _j;
      for (c = _i = 0; _i <= 7; c = ++_i) {
        if (this.cp[c] !== c) {
          return false;
        }
        if (this.co[c] !== 0) {
          return false;
        }
      }
      for (e = _j = 0; _j <= 11; e = ++_j) {
        if (this.ep[e] !== e) {
          return false;
        }
        if (this.eo[e] !== 0) {
          return false;
        }
      }
      return true;
    };

    Cube.prototype.cornerMultiply = function(other) {
      var from, to, _i, _ref3, _ref4;
      for (to = _i = 0; _i <= 7; to = ++_i) {
        from = other.cp[to];
        this.newCp[to] = this.cp[from];
        this.newCo[to] = (this.co[from] + other.co[to]) % 3;
      }
      _ref3 = [this.newCp, this.cp], this.cp = _ref3[0], this.newCp = _ref3[1];
      _ref4 = [this.newCo, this.co], this.co = _ref4[0], this.newCo = _ref4[1];
      return this;
    };

    Cube.prototype.edgeMultiply = function(other) {
      var from, to, _i, _ref3, _ref4;
      for (to = _i = 0; _i <= 11; to = ++_i) {
        from = other.ep[to];
        this.newEp[to] = this.ep[from];
        this.newEo[to] = (this.eo[from] + other.eo[to]) % 2;
      }
      _ref3 = [this.newEp, this.ep], this.ep = _ref3[0], this.newEp = _ref3[1];
      _ref4 = [this.newEo, this.eo], this.eo = _ref4[0], this.newEo = _ref4[1];
      return this;
    };

    Cube.prototype.multiply = function(other) {
      this.cornerMultiply(other);
      this.edgeMultiply(other);
      return this;
    };

    Cube.moves = [
      {
        cp: [UBR, URF, UFL, ULB, DFR, DLF, DBL, DRB],
        co: [0, 0, 0, 0, 0, 0, 0, 0],
        ep: [UB, UR, UF, UL, DR, DF, DL, DB, FR, FL, BL, BR],
        eo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        cp: [DFR, UFL, ULB, URF, DRB, DLF, DBL, UBR],
        co: [2, 0, 0, 1, 1, 0, 0, 2],
        ep: [FR, UF, UL, UB, BR, DF, DL, DB, DR, FL, BL, UR],
        eo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        cp: [UFL, DLF, ULB, UBR, URF, DFR, DBL, DRB],
        co: [1, 2, 0, 0, 2, 1, 0, 0],
        ep: [UR, FL, UL, UB, DR, FR, DL, DB, UF, DF, BL, BR],
        eo: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0]
      }, {
        cp: [URF, UFL, ULB, UBR, DLF, DBL, DRB, DFR],
        co: [0, 0, 0, 0, 0, 0, 0, 0],
        ep: [UR, UF, UL, UB, DF, DL, DB, DR, FR, FL, BL, BR],
        eo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        cp: [URF, ULB, DBL, UBR, DFR, UFL, DLF, DRB],
        co: [0, 1, 2, 0, 0, 2, 1, 0],
        ep: [UR, UF, BL, UB, DR, DF, FL, DB, FR, UL, DL, BR],
        eo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        cp: [URF, UFL, UBR, DRB, DFR, DLF, ULB, DBL],
        co: [0, 0, 1, 2, 0, 0, 2, 1],
        ep: [UR, UF, UL, BR, DR, DF, DL, BL, FR, FL, UB, DB],
        eo: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1]
      }
    ];

    faceNums = {
      U: 0,
      F: 1,
      L: 2,
      D: 3,
      B: 4,
      R: 5
    };

    faceNames = {
      0: 'U',
      1: 'F',
      2: 'L',
      3: 'D',
      4: 'B',
      5: 'R'
    };

    parseAlg = function(arg) {
      var move, part, power, _i, _len, _ref3, _results;
      if (typeof arg === 'string') {
        _ref3 = arg.split(/\s+/);
        _results = [];
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          part = _ref3[_i];
          if (part.length === 0) {
            continue;
          }
          if (part.length > 2) {
            throw 'Invalid move: ' + part;
          }
          move = faceNums[part[0]];
          if (move === void 0) {
            throw 'Invalid move: ' + part;
          }
          if (part.length === 1) {
            power = 0;
          } else {
            if (part[1] === '2') {
              power = 1;
            } else if (part[1] === "'") {
              power = 2;
            } else {
              throw 'Invalid move: ' + part;
            }
          }
          _results.push(move * 3 + power);
        }
        return _results;
      } else if (arg.length != null) {
        return arg;
      } else {
        return [arg];
      }
    };

    Cube.prototype.move = function(arg) {
      var face, move, power, x, _i, _j, _len, _ref3;
      _ref3 = parseAlg(arg);
      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
        move = _ref3[_i];
        face = move / 3 | 0;
        power = move % 3;
        for (x = _j = 0; 0 <= power ? _j <= power : _j >= power; x = 0 <= power ? ++_j : --_j) {
          this.multiply(Cube.moves[face]);
        }
      }
      return this;
    };

    Cube.inverse = function(arg) {
      var face, move, power, result, str, _i, _len;
      result = (function() {
        var _i, _len, _ref3, _results;
        _ref3 = parseAlg(arg);
        _results = [];
        for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
          move = _ref3[_i];
          face = move / 3 | 0;
          power = move % 3;
          _results.push(face * 3 + -(power - 1) + 1);
        }
        return _results;
      })();
      result.reverse();
      if (typeof arg === 'string') {
        str = '';
        for (_i = 0, _len = result.length; _i < _len; _i++) {
          move = result[_i];
          face = move / 3 | 0;
          power = move % 3;
          str += faceNames[face];
          if (power === 1) {
            str += '2';
          } else if (power === 2) {
            str += "'";
          }
          str += ' ';
        }
        return str.substring(0, str.length - 1);
      } else if (arg.length != null) {
        return result;
      } else {
        return result[0];
      }
    };

    return Cube;

  })();

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Cube;
  } else {
    this.Cube = Cube;
  }

}).call(this);
