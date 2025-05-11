const vaccineData = [
  {
    stage: "Infants and Children (0 to 6 years)",
    timelines: [
      {
        timeline: "At Birth",
        vaccines: [
          "BCG",
          "Hepatitis B (1st Dose)",
          "Oral Polio Vaccine (OPV 0)"
        ]
      },
      {
        timeline: "6 Weeks",
        vaccines: [
          "DTaP (1st Dose)",
          "IPV (1st Dose)",
          "Hepatitis B (2nd Dose)",
          "Hib (1st Dose)",
          "Rotavirus (1st Dose)",
          "PCV (1st Dose)"
        ]
      },
      {
        timeline: "10 Weeks",
        vaccines: [
          "DTaP (2nd Dose)",
          "IPV (2nd Dose)",
          "Hib (2nd Dose)",
          "Rotavirus (2nd Dose)",
          "PCV (2nd Dose)"
        ]
      },
      {
        timeline: "14 Weeks",
        vaccines: [
          "DTaP (3rd Dose)",
          "IPV (3rd Dose)",
          "Hib (3rd Dose)",
          "Rotavirus (3rd Dose, if applicable)",
          "PCV (3rd Dose)"
        ]
      },
      {
        timeline: "6 Months",
        vaccines: [
          "Influenza (Annual, Starting from 6 Months)"
        ]
      },
      {
        timeline: "9 Months",
        vaccines: [
          "MMR (1st Dose)",
          "Yellow Fever (If Applicable)"
        ]
      },
      {
        timeline: "12 to 15 Months",
        vaccines: [
          "MMR (2nd Dose)",
          "Varicella (Chickenpox)",
          "Hepatitis A (1st Dose)"
        ]
      },
      {
        timeline: "18 Months",
        vaccines: [
          "DTaP Booster",
          "IPV Booster",
          "Hib Booster"
        ]
      },
      {
        timeline: "4 to 6 Years",
        vaccines: [
          "DTaP Booster",
          "IPV Booster",
          "MMR Booster"
        ]
      }
    ]
  },
  {
    stage: "Adolescents (7 to 18 years)",
    timelines: [
      {
        timeline: "9 to 14 Years",
        vaccines: [
          "HPV (2 Doses)"
        ]
      },
      {
        timeline: "11 to 12 Years",
        vaccines: [
          "Tdap",
          "Meningococcal Vaccine (1st Dose)"
        ]
      },
      {
        timeline: "16 Years",
        vaccines: [
          "Meningococcal Vaccine Booster"
        ]
      }
    ]
  },
  {
    stage: "Adults (19 to 64 years)",
    timelines: [
      {
        timeline: "All Adults",
        vaccines: [
          "Tdap Once, then Td or Tdap Booster Every 10 Years",
          "Influenza (Annual)"
        ]
      },
      {
        timeline: "If Not Immune or Vaccinated",
        vaccines: [
          "MMR",
          "Varicella",
          "HPV (Up to Age 26 or 45 if Advised)",
          "Hepatitis A",
          "Hepatitis B"
        ]
      }
    ]
  },
  {
    stage: "Older Adults (65+ years)",
    timelines: [
      {
        timeline: "Routine",
        vaccines: [
          "Influenza (Annual)",
          "Td or Tdap (Every 10 Years)",
          "Pneumococcal Vaccines (PCV15 or PCV20, and PPSV23 if Advised)",
          "Shingles (Herpes Zoster, 2-Dose Series Starting at Age 50)"
        ]
      }
    ]
  },
  {
    stage: "Special Groups",
    timelines: [
      {
        timeline: "Pregnant Women",
        vaccines: [
          "Tdap (During 3rd Trimester)",
          "Influenza (Annual)"
        ]
      },
      {
        timeline: "Healthcare Workers",
        vaccines: [
          "Hepatitis B",
          "Influenza",
          "MMR",
          "Varicella",
          "COVID-19"
        ]
      },
      {
        timeline: "Travelers",
        vaccines: [
          "Yellow Fever",
          "Typhoid",
          "Japanese Encephalitis",
          "Others Based on Destination"
        ]
      }
    ]
  }
];

export default vaccineData;
