var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_styled_components = require("styled-components"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
    sheet.collectStyles(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    )
  ), styles = sheet.getStyleTags();
  return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/contexts/UserContext.tsx
var import_react2 = require("react"), UserContext = (0, import_react2.createContext)(void 0);

// app/GlobalStyle.tsx
var import_styled_components2 = require("styled-components"), GlobalStyle = import_styled_components2.createGlobalStyle`
  body {
    margin: 0;
  }
`, GlobalStyle_default = GlobalStyle;

// app/lib/api/auth.ts
var import_axios2 = __toESM(require("axios"));

// app/lib/client.ts
var import_axios = __toESM(require("axios")), client = import_axios.default.create();
client.defaults.baseURL = "http://localhost:4000";
function setClientCookie(cookie) {
  client.defaults.headers.common.Cookie = cookie;
}

// app/lib/api/auth.ts
async function register(params) {
  let response = await import_axios2.default.post(
    "http://localhost:4000/api/auth/register",
    params
  ), result = response.data, cookieHeader = response.headers["set-cookie"], headers = createCookieHeaders(cookieHeader);
  return { result, headers };
}
async function login(params) {
  let response = await import_axios2.default.post(
    "http://localhost:4000/api/auth/login",
    params
  ), result = response.data, cookieHeader = response.headers["set-cookie"], headers = createCookieHeaders(cookieHeader);
  return { result, headers };
}
async function getMyAccount() {
  return (await client.get("http://localhost:4000/api/me")).data;
}
function createCookieHeaders(setCookieHeader) {
  if (!setCookieHeader || (setCookieHeader == null ? void 0 : setCookieHeader.length) === 0)
    throw new Error("No cookie header");
  let headers = new Headers();
  return setCookieHeader.forEach((cookie) => {
    headers.append("Set-Cookie", cookie);
  }), headers;
}

