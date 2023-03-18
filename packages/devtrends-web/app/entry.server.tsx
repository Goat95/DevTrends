import { renderToString } from "react-dom/server";
import type { EntryContext, HandleDataRequestFunction } from "@remix-run/node"; // or cloudflare/deno
import { RemixServer } from "@remix-run/react";
import { ServerStyleSheet } from "styled-components";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(
    sheet.collectStyles(
      <RemixServer context={remixContext} url={request.url} />
    )
  );

  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

// this is an optional export
export const handleDataRequest: HandleDataRequestFunction = (
  response: Response,
  // same args that get passed to the action or loader that was called
  { request, params, context }
) => {
  response.headers.set("x-custom", "yay!");
  return response;
};
