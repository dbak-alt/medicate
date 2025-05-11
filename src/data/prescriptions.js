const prescriptions = {
  patient: {
    name: "John Doe",
    age: 34,
    id: "P123456",
  },
  prescriptions: {
    morning: [
      {
        name: "Metformin",
        dose: "500mg",
        instructions: "After breakfast",
        time: "08:00 AM",
        tabFor: "Type 2 Diabetes"
      },
      {
        name: "Vitamin D",
        dose: "1000 IU",
        instructions: "With food",
        time: "08:15 AM",
        tabFor: "Vitamin D Deficiency"
      }
    ],
    afternoon: [
      {
        name: "Paracetamol",
        dose: "650mg",
        instructions: "If fever persists",
        time: "01:00 PM",
        tabFor: "Fever or Body Pain"
      }
    ],
    evening: [
      {
        name: "Atorvastatin",
        dose: "10mg",
        instructions: "After dinner",
        time: "07:30 PM",
        tabFor: "High Cholesterol"
      }
    ],
    night: [
      {
        name: "Zolpidem",
        dose: "5mg",
        instructions: "Before bedtime",
        time: "10:00 PM",
        tabFor: "Insomnia"
      }
    ]
  }
};

export default prescriptions;
