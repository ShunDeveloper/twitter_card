import React from "react";
import Link from "next/link";

interface quote {
  text: string;
  sourceName: string;
  source: string;
}

const Quote = (quote_props: quote) => {
  return (
    <div className="quote">
      <p>{quote_props.text}</p>
      <p className="quote-text">
        <Link href={quote_props.source}>
          <a>source: {quote_props.sourceName}</a>
        </Link>
      </p>
    </div>
  );
};
export default Quote;
