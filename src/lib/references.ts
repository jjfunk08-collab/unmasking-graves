/**
 * References carried over from the original campaign, with working links to
 * the cited primary sources. Accessed dates preserved from the source site.
 */

export type Reference = {
  n: number;
  citation: string;
  url?: string;
  accessed?: string;
};

export const REFERENCES: Reference[] = [
  {
    n: 1,
    citation: "American Thyroid Association. Graves' disease.",
    url: "https://www.thyroid.org/graves-disease/",
    accessed: "June 6, 2025",
  },
  {
    n: 2,
    citation:
      "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK). Graves' Disease.",
    url: "https://www.niddk.nih.gov/health-information/endocrine-diseases/graves-disease",
    accessed: "June 6, 2025",
  },
  {
    n: 3,
    citation: "Yale Medicine. Graves' Disease Fact Sheet.",
    url: "https://www.yalemedicine.org/conditions/graves-disease",
    accessed: "June 6, 2025",
  },
  {
    n: 4,
    citation:
      "Grixti L, Lane LC, Pearce SH. The genetics of Graves' disease. Rev Endocr Metab Disord. 2024;25:203–214.",
    url: "https://doi.org/10.1007/s11154-023-09848-8",
  },
  {
    n: 5,
    citation:
      "Lee JY, Hong M, Jung YH, Sohn SY. Risk of psychiatric disorders in patients with Graves' disease: a nationwide population-based analysis. J Affect Disord. 2025 May 9;385:119386.",
    url: "https://doi.org/10.1016/j.jad.2025.119386",
  },
];
