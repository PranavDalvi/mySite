export interface Experience {
  company: string;
  logo: string; // path to SVG/PNG in public/ or src/assets
  accent: [string, string]; // [gradientStart, gradientEnd]
  projectName?: string;
  role: string;
  dateRange: string;
  jobType?: string;
  location?: string;
  description?: string;
  responsibilities: string[];
}
