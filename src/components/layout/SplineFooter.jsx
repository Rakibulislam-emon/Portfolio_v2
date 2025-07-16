// import Spline from "@splinetool/react-spline";

// export default function SplineScene() {
//   return (
//     <div className="w-full h-40">
//       <Spline scene="https://prod.spline.design/AkIOeGM1InwI0ZWe/scene.splinecode" />
//     </div>
//   );
// }


import Spline from "@splinetool/react-spline";

export default function SplineFooter() {
  return (
    <footer className="relative w-full h-[300px] overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
         <Spline scene="https://prod.spline.design/AkIOeGM1InwI0ZWe/scene.splinecode" />
      </div>

      {/* Footer text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-2xl font-bold mb-2 text-white">Let’s Connect</h2>
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
