
export interface CaseStudyHighlight {
  id: string;
  category: string;
  client: string;
  problem: string;
  stats: { value: string; label: string }[];
}

export const caseStudyHighlights: CaseStudyHighlight[] = [
  {
    id: "cypress",
    category: "E-Commerce",
    client: "E-commerce platform",
    problem: "Manual-only testing was creating inconsistent quality and delayed release cycles.",
    stats: [
      { value: "50%", label: "Faster test execution" },
      { value: "40%", label: "Higher bug detection rate" },
    ],
  },
  {
    id: "ll-project",
    category: "Restaurant Tech / POS",
    client: "Loving Loyalty",
    problem: "Frequent production bugs and unstable deployments with no structured QA process.",
    stats: [
      { value: "900+", label: "Automated test cases built" },
      { value: "50%", label: "Less manual testing effort" },
    ],
  },
  {
    id: "courier-project",
    category: "Freight & Logistics",
    client: "Freight & courier platform",
    problem: "Data inconsistency and unaudited security exposure across the delivery lifecycle.",
    stats: [
      { value: "85%", label: "Major vulnerabilities eliminated" },
      { value: "99%", label: "Data consistency maintained" },
    ],
  },
];