import React from "react";
import Image from "next/image";
import { useState } from "react";

function CustomImage({ src, className, objectFit }: any) {
  const [isError, setError] = useState(false);
  return !isError ? (
    <Image
      src={src}
      alt="img"
      onError={() => {
        setError(true);
      }}
      className={className + " select-none noDrag"}
      layout="fill"
      objectFit={objectFit ?? "cover"}
      unoptimized={true}
    />
  ) : null;
}

export default CustomImage;
