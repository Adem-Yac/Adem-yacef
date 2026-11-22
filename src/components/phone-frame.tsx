import type { ReactNode } from "react";

// Phone frame from the Figma file "JustSell Play Store" (node "Téléphone", 406x860):
// 8px bezel around a 390x844 screen, 52px outer / 44px inner corner radius, soft drop shadow.
// Everything is expressed as ratios so the frame scales with whatever height it is given.
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[406/860] rounded-[12.8%/6.05%] bg-[#0b1026] p-[1.97%] shadow-[0_24px_48px_-18px_rgb(11_16_38/0.45)] ${className}`}
    >
      <div className="relative h-full overflow-hidden rounded-[11.3%/5.2%] bg-white [container-type:size]">{children}</div>
    </div>
  );
}
