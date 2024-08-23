"use client";

import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const IframeModal = ({ children, formUrl }) => (
  <Dialog>
    <DialogTrigger asChild>
      {children}
    </DialogTrigger>
    <DialogContent className="sm:max-w-[700px] pt-10">
      <iframe
        src={formUrl}
        width="100%"
        height="500"
        title="Registration Form"
      >
        جارٍ التحميل…
      </iframe>
    </DialogContent>
  </Dialog>
);
