"use client";

import { useEditableContentContext } from "./EditableContentContext";
import type { EditableImageKey } from "@/data/editableContent";
import Image from "next/image";

interface EditableImageProps {
  contentKey: EditableImageKey;
  className?: string;
  priority?: boolean;
}

export default function EditableImage({ contentKey, className = "", priority = false }: EditableImageProps) {
  const { images } = useEditableContentContext();
  const image = images[contentKey];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1600}
      height={900}
      unoptimized
      className={className}
      priority={priority}
    />
  );
}