// app/lib/error.ts
var import_react3 = require("@remix-run/react"), import_axios3 = __toESM(require("axios"));
function isAppError(error) {
  return (error == null ? void 0 : error.statusCode) !== void 0 && (error == null ? void 0 : error.message) !== void 0 && (error == null ? void 0 : error.name) !== void 0;
}
function extractError(error) {
  var _a;
  if (import_axios3.default.isAxiosError(error)) {
    let data = (_a = error.response) == null ? void 0 : _a.data;
    if (isAppError(data))
      return data;
  }
  return {
    statusCode: 500,
    message: "Unknown error",
    name: "UnknownError"
  };
}
function useAppErrorCatch() {
  return (0, import_react3.useCatch)();
}

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
var loader = async ({ request, context }) => {
  let cookie = request.headers.get("Cookie");
  if (!cookie)
    return null;
  setClientCookie(cookie);
  try {
    return await getMyAccount();
  } catch (e) {
    return extractError(e).name, null;
  }
}, meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      typeof document > "u" ? "__STYLES__" : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GlobalStyle_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserContext.Provider, { value: data, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/routes/bookmarks.tsx
var bookmarks_exports = {};
__export(bookmarks_exports, {
  default: () => Bookmarks
});

// app/components/layouts/TabLayout.tsx
var import_styled_components7 = __toESM(require("styled-components"));

// app/components/base/Footer.tsx
var import_styled_components4 = __toESM(require("styled-components"));

// app/lib/colors.ts
var colors = {
  gray0: "#ECECEC",
  gray1: "#C6C6C6",
  gray2: "#A0A0A0",
  gray3: "#4B4B4B",
  gray4: "#2E2E2E",
  gray5: "#121212",
  primary: "#FFA000"
};

// app/components/base/FooterTabItem.tsx
var import_react5 = require("@remix-run/react"), import_react6 = __toESM(require("react")), import_styled_components3 = __toESM(require("styled-components"));

// app/components/vectors/ArrowLeft.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), SvgArrowLeft = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "svg",
  {
    width: 24,
    height: 24,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "path",
      {
        d: "M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/ArrowLeft.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/ArrowLeft.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), ArrowLeft_default = SvgArrowLeft;

// app/components/vectors/Bookmark.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), SvgBookmark = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "path",
      {
        d: "M17 3H7a2 2 0 0 0-2 2v16l7-3 7 3V5a2 2 0 0 0-2-2Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/Bookmark.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/Bookmark.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Bookmark_default = SvgBookmark;

// app/components/vectors/Home.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), SvgHome = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z", fill: "currentColor" }, void 0, !1, {
      fileName: "app/components/vectors/Home.tsx",
      lineNumber: 10,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/Home.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Home_default = SvgHome;

// app/components/vectors/Logo.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SvgLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 104 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        d: "M13.848 8.224c0 5.184-2.368 7.776-7.104 7.776H.96V1.096h5.904c2.544 0 4.344.616 5.4 1.848 1.056 1.216 1.584 2.976 1.584 5.28Zm-7.176 4.032c.816 0 1.344-.28 1.584-.84.24-.56.36-1.488.36-2.784 0-1.312-.136-2.24-.408-2.784-.256-.56-.8-.84-1.632-.84h-.504v7.248h.6ZM20.559 8.08c-.336 0-.568.104-.696.312-.128.208-.192.528-.192.96H21.4v-.384c0-.592-.28-.888-.84-.888Zm-5.832 2.136c0-1.904.496-3.376 1.488-4.416 1.008-1.056 2.48-1.584 4.416-1.584 1.952 0 3.328.4 4.128 1.2.816.8 1.224 1.944 1.224 3.432 0 .592-.064 1.488-.192 2.688h-6.024c.064.864.592 1.296 1.584 1.296.464 0 1.68-.168 3.648-.504l.408 3.24c-1.696.448-3.28.672-4.752.672-1.92 0-3.392-.528-4.416-1.584-1.008-1.056-1.512-2.536-1.512-4.44Zm23.664-5.712L35.63 16h-6.744L26.103 4.504h5.208l.96 6.144h.168l1.056-6.144h4.896Zm4.826 11.736c-1.248 0-2.168-.232-2.76-.696-.576-.48-.864-1.296-.864-2.448V7.888H38.32v-3.24h1.512l.312-2.136h4.44v2.136h2.184v3.24H44.56v4.44c0 .208.096.312.288.312l1.896-.096L46.6 16c-1.6.16-2.728.24-3.384.24Zm9.58-6.672V16h-4.943V4.504h4.272l.144.768h.096a3.058 3.058 0 0 1 1.32-.72c.496-.144 1.224-.216 2.184-.216l-.144 3.984h-1.632c-.48 0-.816.088-1.008.264-.192.176-.288.504-.288.984Zm9.551-1.488c-.336 0-.568.104-.696.312-.128.208-.192.528-.192.96h1.728v-.384c0-.592-.28-.888-.84-.888Zm-5.832 2.136c0-1.904.496-3.376 1.488-4.416 1.008-1.056 2.48-1.584 4.416-1.584 1.952 0 3.328.4 4.128 1.2.816.8 1.224 1.944 1.224 3.432 0 .592-.064 1.488-.192 2.688h-6.024c.064.864.592 1.296 1.584 1.296.464 0 1.68-.168 3.648-.504l.408 3.24c-1.696.448-3.28.672-4.752.672-1.92 0-3.392-.528-4.416-1.584-1.008-1.056-1.512-2.536-1.512-4.44Zm20.352-6c2.24 0 3.36 1.088 3.36 3.264V16h-5.064V8.56c0-.256-.136-.384-.408-.384-.256 0-.544.08-.864.24V16H68.9V4.504h4.536l.144.744c1.008-.688 2.104-1.032 3.288-1.032ZM91.2 16.24c-1.248 0-2.104-.312-2.568-.936h-.096c-.736.624-1.608.936-2.616.936-1.664 0-2.848-.528-3.552-1.584-.704-1.056-1.056-2.552-1.056-4.488 0-1.936.384-3.408 1.152-4.416.784-1.024 1.904-1.536 3.36-1.536.832 0 1.504.128 2.016.384V.616h4.824V12.4c0 .208.072.352.216.432.16.08.432.12.816.12l-.432 3.192c-.832.064-1.52.096-2.064.096Zm-4.128-8.376c-.32 0-.528.184-.624.552-.08.368-.12 1.008-.12 1.92 0 .912.04 1.552.12 1.92.08.352.28.528.6.528.336 0 .6-.032.792-.096V8.032a2.022 2.022 0 0 0-.768-.168Zm16.439 4.56c0 2.544-1.48 3.816-4.44 3.816-1.536 0-3.024-.168-4.464-.504l.312-3.528c2 .48 3.328.72 3.984.72.224 0 .336-.072.336-.216 0-.144-.128-.264-.384-.36-1.648-.56-2.848-1.152-3.6-1.776-.752-.624-1.128-1.52-1.128-2.688 0-1.168.408-2.072 1.224-2.712.832-.64 1.944-.96 3.336-.96 1.408 0 2.952.16 4.632.48l-.504 3.624c-2.112-.416-3.392-.624-3.84-.624-.208 0-.312.08-.312.24 0 .128.136.24.408.336 1.328.432 2.288.864 2.88 1.296.592.416 1 .848 1.224 1.296.224.448.336.968.336 1.56Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/Logo.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/Logo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Logo_default = SvgLogo;

// app/components/vectors/PlusCircle.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), SvgPlusCircle = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        d: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/PlusCircle.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/PlusCircle.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), PlusCircle_default = SvgPlusCircle;

// app/components/vectors/Search.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), SvgSearch = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "path",
      {
        d: "M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16a6.5 6.5 0 1 1 0-13Zm0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/Search.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/Search.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Search_default = SvgSearch;

// app/components/vectors/Setting.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), SvgSetting = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "path",
      {
        d: "M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z",
        fill: "currentColor"
      },
      void 0,
      !1,
      {
        fileName: "app/components/vectors/Setting.tsx",
        lineNumber: 10,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/vectors/Setting.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), Setting_default = SvgSetting;

// app/components/base/FooterTabItem.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), iconMap = {
  home: Home_default,
  search: Search_default,
  "plus-circle": PlusCircle_default,
  bookmark: Bookmark_default,
  setting: Setting_default
};
function FooterTabItem({ icon, to }) {
  let iconEl = import_react6.default.createElement(iconMap[icon]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    LinkItem,
    {
      to,
      className: ({ isActive }) => isActive ? "active" : "",
      children: iconEl
    },
    void 0,
    !1,
    {
      fileName: "app/components/base/FooterTabItem.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
var sharedStyle = import_styled_components3.css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${colors.gray2};
    width: 32px;
    height: 32px;
  }
  &:active {
    svg {
      color: ${colors.primary};
    }
  }
`, LinkItem = (0, import_styled_components3.default)(import_react5.NavLink)`
  ${sharedStyle}
  &.active {
    svg {
      color: ${colors.primary};
    }
  }
`, FooterTabItem_default = FooterTabItem;

// app/components/base/Footer.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StyledFooter, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FooterTabItem_default, { icon: "home", to: "/" }, void 0, !1, {
      fileName: "app/components/base/Footer.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FooterTabItem_default, { icon: "search", to: "/search" }, void 0, !1, {
      fileName: "app/components/base/Footer.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FooterTabItem_default, { icon: "plus-circle", to: "/write" }, void 0, !1, {
      fileName: "app/components/base/Footer.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FooterTabItem_default, { icon: "bookmark", to: "/bookmarks" }, void 0, !1, {
      fileName: "app/components/base/Footer.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(FooterTabItem_default, { icon: "setting", to: "/setting" }, void 0, !1, {
      fileName: "app/components/base/Footer.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/base/Footer.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var StyledFooter = import_styled_components4.default.footer`
  height: 56px;
  border-top: 1px solid ${colors.gray0};
  display: flex;
`, Footer_default = Footer;

// app/components/base/Header.tsx
var import_styled_components5 = __toESM(require("styled-components"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Header({ title = /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Logo_default, {}, void 0, !1, {
  fileName: "app/components/base/Header.tsx",
  lineNumber: 11,
  columnNumber: 27
}, this), headerLeft, headerRight }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Block, { children: [
    headerLeft && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HeaderSide, { position: "left", children: headerLeft }, void 0, !1, {
      fileName: "app/components/base/Header.tsx",
      lineNumber: 14,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Title, { children: title }, void 0, !1, {
      fileName: "app/components/base/Header.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    headerRight && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(HeaderSide, { position: "right", children: headerRight }, void 0, !1, {
      fileName: "app/components/base/Header.tsx",
      lineNumber: 16,
      columnNumber: 23
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/base/Header.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var Block = import_styled_components5.default.header`
  position: relative;
  height: 56px;
  border-bottom: 1px solid ${colors.gray0};
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Title = import_styled_components5.default.div`
  color: ${colors.gray5};
  font-size: 18px;
  font-weight: 600;
  svg {
    display: block;
    width: 84px;
    height: 17px;
  }
`, HeaderSide = import_styled_components5.default.div`
  position: absolute;
  ${(props) => props.position}: 16px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
`, Header_default = Header;

// app/components/system/FullHeightPage.tsx
var import_styled_components6 = __toESM(require("styled-components")), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), GlobalFullHeight = import_styled_components6.createGlobalStyle`
  html, body {
    height: 100%;
  }
`;
function FullHeightPage({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Page, { children }, void 0, !1, {
      fileName: "app/components/system/FullHeightPage.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(GlobalFullHeight, {}, void 0, !1, {
      fileName: "app/components/system/FullHeightPage.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/system/FullHeightPage.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var Page = import_styled_components6.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`, FullHeightPage_default = FullHeightPage;

// app/components/layouts/TabLayout.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function TabLayout({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(FullHeightPage_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/components/layouts/TabLayout.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Content, { className, children }, void 0, !1, {
      fileName: "app/components/layouts/TabLayout.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Footer_default, {}, void 0, !1, {
      fileName: "app/components/layouts/TabLayout.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/TabLayout.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var Content = import_styled_components7.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
`, TabLayout_default = TabLayout;

// app/routes/bookmarks.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Bookmarks() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TabLayout_default, { children: "bookmarks" }, void 0, !1, {
    fileName: "app/routes/bookmarks.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  CatchBoundary: () => CatchBoundary,
  action: () => action,
  default: () => Register
});
var import_node = require("@remix-run/node"), import_react16 = require("@remix-run/react");

// app/components/auth/AuthForm.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_styled_components12 = __toESM(require("styled-components"));

// app/hooks/useForm.ts
var import_react7 = require("react"), DEFAULT_VALIDATE_MESSAGE = "Validation Error";
function useForm({
  form,
  initialValues,
  mode = "submit",
  shouldPreventDefault
}) {
  let [errors, setErrors] = (0, import_react7.useState)({}), errorsRef = (0, import_react7.useRef)(errors), setError = (0, import_react7.useCallback)((key, error) => {
    errorsRef.current[key] !== error && (errorsRef.current[key] = error, setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: error
    })));
  }, []), inputRefs = (0, import_react7.useRef)({}), inputProps = (0, import_react7.useMemo)(() => {
    let partialInputProps = {};
    return Object.keys(form).forEach((key) => {
      let inputConfig = form[key], validate2 = inputConfig.validate, handleValidation = (text) => {
        if (!validate2)
          return;
        if (validate2(text))
          setError(key, null);
        else {
          let errorMessage = inputConfig.errorMessage ?? DEFAULT_VALIDATE_MESSAGE;
          setError(key, errorMessage);
        }
      };
      partialInputProps[key] = {
        onChange: (e) => {
          var _a;
          (_a = inputConfig.onChange) == null || _a.call(inputConfig, e), ["change", "all"].includes(mode) && handleValidation(e.target.value);
        },
        onBlur: (e) => {
          var _a;
          (_a = inputConfig.onBlur) == null || _a.call(inputConfig, e), ["blur", "all"].includes(mode) && handleValidation(e.target.value);
        },
        name: key,
        ref: (ref) => {
          inputRefs.current[key] = ref;
        }
      };
    }), partialInputProps;
  }, [form, mode, setError]), handleSubmit = (0, import_react7.useCallback)(
    (onSubmit) => (e) => {
      let formData = new FormData(e.currentTarget), formDataJSON = Object.fromEntries(formData);
      if (!Object.entries(formDataJSON).reduce((acc, [key, value]) => {
        let { validate: validate2, errorMessage } = form[key];
        return (validate2 == null ? void 0 : validate2(value)) === !1 ? (setError(key, errorMessage ?? DEFAULT_VALIDATE_MESSAGE), !1) : acc;
      }, !0)) {
        e.preventDefault();
        return;
      }
      (shouldPreventDefault ?? !0) && e.preventDefault(), onSubmit(formDataJSON, e);
    },
    [shouldPreventDefault, setError, form]
  );
  return (0, import_react7.useEffect)(() => {
    Object.keys(form).forEach((key) => {
      let initialValue = (initialValues == null ? void 0 : initialValues[key]) ?? form[key].initialValue, el = inputRefs.current[key];
      initialValue !== void 0 && el && (el.value = initialValue);
    });
  }, [form, initialValues]), {
    inputProps,
    errors,
    handleSubmit,
    setError
  };
}

// app/hooks/useSubmitLoading.ts
var import_react8 = require("@remix-run/react");
function useSubmitLoading() {
  let transition = (0, import_react8.useTransition)();
  return ["submitting", "loading"].includes(transition.state);
}

// app/lib/validate.ts
var validate = {
  username: (text) => /^[a-z0-9]{5,20}$/.test(text),
  password: (text) => {
    let passwordRules = [/[a-zA-Z]/, /[0-9]/, /[^A-Za-z0-9]/];
    return text.length < 8 ? !1 : passwordRules.reduce((acc, current) => (current.test(text) && (acc += 1), acc), 0) > 1;
  },
  link: (text) => /^(http|https):\/\/[^ "]+$/.test(text)
};

// app/components/system/Button.tsx
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Button({ layoutMode = "inline", ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(StyledButton, { layoutMode, ...rest }, void 0, !1, {
    fileName: "app/components/system/Button.tsx",
    lineNumber: 12,
    columnNumber: 10
  }, this);
}
var StyledButton = import_styled_components8.default.button`
  display: flex;
  background: ${colors.primary};
  border: none;
  color: white;
  height: 48px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 600;
  border-radius: 4px;
  transition: filter 0.25s ease-in-out;

  &:disabled {
    filter: grayscale(0.6);
  }
  ${(props) => props.layoutMode === "fullWidth" && import_styled_components8.css`
      width: 100%;
    `}
`, Button_default = Button;

// app/components/system/LabelInput.tsx
var import_react10 = require("react"), import_styled_components10 = __toESM(require("styled-components"));

// app/components/system/Input.tsx
var import_react9 = require("react"), import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), Input = (0, import_react9.forwardRef)(
  ({ errorMessage, ...rest }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(StyledInput, { ...rest }, void 0, !1, {
      fileName: "app/components/system/Input.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Message, { children: errorMessage }, void 0, !1, {
      fileName: "app/components/system/Input.tsx",
      lineNumber: 15,
      columnNumber: 25
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/system/Input.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this)
);
Input.displayName = "Input";
var StyledInput = import_styled_components9.default.input`
  height: 48px;
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${colors.gray5};
  transition: all 0.25s ease-in-out;

  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
  &:disabled {
    background: ${colors.gray0};
    color: ${colors.gray3};
  }
`, Message = import_styled_components9.default.div`
  margin-top: 8px;
  font-size: 14px;
  color: red;
`, Input_default = Input;

// app/components/system/LabelInput.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), LabelInput = (0, import_react10.forwardRef)(
  ({ label, onFocus, onBlur, ...rest }, ref) => {
    let [focused, setFocused] = (0, import_react10.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Block2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Label, { focused, children: label }, void 0, !1, {
        fileName: "app/components/system/LabelInput.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Input_default, { onFocus: (e) => {
        onFocus == null || onFocus(e), setFocused(!0);
      }, onBlur: (e) => {
        onBlur == null || onBlur(e), setFocused(!1);
      }, ...rest, ref }, void 0, !1, {
        fileName: "app/components/system/LabelInput.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/system/LabelInput.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }
);
LabelInput.displayName = "LabelInput";
var Block2 = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
`, Label = import_styled_components10.default.label`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.gray4};
  font-weight: 600;
  margin-bottom: 8px;
  transition: all 0.25s ease-in-out;
  ${(props) => props.focused && import_styled_components10.css`
      color: ${colors.primary};
    `}
`, LabelInput_default = LabelInput;

// app/components/auth/QuestionLink.tsx
var import_react11 = require("@remix-run/react"), import_styled_components11 = __toESM(require("styled-components"));
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function QuestionLink({ question, name, to, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Block3, { className, children: [
    question,
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react11.Link, { to, children: name }, void 0, !1, {
      fileName: "app/components/auth/QuestionLink.tsx",
      lineNumber: 15,
      columnNumber: 18
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/QuestionLink.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var Block3 = import_styled_components11.default.div`
  color: ${colors.gray3};
  a {
    font-weight: 600;
    color: ${colors.gray5};
  }
`, QuestionLink_default = QuestionLink;

// app/components/auth/AuthForm.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), authDescriptions = {
  login: {
    usernamePlaceholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694.",
    passwordPlaceholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
    buttonText: "\uB85C\uADF8\uC778",
    actionText: "\uD68C\uC6D0\uAC00\uC785",
    question: "\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?",
    actionLink: "/register"
  },
  register: {
    usernamePlaceholder: "5~20\uC790 \uC0AC\uC774\uC758 \uC601\uBB38 \uC18C\uBB38\uC790, \uC22B\uC790 \uC785\uB825",
    passwordPlaceholder: "8\uC790 \uC774\uC0C1 \uC601\uBB38/\uC22B\uC790/\uD2B9\uC218\uBB38\uC790 \uC911 2\uAC00\uC9C0 \uC774\uC0C1 \uC785\uB825",
    buttonText: "\uD68C\uC6D0\uAC00\uC785",
    actionText: "\uB85C\uADF8\uC778",
    question: "\uACC4\uC815\uC774 \uC774\uBBF8 \uC788\uC73C\uC2E0\uAC00\uC694?",
    actionLink: "/login"
  }
};
function AuthForm({ mode, error }) {
  let action4 = (0, import_react12.useActionData)(), isLoading = useSubmitLoading(), { inputProps, handleSubmit, errors, setError } = useForm({
    form: {
      username: {
        validate: mode === "register" ? validate.username : void 0,
        errorMessage: "5~20\uC790 \uC0AC\uC774\uC758 \uC601\uBB38 \uC18C\uBB38\uC790 \uB610\uB294 \uC22B\uC790\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
      },
      password: {
        validate: mode === "register" ? validate.password : void 0,
        errorMessage: "8\uC790 \uC774\uC0C1, \uC601\uBB38/\uC22B\uC790/\uD2B9\uC218\uBB38\uC790 \uC911 2\uAC00\uC9C0 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694."
      }
    },
    mode: "all",
    shouldPreventDefault: !1
  }), {
    usernamePlaceholder,
    passwordPlaceholder,
    buttonText,
    actionText,
    question,
    actionLink
  } = authDescriptions[mode], onSubmit = handleSubmit(() => {
  });
  return (0, import_react13.useEffect)(() => {
    (error == null ? void 0 : error.name) === "UserExistsError" && setError("username", "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uACC4\uC815\uC785\uB2C8\uB2E4.");
  }, [error, setError]), /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(StyledForm, { method: "post", onSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(InputGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        LabelInput_default,
        {
          label: "\uC544\uC774\uB514",
          placeholder: usernamePlaceholder,
          disabled: isLoading,
          errorMessage: errors.username,
          ...inputProps.username
        },
        void 0,
        !1,
        {
          fileName: "app/components/auth/AuthForm.tsx",
          lineNumber: 79,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        LabelInput_default,
        {
          label: "\uBE44\uBC00\uBC88\uD638",
          placeholder: passwordPlaceholder,
          disabled: isLoading,
          errorMessage: errors.password,
          ...inputProps.password,
          type: "password"
        },
        void 0,
        !1,
        {
          fileName: "app/components/auth/AuthForm.tsx",
          lineNumber: 86,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ActionsBox, { children: [
      (error == null ? void 0 : error.name) === "AuthenticationError" ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ActionErrorMessage, { children: "\uC798\uBABB\uB41C \uACC4\uC815 \uC815\uBCF4\uC785\uB2C8\uB2E4." }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button_default, { type: "submit", layoutMode: "fullWidth", disabled: isLoading, children: buttonText }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(QuestionLink_default, { question, name: actionText, to: actionLink }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}
var StyledForm = (0, import_styled_components12.default)(import_react12.Form)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`, InputGroup = import_styled_components12.default.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`, ActionsBox = import_styled_components12.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`, ActionErrorMessage = import_styled_components12.default.div`
  text-align: center;
  color: red;
  font-size: 14px;
`, AuthForm_default = AuthForm;

// app/components/layouts/BasicLayout.tsx
var import_styled_components14 = __toESM(require("styled-components"));

// app/hooks/useGoBack.ts
var import_react14 = require("@remix-run/react"), import_react15 = require("react");
function useGoBack() {
  let navigate = (0, import_react14.useNavigate)();
  return (0, import_react15.useCallback)(() => {
    navigate(-1);
  }, [navigate]);
}

// app/components/base/HeaderBackButton.tsx
var import_styled_components13 = __toESM(require("styled-components"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function HeaderBackButton({ onClick }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(IconButton, { onClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ArrowLeft_default, {}, void 0, !1, {
    fileName: "app/components/base/HeaderBackButton.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/base/HeaderBackButton.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var IconButton = import_styled_components13.default.button`
  padding: 0;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: -8px;
`, HeaderBackButton_default = HeaderBackButton;

// app/components/layouts/BasicLayout.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function BasicLayout({ hasBackButton, title, children, onGoBack }) {
  let goBack = useGoBack();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(FullHeightPage_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      Header_default,
      {
        title,
        headerLeft: hasBackButton ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(HeaderBackButton_default, { onClick: onGoBack ?? goBack }, void 0, !1, {
          fileName: "app/components/layouts/BasicLayout.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) : void 0
      },
      void 0,
      !1,
      {
        fileName: "app/components/layouts/BasicLayout.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Content2, { children }, void 0, !1, {
      fileName: "app/components/layouts/BasicLayout.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/BasicLayout.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var Content2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`, BasicLayout_default = BasicLayout;

// app/routes/register.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let form = await request.formData(), username = form.get("username"), password = form.get("password");
  if (!(typeof username != "string" || typeof password != "string"))
    try {
      let { headers, result } = await register({ username, password });
      return (0, import_node.json)(result, {
        headers
      });
    } catch (e) {
      let error = extractError(e);
      throw (0, import_node.json)(error, {
        status: error.statusCode
      });
    }
};
function Register({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(BasicLayout_default, { title: "\uD68C\uC6D0\uAC00\uC785", hasBackButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(AuthForm_default, { mode: "register", error }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react16.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Register, { error: caught.data }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/routes/setting.tsx
var setting_exports = {};
__export(setting_exports, {
  default: () => Setting
});
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Setting() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TabLayout_default, { children: "Setting" }, void 0, !1, {
    fileName: "app/routes/setting.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search
});
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Search() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(TabLayout_default, { children: "Search" }, void 0, !1, {
    fileName: "app/routes/search.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_styled_components17 = __toESM(require("styled-components"));

// app/components/home/LinkCardList.tsx
var import_styled_components16 = __toESM(require("styled-components"));

// app/components/home/LinkCard.tsx
var import_styled_components15 = __toESM(require("styled-components")), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function LinkCard({ item }) {
  let { thumbnail, title } = item;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Block4, { children: thumbnail ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Thumbnail, { src: thumbnail, alt: title }, void 0, !1, {
    fileName: "app/components/home/LinkCard.tsx",
    lineNumber: 12,
    columnNumber: 20
  }, this) : null }, void 0, !1, {
    fileName: "app/components/home/LinkCard.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var Block4 = import_styled_components15.default.div`
  display: flex;
  flex-direction: column;
  img {
  }
  h3 {
  }
`, Thumbnail = import_styled_components15.default.img`
  width: 100%;
  aspect-ratio: 288/192;
  object-fit: cover;
`, LinkCard_default = LinkCard;

// app/components/home/LinkCardList.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function LinkCardList({ items }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(List, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(LinkCard_default, { item }, item.id, !1, {
    fileName: "app/components/home/LinkCardList.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/home/LinkCardList.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var List = import_styled_components16.default.div`
  display: flex;
  flex-direction: column;
`, LinkCardList_default = LinkCardList;

// app/lib/api/items.ts
async function createItem(params) {
  return (await client.post("/api/items", params)).data;
}
async function getItems() {
  return (await client.get("/api/item")).data;
}

// app/routes/index.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let list = await getItems();
  return (0, import_node2.json)(list);
};
function Index() {
  let data = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(StyledTabLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(LinkCardList_default, { items: data.list }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var StyledTabLayout = (0, import_styled_components17.default)(TabLayout_default)`
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action2,
  default: () => Login
});
var import_node3 = require("@remix-run/node"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  let form = await request.formData(), username = form.get("username"), password = form.get("password");
  if (!(typeof username != "string" || typeof password != "string"))
    try {
      let { headers, result } = await login({ username, password });
      return (0, import_node3.json)(result, {
        headers
      });
    } catch (e) {
      let error = extractError(e);
      throw (0, import_node3.json)(error, {
        status: error.statusCode
      });
    }
};
function Login({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(BasicLayout_default, { title: "\uB85C\uADF8\uC778", hasBackButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(AuthForm_default, { mode: "login", error }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react18.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Login, { error: caught.data }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}

// app/routes/write.tsx
var write_exports = {};
__export(write_exports, {
  default: () => write_default,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react20 = require("@remix-run/react");

// app/contexts/WriteContext.tsx
var import_react19 = require("react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), WriteContext = (0, import_react19.createContext)(null), initialState = {
  form: {
    link: "",
    title: "",
    body: ""
  },
  error: void 0
};
function WriteProvider({ children }) {
  let [state, setState] = (0, import_react19.useState)(initialState), actions = (0, import_react19.useMemo)(
    () => ({
      reset() {
        setState(initialState);
      },
      change(key, value2) {
        setState((prev) => ({
          ...prev,
          form: {
            ...prev.form,
            [key]: value2
          }
        }));
      },
      setError(error) {
        setState((prev) => ({
          ...prev,
          error
        }));
      }
    }),
    []
  ), value = (0, import_react19.useMemo)(() => ({ state, actions }), [state, actions]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(WriteContext.Provider, { value, children }, void 0, !1, {
    fileName: "app/contexts/WriteContext.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
function useWriteContext() {
  let context = (0, import_react19.useContext)(WriteContext);
  if (context === null)
    throw new Error("useWriteContext must be used");
  return context;
}

// app/lib/applyAuth.ts
function applyAuth(request) {
  let cookie = request.headers.get("Cookie");
  return !cookie || !cookie.includes("access_token") ? !1 : (setClientCookie(cookie), !0);
}

// app/lib/protectRoute.ts
var getMyAccountPromise = null;
async function getMemoMyAccount() {
  return getMyAccountPromise || (getMyAccountPromise = getMyAccount()), getMyAccountPromise;
}
var checkIsLoggedIn = async (request) => {
  if (!applyAuth(request))
    return !1;
  try {
    await getMemoMyAccount();
  } catch {
    return !1;
  }
  return !0;
};

// app/routes/write.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await checkIsLoggedIn(request) ? null : (0, import_node4.redirect)("/login?next=/write");
function Write() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(WriteProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react20.Outlet, {}, void 0, !1, {
    fileName: "app/routes/write.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/write.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var write_default = Write;

// app/routes/write/index.tsx
var write_exports2 = {};
__export(write_exports2, {
  default: () => write_default2
});
var import_react21 = require("@remix-run/react");

// app/components/write/WriteFormTemplate.tsx
var import_styled_components18 = __toESM(require("styled-components"));
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function WriteFormTemplate({
  description,
  children,
  buttonText,
  onSubmit
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(StyledForm2, { onSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("h3", { children: description }, void 0, !1, {
      fileName: "app/components/write/WriteFormTemplate.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Content3, { children }, void 0, !1, {
      fileName: "app/components/write/WriteFormTemplate.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button_default, { children: buttonText }, void 0, !1, {
      fileName: "app/components/write/WriteFormTemplate.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/write/WriteFormTemplate.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var StyledForm2 = import_styled_components18.default.form`
  flex: 1;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${colors.gray5}
    margin-top: 0;
    line-height: 1.5;
    font-size: 18px
    margin-bottom: 16px;
  }
`, Content3 = import_styled_components18.default.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`, WriteFormTemplate_default = WriteFormTemplate;

// app/routes/write/index.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function WriteLink() {
  var _a;
  let navigate = (0, import_react21.useNavigate)(), { state, actions } = useWriteContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(BasicLayout_default, { title: "\uB9C1\uD06C \uC785\uB825", hasBackButton: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
      WriteFormTemplate_default,
      {
        description: "\uACF5\uC720\uD558\uACE0 \uC2F6\uC740 URL\uC744 \uC785\uB825\uD558\uC138\uC694.",
        buttonText: "\uB2E4\uC74C",
        onSubmit: (e) => {
          e.preventDefault(), navigate("/write/intro");
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          LabelInput_default,
          {
            label: "URL",
            placeholder: "https://example.com",
            value: state.form.link,
            onChange: (e) => {
              actions.change("link", e.target.value);
            },
            errorMessage: ((_a = state.error) == null ? void 0 : _a.statusCode) === 422 ? "\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 URL\uC785\uB2C8\uB2E4." : void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/write/index.tsx",
            lineNumber: 22,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/write/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Button_default, { onClick: () => navigate("/write/intro"), children: "\uB2E4\uC74C" }, void 0, !1, {
      fileName: "app/routes/write/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/write/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var write_default2 = WriteLink;

// app/routes/write/intro.tsx
var intro_exports = {};
__export(intro_exports, {
  CatchBoundary: () => CatchBoundary3,
  action: () => action3,
  default: () => intro_default
});
var import_node5 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_styled_components20 = __toESM(require("styled-components"));

// app/components/system/LabelTextArea.tsx
var import_react22 = require("react"), import_styled_components19 = __toESM(require("styled-components"));
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), LabelTextArea = (0, import_react22.forwardRef)(
  ({ label, onFocus, onBlur, className, ...rest }, ref) => {
    let [focused, setFocused] = (0, import_react22.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Block5, { className, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Label2, { focused, children: label }, void 0, !1, {
        fileName: "app/components/system/LabelTextArea.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        StyledTextArea,
        {
          onFocus: (e) => {
            onFocus == null || onFocus(e), setFocused(!0);
          },
          onBlur: (e) => {
            onBlur == null || onBlur(e), setFocused(!1);
          },
          ...rest,
          ref
        },
        void 0,
        !1,
        {
          fileName: "app/components/system/LabelTextArea.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/system/LabelTextArea.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this);
  }
);
LabelTextArea.displayName = "LabelTextArea";
var Label2 = import_styled_components19.default.label`
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.gray4};
  font-weight: 600;
  margin-bottom: 8px;
  transition: all 0.25s ease-in-out;
  ${(props) => props.focused && import_styled_components19.css`
      color: ${colors.primary};
    `}
`, StyledTextArea = import_styled_components19.default.textarea`
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  outline: none;
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px
  padding-left: 16px;
  padding-right: 16px;
  line-height: 1.5;
  color: ${colors.gray5};
  transition: all 0.25s ease-in-out;

  &:focus {
    border: 1px solid ${colors.primary};
  }
  &::placeholder {
    color: ${colors.gray2};
  }
  &:disabled {
    background: ${colors.gray0};
    color: ${colors.gray3};
  }
`, Block5 = import_styled_components19.default.div`
  display: flex;
  flex-direction: column;
`, LabelTextArea_default = LabelTextArea;

// app/routes/write/intro.tsx
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  if (!await applyAuth(request))
    throw new Error("Not logged in");
  let form = await request.formData(), link = form.get("link"), title = form.get("title"), body = form.get("body");
  try {
    return await createItem({ link, title, body }), (0, import_node6.redirect)("/");
  } catch (e) {
    let error = extractError(e);
    throw (0, import_node5.json)(error, {
      status: error.statusCode
    });
  }
};
function Intro() {
  let {
    state: { form },
    actions
  } = useWriteContext(), [errorMessage, setErrorMessage] = (0, import_react24.useState)(null), fetcher = (0, import_react23.useFetcher)(), onChange = (e) => {
    let key = e.currentTarget.name, { value } = e.target;
    actions.change(key, value);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(BasicLayout_default, { title: "\uB274\uC2A4 \uC18C\uAC1C", hasBackButton: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
    WriteFormTemplate_default,
    {
      description: "\uACF5\uC720\uD560 \uB274\uC2A4\uB97C \uC18C\uAC1C\uD558\uC138\uC694.",
      buttonText: "\uB4F1\uB85D\uD558\uAE30",
      onSubmit: (e) => {
        if (e.preventDefault(), form.title === "" || form.body === "") {
          setErrorMessage("\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC744 \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
          return;
        }
        fetcher.submit(form, {
          method: "post"
        });
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          LabelInput_default,
          {
            label: "\uC81C\uBAA9",
            name: "title",
            onChange,
            value: form.title
          },
          void 0,
          !1,
          {
            fileName: "app/routes/write/intro.tsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          StyledLabelTextArea,
          {
            label: "\uB0B4\uC6A9",
            name: "body",
            onChange,
            value: form.body
          },
          void 0,
          !1,
          {
            fileName: "app/routes/write/intro.tsx",
            lineNumber: 75,
            columnNumber: 11
          },
          this
        ),
        errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Message2, { children: errorMessage }, void 0, !1, {
          fileName: "app/routes/write/intro.tsx",
          lineNumber: 81,
          columnNumber: 27
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/write/intro.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/write/intro.tsx",
      lineNumber: 54,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/write/intro.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let caught = useAppErrorCatch(), { actions } = useWriteContext(), navigate = (0, import_react23.useNavigate)();
  return (0, import_react24.useEffect)(() => {
    caught.status === 422 && (navigate(-1), actions.setError(caught.data));
  }, [caught, navigate, actions]), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(Intro, {}, void 0, !1, {
    fileName: "app/routes/write/intro.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
var Group = import_styled_components20.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding-bottom: 16px;
`, StyledLabelTextArea = (0, import_styled_components20.default)(LabelTextArea_default)`
  flex: 1;
  textarea {
    flex: 1;
    resize: none;
    font-family: inherit;
  }
`, Message2 = import_styled_components20.default.div`
  margin-top: 8px;
  font-size: 14px;
  color: red;
  text-align: center;
`, intro_default = Intro;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "3d9b20b0", entry: { module: "/build/entry.client-RV6FZ3TF.js", imports: ["/build/_shared/chunk-VW55ASXR.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-C43YF3U6.js", imports: ["/build/_shared/chunk-QP26WHLV.js", "/build/_shared/chunk-AVSUPWQA.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/bookmarks": { id: "routes/bookmarks", parentId: "root", path: "bookmarks", index: void 0, caseSensitive: void 0, module: "/build/routes/bookmarks-OK6NRCMN.js", imports: ["/build/_shared/chunk-ODJEWDRF.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-N53AUSUI.js", imports: ["/build/_shared/chunk-ODJEWDRF.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-KECWB6HI.js", imports: ["/build/_shared/chunk-VCXSNFBM.js", "/build/_shared/chunk-LOS5G7SI.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-PYFIJTIR.js", imports: ["/build/_shared/chunk-VCXSNFBM.js", "/build/_shared/chunk-LOS5G7SI.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-5USN6DTJ.js", imports: ["/build/_shared/chunk-ODJEWDRF.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/setting": { id: "routes/setting", parentId: "root", path: "setting", index: void 0, caseSensitive: void 0, module: "/build/routes/setting-BH5PGHBF.js", imports: ["/build/_shared/chunk-ODJEWDRF.js", "/build/_shared/chunk-AY2KF5C3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/write": { id: "routes/write", parentId: "root", path: "write", index: void 0, caseSensitive: void 0, module: "/build/routes/write-WILB3NPI.js", imports: ["/build/_shared/chunk-EJZKKTAP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/write/index": { id: "routes/write/index", parentId: "routes/write", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/write/index-WGSFZRPI.js", imports: ["/build/_shared/chunk-KE7PW7ID.js", "/build/_shared/chunk-LOS5G7SI.js", "/build/_shared/chunk-AY2KF5C3.js", "/build/_shared/chunk-AVSUPWQA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/write/intro": { id: "routes/write/intro", parentId: "routes/write", path: "intro", index: void 0, caseSensitive: void 0, module: "/build/routes/write/intro-H43H6RBR.js", imports: ["/build/_shared/chunk-KE7PW7ID.js", "/build/_shared/chunk-LOS5G7SI.js", "/build/_shared/chunk-QP26WHLV.js", "/build/_shared/chunk-AY2KF5C3.js", "/build/_shared/chunk-AVSUPWQA.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-3D9B20B0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/bookmarks": {
    id: "routes/bookmarks",
    parentId: "root",
    path: "bookmarks",
    index: void 0,
    caseSensitive: void 0,
    module: bookmarks_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/setting": {
    id: "routes/setting",
    parentId: "root",
    path: "setting",
    index: void 0,
    caseSensitive: void 0,
    module: setting_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/write": {
    id: "routes/write",
    parentId: "root",
    path: "write",
    index: void 0,
    caseSensitive: void 0,
    module: write_exports
  },
  "routes/write/index": {
    id: "routes/write/index",
    parentId: "routes/write",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: write_exports2
  },
  "routes/write/intro": {
    id: "routes/write/intro",
    parentId: "routes/write",
    path: "intro",
    index: void 0,
    caseSensitive: void 0,
    module: intro_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
