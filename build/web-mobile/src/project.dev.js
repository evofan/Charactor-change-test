window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Charactor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd196+621RPyJ8x9vQlPa/y", "Charactor");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Charactor = function(_super) {
      __extends(Charactor, _super);
      function Charactor() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.canvas = null;
        _this.label = null;
        _this.chara = null;
        _this.anim = null;
        _this.clips = null;
        _this.count = 0;
        _this.countMax = 0;
        return _this;
      }
      Charactor.prototype.onLoad = function() {
        var _this = this;
        cc.log(this);
        cc.log(this.canvas);
        cc.log(this.label);
        cc.log(this.chara);
        this.anim = this.chara.getComponent(cc.Animation);
        cc.log(this.anim);
        this.clips = this.anim.getClips();
        cc.log(this.clips);
        this.countMax = this.clips.length - 1;
        this.count++;
        this.canvas.on(cc.Node.EventType.TOUCH_END, function(e) {
          cc.log("TOUCH_END");
          _this.changeAnim();
        }, this.node);
      };
      Charactor.prototype.start = function() {};
      Charactor.prototype.update = function(dt) {};
      Charactor.prototype.changeAnim = function() {
        var clipName = this.clips[this.count].name;
        this.anim.play(clipName);
        this.label.string = clipName;
        this.count++;
        this.count > this.countMax && (this.count = 0);
      };
      __decorate([ property(cc.Node) ], Charactor.prototype, "canvas", void 0);
      __decorate([ property(cc.Label) ], Charactor.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], Charactor.prototype, "chara", void 0);
      __decorate([ property(cc.Animation) ], Charactor.prototype, "anim", void 0);
      __decorate([ property(cc.AnimationClip) ], Charactor.prototype, "clips", void 0);
      __decorate([ property ], Charactor.prototype, "count", void 0);
      Charactor = __decorate([ ccclass ], Charactor);
      return Charactor;
    }(cc.Component);
    exports.default = Charactor;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Main");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
      }
      __decorate([ property(cc.Label) ], Main.prototype, "label", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Charactor", "Main" ]);