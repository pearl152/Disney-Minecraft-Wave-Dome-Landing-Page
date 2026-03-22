"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { EditableImageKey, EditableImageSlot } from "@/data/editableContent";
import useEditableContent from "@/hooks/useEditableContent";

interface EditableContentContextValue {
  images: Record<EditableImageKey, EditableImageSlot>;
  imageList: EditableImageSlot[];
  updateImageSource: (key: EditableImageKey, src: string) => void;
  updateImageAlt: (key: EditableImageKey, alt: string) => void;
  restoreImageDefault: (key: EditableImageKey) => void;
  restoreAllDefaults: () => void;
}

const EditableContentContext = createContext<EditableContentContextValue | null>(null);

export function EditableContentProvider({ children }: { children: ReactNode }) {
  const value = useEditableContent();

  return (
    <EditableContentContext.Provider value={value}>
      {children}
    </EditableContentContext.Provider>
  );
}

export function useEditableContentContext() {
  const context = useContext(EditableContentContext);
  if (!context) {
    throw new Error("useEditableContentContext must be used within EditableContentProvider");
  }
  return context;
}
