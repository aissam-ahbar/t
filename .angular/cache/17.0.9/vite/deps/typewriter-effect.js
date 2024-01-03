import {
  __commonJS
} from "./chunk-OXCW2X5T.js";

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/typewriter-effect/dist/react.js
var require_react2 = __commonJS({
  "node_modules/typewriter-effect/dist/react.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define("Typewriter", ["react"], t) : "object" == typeof exports ? exports.Typewriter = t(require_react()) : e.Typewriter = t(e.react);
    }("undefined" != typeof self ? self : exports, (e) => (() => {
      var t = { 7403: (e2, t2, r2) => {
        "use strict";
        r2.d(t2, { default: () => S });
        var n2 = r2(4087), o2 = r2.n(n2);
        const a = function(e3) {
          return new RegExp(/<[a-z][\s\S]*>/i).test(e3);
        }, i = function(e3, t3) {
          return Math.floor(Math.random() * (t3 - e3 + 1)) + e3;
        };
        var s = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", c = "REMOVE_ALL", p = "REMOVE_LAST_VISIBLE_NODE", l = "PAUSE_FOR", f = "CALL_FUNCTION", v = "ADD_HTML_TAG_ELEMENT", d = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", y = "CHANGE_CURSOR", b = "PASTE_STRING", m = "HTML_TAG";
        function _(e3) {
          return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, _(e3);
        }
        function g(e3, t3) {
          var r3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var n3 = Object.getOwnPropertySymbols(e3);
            t3 && (n3 = n3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r3.push.apply(r3, n3);
          }
          return r3;
        }
        function w(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? g(Object(r3), true).forEach(function(t4) {
              O(e3, t4, r3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : g(Object(r3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r3, t4));
            });
          }
          return e3;
        }
        function x(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return j(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
              return Array.from(e4);
          }(e3) || function(e4, t3) {
            if (e4) {
              if ("string" == typeof e4)
                return j(e4, t3);
              var r3 = Object.prototype.toString.call(e4).slice(8, -1);
              return "Object" === r3 && e4.constructor && (r3 = e4.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(e4) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? j(e4, t3) : void 0;
            }
          }(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function j(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var r3 = 0, n3 = new Array(t3); r3 < t3; r3++)
            n3[r3] = e3[r3];
          return n3;
        }
        function E(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n3 = t3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e3, T(n3.key), n3);
          }
        }
        function O(e3, t3, r3) {
          return (t3 = T(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r3, enumerable: true, configurable: true, writable: true }) : e3[t3] = r3, e3;
        }
        function T(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== _(e4) || null === e4)
              return e4;
            var r3 = e4[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var n3 = r3.call(e4, "string");
              if ("object" !== _(n3))
                return n3;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === _(t3) ? t3 : String(t3);
        }
        const S = function() {
          function e3(t4, r4) {
            var _2 = this;
            if (function(e4, t5) {
              if (!(e4 instanceof t5))
                throw new TypeError("Cannot call a class as a function");
            }(this, e3), O(this, "state", { cursorAnimation: null, lastFrameTime: null, pauseUntil: null, eventQueue: [], eventLoop: null, eventLoopPaused: false, reverseCalledEvents: [], calledEvents: [], visibleNodes: [], initialOptions: null, elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") } }), O(this, "options", { strings: null, cursor: "|", delay: "natural", pauseFor: 1500, deleteSpeed: "natural", loop: false, autoStart: false, devMode: false, skipAddStyles: false, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor", stringSplitter: null, onCreateTextNode: null, onRemoveNode: null }), O(this, "setupWrapperElement", function() {
              _2.state.elements.container && (_2.state.elements.wrapper.className = _2.options.wrapperClassName, _2.state.elements.cursor.className = _2.options.cursorClassName, _2.state.elements.cursor.innerHTML = _2.options.cursor, _2.state.elements.container.innerHTML = "", _2.state.elements.container.appendChild(_2.state.elements.wrapper), _2.state.elements.container.appendChild(_2.state.elements.cursor));
            }), O(this, "start", function() {
              return _2.state.eventLoopPaused = false, _2.runEventLoop(), _2;
            }), O(this, "pause", function() {
              return _2.state.eventLoopPaused = true, _2;
            }), O(this, "stop", function() {
              return _2.state.eventLoop && ((0, n2.cancel)(_2.state.eventLoop), _2.state.eventLoop = null), _2;
            }), O(this, "pauseFor", function(e4) {
              return _2.addEventToQueue(l, { ms: e4 }), _2;
            }), O(this, "typeOutAllStrings", function() {
              return "string" == typeof _2.options.strings ? (_2.typeString(_2.options.strings).pauseFor(_2.options.pauseFor), _2) : (_2.options.strings.forEach(function(e4) {
                _2.typeString(e4).pauseFor(_2.options.pauseFor).deleteAll(_2.options.deleteSpeed);
              }), _2);
            }), O(this, "typeString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (a(e4))
                return _2.typeOutHTMLString(e4, t5);
              if (e4) {
                var r5 = (_2.options || {}).stringSplitter, n3 = "function" == typeof r5 ? r5(e4) : e4.split("");
                _2.typeCharacters(n3, t5);
              }
              return _2;
            }), O(this, "pasteString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              return a(e4) ? _2.typeOutHTMLString(e4, t5, true) : (e4 && _2.addEventToQueue(b, { character: e4, node: t5 }), _2);
            }), O(this, "typeOutHTMLString", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r5 = arguments.length > 2 ? arguments[2] : void 0, n3 = function(e5) {
                var t6 = document.createElement("div");
                return t6.innerHTML = e5, t6.childNodes;
              }(e4);
              if (n3.length > 0)
                for (var o3 = 0; o3 < n3.length; o3++) {
                  var a2 = n3[o3], i2 = a2.innerHTML;
                  a2 && 3 !== a2.nodeType ? (a2.innerHTML = "", _2.addEventToQueue(v, { node: a2, parentNode: t5 }), r5 ? _2.pasteString(i2, a2) : _2.typeString(i2, a2)) : a2.textContent && (r5 ? _2.pasteString(a2.textContent, t5) : _2.typeString(a2.textContent, t5));
                }
              return _2;
            }), O(this, "deleteAll", function() {
              var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
              return _2.addEventToQueue(c, { speed: e4 }), _2;
            }), O(this, "changeDeleteSpeed", function(e4) {
              if (!e4)
                throw new Error("Must provide new delete speed");
              return _2.addEventToQueue(d, { speed: e4 }), _2;
            }), O(this, "changeDelay", function(e4) {
              if (!e4)
                throw new Error("Must provide new delay");
              return _2.addEventToQueue(h, { delay: e4 }), _2;
            }), O(this, "changeCursor", function(e4) {
              if (!e4)
                throw new Error("Must provide new cursor");
              return _2.addEventToQueue(y, { cursor: e4 }), _2;
            }), O(this, "deleteChars", function(e4) {
              if (!e4)
                throw new Error("Must provide amount of characters to delete");
              for (var t5 = 0; t5 < e4; t5++)
                _2.addEventToQueue(u);
              return _2;
            }), O(this, "callFunction", function(e4, t5) {
              if (!e4 || "function" != typeof e4)
                throw new Error("Callback must be a function");
              return _2.addEventToQueue(f, { cb: e4, thisArg: t5 }), _2;
            }), O(this, "typeCharacters", function(e4) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              if (!e4 || !Array.isArray(e4))
                throw new Error("Characters must be an array");
              return e4.forEach(function(e5) {
                _2.addEventToQueue(s, { character: e5, node: t5 });
              }), _2;
            }), O(this, "removeCharacters", function(e4) {
              if (!e4 || !Array.isArray(e4))
                throw new Error("Characters must be an array");
              return e4.forEach(function() {
                _2.addEventToQueue(u);
              }), _2;
            }), O(this, "addEventToQueue", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return _2.addEventToStateProperty(e4, t5, r5, "eventQueue");
            }), O(this, "addReverseCalledEvent", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return _2.options.loop ? _2.addEventToStateProperty(e4, t5, r5, "reverseCalledEvents") : _2;
            }), O(this, "addEventToStateProperty", function(e4, t5) {
              var r5 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n3 = arguments.length > 3 ? arguments[3] : void 0, o3 = { eventName: e4, eventArgs: t5 || {} };
              return _2.state[n3] = r5 ? [o3].concat(x(_2.state[n3])) : [].concat(x(_2.state[n3]), [o3]), _2;
            }), O(this, "runEventLoop", function() {
              _2.state.lastFrameTime || (_2.state.lastFrameTime = Date.now());
              var e4 = Date.now(), t5 = e4 - _2.state.lastFrameTime;
              if (!_2.state.eventQueue.length) {
                if (!_2.options.loop)
                  return;
                _2.state.eventQueue = x(_2.state.calledEvents), _2.state.calledEvents = [], _2.options = w({}, _2.state.initialOptions);
              }
              if (_2.state.eventLoop = o2()(_2.runEventLoop), !_2.state.eventLoopPaused) {
                if (_2.state.pauseUntil) {
                  if (e4 < _2.state.pauseUntil)
                    return;
                  _2.state.pauseUntil = null;
                }
                var r5, n3 = x(_2.state.eventQueue), a2 = n3.shift();
                if (!(t5 <= (r5 = a2.eventName === p || a2.eventName === u ? "natural" === _2.options.deleteSpeed ? i(40, 80) : _2.options.deleteSpeed : "natural" === _2.options.delay ? i(120, 160) : _2.options.delay))) {
                  var g3 = a2.eventName, j2 = a2.eventArgs;
                  switch (_2.logInDevMode({ currentEvent: a2, state: _2.state, delay: r5 }), g3) {
                    case b:
                    case s:
                      var E2 = j2.character, O2 = j2.node, T2 = document.createTextNode(E2), S2 = T2;
                      _2.options.onCreateTextNode && "function" == typeof _2.options.onCreateTextNode && (S2 = _2.options.onCreateTextNode(E2, T2)), S2 && (O2 ? O2.appendChild(S2) : _2.state.elements.wrapper.appendChild(S2)), _2.state.visibleNodes = [].concat(x(_2.state.visibleNodes), [{ type: "TEXT_NODE", character: E2, node: S2 }]);
                      break;
                    case u:
                      n3.unshift({ eventName: p, eventArgs: { removingCharacterNode: true } });
                      break;
                    case l:
                      var A = a2.eventArgs.ms;
                      _2.state.pauseUntil = Date.now() + parseInt(A);
                      break;
                    case f:
                      var P = a2.eventArgs, N = P.cb, C = P.thisArg;
                      N.call(C, { elements: _2.state.elements });
                      break;
                    case v:
                      var L = a2.eventArgs, k = L.node, D = L.parentNode;
                      D ? D.appendChild(k) : _2.state.elements.wrapper.appendChild(k), _2.state.visibleNodes = [].concat(x(_2.state.visibleNodes), [{ type: m, node: k, parentNode: D || _2.state.elements.wrapper }]);
                      break;
                    case c:
                      var M = _2.state.visibleNodes, R = j2.speed, F = [];
                      R && F.push({ eventName: d, eventArgs: { speed: R, temp: true } });
                      for (var z = 0, Q = M.length; z < Q; z++)
                        F.push({ eventName: p, eventArgs: { removingCharacterNode: false } });
                      R && F.push({ eventName: d, eventArgs: { speed: _2.options.deleteSpeed, temp: true } }), n3.unshift.apply(n3, F);
                      break;
                    case p:
                      var I = a2.eventArgs.removingCharacterNode;
                      if (_2.state.visibleNodes.length) {
                        var U = _2.state.visibleNodes.pop(), H = U.type, q = U.node, B = U.character;
                        _2.options.onRemoveNode && "function" == typeof _2.options.onRemoveNode && _2.options.onRemoveNode({ node: q, character: B }), q && q.parentNode.removeChild(q), H === m && I && n3.unshift({ eventName: p, eventArgs: {} });
                      }
                      break;
                    case d:
                      _2.options.deleteSpeed = a2.eventArgs.speed;
                      break;
                    case h:
                      _2.options.delay = a2.eventArgs.delay;
                      break;
                    case y:
                      _2.options.cursor = a2.eventArgs.cursor, _2.state.elements.cursor.innerHTML = a2.eventArgs.cursor;
                  }
                  _2.options.loop && (a2.eventName === p || a2.eventArgs && a2.eventArgs.temp || (_2.state.calledEvents = [].concat(x(_2.state.calledEvents), [a2]))), _2.state.eventQueue = n3, _2.state.lastFrameTime = e4;
                }
              }
            }), t4)
              if ("string" == typeof t4) {
                var g2 = document.querySelector(t4);
                if (!g2)
                  throw new Error("Could not find container element");
                this.state.elements.container = g2;
              } else
                this.state.elements.container = t4;
            r4 && (this.options = w(w({}, this.options), r4)), this.state.initialOptions = w({}, this.options), this.init();
          }
          var t3, r3;
          return t3 = e3, (r3 = [{ key: "init", value: function() {
            var e4, t4;
            this.setupWrapperElement(), this.addEventToQueue(y, { cursor: this.options.cursor }, true), this.addEventToQueue(c, null, true), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e4 = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t4 = document.createElement("style")).appendChild(document.createTextNode(e4)), document.head.appendChild(t4), window.___TYPEWRITER_JS_STYLES_ADDED___ = true), true === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
          } }, { key: "logInDevMode", value: function(e4) {
            this.options.devMode && console.log(e4);
          } }]) && E(t3.prototype, r3), Object.defineProperty(t3, "prototype", { writable: false }), e3;
        }();
      }, 8552: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "DataView");
        e2.exports = n2;
      }, 1989: (e2, t2, r2) => {
        var n2 = r2(1789), o2 = r2(401), a = r2(7667), i = r2(1327), s = r2(1866);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 8407: (e2, t2, r2) => {
        var n2 = r2(7040), o2 = r2(4125), a = r2(2117), i = r2(7518), s = r2(4705);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 7071: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Map");
        e2.exports = n2;
      }, 3369: (e2, t2, r2) => {
        var n2 = r2(4785), o2 = r2(1285), a = r2(6e3), i = r2(9916), s = r2(5265);
        function u(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.clear(); ++t3 < r3; ) {
            var n3 = e3[t3];
            this.set(n3[0], n3[1]);
          }
        }
        u.prototype.clear = n2, u.prototype.delete = o2, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e2.exports = u;
      }, 3818: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Promise");
        e2.exports = n2;
      }, 8525: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "Set");
        e2.exports = n2;
      }, 8668: (e2, t2, r2) => {
        var n2 = r2(3369), o2 = r2(619), a = r2(2385);
        function i(e3) {
          var t3 = -1, r3 = null == e3 ? 0 : e3.length;
          for (this.__data__ = new n2(); ++t3 < r3; )
            this.add(e3[t3]);
        }
        i.prototype.add = i.prototype.push = o2, i.prototype.has = a, e2.exports = i;
      }, 6384: (e2, t2, r2) => {
        var n2 = r2(8407), o2 = r2(7465), a = r2(3779), i = r2(7599), s = r2(4758), u = r2(4309);
        function c(e3) {
          var t3 = this.__data__ = new n2(e3);
          this.size = t3.size;
        }
        c.prototype.clear = o2, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = s, c.prototype.set = u, e2.exports = c;
      }, 2705: (e2, t2, r2) => {
        var n2 = r2(5639).Symbol;
        e2.exports = n2;
      }, 1149: (e2, t2, r2) => {
        var n2 = r2(5639).Uint8Array;
        e2.exports = n2;
      }, 577: (e2, t2, r2) => {
        var n2 = r2(852)(r2(5639), "WeakMap");
        e2.exports = n2;
      }, 4963: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length, o2 = 0, a = []; ++r2 < n2; ) {
            var i = e3[r2];
            t2(i, r2, e3) && (a[o2++] = i);
          }
          return a;
        };
      }, 4636: (e2, t2, r2) => {
        var n2 = r2(2545), o2 = r2(5694), a = r2(1469), i = r2(4144), s = r2(5776), u = r2(6719), c = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3) {
          var r3 = a(e3), p = !r3 && o2(e3), l = !r3 && !p && i(e3), f = !r3 && !p && !l && u(e3), v = r3 || p || l || f, d = v ? n2(e3.length, String) : [], h = d.length;
          for (var y in e3)
            !t3 && !c.call(e3, y) || v && ("length" == y || l && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, h)) || d.push(y);
          return d;
        };
      }, 2488: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = t2.length, o2 = e3.length; ++r2 < n2; )
            e3[o2 + r2] = t2[r2];
          return e3;
        };
      }, 2908: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = null == e3 ? 0 : e3.length; ++r2 < n2; )
            if (t2(e3[r2], r2, e3))
              return true;
          return false;
        };
      }, 8470: (e2, t2, r2) => {
        var n2 = r2(7813);
        e2.exports = function(e3, t3) {
          for (var r3 = e3.length; r3--; )
            if (n2(e3[r3][0], t3))
              return r3;
          return -1;
        };
      }, 8866: (e2, t2, r2) => {
        var n2 = r2(2488), o2 = r2(1469);
        e2.exports = function(e3, t3, r3) {
          var a = t3(e3);
          return o2(e3) ? a : n2(a, r3(e3));
        };
      }, 4239: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = r2(9607), a = r2(2333), i = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : i && i in Object(e3) ? o2(e3) : a(e3);
        };
      }, 9454: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(7005);
        e2.exports = function(e3) {
          return o2(e3) && "[object Arguments]" == n2(e3);
        };
      }, 939: (e2, t2, r2) => {
        var n2 = r2(2492), o2 = r2(7005);
        e2.exports = function e3(t3, r3, a, i, s) {
          return t3 === r3 || (null == t3 || null == r3 || !o2(t3) && !o2(r3) ? t3 != t3 && r3 != r3 : n2(t3, r3, a, i, e3, s));
        };
      }, 2492: (e2, t2, r2) => {
        var n2 = r2(6384), o2 = r2(7114), a = r2(8351), i = r2(6096), s = r2(4160), u = r2(1469), c = r2(4144), p = r2(6719), l = "[object Arguments]", f = "[object Array]", v = "[object Object]", d = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, h, y, b) {
          var m = u(e3), _ = u(t3), g = m ? f : s(e3), w = _ ? f : s(t3), x = (g = g == l ? v : g) == v, j = (w = w == l ? v : w) == v, E = g == w;
          if (E && c(e3)) {
            if (!c(t3))
              return false;
            m = true, x = false;
          }
          if (E && !x)
            return b || (b = new n2()), m || p(e3) ? o2(e3, t3, r3, h, y, b) : a(e3, t3, g, r3, h, y, b);
          if (!(1 & r3)) {
            var O = x && d.call(e3, "__wrapped__"), T = j && d.call(t3, "__wrapped__");
            if (O || T) {
              var S = O ? e3.value() : e3, A = T ? t3.value() : t3;
              return b || (b = new n2()), y(S, A, r3, h, b);
            }
          }
          return !!E && (b || (b = new n2()), i(e3, t3, r3, h, y, b));
        };
      }, 8458: (e2, t2, r2) => {
        var n2 = r2(3560), o2 = r2(5346), a = r2(3218), i = r2(346), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, p = u.toString, l = c.hasOwnProperty, f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e2.exports = function(e3) {
          return !(!a(e3) || o2(e3)) && (n2(e3) ? f : s).test(i(e3));
        };
      }, 8749: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(1780), a = r2(7005), i = {};
        i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = true, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = false, e2.exports = function(e3) {
          return a(e3) && o2(e3.length) && !!i[n2(e3)];
        };
      }, 280: (e2, t2, r2) => {
        var n2 = r2(5726), o2 = r2(6916), a = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          if (!n2(e3))
            return o2(e3);
          var t3 = [];
          for (var r3 in Object(e3))
            a.call(e3, r3) && "constructor" != r3 && t3.push(r3);
          return t3;
        };
      }, 2545: (e2) => {
        e2.exports = function(e3, t2) {
          for (var r2 = -1, n2 = Array(e3); ++r2 < e3; )
            n2[r2] = t2(r2);
          return n2;
        };
      }, 1717: (e2) => {
        e2.exports = function(e3) {
          return function(t2) {
            return e3(t2);
          };
        };
      }, 4757: (e2) => {
        e2.exports = function(e3, t2) {
          return e3.has(t2);
        };
      }, 4429: (e2, t2, r2) => {
        var n2 = r2(5639)["__core-js_shared__"];
        e2.exports = n2;
      }, 7114: (e2, t2, r2) => {
        var n2 = r2(8668), o2 = r2(2908), a = r2(4757);
        e2.exports = function(e3, t3, r3, i, s, u) {
          var c = 1 & r3, p = e3.length, l = t3.length;
          if (p != l && !(c && l > p))
            return false;
          var f = u.get(e3), v = u.get(t3);
          if (f && v)
            return f == t3 && v == e3;
          var d = -1, h = true, y = 2 & r3 ? new n2() : void 0;
          for (u.set(e3, t3), u.set(t3, e3); ++d < p; ) {
            var b = e3[d], m = t3[d];
            if (i)
              var _ = c ? i(m, b, d, t3, e3, u) : i(b, m, d, e3, t3, u);
            if (void 0 !== _) {
              if (_)
                continue;
              h = false;
              break;
            }
            if (y) {
              if (!o2(t3, function(e4, t4) {
                if (!a(y, t4) && (b === e4 || s(b, e4, r3, i, u)))
                  return y.push(t4);
              })) {
                h = false;
                break;
              }
            } else if (b !== m && !s(b, m, r3, i, u)) {
              h = false;
              break;
            }
          }
          return u.delete(e3), u.delete(t3), h;
        };
      }, 8351: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = r2(1149), a = r2(7813), i = r2(7114), s = r2(8776), u = r2(1814), c = n2 ? n2.prototype : void 0, p = c ? c.valueOf : void 0;
        e2.exports = function(e3, t3, r3, n3, c2, l, f) {
          switch (r3) {
            case "[object DataView]":
              if (e3.byteLength != t3.byteLength || e3.byteOffset != t3.byteOffset)
                return false;
              e3 = e3.buffer, t3 = t3.buffer;
            case "[object ArrayBuffer]":
              return !(e3.byteLength != t3.byteLength || !l(new o2(e3), new o2(t3)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return a(+e3, +t3);
            case "[object Error]":
              return e3.name == t3.name && e3.message == t3.message;
            case "[object RegExp]":
            case "[object String]":
              return e3 == t3 + "";
            case "[object Map]":
              var v = s;
            case "[object Set]":
              var d = 1 & n3;
              if (v || (v = u), e3.size != t3.size && !d)
                return false;
              var h = f.get(e3);
              if (h)
                return h == t3;
              n3 |= 2, f.set(e3, t3);
              var y = i(v(e3), v(t3), n3, c2, l, f);
              return f.delete(e3), y;
            case "[object Symbol]":
              if (p)
                return p.call(e3) == p.call(t3);
          }
          return false;
        };
      }, 6096: (e2, t2, r2) => {
        var n2 = r2(8234), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3, t3, r3, a, i, s) {
          var u = 1 & r3, c = n2(e3), p = c.length;
          if (p != n2(t3).length && !u)
            return false;
          for (var l = p; l--; ) {
            var f = c[l];
            if (!(u ? f in t3 : o2.call(t3, f)))
              return false;
          }
          var v = s.get(e3), d = s.get(t3);
          if (v && d)
            return v == t3 && d == e3;
          var h = true;
          s.set(e3, t3), s.set(t3, e3);
          for (var y = u; ++l < p; ) {
            var b = e3[f = c[l]], m = t3[f];
            if (a)
              var _ = u ? a(m, b, f, t3, e3, s) : a(b, m, f, e3, t3, s);
            if (!(void 0 === _ ? b === m || i(b, m, r3, a, s) : _)) {
              h = false;
              break;
            }
            y || (y = "constructor" == f);
          }
          if (h && !y) {
            var g = e3.constructor, w = t3.constructor;
            g == w || !("constructor" in e3) || !("constructor" in t3) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (h = false);
          }
          return s.delete(e3), s.delete(t3), h;
        };
      }, 1957: (e2, t2, r2) => {
        var n2 = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g;
        e2.exports = n2;
      }, 8234: (e2, t2, r2) => {
        var n2 = r2(8866), o2 = r2(9551), a = r2(3674);
        e2.exports = function(e3) {
          return n2(e3, a, o2);
        };
      }, 5050: (e2, t2, r2) => {
        var n2 = r2(7019);
        e2.exports = function(e3, t3) {
          var r3 = e3.__data__;
          return n2(t3) ? r3["string" == typeof t3 ? "string" : "hash"] : r3.map;
        };
      }, 852: (e2, t2, r2) => {
        var n2 = r2(8458), o2 = r2(7801);
        e2.exports = function(e3, t3) {
          var r3 = o2(e3, t3);
          return n2(r3) ? r3 : void 0;
        };
      }, 9607: (e2, t2, r2) => {
        var n2 = r2(2705), o2 = Object.prototype, a = o2.hasOwnProperty, i = o2.toString, s = n2 ? n2.toStringTag : void 0;
        e2.exports = function(e3) {
          var t3 = a.call(e3, s), r3 = e3[s];
          try {
            e3[s] = void 0;
            var n3 = true;
          } catch (e4) {
          }
          var o3 = i.call(e3);
          return n3 && (t3 ? e3[s] = r3 : delete e3[s]), o3;
        };
      }, 9551: (e2, t2, r2) => {
        var n2 = r2(4963), o2 = r2(479), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e3) {
          return null == e3 ? [] : (e3 = Object(e3), n2(i(e3), function(t3) {
            return a.call(e3, t3);
          }));
        } : o2;
        e2.exports = s;
      }, 4160: (e2, t2, r2) => {
        var n2 = r2(8552), o2 = r2(7071), a = r2(3818), i = r2(8525), s = r2(577), u = r2(4239), c = r2(346), p = "[object Map]", l = "[object Promise]", f = "[object Set]", v = "[object WeakMap]", d = "[object DataView]", h = c(n2), y = c(o2), b = c(a), m = c(i), _ = c(s), g = u;
        (n2 && g(new n2(new ArrayBuffer(1))) != d || o2 && g(new o2()) != p || a && g(a.resolve()) != l || i && g(new i()) != f || s && g(new s()) != v) && (g = function(e3) {
          var t3 = u(e3), r3 = "[object Object]" == t3 ? e3.constructor : void 0, n3 = r3 ? c(r3) : "";
          if (n3)
            switch (n3) {
              case h:
                return d;
              case y:
                return p;
              case b:
                return l;
              case m:
                return f;
              case _:
                return v;
            }
          return t3;
        }), e2.exports = g;
      }, 7801: (e2) => {
        e2.exports = function(e3, t2) {
          return null == e3 ? void 0 : e3[t2];
        };
      }, 1789: (e2, t2, r2) => {
        var n2 = r2(4536);
        e2.exports = function() {
          this.__data__ = n2 ? n2(null) : {}, this.size = 0;
        };
      }, 401: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.has(e3) && delete this.__data__[e3];
          return this.size -= t2 ? 1 : 0, t2;
        };
      }, 7667: (e2, t2, r2) => {
        var n2 = r2(4536), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          if (n2) {
            var r3 = t3[e3];
            return "__lodash_hash_undefined__" === r3 ? void 0 : r3;
          }
          return o2.call(t3, e3) ? t3[e3] : void 0;
        };
      }, 1327: (e2, t2, r2) => {
        var n2 = r2(4536), o2 = Object.prototype.hasOwnProperty;
        e2.exports = function(e3) {
          var t3 = this.__data__;
          return n2 ? void 0 !== t3[e3] : o2.call(t3, e3);
        };
      }, 1866: (e2, t2, r2) => {
        var n2 = r2(4536);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          return this.size += this.has(e3) ? 0 : 1, r3[e3] = n2 && void 0 === t3 ? "__lodash_hash_undefined__" : t3, this;
        };
      }, 5776: (e2) => {
        var t2 = /^(?:0|[1-9]\d*)$/;
        e2.exports = function(e3, r2) {
          var n2 = typeof e3;
          return !!(r2 = null == r2 ? 9007199254740991 : r2) && ("number" == n2 || "symbol" != n2 && t2.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < r2;
        };
      }, 7019: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return "string" == t2 || "number" == t2 || "symbol" == t2 || "boolean" == t2 ? "__proto__" !== e3 : null === e3;
        };
      }, 5346: (e2, t2, r2) => {
        var n2, o2 = r2(4429), a = (n2 = /[^.]+$/.exec(o2 && o2.keys && o2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n2 : "";
        e2.exports = function(e3) {
          return !!a && a in e3;
        };
      }, 5726: (e2) => {
        var t2 = Object.prototype;
        e2.exports = function(e3) {
          var r2 = e3 && e3.constructor;
          return e3 === ("function" == typeof r2 && r2.prototype || t2);
        };
      }, 7040: (e2) => {
        e2.exports = function() {
          this.__data__ = [], this.size = 0;
        };
      }, 4125: (e2, t2, r2) => {
        var n2 = r2(8470), o2 = Array.prototype.splice;
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return !(r3 < 0 || (r3 == t3.length - 1 ? t3.pop() : o2.call(t3, r3, 1), --this.size, 0));
        };
      }, 2117: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3) {
          var t3 = this.__data__, r3 = n2(t3, e3);
          return r3 < 0 ? void 0 : t3[r3][1];
        };
      }, 7518: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3) {
          return n2(this.__data__, e3) > -1;
        };
      }, 4705: (e2, t2, r2) => {
        var n2 = r2(8470);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__, o2 = n2(r3, e3);
          return o2 < 0 ? (++this.size, r3.push([e3, t3])) : r3[o2][1] = t3, this;
        };
      }, 4785: (e2, t2, r2) => {
        var n2 = r2(1989), o2 = r2(8407), a = r2(7071);
        e2.exports = function() {
          this.size = 0, this.__data__ = { hash: new n2(), map: new (a || o2)(), string: new n2() };
        };
      }, 1285: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          var t3 = n2(this, e3).delete(e3);
          return this.size -= t3 ? 1 : 0, t3;
        };
      }, 6e3: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          return n2(this, e3).get(e3);
        };
      }, 9916: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3) {
          return n2(this, e3).has(e3);
        };
      }, 5265: (e2, t2, r2) => {
        var n2 = r2(5050);
        e2.exports = function(e3, t3) {
          var r3 = n2(this, e3), o2 = r3.size;
          return r3.set(e3, t3), this.size += r3.size == o2 ? 0 : 1, this;
        };
      }, 8776: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4, n2) {
            r2[++t2] = [n2, e4];
          }), r2;
        };
      }, 4536: (e2, t2, r2) => {
        var n2 = r2(852)(Object, "create");
        e2.exports = n2;
      }, 6916: (e2, t2, r2) => {
        var n2 = r2(5569)(Object.keys, Object);
        e2.exports = n2;
      }, 1167: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(1957), o2 = t2 && !t2.nodeType && t2, a = o2 && e2 && !e2.nodeType && e2, i = a && a.exports === o2 && n2.process, s = function() {
          try {
            return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
          } catch (e3) {
          }
        }();
        e2.exports = s;
      }, 2333: (e2) => {
        var t2 = Object.prototype.toString;
        e2.exports = function(e3) {
          return t2.call(e3);
        };
      }, 5569: (e2) => {
        e2.exports = function(e3, t2) {
          return function(r2) {
            return e3(t2(r2));
          };
        };
      }, 5639: (e2, t2, r2) => {
        var n2 = r2(1957), o2 = "object" == typeof self && self && self.Object === Object && self, a = n2 || o2 || Function("return this")();
        e2.exports = a;
      }, 619: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.set(e3, "__lodash_hash_undefined__"), this;
        };
      }, 2385: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 1814: (e2) => {
        e2.exports = function(e3) {
          var t2 = -1, r2 = Array(e3.size);
          return e3.forEach(function(e4) {
            r2[++t2] = e4;
          }), r2;
        };
      }, 7465: (e2, t2, r2) => {
        var n2 = r2(8407);
        e2.exports = function() {
          this.__data__ = new n2(), this.size = 0;
        };
      }, 3779: (e2) => {
        e2.exports = function(e3) {
          var t2 = this.__data__, r2 = t2.delete(e3);
          return this.size = t2.size, r2;
        };
      }, 7599: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.get(e3);
        };
      }, 4758: (e2) => {
        e2.exports = function(e3) {
          return this.__data__.has(e3);
        };
      }, 4309: (e2, t2, r2) => {
        var n2 = r2(8407), o2 = r2(7071), a = r2(3369);
        e2.exports = function(e3, t3) {
          var r3 = this.__data__;
          if (r3 instanceof n2) {
            var i = r3.__data__;
            if (!o2 || i.length < 199)
              return i.push([e3, t3]), this.size = ++r3.size, this;
            r3 = this.__data__ = new a(i);
          }
          return r3.set(e3, t3), this.size = r3.size, this;
        };
      }, 346: (e2) => {
        var t2 = Function.prototype.toString;
        e2.exports = function(e3) {
          if (null != e3) {
            try {
              return t2.call(e3);
            } catch (e4) {
            }
            try {
              return e3 + "";
            } catch (e4) {
            }
          }
          return "";
        };
      }, 7813: (e2) => {
        e2.exports = function(e3, t2) {
          return e3 === t2 || e3 != e3 && t2 != t2;
        };
      }, 5694: (e2, t2, r2) => {
        var n2 = r2(9454), o2 = r2(7005), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u = n2(function() {
          return arguments;
        }()) ? n2 : function(e3) {
          return o2(e3) && i.call(e3, "callee") && !s.call(e3, "callee");
        };
        e2.exports = u;
      }, 1469: (e2) => {
        var t2 = Array.isArray;
        e2.exports = t2;
      }, 8612: (e2, t2, r2) => {
        var n2 = r2(3560), o2 = r2(1780);
        e2.exports = function(e3) {
          return null != e3 && o2(e3.length) && !n2(e3);
        };
      }, 4144: (e2, t2, r2) => {
        e2 = r2.nmd(e2);
        var n2 = r2(5639), o2 = r2(5062), a = t2 && !t2.nodeType && t2, i = a && e2 && !e2.nodeType && e2, s = i && i.exports === a ? n2.Buffer : void 0, u = (s ? s.isBuffer : void 0) || o2;
        e2.exports = u;
      }, 8446: (e2, t2, r2) => {
        var n2 = r2(939);
        e2.exports = function(e3, t3) {
          return n2(e3, t3);
        };
      }, 3560: (e2, t2, r2) => {
        var n2 = r2(4239), o2 = r2(3218);
        e2.exports = function(e3) {
          if (!o2(e3))
            return false;
          var t3 = n2(e3);
          return "[object Function]" == t3 || "[object GeneratorFunction]" == t3 || "[object AsyncFunction]" == t3 || "[object Proxy]" == t3;
        };
      }, 1780: (e2) => {
        e2.exports = function(e3) {
          return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= 9007199254740991;
        };
      }, 3218: (e2) => {
        e2.exports = function(e3) {
          var t2 = typeof e3;
          return null != e3 && ("object" == t2 || "function" == t2);
        };
      }, 7005: (e2) => {
        e2.exports = function(e3) {
          return null != e3 && "object" == typeof e3;
        };
      }, 6719: (e2, t2, r2) => {
        var n2 = r2(8749), o2 = r2(1717), a = r2(1167), i = a && a.isTypedArray, s = i ? o2(i) : n2;
        e2.exports = s;
      }, 3674: (e2, t2, r2) => {
        var n2 = r2(4636), o2 = r2(280), a = r2(8612);
        e2.exports = function(e3) {
          return a(e3) ? n2(e3) : o2(e3);
        };
      }, 479: (e2) => {
        e2.exports = function() {
          return [];
        };
      }, 5062: (e2) => {
        e2.exports = function() {
          return false;
        };
      }, 75: function(e2) {
        (function() {
          var t2, r2, n2, o2, a, i;
          "undefined" != typeof performance && null !== performance && performance.now ? e2.exports = function() {
            return performance.now();
          } : "undefined" != typeof process && null !== process && process.hrtime ? (e2.exports = function() {
            return (t2() - a) / 1e6;
          }, r2 = process.hrtime, o2 = (t2 = function() {
            var e3;
            return 1e9 * (e3 = r2())[0] + e3[1];
          })(), i = 1e9 * process.uptime(), a = o2 - i) : Date.now ? (e2.exports = function() {
            return Date.now() - n2;
          }, n2 = Date.now()) : (e2.exports = function() {
            return (/* @__PURE__ */ new Date()).getTime() - n2;
          }, n2 = (/* @__PURE__ */ new Date()).getTime());
        }).call(this);
      }, 4087: (e2, t2, r2) => {
        for (var n2 = r2(75), o2 = "undefined" == typeof window ? r2.g : window, a = ["moz", "webkit"], i = "AnimationFrame", s = o2["request" + i], u = o2["cancel" + i] || o2["cancelRequest" + i], c = 0; !s && c < a.length; c++)
          s = o2[a[c] + "Request" + i], u = o2[a[c] + "Cancel" + i] || o2[a[c] + "CancelRequest" + i];
        if (!s || !u) {
          var p = 0, l = 0, f = [];
          s = function(e3) {
            if (0 === f.length) {
              var t3 = n2(), r3 = Math.max(0, 16.666666666666668 - (t3 - p));
              p = r3 + t3, setTimeout(function() {
                var e4 = f.slice(0);
                f.length = 0;
                for (var t4 = 0; t4 < e4.length; t4++)
                  if (!e4[t4].cancelled)
                    try {
                      e4[t4].callback(p);
                    } catch (e5) {
                      setTimeout(function() {
                        throw e5;
                      }, 0);
                    }
              }, Math.round(r3));
            }
            return f.push({ handle: ++l, callback: e3, cancelled: false }), l;
          }, u = function(e3) {
            for (var t3 = 0; t3 < f.length; t3++)
              f[t3].handle === e3 && (f[t3].cancelled = true);
          };
        }
        e2.exports = function(e3) {
          return s.call(o2, e3);
        }, e2.exports.cancel = function() {
          u.apply(o2, arguments);
        }, e2.exports.polyfill = function(e3) {
          e3 || (e3 = o2), e3.requestAnimationFrame = s, e3.cancelAnimationFrame = u;
        };
      }, 8156: (t2) => {
        "use strict";
        t2.exports = e;
      } }, r = {};
      function n(e2) {
        var o2 = r[e2];
        if (void 0 !== o2)
          return o2.exports;
        var a = r[e2] = { id: e2, loaded: false, exports: {} };
        return t[e2].call(a.exports, a, a.exports, n), a.loaded = true, a.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2);
      var o = {};
      return (() => {
        "use strict";
        n.d(o, { default: () => d });
        var e2 = n(8156), t2 = n.n(e2), r2 = n(7403), a = n(8446), i = n.n(a);
        function s(e3) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, s(e3);
        }
        function u(e3, t3) {
          for (var r3 = 0; r3 < t3.length; r3++) {
            var n2 = t3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e3, f(n2.key), n2);
          }
        }
        function c(e3, t3) {
          return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, c(e3, t3);
        }
        function p(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function l(e3) {
          return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, l(e3);
        }
        function f(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== s(e4) || null === e4)
              return e4;
            var r3 = e4[Symbol.toPrimitive];
            if (void 0 !== r3) {
              var n2 = r3.call(e4, "string");
              if ("object" !== s(n2))
                return n2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === s(t3) ? t3 : String(t3);
        }
        var v = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && c(e4, t3);
          }(h, e3);
          var n2, o2, a2, v2, d2 = (a2 = h, v2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = l(a2);
            if (v2) {
              var r3 = l(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === s(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return p(e5);
            }(this, e4);
          });
          function h() {
            var e4, t3, r3, n3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, h);
            for (var o3 = arguments.length, a3 = new Array(o3), i2 = 0; i2 < o3; i2++)
              a3[i2] = arguments[i2];
            return t3 = p(e4 = d2.call.apply(d2, [this].concat(a3))), n3 = { instance: null }, (r3 = f(r3 = "state")) in t3 ? Object.defineProperty(t3, r3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[r3] = n3, e4;
          }
          return n2 = h, (o2 = [{ key: "componentDidMount", value: function() {
            var e4 = this, t3 = new r2.default(this.typewriter, this.props.options);
            this.setState({ instance: t3 }, function() {
              var r3 = e4.props.onInit;
              r3 && r3(t3);
            });
          } }, { key: "componentDidUpdate", value: function(e4) {
            i()(this.props.options, e4.options) || this.setState({ instance: new r2.default(this.typewriter, this.props.options) });
          } }, { key: "componentWillUnmount", value: function() {
            this.state.instance && this.state.instance.stop();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props.component;
            return t2().createElement(r3, { ref: function(t3) {
              return e4.typewriter = t3;
            }, className: "Typewriter", "data-testid": "typewriter-wrapper" });
          } }]) && u(n2.prototype, o2), Object.defineProperty(n2, "prototype", { writable: false }), h;
        }(e2.Component);
        v.defaultProps = { component: "div" };
        const d = v;
      })(), o.default;
    })());
  }
});
export default require_react2();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=typewriter-effect.js.map