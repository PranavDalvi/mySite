export interface Experience {
  company: string;
  logo: string; // path to SVG/PNG in public/ or src/assets
  accent: [string, string]; // [gradientStart, gradientEnd]
  role: string;
  dateRange: string;
  responsibilities: string[];
}
