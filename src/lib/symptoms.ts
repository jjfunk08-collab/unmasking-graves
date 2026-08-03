/**
 * Graves' disease symptoms, reorganized from the flat list on the original
 * site into clinical groupings so visitors can locate what they experience.
 * All symptoms are sourced from the NIDDK reference (see lib/references.ts, [2]).
 * Educational only — not a diagnostic tool.
 */

export type SymptomGroup = {
  id: string;
  label: string;
  blurb: string;
  symptoms: string[];
};

export const SYMPTOM_GROUPS: SymptomGroup[] = [
  {
    id: "whole-body",
    label: "Whole body",
    blurb:
      "An overactive thyroid speeds up the body's metabolism, which can be felt from head to toe.",
    symptoms: [
      "Unintended weight loss",
      "Heat intolerance and excessive sweating",
      "Muscle weakness",
      "Trouble sleeping",
    ],
  },
  {
    id: "heart",
    label: "Heart",
    blurb:
      "Excess thyroid hormone can push the cardiovascular system to work harder than it should.",
    symptoms: ["Racing or irregular heartbeat", "Hand tremors"],
  },
  {
    id: "mind",
    label: "Mind and mood",
    blurb:
      "The effects reach beyond the physical, touching how a person thinks and feels day to day.",
    symptoms: ["Neuropsychiatric symptoms", "Anxiety and restlessness"],
  },
  {
    id: "eyes",
    label: "Eyes",
    blurb:
      "In some people, Graves' disease affects the eyes — a condition known as thyroid eye disease.",
    symptoms: [
      "Inflammation of the eyes",
      "Swelling of the tissues around the eyes",
      "Bulging of the eyes",
    ],
  },
  {
    id: "skin",
    label: "Skin",
    blurb: "Less common, but recognized: changes in the skin, typically on the lower legs.",
    symptoms: ["Lumpy, reddish thickening of the skin in front of the shins"],
  },
];
