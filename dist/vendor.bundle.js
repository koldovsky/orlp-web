!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,u.__useDefault||u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v&&(c.default=c.__useDefault=v);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:global)

(["a"], [], true, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=0;o<n.length;o++)t[n[o].split(".").pop()]=r(n[o],e);return t}function t(r){if(-1===a.indexOf(r)){try{var n=e[r]}catch(e){a.push(r)}this(r,n)}}var o,i=$__System,a=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.registry.set("@@global-helpers",i.newModule({prepareGlobal:function(r,i,a){var f=e.define;e.define=void 0;var s;if(a){s={};for(var l in a)s[l]=e[l],e[l]=a[l]}return i||(o={},Object.keys(e).forEach(t,function(e,r){o[e]=r})),function(){var r,a=i?n(i):{},l=!!i;if(i||Object.keys(e).forEach(t,function(e,n){o[e]!==n&&void 0!==n&&(i||(a[e]=n,void 0!==r?l||r===n||(l=!0):r=n))}),a=l?a:r,s)for(var c in s)e[c]=s[c];return e.define=f,a}}}))}("undefined"!=typeof self?self:global);
/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() : 'function' === 'function' && true ? $__System.registerDynamic('b', [], false, function ($__require, $__exports, $__module) {
        if (typeof factory === 'function') {
            return factory.call(this);
        } else {
            return factory;
        }
    }) : factory();
})(this, function () {
    'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var Zone$1 = function (global) {
        var performance = global['performance'];
        function mark(name) {
            performance && performance['mark'] && performance['mark'](name);
        }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        if (global['Zone']) {
            throw new Error('Zone already loaded.');
        }
        var Zone = function () {
            function Zone(parent, zoneSpec) {
                this._properties = null;
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            Zone.assertZonePatched = function () {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
                }
            };
            Object.defineProperty(Zone, "root", {
                get: function () {
                    var zone = Zone.current;
                    while (zone.parent) {
                        zone = zone.parent;
                    }
                    return zone;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Zone, "current", {
                get: function () {
                    return _currentZoneFrame.zone;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Zone, "currentTask", {
                get: function () {
                    return _currentTask;
                },
                enumerable: true,
                configurable: true
            });

            Zone.__load_patch = function (name, fn) {
                if (patches.hasOwnProperty(name)) {
                    throw Error('Already loaded patch: ' + name);
                } else if (!global['__Zone_disable_' + name]) {
                    var perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            };
            Object.defineProperty(Zone.prototype, "parent", {
                get: function () {
                    return this._parent;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Zone.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });

            Zone.prototype.get = function (key) {
                var zone = this.getZoneWith(key);
                if (zone) return zone._properties[key];
            };
            Zone.prototype.getZoneWith = function (key) {
                var current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            };
            Zone.prototype.fork = function (zoneSpec) {
                if (!zoneSpec) throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            };
            Zone.prototype.wrap = function (callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                var _callback = this._zoneDelegate.intercept(this, callback, source);
                var zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            };
            Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
                if (applyThis === void 0) {
                    applyThis = undefined;
                }
                if (applyArgs === void 0) {
                    applyArgs = null;
                }
                if (source === void 0) {
                    source = null;
                }
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
                if (applyThis === void 0) {
                    applyThis = null;
                }
                if (applyArgs === void 0) {
                    applyArgs = null;
                }
                if (source === void 0) {
                    source = null;
                }
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    } catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                } finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runTask = function (task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                // we have to define an variable here, if not
                // typescript compiler will complain below
                var isNotScheduled = task.state === notScheduled;
                if (isNotScheduled && task.type === eventTask) {
                    return;
                }
                var reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                var previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = null;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    } catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                } finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || task.data && task.data.isPeriodic) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        } else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            };
            Zone.prototype.scheduleTask = function (task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    var newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                var zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                } catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            };
            Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
            };
            Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.cancelTask = function (task) {
                if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                } catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            };
            Zone.prototype._updateTaskCount = function (task, count) {
                var zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (var i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            };
            return Zone;
        }();
        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
            name: '',
            onHasTask: function (delegate, _, target, hasTaskState) {
                return delegate.hasTask(target, hasTaskState);
            },
            onScheduleTask: function (delegate, _, target, task) {
                return delegate.scheduleTask(target, task);
            },
            onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) {
                return delegate.invokeTask(target, task, applyThis, applyArgs);
            },
            onCancelTask: function (delegate, _, target, task) {
                return delegate.cancelTask(target, task);
            }
        };
        var ZoneDelegate = function () {
            function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
                this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
                this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
                this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
                this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
                this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            };
            ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
                return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            };
            ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.handleError = function (targetZone, error) {
                return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            };
            ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
                var returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    if (!returnTask) returnTask = task;
                } else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    } else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    } else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            };
            ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
                var value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                } else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            };
            ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    return this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                } catch (err) {
                    this.handleError(targetZone, err);
                }
            };
            ZoneDelegate.prototype._updateTaskCount = function (type, count) {
                var counts = this._taskCounts;
                var prev = counts[type];
                var next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    var isEmpty = {
                        microTask: counts.microTask > 0,
                        macroTask: counts.macroTask > 0,
                        eventTask: counts.eventTask > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            };
            return ZoneDelegate;
        }();
        var ZoneTask = function () {
            function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                this._zone = null;
                this.runCount = 0;
                this._zoneDelegates = null;
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                this.callback = callback;
                var self = this;
                this.invoke = function () {
                    _numberOfNestedTaskFrames++;
                    try {
                        self.runCount++;
                        return self.zone.runTask(self, this, arguments);
                    } finally {
                        if (_numberOfNestedTaskFrames == 1) {
                            drainMicroTaskQueue();
                        }
                        _numberOfNestedTaskFrames--;
                    }
                };
            }
            Object.defineProperty(ZoneTask.prototype, "zone", {
                get: function () {
                    return this._zone;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ZoneTask.prototype, "state", {
                get: function () {
                    return this._state;
                },
                enumerable: true,
                configurable: true
            });
            ZoneTask.prototype.cancelScheduleRequest = function () {
                this._transitionTo(notScheduled, scheduling);
            };
            ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                } else {
                    throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
                }
            };
            ZoneTask.prototype.toString = function () {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId;
                } else {
                    return Object.prototype.toString.call(this);
                }
            };
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            ZoneTask.prototype.toJSON = function () {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    invoke: this.invoke,
                    scheduleFn: this.scheduleFn,
                    cancelFn: this.cancelFn,
                    runCount: this.runCount,
                    callback: this.callback
                };
            };
            return ZoneTask;
        }();
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var symbolSetTimeout = __symbol__('setTimeout');
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (global[symbolPromise]) {
                    global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
                } else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    var queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (var i = 0; i < queue.length; i++) {
                        var task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        } catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                var showError = !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var NO_ZONE = { name: 'NO ZONE' };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
            symbol: __symbol__,
            currentZoneFrame: function () {
                return _currentZoneFrame;
            },
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: function () {
                return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
            },
            patchEventTargetMethods: function () {
                return false;
            },
            patchOnProperties: noop
        };
        var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;
        function noop() {}
        function __symbol__(name) {
            return '__zone_symbol__' + name;
        }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        api.onUnhandledError = function (e) {
            if (api.showUncaughtError()) {
                var rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                console.error(e);
            }
        };
        api.microtaskDrainDone = function () {
            while (_uncaughtPromiseErrors.length) {
                var _loop_1 = function () {
                    var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                    try {
                        uncaughtPromiseError.zone.runGuarded(function () {
                            throw uncaughtPromiseError;
                        });
                    } catch (error) {
                        handleUnhandledRejection(error);
                    }
                };
                while (_uncaughtPromiseErrors.length) {
                    _loop_1();
                }
            }
        };
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                var handler = Zone[__symbol__('unhandledPromiseRejectionHandler')];
                if (handler && typeof handler === 'function') {
                    handler.apply(this, [e]);
                }
            } catch (err) {}
        }
        function isThenable(value) {
            return value && value.then;
        }
        function forwardResolution(value) {
            return value;
        }
        function forwardRejection(rejection) {
            return ZoneAwarePromise.reject(rejection);
        }
        var symbolState = __symbol__('state');
        var symbolValue = __symbol__('value');
        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return function (v) {
                try {
                    resolvePromise(promise, state, v);
                } catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        var once = function () {
            var wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            var onceWrapper = once();
            if (promise === value) {
                throw new TypeError('Promise resolved with itself');
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                var then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                } catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                } else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.apply(value, [onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false))]);
                    } catch (err) {
                        onceWrapper(function () {
                            resolvePromise(promise, false, err);
                        })();
                    }
                } else {
                    promise[symbolState] = state;
                    var queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        value[__symbol__('currentTask')] = Zone.currentTask;
                    }
                    for (var i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        try {
                            throw new Error('Uncaught (in promise): ' + value + (value && value.stack ? '\n' + value.stack : ''));
                        } catch (err) {
                            var error_1 = err;
                            error_1.rejection = value;
                            error_1.promise = promise;
                            error_1.zone = Zone.current;
                            error_1.task = Zone.currentTask;
                            _uncaughtPromiseErrors.push(error_1);
                            api.scheduleMicroTask(); // to make sure that it is running
                        }
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    var handler = Zone[__symbol__('rejectionHandledHandler')];
                    if (handler && typeof handler === 'function') {
                        handler.apply(this, [{ rejection: promise[symbolValue], promise: promise }]);
                    }
                } catch (err) {}
                promise[symbolState] = REJECTED;
                for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            var delegate = promise[symbolState] ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, function () {
                try {
                    resolvePromise(chainPromise, true, zone.run(delegate, undefined, [promise[symbolValue]]));
                } catch (error) {
                    resolvePromise(chainPromise, false, error);
                }
            });
        }
        var ZoneAwarePromise = function () {
            function ZoneAwarePromise(executor) {
                var promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                } catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            ZoneAwarePromise.toString = function () {
                return 'function ZoneAwarePromise() { [native code] }';
            };
            ZoneAwarePromise.resolve = function (value) {
                return resolvePromise(new this(null), RESOLVED, value);
            };
            ZoneAwarePromise.reject = function (error) {
                return resolvePromise(new this(null), REJECTED, error);
            };
            ZoneAwarePromise.race = function (values) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    _a = [res, rej], resolve = _a[0], reject = _a[1];
                    var _a;
                });
                function onResolve(value) {
                    promise && (promise = null || resolve(value));
                }
                function onReject(error) {
                    promise && (promise = null || reject(error));
                }
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var value = values_1[_i];
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            };
            ZoneAwarePromise.all = function (values) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                var count = 0;
                var resolvedValues = [];
                for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                    var value = values_2[_i];
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(function (index) {
                        return function (value) {
                            resolvedValues[index] = value;
                            count--;
                            if (!count) {
                                resolve(resolvedValues);
                            }
                        };
                    }(count), reject);
                    count++;
                }
                if (!count) resolve(resolvedValues);
                return promise;
            };
            ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
                var chainPromise = new this.constructor(null);
                var zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                } else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            };
            ZoneAwarePromise.prototype.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            return ZoneAwarePromise;
        }();
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];
        global['Promise'] = ZoneAwarePromise;
        var symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            var proto = Ctor.prototype;
            var originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                var _this = this;
                var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                    originalThen.call(_this, resolve, reject);
                });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        function zoneify(fn) {
            return function () {
                var resultPromise = fn.apply(this, arguments);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                var ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            var fetch_1 = global['fetch'];
            if (typeof fetch_1 == 'function') {
                global['fetch'] = zoneify(fetch_1);
            }
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis}
     */
    var zoneSymbol = function (n) {
        return "__zone_symbol__" + n;
    };
    var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
    function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = Zone.current.wrap(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];
        var _loop_1 = function (i) {
            var name_1 = fnNames[i];
            var delegate = prototype[name_1];
            if (delegate) {
                prototype[name_1] = function (delegate) {
                    var patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                }(delegate);
            }
        };
        for (var i = 0; i < fnNames.length; i++) {
            _loop_1(i);
        }
    }
    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    // Make sure to access `process` through `_global` so that WebPack does not accidently browserify
    // this code.
    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidently browserify
    // this code.
    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
    function patchProperty(obj, prop, prototype) {
        var desc = Object.getOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            var prototypeDesc = Object.getOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        // substr(2) cuz 'onclick' -> 'click', etc
        var eventName = prop.substr(2);
        var _prop = zoneSymbol('_' + prop);
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            var previousValue = target[_prop];
            if (previousValue) {
                target.removeEventListener(eventName, previousValue);
            }
            if (typeof newValue === 'function') {
                var wrapFn = function (event) {
                    var result = newValue.apply(this, arguments);
                    if (result != undefined && !result) {
                        event.preventDefault();
                    }
                    return result;
                };
                target[_prop] = wrapFn;
                target.addEventListener(eventName, wrapFn, false);
            } else {
                target[_prop] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            if (target.hasOwnProperty(_prop)) {
                return target[_prop];
            } else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                var value = originalDescGet && originalDescGet.apply(this);
                if (value) {
                    desc.set.apply(this, [value]);
                    if (typeof target['removeAttribute'] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        Object.defineProperty(obj, prop, desc);
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (var i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        } else {
            var onProperties = [];
            for (var prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (var j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    var EVENT_TASKS = zoneSymbol('eventTasks');
    // For EventTarget
    var ADD_EVENT_LISTENER = 'addEventListener';
    var REMOVE_EVENT_LISTENER = 'removeEventListener';
    // compare the EventListenerOptionsOrCapture
    // 1. if the options is usCapture: boolean, compare the useCpature values directly
    // 2. if the options is EventListerOptions, only compare the capture
    function compareEventListenerOptions(left, right) {
        var leftCapture = typeof left === 'boolean' ? left : typeof left === 'object' ? left && left.capture : false;
        var rightCapture = typeof right === 'boolean' ? right : typeof right === 'object' ? right && right.capture : false;
        return !!leftCapture === !!rightCapture;
    }
    function findExistingRegisteredTask(target, handler, name, options, remove) {
        var eventTasks = target[EVENT_TASKS];
        if (eventTasks) {
            for (var i = 0; i < eventTasks.length; i++) {
                var eventTask = eventTasks[i];
                var data = eventTask.data;
                var listener = data.handler;
                if ((data.handler === handler || listener.listener === handler) && compareEventListenerOptions(data.options, options) && data.eventName === name) {
                    if (remove) {
                        eventTasks.splice(i, 1);
                    }
                    return eventTask;
                }
            }
        }
        return null;
    }
    function attachRegisteredEvent(target, eventTask, isPrepend) {
        var eventTasks = target[EVENT_TASKS];
        if (!eventTasks) {
            eventTasks = target[EVENT_TASKS] = [];
        }
        if (isPrepend) {
            eventTasks.unshift(eventTask);
        } else {
            eventTasks.push(eventTask);
        }
    }
    var defaultListenerMetaCreator = function (self, args) {
        return {
            options: args[2],
            eventName: args[0],
            handler: args[1],
            target: self || _global,
            name: args[0],
            crossContext: false,
            invokeAddFunc: function (addFnSymbol, delegate) {
                // check if the data is cross site context, if it is, fallback to
                // remove the delegate directly and try catch error
                if (!this.crossContext) {
                    if (delegate && delegate.invoke) {
                        return this.target[addFnSymbol](this.eventName, delegate.invoke, this.options);
                    } else {
                        return this.target[addFnSymbol](this.eventName, delegate, this.options);
                    }
                } else {
                    // add a if/else branch here for performance concern, for most times
                    // cross site context is false, so we don't need to try/catch
                    try {
                        return this.target[addFnSymbol](this.eventName, delegate, this.options);
                    } catch (err) {
                        // do nothing here is fine, because objects in a cross-site context are unusable
                    }
                }
            },
            invokeRemoveFunc: function (removeFnSymbol, delegate) {
                // check if the data is cross site context, if it is, fallback to
                // remove the delegate directly and try catch error
                if (!this.crossContext) {
                    if (delegate && delegate.invoke) {
                        return this.target[removeFnSymbol](this.eventName, delegate.invoke, this.options);
                    } else {
                        return this.target[removeFnSymbol](this.eventName, delegate, this.options);
                    }
                } else {
                    // add a if/else branch here for performance concern, for most times
                    // cross site context is false, so we don't need to try/catch
                    try {
                        return this.target[removeFnSymbol](this.eventName, delegate, this.options);
                    } catch (err) {
                        // do nothing here is fine, because objects in a cross-site context are unusable
                    }
                }
            }
        };
    };
    function makeZoneAwareAddListener(addFnName, removeFnName, useCapturingParam, allowDuplicates, isPrepend, metaCreator) {
        if (useCapturingParam === void 0) {
            useCapturingParam = true;
        }
        if (allowDuplicates === void 0) {
            allowDuplicates = false;
        }
        if (isPrepend === void 0) {
            isPrepend = false;
        }
        if (metaCreator === void 0) {
            metaCreator = defaultListenerMetaCreator;
        }
        var addFnSymbol = zoneSymbol(addFnName);
        var removeFnSymbol = zoneSymbol(removeFnName);
        var defaultUseCapturing = useCapturingParam ? false : undefined;
        function scheduleEventListener(eventTask) {
            var meta = eventTask.data;
            attachRegisteredEvent(meta.target, eventTask, isPrepend);
            return meta.invokeAddFunc(addFnSymbol, eventTask);
        }
        function cancelEventListener(eventTask) {
            var meta = eventTask.data;
            findExistingRegisteredTask(meta.target, eventTask.invoke, meta.eventName, meta.options, true);
            return meta.invokeRemoveFunc(removeFnSymbol, eventTask);
        }
        return function zoneAwareAddListener(self, args) {
            var data = metaCreator(self, args);
            data.options = data.options || defaultUseCapturing;
            // - Inside a Web Worker, `this` is undefined, the context is `global`
            // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
            // see https://github.com/angular/zone.js/issues/190
            var delegate = null;
            if (typeof data.handler == 'function') {
                delegate = data.handler;
            } else if (data.handler && data.handler.handleEvent) {
                delegate = function (event) {
                    return data.handler.handleEvent(event);
                };
            }
            var validZoneHandler = false;
            try {
                // In cross site contexts (such as WebDriver frameworks like Selenium),
                // accessing the handler object here will cause an exception to be thrown which
                // will fail tests prematurely.
                validZoneHandler = data.handler && data.handler.toString() === '[object FunctionWrapper]';
            } catch (error) {
                // we can still try to add the data.handler even we are in cross site context
                data.crossContext = true;
                return data.invokeAddFunc(addFnSymbol, data.handler);
            }
            // Ignore special listeners of IE11 & Edge dev tools, see
            // https://github.com/angular/zone.js/issues/150
            if (!delegate || validZoneHandler) {
                return data.invokeAddFunc(addFnSymbol, data.handler);
            }
            if (!allowDuplicates) {
                var eventTask = findExistingRegisteredTask(data.target, data.handler, data.eventName, data.options, false);
                if (eventTask) {
                    // we already registered, so this will have noop.
                    return data.invokeAddFunc(addFnSymbol, eventTask);
                }
            }
            var zone = Zone.current;
            var source = data.target.constructor['name'] + '.' + addFnName + ':' + data.eventName;
            zone.scheduleEventTask(source, delegate, data, scheduleEventListener, cancelEventListener);
        };
    }
    function makeZoneAwareRemoveListener(fnName, useCapturingParam, metaCreator) {
        if (useCapturingParam === void 0) {
            useCapturingParam = true;
        }
        if (metaCreator === void 0) {
            metaCreator = defaultListenerMetaCreator;
        }
        var symbol = zoneSymbol(fnName);
        var defaultUseCapturing = useCapturingParam ? false : undefined;
        return function zoneAwareRemoveListener(self, args) {
            var data = metaCreator(self, args);
            data.options = data.options || defaultUseCapturing;
            // - Inside a Web Worker, `this` is undefined, the context is `global`
            // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
            // see https://github.com/angular/zone.js/issues/190
            var delegate = null;
            if (typeof data.handler == 'function') {
                delegate = data.handler;
            } else if (data.handler && data.handler.handleEvent) {
                delegate = function (event) {
                    return data.handler.handleEvent(event);
                };
            }
            var validZoneHandler = false;
            try {
                // In cross site contexts (such as WebDriver frameworks like Selenium),
                // accessing the handler object here will cause an exception to be thrown which
                // will fail tests prematurely.
                validZoneHandler = data.handler && data.handler.toString() === '[object FunctionWrapper]';
            } catch (error) {
                data.crossContext = true;
                return data.invokeRemoveFunc(symbol, data.handler);
            }
            // Ignore special listeners of IE11 & Edge dev tools, see
            // https://github.com/angular/zone.js/issues/150
            if (!delegate || validZoneHandler) {
                return data.invokeRemoveFunc(symbol, data.handler);
            }
            var eventTask = findExistingRegisteredTask(data.target, data.handler, data.eventName, data.options, true);
            if (eventTask) {
                eventTask.zone.cancelTask(eventTask);
            } else {
                data.invokeRemoveFunc(symbol, data.handler);
            }
        };
    }

    function patchEventTargetMethods(obj, addFnName, removeFnName, metaCreator) {
        if (addFnName === void 0) {
            addFnName = ADD_EVENT_LISTENER;
        }
        if (removeFnName === void 0) {
            removeFnName = REMOVE_EVENT_LISTENER;
        }
        if (metaCreator === void 0) {
            metaCreator = defaultListenerMetaCreator;
        }
        if (obj && obj[addFnName]) {
            patchMethod(obj, addFnName, function () {
                return makeZoneAwareAddListener(addFnName, removeFnName, true, false, false, metaCreator);
            });
            patchMethod(obj, removeFnName, function () {
                return makeZoneAwareRemoveListener(removeFnName, true, metaCreator);
            });
            return true;
        } else {
            return false;
        }
    }
    var originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            var a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                } else {
                    Object.defineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            } else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () {
                            return this[originalInstanceKey][prop];
                        }
                    });
                }
            })(prop);
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function patchMethod(target, name, patchFn) {
        var proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = Object.getPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        var delegateName = zoneSymbol(name);
        var delegate;
        if (proto && !(delegate = proto[delegateName])) {
            delegate = proto[delegateName] = proto[name];
            var patchDelegate_1 = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate_1(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary


    function findEventTask(target, evtName) {
        var eventTasks = target[zoneSymbol('eventTasks')];
        var result = [];
        if (eventTasks) {
            for (var i = 0; i < eventTasks.length; i++) {
                var eventTask = eventTasks[i];
                var data = eventTask.data;
                var eventName = data && data.eventName;
                if (eventName === evtName) {
                    result.push(eventTask);
                }
            }
        }
        return result;
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', function (global, Zone, api) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        Function.prototype.toString = function () {
            if (typeof this === 'function') {
                if (this[zoneSymbol('OriginalDelegate')]) {
                    return originalFunctionToString.apply(this[zoneSymbol('OriginalDelegate')], arguments);
                }
                if (this === Promise) {
                    var nativePromise = global[zoneSymbol('Promise')];
                    if (nativePromise) {
                        return originalFunctionToString.apply(nativePromise, arguments);
                    }
                }
                if (this === Error) {
                    var nativeError = global[zoneSymbol('Error')];
                    if (nativeError) {
                        return originalFunctionToString.apply(nativeError, arguments);
                    }
                }
            }
            return originalFunctionToString.apply(this, arguments);
        };
        // patch Object.prototype.toString to let them look like native
        var originalObjectToString = Object.prototype.toString;
        Object.prototype.toString = function () {
            if (this instanceof Promise) {
                return '[object Promise]';
            }
            return originalObjectToString.apply(this, arguments);
        };
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};
        function scheduleTask(task) {
            var data = task.data;
            function timer() {
                try {
                    task.invoke.apply(this, arguments);
                } finally {
                    if (typeof data.handleId === 'number') {
                        // Node returns complex objects as handleIds
                        delete tasksByHandleId[data.handleId];
                    }
                }
            }
            data.args[0] = timer;
            data.handleId = setNative.apply(window, data.args);
            if (typeof data.handleId === 'number') {
                // Node returns complex objects as handleIds -> no need to keep them around. Additionally,
                // this throws an
                // exception in older node versions and has no effect there, because of the stringified key.
                tasksByHandleId[data.handleId] = task;
            }
            return task;
        }
        function clearTask(task) {
            if (typeof task.data.handleId === 'number') {
                // Node returns complex objects as handleIds
                delete tasksByHandleId[task.data.handleId];
            }
            return clearNative(task.data.handleId);
        }
        setNative = patchMethod(window, setName, function (delegate) {
            return function (self, args) {
                if (typeof args[0] === 'function') {
                    var zone = Zone.current;
                    var options = {
                        handleId: null,
                        isPeriodic: nameSuffix === 'Interval',
                        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : null,
                        args: args
                    };
                    var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    var handle = task.data.handleId;
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    return task;
                } else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
            return function (self, args) {
                var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                } else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            };
        });
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */
    var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
    var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    var _create = Object.create;
    var unconfigurablesKey = zoneSymbol('unconfigurables');
    function propertyPatch() {
        Object.defineProperty = function (obj, prop, desc) {
            if (isUnconfigurable(obj, prop)) {
                throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
            }
            var originalConfigurableFlag = desc.configurable;
            if (prop !== 'prototype') {
                desc = rewriteDescriptor(obj, prop, desc);
            }
            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        };
        Object.defineProperties = function (obj, props) {
            Object.keys(props).forEach(function (prop) {
                Object.defineProperty(obj, prop, props[prop]);
            });
            return obj;
        };
        Object.create = function (obj, proto) {
            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                Object.keys(proto).forEach(function (prop) {
                    proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                });
            }
            return _create(obj, proto);
        };
        Object.getOwnPropertyDescriptor = function (obj, prop) {
            var desc = _getOwnPropertyDescriptor(obj, prop);
            if (isUnconfigurable(obj, prop)) {
                desc.configurable = false;
            }
            return desc;
        };
    }
    function _redefineProperty(obj, prop, desc) {
        var originalConfigurableFlag = desc.configurable;
        desc = rewriteDescriptor(obj, prop, desc);
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }
    function isUnconfigurable(obj, prop) {
        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }
    function rewriteDescriptor(obj, prop, desc) {
        desc.configurable = true;
        if (!desc.configurable) {
            if (!obj[unconfigurablesKey]) {
                _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
            }
            obj[unconfigurablesKey][prop] = true;
        }
        return desc;
    }
    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
        try {
            return _defineProperty(obj, prop, desc);
        } catch (error) {
            if (desc.configurable) {
                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                // retry with the original flag value
                if (typeof originalConfigurableFlag == 'undefined') {
                    delete desc.configurable;
                } else {
                    desc.configurable = originalConfigurableFlag;
                }
                try {
                    return _defineProperty(obj, prop, desc);
                } catch (error) {
                    var descJson = null;
                    try {
                        descJson = JSON.stringify(desc);
                    } catch (error) {
                        descJson = descJson.toString();
                    }
                    console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                }
            } else {
                throw error;
            }
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    function eventTargetPatch(_global) {
        var apis = [];
        var isWtf = _global['wtf'];
        if (isWtf) {
            // Workaround for: https://github.com/google/tracing-framework/issues/555
            apis = WTF_ISSUE_555.split(',').map(function (v) {
                return 'HTML' + v + 'Element';
            }).concat(NO_EVENT_TARGET);
        } else if (_global[EVENT_TARGET]) {
            apis.push(EVENT_TARGET);
        } else {
            // Note: EventTarget is not available in all browsers,
            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
            apis = NO_EVENT_TARGET;
        }
        for (var i = 0; i < apis.length; i++) {
            var type = _global[apis[i]];
            patchEventTargetMethods(type && type.prototype);
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // we have to patch the instance since the proto is non-configurable
    function apply(_global) {
        var WS = _global.WebSocket;
        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
        // On older Chrome, no need since EventTarget was already patched
        if (!_global.EventTarget) {
            patchEventTargetMethods(WS.prototype);
        }
        _global.WebSocket = function (a, b) {
            var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
            var proxySocket;
            // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
            var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
            if (onmessageDesc && onmessageDesc.configurable === false) {
                proxySocket = Object.create(socket);
                ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
                    proxySocket[propName] = function () {
                        return socket[propName].apply(socket, arguments);
                    };
                });
            } else {
                // we can patch the real socket
                proxySocket = socket;
            }
            patchOnProperties(proxySocket, ['close', 'error', 'message', 'open']);
            return proxySocket;
        };
        for (var prop in WS) {
            _global['WebSocket'][prop] = WS[prop];
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
    var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange'];
    var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplyconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
    var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function propertyDescriptorPatch(_global) {
        if (isNode && !isMix) {
            return;
        }
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        if (canPatchViaPropertyDescriptor()) {
            // for browsers that we can patch the descriptor:  Chrome & Firefox
            if (isBrowser) {
                // in IE/Edge, onProp not exist in window object, but in WindowPrototype
                // so we need to pass WindowPrototype to check onProp exist or not
                patchOnProperties(window, eventNames, Object.getPrototypeOf(window));
                patchOnProperties(Document.prototype, eventNames);
                if (typeof window['SVGElement'] !== 'undefined') {
                    patchOnProperties(window['SVGElement'].prototype, eventNames);
                }
                patchOnProperties(Element.prototype, eventNames);
                patchOnProperties(HTMLElement.prototype, eventNames);
                patchOnProperties(HTMLMediaElement.prototype, mediaElementEventNames);
                patchOnProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames));
                patchOnProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames));
                patchOnProperties(HTMLFrameElement.prototype, frameEventNames);
                patchOnProperties(HTMLIFrameElement.prototype, frameEventNames);
                var HTMLMarqueeElement_1 = window['HTMLMarqueeElement'];
                if (HTMLMarqueeElement_1) {
                    patchOnProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames);
                }
            }
            patchOnProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames);
            var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                patchOnProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames);
            }
            if (typeof IDBIndex !== 'undefined') {
                patchOnProperties(IDBIndex.prototype, IDBIndexEventNames);
                patchOnProperties(IDBRequest.prototype, IDBIndexEventNames);
                patchOnProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames);
                patchOnProperties(IDBDatabase.prototype, IDBIndexEventNames);
                patchOnProperties(IDBTransaction.prototype, IDBIndexEventNames);
                patchOnProperties(IDBCursor.prototype, IDBIndexEventNames);
            }
            if (supportsWebSocket) {
                patchOnProperties(WebSocket.prototype, websocketEventNames);
            }
        } else {
            // Safari, Android browsers (Jelly Bean)
            patchViaCapturingAllTheEvents();
            patchClass('XMLHttpRequest');
            if (supportsWebSocket) {
                apply(_global);
            }
        }
    }
    function canPatchViaPropertyDescriptor() {
        if ((isBrowser || isMix) && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
            // IDL interface attributes are not configurable
            var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
            if (desc && !desc.configurable) return false;
        }
        var xhrDesc = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'onreadystatechange');
        // add enumerable and configurable here because in opera
        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
        // without adding enumerable and configurable will cause onreadystatechange
        // non-configurable
        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
        // we should set a real desc instead a fake one
        if (xhrDesc) {
            Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var req = new XMLHttpRequest();
            var result = !!req.onreadystatechange;
            // restore original desc
            Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', xhrDesc || {});
            return result;
        } else {
            Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
                enumerable: true,
                configurable: true,
                get: function () {
                    return this[zoneSymbol('fakeonreadystatechange')];
                },
                set: function (value) {
                    this[zoneSymbol('fakeonreadystatechange')] = value;
                }
            });
            var req = new XMLHttpRequest();
            var detectFunc = function () {};
            req.onreadystatechange = detectFunc;
            var result = req[zoneSymbol('fakeonreadystatechange')] === detectFunc;
            req.onreadystatechange = null;
            return result;
        }
    }

    var unboundKey = zoneSymbol('unbound');
    // Whenever any eventListener fires, we check the eventListener target and all parents
    // for `onwhatever` properties and replace them with zone-bound functions
    // - Chrome (for now)
    function patchViaCapturingAllTheEvents() {
        var _loop_1 = function (i) {
            var property = eventNames[i];
            var onproperty = 'on' + property;
            self.addEventListener(property, function (event) {
                var elt = event.target,
                    bound,
                    source;
                if (elt) {
                    source = elt.constructor['name'] + '.' + onproperty;
                } else {
                    source = 'unknown.' + onproperty;
                }
                while (elt) {
                    if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                        bound = Zone.current.wrap(elt[onproperty], source);
                        bound[unboundKey] = elt[onproperty];
                        elt[onproperty] = bound;
                    }
                    elt = elt.parentElement;
                }
            }, true);
        };
        for (var i = 0; i < eventNames.length; i++) {
            _loop_1(i);
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function registerElementPatch(_global) {
        if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
            return;
        }
        var _registerElement = document.registerElement;
        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
        document.registerElement = function (name, opts) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    var source = 'Document.registerElement::' + callback;
                    if (opts.prototype.hasOwnProperty(callback)) {
                        var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = Zone.current.wrap(descriptor.value, source);
                            _redefineProperty(opts.prototype, callback, descriptor);
                        } else {
                            opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                        }
                    } else if (opts.prototype[callback]) {
                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                    }
                });
            }
            return _registerElement.apply(document, [name, opts]);
        };
        attachOriginToPatched(document.registerElement, _registerElement);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('timers', function (global, Zone, api) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone, api) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];
        for (var i = 0; i < blockingMethods.length; i++) {
            var name_1 = blockingMethods[i];
            patchMethod(global, name_1, function (delegate, symbol, name) {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
        eventTargetPatch(global);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            patchEventTargetMethods(XMLHttpRequestEventTarget.prototype);
        }
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(global);
        propertyPatch();
        registerElementPatch(global);
    });
    Zone.__load_patch('XHR', function (global, Zone, api) {
        // Treat XMLHTTPRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        function patchXHR(window) {
            function findPendingTask(target) {
                var pendingTask = target[XHR_TASK];
                return pendingTask;
            }
            function scheduleTask(task) {
                XMLHttpRequest[XHR_SCHEDULED] = false;
                var data = task.data;
                // remove existing event listener
                var listener = data.target[XHR_LISTENER];
                if (listener) {
                    data.target.removeEventListener('readystatechange', listener);
                }
                var newListener = data.target[XHR_LISTENER] = function () {
                    if (data.target.readyState === data.target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] && task.state === 'scheduled') {
                            task.invoke();
                        }
                    }
                };
                data.target.addEventListener('readystatechange', newListener);
                var storedTask = data.target[XHR_TASK];
                if (!storedTask) {
                    data.target[XHR_TASK] = task;
                }
                sendNative.apply(data.target, data.args);
                XMLHttpRequest[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() {}
            function clearTask(task) {
                var data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () {
                return function (self, args) {
                    self[XHR_SYNC] = args[2] == false;
                    return openNative.apply(self, args);
                };
            });
            var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () {
                return function (self, args) {
                    var zone = Zone.current;
                    if (self[XHR_SYNC]) {
                        // if the XHR is sync there is no task to schedule, just execute the code.
                        return sendNative.apply(self, args);
                    } else {
                        var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
                        return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
                    }
                };
            });
            var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) {
                return function (self, args) {
                    var task = findPendingTask(self);
                    if (task && typeof task.type == 'string') {
                        // If the XHR has already completed, do nothing.
                        // If the XHR has already been aborted, do nothing.
                        // Fix #569, call abort multiple times before done will cause
                        // macroTask task count be negative number
                        if (task.cancelFn == null || task.data && task.data.aborted) {
                            return;
                        }
                        task.zone.cancelTask(task);
                    }
                    // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                    // task
                    // to cancel. Do nothing.
                };
            });
        }
    });
    Zone.__load_patch('geolocation', function (global, Zone, api) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone, api) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                var eventTasks = findEventTask(global, evtName);
                eventTasks.forEach(function (eventTask) {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
    });
    Zone.__load_patch('util', function (global, Zone, api) {
        api.patchEventTargetMethods = patchEventTargetMethods;
        api.patchOnProperties = patchOnProperties;
    });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
});
$__System.registerDynamic("c", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = $__System.registry.get("@@global-helpers").prepareGlobal($__module.id, null, null);

    (function ($__global) {
        var Reflect = $__global["Reflect"];
        /*! *****************************************************************************
        Copyright (C) Microsoft. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0
        
        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.
        
        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */
        var Reflect;
        (function (Reflect) {
            "use strict";

            var hasOwn = Object.prototype.hasOwnProperty;
            // feature test for Symbol support
            var supportsSymbol = typeof Symbol === "function";
            var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
            var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
            var HashMap;
            (function (HashMap) {
                var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
                var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
                var downLevel = !supportsCreate && !supportsProto;
                // create an object in dictionary mode (a.k.a. "slow" mode in v8)
                HashMap.create = supportsCreate ? function () {
                    return MakeDictionary(Object.create(null));
                } : supportsProto ? function () {
                    return MakeDictionary({ __proto__: null });
                } : function () {
                    return MakeDictionary({});
                };
                HashMap.has = downLevel ? function (map, key) {
                    return hasOwn.call(map, key);
                } : function (map, key) {
                    return key in map;
                };
                HashMap.get = downLevel ? function (map, key) {
                    return hasOwn.call(map, key) ? map[key] : undefined;
                } : function (map, key) {
                    return map[key];
                };
            })(HashMap || (HashMap = {}));
            // Load global or shim versions of Map, Set, and WeakMap
            var functionPrototype = Object.getPrototypeOf(Function);
            var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
            var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
            var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
            var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
            // [[Metadata]] internal slot
            // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
            var Metadata = new _WeakMap();
            /**
              * Applies a set of decorators to a property of a target object.
              * @param decorators An array of decorators.
              * @param target The target object.
              * @param propertyKey (Optional) The property key to decorate.
              * @param attributes (Optional) The property descriptor for the target key.
              * @remarks Decorators are applied in reverse order.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     Example = Reflect.decorate(decoratorsArray, Example);
              *
              *     // property (on constructor)
              *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
              *
              *     // property (on prototype)
              *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
              *
              *     // method (on constructor)
              *     Object.defineProperty(Example, "staticMethod",
              *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
              *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
              *
              *     // method (on prototype)
              *     Object.defineProperty(Example.prototype, "method",
              *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
              *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
              *
              */
            function decorate(decorators, target, propertyKey, attributes) {
                if (!IsUndefined(propertyKey)) {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsObject(target)) throw new TypeError();
                    if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
                    if (IsNull(attributes)) attributes = undefined;
                    propertyKey = ToPropertyKey(propertyKey);
                    return DecorateProperty(decorators, target, propertyKey, attributes);
                } else {
                    if (!IsArray(decorators)) throw new TypeError();
                    if (!IsConstructor(target)) throw new TypeError();
                    return DecorateConstructor(decorators, target);
                }
            }
            Reflect.decorate = decorate;
            // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
            // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
            /**
              * A default metadata decorator factory that can be used on a class, class member, or parameter.
              * @param metadataKey The key for the metadata entry.
              * @param metadataValue The value for the metadata entry.
              * @returns A decorator function.
              * @remarks
              * If `metadataKey` is already defined for the target and target key, the
              * metadataValue for that key will be overwritten.
              * @example
              *
              *     // constructor
              *     @Reflect.metadata(key, value)
              *     class Example {
              *     }
              *
              *     // property (on constructor, TypeScript only)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         static staticProperty;
              *     }
              *
              *     // property (on prototype, TypeScript only)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         property;
              *     }
              *
              *     // method (on constructor)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         static staticMethod() { }
              *     }
              *
              *     // method (on prototype)
              *     class Example {
              *         @Reflect.metadata(key, value)
              *         method() { }
              *     }
              *
              */
            function metadata(metadataKey, metadataValue) {
                function decorator(target, propertyKey) {
                    if (!IsObject(target)) throw new TypeError();
                    if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
                    OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
                }
                return decorator;
            }
            Reflect.metadata = metadata;
            /**
              * Define a unique metadata entry on the target.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param metadataValue A value that contains attached metadata.
              * @param target The target object on which to define metadata.
              * @param propertyKey (Optional) The property key for the target.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     Reflect.defineMetadata("custom:annotation", options, Example);
              *
              *     // property (on constructor)
              *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
              *
              *     // property (on prototype)
              *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
              *
              *     // method (on constructor)
              *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
              *
              *     // method (on prototype)
              *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
              *
              *     // decorator factory as metadata-producing annotation.
              *     function MyAnnotation(options): Decorator {
              *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
              *     }
              *
              */
            function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            Reflect.defineMetadata = defineMetadata;
            /**
              * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.hasMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function hasMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasMetadata(metadataKey, target, propertyKey);
            }
            Reflect.hasMetadata = hasMetadata;
            /**
              * Gets a value indicating whether the target object has the provided metadata key defined.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function hasOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
            }
            Reflect.hasOwnMetadata = hasOwnMetadata;
            /**
              * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function getMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetMetadata(metadataKey, target, propertyKey);
            }
            Reflect.getMetadata = getMetadata;
            /**
              * Gets the metadata value for the provided metadata key on the target object.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getOwnMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function getOwnMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
            }
            Reflect.getOwnMetadata = getOwnMetadata;
            /**
              * Gets the metadata keys defined on the target object or its prototype chain.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns An array of unique metadata keys.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getMetadataKeys(Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getMetadataKeys(Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getMetadataKeys(Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getMetadataKeys(Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getMetadataKeys(Example.prototype, "method");
              *
              */
            function getMetadataKeys(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryMetadataKeys(target, propertyKey);
            }
            Reflect.getMetadataKeys = getMetadataKeys;
            /**
              * Gets the unique metadata keys defined on the target object.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns An array of unique metadata keys.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.getOwnMetadataKeys(Example);
              *
              *     // property (on constructor)
              *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
              *
              */
            function getOwnMetadataKeys(target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                return OrdinaryOwnMetadataKeys(target, propertyKey);
            }
            Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
            /**
              * Deletes the metadata entry from the target object with the provided key.
              * @param metadataKey A key used to store and retrieve metadata.
              * @param target The target object on which the metadata is defined.
              * @param propertyKey (Optional) The property key for the target.
              * @returns `true` if the metadata entry was found and deleted; otherwise, false.
              * @example
              *
              *     class Example {
              *         // property declarations are not part of ES6, though they are valid in TypeScript:
              *         // static staticProperty;
              *         // property;
              *
              *         constructor(p) { }
              *         static staticMethod(p) { }
              *         method(p) { }
              *     }
              *
              *     // constructor
              *     result = Reflect.deleteMetadata("custom:annotation", Example);
              *
              *     // property (on constructor)
              *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
              *
              *     // property (on prototype)
              *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
              *
              *     // method (on constructor)
              *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
              *
              *     // method (on prototype)
              *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
              *
              */
            function deleteMetadata(metadataKey, target, propertyKey) {
                if (!IsObject(target)) throw new TypeError();
                if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
                var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/false);
                if (IsUndefined(metadataMap)) return false;
                if (!metadataMap.delete(metadataKey)) return false;
                if (metadataMap.size > 0) return true;
                var targetMetadata = Metadata.get(target);
                targetMetadata.delete(propertyKey);
                if (targetMetadata.size > 0) return true;
                Metadata.delete(target);
                return true;
            }
            Reflect.deleteMetadata = deleteMetadata;
            function DecorateConstructor(decorators, target) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsConstructor(decorated)) throw new TypeError();
                        target = decorated;
                    }
                }
                return target;
            }
            function DecorateProperty(decorators, target, propertyKey, descriptor) {
                for (var i = decorators.length - 1; i >= 0; --i) {
                    var decorator = decorators[i];
                    var decorated = decorator(target, propertyKey, descriptor);
                    if (!IsUndefined(decorated) && !IsNull(decorated)) {
                        if (!IsObject(decorated)) throw new TypeError();
                        descriptor = decorated;
                    }
                }
                return descriptor;
            }
            function GetOrCreateMetadataMap(O, P, Create) {
                var targetMetadata = Metadata.get(O);
                if (IsUndefined(targetMetadata)) {
                    if (!Create) return undefined;
                    targetMetadata = new _Map();
                    Metadata.set(O, targetMetadata);
                }
                var metadataMap = targetMetadata.get(P);
                if (IsUndefined(metadataMap)) {
                    if (!Create) return undefined;
                    metadataMap = new _Map();
                    targetMetadata.set(P, metadataMap);
                }
                return metadataMap;
            }
            // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
            function OrdinaryHasMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return true;
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
                return false;
            }
            // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
            function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return false;
                return ToBoolean(metadataMap.has(MetadataKey));
            }
            // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
            function OrdinaryGetMetadata(MetadataKey, O, P) {
                var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
                if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
                return undefined;
            }
            // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
            function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return undefined;
                return metadataMap.get(MetadataKey);
            }
            // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
            function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/true);
                metadataMap.set(MetadataKey, MetadataValue);
            }
            // 3.1.6.1 OrdinaryMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
            function OrdinaryMetadataKeys(O, P) {
                var ownKeys = OrdinaryOwnMetadataKeys(O, P);
                var parent = OrdinaryGetPrototypeOf(O);
                if (parent === null) return ownKeys;
                var parentKeys = OrdinaryMetadataKeys(parent, P);
                if (parentKeys.length <= 0) return ownKeys;
                if (ownKeys.length <= 0) return parentKeys;
                var set = new _Set();
                var keys = [];
                for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                    var key = ownKeys_1[_i];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                    var key = parentKeys_1[_a];
                    var hasKey = set.has(key);
                    if (!hasKey) {
                        set.add(key);
                        keys.push(key);
                    }
                }
                return keys;
            }
            // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
            // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
            function OrdinaryOwnMetadataKeys(O, P) {
                var keys = [];
                var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
                if (IsUndefined(metadataMap)) return keys;
                var keysObj = metadataMap.keys();
                var iterator = GetIterator(keysObj);
                var k = 0;
                while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                        keys.length = k;
                        return keys;
                    }
                    var nextValue = IteratorValue(next);
                    try {
                        keys[k] = nextValue;
                    } catch (e) {
                        try {
                            IteratorClose(iterator);
                        } finally {
                            throw e;
                        }
                    }
                    k++;
                }
            }
            // 6 ECMAScript Data Typ0es and Values
            // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
            function Type(x) {
                if (x === null) return 1 /* Null */;
                switch (typeof x) {
                    case "undefined":
                        return 0 /* Undefined */;
                    case "boolean":
                        return 2 /* Boolean */;
                    case "string":
                        return 3 /* String */;
                    case "symbol":
                        return 4 /* Symbol */;
                    case "number":
                        return 5 /* Number */;
                    case "object":
                        return x === null ? 1 /* Null */ : 6 /* Object */;
                    default:
                        return 6 /* Object */;
                }
            }
            // 6.1.1 The Undefined Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
            function IsUndefined(x) {
                return x === undefined;
            }
            // 6.1.2 The Null Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
            function IsNull(x) {
                return x === null;
            }
            // 6.1.5 The Symbol Type
            // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
            function IsSymbol(x) {
                return typeof x === "symbol";
            }
            // 6.1.7 The Object Type
            // https://tc39.github.io/ecma262/#sec-object-type
            function IsObject(x) {
                return typeof x === "object" ? x !== null : typeof x === "function";
            }
            // 7.1 Type Conversion
            // https://tc39.github.io/ecma262/#sec-type-conversion
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // https://tc39.github.io/ecma262/#sec-toprimitive
            function ToPrimitive(input, PreferredType) {
                switch (Type(input)) {
                    case 0 /* Undefined */:
                        return input;
                    case 1 /* Null */:
                        return input;
                    case 2 /* Boolean */:
                        return input;
                    case 3 /* String */:
                        return input;
                    case 4 /* Symbol */:
                        return input;
                    case 5 /* Number */:
                        return input;
                }
                var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
                var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
                if (exoticToPrim !== undefined) {
                    var result = exoticToPrim.call(input, hint);
                    if (IsObject(result)) throw new TypeError();
                    return result;
                }
                return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
            }
            // 7.1.1.1 OrdinaryToPrimitive(O, hint)
            // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
            function OrdinaryToPrimitive(O, hint) {
                if (hint === "string") {
                    var toString_1 = O.toString;
                    if (IsCallable(toString_1)) {
                        var result = toString_1.call(O);
                        if (!IsObject(result)) return result;
                    }
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result)) return result;
                    }
                } else {
                    var valueOf = O.valueOf;
                    if (IsCallable(valueOf)) {
                        var result = valueOf.call(O);
                        if (!IsObject(result)) return result;
                    }
                    var toString_2 = O.toString;
                    if (IsCallable(toString_2)) {
                        var result = toString_2.call(O);
                        if (!IsObject(result)) return result;
                    }
                }
                throw new TypeError();
            }
            // 7.1.2 ToBoolean(argument)
            // https://tc39.github.io/ecma262/2016/#sec-toboolean
            function ToBoolean(argument) {
                return !!argument;
            }
            // 7.1.12 ToString(argument)
            // https://tc39.github.io/ecma262/#sec-tostring
            function ToString(argument) {
                return "" + argument;
            }
            // 7.1.14 ToPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-topropertykey
            function ToPropertyKey(argument) {
                var key = ToPrimitive(argument, 3 /* String */);
                if (IsSymbol(key)) return key;
                return ToString(key);
            }
            // 7.2 Testing and Comparison Operations
            // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
            // 7.2.2 IsArray(argument)
            // https://tc39.github.io/ecma262/#sec-isarray
            function IsArray(argument) {
                return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
            }
            // 7.2.3 IsCallable(argument)
            // https://tc39.github.io/ecma262/#sec-iscallable
            function IsCallable(argument) {
                // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
                return typeof argument === "function";
            }
            // 7.2.4 IsConstructor(argument)
            // https://tc39.github.io/ecma262/#sec-isconstructor
            function IsConstructor(argument) {
                // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
                return typeof argument === "function";
            }
            // 7.2.7 IsPropertyKey(argument)
            // https://tc39.github.io/ecma262/#sec-ispropertykey
            function IsPropertyKey(argument) {
                switch (Type(argument)) {
                    case 3 /* String */:
                        return true;
                    case 4 /* Symbol */:
                        return true;
                    default:
                        return false;
                }
            }
            // 7.3 Operations on Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-objects
            // 7.3.9 GetMethod(V, P)
            // https://tc39.github.io/ecma262/#sec-getmethod
            function GetMethod(V, P) {
                var func = V[P];
                if (func === undefined || func === null) return undefined;
                if (!IsCallable(func)) throw new TypeError();
                return func;
            }
            // 7.4 Operations on Iterator Objects
            // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
            function GetIterator(obj) {
                var method = GetMethod(obj, iteratorSymbol);
                if (!IsCallable(method)) throw new TypeError(); // from Call
                var iterator = method.call(obj);
                if (!IsObject(iterator)) throw new TypeError();
                return iterator;
            }
            // 7.4.4 IteratorValue(iterResult)
            // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
            function IteratorValue(iterResult) {
                return iterResult.value;
            }
            // 7.4.5 IteratorStep(iterator)
            // https://tc39.github.io/ecma262/#sec-iteratorstep
            function IteratorStep(iterator) {
                var result = iterator.next();
                return result.done ? false : result;
            }
            // 7.4.6 IteratorClose(iterator, completion)
            // https://tc39.github.io/ecma262/#sec-iteratorclose
            function IteratorClose(iterator) {
                var f = iterator["return"];
                if (f) f.call(iterator);
            }
            // 9.1 Ordinary Object Internal Methods and Internal Slots
            // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
            // 9.1.1.1 OrdinaryGetPrototypeOf(O)
            // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
            function OrdinaryGetPrototypeOf(O) {
                var proto = Object.getPrototypeOf(O);
                if (typeof O !== "function" || O === functionPrototype) return proto;
                // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
                // Try to determine the superclass constructor. Compatible implementations
                // must either set __proto__ on a subclass constructor to the superclass constructor,
                // or ensure each class has a valid `constructor` property on its prototype that
                // points back to the constructor.
                // If this is not the same as Function.[[Prototype]], then this is definately inherited.
                // This is the case when in ES6 or when using __proto__ in a compatible browser.
                if (proto !== functionPrototype) return proto;
                // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
                var prototype = O.prototype;
                var prototypeProto = prototype && Object.getPrototypeOf(prototype);
                if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
                // If the constructor was not a function, then we cannot determine the heritage.
                var constructor = prototypeProto.constructor;
                if (typeof constructor !== "function") return proto;
                // If we have some kind of self-reference, then we cannot determine the heritage.
                if (constructor === O) return proto;
                // we have a pretty good guess at the heritage.
                return constructor;
            }
            // naive Map shim
            function CreateMapPolyfill() {
                var cacheSentinel = {};
                var arraySentinel = [];
                var MapIterator = function () {
                    function MapIterator(keys, values, selector) {
                        this._index = 0;
                        this._keys = keys;
                        this._values = values;
                        this._selector = selector;
                    }
                    MapIterator.prototype["@@iterator"] = function () {
                        return this;
                    };
                    MapIterator.prototype[iteratorSymbol] = function () {
                        return this;
                    };
                    MapIterator.prototype.next = function () {
                        var index = this._index;
                        if (index >= 0 && index < this._keys.length) {
                            var result = this._selector(this._keys[index], this._values[index]);
                            if (index + 1 >= this._keys.length) {
                                this._index = -1;
                                this._keys = arraySentinel;
                                this._values = arraySentinel;
                            } else {
                                this._index++;
                            }
                            return { value: result, done: false };
                        }
                        return { value: undefined, done: true };
                    };
                    MapIterator.prototype.throw = function (error) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        throw error;
                    };
                    MapIterator.prototype.return = function (value) {
                        if (this._index >= 0) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        return { value: value, done: true };
                    };
                    return MapIterator;
                }();
                return function () {
                    function Map() {
                        this._keys = [];
                        this._values = [];
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    Object.defineProperty(Map.prototype, "size", {
                        get: function () {
                            return this._keys.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Map.prototype.has = function (key) {
                        return this._find(key, /*insert*/false) >= 0;
                    };
                    Map.prototype.get = function (key) {
                        var index = this._find(key, /*insert*/false);
                        return index >= 0 ? this._values[index] : undefined;
                    };
                    Map.prototype.set = function (key, value) {
                        var index = this._find(key, /*insert*/true);
                        this._values[index] = value;
                        return this;
                    };
                    Map.prototype.delete = function (key) {
                        var index = this._find(key, /*insert*/false);
                        if (index >= 0) {
                            var size = this._keys.length;
                            for (var i = index + 1; i < size; i++) {
                                this._keys[i - 1] = this._keys[i];
                                this._values[i - 1] = this._values[i];
                            }
                            this._keys.length--;
                            this._values.length--;
                            if (key === this._cacheKey) {
                                this._cacheKey = cacheSentinel;
                                this._cacheIndex = -2;
                            }
                            return true;
                        }
                        return false;
                    };
                    Map.prototype.clear = function () {
                        this._keys.length = 0;
                        this._values.length = 0;
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    };
                    Map.prototype.keys = function () {
                        return new MapIterator(this._keys, this._values, getKey);
                    };
                    Map.prototype.values = function () {
                        return new MapIterator(this._keys, this._values, getValue);
                    };
                    Map.prototype.entries = function () {
                        return new MapIterator(this._keys, this._values, getEntry);
                    };
                    Map.prototype["@@iterator"] = function () {
                        return this.entries();
                    };
                    Map.prototype[iteratorSymbol] = function () {
                        return this.entries();
                    };
                    Map.prototype._find = function (key, insert) {
                        if (this._cacheKey !== key) {
                            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                        }
                        if (this._cacheIndex < 0 && insert) {
                            this._cacheIndex = this._keys.length;
                            this._keys.push(key);
                            this._values.push(undefined);
                        }
                        return this._cacheIndex;
                    };
                    return Map;
                }();
                function getKey(key, _) {
                    return key;
                }
                function getValue(_, value) {
                    return value;
                }
                function getEntry(key, value) {
                    return [key, value];
                }
            }
            // naive Set shim
            function CreateSetPolyfill() {
                return function () {
                    function Set() {
                        this._map = new _Map();
                    }
                    Object.defineProperty(Set.prototype, "size", {
                        get: function () {
                            return this._map.size;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Set.prototype.has = function (value) {
                        return this._map.has(value);
                    };
                    Set.prototype.add = function (value) {
                        return this._map.set(value, value), this;
                    };
                    Set.prototype.delete = function (value) {
                        return this._map.delete(value);
                    };
                    Set.prototype.clear = function () {
                        this._map.clear();
                    };
                    Set.prototype.keys = function () {
                        return this._map.keys();
                    };
                    Set.prototype.values = function () {
                        return this._map.values();
                    };
                    Set.prototype.entries = function () {
                        return this._map.entries();
                    };
                    Set.prototype["@@iterator"] = function () {
                        return this.keys();
                    };
                    Set.prototype[iteratorSymbol] = function () {
                        return this.keys();
                    };
                    return Set;
                }();
            }
            // naive WeakMap shim
            function CreateWeakMapPolyfill() {
                var UUID_SIZE = 16;
                var keys = HashMap.create();
                var rootKey = CreateUniqueKey();
                return function () {
                    function WeakMap() {
                        this._key = CreateUniqueKey();
                    }
                    WeakMap.prototype.has = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? HashMap.has(table, this._key) : false;
                    };
                    WeakMap.prototype.get = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? HashMap.get(table, this._key) : undefined;
                    };
                    WeakMap.prototype.set = function (target, value) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/true);
                        table[this._key] = value;
                        return this;
                    };
                    WeakMap.prototype.delete = function (target) {
                        var table = GetOrCreateWeakMapTable(target, /*create*/false);
                        return table !== undefined ? delete table[this._key] : false;
                    };
                    WeakMap.prototype.clear = function () {
                        // NOTE: not a real clear, just makes the previous data unreachable
                        this._key = CreateUniqueKey();
                    };
                    return WeakMap;
                }();
                function CreateUniqueKey() {
                    var key;
                    do key = "@@WeakMap@@" + CreateUUID(); while (HashMap.has(keys, key));
                    keys[key] = true;
                    return key;
                }
                function GetOrCreateWeakMapTable(target, create) {
                    if (!hasOwn.call(target, rootKey)) {
                        if (!create) return undefined;
                        Object.defineProperty(target, rootKey, { value: HashMap.create() });
                    }
                    return target[rootKey];
                }
                function FillRandomBytes(buffer, size) {
                    for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 0xff | 0;
                    return buffer;
                }
                function GenRandomBytes(size) {
                    if (typeof Uint8Array === "function") {
                        if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
                        if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
                        return FillRandomBytes(new Uint8Array(size), size);
                    }
                    return FillRandomBytes(new Array(size), size);
                }
                function CreateUUID() {
                    var data = GenRandomBytes(UUID_SIZE);
                    // mark as random - RFC 4122 § 4.4
                    data[6] = data[6] & 0x4f | 0x40;
                    data[8] = data[8] & 0xbf | 0x80;
                    var result = "";
                    for (var offset = 0; offset < UUID_SIZE; ++offset) {
                        var byte = data[offset];
                        if (offset === 4 || offset === 6 || offset === 8) result += "-";
                        if (byte < 16) result += "0";
                        result += byte.toString(16).toLowerCase();
                    }
                    return result;
                }
            }
            // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
            function MakeDictionary(obj) {
                obj.__ = undefined;
                delete obj.__;
                return obj;
            }
            // patch global Reflect
            (function (__global) {
                if (typeof __global.Reflect !== "undefined") {
                    if (__global.Reflect !== Reflect) {
                        for (var p in Reflect) {
                            if (hasOwn.call(Reflect, p)) {
                                __global.Reflect[p] = Reflect[p];
                            }
                        }
                    }
                } else {
                    __global.Reflect = Reflect;
                }
            })(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : Function("return this;")());
        })(Reflect || (Reflect = {}));


        $__global["Reflect"] = Reflect;
    })(this);

    return _retrieveGlobal();
});
$__System.registerDynamic("a", ["b", "c"], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", { value: true });
  $__require("b");
  $__require("c");

});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy96b25lLmpzL2Rpc3Qvem9uZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWZsZWN0LW1ldGFkYXRhL1JlZmxlY3QudHMiLCIuLi9hcHAvdmVuZG9yLnRzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiWm9uZSQxIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwibmFtZSIsInBlcmZvcm1hbmNlTWVhc3VyZSIsImxhYmVsIiwiRXJyb3IiLCJab25lIiwicGFyZW50Iiwiem9uZVNwZWMiLCJfcHJvcGVydGllcyIsIl9wYXJlbnQiLCJfbmFtZSIsInByb3BlcnRpZXMiLCJfem9uZURlbGVnYXRlIiwiWm9uZURlbGVnYXRlIiwiYXNzZXJ0Wm9uZVBhdGNoZWQiLCJwYXRjaGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJ6b25lIiwiY3VycmVudCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJfY3VycmVudFpvbmVGcmFtZSIsIl9jdXJyZW50VGFzayIsIl9fbG9hZF9wYXRjaCIsImZuIiwiaGFzT3duUHJvcGVydHkiLCJwZXJmTmFtZSIsIl9hcGkiLCJwcm90b3R5cGUiLCJrZXkiLCJnZXRab25lV2l0aCIsImZvcmsiLCJ3cmFwIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJfY2FsbGJhY2siLCJpbnRlcmNlcHQiLCJydW5HdWFyZGVkIiwiYXJndW1lbnRzIiwicnVuIiwiYXBwbHlUaGlzIiwiYXBwbHlBcmdzIiwidW5kZWZpbmVkIiwiaW52b2tlIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsInJ1blRhc2siLCJ0YXNrIiwiTk9fWk9ORSIsImlzTm90U2NoZWR1bGVkIiwic3RhdGUiLCJub3RTY2hlZHVsZWQiLCJ0eXBlIiwiZXZlbnRUYXNrIiwicmVFbnRyeUd1YXJkIiwicnVubmluZyIsIl90cmFuc2l0aW9uVG8iLCJzY2hlZHVsZWQiLCJydW5Db3VudCIsInByZXZpb3VzVGFzayIsIm1hY3JvVGFzayIsImRhdGEiLCJpc1BlcmlvZGljIiwiY2FuY2VsRm4iLCJpbnZva2VUYXNrIiwidW5rbm93biIsIl91cGRhdGVUYXNrQ291bnQiLCJzY2hlZHVsZVRhc2siLCJuZXdab25lIiwic2NoZWR1bGluZyIsInpvbmVEZWxlZ2F0ZXMiLCJfem9uZURlbGVnYXRlcyIsIl96b25lIiwiZXJyIiwic2NoZWR1bGVNaWNyb1Rhc2siLCJjdXN0b21TY2hlZHVsZSIsIlpvbmVUYXNrIiwibWljcm9UYXNrIiwic2NoZWR1bGVNYWNyb1Rhc2siLCJjdXN0b21DYW5jZWwiLCJzY2hlZHVsZUV2ZW50VGFzayIsImNhbmNlbFRhc2siLCJjYW5jZWxpbmciLCJjb3VudCIsImkiLCJsZW5ndGgiLCJfX3N5bWJvbF9fIiwiREVMRUdBVEVfWlMiLCJvbkhhc1Rhc2siLCJkZWxlZ2F0ZSIsIl8iLCJ0YXJnZXQiLCJoYXNUYXNrU3RhdGUiLCJoYXNUYXNrIiwib25TY2hlZHVsZVRhc2siLCJvbkludm9rZVRhc2siLCJvbkNhbmNlbFRhc2siLCJwYXJlbnREZWxlZ2F0ZSIsIl90YXNrQ291bnRzIiwiX3BhcmVudERlbGVnYXRlIiwiX2ZvcmtaUyIsIm9uRm9yayIsIl9mb3JrRGxndCIsIl9mb3JrQ3VyclpvbmUiLCJfaW50ZXJjZXB0WlMiLCJvbkludGVyY2VwdCIsIl9pbnRlcmNlcHREbGd0IiwiX2ludGVyY2VwdEN1cnJab25lIiwiX2ludm9rZVpTIiwib25JbnZva2UiLCJfaW52b2tlRGxndCIsIl9pbnZva2VDdXJyWm9uZSIsIl9oYW5kbGVFcnJvclpTIiwib25IYW5kbGVFcnJvciIsIl9oYW5kbGVFcnJvckRsZ3QiLCJfaGFuZGxlRXJyb3JDdXJyWm9uZSIsIl9zY2hlZHVsZVRhc2taUyIsIl9zY2hlZHVsZVRhc2tEbGd0IiwiX3NjaGVkdWxlVGFza0N1cnJab25lIiwiX2ludm9rZVRhc2taUyIsIl9pbnZva2VUYXNrRGxndCIsIl9pbnZva2VUYXNrQ3VyclpvbmUiLCJfY2FuY2VsVGFza1pTIiwiX2NhbmNlbFRhc2tEbGd0IiwiX2NhbmNlbFRhc2tDdXJyWm9uZSIsIl9oYXNUYXNrWlMiLCJfaGFzVGFza0RsZ3QiLCJfaGFzVGFza0RsZ3RPd25lciIsIl9oYXNUYXNrQ3VyclpvbmUiLCJ6b25lU3BlY0hhc1Rhc2siLCJwYXJlbnRIYXNUYXNrIiwidGFyZ2V0Wm9uZSIsImFwcGx5IiwicmV0dXJuVGFzayIsInB1c2giLCJzY2hlZHVsZUZuIiwidmFsdWUiLCJpc0VtcHR5IiwiY291bnRzIiwicHJldiIsIm5leHQiLCJjaGFuZ2UiLCJvcHRpb25zIiwiX3N0YXRlIiwic2VsZiIsIl9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMiLCJkcmFpbk1pY3JvVGFza1F1ZXVlIiwiY2FuY2VsU2NoZWR1bGVSZXF1ZXN0IiwidG9TdGF0ZSIsImZyb21TdGF0ZTEiLCJmcm9tU3RhdGUyIiwidG9TdHJpbmciLCJoYW5kbGVJZCIsImNhbGwiLCJ0b0pTT04iLCJzeW1ib2xTZXRUaW1lb3V0Iiwic3ltYm9sUHJvbWlzZSIsInN5bWJvbFRoZW4iLCJfbWljcm9UYXNrUXVldWUiLCJfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlIiwicmVzb2x2ZSIsInF1ZXVlIiwib25VbmhhbmRsZWRFcnJvciIsInNob3dFcnJvciIsIm1pY3JvdGFza0RyYWluRG9uZSIsInN5bWJvbCIsImN1cnJlbnRab25lRnJhbWUiLCJub29wIiwic2hvd1VuY2F1Z2h0RXJyb3IiLCJwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyIsInBhdGNoT25Qcm9wZXJ0aWVzIiwid2luZG93IiwiYXBpIiwiX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyIsImUiLCJyZWplY3Rpb24iLCJjb25zb2xlIiwibWVzc2FnZSIsInN0YWNrIiwiX2xvb3BfMSIsInVuY2F1Z2h0UHJvbWlzZUVycm9yIiwic2hpZnQiLCJoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24iLCJoYW5kbGVyIiwiaXNUaGVuYWJsZSIsInRoZW4iLCJmb3J3YXJkUmVzb2x1dGlvbiIsImZvcndhcmRSZWplY3Rpb24iLCJab25lQXdhcmVQcm9taXNlIiwicmVqZWN0Iiwic3ltYm9sU3RhdGUiLCJzeW1ib2xWYWx1ZSIsIlVOUkVTT0xWRUQiLCJSRVNPTFZFRCIsIlJFSkVDVEVEIiwiUkVKRUNURURfTk9fQ0FUQ0giLCJtYWtlUmVzb2x2ZXIiLCJwcm9taXNlIiwidiIsInJlc29sdmVQcm9taXNlIiwib25jZSIsIndhc0NhbGxlZCIsIndyYXBwZXIiLCJ3cmFwcGVkRnVuY3Rpb24iLCJvbmNlV3JhcHBlciIsIlR5cGVFcnJvciIsImNsZWFyUmVqZWN0ZWROb0NhdGNoIiwiY3VycmVudFRhc2siLCJzY2hlZHVsZVJlc29sdmVPclJlamVjdCIsImVycm9yXzEiLCJzcGxpY2UiLCJjaGFpblByb21pc2UiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJleGVjdXRvciIsInJhY2UiLCJ2YWx1ZXMiLCJyZXMiLCJyZWoiLCJfYSIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwiX2kiLCJ2YWx1ZXNfMSIsImFsbCIsInJlc29sdmVkVmFsdWVzIiwidmFsdWVzXzIiLCJpbmRleCIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJOYXRpdmVQcm9taXNlIiwic3ltYm9sVGhlblBhdGNoZWQiLCJwYXRjaFRoZW4iLCJDdG9yIiwicHJvdG8iLCJvcmlnaW5hbFRoZW4iLCJfdGhpcyIsIndyYXBwZWQiLCJ6b25laWZ5IiwicmVzdWx0UHJvbWlzZSIsImN0b3IiLCJmZXRjaF8xIiwiUHJvbWlzZSIsInpvbmVTeW1ib2wiLCJuIiwiX2dsb2JhbCIsImJpbmRBcmd1bWVudHMiLCJhcmdzIiwicGF0Y2hQcm90b3R5cGUiLCJmbk5hbWVzIiwibmFtZV8xIiwicGF0Y2hlZCIsImF0dGFjaE9yaWdpblRvUGF0Y2hlZCIsImlzV2ViV29ya2VyIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJpc05vZGUiLCJwcm9jZXNzIiwiaXNCcm93c2VyIiwiaXNNaXgiLCJwYXRjaFByb3BlcnR5Iiwib2JqIiwicHJvcCIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGVEZXNjIiwid3JpdGFibGUiLCJvcmlnaW5hbERlc2NHZXQiLCJldmVudE5hbWUiLCJzdWJzdHIiLCJfcHJvcCIsInNldCIsIm5ld1ZhbHVlIiwicHJldmlvdXNWYWx1ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3cmFwRm4iLCJldmVudCIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uUHJvcGVydGllcyIsImoiLCJFVkVOVF9UQVNLUyIsIkFERF9FVkVOVF9MSVNURU5FUiIsIlJFTU9WRV9FVkVOVF9MSVNURU5FUiIsImNvbXBhcmVFdmVudExpc3RlbmVyT3B0aW9ucyIsImxlZnQiLCJyaWdodCIsImxlZnRDYXB0dXJlIiwiY2FwdHVyZSIsInJpZ2h0Q2FwdHVyZSIsImZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrIiwicmVtb3ZlIiwiZXZlbnRUYXNrcyIsImxpc3RlbmVyIiwiYXR0YWNoUmVnaXN0ZXJlZEV2ZW50IiwiaXNQcmVwZW5kIiwidW5zaGlmdCIsImRlZmF1bHRMaXN0ZW5lck1ldGFDcmVhdG9yIiwiY3Jvc3NDb250ZXh0IiwiaW52b2tlQWRkRnVuYyIsImFkZEZuU3ltYm9sIiwiaW52b2tlUmVtb3ZlRnVuYyIsInJlbW92ZUZuU3ltYm9sIiwibWFrZVpvbmVBd2FyZUFkZExpc3RlbmVyIiwiYWRkRm5OYW1lIiwicmVtb3ZlRm5OYW1lIiwidXNlQ2FwdHVyaW5nUGFyYW0iLCJhbGxvd0R1cGxpY2F0ZXMiLCJtZXRhQ3JlYXRvciIsImRlZmF1bHRVc2VDYXB0dXJpbmciLCJzY2hlZHVsZUV2ZW50TGlzdGVuZXIiLCJtZXRhIiwiY2FuY2VsRXZlbnRMaXN0ZW5lciIsInpvbmVBd2FyZUFkZExpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJ2YWxpZFpvbmVIYW5kbGVyIiwibWFrZVpvbmVBd2FyZVJlbW92ZUxpc3RlbmVyIiwiZm5OYW1lIiwiem9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIiLCJwYXRjaE1ldGhvZCIsIm9yaWdpbmFsSW5zdGFuY2VLZXkiLCJwYXRjaENsYXNzIiwiY2xhc3NOYW1lIiwiT3JpZ2luYWxDbGFzcyIsImEiLCJpbnN0YW5jZSIsInBhdGNoRm4iLCJnZXRQcm90b3R5cGVPZiIsImRlbGVnYXRlTmFtZSIsInBhdGNoRGVsZWdhdGVfMSIsImZpbmRFdmVudFRhc2siLCJldnROYW1lIiwib3JpZ2luYWwiLCJvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmciLCJGdW5jdGlvbiIsIm5hdGl2ZVByb21pc2UiLCJuYXRpdmVFcnJvciIsIm9yaWdpbmFsT2JqZWN0VG9TdHJpbmciLCJwYXRjaFRpbWVyIiwic2V0TmFtZSIsImNhbmNlbE5hbWUiLCJuYW1lU3VmZml4Iiwic2V0TmF0aXZlIiwiY2xlYXJOYXRpdmUiLCJ0YXNrc0J5SGFuZGxlSWQiLCJ0aW1lciIsImNsZWFyVGFzayIsImRlbGF5IiwiaGFuZGxlIiwicmVmIiwidW5yZWYiLCJiaW5kIiwiX2RlZmluZVByb3BlcnR5IiwiX2dldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9jcmVhdGUiLCJjcmVhdGUiLCJ1bmNvbmZpZ3VyYWJsZXNLZXkiLCJwcm9wZXJ0eVBhdGNoIiwiaXNVbmNvbmZpZ3VyYWJsZSIsIm9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyIsInJld3JpdGVEZXNjcmlwdG9yIiwiX3RyeURlZmluZVByb3BlcnR5IiwiZGVmaW5lUHJvcGVydGllcyIsInByb3BzIiwia2V5cyIsImZvckVhY2giLCJpc0Zyb3plbiIsIl9yZWRlZmluZVByb3BlcnR5IiwiZGVzY0pzb24iLCJKU09OIiwic3RyaW5naWZ5IiwibG9nIiwiV1RGX0lTU1VFXzU1NSIsIk5PX0VWRU5UX1RBUkdFVCIsInNwbGl0IiwiRVZFTlRfVEFSR0VUIiwiZXZlbnRUYXJnZXRQYXRjaCIsImFwaXMiLCJpc1d0ZiIsIm1hcCIsImNvbmNhdCIsIldTIiwiV2ViU29ja2V0IiwiRXZlbnRUYXJnZXQiLCJiIiwic29ja2V0IiwicHJveHlTb2NrZXQiLCJvbm1lc3NhZ2VEZXNjIiwicHJvcE5hbWUiLCJnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcyIsImRvY3VtZW50RXZlbnROYW1lcyIsIndpbmRvd0V2ZW50TmFtZXMiLCJodG1sRWxlbWVudEV2ZW50TmFtZXMiLCJtZWRpYUVsZW1lbnRFdmVudE5hbWVzIiwiaWVFbGVtZW50RXZlbnROYW1lcyIsIndlYmdsRXZlbnROYW1lcyIsImZvcm1FdmVudE5hbWVzIiwiZGV0YWlsRXZlbnROYW1lcyIsImZyYW1lRXZlbnROYW1lcyIsImZyYW1lU2V0RXZlbnROYW1lcyIsIm1hcnF1ZWVFdmVudE5hbWVzIiwiWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzIiwiSURCSW5kZXhFdmVudE5hbWVzIiwid2Vic29ja2V0RXZlbnROYW1lcyIsImV2ZW50TmFtZXMiLCJwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaCIsInN1cHBvcnRzV2ViU29ja2V0IiwiY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IiLCJEb2N1bWVudCIsIkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIkhUTUxNZWRpYUVsZW1lbnQiLCJIVE1MRnJhbWVTZXRFbGVtZW50IiwiSFRNTEJvZHlFbGVtZW50IiwiSFRNTEZyYW1lRWxlbWVudCIsIkhUTUxJRnJhbWVFbGVtZW50IiwiSFRNTE1hcnF1ZWVFbGVtZW50XzEiLCJYTUxIdHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQiLCJJREJJbmRleCIsIklEQlJlcXVlc3QiLCJJREJPcGVuREJSZXF1ZXN0IiwiSURCRGF0YWJhc2UiLCJJREJUcmFuc2FjdGlvbiIsIklEQkN1cnNvciIsInBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzIiwieGhyRGVzYyIsInJlcSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImRldGVjdEZ1bmMiLCJ1bmJvdW5kS2V5IiwicHJvcGVydHkiLCJvbnByb3BlcnR5IiwiZWx0IiwiYm91bmQiLCJwYXJlbnRFbGVtZW50IiwicmVnaXN0ZXJFbGVtZW50UGF0Y2giLCJkb2N1bWVudCIsIl9yZWdpc3RlckVsZW1lbnQiLCJyZWdpc3RlckVsZW1lbnQiLCJjYWxsYmFja3MiLCJvcHRzIiwiZGVzY3JpcHRvciIsImNsZWFyIiwiYmxvY2tpbmdNZXRob2RzIiwicyIsInBhdGNoWEhSIiwiWEhSX1RBU0siLCJYSFJfU1lOQyIsIlhIUl9MSVNURU5FUiIsIlhIUl9TQ0hFRFVMRUQiLCJmaW5kUGVuZGluZ1Rhc2siLCJwZW5kaW5nVGFzayIsIm5ld0xpc3RlbmVyIiwicmVhZHlTdGF0ZSIsIkRPTkUiLCJhYm9ydGVkIiwic3RvcmVkVGFzayIsInNlbmROYXRpdmUiLCJwbGFjZWhvbGRlckNhbGxiYWNrIiwiYWJvcnROYXRpdmUiLCJvcGVuTmF0aXZlIiwiZ2VvbG9jYXRpb24iLCJmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJldnQiLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7QUFPQyxXQUFVQSxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtBQUMzQixXQUFPQyxPQUFQLEtBQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBakQsR0FBK0RGLFNBQS9ELEdBQ0EsZUFBa0IsVUFBbEI7QUFBQTtBQUFBLG1CQUFvREEsT0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDQSxTQUZEO0FBR0EsQ0FKQSxFQUlDLElBSkQsRUFJUSxZQUFZO0FBQUU7O0FBRXZCOzs7Ozs7OztBQU9BLFFBQUlHLFNBQVUsVUFBVUosTUFBVixFQUFrQjtBQUM1QixZQUFJSyxjQUFjTCxPQUFPLGFBQVAsQ0FBbEI7QUFDQSxpQkFBU00sSUFBVCxDQUFjQyxJQUFkLEVBQW9CO0FBQ2hCRiwyQkFBZUEsWUFBWSxNQUFaLENBQWYsSUFBc0NBLFlBQVksTUFBWixFQUFvQkUsSUFBcEIsQ0FBdEM7QUFDSDtBQUNELGlCQUFTQyxrQkFBVCxDQUE0QkQsSUFBNUIsRUFBa0NFLEtBQWxDLEVBQXlDO0FBQ3JDSiwyQkFBZUEsWUFB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QUFBRSxBQUFDO0FBQ3JCLEFBQU0sdUJBQUMsQUFBRyxBQUFDLEFBQ2Y7QUFBQztBQUVELEFBQXVCO0FBQ3ZCLGFBQUMsVUFBVSxBQUFhO0FBQ3BCLEFBQUUsQUFBQyxvQkFBQyxPQUFPLEFBQVEsU0FBQyxBQUFPLFlBQUssQUFBVyxBQUFDLGFBQUMsQUFBQztBQUMxQyxBQUFFLEFBQUMsd0JBQUMsQUFBUSxTQUFDLEFBQU8sWUFBSyxBQUFPLEFBQUMsU0FBQyxBQUFDO0FBQy9CLEFBQUcsQUFBQyw2QkFBQyxJQUFNLEFBQUMsS0FBSSxBQUFPLEFBQUMsU0FBQyxBQUFDO0FBQ3RCLEFBQUUsQUFBQyxnQ0FBQyxBQUFNLE9BQUMsQUFBSSxLQUFDLEFBQU8sU0FBRSxBQUFDLEFBQUMsQUFBQyxJQUFDLEFBQUM7QUFDMUIsQUFBUSx5Q0FBQyxBQUFPLFFBQUMsQUFBQyxBQUFDLEtBQVMsQUFBUSxRQUFDLEFBQUMsQUFBQyxBQUFDLEFBQzVDO0FBQUMsQUFDTDtBQUFDLEFBQ0w7QUFBQyxBQUNMO0FBQUMsQUFDRCxBQUFJLHVCQUFDLEFBQUM7QUFDRixBQUFRLDZCQUFDLEFBQU8sVUFBRyxBQUFPLEFBQUMsQUFDL0I7QUFBQyxBQUNMO0FBQUMsQUFBQyxlQUNFLE9BQU8sQUFBTSxXQUFLLEFBQVcsY0FBRyxBQUFNLFNBQ2xDLE9BQU8sQUFBSSxTQUFLLEFBQVcsY0FBRyxBQUFJLE9BQzlCLEFBQVEsU0FBQyxBQUFjLEFBQUMsQUFBRSxBQUFDLEFBQUMsQUFDNUM7QUFBQyxXQXBxRFMsQUFBTyxZQUFQLEFBQU8sVUFvcURoQjs7Ozs7Ozs7Ozs7Ozs7QUNsckRELGFBQWM7QUFDZCxhQUFpQiIsImZpbGUiOiJ2ZW5kb3IuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIEBsaWNlbnNlXG4qIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuKlxuKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xudmFyIFpvbmUkMSA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgdmFyIHBlcmZvcm1hbmNlID0gZ2xvYmFsWydwZXJmb3JtYW5jZSddO1xuICAgIGZ1bmN0aW9uIG1hcmsobmFtZSkge1xuICAgICAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWFyayddICYmIHBlcmZvcm1hbmNlWydtYXJrJ10obmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBlcmZvcm1hbmNlTWVhc3VyZShuYW1lLCBsYWJlbCkge1xuICAgICAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddICYmIHBlcmZvcm1hbmNlWydtZWFzdXJlJ10obmFtZSwgbGFiZWwpO1xuICAgIH1cbiAgICBtYXJrKCdab25lJyk7XG4gICAgaWYgKGdsb2JhbFsnWm9uZSddKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBhbHJlYWR5IGxvYWRlZC4nKTtcbiAgICB9XG4gICAgdmFyIFpvbmUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBab25lKHBhcmVudCwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICBuZXcgWm9uZURlbGVnYXRlKHRoaXMsIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuX3pvbmVEZWxlZ2F0ZSwgem9uZVNwZWMpO1xuICAgICAgICB9XG4gICAgICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFRhc2tcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2ggPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICAgICAgICAgIGlmIChwYXRjaGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0FscmVhZHkgbG9hZGVkIHBhdGNoOiAnICsgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyZk5hbWUgPSAnWm9uZTonICsgbmFtZTtcbiAgICAgICAgICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgICAgICAgICBwYXRjaGVzW25hbWVdID0gZm4oZ2xvYmFsLCBab25lLCBfYXBpKTtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUucHJvdG90eXBlLCBcInBhcmVudFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZS5wcm90b3R5cGUsIFwibmFtZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHpvbmUgPSB0aGlzLmdldFpvbmVXaXRoKGtleSk7XG4gICAgICAgICAgICBpZiAoem9uZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5nZXRab25lV2l0aCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuX3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICBpZiAoIXpvbmVTcGVjKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGluZyBmdW5jdGlvbiBnb3Q6ICcgKyBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgIHZhciB6b25lID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IHVuZGVmaW5lZDsgfVxuICAgICAgICAgICAgaWYgKGFwcGx5QXJncyA9PT0gdm9pZCAwKSB7IGFwcGx5QXJncyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChzb3VyY2UgPT09IHZvaWQgMCkgeyBzb3VyY2UgPSBudWxsOyB9XG4gICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWm9uZS5wcm90b3R5cGUucnVuR3VhcmRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGFwcGx5VGhpcyA9PT0gdm9pZCAwKSB7IGFwcGx5VGhpcyA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChhcHBseUFyZ3MgPT09IHZvaWQgMCkgeyBhcHBseUFyZ3MgPSBudWxsOyB9XG4gICAgICAgICAgICBpZiAoc291cmNlID09PSB2b2lkIDApIHsgc291cmNlID0gbnVsbDsgfVxuICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnJ1blRhc2sgPSBmdW5jdGlvbiAodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgICAgICAgLy8gd2lsbCBydW4gaW4gbm90U2NoZWR1bGVkKGNhbmNlbGVkKSBzdGF0ZSwgd2Ugc2hvdWxkIG5vdCB0cnkgdG9cbiAgICAgICAgICAgIC8vIHJ1biBzdWNoIGtpbmQgb2YgdGFzayBidXQganVzdCByZXR1cm5cbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gZGVmaW5lIGFuIHZhcmlhYmxlIGhlcmUsIGlmIG5vdFxuICAgICAgICAgICAgLy8gdHlwZXNjcmlwdCBjb21waWxlciB3aWxsIGNvbXBsYWluIGJlbG93XG4gICAgICAgICAgICB2YXIgaXNOb3RTY2hlZHVsZWQgPSB0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQ7XG4gICAgICAgICAgICBpZiAoaXNOb3RTY2hlZHVsZWQgJiYgdGFzay50eXBlID09PSBldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVFbnRyeUd1YXJkID0gdGFzay5zdGF0ZSAhPSBydW5uaW5nO1xuICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhydW5uaW5nLCBzY2hlZHVsZWQpO1xuICAgICAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVGFzayA9IF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG4gICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IG1hY3JvVGFzayAmJiB0YXNrLmRhdGEgJiYgIXRhc2suZGF0YS5pc1BlcmlvZGljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suY2FuY2VsRm4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhc2sncyBzdGF0ZSBpcyBub3RTY2hlZHVsZWQgb3IgdW5rbm93biwgdGhlbiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBub3QgcmVzZXQgdGhlIHN0YXRlIHRvIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSBub3RTY2hlZHVsZWQgJiYgdGFzay5zdGF0ZSAhPT0gdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IGV2ZW50VGFzayB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgcnVubmluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgICAgICBfY3VycmVudFRhc2sgPSBwcmV2aW91c1Rhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlVGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICBpZiAodGFzay56b25lICYmIHRhc2suem9uZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB0YXNrIHdhcyByZXNjaGVkdWxlZCwgdGhlIG5ld1pvbmVcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIHRoZSBjaGlsZHJlbiBvZiB0aGUgb3JpZ2luYWwgem9uZVxuICAgICAgICAgICAgICAgIHZhciBuZXdab25lID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3Wm9uZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Wm9uZSA9PT0gdGFzay56b25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImNhbiBub3QgcmVzY2hlZHVsZSB0YXNrIHRvIFwiICsgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYW1lICsgXCIgd2hpY2ggaXMgZGVzY2VuZGFudHMgb2YgdGhlIG9yaWdpbmFsIHpvbmUgXCIgKyB0YXNrLnpvbmUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3Wm9uZSA9IG5ld1pvbmUucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgdmFyIHpvbmVEZWxlZ2F0ZXMgPSBbXTtcbiAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSB6b25lRGVsZWdhdGVzO1xuICAgICAgICAgICAgdGFzay5fem9uZSA9IHRoaXM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhc2sgPSB0aGlzLl96b25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBzZXQgdGFzaydzIHN0YXRlIHRvIHVua25vd24gd2hlbiBzY2hlZHVsZVRhc2sgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBlcnIgbWF5IGZyb20gcmVzY2hlZHVsZSwgc28gdGhlIGZyb21TdGF0ZSBtYXliZSBub3RTY2hlZHVsZWRcbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBzaG91bGQgd2UgY2hlY2sgdGhlIHJlc3VsdCBmcm9tIGhhbmRsZUVycm9yP1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXNrLl96b25lRGVsZWdhdGVzID09PSB6b25lRGVsZWdhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBjaGVjayBiZWNhdXNlIGludGVybmFsbHkgdGhlIGRlbGVnYXRlIGNhbiByZXNjaGVkdWxlIHRoZSB0YXNrLlxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09IHNjaGVkdWxpbmcpIHtcbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBzY2hlZHVsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9O1xuICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtaWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBudWxsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWFjcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2sobWFjcm9UYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlRXZlbnRUYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suem9uZSB8fCBOT19aT05FKS5uYW1lICsgJzsgRXhlY3V0aW9uOiAnICsgdGhpcy5uYW1lICsgJyknKTtcbiAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5jYW5jZWxUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3VycyB3aGVuIGNhbmNlbFRhc2ssIHRyYW5zaXQgdGhlIHN0YXRlIHRvIHVua25vd25cbiAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgY2FuY2VsaW5nKTtcbiAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodGFzaywgY291bnQpIHtcbiAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6b25lRGVsZWdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZTtcbiAgICB9KCkpO1xuICAgIFpvbmUuX19zeW1ib2xfXyA9IF9fc3ltYm9sX187XG4gICAgdmFyIERFTEVHQVRFX1pTID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgb25IYXNUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgaGFzVGFza1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuaGFzVGFzayh0YXJnZXQsIGhhc1Rhc2tTdGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2NoZWR1bGVUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLnNjaGVkdWxlVGFzayh0YXJnZXQsIHRhc2spO1xuICAgICAgICB9LFxuICAgICAgICBvbkludm9rZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgeyByZXR1cm4gZGVsZWdhdGUuaW52b2tlVGFzayh0YXJnZXQsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKTsgfSxcbiAgICAgICAgb25DYW5jZWxUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIFpvbmVEZWxlZ2F0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmVEZWxlZ2F0ZSh6b25lLCBwYXJlbnREZWxlZ2F0ZSwgem9uZVNwZWMpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tDb3VudHMgPSB7ICdtaWNyb1Rhc2snOiAwLCAnbWFjcm9UYXNrJzogMCwgJ2V2ZW50VGFzayc6IDAgfTtcbiAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnREZWxlZ2F0ZSA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgdGhpcy5fZm9ya1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uRm9yayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtaUyk7XG4gICAgICAgICAgICB0aGlzLl9mb3JrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9mb3JrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0WlMpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0RGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0RGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZURsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZURsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuem9uZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS56b25lKTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLnpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gbnVsbDtcbiAgICAgICAgICAgIHZhciB6b25lU3BlY0hhc1Rhc2sgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5vbkhhc1Rhc2s7XG4gICAgICAgICAgICB2YXIgcGFyZW50SGFzVGFzayA9IHBhcmVudERlbGVnYXRlICYmIHBhcmVudERlbGVnYXRlLl9oYXNUYXNrWlM7XG4gICAgICAgICAgICBpZiAoem9uZVNwZWNIYXNUYXNrIHx8IHBhcmVudEhhc1Rhc2spIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBuZWVkIHRvIHJlcG9ydCBoYXNUYXNrLCB0aGFuIHRoaXMgWlMgbmVlZHMgdG8gZG8gcmVmIGNvdW50aW5nIG9uIHRhc2tzLiBJbiBzdWNoXG4gICAgICAgICAgICAgICAgLy8gYSBjYXNlIGFsbCB0YXNrIHJlbGF0ZWQgaW50ZXJjZXB0b3JzIG11c3QgZ28gdGhyb3VnaCB0aGlzIFpELiBXZSBjYW4ndCBzaG9ydCBjaXJjdWl0IGl0LlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IHpvbmVTcGVjSGFzVGFzayA/IHpvbmVTcGVjIDogREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrQ3VyclpvbmUgPSB6b25lO1xuICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMub25TY2hlZHVsZVRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vbkludm9rZVRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vbkNhbmNlbFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOlxuICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUy5vbkludGVyY2VwdCh0aGlzLl9pbnRlcmNlcHREbGd0LCB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLl9pbnZva2VDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTLm9uSGFuZGxlRXJyb3IodGhpcy5faGFuZGxlRXJyb3JEbGd0LCB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lLCB0YXJnZXRab25lLCBlcnJvcikgOlxuICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgICAgICAgIHZhciByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYXNUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGhpcy5fc2NoZWR1bGVUYXNrWlMub25TY2hlZHVsZVRhc2sodGhpcy5fc2NoZWR1bGVUYXNrRGxndCwgdGhpcy5fc2NoZWR1bGVUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgICAgICAgICAgIGlmICghcmV0dXJuVGFzaylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suc2NoZWR1bGVGbih0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFzay50eXBlID09IG1pY3JvVGFzaykge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFzayBpcyBtaXNzaW5nIHNjaGVkdWxlRm4uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblRhc2s7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy5faW52b2tlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgOlxuICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGFzay5jYW5jZWxGbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFzVGFzayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAgICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNUYXNrWlMgJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgdmFyIGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuICAgICAgICAgICAgICAgICAgICBtaWNyb1Rhc2s6IGNvdW50cy5taWNyb1Rhc2sgPiAwLFxuICAgICAgICAgICAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50cy5tYWNyb1Rhc2sgPiAwLFxuICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50cy5ldmVudFRhc2sgPiAwLFxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLnpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgIH0oKSk7XG4gICAgdmFyIFpvbmVUYXNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gWm9uZVRhc2sodHlwZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcbiAgICAgICAgICAgIHRoaXMuX3pvbmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ25vdFNjaGVkdWxlZCc7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZUZuID0gc2NoZWR1bGVGbjtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRm4gPSBjYW5jZWxGbjtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMrKztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnpvbmUucnVuVGFzayhzZWxmLCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lVGFzay5wcm90b3R5cGUsIFwiem9uZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZVRhc2sucHJvdG90eXBlLCBcInN0YXRlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBab25lVGFzay5wcm90b3R5cGUuY2FuY2VsU2NoZWR1bGVSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS5fdHJhbnNpdGlvblRvID0gZnVuY3Rpb24gKHRvU3RhdGUsIGZyb21TdGF0ZTEsIGZyb21TdGF0ZTIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMSB8fCB0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gdG9TdGF0ZTtcbiAgICAgICAgICAgICAgICBpZiAodG9TdGF0ZSA9PSBub3RTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudHlwZSArIFwiICdcIiArIHRoaXMuc291cmNlICsgXCInOiBjYW4gbm90IHRyYW5zaXRpb24gdG8gJ1wiICsgdG9TdGF0ZSArIFwiJywgZXhwZWN0aW5nIHN0YXRlICdcIiArIGZyb21TdGF0ZTEgKyBcIidcIiArIChmcm9tU3RhdGUyID9cbiAgICAgICAgICAgICAgICAgICAgJyBvciBcXCcnICsgZnJvbVN0YXRlMiArICdcXCcnIDpcbiAgICAgICAgICAgICAgICAgICAgJycpICsgXCIsIHdhcyAnXCIgKyB0aGlzLl9zdGF0ZSArIFwiJy5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVUYXNrLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gYWRkIHRvSlNPTiBtZXRob2QgdG8gcHJldmVudCBjeWNsaWMgZXJyb3Igd2hlblxuICAgICAgICAvLyBjYWxsIEpTT04uc3RyaW5naWZ5KHpvbmVUYXNrKVxuICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUubmFtZSxcbiAgICAgICAgICAgICAgICBpbnZva2U6IHRoaXMuaW52b2tlLFxuICAgICAgICAgICAgICAgIHNjaGVkdWxlRm46IHRoaXMuc2NoZWR1bGVGbixcbiAgICAgICAgICAgICAgICBjYW5jZWxGbjogdGhpcy5jYW5jZWxGbixcbiAgICAgICAgICAgICAgICBydW5Db3VudDogdGhpcy5ydW5Db3VudCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5jYWxsYmFja1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFpvbmVUYXNrO1xuICAgIH0oKSk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vICBNSUNST1RBU0sgUVVFVUVcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB2YXIgc3ltYm9sU2V0VGltZW91dCA9IF9fc3ltYm9sX18oJ3NldFRpbWVvdXQnKTtcbiAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICB2YXIgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICB2YXIgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgdmFyIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3QgcnVubmluZyBpbiBhbnkgdGFzaywgYW5kIHRoZXJlIGhhcyBub3QgYmVlbiBhbnl0aGluZyBzY2hlZHVsZWRcbiAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmUgbm90IHJ1bm5pbmcgaW4gVGFzaywgc28gd2UgbmVlZCB0byBraWNrc3RhcnQgdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgICAgICAgIGlmIChnbG9iYWxbc3ltYm9sUHJvbWlzZV0pIHtcbiAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sUHJvbWlzZV0ucmVzb2x2ZSgwKVtzeW1ib2xUaGVuXShkcmFpbk1pY3JvVGFza1F1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbFtzeW1ib2xTZXRUaW1lb3V0XShkcmFpbk1pY3JvVGFza1F1ZXVlLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXNrICYmIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkcmFpbk1pY3JvVGFza1F1ZXVlKCkge1xuICAgICAgICBpZiAoIV9pc0RyYWluaW5nTWljcm90YXNrUXVldWUpIHtcbiAgICAgICAgICAgIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUgKF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG4gICAgICAgICAgICAgICAgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHF1ZXVlW2ldO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLnJ1blRhc2sodGFzaywgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXBpLm9uVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNob3dFcnJvciA9ICFab25lW19fc3ltYm9sX18oJ2lnbm9yZUNvbnNvbGVFcnJvclVuY2F1Z2h0RXJyb3InKV07XG4gICAgICAgICAgICBfYXBpLm1pY3JvdGFza0RyYWluRG9uZSgpO1xuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgQk9PVFNUUkFQXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdmFyIE5PX1pPTkUgPSB7IG5hbWU6ICdOTyBaT05FJyB9O1xuICAgIHZhciBub3RTY2hlZHVsZWQgPSAnbm90U2NoZWR1bGVkJywgc2NoZWR1bGluZyA9ICdzY2hlZHVsaW5nJywgc2NoZWR1bGVkID0gJ3NjaGVkdWxlZCcsIHJ1bm5pbmcgPSAncnVubmluZycsIGNhbmNlbGluZyA9ICdjYW5jZWxpbmcnLCB1bmtub3duID0gJ3Vua25vd24nO1xuICAgIHZhciBtaWNyb1Rhc2sgPSAnbWljcm9UYXNrJywgbWFjcm9UYXNrID0gJ21hY3JvVGFzaycsIGV2ZW50VGFzayA9ICdldmVudFRhc2snO1xuICAgIHZhciBwYXRjaGVzID0ge307XG4gICAgdmFyIF9hcGkgPSB7XG4gICAgICAgIHN5bWJvbDogX19zeW1ib2xfXyxcbiAgICAgICAgY3VycmVudFpvbmVGcmFtZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2N1cnJlbnRab25lRnJhbWU7IH0sXG4gICAgICAgIG9uVW5oYW5kbGVkRXJyb3I6IG5vb3AsXG4gICAgICAgIG1pY3JvdGFza0RyYWluRG9uZTogbm9vcCxcbiAgICAgICAgc2NoZWR1bGVNaWNyb1Rhc2s6IHNjaGVkdWxlTWljcm9UYXNrLFxuICAgICAgICBzaG93VW5jYXVnaHRFcnJvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gIVpvbmVbX19zeW1ib2xfXygnaWdub3JlQ29uc29sZUVycm9yVW5jYXVnaHRFcnJvcicpXTsgfSxcbiAgICAgICAgcGF0Y2hFdmVudFRhcmdldE1ldGhvZHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICBwYXRjaE9uUHJvcGVydGllczogbm9vcFxuICAgIH07XG4gICAgdmFyIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IG51bGwsIHpvbmU6IG5ldyBab25lKG51bGwsIG51bGwpIH07XG4gICAgdmFyIF9jdXJyZW50VGFzayA9IG51bGw7XG4gICAgdmFyIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPSAwO1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7IH1cbiAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdfX3pvbmVfc3ltYm9sX18nICsgbmFtZTtcbiAgICB9XG4gICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xufSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdab25lQXdhcmVQcm9taXNlJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgdmFyIF9fc3ltYm9sX18gPSBhcGkuc3ltYm9sO1xuICAgIHZhciBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG4gICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgaWYgKHJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBQcm9taXNlIHJlamVjdGlvbjonLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5tZXNzYWdlIDogcmVqZWN0aW9uLCAnOyBab25lOicsIGUuem9uZS5uYW1lLCAnOyBUYXNrOicsIGUudGFzayAmJiBlLnRhc2suc291cmNlLCAnOyBWYWx1ZTonLCByZWplY3Rpb24sIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLnN0YWNrIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnpvbmUucnVuR3VhcmRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aGlsZSAoX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlKSB7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBab25lW19fc3ltYm9sX18oJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyldO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIFtlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRoZW47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcndhcmRSZXNvbHV0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9yd2FyZFJlamVjdGlvbihyZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7XG4gICAgfVxuICAgIHZhciBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgdmFyIHN5bWJvbFZhbHVlID0gX19zeW1ib2xfXygndmFsdWUnKTtcbiAgICB2YXIgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuICAgIHZhciBSRVNPTFZFRCA9IHRydWU7XG4gICAgdmFyIFJFSkVDVEVEID0gZmFsc2U7XG4gICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICBmdW5jdGlvbiBtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3YXNDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIod3JhcHBlZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh3YXNDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3YXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdyYXBwZWRGdW5jdGlvbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8vIFByb21pc2UgUmVzb2x1dGlvblxuICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICB2YXIgb25jZVdyYXBwZXIgPSBvbmNlKCk7XG4gICAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlZCB3aXRoIGl0c2VsZicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgLy8gc2hvdWxkIG9ubHkgZ2V0IHZhbHVlLnRoZW4gb25jZSBiYXNlZCBvbiBwcm9taXNlIHNwZWMuXG4gICAgICAgICAgICB2YXIgdGhlbiA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGVuID0gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgb25jZVdyYXBwZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xTdGF0ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sVmFsdWUpICYmXG4gICAgICAgICAgICAgICAgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4uYXBwbHkodmFsdWUsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkpLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkIHRhc2sgaW5mb3JtYXRpb24gaW4gdmFsdWUgd2hlbiBlcnJvciBvY2N1cnMsIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgIC8vIGRvIHNvbWUgYWRkaXRpb25hbCB3b3JrIHN1Y2ggYXMgcmVuZGVyIGxvbmdTdGFja1RyYWNlXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW19fc3ltYm9sX18oJ2N1cnJlbnRUYXNrJyldID0gWm9uZS5jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHByb21pc2UsIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10sIHF1ZXVlW2krK10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRF9OT19DQVRDSDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcl8xID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMS5yZWplY3Rpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8xLnRhc2sgPSBab25lLmN1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKGVycm9yXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNvbHZpbmcgYW4gYWxyZWFkeSByZXNvbHZlZCBwcm9taXNlIGlzIGEgbm9vcC5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpIHtcbiAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBSRUpFQ1RFRF9OT19DQVRDSCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgbm8gY2F0Y2ggc3RhdHVzXG4gICAgICAgICAgICAvLyBhbmQgcXVldWUubGVuZ3RoID4gMCwgbWVhbnMgdGhlcmUgaXMgYSBlcnJvciBoYW5kbGVyXG4gICAgICAgICAgICAvLyBoZXJlIHRvIGhhbmRsZSB0aGUgcmVqZWN0ZWQgcHJvbWlzZSwgd2Ugc2hvdWxkIHRyaWdnZXJcbiAgICAgICAgICAgIC8vIHdpbmRvd3MucmVqZWN0aW9uaGFuZGxlZCBldmVudEhhbmRsZXIgb3Igbm9kZWpzIHJlamVjdGlvbkhhbmRsZWRcbiAgICAgICAgICAgIC8vIGV2ZW50SGFuZGxlclxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IFpvbmVbX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKV07XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBbeyByZWplY3Rpb246IHByb21pc2Vbc3ltYm9sVmFsdWVdLCBwcm9taXNlOiBwcm9taXNlIH1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKTtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV0gP1xuICAgICAgICAgICAgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykgPyBvbkZ1bGZpbGxlZCA6IGZvcndhcmRSZXNvbHV0aW9uIDpcbiAgICAgICAgICAgICh0eXBlb2Ygb25SZWplY3RlZCA9PT0gJ2Z1bmN0aW9uJykgPyBvblJlamVjdGVkIDogZm9yd2FyZFJlamVjdGlvbjtcbiAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB6b25lLnJ1bihkZWxlZ2F0ZSwgdW5kZWZpbmVkLCBbcHJvbWlzZVtzeW1ib2xWYWx1ZV1dKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShjaGFpblByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgWm9uZUF3YXJlUHJvbWlzZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBhbiBpbnN0YW5jZW9mIFByb21pc2UuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFVOUkVTT0xWRUQ7XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IFtdOyAvLyBxdWV1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0b3IgJiYgZXhlY3V0b3IobWFrZVJlc29sdmVyKHByb21pc2UsIFJFU09MVkVEKSwgbWFrZVJlc29sdmVyKHByb21pc2UsIFJFSkVDVEVEKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgIHZhciByZWplY3Q7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgIF9hID0gW3JlcywgcmVqXSwgcmVzb2x2ZSA9IF9hWzBdLCByZWplY3QgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UgJiYgKHByb21pc2UgPSBudWxsIHx8IHJlc29sdmUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJiAocHJvbWlzZSA9IG51bGwgfHwgcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc18xW19pXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciByZXNvbHZlO1xuICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgdmFsdWVzXzIgPSB2YWx1ZXM7IF9pIDwgdmFsdWVzXzIubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKChmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9OyB9KShjb3VudCksIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY291bnQpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgdmFyIGNoYWluUHJvbWlzZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG51bGwpO1xuICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgIH0oKSk7XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgdmFyIE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0gPSBnbG9iYWxbJ1Byb21pc2UnXTtcbiAgICBnbG9iYWxbJ1Byb21pc2UnXSA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgdmFyIHN5bWJvbFRoZW5QYXRjaGVkID0gX19zeW1ib2xfXygndGhlblBhdGNoZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFRoZW4oQ3Rvcikge1xuICAgICAgICB2YXIgcHJvdG8gPSBDdG9yLnByb3RvdHlwZTtcbiAgICAgICAgdmFyIG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gbmV3IFpvbmVBd2FyZVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKF90aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlZC50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHpvbmVpZnkoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRQcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN0b3IgPSByZXN1bHRQcm9taXNlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKCFjdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVGhlbihjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSk7XG4gICAgICAgIHZhciBmZXRjaF8xID0gZ2xvYmFsWydmZXRjaCddO1xuICAgICAgICBpZiAodHlwZW9mIGZldGNoXzEgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZ2xvYmFsWydmZXRjaCddID0gem9uZWlmeShmZXRjaF8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG59KTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLyoqXG4gKiBTdXBwcmVzcyBjbG9zdXJlIGNvbXBpbGVyIGVycm9ycyBhYm91dCB1bmtub3duICdab25lJyB2YXJpYWJsZVxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXN9XG4gKi9cbnZhciB6b25lU3ltYm9sID0gZnVuY3Rpb24gKG4pIHsgcmV0dXJuIFwiX196b25lX3N5bWJvbF9fXCIgKyBuOyB9O1xudmFyIF9nbG9iYWwgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsO1xuZnVuY3Rpb24gYmluZEFyZ3VtZW50cyhhcmdzLCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbaV0gPSBab25lLmN1cnJlbnQud3JhcChhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJncztcbn1cbmZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKHByb3RvdHlwZSwgZm5OYW1lcykge1xuICAgIHZhciBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBuYW1lXzEgPSBmbk5hbWVzW2ldO1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBwcm90b3R5cGVbbmFtZV8xXTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICBwcm90b3R5cGVbbmFtZV8xXSA9IChmdW5jdGlvbiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHRoaXMsIGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBzb3VyY2UgKyAnLicgKyBuYW1lXzEpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwYXRjaGVkLCBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGNoZWQ7XG4gICAgICAgICAgICB9KShkZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfbG9vcF8xKGkpO1xuICAgIH1cbn1cbnZhciBpc1dlYldvcmtlciA9ICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG4vLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG52YXIgaXNOb2RlID0gKCEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbnZhciBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuLy8gd2UgYXJlIGluIGVsZWN0cm9uIG9mIG53LCBzbyB3ZSBhcmUgYm90aCBicm93c2VyIGFuZCBub2RlanNcbi8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGx5IGJyb3dzZXJpZnlcbi8vIHRoaXMgY29kZS5cbnZhciBpc01peCA9IHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAge30udG9TdHJpbmcuY2FsbChfZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgIWlzV2ViV29ya2VyICYmXG4gICAgISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydIVE1MRWxlbWVudCddKTtcbmZ1bmN0aW9uIHBhdGNoUHJvcGVydHkob2JqLCBwcm9wLCBwcm90b3R5cGUpIHtcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICB2YXIgcHJvdG90eXBlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wKTtcbiAgICAgICAgaWYgKHByb3RvdHlwZURlc2MpIHtcbiAgICAgICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGlmIHRoZSBkZXNjcmlwdG9yIG5vdCBleGlzdHMgb3IgaXMgbm90IGNvbmZpZ3VyYWJsZVxuICAgIC8vIGp1c3QgcmV0dXJuXG4gICAgaWYgKCFkZXNjIHx8ICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgICAvL1xuICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgdmFyIG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICAgIC8vIHN1YnN0cigyKSBjdXogJ29uY2xpY2snIC0+ICdjbGljaycsIGV0Y1xuICAgIHZhciBldmVudE5hbWUgPSBwcm9wLnN1YnN0cigyKTtcbiAgICB2YXIgX3Byb3AgPSB6b25lU3ltYm9sKCdfJyArIHByb3ApO1xuICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGFyZ2V0W19wcm9wXTtcbiAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcHJldmlvdXNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBuZXdWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0YXJnZXRbX3Byb3BdID0gd3JhcEZuO1xuICAgICAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB3cmFwRm4sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtfcHJvcF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBUaGUgZ2V0dGVyIHdvdWxkIHJldHVybiB1bmRlZmluZWQgZm9yIHVuYXNzaWduZWQgcHJvcGVydGllcyBidXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYW5cbiAgICAvLyB1bmFzc2lnbmVkIHByb3BlcnR5IGlzIG51bGxcbiAgICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KF9wcm9wKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtfcHJvcF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3JpZ2luYWxEZXNjR2V0KSB7XG4gICAgICAgICAgICAvLyByZXN1bHQgd2lsbCBiZSBudWxsIHdoZW4gdXNlIGlubGluZSBldmVudCBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAvLyBzdWNoIGFzIDxidXR0b24gb25jbGljaz1cImZ1bmMoKTtcIj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgb25jbGljayBmdW5jdGlvbiBpcyBpbnRlcm5hbCByYXcgdW5jb21waWxlZCBoYW5kbGVyXG4gICAgICAgICAgICAvLyB0aGUgb25jbGljayB3aWxsIGJlIGV2YWx1YXRlZCB3aGVuIGZpcnN0IHRpbWUgZXZlbnQgd2FzIHRyaWdnZXJlZCBvclxuICAgICAgICAgICAgLy8gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy81MjVcbiAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCB1c2Ugb3JpZ2luYWwgbmF0aXZlIGdldCB0byByZXRyaWV2ZSB0aGUgaGFuZGxlclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gb3JpZ2luYWxEZXNjR2V0ICYmIG9yaWdpbmFsRGVzY0dldC5hcHBseSh0aGlzKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlc2Muc2V0LmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0WydyZW1vdmVBdHRyaWJ1dGUnXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbn1cbmZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgJ29uJyArIHByb3BlcnRpZXNbaV0sIHByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBvblByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChwcm9wLnN1YnN0cigwLCAyKSA9PSAnb24nKSB7XG4gICAgICAgICAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0sIHByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG52YXIgRVZFTlRfVEFTS1MgPSB6b25lU3ltYm9sKCdldmVudFRhc2tzJyk7XG4vLyBGb3IgRXZlbnRUYXJnZXRcbnZhciBBRERfRVZFTlRfTElTVEVORVIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG52YXIgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuLy8gY29tcGFyZSB0aGUgRXZlbnRMaXN0ZW5lck9wdGlvbnNPckNhcHR1cmVcbi8vIDEuIGlmIHRoZSBvcHRpb25zIGlzIHVzQ2FwdHVyZTogYm9vbGVhbiwgY29tcGFyZSB0aGUgdXNlQ3BhdHVyZSB2YWx1ZXMgZGlyZWN0bHlcbi8vIDIuIGlmIHRoZSBvcHRpb25zIGlzIEV2ZW50TGlzdGVyT3B0aW9ucywgb25seSBjb21wYXJlIHRoZSBjYXB0dXJlXG5mdW5jdGlvbiBjb21wYXJlRXZlbnRMaXN0ZW5lck9wdGlvbnMobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgbGVmdENhcHR1cmUgPSAodHlwZW9mIGxlZnQgPT09ICdib29sZWFuJykgP1xuICAgICAgICBsZWZ0IDpcbiAgICAgICAgKCh0eXBlb2YgbGVmdCA9PT0gJ29iamVjdCcpID8gKGxlZnQgJiYgbGVmdC5jYXB0dXJlKSA6IGZhbHNlKTtcbiAgICB2YXIgcmlnaHRDYXB0dXJlID0gKHR5cGVvZiByaWdodCA9PT0gJ2Jvb2xlYW4nKSA/XG4gICAgICAgIHJpZ2h0IDpcbiAgICAgICAgKCh0eXBlb2YgcmlnaHQgPT09ICdvYmplY3QnKSA/IChyaWdodCAmJiByaWdodC5jYXB0dXJlKSA6IGZhbHNlKTtcbiAgICByZXR1cm4gISFsZWZ0Q2FwdHVyZSA9PT0gISFyaWdodENhcHR1cmU7XG59XG5mdW5jdGlvbiBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayh0YXJnZXQsIGhhbmRsZXIsIG5hbWUsIG9wdGlvbnMsIHJlbW92ZSkge1xuICAgIHZhciBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXTtcbiAgICBpZiAoZXZlbnRUYXNrcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhc2sgPSBldmVudFRhc2tzW2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldmVudFRhc2suZGF0YTtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGRhdGEuaGFuZGxlcjtcbiAgICAgICAgICAgIGlmICgoZGF0YS5oYW5kbGVyID09PSBoYW5kbGVyIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVFdmVudExpc3RlbmVyT3B0aW9ucyhkYXRhLm9wdGlvbnMsIG9wdGlvbnMpICYmIGRhdGEuZXZlbnROYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50VGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGF0dGFjaFJlZ2lzdGVyZWRFdmVudCh0YXJnZXQsIGV2ZW50VGFzaywgaXNQcmVwZW5kKSB7XG4gICAgdmFyIGV2ZW50VGFza3MgPSB0YXJnZXRbRVZFTlRfVEFTS1NdO1xuICAgIGlmICghZXZlbnRUYXNrcykge1xuICAgICAgICBldmVudFRhc2tzID0gdGFyZ2V0W0VWRU5UX1RBU0tTXSA9IFtdO1xuICAgIH1cbiAgICBpZiAoaXNQcmVwZW5kKSB7XG4gICAgICAgIGV2ZW50VGFza3MudW5zaGlmdChldmVudFRhc2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnRUYXNrcy5wdXNoKGV2ZW50VGFzayk7XG4gICAgfVxufVxudmFyIGRlZmF1bHRMaXN0ZW5lck1ldGFDcmVhdG9yID0gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25zOiBhcmdzWzJdLFxuICAgICAgICBldmVudE5hbWU6IGFyZ3NbMF0sXG4gICAgICAgIGhhbmRsZXI6IGFyZ3NbMV0sXG4gICAgICAgIHRhcmdldDogc2VsZiB8fCBfZ2xvYmFsLFxuICAgICAgICBuYW1lOiBhcmdzWzBdLFxuICAgICAgICBjcm9zc0NvbnRleHQ6IGZhbHNlLFxuICAgICAgICBpbnZva2VBZGRGdW5jOiBmdW5jdGlvbiAoYWRkRm5TeW1ib2wsIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZGF0YSBpcyBjcm9zcyBzaXRlIGNvbnRleHQsIGlmIGl0IGlzLCBmYWxsYmFjayB0b1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBkZWxlZ2F0ZSBkaXJlY3RseSBhbmQgdHJ5IGNhdGNoIGVycm9yXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3Jvc3NDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRlICYmIGRlbGVnYXRlLmludm9rZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRbYWRkRm5TeW1ib2xdKHRoaXMuZXZlbnROYW1lLCBkZWxlZ2F0ZS5pbnZva2UsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRbYWRkRm5TeW1ib2xdKHRoaXMuZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgYSBpZi9lbHNlIGJyYW5jaCBoZXJlIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBmb3IgbW9zdCB0aW1lc1xuICAgICAgICAgICAgICAgIC8vIGNyb3NzIHNpdGUgY29udGV4dCBpcyBmYWxzZSwgc28gd2UgZG9uJ3QgbmVlZCB0byB0cnkvY2F0Y2hcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRbYWRkRm5TeW1ib2xdKHRoaXMuZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nIGhlcmUgaXMgZmluZSwgYmVjYXVzZSBvYmplY3RzIGluIGEgY3Jvc3Mtc2l0ZSBjb250ZXh0IGFyZSB1bnVzYWJsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52b2tlUmVtb3ZlRnVuYzogZnVuY3Rpb24gKHJlbW92ZUZuU3ltYm9sLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRhdGEgaXMgY3Jvc3Mgc2l0ZSBjb250ZXh0LCBpZiBpdCBpcywgZmFsbGJhY2sgdG9cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgZGVsZWdhdGUgZGlyZWN0bHkgYW5kIHRyeSBjYXRjaCBlcnJvclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNyb3NzQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5pbnZva2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0W3JlbW92ZUZuU3ltYm9sXSh0aGlzLmV2ZW50TmFtZSwgZGVsZWdhdGUuaW52b2tlLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0W3JlbW92ZUZuU3ltYm9sXSh0aGlzLmV2ZW50TmFtZSwgZGVsZWdhdGUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGEgaWYvZWxzZSBicmFuY2ggaGVyZSBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgZm9yIG1vc3QgdGltZXNcbiAgICAgICAgICAgICAgICAvLyBjcm9zcyBzaXRlIGNvbnRleHQgaXMgZmFsc2UsIHNvIHdlIGRvbid0IG5lZWQgdG8gdHJ5L2NhdGNoXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0W3JlbW92ZUZuU3ltYm9sXSh0aGlzLmV2ZW50TmFtZSwgZGVsZWdhdGUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZyBoZXJlIGlzIGZpbmUsIGJlY2F1c2Ugb2JqZWN0cyBpbiBhIGNyb3NzLXNpdGUgY29udGV4dCBhcmUgdW51c2FibGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmZ1bmN0aW9uIG1ha2Vab25lQXdhcmVBZGRMaXN0ZW5lcihhZGRGbk5hbWUsIHJlbW92ZUZuTmFtZSwgdXNlQ2FwdHVyaW5nUGFyYW0sIGFsbG93RHVwbGljYXRlcywgaXNQcmVwZW5kLCBtZXRhQ3JlYXRvcikge1xuICAgIGlmICh1c2VDYXB0dXJpbmdQYXJhbSA9PT0gdm9pZCAwKSB7IHVzZUNhcHR1cmluZ1BhcmFtID0gdHJ1ZTsgfVxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZXMgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZXMgPSBmYWxzZTsgfVxuICAgIGlmIChpc1ByZXBlbmQgPT09IHZvaWQgMCkgeyBpc1ByZXBlbmQgPSBmYWxzZTsgfVxuICAgIGlmIChtZXRhQ3JlYXRvciA9PT0gdm9pZCAwKSB7IG1ldGFDcmVhdG9yID0gZGVmYXVsdExpc3RlbmVyTWV0YUNyZWF0b3I7IH1cbiAgICB2YXIgYWRkRm5TeW1ib2wgPSB6b25lU3ltYm9sKGFkZEZuTmFtZSk7XG4gICAgdmFyIHJlbW92ZUZuU3ltYm9sID0gem9uZVN5bWJvbChyZW1vdmVGbk5hbWUpO1xuICAgIHZhciBkZWZhdWx0VXNlQ2FwdHVyaW5nID0gdXNlQ2FwdHVyaW5nUGFyYW0gPyBmYWxzZSA6IHVuZGVmaW5lZDtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZUV2ZW50TGlzdGVuZXIoZXZlbnRUYXNrKSB7XG4gICAgICAgIHZhciBtZXRhID0gZXZlbnRUYXNrLmRhdGE7XG4gICAgICAgIGF0dGFjaFJlZ2lzdGVyZWRFdmVudChtZXRhLnRhcmdldCwgZXZlbnRUYXNrLCBpc1ByZXBlbmQpO1xuICAgICAgICByZXR1cm4gbWV0YS5pbnZva2VBZGRGdW5jKGFkZEZuU3ltYm9sLCBldmVudFRhc2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYW5jZWxFdmVudExpc3RlbmVyKGV2ZW50VGFzaykge1xuICAgICAgICB2YXIgbWV0YSA9IGV2ZW50VGFzay5kYXRhO1xuICAgICAgICBmaW5kRXhpc3RpbmdSZWdpc3RlcmVkVGFzayhtZXRhLnRhcmdldCwgZXZlbnRUYXNrLmludm9rZSwgbWV0YS5ldmVudE5hbWUsIG1ldGEub3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBtZXRhLmludm9rZVJlbW92ZUZ1bmMocmVtb3ZlRm5TeW1ib2wsIGV2ZW50VGFzayk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiB6b25lQXdhcmVBZGRMaXN0ZW5lcihzZWxmLCBhcmdzKSB7XG4gICAgICAgIHZhciBkYXRhID0gbWV0YUNyZWF0b3Ioc2VsZiwgYXJncyk7XG4gICAgICAgIGRhdGEub3B0aW9ucyA9IGRhdGEub3B0aW9ucyB8fCBkZWZhdWx0VXNlQ2FwdHVyaW5nO1xuICAgICAgICAvLyAtIEluc2lkZSBhIFdlYiBXb3JrZXIsIGB0aGlzYCBpcyB1bmRlZmluZWQsIHRoZSBjb250ZXh0IGlzIGBnbG9iYWxgXG4gICAgICAgIC8vIC0gV2hlbiBgYWRkRXZlbnRMaXN0ZW5lcmAgaXMgY2FsbGVkIG9uIHRoZSBnbG9iYWwgY29udGV4dCBpbiBzdHJpY3QgbW9kZSwgYHRoaXNgIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5oYW5kbGVyID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlID0gZGF0YS5oYW5kbGVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEuaGFuZGxlciAmJiBkYXRhLmhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBkYXRhLmhhbmRsZXIuaGFuZGxlRXZlbnQoZXZlbnQpOyB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxpZFpvbmVIYW5kbGVyID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJbiBjcm9zcyBzaXRlIGNvbnRleHRzIChzdWNoIGFzIFdlYkRyaXZlciBmcmFtZXdvcmtzIGxpa2UgU2VsZW5pdW0pLFxuICAgICAgICAgICAgLy8gYWNjZXNzaW5nIHRoZSBoYW5kbGVyIG9iamVjdCBoZXJlIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93biB3aGljaFxuICAgICAgICAgICAgLy8gd2lsbCBmYWlsIHRlc3RzIHByZW1hdHVyZWx5LlxuICAgICAgICAgICAgdmFsaWRab25lSGFuZGxlciA9IGRhdGEuaGFuZGxlciAmJiBkYXRhLmhhbmRsZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25XcmFwcGVyXSc7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyB3ZSBjYW4gc3RpbGwgdHJ5IHRvIGFkZCB0aGUgZGF0YS5oYW5kbGVyIGV2ZW4gd2UgYXJlIGluIGNyb3NzIHNpdGUgY29udGV4dFxuICAgICAgICAgICAgZGF0YS5jcm9zc0NvbnRleHQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaW52b2tlQWRkRnVuYyhhZGRGblN5bWJvbCwgZGF0YS5oYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZ25vcmUgc3BlY2lhbCBsaXN0ZW5lcnMgb2YgSUUxMSAmIEVkZ2UgZGV2IHRvb2xzLCBzZWVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTUwXG4gICAgICAgIGlmICghZGVsZWdhdGUgfHwgdmFsaWRab25lSGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaW52b2tlQWRkRnVuYyhhZGRGblN5bWJvbCwgZGF0YS5oYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFsbG93RHVwbGljYXRlcykge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFzayA9IGZpbmRFeGlzdGluZ1JlZ2lzdGVyZWRUYXNrKGRhdGEudGFyZ2V0LCBkYXRhLmhhbmRsZXIsIGRhdGEuZXZlbnROYW1lLCBkYXRhLm9wdGlvbnMsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBhbHJlYWR5IHJlZ2lzdGVyZWQsIHNvIHRoaXMgd2lsbCBoYXZlIG5vb3AuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuaW52b2tlQWRkRnVuYyhhZGRGblN5bWJvbCwgZXZlbnRUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGRhdGEudGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ10gKyAnLicgKyBhZGRGbk5hbWUgKyAnOicgKyBkYXRhLmV2ZW50TmFtZTtcbiAgICAgICAgem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBzY2hlZHVsZUV2ZW50TGlzdGVuZXIsIGNhbmNlbEV2ZW50TGlzdGVuZXIpO1xuICAgIH07XG59XG5mdW5jdGlvbiBtYWtlWm9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIoZm5OYW1lLCB1c2VDYXB0dXJpbmdQYXJhbSwgbWV0YUNyZWF0b3IpIHtcbiAgICBpZiAodXNlQ2FwdHVyaW5nUGFyYW0gPT09IHZvaWQgMCkgeyB1c2VDYXB0dXJpbmdQYXJhbSA9IHRydWU7IH1cbiAgICBpZiAobWV0YUNyZWF0b3IgPT09IHZvaWQgMCkgeyBtZXRhQ3JlYXRvciA9IGRlZmF1bHRMaXN0ZW5lck1ldGFDcmVhdG9yOyB9XG4gICAgdmFyIHN5bWJvbCA9IHpvbmVTeW1ib2woZm5OYW1lKTtcbiAgICB2YXIgZGVmYXVsdFVzZUNhcHR1cmluZyA9IHVzZUNhcHR1cmluZ1BhcmFtID8gZmFsc2UgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHpvbmVBd2FyZVJlbW92ZUxpc3RlbmVyKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICAgICAgZGF0YS5vcHRpb25zID0gZGF0YS5vcHRpb25zIHx8IGRlZmF1bHRVc2VDYXB0dXJpbmc7XG4gICAgICAgIC8vIC0gSW5zaWRlIGEgV2ViIFdvcmtlciwgYHRoaXNgIGlzIHVuZGVmaW5lZCwgdGhlIGNvbnRleHQgaXMgYGdsb2JhbGBcbiAgICAgICAgLy8gLSBXaGVuIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQgb24gdGhlIGdsb2JhbCBjb250ZXh0IGluIHN0cmljdCBtb2RlLCBgdGhpc2AgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGVsZWdhdGUgPSBkYXRhLmhhbmRsZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5oYW5kbGVyICYmIGRhdGEuaGFuZGxlci5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgZGVsZWdhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGRhdGEuaGFuZGxlci5oYW5kbGVFdmVudChldmVudCk7IH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkWm9uZUhhbmRsZXIgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEluIGNyb3NzIHNpdGUgY29udGV4dHMgKHN1Y2ggYXMgV2ViRHJpdmVyIGZyYW1ld29ya3MgbGlrZSBTZWxlbml1bSksXG4gICAgICAgICAgICAvLyBhY2Nlc3NpbmcgdGhlIGhhbmRsZXIgb2JqZWN0IGhlcmUgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIGZhaWwgdGVzdHMgcHJlbWF0dXJlbHkuXG4gICAgICAgICAgICB2YWxpZFpvbmVIYW5kbGVyID0gZGF0YS5oYW5kbGVyICYmIGRhdGEuaGFuZGxlci50b1N0cmluZygpID09PSAnW29iamVjdCBGdW5jdGlvbldyYXBwZXJdJztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRhdGEuY3Jvc3NDb250ZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmludm9rZVJlbW92ZUZ1bmMoc3ltYm9sLCBkYXRhLmhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElnbm9yZSBzcGVjaWFsIGxpc3RlbmVycyBvZiBJRTExICYgRWRnZSBkZXYgdG9vbHMsIHNlZVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xNTBcbiAgICAgICAgaWYgKCFkZWxlZ2F0ZSB8fCB2YWxpZFpvbmVIYW5kbGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5pbnZva2VSZW1vdmVGdW5jKHN5bWJvbCwgZGF0YS5oYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnRUYXNrID0gZmluZEV4aXN0aW5nUmVnaXN0ZXJlZFRhc2soZGF0YS50YXJnZXQsIGRhdGEuaGFuZGxlciwgZGF0YS5ldmVudE5hbWUsIGRhdGEub3B0aW9ucywgdHJ1ZSk7XG4gICAgICAgIGlmIChldmVudFRhc2spIHtcbiAgICAgICAgICAgIGV2ZW50VGFzay56b25lLmNhbmNlbFRhc2soZXZlbnRUYXNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEuaW52b2tlUmVtb3ZlRnVuYyhzeW1ib2wsIGRhdGEuaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbmZ1bmN0aW9uIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKG9iaiwgYWRkRm5OYW1lLCByZW1vdmVGbk5hbWUsIG1ldGFDcmVhdG9yKSB7XG4gICAgaWYgKGFkZEZuTmFtZSA9PT0gdm9pZCAwKSB7IGFkZEZuTmFtZSA9IEFERF9FVkVOVF9MSVNURU5FUjsgfVxuICAgIGlmIChyZW1vdmVGbk5hbWUgPT09IHZvaWQgMCkgeyByZW1vdmVGbk5hbWUgPSBSRU1PVkVfRVZFTlRfTElTVEVORVI7IH1cbiAgICBpZiAobWV0YUNyZWF0b3IgPT09IHZvaWQgMCkgeyBtZXRhQ3JlYXRvciA9IGRlZmF1bHRMaXN0ZW5lck1ldGFDcmVhdG9yOyB9XG4gICAgaWYgKG9iaiAmJiBvYmpbYWRkRm5OYW1lXSkge1xuICAgICAgICBwYXRjaE1ldGhvZChvYmosIGFkZEZuTmFtZSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gbWFrZVpvbmVBd2FyZUFkZExpc3RlbmVyKGFkZEZuTmFtZSwgcmVtb3ZlRm5OYW1lLCB0cnVlLCBmYWxzZSwgZmFsc2UsIG1ldGFDcmVhdG9yKTsgfSk7XG4gICAgICAgIHBhdGNoTWV0aG9kKG9iaiwgcmVtb3ZlRm5OYW1lLCBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlWm9uZUF3YXJlUmVtb3ZlTGlzdGVuZXIocmVtb3ZlRm5OYW1lLCB0cnVlLCBtZXRhQ3JlYXRvcik7IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG52YXIgb3JpZ2luYWxJbnN0YW5jZUtleSA9IHpvbmVTeW1ib2woJ29yaWdpbmFsSW5zdGFuY2UnKTtcbi8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5mdW5jdGlvbiBwYXRjaENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBPcmlnaW5hbENsYXNzID0gX2dsb2JhbFtjbGFzc05hbWVdO1xuICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIGtlZXAgb3JpZ2luYWwgY2xhc3MgaW4gZ2xvYmFsXG4gICAgX2dsb2JhbFt6b25lU3ltYm9sKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcbiAgICBfZ2xvYmFsW2NsYXNzTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIGNsYXNzTmFtZSk7XG4gICAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGF0dGFjaCBvcmlnaW5hbCBkZWxlZ2F0ZSB0byBwYXRjaGVkIGZ1bmN0aW9uXG4gICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKF9nbG9iYWxbY2xhc3NOYW1lXSwgT3JpZ2luYWxDbGFzcyk7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB2YXIgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTQ0NzIxXG4gICAgICAgIGlmIChjbGFzc05hbWUgPT09ICdYTUxIdHRwUmVxdWVzdCcgJiYgcHJvcCA9PT0gJ3Jlc3BvbnNlQmxvYicpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9nbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gWm9uZS5jdXJyZW50LndyYXAoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgY2FsbGJhY2sgaW4gd3JhcHBlZCBmdW5jdGlvbiBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgaXQgaW4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLCBmbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfShwcm9wKSk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBPcmlnaW5hbENsYXNzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gICAgdmFyIHByb3RvID0gdGFyZ2V0O1xuICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgIHByb3RvID0gdGFyZ2V0O1xuICAgIH1cbiAgICB2YXIgZGVsZWdhdGVOYW1lID0gem9uZVN5bWJvbChuYW1lKTtcbiAgICB2YXIgZGVsZWdhdGU7XG4gICAgaWYgKHByb3RvICYmICEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSkge1xuICAgICAgICBkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0gPSBwcm90b1tuYW1lXTtcbiAgICAgICAgdmFyIHBhdGNoRGVsZWdhdGVfMSA9IHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICAgIHByb3RvW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdGNoRGVsZWdhdGVfMSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGVnYXRlO1xufVxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcblxuXG5mdW5jdGlvbiBmaW5kRXZlbnRUYXNrKHRhcmdldCwgZXZ0TmFtZSkge1xuICAgIHZhciBldmVudFRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2woJ2V2ZW50VGFza3MnKV07XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChldmVudFRhc2tzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50VGFzayA9IGV2ZW50VGFza3NbaV07XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGV2ZW50VGFzay5kYXRhO1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGRhdGEgJiYgZGF0YS5ldmVudE5hbWU7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBldnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZXZlbnRUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gICAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8vIG92ZXJyaWRlIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyB0byBtYWtlIHpvbmUuanMgcGF0Y2hlZCBmdW5jdGlvblxuLy8gbG9vayBsaWtlIG5hdGl2ZSBmdW5jdGlvblxuWm9uZS5fX2xvYWRfcGF0Y2goJ3RvU3RyaW5nJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgLy8gcGF0Y2ggRnVuYy5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3pvbmVTeW1ib2woJ09yaWdpbmFsRGVsZWdhdGUnKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmFwcGx5KHRoaXNbem9uZVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpXSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzID09PSBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVByb21pc2UgPSBnbG9iYWxbem9uZVN5bWJvbCgnUHJvbWlzZScpXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmFwcGx5KG5hdGl2ZVByb21pc2UsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZUVycm9yID0gZ2xvYmFsW3pvbmVTeW1ib2woJ0Vycm9yJyldO1xuICAgICAgICAgICAgICAgIGlmIChuYXRpdmVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmFwcGx5KG5hdGl2ZUVycm9yLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICAvLyBwYXRjaCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgICB2YXIgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE9iamVjdFRvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5mdW5jdGlvbiBwYXRjaFRpbWVyKHdpbmRvdywgc2V0TmFtZSwgY2FuY2VsTmFtZSwgbmFtZVN1ZmZpeCkge1xuICAgIHZhciBzZXROYXRpdmUgPSBudWxsO1xuICAgIHZhciBjbGVhck5hdGl2ZSA9IG51bGw7XG4gICAgc2V0TmFtZSArPSBuYW1lU3VmZml4O1xuICAgIGNhbmNlbE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICB2YXIgdGFza3NCeUhhbmRsZUlkID0ge307XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGZ1bmN0aW9uIHRpbWVyKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXNrLmludm9rZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb2RlIHJldHVybnMgY29tcGxleCBvYmplY3RzIGFzIGhhbmRsZUlkc1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2RhdGEuaGFuZGxlSWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhLmFyZ3NbMF0gPSB0aW1lcjtcbiAgICAgICAgZGF0YS5oYW5kbGVJZCA9IHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGRhdGEuYXJncyk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5oYW5kbGVJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzIC0+IG5vIG5lZWQgdG8ga2VlcCB0aGVtIGFyb3VuZC4gQWRkaXRpb25hbGx5LFxuICAgICAgICAgICAgLy8gdGhpcyB0aHJvd3MgYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBpbiBvbGRlciBub2RlIHZlcnNpb25zIGFuZCBoYXMgbm8gZWZmZWN0IHRoZXJlLCBiZWNhdXNlIG9mIHRoZSBzdHJpbmdpZmllZCBrZXkuXG4gICAgICAgICAgICB0YXNrc0J5SGFuZGxlSWRbZGF0YS5oYW5kbGVJZF0gPSB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICBpZiAodHlwZW9mIHRhc2suZGF0YS5oYW5kbGVJZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIC8vIE5vZGUgcmV0dXJucyBjb21wbGV4IG9iamVjdHMgYXMgaGFuZGxlSWRzXG4gICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW3Rhc2suZGF0YS5oYW5kbGVJZF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlKHRhc2suZGF0YS5oYW5kbGVJZCk7XG4gICAgfVxuICAgIHNldE5hdGl2ZSA9XG4gICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgc2V0TmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpc1BlcmlvZGljOiBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogKG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnKSA/IGFyZ3NbMV0gfHwgMCA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IGFyZ3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gem9uZS5zY2hlZHVsZU1hY3JvVGFzayhzZXROYW1lLCBhcmdzWzBdLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBOb2RlLmpzIG11c3QgYWRkaXRpb25hbGx5IHN1cHBvcnQgdGhlIHJlZiBhbmQgdW5yZWYgZnVuY3Rpb25zLlxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSB0YXNrLmRhdGEuaGFuZGxlSWQ7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9OyB9KTtcbiAgICBjbGVhck5hdGl2ZSA9XG4gICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgY2FuY2VsTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicgPyB0YXNrc0J5SGFuZGxlSWRbYXJnc1swXV0gOiBhcmdzWzBdO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5zdGF0ZSAhPT0gJ25vdFNjaGVkdWxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IGNhbmNlbCBhbHJlYWR5IGNhbmNlbGVkIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgZm9yIENocm9tZSBhbmQgQ2hyb21lIG1vYmlsZSwgdG8gZW5hYmxlXG4gKiB0aGluZ3MgbGlrZSByZWRlZmluaW5nIGBjcmVhdGVkQ2FsbGJhY2tgIG9uIGFuIGVsZW1lbnQuXG4gKi9cbnZhciBfZGVmaW5lUHJvcGVydHkgPSBPYmplY3Rbem9uZVN5bWJvbCgnZGVmaW5lUHJvcGVydHknKV0gPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdFt6b25lU3ltYm9sKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InKV0gPVxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgdW5jb25maWd1cmFibGVzS2V5ID0gem9uZVN5bWJvbCgndW5jb25maWd1cmFibGVzJyk7XG5mdW5jdGlvbiBwcm9wZXJ0eVBhdGNoKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3AsIGRlc2MpIHtcbiAgICAgICAgaWYgKGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkgXFwnJyArIHByb3AgKyAnXFwnIG9mICcgKyBvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnKSB7XG4gICAgICAgICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHByb3BzW3Byb3BdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcbiAgICBPYmplY3QuY3JlYXRlID0gZnVuY3Rpb24gKG9iaiwgcHJvdG8pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ29iamVjdCcgJiYgIU9iamVjdC5pc0Zyb3plbihwcm90bykpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bcHJvcF0gPSByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIHByb3RvW3Byb3BdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfY3JlYXRlKG9iaiwgcHJvdG8pO1xuICAgIH07XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICAgICAgdmFyIGRlc2MgPSBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9yZWRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYykge1xuICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbn1cbmZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXTtcbn1cbmZ1bmN0aW9uIHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYykge1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgICAgICB9XG4gICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc2M7XG59XG5mdW5jdGlvbiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb2YgZXJyb3JzLCB3aGVuIHRoZSBjb25maWd1cmFibGUgZmxhZyB3YXMgbGlrZWx5IHNldCBieSByZXdyaXRlRGVzY3JpcHRvcigpLCBsZXQnc1xuICAgICAgICAgICAgLy8gcmV0cnkgd2l0aCB0aGUgb3JpZ2luYWwgZmxhZyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZGVzYy5jb25maWd1cmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NKc29uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjSnNvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29uZmlndXJlICdcIiArIHByb3AgKyBcIicgd2l0aCBkZXNjcmlwdG9yICdcIiArIGRlc2NKc29uICsgXCInIG9uIG9iamVjdCAnXCIgKyBvYmogKyBcIicgYW5kIGdvdCBlcnJvciwgZ2l2aW5nIHVwOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG52YXIgV1RGX0lTU1VFXzU1NSA9ICdBbmNob3IsQXJlYSxBdWRpbyxCUixCYXNlLEJhc2VGb250LEJvZHksQnV0dG9uLENhbnZhcyxDb250ZW50LERMaXN0LERpcmVjdG9yeSxEaXYsRW1iZWQsRmllbGRTZXQsRm9udCxGb3JtLEZyYW1lLEZyYW1lU2V0LEhSLEhlYWQsSGVhZGluZyxIdG1sLElGcmFtZSxJbWFnZSxJbnB1dCxLZXlnZW4sTEksTGFiZWwsTGVnZW5kLExpbmssTWFwLE1hcnF1ZWUsTWVkaWEsTWVudSxNZXRhLE1ldGVyLE1vZCxPTGlzdCxPYmplY3QsT3B0R3JvdXAsT3B0aW9uLE91dHB1dCxQYXJhZ3JhcGgsUHJlLFByb2dyZXNzLFF1b3RlLFNjcmlwdCxTZWxlY3QsU291cmNlLFNwYW4sU3R5bGUsVGFibGVDYXB0aW9uLFRhYmxlQ2VsbCxUYWJsZUNvbCxUYWJsZSxUYWJsZVJvdyxUYWJsZVNlY3Rpb24sVGV4dEFyZWEsVGl0bGUsVHJhY2ssVUxpc3QsVW5rbm93bixWaWRlbyc7XG52YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgsV2ViU29ja2V0J1xuICAgIC5zcGxpdCgnLCcpO1xudmFyIEVWRU5UX1RBUkdFVCA9ICdFdmVudFRhcmdldCc7XG5mdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwpIHtcbiAgICB2YXIgYXBpcyA9IFtdO1xuICAgIHZhciBpc1d0ZiA9IF9nbG9iYWxbJ3d0ZiddO1xuICAgIGlmIChpc1d0Zikge1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvcjogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS90cmFjaW5nLWZyYW1ld29yay9pc3N1ZXMvNTU1XG4gICAgICAgIGFwaXMgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoX2dsb2JhbFtFVkVOVF9UQVJHRVRdKSB7XG4gICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgIC8vIGlmIGl0J3Mgbm90IGF2YWlsYWJsZSwgd2UgaW5zdGVhZCBwYXRjaCB0aGUgQVBJcyBpbiB0aGUgSURMIHRoYXQgaW5oZXJpdCBmcm9tIEV2ZW50VGFyZ2V0XG4gICAgICAgIGFwaXMgPSBOT19FVkVOVF9UQVJHRVQ7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgdHlwZSA9IF9nbG9iYWxbYXBpc1tpXV07XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHR5cGUgJiYgdHlwZS5wcm90b3R5cGUpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmZ1bmN0aW9uIGFwcGx5KF9nbG9iYWwpIHtcbiAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAvLyBPbiBTYWZhcmkgd2luZG93LkV2ZW50VGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgc28gbmVlZCB0byBwYXRjaCBXUyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIF9nbG9iYWwuV2ViU29ja2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuICAgICAgICB2YXIgcHJveHlTb2NrZXQ7XG4gICAgICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgICAgICB2YXIgb25tZXNzYWdlRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc29ja2V0LCAnb25tZXNzYWdlJyk7XG4gICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJveHlTb2NrZXQgPSBPYmplY3QuY3JlYXRlKHNvY2tldCk7XG4gICAgICAgICAgICBbJ2FkZEV2ZW50TGlzdGVuZXInLCAncmVtb3ZlRXZlbnRMaXN0ZW5lcicsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm94eVNvY2tldFtwcm9wTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXRbcHJvcE5hbWVdLmFwcGx5KHNvY2tldCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBjYW4gcGF0Y2ggdGhlIHJlYWwgc29ja2V0XG4gICAgICAgICAgICBwcm94eVNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydjbG9zZScsICdlcnJvcicsICdtZXNzYWdlJywgJ29wZW4nXSk7XG4gICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgICB9O1xuICAgIGZvciAodmFyIHByb3AgaW4gV1MpIHtcbiAgICAgICAgX2dsb2JhbFsnV2ViU29ja2V0J11bcHJvcF0gPSBXU1twcm9wXTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbnZhciBnbG9iYWxFdmVudEhhbmRsZXJzRXZlbnROYW1lcyA9IFtcbiAgICAnYWJvcnQnLFxuICAgICdhbmltYXRpb25jYW5jZWwnLFxuICAgICdhbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdhdXhjbGljaycsXG4gICAgJ2JlZm9yZWlucHV0JyxcbiAgICAnYmx1cicsXG4gICAgJ2NhbmNlbCcsXG4gICAgJ2NhbnBsYXknLFxuICAgICdjYW5wbGF5dGhyb3VnaCcsXG4gICAgJ2NoYW5nZScsXG4gICAgJ2NvbXBvc2l0aW9uc3RhcnQnLFxuICAgICdjb21wb3NpdGlvbnVwZGF0ZScsXG4gICAgJ2NvbXBvc2l0aW9uZW5kJyxcbiAgICAnY3VlY2hhbmdlJyxcbiAgICAnY2xpY2snLFxuICAgICdjbG9zZScsXG4gICAgJ2NvbnRleHRtZW51JyxcbiAgICAnY3VyZWNoYW5nZScsXG4gICAgJ2RibGNsaWNrJyxcbiAgICAnZHJhZycsXG4gICAgJ2RyYWdlbmQnLFxuICAgICdkcmFnZW50ZXInLFxuICAgICdkcmFnZXhpdCcsXG4gICAgJ2RyYWdsZWF2ZScsXG4gICAgJ2RyYWdvdmVyJyxcbiAgICAnZHJvcCcsXG4gICAgJ2R1cmF0aW9uY2hhbmdlJyxcbiAgICAnZW1wdGllZCcsXG4gICAgJ2VuZGVkJyxcbiAgICAnZXJyb3InLFxuICAgICdmb2N1cycsXG4gICAgJ2ZvY3VzaW4nLFxuICAgICdmb2N1c291dCcsXG4gICAgJ2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAnaW5wdXQnLFxuICAgICdpbnZhbGlkJyxcbiAgICAna2V5ZG93bicsXG4gICAgJ2tleXByZXNzJyxcbiAgICAna2V5dXAnLFxuICAgICdsb2FkJyxcbiAgICAnbG9hZHN0YXJ0JyxcbiAgICAnbG9hZGVkZGF0YScsXG4gICAgJ2xvYWRlZG1ldGFkYXRhJyxcbiAgICAnbG9zdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VlbnRlcicsXG4gICAgJ21vdXNlbGVhdmUnLFxuICAgICdtb3VzZW1vdmUnLFxuICAgICdtb3VzZW91dCcsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNldXAnLFxuICAgICdtb3VzZXdoZWVsJyxcbiAgICAncGF1c2UnLFxuICAgICdwbGF5JyxcbiAgICAncGxheWluZycsXG4gICAgJ3BvaW50ZXJjYW5jZWwnLFxuICAgICdwb2ludGVyZG93bicsXG4gICAgJ3BvaW50ZXJlbnRlcicsXG4gICAgJ3BvaW50ZXJsZWF2ZScsXG4gICAgJ3BvaW50ZXJsb2NrY2hhbmdlJyxcbiAgICAnbW96cG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2VyY2hhbmdlJyxcbiAgICAncG9pbnRlcmxvY2tlcnJvcicsXG4gICAgJ21venBvaW50ZXJsb2NrZXJyb3InLFxuICAgICd3ZWJraXRwb2ludGVybG9ja2Vycm9yJyxcbiAgICAncG9pbnRlcm1vdmUnLFxuICAgICdwb2ludG91dCcsXG4gICAgJ3BvaW50ZXJvdmVyJyxcbiAgICAncG9pbnRlcnVwJyxcbiAgICAncHJvZ3Jlc3MnLFxuICAgICdyYXRlY2hhbmdlJyxcbiAgICAncmVzZXQnLFxuICAgICdyZXNpemUnLFxuICAgICdzY3JvbGwnLFxuICAgICdzZWVrZWQnLFxuICAgICdzZWVraW5nJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2VsZWN0aW9uY2hhbmdlJyxcbiAgICAnc2VsZWN0c3RhcnQnLFxuICAgICdzaG93JyxcbiAgICAnc29ydCcsXG4gICAgJ3N0YWxsZWQnLFxuICAgICdzdWJtaXQnLFxuICAgICdzdXNwZW5kJyxcbiAgICAndGltZXVwZGF0ZScsXG4gICAgJ3ZvbHVtZWNoYW5nZScsXG4gICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAndG91Y2htb3ZlJyxcbiAgICAndG91Y2hzdGFydCcsXG4gICAgJ3RyYW5zaXRpb25jYW5jZWwnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnd2FpdGluZycsXG4gICAgJ3doZWVsJ1xuXTtcbnZhciBkb2N1bWVudEV2ZW50TmFtZXMgPSBbXG4gICAgJ2FmdGVyc2NyaXB0ZXhlY3V0ZScsICdiZWZvcmVzY3JpcHRleGVjdXRlJywgJ0RPTUNvbnRlbnRMb2FkZWQnLCAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsICdtc2Z1bGxzY3JlZW5jaGFuZ2UnLCAnZnVsbHNjcmVlbmVycm9yJyxcbiAgICAnbW96ZnVsbHNjcmVlbmVycm9yJywgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcicsICdtc2Z1bGxzY3JlZW5lcnJvcicsICdyZWFkeXN0YXRlY2hhbmdlJ1xuXTtcbnZhciB3aW5kb3dFdmVudE5hbWVzID0gW1xuICAgICdhYnNvbHV0ZWRldmljZW9yaWVudGF0aW9uJyxcbiAgICAnYWZ0ZXJpbnB1dCcsXG4gICAgJ2FmdGVycHJpbnQnLFxuICAgICdhcHBpbnN0YWxsZWQnLFxuICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAnYmVmb3JlcHJpbnQnLFxuICAgICdiZWZvcmV1bmxvYWQnLFxuICAgICdkZXZpY2VsaWdodCcsXG4gICAgJ2RldmljZW1vdGlvbicsXG4gICAgJ2RldmljZW9yaWVudGF0aW9uJyxcbiAgICAnZGV2aWNlb3JpZW50YXRpb25hYnNvbHV0ZScsXG4gICAgJ2RldmljZXByb3hpbWl0eScsXG4gICAgJ2hhc2hjaGFuZ2UnLFxuICAgICdsYW5ndWFnZWNoYW5nZScsXG4gICAgJ21lc3NhZ2UnLFxuICAgICdtb3piZWZvcmVwYWludCcsXG4gICAgJ29mZmxpbmUnLFxuICAgICdvbmxpbmUnLFxuICAgICdwYWludCcsXG4gICAgJ3BhZ2VzaG93JyxcbiAgICAncGFnZWhpZGUnLFxuICAgICdwb3BzdGF0ZScsXG4gICAgJ3JlamVjdGlvbmhhbmRsZWQnLFxuICAgICdzdG9yYWdlJyxcbiAgICAndW5oYW5kbGVkcmVqZWN0aW9uJyxcbiAgICAndW5sb2FkJyxcbiAgICAndXNlcnByb3hpbWl0eScsXG4gICAgJ3ZyZGlzcGx5Y29ubmVjdGVkJyxcbiAgICAndnJkaXNwbGF5ZGlzY29ubmVjdGVkJyxcbiAgICAndnJkaXNwbGF5cHJlc2VudGNoYW5nZSdcbl07XG52YXIgaHRtbEVsZW1lbnRFdmVudE5hbWVzID0gW1xuICAgICdiZWZvcmVjb3B5JywgJ2JlZm9yZWN1dCcsICdiZWZvcmVwYXN0ZScsICdjb3B5JywgJ2N1dCcsICdwYXN0ZScsICdkcmFnc3RhcnQnLCAnbG9hZGVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JywgJ3NlYXJjaCcsICd0cmFuc2l0aW9ucnVuJywgJ3RyYW5zaXRpb25zdGFydCcsICd3ZWJraXRhbmltYXRpb25lbmQnLFxuICAgICd3ZWJraXRhbmltYXRpb25pdGVyYXRpb24nLCAnd2Via2l0YW5pbWF0aW9uc3RhcnQnLCAnd2Via2l0dHJhbnNpdGlvbmVuZCdcbl07XG52YXIgbWVkaWFFbGVtZW50RXZlbnROYW1lcyA9IFsnZW5jcnlwdGVkJywgJ3dhaXRpbmdmb3JrZXknLCAnbXNuZWVka2V5JywgJ21vemludGVycnVwdGJlZ2luJywgJ21vemludGVycnVwdGVuZCddO1xudmFyIGllRWxlbWVudEV2ZW50TmFtZXMgPSBbXG4gICAgJ2FjdGl2YXRlJyxcbiAgICAnYWZ0ZXJ1cGRhdGUnLFxuICAgICdhcmlhcmVxdWVzdCcsXG4gICAgJ2JlZm9yZWFjdGl2YXRlJyxcbiAgICAnYmVmb3JlZGVhY3RpdmF0ZScsXG4gICAgJ2JlZm9yZWVkaXRmb2N1cycsXG4gICAgJ2JlZm9yZXVwZGF0ZScsXG4gICAgJ2NlbGxjaGFuZ2UnLFxuICAgICdjb250cm9sc2VsZWN0JyxcbiAgICAnZGF0YWF2YWlsYWJsZScsXG4gICAgJ2RhdGFzZXRjaGFuZ2VkJyxcbiAgICAnZGF0YXNldGNvbXBsZXRlJyxcbiAgICAnZXJyb3J1cGRhdGUnLFxuICAgICdmaWx0ZXJjaGFuZ2UnLFxuICAgICdsYXlvdXRjb21wbGV0ZScsXG4gICAgJ2xvc2VjYXB0dXJlJyxcbiAgICAnbW92ZScsXG4gICAgJ21vdmVlbmQnLFxuICAgICdtb3Zlc3RhcnQnLFxuICAgICdwcm9wZXJ0eWNoYW5nZScsXG4gICAgJ3Jlc2l6ZWVuZCcsXG4gICAgJ3Jlc2l6ZXN0YXJ0JyxcbiAgICAncm93ZW50ZXInLFxuICAgICdyb3dleGl0JyxcbiAgICAncm93c2RlbGV0ZScsXG4gICAgJ3Jvd3NpbnNlcnRlZCcsXG4gICAgJ2NvbW1hbmQnLFxuICAgICdjb21wYXNzbmVlZHNjYWxpYnJhdGlvbicsXG4gICAgJ2RlYWN0aXZhdGUnLFxuICAgICdoZWxwJyxcbiAgICAnbXNjb250ZW50em9vbScsXG4gICAgJ21zbWFuaXB1bGF0aW9uc3RhdGVjaGFuZ2VkJyxcbiAgICAnbXNnZXN0dXJlY2hhbmdlJyxcbiAgICAnbXNnZXN0dXJlZG91YmxldGFwJyxcbiAgICAnbXNnZXN0dXJlZW5kJyxcbiAgICAnbXNnZXN0dXJlaG9sZCcsXG4gICAgJ21zZ2VzdHVyZXN0YXJ0JyxcbiAgICAnbXNnZXN0dXJldGFwJyxcbiAgICAnbXNnb3Rwb2ludGVyY2FwdHVyZScsXG4gICAgJ21zaW5lcnRpYXN0YXJ0JyxcbiAgICAnbXNsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgICdtc3BvaW50ZXJjYW5jZWwnLFxuICAgICdtc3BvaW50ZXJkb3duJyxcbiAgICAnbXNwb2ludGVyZW50ZXInLFxuICAgICdtc3BvaW50ZXJob3ZlcicsXG4gICAgJ21zcG9pbnRlcmxlYXZlJyxcbiAgICAnbXNwb2ludGVybW92ZScsXG4gICAgJ21zcG9pbnRlcm91dCcsXG4gICAgJ21zcG9pbnRlcm92ZXInLFxuICAgICdtc3BvaW50ZXJ1cCcsXG4gICAgJ3BvaW50ZXJvdXQnLFxuICAgICdtc3NpdGVtb2RlanVtcGxpc3RpdGVtcmVtb3ZlZCcsXG4gICAgJ21zdGh1bWJuYWlsY2xpY2snLFxuICAgICdzdG9wJyxcbiAgICAnc3RvcmFnZWNvbW1pdCdcbl07XG52YXIgd2ViZ2xFdmVudE5hbWVzID0gWyd3ZWJnbGNvbnRleHRyZXN0b3JlZCcsICd3ZWJnbGNvbnRleHRsb3N0JywgJ3dlYmdsY29udGV4dGNyZWF0aW9uZXJyb3InXTtcbnZhciBmb3JtRXZlbnROYW1lcyA9IFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9jb21wbGV0ZWVycm9yJ107XG52YXIgZGV0YWlsRXZlbnROYW1lcyA9IFsndG9nZ2xlJ107XG52YXIgZnJhbWVFdmVudE5hbWVzID0gWydsb2FkJ107XG52YXIgZnJhbWVTZXRFdmVudE5hbWVzID0gWydibHVyJywgJ2Vycm9yJywgJ2ZvY3VzJywgJ2xvYWQnLCAncmVzaXplJywgJ3Njcm9sbCddO1xudmFyIG1hcnF1ZWVFdmVudE5hbWVzID0gWydib3VuY2UnLCAnZmluaXNoJywgJ3N0YXJ0J107XG52YXIgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzID0gW1xuICAgICdsb2Fkc3RhcnQnLCAncHJvZ3Jlc3MnLCAnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCcsICdwcm9ncmVzcycsICd0aW1lb3V0JywgJ2xvYWRlbmQnLFxuICAgICdyZWFkeXN0YXRlY2hhbmdlJ1xuXTtcbnZhciBJREJJbmRleEV2ZW50TmFtZXMgPSBbJ3VwZ3JhZGVuZWVkZWQnLCAnY29tcGxldGUnLCAnYWJvcnQnLCAnc3VjY2VzcycsICdlcnJvcicsICdibG9ja2VkJywgJ3ZlcnNpb25jaGFuZ2UnLCAnY2xvc2UnXTtcbnZhciB3ZWJzb2NrZXRFdmVudE5hbWVzID0gWydjbG9zZScsICdlcnJvcicsICdvcGVuJywgJ21lc3NhZ2UnXTtcbnZhciBldmVudE5hbWVzID0gZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMuY29uY2F0KHdlYmdsRXZlbnROYW1lcywgZm9ybUV2ZW50TmFtZXMsIGRldGFpbEV2ZW50TmFtZXMsIGRvY3VtZW50RXZlbnROYW1lcywgd2luZG93RXZlbnROYW1lcywgaHRtbEVsZW1lbnRFdmVudE5hbWVzLCBpZUVsZW1lbnRFdmVudE5hbWVzKTtcbmZ1bmN0aW9uIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c1dlYlNvY2tldCA9IHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpKSB7XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHdlIGNhbiBwYXRjaCB0aGUgZGVzY3JpcHRvcjogIENocm9tZSAmIEZpcmVmb3hcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgLy8gaW4gSUUvRWRnZSwgb25Qcm9wIG5vdCBleGlzdCBpbiB3aW5kb3cgb2JqZWN0LCBidXQgaW4gV2luZG93UHJvdG90eXBlXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIHBhc3MgV2luZG93UHJvdG90eXBlIHRvIGNoZWNrIG9uUHJvcCBleGlzdCBvciBub3RcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKHdpbmRvdywgZXZlbnROYW1lcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKHdpbmRvdykpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93WydTVkdFbGVtZW50J10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMod2luZG93WydTVkdFbGVtZW50J10ucHJvdG90eXBlLCBldmVudE5hbWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE5hbWVzKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgZXZlbnROYW1lcyk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhIVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgbWVkaWFFbGVtZW50RXZlbnROYW1lcyk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhIVE1MRnJhbWVTZXRFbGVtZW50LnByb3RvdHlwZSwgd2luZG93RXZlbnROYW1lcy5jb25jYXQoZnJhbWVTZXRFdmVudE5hbWVzKSk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhIVE1MQm9keUVsZW1lbnQucHJvdG90eXBlLCB3aW5kb3dFdmVudE5hbWVzLmNvbmNhdChmcmFtZVNldEV2ZW50TmFtZXMpKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKEhUTUxGcmFtZUVsZW1lbnQucHJvdG90eXBlLCBmcmFtZUV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSFRNTElGcmFtZUVsZW1lbnQucHJvdG90eXBlLCBmcmFtZUV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgdmFyIEhUTUxNYXJxdWVlRWxlbWVudF8xID0gd2luZG93WydIVE1MTWFycXVlZUVsZW1lbnQnXTtcbiAgICAgICAgICAgIGlmIChIVE1MTWFycXVlZUVsZW1lbnRfMSkge1xuICAgICAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKEhUTUxNYXJxdWVlRWxlbWVudF8xLnByb3RvdHlwZSwgbWFycXVlZUV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzKTtcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlLCBYTUxIdHRwUmVxdWVzdEV2ZW50TmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgSURCSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJJbmRleC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcyk7XG4gICAgICAgICAgICBwYXRjaE9uUHJvcGVydGllcyhJREJSZXF1ZXN0LnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzKTtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKElEQk9wZW5EQlJlcXVlc3QucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCRGF0YWJhc2UucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMpO1xuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXMoSURCQ3Vyc29yLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKFdlYlNvY2tldC5wcm90b3R5cGUsIHdlYnNvY2tldEV2ZW50TmFtZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBTYWZhcmksIEFuZHJvaWQgYnJvd3NlcnMgKEplbGx5IEJlYW4pXG4gICAgICAgIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCk7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIGlmIChzdXBwb3J0c1dlYlNvY2tldCkge1xuICAgICAgICAgICAgYXBwbHkoX2dsb2JhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpIHtcbiAgICBpZiAoKGlzQnJvd3NlciB8fCBpc01peCkgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpICYmXG4gICAgICAgIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBXZWJLaXQgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNDM2NFxuICAgICAgICAvLyBJREwgaW50ZXJmYWNlIGF0dHJpYnV0ZXMgYXJlIG5vdCBjb25maWd1cmFibGVcbiAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpO1xuICAgICAgICBpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB4aHJEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnKTtcbiAgICAvLyBhZGQgZW51bWVyYWJsZSBhbmQgY29uZmlndXJhYmxlIGhlcmUgYmVjYXVzZSBpbiBvcGVyYVxuICAgIC8vIGJ5IGRlZmF1bHQgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWRcbiAgICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAvLyBub24tY29uZmlndXJhYmxlXG4gICAgLy8gYW5kIGlmIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vbnJlYWR5c3RhdGVjaGFuZ2UgaXMgdW5kZWZpbmVkLFxuICAgIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gICAgaWYgKHhockRlc2MpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29ucmVhZHlzdGF0ZWNoYW5nZScsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9ICEhcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgLy8gcmVzdG9yZSBvcmlnaW5hbCBkZXNjXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB4aHJEZXNjIHx8IHt9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdvbnJlYWR5c3RhdGVjaGFuZ2UnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbem9uZVN5bWJvbCgnZmFrZW9ucmVhZHlzdGF0ZWNoYW5nZScpXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXNbem9uZVN5bWJvbCgnZmFrZW9ucmVhZHlzdGF0ZWNoYW5nZScpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB2YXIgZGV0ZWN0RnVuYyA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGRldGVjdEZ1bmM7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXFbem9uZVN5bWJvbCgnZmFrZW9ucmVhZHlzdGF0ZWNoYW5nZScpXSA9PT0gZGV0ZWN0RnVuYztcbiAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG52YXIgdW5ib3VuZEtleSA9IHpvbmVTeW1ib2woJ3VuYm91bmQnKTtcbi8vIFdoZW5ldmVyIGFueSBldmVudExpc3RlbmVyIGZpcmVzLCB3ZSBjaGVjayB0aGUgZXZlbnRMaXN0ZW5lciB0YXJnZXQgYW5kIGFsbCBwYXJlbnRzXG4vLyBmb3IgYG9ud2hhdGV2ZXJgIHByb3BlcnRpZXMgYW5kIHJlcGxhY2UgdGhlbSB3aXRoIHpvbmUtYm91bmQgZnVuY3Rpb25zXG4vLyAtIENocm9tZSAoZm9yIG5vdylcbmZ1bmN0aW9uIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCkge1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgdmFyIG9ucHJvcGVydHkgPSAnb24nICsgcHJvcGVydHk7XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZWx0ID0gZXZlbnQudGFyZ2V0LCBib3VuZCwgc291cmNlO1xuICAgICAgICAgICAgaWYgKGVsdCkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVsdC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9ICd1bmtub3duLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGVsdCkge1xuICAgICAgICAgICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBib3VuZCA9IFpvbmUuY3VycmVudC53cmFwKGVsdFtvbnByb3BlcnR5XSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgYm91bmRbdW5ib3VuZEtleV0gPSBlbHRbb25wcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHQgPSBlbHQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX2xvb3BfMShpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudFBhdGNoKF9nbG9iYWwpIHtcbiAgICBpZiAoKCFpc0Jyb3dzZXIgJiYgIWlzTWl4KSB8fCAhKCdyZWdpc3RlckVsZW1lbnQnIGluIF9nbG9iYWwuZG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIF9yZWdpc3RlckVsZW1lbnQgPSBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFsnY3JlYXRlZENhbGxiYWNrJywgJ2F0dGFjaGVkQ2FsbGJhY2snLCAnZGV0YWNoZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICBkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICdEb2N1bWVudC5yZWdpc3RlckVsZW1lbnQ6OicgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gWm9uZS5jdXJyZW50LndyYXAoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWRlZmluZVByb3BlcnR5KG9wdHMucHJvdG90eXBlLCBjYWxsYmFjaywgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBab25lLmN1cnJlbnQud3JhcChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSA9IFpvbmUuY3VycmVudC53cmFwKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3JlZ2lzdGVyRWxlbWVudC5hcHBseShkb2N1bWVudCwgW25hbWUsIG9wdHNdKTtcbiAgICB9O1xuICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChkb2N1bWVudC5yZWdpc3RlckVsZW1lbnQsIF9yZWdpc3RlckVsZW1lbnQpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgdmFyIHNldCA9ICdzZXQnO1xuICAgIHZhciBjbGVhciA9ICdjbGVhcic7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdUaW1lb3V0Jyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbnRlcnZhbCcpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnbW96UmVxdWVzdCcsICdtb3pDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3dlYmtpdFJlcXVlc3QnLCAnd2Via2l0Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdibG9ja2luZycsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHZhciBibG9ja2luZ01ldGhvZHMgPSBbJ2FsZXJ0JywgJ3Byb21wdCcsICdjb25maXJtJ107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja2luZ01ldGhvZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5hbWVfMSA9IGJsb2NraW5nTWV0aG9kc1tpXTtcbiAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lXzEsIGZ1bmN0aW9uIChkZWxlZ2F0ZSwgc3ltYm9sLCBuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHMsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgZ2xvYmFsLCBhcmdzLCBuYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgZXZlbnRUYXJnZXRQYXRjaChnbG9iYWwpO1xuICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICB2YXIgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGdsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG4gICAgcGF0Y2hDbGFzcygnTXV0YXRpb25PYnNlcnZlcicpO1xuICAgIHBhdGNoQ2xhc3MoJ1dlYktpdE11dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdvbl9wcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGdsb2JhbCk7XG4gICAgcHJvcGVydHlQYXRjaCgpO1xuICAgIHJlZ2lzdGVyRWxlbWVudFBhdGNoKGdsb2JhbCk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdYSFInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAvLyBUcmVhdCBYTUxIVFRQUmVxdWVzdCBhcyBhIG1hY3JvdGFzay5cbiAgICBwYXRjaFhIUihnbG9iYWwpO1xuICAgIHZhciBYSFJfVEFTSyA9IHpvbmVTeW1ib2woJ3hoclRhc2snKTtcbiAgICB2YXIgWEhSX1NZTkMgPSB6b25lU3ltYm9sKCd4aHJTeW5jJyk7XG4gICAgdmFyIFhIUl9MSVNURU5FUiA9IHpvbmVTeW1ib2woJ3hockxpc3RlbmVyJyk7XG4gICAgdmFyIFhIUl9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sKCd4aHJTY2hlZHVsZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgICAgZnVuY3Rpb24gZmluZFBlbmRpbmdUYXNrKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHBlbmRpbmdUYXNrID0gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIHJldHVybiBwZW5kaW5nVGFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3RbWEhSX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBkYXRhLnRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgZGF0YS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuZXdMaXN0ZW5lciA9IGRhdGEudGFyZ2V0W1hIUl9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGFyZ2V0LnJlYWR5U3RhdGUgPT09IGRhdGEudGFyZ2V0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgWE1MSHR0cFJlcXVlc3RbWEhSX1NDSEVEVUxFRF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suc3RhdGUgPT09ICdzY2hlZHVsZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBuZXdMaXN0ZW5lcik7XG4gICAgICAgICAgICB2YXIgc3RvcmVkVGFzayA9IGRhdGEudGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgICAgICAgIGRhdGEudGFyZ2V0W1hIUl9UQVNLXSA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgWE1MSHR0cFJlcXVlc3RbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuTmF0aXZlID0gcGF0Y2hNZXRob2Qod2luZG93LlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgc2VsZltYSFJfU1lOQ10gPSBhcmdzWzJdID09IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5OYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH07IH0pO1xuICAgICAgICB2YXIgc2VuZE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIFhIUiBpcyBzeW5jIHRoZXJlIGlzIG5vIHRhc2sgdG8gc2NoZWR1bGUsIGp1c3QgZXhlY3V0ZSB0aGUgY29kZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0geyB0YXJnZXQ6IHNlbGYsIGlzUGVyaW9kaWM6IGZhbHNlLCBkZWxheTogbnVsbCwgYXJnczogYXJncywgYWJvcnRlZDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5zY2hlZHVsZU1hY3JvVGFzaygnWE1MSHR0cFJlcXVlc3Quc2VuZCcsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTsgfSk7XG4gICAgICAgIHZhciBhYm9ydE5hdGl2ZSA9IHBhdGNoTWV0aG9kKHdpbmRvdy5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUsICdhYm9ydCcsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgfTsgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnZ2VvbG9jYXRpb24nLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAvLy8gR0VPX0xPQ0FUSU9OXG4gICAgaWYgKGdsb2JhbFsnbmF2aWdhdG9yJ10gJiYgZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbikge1xuICAgICAgICBwYXRjaFByb3RvdHlwZShnbG9iYWxbJ25hdmlnYXRvciddLmdlb2xvY2F0aW9uLCBbJ2dldEN1cnJlbnRQb3NpdGlvbicsICd3YXRjaFBvc2l0aW9uJ10pO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ1Byb21pc2VSZWplY3Rpb25FdmVudCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgIC8vIGhhbmRsZSB1bmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cbiAgICBmdW5jdGlvbiBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoZXZ0TmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudFRhc2tzID0gZmluZEV2ZW50VGFzayhnbG9iYWwsIGV2dE5hbWUpO1xuICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIHZhciBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwgeyBwcm9taXNlOiBlLnByb21pc2UsIHJlYXNvbjogZS5yZWplY3Rpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J10pIHtcbiAgICAgICAgWm9uZVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicpO1xuICAgICAgICBab25lW3pvbmVTeW1ib2woJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID1cbiAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uaGFuZGxlZCcpO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3V0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldE1ldGhvZHMgPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcztcbiAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMgPSBwYXRjaE9uUHJvcGVydGllcztcbn0pO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbn0pKSk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5uYW1lc3BhY2UgUmVmbGVjdCB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBNZXRhZGF0YSBQcm9wb3NhbFxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS9cclxuXHJcbiAgICB0eXBlIEhhc2hNYXA8Vj4gPSBSZWNvcmQ8c3RyaW5nLCBWPjtcclxuXHJcbiAgICBpbnRlcmZhY2UgQnVmZmVyTGlrZSB7XHJcbiAgICAgICAgW29mZnNldDogbnVtYmVyXTogbnVtYmVyO1xyXG4gICAgICAgIGxlbmd0aDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgSXRlcmF0b3JSZXN1bHQ8VD4gPSB7IHZhbHVlOiBULCBkb25lOiBmYWxzZSB9IHwgeyB2YWx1ZTogbmV2ZXIsIGRvbmU6IHRydWUgfTtcclxuXHJcbiAgICBpbnRlcmZhY2UgSXRlcmF0b3I8VD4ge1xyXG4gICAgICAgIG5leHQodmFsdWU/OiBhbnkpOiBJdGVyYXRvclJlc3VsdDxUPjtcclxuICAgICAgICB0aHJvdz8odmFsdWU6IGFueSk6IEl0ZXJhdG9yUmVzdWx0PFQ+O1xyXG4gICAgICAgIHJldHVybj8odmFsdWU/OiBUKTogSXRlcmF0b3JSZXN1bHQ8VD47XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIEl0ZXJhYmxlPFQ+IHtcclxuICAgICAgICBcIkBAaXRlcmF0b3JcIigpOiBJdGVyYXRvcjxUPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSXRlcmFibGVJdGVyYXRvcjxUPiBleHRlbmRzIEl0ZXJhdG9yPFQ+IHtcclxuICAgICAgICBcIkBAaXRlcmF0b3JcIigpOiBJdGVyYWJsZUl0ZXJhdG9yPFQ+O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBNYXA8SywgVj4gZXh0ZW5kcyBJdGVyYWJsZTxbSywgVl0+IHtcclxuICAgICAgICBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgaGFzKGtleTogSyk6IGJvb2xlYW47XHJcbiAgICAgICAgZ2V0KGtleTogSyk6IFY7XHJcbiAgICAgICAgc2V0KGtleTogSywgdmFsdWU/OiBWKTogdGhpcztcclxuICAgICAgICBkZWxldGUoa2V5OiBLKTogYm9vbGVhbjtcclxuICAgICAgICBjbGVhcigpOiB2b2lkO1xyXG4gICAgICAgIGtleXMoKTogSXRlcmFibGVJdGVyYXRvcjxLPjtcclxuICAgICAgICB2YWx1ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxWPjtcclxuICAgICAgICBlbnRyaWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8W0ssIFZdPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgTWFwQ29uc3RydWN0b3Ige1xyXG4gICAgICAgIG5ldyAoKTogTWFwPGFueSwgYW55PjtcclxuICAgICAgICBuZXcgPEssIFY+KCk6IE1hcDxLLCBWPjtcclxuICAgICAgICBwcm90b3R5cGU6IE1hcDxhbnksIGFueT47XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFNldDxUPiBleHRlbmRzIEl0ZXJhYmxlPFQ+IHtcclxuICAgICAgICBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgaGFzKHZhbHVlOiBUKTogYm9vbGVhbjtcclxuICAgICAgICBhZGQodmFsdWU6IFQpOiB0aGlzO1xyXG4gICAgICAgIGRlbGV0ZSh2YWx1ZTogVCk6IGJvb2xlYW47XHJcbiAgICAgICAgY2xlYXIoKTogdm9pZDtcclxuICAgICAgICBrZXlzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8VD47XHJcbiAgICAgICAgdmFsdWVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8VD47XHJcbiAgICAgICAgZW50cmllcygpOiBJdGVyYWJsZUl0ZXJhdG9yPFtULCBUXT47XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFNldENvbnN0cnVjdG9yIHtcclxuICAgICAgICBuZXcgKCk6IFNldDxhbnk+O1xyXG4gICAgICAgIG5ldyA8VD4oKTogU2V0PFQ+O1xyXG4gICAgICAgIHByb3RvdHlwZTogU2V0PGFueT47XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFdlYWtNYXA8SywgVj4ge1xyXG4gICAgICAgIGNsZWFyKCk6IHZvaWQ7XHJcbiAgICAgICAgZGVsZXRlKGtleTogSyk6IGJvb2xlYW47XHJcbiAgICAgICAgZ2V0KGtleTogSyk6IFY7XHJcbiAgICAgICAgaGFzKGtleTogSyk6IGJvb2xlYW47XHJcbiAgICAgICAgc2V0KGtleTogSywgdmFsdWU/OiBWKTogV2Vha01hcDxLLCBWPjtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgV2Vha01hcENvbnN0cnVjdG9yIHtcclxuICAgICAgICBuZXcgKCk6IFdlYWtNYXA8YW55LCBhbnk+O1xyXG4gICAgICAgIG5ldyA8SywgVj4oKTogV2Vha01hcDxLLCBWPjtcclxuICAgICAgICBwcm90b3R5cGU6IFdlYWtNYXA8YW55LCBhbnk+O1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgTWVtYmVyRGVjb3JhdG9yID0gPFQ+KHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8VD4pID0+IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+IHwgdm9pZDtcclxuXHJcbiAgICBkZWNsYXJlIGNvbnN0IFN5bWJvbDogeyBpdGVyYXRvcjogc3ltYm9sLCB0b1ByaW1pdGl2ZTogc3ltYm9sIH07XHJcbiAgICBkZWNsYXJlIGNvbnN0IFNldDogU2V0Q29uc3RydWN0b3I7XHJcbiAgICBkZWNsYXJlIGNvbnN0IFdlYWtNYXA6IFdlYWtNYXBDb25zdHJ1Y3RvcjtcclxuICAgIGRlY2xhcmUgY29uc3QgTWFwOiBNYXBDb25zdHJ1Y3RvcjtcclxuICAgIGRlY2xhcmUgY29uc3QgZ2xvYmFsOiBhbnk7XHJcbiAgICBkZWNsYXJlIGNvbnN0IGNyeXB0bzogQ3J5cHRvO1xyXG4gICAgZGVjbGFyZSBjb25zdCBtc0NyeXB0bzogQ3J5cHRvO1xyXG4gICAgZGVjbGFyZSBjb25zdCBwcm9jZXNzOiBhbnk7XHJcblxyXG4gICAgY29uc3QgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxuXHJcbiAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIFN5bWJvbCBzdXBwb3J0XHJcbiAgICBjb25zdCBzdXBwb3J0c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgIGNvbnN0IHRvUHJpbWl0aXZlU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC50b1ByaW1pdGl2ZSA6IFwiQEB0b1ByaW1pdGl2ZVwiO1xyXG4gICAgY29uc3QgaXRlcmF0b3JTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIDogXCJAQGl0ZXJhdG9yXCI7XHJcblxyXG4gICAgbmFtZXNwYWNlIEhhc2hNYXAge1xyXG4gICAgICAgIGNvbnN0IHN1cHBvcnRzQ3JlYXRlID0gdHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIjsgLy8gZmVhdHVyZSB0ZXN0IGZvciBPYmplY3QuY3JlYXRlIHN1cHBvcnRcclxuICAgICAgICBjb25zdCBzdXBwb3J0c1Byb3RvID0geyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheTsgLy8gZmVhdHVyZSB0ZXN0IGZvciBfX3Byb3RvX18gc3VwcG9ydFxyXG4gICAgICAgIGNvbnN0IGRvd25MZXZlbCA9ICFzdXBwb3J0c0NyZWF0ZSAmJiAhc3VwcG9ydHNQcm90bztcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGFuIG9iamVjdCBpbiBkaWN0aW9uYXJ5IG1vZGUgKGEuay5hLiBcInNsb3dcIiBtb2RlIGluIHY4KVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBjcmVhdGUgPSBzdXBwb3J0c0NyZWF0ZVxyXG4gICAgICAgICAgICA/IDxWPigpID0+IE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkgYXMgSGFzaE1hcDxWPilcclxuICAgICAgICAgICAgOiBzdXBwb3J0c1Byb3RvXHJcbiAgICAgICAgICAgICAgICA/IDxWPigpID0+IE1ha2VEaWN0aW9uYXJ5KHsgX19wcm90b19fOiBudWxsIGFzIGFueSB9IGFzIEhhc2hNYXA8Vj4pXHJcbiAgICAgICAgICAgICAgICA6IDxWPigpID0+IE1ha2VEaWN0aW9uYXJ5KHt9IGFzIEhhc2hNYXA8Vj4pO1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgaGFzID0gZG93bkxldmVsXHJcbiAgICAgICAgICAgID8gPFY+KG1hcDogSGFzaE1hcDxWPiwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpID0+IGhhc093bi5jYWxsKG1hcCwga2V5KVxyXG4gICAgICAgICAgICA6IDxWPihtYXA6IEhhc2hNYXA8Vj4sIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKSA9PiBrZXkgaW4gbWFwO1xyXG5cclxuICAgICAgICBleHBvcnQgY29uc3QgZ2V0ID0gZG93bkxldmVsXHJcbiAgICAgICAgICAgID8gPFY+KG1hcDogSGFzaE1hcDxWPiwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBWIHwgdW5kZWZpbmVkID0+IGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIDogPFY+KG1hcDogSGFzaE1hcDxWPiwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBWIHwgdW5kZWZpbmVkID0+IG1hcFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgZ2xvYmFsIG9yIHNoaW0gdmVyc2lvbnMgb2YgTWFwLCBTZXQsIGFuZCBXZWFrTWFwXHJcbiAgICBjb25zdCBmdW5jdGlvblByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbik7XHJcbiAgICBjb25zdCB1c2VQb2x5ZmlsbCA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W1wiUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMXCJdID09PSBcInRydWVcIjtcclxuICAgIGNvbnN0IF9NYXA6IHR5cGVvZiBNYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IE1hcCA6IENyZWF0ZU1hcFBvbHlmaWxsKCk7XHJcbiAgICBjb25zdCBfU2V0OiB0eXBlb2YgU2V0ID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBTZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU2V0LnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBTZXQgOiBDcmVhdGVTZXRQb2x5ZmlsbCgpO1xyXG4gICAgY29uc3QgX1dlYWtNYXA6IHR5cGVvZiBXZWFrTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIgPyBXZWFrTWFwIDogQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCk7XHJcblxyXG4gICAgLy8gW1tNZXRhZGF0YV1dIGludGVybmFsIHNsb3RcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xyXG4gICAgY29uc3QgTWV0YWRhdGEgPSBuZXcgX1dlYWtNYXA8YW55LCBNYXA8c3RyaW5nIHwgc3ltYm9sIHwgdW5kZWZpbmVkLCBNYXA8YW55LCBhbnk+Pj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBBcHBsaWVzIGEgc2V0IG9mIGRlY29yYXRvcnMgdG8gYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIGFwcGx5aW5nIHRoZSBwcm92aWRlZCBkZWNvcmF0b3JzLlxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlciBvZiB0aGVpciBwb3NpdGlvbnMgaW4gdGhlIGFycmF5LlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7IH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICBFeGFtcGxlID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9yczogQ2xhc3NEZWNvcmF0b3JbXSwgdGFyZ2V0OiBGdW5jdGlvbik6IEZ1bmN0aW9uO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIEFwcGxpZXMgYSBzZXQgb2YgZGVjb3JhdG9ycyB0byBhIHByb3BlcnR5IG9mIGEgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gZGVjb3JhdG9ycyBBbiBhcnJheSBvZiBkZWNvcmF0b3JzLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IFRoZSBwcm9wZXJ0eSBrZXkgdG8gZGVjb3JhdGUuXHJcbiAgICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgQSBwcm9wZXJ0eSBkZXNjcmlwdG9yLlxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZCgpIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9yczogKFByb3BlcnR5RGVjb3JhdG9yIHwgTWV0aG9kRGVjb3JhdG9yKVtdLCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCwgYXR0cmlidXRlcz86IFByb3BlcnR5RGVzY3JpcHRvciB8IG51bGwpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cclxuICAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyBBIHByb3BlcnR5IGRlc2NyaXB0b3IuXHJcbiAgICAgICogQHJlbWFya3MgRGVjb3JhdG9ycyBhcmUgYXBwbGllZCBpbiByZXZlcnNlIG9yZGVyLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZCgpIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIikpKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxyXG4gICAgICAqICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzOiAoUHJvcGVydHlEZWNvcmF0b3IgfCBNZXRob2REZWNvcmF0b3IpW10sIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBhdHRyaWJ1dGVzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBQcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxyXG4gICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSB0YXJnZXQga2V5LlxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9yczogKENsYXNzRGVjb3JhdG9yIHwgTWVtYmVyRGVjb3JhdG9yKVtdLCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk/OiBzdHJpbmcgfCBzeW1ib2wsIGF0dHJpYnV0ZXM/OiBQcm9wZXJ0eURlc2NyaXB0b3IgfCBudWxsKTogUHJvcGVydHlEZXNjcmlwdG9yIHwgRnVuY3Rpb24gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc09iamVjdChhdHRyaWJ1dGVzKSAmJiAhSXNVbmRlZmluZWQoYXR0cmlidXRlcykgJiYgIUlzTnVsbChhdHRyaWJ1dGVzKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoSXNOdWxsKGF0dHJpYnV0ZXMpKSBhdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eSg8TWVtYmVyRGVjb3JhdG9yW10+ZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIERlY29yYXRlQ29uc3RydWN0b3IoPENsYXNzRGVjb3JhdG9yW10+ZGVjb3JhdG9ycywgPEZ1bmN0aW9uPnRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDQuMS4yIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0Lm1ldGFkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogQSBkZWZhdWx0IG1ldGFkYXRhIGRlY29yYXRvciBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgb24gYSBjbGFzcywgY2xhc3MgbWVtYmVyLCBvciBwYXJhbWV0ZXIuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cclxuICAgICAgKiBAcmV0dXJucyBBIGRlY29yYXRvciBmdW5jdGlvbi5cclxuICAgICAgKiBAcmVtYXJrc1xyXG4gICAgICAqIElmIGBtZXRhZGF0YUtleWAgaXMgYWxyZWFkeSBkZWZpbmVkIGZvciB0aGUgdGFyZ2V0IGFuZCB0YXJnZXQga2V5LCB0aGVcclxuICAgICAgKiBtZXRhZGF0YVZhbHVlIGZvciB0aGF0IGtleSB3aWxsIGJlIG92ZXJ3cml0dGVuLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IsIFR5cGVTY3JpcHQgb25seSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSwgVHlwZVNjcmlwdCBvbmx5KVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBwcm9wZXJ0eTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBtZXRob2QoKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXk6IGFueSwgbWV0YWRhdGFWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldDogRnVuY3Rpb24pOiB2b2lkO1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCk6IHZvaWQ7XHJcbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleT86IHN0cmluZyB8IHN5bWJvbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkgJiYgIUlzUHJvcGVydHlLZXkocHJvcGVydHlLZXkpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVjb3JhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQuMS4zIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCBbLCBwcm9wZXJ0eUtleV0pXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0LmRlZmluZW1ldGFkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGRlY29yYXRvciBmYWN0b3J5IGFzIG1ldGFkYXRhLXByb2R1Y2luZyBhbm5vdGF0aW9uLlxyXG4gICAgICAqICAgICBmdW5jdGlvbiBNeUFubm90YXRpb24ob3B0aW9ucyk6IENsYXNzRGVjb3JhdG9yIHtcclxuICAgICAgKiAgICAgICAgIHJldHVybiB0YXJnZXQgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIG1ldGFkYXRhVmFsdWU6IGFueSwgdGFyZ2V0OiBhbnkpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIERlZmluZSBhIHVuaXF1ZSBtZXRhZGF0YSBlbnRyeSBvbiB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBBIHZhbHVlIHRoYXQgY29udGFpbnMgYXR0YWNoZWQgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0byBkZWZpbmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgTnVtYmVyLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBOdW1iZXIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBOdW1iZXIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgTnVtYmVyLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXHJcbiAgICAgICogICAgIGZ1bmN0aW9uIE15QW5ub3RhdGlvbihvcHRpb25zKTogUHJvcGVydHlEZWNvcmF0b3Ige1xyXG4gICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleSkgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCwga2V5KTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZGVmaW5lTWV0YWRhdGEobWV0YWRhdGFLZXk6IGFueSwgbWV0YWRhdGFWYWx1ZTogYW55LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogRGVmaW5lIGEgdW5pcXVlIG1ldGFkYXRhIGVudHJ5IG9uIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YVZhbHVlIEEgdmFsdWUgdGhhdCBjb250YWlucyBhdHRhY2hlZCBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRvIGRlZmluZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBkZWNvcmF0b3IgZmFjdG9yeSBhcyBtZXRhZGF0YS1wcm9kdWNpbmcgYW5ub3RhdGlvbi5cclxuICAgICAgKiAgICAgZnVuY3Rpb24gTXlBbm5vdGF0aW9uKG9wdGlvbnMpOiBEZWNvcmF0b3Ige1xyXG4gICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleT8pID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCB0YXJnZXQsIGtleSk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIG1ldGFkYXRhVmFsdWU6IGFueSwgdGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5Pzogc3RyaW5nIHwgc3ltYm9sKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQuMS40IFJlZmxlY3QuaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCBbLCBwcm9wZXJ0eUtleV0pXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0Lmhhc21ldGFkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluIGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbjsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyBhIHZhbHVlIGluZGljYXRpbmcgd2hldGhlciB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluIGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbjsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc01ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWV0YWRhdGEga2V5IHdhcyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW47IG90aGVyd2lzZSwgYGZhbHNlYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk/OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4xLjUgUmVmbGVjdC5oYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0IFssIHByb3BlcnR5S2V5XSlcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QtaGFzb3dubWV0YWRhdGFcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Q7IG90aGVyd2lzZSwgYGZhbHNlYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXk6IGFueSwgdGFyZ2V0OiBhbnkpOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3QgaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sKTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleT86IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKSBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LjEuNiBSZWZsZWN0LmdldE1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQgWywgcHJvcGVydHlLZXldKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jcmVmbGVjdC1nZXRtZXRhZGF0YVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleT86IHN0cmluZyB8IHN5bWJvbCk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDQuMS43IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCBbLCBwcm9wZXJ0eUtleV0pXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0LWdldG93bm1ldGFkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSk6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXk6IGFueSwgdGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBhbnk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBUaGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBtZXRhZGF0YSBrZXkgaWYgZm91bmQ7IG90aGVyd2lzZSwgYHVuZGVmaW5lZGAuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXk6IGFueSwgdGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5Pzogc3RyaW5nIHwgc3ltYm9sKTogYW55IHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4xLjggUmVmbGVjdC5nZXRNZXRhZGF0YUtleXModGFyZ2V0IFssIHByb3BlcnR5S2V5XSlcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QtZ2V0bWV0YWRhdGFrZXlzXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0OiBhbnkpOiBhbnlbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbi5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TWV0YWRhdGFLZXlzKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sKTogYW55W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YUtleXModGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5Pzogc3RyaW5nIHwgc3ltYm9sKTogYW55W10ge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKSBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeU1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LjEuOSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyh0YXJnZXQgWywgcHJvcGVydHlLZXldKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jcmVmbGVjdC1nZXRvd25tZXRhZGF0YVxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgdGhlIHVuaXF1ZSBtZXRhZGF0YSBrZXlzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3QuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0OiBhbnkpOiBhbnlbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcgfCBzeW1ib2wpOiBhbnlbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleT86IHN0cmluZyB8IHN5bWJvbCk6IGFueVtdIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNC4xLjEwIFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCBbLCBwcm9wZXJ0eUtleV0pXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0LWRlbGV0ZW1ldGFkYXRhXHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBlbnRyeSB3YXMgZm91bmQgYW5kIGRlbGV0ZWQ7IG90aGVyd2lzZSwgZmFsc2UuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5OiBhbnksIHRhcmdldDogYW55KTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAgKiBEZWxldGVzIHRoZSBtZXRhZGF0YSBlbnRyeSBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGtleS5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyB8IHN5bWJvbCk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXRhZGF0YShtZXRhZGF0YUtleTogYW55LCB0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk/OiBzdHJpbmcgfCBzeW1ib2wpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSkgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghbWV0YWRhdGFNYXAuZGVsZXRlKG1ldGFkYXRhS2V5KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChtZXRhZGF0YU1hcC5zaXplID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgTWV0YWRhdGEuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzOiBDbGFzc0RlY29yYXRvcltdLCB0YXJnZXQ6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKGRlY29yYXRlZCkgJiYgIUlzTnVsbChkZWNvcmF0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IoZGVjb3JhdGVkKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gPEZ1bmN0aW9uPmRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERlY29yYXRlUHJvcGVydHkoZGVjb3JhdG9yczogTWVtYmVyRGVjb3JhdG9yW10sIHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nIHwgc3ltYm9sLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY29yYXRlZCA9IGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChkZWNvcmF0ZWQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gPFByb3BlcnR5RGVzY3JpcHRvcj5kZWNvcmF0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMi4xLjEgR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBDcmVhdGUpXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNnZXRvcmNyZWF0ZW1ldGFkYXRhbWFwXHJcbiAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE86IGFueSwgUDogc3RyaW5nIHwgc3ltYm9sIHwgdW5kZWZpbmVkLCBDcmVhdGU6IHRydWUpOiBNYXA8YW55LCBhbnk+O1xyXG4gICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPOiBhbnksIFA6IHN0cmluZyB8IHN5bWJvbCB8IHVuZGVmaW5lZCwgQ3JlYXRlOiBmYWxzZSk6IE1hcDxhbnksIGFueT4gfCB1bmRlZmluZWQ7XHJcbiAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE86IGFueSwgUDogc3RyaW5nIHwgc3ltYm9sIHwgdW5kZWZpbmVkLCBDcmVhdGU6IGJvb2xlYW4pOiBNYXA8YW55LCBhbnk+IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQoTyk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldE1ldGFkYXRhKSkge1xyXG4gICAgICAgICAgICBpZiAoIUNyZWF0ZSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEgPSBuZXcgX01hcDxzdHJpbmcgfCBzeW1ib2wgfCB1bmRlZmluZWQsIE1hcDxhbnksIGFueT4+KCk7XHJcbiAgICAgICAgICAgIE1ldGFkYXRhLnNldChPLCB0YXJnZXRNZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtZXRhZGF0YU1hcCA9IHRhcmdldE1ldGFkYXRhLmdldChQKTtcclxuICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKSB7XHJcbiAgICAgICAgICAgIGlmICghQ3JlYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBtZXRhZGF0YU1hcCA9IG5ldyBfTWFwPGFueSwgYW55PigpO1xyXG4gICAgICAgICAgICB0YXJnZXRNZXRhZGF0YS5zZXQoUCwgbWV0YWRhdGFNYXApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4xLjEuMSBPcmRpbmFyeUhhc01ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNtZXRhZGF0YVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleTogYW55LCBPOiBhbnksIFA6IHN0cmluZyB8IHN5bWJvbCB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIGlmIChoYXNPd24pIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSkgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuMS4yLjEgT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzb3dubWV0YWRhdGFcclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXk6IGFueSwgTzogYW55LCBQOiBzdHJpbmcgfCBzeW1ib2wgfCB1bmRlZmluZWQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBUb0Jvb2xlYW4obWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gMy4xLjMuMSBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRtZXRhZGF0YVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleTogYW55LCBPOiBhbnksIFA6IHN0cmluZyB8IHN5bWJvbCB8IHVuZGVmaW5lZCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgaWYgKGhhc093bikgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSkgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLjEuNC4xIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG93bm1ldGFkYXRhXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5OiBhbnksIE86IGFueSwgUDogc3RyaW5nIHwgc3ltYm9sIHwgdW5kZWZpbmVkKTogYW55IHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLjEuNS4xIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWRlZmluZW93bm1ldGFkYXRhXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5OiBhbnksIE1ldGFkYXRhVmFsdWU6IGFueSwgTzogYW55LCBQOiBzdHJpbmcgfCBzeW1ib2wgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyB0cnVlKTtcclxuICAgICAgICBtZXRhZGF0YU1hcC5zZXQoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDMuMS42LjEgT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5bWV0YWRhdGFrZXlzXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPOiBhbnksIFA6IHN0cmluZyB8IHN5bWJvbCB8IHVuZGVmaW5lZCk6IGFueVtdIHtcclxuICAgICAgICBjb25zdCBvd25LZXlzID0gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCk7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSByZXR1cm4gb3duS2V5cztcclxuICAgICAgICBjb25zdCBwYXJlbnRLZXlzID0gT3JkaW5hcnlNZXRhZGF0YUtleXMocGFyZW50LCBQKTtcclxuICAgICAgICBpZiAocGFyZW50S2V5cy5sZW5ndGggPD0gMCkgcmV0dXJuIG93bktleXM7XHJcbiAgICAgICAgaWYgKG93bktleXMubGVuZ3RoIDw9IDApIHJldHVybiBwYXJlbnRLZXlzO1xyXG4gICAgICAgIGNvbnN0IHNldCA9IG5ldyBfU2V0PGFueT4oKTtcclxuICAgICAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIG93bktleXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIWhhc0tleSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcGFyZW50S2V5cykge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XHJcbiAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuXHJcbiAgICAvLyAzLjEuNy4xIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW93bm1ldGFkYXRha2V5c1xyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTzogYW55LCBQOiBzdHJpbmcgfCBzeW1ib2wgfCB1bmRlZmluZWQpOiBhbnlbXSB7XHJcbiAgICAgICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSkgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgY29uc3Qga2V5c09iaiA9IG1ldGFkYXRhTWFwLmtleXMoKTtcclxuICAgICAgICBjb25zdCBpdGVyYXRvciA9IEdldEl0ZXJhdG9yKGtleXNPYmopO1xyXG4gICAgICAgIGxldCBrID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKTtcclxuICAgICAgICAgICAgaWYgKCFuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLmxlbmd0aCA9IGs7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBJdGVyYXRvclZhbHVlKG5leHQpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAga2V5c1trXSA9IG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA2IEVDTUFTY3JpcHQgRGF0YSBUeXAwZXMgYW5kIFZhbHVlc1xyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1kYXRhLXR5cGVzLWFuZC12YWx1ZXNcclxuICAgIGZ1bmN0aW9uIFR5cGUoeDogYW55KTogVGFnIHtcclxuICAgICAgICBpZiAoeCA9PT0gbnVsbCkgcmV0dXJuIFRhZy5OdWxsO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHgpIHtcclxuICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOiByZXR1cm4gVGFnLlVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIFRhZy5Cb29sZWFuO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiBUYWcuU3RyaW5nO1xyXG4gICAgICAgICAgICBjYXNlIFwic3ltYm9sXCI6IHJldHVybiBUYWcuU3ltYm9sO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHJldHVybiBUYWcuTnVtYmVyO1xyXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHJldHVybiB4ID09PSBudWxsID8gVGFnLk51bGwgOiBUYWcuT2JqZWN0O1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gVGFnLk9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNi4xIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgVHlwZXNcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXNcclxuICAgIGNvbnN0IGVudW0gVGFnIHtcclxuICAgICAgICBVbmRlZmluZWQsXHJcbiAgICAgICAgTnVsbCxcclxuICAgICAgICBCb29sZWFuLFxyXG4gICAgICAgIFN0cmluZyxcclxuICAgICAgICBTeW1ib2wsXHJcbiAgICAgICAgTnVtYmVyLFxyXG4gICAgICAgIE9iamVjdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIDYuMS4xIFRoZSBVbmRlZmluZWQgVHlwZVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy11bmRlZmluZWQtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNVbmRlZmluZWQoeDogYW55KTogeCBpcyB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNi4xLjIgVGhlIE51bGwgVHlwZVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1udWxsLXR5cGVcclxuICAgIGZ1bmN0aW9uIElzTnVsbCh4OiBhbnkpOiB4IGlzIG51bGwge1xyXG4gICAgICAgIHJldHVybiB4ID09PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDYuMS41IFRoZSBTeW1ib2wgVHlwZVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1zeW1ib2wtdHlwZVxyXG4gICAgZnVuY3Rpb24gSXNTeW1ib2woeDogYW55KTogeCBpcyBzeW1ib2wge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA2LjEuNyBUaGUgT2JqZWN0IFR5cGVcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc09iamVjdDxUPih4OiBUIHwgdW5kZWZpbmVkIHwgbnVsbCB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzeW1ib2wgfCBudW1iZXIpOiB4IGlzIFQge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiA/IHggIT09IG51bGwgOiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMSBUeXBlIENvbnZlcnNpb25cclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGUtY29udmVyc2lvblxyXG5cclxuICAgIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcclxuICAgIGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0OiBhbnksIFByZWZlcnJlZFR5cGU/OiBUYWcpOiB1bmRlZmluZWQgfCBudWxsIHwgYm9vbGVhbiB8IHN0cmluZyB8IHN5bWJvbCB8IG51bWJlciB7XHJcbiAgICAgICAgc3dpdGNoIChUeXBlKGlucHV0KSkge1xyXG4gICAgICAgICAgICBjYXNlIFRhZy5VbmRlZmluZWQ6IHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgY2FzZSBUYWcuTnVsbDogcmV0dXJuIGlucHV0O1xyXG4gICAgICAgICAgICBjYXNlIFRhZy5Cb29sZWFuOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgICAgIGNhc2UgVGFnLlN0cmluZzogcmV0dXJuIGlucHV0O1xyXG4gICAgICAgICAgICBjYXNlIFRhZy5TeW1ib2w6IHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgY2FzZSBUYWcuTnVtYmVyOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGhpbnQ6IFwic3RyaW5nXCIgfCBcIm51bWJlclwiIHwgXCJkZWZhdWx0XCIgPSBQcmVmZXJyZWRUeXBlID09PSBUYWcuU3RyaW5nID8gXCJzdHJpbmdcIiA6IFByZWZlcnJlZFR5cGUgPT09IFRhZy5OdW1iZXIgPyBcIm51bWJlclwiIDogXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgY29uc3QgZXhvdGljVG9QcmltID0gR2V0TWV0aG9kKGlucHV0LCB0b1ByaW1pdGl2ZVN5bWJvbCk7XHJcbiAgICAgICAgaWYgKGV4b3RpY1RvUHJpbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBoaW50KTtcclxuICAgICAgICAgICAgaWYgKElzT2JqZWN0KHJlc3VsdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09IFwiZGVmYXVsdFwiID8gXCJudW1iZXJcIiA6IGhpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMS4xLjEgT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlUb1ByaW1pdGl2ZShPOiBhbnksIGhpbnQ6IFwic3RyaW5nXCIgfCBcIm51bWJlclwiKTogdW5kZWZpbmVkIHwgbnVsbCB8IGJvb2xlYW4gfCBzdHJpbmcgfCBzeW1ib2wgfCBudW1iZXIge1xyXG4gICAgICAgIGlmIChoaW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvU3RyaW5nID0gTy50b1N0cmluZztcclxuICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0b1N0cmluZy5jYWxsKE8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2YgPSBPLnZhbHVlT2Y7XHJcbiAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2YgPSBPLnZhbHVlT2Y7XHJcbiAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZU9mLmNhbGwoTyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9TdHJpbmcgPSBPLnRvU3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh0b1N0cmluZykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRvU3RyaW5nLmNhbGwoTyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMS4yIFRvQm9vbGVhbihhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtdG9ib29sZWFuXHJcbiAgICBmdW5jdGlvbiBUb0Jvb2xlYW4oYXJndW1lbnQ6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIWFyZ3VtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMS4xMiBUb1N0cmluZyhhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvc3RyaW5nXHJcbiAgICBmdW5jdGlvbiBUb1N0cmluZyhhcmd1bWVudDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJcIiArIGFyZ3VtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMS4xNCBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxyXG4gICAgZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudDogYW55KTogc3RyaW5nIHwgc3ltYm9sIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBUb1ByaW1pdGl2ZShhcmd1bWVudCwgVGFnLlN0cmluZyk7XHJcbiAgICAgICAgaWYgKElzU3ltYm9sKGtleSkpIHJldHVybiBrZXk7XHJcbiAgICAgICAgcmV0dXJuIFRvU3RyaW5nKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNy4yIFRlc3RpbmcgYW5kIENvbXBhcmlzb24gT3BlcmF0aW9uc1xyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdGVzdGluZy1hbmQtY29tcGFyaXNvbi1vcGVyYXRpb25zXHJcblxyXG4gICAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcclxuICAgIGZ1bmN0aW9uIElzQXJyYXkoYXJndW1lbnQ6IGFueSk6IGFyZ3VtZW50IGlzIGFueVtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheVxyXG4gICAgICAgICAgICA/IEFycmF5LmlzQXJyYXkoYXJndW1lbnQpXHJcbiAgICAgICAgICAgIDogYXJndW1lbnQgaW5zdGFuY2VvZiBPYmplY3RcclxuICAgICAgICAgICAgICAgID8gYXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheVxyXG4gICAgICAgICAgICAgICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNy4yLjMgSXNDYWxsYWJsZShhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcclxuICAgIGZ1bmN0aW9uIElzQ2FsbGFibGUoYXJndW1lbnQ6IGFueSk6IGFyZ3VtZW50IGlzIEZ1bmN0aW9uIHtcclxuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2QuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMi40IElzQ29uc3RydWN0b3IoYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXHJcbiAgICBmdW5jdGlvbiBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50OiBhbnkpOiBhcmd1bWVudCBpcyBGdW5jdGlvbiB7XHJcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBhbiBhcHByb3hpbWF0aW9uIGFzIHdlIGNhbm5vdCBjaGVjayBmb3IgW1tDb25zdHJ1Y3RdXSBpbnRlcm5hbCBtZXRob2QuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuMi43IElzUHJvcGVydHlLZXkoYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3Byb3BlcnR5a2V5XHJcbiAgICBmdW5jdGlvbiBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50OiBhbnkpOiBhcmd1bWVudCBpcyBzdHJpbmcgfCBzeW1ib2wge1xyXG4gICAgICAgIHN3aXRjaCAoVHlwZShhcmd1bWVudCkpIHtcclxuICAgICAgICAgICAgY2FzZSBUYWcuU3RyaW5nOiByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBUYWcuU3ltYm9sOiByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA3LjMgT3BlcmF0aW9ucyBvbiBPYmplY3RzXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLW9iamVjdHNcclxuXHJcbiAgICAvLyA3LjMuOSBHZXRNZXRob2QoViwgUClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxyXG4gICAgZnVuY3Rpb24gR2V0TWV0aG9kKFY6IGFueSwgUDogYW55KTogRnVuY3Rpb24gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBWW1BdO1xyXG4gICAgICAgIGlmIChmdW5jID09PSB1bmRlZmluZWQgfHwgZnVuYyA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoIUlzQ2FsbGFibGUoZnVuYykpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICByZXR1cm4gZnVuYztcclxuICAgIH1cclxuXHJcbiAgICAvLyA3LjQgT3BlcmF0aW9ucyBvbiBJdGVyYXRvciBPYmplY3RzXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcGVyYXRpb25zLW9uLWl0ZXJhdG9yLW9iamVjdHNcclxuXHJcbiAgICBmdW5jdGlvbiBHZXRJdGVyYXRvcjxUPihvYmo6IEl0ZXJhYmxlPFQ+KTogSXRlcmF0b3I8VD4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IEdldE1ldGhvZChvYmosIGl0ZXJhdG9yU3ltYm9sKTtcclxuICAgICAgICBpZiAoIUlzQ2FsbGFibGUobWV0aG9kKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigpOyAvLyBmcm9tIENhbGxcclxuICAgICAgICBjb25zdCBpdGVyYXRvciA9IG1ldGhvZC5jYWxsKG9iaik7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdChpdGVyYXRvcikpIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNy40LjQgSXRlcmF0b3JWYWx1ZShpdGVyUmVzdWx0KVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLzIwMTYvI3NlYy1pdGVyYXRvcnZhbHVlXHJcbiAgICBmdW5jdGlvbiBJdGVyYXRvclZhbHVlPFQ+KGl0ZXJSZXN1bHQ6IEl0ZXJhdG9yUmVzdWx0PFQ+KTogVCB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gNy40LjUgSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JzdGVwXHJcbiAgICBmdW5jdGlvbiBJdGVyYXRvclN0ZXA8VD4oaXRlcmF0b3I6IEl0ZXJhdG9yPFQ+KTogSXRlcmF0b3JSZXN1bHQ8VD4gfCBmYWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pdGVyYXRvcmNsb3NlXHJcbiAgICBmdW5jdGlvbiBJdGVyYXRvckNsb3NlPFQ+KGl0ZXJhdG9yOiBJdGVyYXRvcjxUPikge1xyXG4gICAgICAgIGNvbnN0IGYgPSBpdGVyYXRvcltcInJldHVyblwiXTtcclxuICAgICAgICBpZiAoZikgZi5jYWxsKGl0ZXJhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA5LjEgT3JkaW5hcnkgT2JqZWN0IEludGVybmFsIE1ldGhvZHMgYW5kIEludGVybmFsIFNsb3RzXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcclxuXHJcbiAgICAvLyA5LjEuMS4xIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTylcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5Z2V0cHJvdG90eXBlb2ZcclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTzogYW55KTogYW55IHtcclxuICAgICAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSkgcmV0dXJuIHByb3RvO1xyXG5cclxuICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxyXG4gICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IuIENvbXBhdGlibGUgaW1wbGVtZW50YXRpb25zXHJcbiAgICAgICAgLy8gbXVzdCBlaXRoZXIgc2V0IF9fcHJvdG9fXyBvbiBhIHN1YmNsYXNzIGNvbnN0cnVjdG9yIHRvIHRoZSBzdXBlcmNsYXNzIGNvbnN0cnVjdG9yLFxyXG4gICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XHJcbiAgICAgICAgLy8gcG9pbnRzIGJhY2sgdG8gdGhlIGNvbnN0cnVjdG9yLlxyXG5cclxuICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgc2FtZSBhcyBGdW5jdGlvbi5bW1Byb3RvdHlwZV1dLCB0aGVuIHRoaXMgaXMgZGVmaW5hdGVseSBpbmhlcml0ZWQuXHJcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSB3aGVuIGluIEVTNiBvciB3aGVuIHVzaW5nIF9fcHJvdG9fXyBpbiBhIGNvbXBhdGlibGUgYnJvd3Nlci5cclxuICAgICAgICBpZiAocHJvdG8gIT09IGZ1bmN0aW9uUHJvdG90eXBlKSByZXR1cm4gcHJvdG87XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IE8ucHJvdG90eXBlO1xyXG4gICAgICAgIGNvbnN0IHByb3RvdHlwZVByb3RvID0gcHJvdG90eXBlICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xyXG4gICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKSByZXR1cm4gcHJvdG87XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGEgZnVuY3Rpb24sIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBwcm90bztcclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBzb21lIGtpbmQgb2Ygc2VsZi1yZWZlcmVuY2UsIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09PSBPKSByZXR1cm4gcHJvdG87XHJcblxyXG4gICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5haXZlIE1hcCBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVNYXBQb2x5ZmlsbCgpOiBNYXBDb25zdHJ1Y3RvciB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVTZW50aW5lbCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFycmF5U2VudGluZWw6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIGNsYXNzIE1hcEl0ZXJhdG9yPEssIFYsIFIgZXh0ZW5kcyAoSyB8IFYgfCBbSywgVl0pPiBpbXBsZW1lbnRzIEl0ZXJhYmxlSXRlcmF0b3I8Uj4ge1xyXG4gICAgICAgICAgICBwcml2YXRlIF9rZXlzOiBLW107XHJcbiAgICAgICAgICAgIHByaXZhdGUgX3ZhbHVlczogVltdO1xyXG4gICAgICAgICAgICBwcml2YXRlIF9pbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdG9yOiAoa2V5OiBLLCB2YWx1ZTogVikgPT4gUjtcclxuICAgICAgICAgICAgY29uc3RydWN0b3Ioa2V5czogS1tdLCB2YWx1ZXM6IFZbXSwgc2VsZWN0b3I6IChrZXk6IEssIHZhbHVlOiBWKSA9PiBSKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXCJAQGl0ZXJhdG9yXCIoKSB7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgICAgIFtpdGVyYXRvclN5bWJvbF0oKSB7IHJldHVybiB0aGlzOyB9XHJcbiAgICAgICAgICAgIG5leHQoKTogSXRlcmF0b3JSZXN1bHQ8Uj4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9pbmRleDtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fa2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW2luZGV4XSwgdGhpcy5fdmFsdWVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLl9rZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQsIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogPG5ldmVyPnVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93KGVycm9yOiBhbnkpOiBJdGVyYXRvclJlc3VsdDxSPiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybih2YWx1ZT86IFIpOiBJdGVyYXRvclJlc3VsdDxSPiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiA8bmV2ZXI+dmFsdWUsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIE1hcDxLLCBWPiB7XHJcbiAgICAgICAgICAgIHByaXZhdGUgX2tleXM6IEtbXSA9IFtdO1xyXG4gICAgICAgICAgICBwcml2YXRlIF92YWx1ZXM6IChWIHwgdW5kZWZpbmVkKVtdID0gW107XHJcbiAgICAgICAgICAgIHByaXZhdGUgX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcclxuICAgICAgICAgICAgcHJpdmF0ZSBfY2FjaGVJbmRleCA9IC0yO1xyXG4gICAgICAgICAgICBnZXQgc2l6ZSgpIHsgcmV0dXJuIHRoaXMuX2tleXMubGVuZ3RoOyB9XHJcbiAgICAgICAgICAgIGhhcyhrZXk6IEspOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKSA+PSAwOyB9XHJcbiAgICAgICAgICAgIGdldChrZXk6IEspOiBWIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB0aGlzLl92YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldChrZXk6IEssIHZhbHVlOiBWKTogdGhpcyB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlKGtleTogSyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLl9rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXggKyAxOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaSAtIDFdID0gdGhpcy5fa2V5c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2kgLSAxXSA9IHRoaXMuX3ZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAga2V5cygpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEtleSk7IH1cclxuICAgICAgICAgICAgdmFsdWVzKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0VmFsdWUpOyB9XHJcbiAgICAgICAgICAgIGVudHJpZXMoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRFbnRyeSk7IH1cclxuICAgICAgICAgICAgXCJAQGl0ZXJhdG9yXCIoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfVxyXG4gICAgICAgICAgICBbaXRlcmF0b3JTeW1ib2xdKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH1cclxuICAgICAgICAgICAgcHJpdmF0ZSBfZmluZChrZXk6IEssIGluc2VydD86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ICE9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5pbmRleE9mKHRoaXMuX2NhY2hlS2V5ID0ga2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUluZGV4IDwgMCAmJiBpbnNlcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gdGhpcy5fa2V5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWNoZUluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5PEssIFY+KGtleTogSywgXzogVikge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWU8SywgVj4oXzogSywgdmFsdWU6IFYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RW50cnk8SywgVj4oa2V5OiBLLCB2YWx1ZTogVikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdIGFzIFtLLCBWXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmFpdmUgU2V0IHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCk6IFNldENvbnN0cnVjdG9yIHtcclxuICAgICAgICByZXR1cm4gY2xhc3MgU2V0PFQ+IHtcclxuICAgICAgICAgICAgcHJpdmF0ZSBfbWFwID0gbmV3IF9NYXA8YW55LCBhbnk+KCk7XHJcbiAgICAgICAgICAgIGdldCBzaXplKCkgeyByZXR1cm4gdGhpcy5fbWFwLnNpemU7IH1cclxuICAgICAgICAgICAgaGFzKHZhbHVlOiBUKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfVxyXG4gICAgICAgICAgICBhZGQodmFsdWU6IFQpOiBTZXQ8VD4geyByZXR1cm4gdGhpcy5fbWFwLnNldCh2YWx1ZSwgdmFsdWUpLCB0aGlzOyB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSh2YWx1ZTogVCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh2YWx1ZSk7IH1cclxuICAgICAgICAgICAgY2xlYXIoKTogdm9pZCB7IHRoaXMuX21hcC5jbGVhcigpOyB9XHJcbiAgICAgICAgICAgIGtleXMoKSB7IHJldHVybiB0aGlzLl9tYXAua2V5cygpOyB9XHJcbiAgICAgICAgICAgIHZhbHVlcygpIHsgcmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKTsgfVxyXG4gICAgICAgICAgICBlbnRyaWVzKCkgeyByZXR1cm4gdGhpcy5fbWFwLmVudHJpZXMoKTsgfVxyXG4gICAgICAgICAgICBcIkBAaXRlcmF0b3JcIigpIHsgcmV0dXJuIHRoaXMua2V5cygpOyB9XHJcbiAgICAgICAgICAgIFtpdGVyYXRvclN5bWJvbF0oKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmFpdmUgV2Vha01hcCBzaGltXHJcbiAgICBmdW5jdGlvbiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKTogV2Vha01hcENvbnN0cnVjdG9yIHtcclxuICAgICAgICBjb25zdCBVVUlEX1NJWkUgPSAxNjtcclxuICAgICAgICBjb25zdCBrZXlzID0gSGFzaE1hcC5jcmVhdGU8Ym9vbGVhbj4oKTtcclxuICAgICAgICBjb25zdCByb290S2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIFdlYWtNYXA8SywgVj4ge1xyXG4gICAgICAgICAgICBwcml2YXRlIF9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICAgICAgaGFzKHRhcmdldDogSyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZTxLPih0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmhhcyh0YWJsZSwgdGhpcy5fa2V5KSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdldCh0YXJnZXQ6IEspOiBWIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGU8Sz4odGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YWJsZSAhPT0gdW5kZWZpbmVkID8gSGFzaE1hcC5nZXQodGFibGUsIHRoaXMuX2tleSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0KHRhcmdldDogSywgdmFsdWU6IFYpOiBXZWFrTWFwPEssIFY+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGU8Sz4odGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlKHRhcmdldDogSyk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZTxLPih0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBkZWxldGUgdGFibGVbdGhpcy5fa2V5XSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBDcmVhdGVVbmlxdWVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgICAgICBkbyBrZXkgPSBcIkBAV2Vha01hcEBAXCIgKyBDcmVhdGVVVUlEKCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChIYXNoTWFwLmhhcyhrZXlzLCBrZXkpKTtcclxuICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlPEs+KHRhcmdldDogSywgY3JlYXRlOiB0cnVlKTogSGFzaE1hcDxhbnk+O1xyXG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlPEs+KHRhcmdldDogSywgY3JlYXRlOiBmYWxzZSk6IEhhc2hNYXA8YW55PiB8IHVuZGVmaW5lZDtcclxuICAgICAgICBmdW5jdGlvbiBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZTxLPih0YXJnZXQ6IEssIGNyZWF0ZTogYm9vbGVhbik6IEhhc2hNYXA8YW55PiB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCByb290S2V5LCB7IHZhbHVlOiBIYXNoTWFwLmNyZWF0ZTxhbnk+KCkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICg8YW55PnRhcmdldClbcm9vdEtleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBGaWxsUmFuZG9tQnl0ZXMoYnVmZmVyOiBCdWZmZXJMaWtlLCBzaXplOiBudW1iZXIpOiBCdWZmZXJMaWtlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyArK2kpIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIEdlblJhbmRvbUJ5dGVzKHNpemU6IG51bWJlcik6IEJ1ZmZlckxpa2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKSBhcyBVaW50OEFycmF5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSkgYXMgVWludDhBcnJheTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVVSUQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xyXG4gICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxyXG4gICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xyXG4gICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcclxuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IDQgfHwgb2Zmc2V0ID09PSA2IHx8IG9mZnNldCA9PT0gOCkgcmVzdWx0ICs9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNikgcmVzdWx0ICs9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGJ5dGUudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlcyBhIGhldXJpc3RpYyB1c2VkIGJ5IHY4IGFuZCBjaGFrcmEgdG8gZm9yY2UgYW4gb2JqZWN0IGludG8gZGljdGlvbmFyeSBtb2RlLlxyXG4gICAgZnVuY3Rpb24gTWFrZURpY3Rpb25hcnk8VD4ob2JqOiBUKTogVCB7XHJcbiAgICAgICAgKDxhbnk+b2JqKS5fXyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgKDxhbnk+b2JqKS5fXztcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBhdGNoIGdsb2JhbCBSZWZsZWN0XHJcbiAgICAoZnVuY3Rpb24gKF9fZ2xvYmFsOiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIF9fZ2xvYmFsLlJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgaWYgKF9fZ2xvYmFsLlJlZmxlY3QgIT09IFJlZmxlY3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiBSZWZsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKFJlZmxlY3QsIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3RbcF0gPSAoPGFueT5SZWZsZWN0KVtwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3QgPSBSZWZsZWN0O1xyXG4gICAgICAgIH1cclxuICAgIH0pKFxyXG4gICAgICAgIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOlxyXG4gICAgICAgICAgICB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOlxyXG4gICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSk7XHJcbn0iLCJpbXBvcnQgJ3pvbmUnO1xyXG5pbXBvcnQgJ3JlZmxlY3QnOyJdfQ==