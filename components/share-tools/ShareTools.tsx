import React from "react";
import { SHARE_LINKS, SHARE_LINK_PROPS } from "../../constants";
import ShareLink from "./ShareLink";

function ShareTools() {
  return (
    <p id="shareTools" data-testid="shareTools">
      {Object.values(SHARE_LINKS).map(({ HREF: href, TEXT: text }) => {
        return (
          <ShareLink
            href={href}
            className="share"
            key={text}
            text={text}
            showBullet
          />
        );
      })}
    </p>
  );
}

export default ShareTools;
