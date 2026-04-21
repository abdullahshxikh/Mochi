import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Master Your Health through Play.</h1>
            <p>
              Gamify your nutrition, reach your goals, and elevate your wellness with ease. 
              The smarter, funner calorie tracker powered by AI.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" className="btn-primary">
                Download App
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <Image 
              src="/hero.png" 
              alt="Mochi App Preview" 
              width={1000} 
              height={1000} 
              className="hero-image"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
