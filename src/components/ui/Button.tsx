


// "use client";

// import { ButtonHTMLAttributes, forwardRef, useRef, useEffect } from "react";
// import { cn } from "@/lib/utils";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   icon?: React.ReactNode;
//   text: string;
//   enableSound?: boolean; // Optional prop to enable/disable sound
// }

// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, icon, text, onClick, enableSound = true, ...props }, ref) => {
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     useEffect(() => {
//       if (enableSound) {
//         // Create audio element when component mounts
//         audioRef.current = new Audio('/assets/audio/click_sound.wav');
//         audioRef.current.preload = 'auto';
        
//         // Set volume (optional - adjust as needed)
//         audioRef.current.volume = 0.5;
//       }

//       // Cleanup
//       return () => {
//         if (audioRef.current) {
//           audioRef.current = null;
//         }
//       };
//     }, [enableSound]);

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//       // Play sound if enabled
//       if (enableSound && audioRef.current) {
//         // Reset audio to beginning in case it's already playing
//         audioRef.current.currentTime = 0;
//         audioRef.current.play().catch((error) => {
//           // Handle any audio play errors silently
//           console.warn('Could not play click sound:', error);
//         });
//       }

//       // Call the original onClick handler if provided
//       if (onClick) {
//         onClick(event);
//       }
//     };

//     return (
//       <button
//         ref={ref}
//         className={cn(
//           // Layout: Same size for all buttons
//           "relative inline-flex items-center justify-center",
//           "min-w-[220px] h-16 px-6 rounded-full",
          
//           // White background
//           "bg-white text-black font-semibold text-base",

//           // Shadow and transition
//           "shadow-md hover:shadow-lg transition-all duration-200",

//           // Responsive (width adapts with screen size if needed)
//           "w-full sm:w-auto",

//           className
//         )}
//         onClick={handleClick}
//         {...props}
//       >
//         {icon && (
//           <span className="mr-2 flex items-center text-black">
//             {icon}
//           </span>
//         )}
//         <span className="truncate">{text}</span>
//       </button>
//     );
//   }
// );

// Button.displayName = "Button";

// export default Button;










"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon, text, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Layout: Same size for all buttons
          "relative inline-flex items-center justify-center",
          "min-w-[220px] h-16 px-6 rounded-full",
          
          // White background
          "bg-white text-black font-semibold text-base",

          // Shadow and transition
          "shadow-md hover:shadow-lg transition-all duration-200",

          // Responsive (width adapts with screen size if needed)
          "w-full sm:w-auto",

          className
        )}
        {...props}
      >
        {icon && (
          <span className="mr-2 flex items-center text-black">
            {icon}
          </span>
        )}
        <span className="truncate">{text}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;