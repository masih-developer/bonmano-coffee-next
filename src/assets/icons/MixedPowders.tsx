import { cn } from "@/lib/utils";

export default function MixedPowders({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-5", className)}
      data-name="Layer 2"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n      .cls-1 {\n        fill: #c19277;\n      }\n\n      .cls-1, .cls-2, .cls-3 {\n        stroke-width: 0px;\n      }\n\n      .cls-2 {\n        fill: none;\n      }\n\n      .cls-3 {\n        fill: #575756;\n      }\n    ",
          }}
        />
      </defs>
      <g id="Variations">
        <g data-name="Powder Sachet" id="Powder_Sachet">
          <g>
            <path
              className="cls-1"
              d="m19.26,8.37L11.6.7c-.45-.45-1.03-.67-1.62-.67s-1.18.22-1.63.67L.68,8.37c-.9.9-.9,2.36,0,3.26l2.63,2.63h1.42l-3.34-3.34c-.51-.51-.51-1.33,0-1.84L9.05,1.41c.24-.24.57-.38.92-.38s.67.14.92.38l7.67,7.67c.24.25.38.57.38.92s-.14.67-.38.92l-3.34,3.34h1.41l2.63-2.63c.9-.9.9-2.36,0-3.26Z"
            />
            <polygon
              className="cls-1"
              points="16.35 5.46 14.75 3.86 16.94 3.28 16.35 5.46"
            />
            <polygon
              className="cls-1"
              points="18.9 8.01 17.29 6.4 19.49 5.82 18.9 8.01"
            />
            <polygon
              className="cls-1"
              points="13.81 2.92 12.2 1.31 14.4 .73 13.81 2.92"
            />
            <polygon
              className="cls-1"
              points="2.9 13.82 1.3 12.22 .72 14.41 2.9 13.82"
            />
          </g>
          <circle className="cls-3" cx="8.73" cy="19.27" r=".73" />
          <circle className="cls-3" cx="11.24" cy="16.35" r=".87" />
          <circle className="cls-3" cx="10.87" cy="18.54" r=".48" />
          <circle className="cls-3" cx="8.73" cy="16.82" r=".91" />
          <rect height={20} width={20} className="cls-2" x={0} />
        </g>
      </g>
    </svg>
  );
}
