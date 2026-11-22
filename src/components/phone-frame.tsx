import type { ReactNode } from "react";

// Phone frame from the Figma file "JustSell Play Store" (node "Téléphone", 406x860):
// 8px bezel around a 390x844 screen, 52px outer / 44px inner corner radius, soft drop shadow.
// The bezel is an absolute inset in % of the frame itself (top/bottom use its height, left/right
// its width). Padding in % would be computed from the parent's width and blow the bezel up.
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[406/860] rounded-[12.8%/6.05%] bg-[#0b1026] shadow-[0_24px_48px_-18px_rgb(11_16_38/0.45)] ${className}`}
    >
      <div className="absolute inset-x-[1.97%] inset-y-[0.93%] overflow-hidden rounded-[11.3%/5.2%] bg-white [container-type:size]">
        {children}
      </div>
    </div>
  );
}
