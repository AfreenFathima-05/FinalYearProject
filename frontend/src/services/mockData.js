/**
 * ResQLink Demonstration Mock Data Service
 * 
 * NOTE: All data herein is strictly simulated demonstration data for the
 * CSE Capstone / Academic Project presentation. No real personal, hospital,
 * or patient information is exposed or stored.
 */

export const INITIAL_INCIDENTS = [
  {
    id: "INC-2026-0891",
    title: "Highway 47 Multi-Vehicle Collision",
    location: "Expressway Mile 42, North Corridor",
    coordinates: "12.9716° N, 77.5946° E",
    severity: "Critical", // Critical, High, Moderate, Low
    status: "Active", // Active, Hospitalized, Triaged, Resolved
    timestamp: "12 mins ago",
    reportedAt: "2026-10-20 11:58 IST",
    victimsTotal: 4,
    victimsUnidentified: 2,
    responderUnit: "Paramedic Unit 08 (Advanced Life Support)",
    destinationHospital: "St. Jude Trauma & Emergency Institute",
    triageCategory: "Red - Immediate",
    description: "Two-vehicle collision involving passenger sedan and commercial van. Secondary rollover with severe structural intrusion.",
    assignedStaff: "EMT-P Sarah Lin, Paramedic David Rao",
    vitalsSummary: "Victim A: SpO2 91%, HR 128 bpm, BP 88/54 mmHg. Urgent airway stabilization in progress.",
    supportRequirements: ["Blood Support (O- Negative)", "Unknown Identity Linkage", "Surgical Trauma Bay Reserved"]
  },
  {
    id: "INC-2026-0892",
    title: "Metro Line 3 Platform Medical Emergency",
    location: "Civic Center Metro Station, Lower Level B",
    coordinates: "12.9784° N, 77.6022° E",
    severity: "High",
    status: "Triaged",
    timestamp: "34 mins ago",
    reportedAt: "2026-10-20 11:36 IST",
    victimsTotal: 1,
    victimsUnidentified: 1,
    responderUnit: "Rapid Response Unit 14",
    destinationHospital: "Apex Memorial Hospital",
    triageCategory: "Yellow - Urgent",
    description: "Unconscious pedestrian collapsed on transit concourse. Unresponsive with partial head contusion.",
    assignedStaff: "First Responder Alan Vance",
    vitalsSummary: "SpO2 96%, HR 76 bpm, BP 124/80 mmHg. GCS 11 (Eyes 3, Verbal 4, Motor 4).",
    supportRequirements: ["Facial Biometric Match Pending", "Family Notification"]
  },
  {
    id: "INC-2026-0889",
    title: "Industrial Fabrication Facility Flash Incident",
    location: "Sector 9 Tech Industrial Park, Unit 4B",
    coordinates: "12.9341° N, 77.6101° E",
    severity: "Critical",
    status: "Hospitalized",
    timestamp: "1h 15m ago",
    reportedAt: "2026-10-20 10:55 IST",
    victimsTotal: 3,
    victimsUnidentified: 0,
    responderUnit: "Fire Rescue Medic 02",
    destinationHospital: "City General Burn & Trauma Wing",
    triageCategory: "Red - Immediate",
    description: "Localized thermal explosion during pressure testing. Handover completed to Chief of Trauma.",
    assignedStaff: "Capt. M. Morales, Paramedic K. Patel",
    vitalsSummary: "All 3 patients stabilized in ICU Bay 4. Handover verified via ResQLink Digital Signature.",
    supportRequirements: ["Plasma Replacement Units", "Family Support Desk"]
  },
  {
    id: "INC-2026-0885",
    title: "Pedestrian Crossing Impact Incident",
    location: "Old Airport Road & 100ft Junction",
    coordinates: "12.9592° N, 77.6508° E",
    severity: "Moderate",
    status: "Resolved",
    timestamp: "3h 40m ago",
    reportedAt: "2026-10-20 08:30 IST",
    victimsTotal: 1,
    victimsUnidentified: 0,
    responderUnit: "Paramedic Unit 05",
    destinationHospital: "Trinity Specialty Hospital",
    triageCategory: "Green - Delayed",
    description: "Bicycle vs motorized two-wheeler. Minor extremities abrasions. Medical profile successfully synced with known Penicillin allergy.",
    assignedStaff: "EMT-B Priya Sharma",
    vitalsSummary: "Vitals stable. Discharge clearance signed by Dr. K. Mehta.",
    supportRequirements: []
  }
];

export const INITIAL_UNKNOWN_VICTIMS = [
  {
    tempId: "UNK-9021",
    incidentId: "INC-2026-0891",
    estimatedAge: "28 - 35 years",
    estimatedGender: "Male",
    locationFound: "Highway 47, Passenger Seat, Blue Sedan",
    registeredAt: "11:59 IST (Today)",
    status: "Biometric Ingestion", // Biometric Ingestion, Match Candidate Found, Identity Linked
    physicalMarkers: [
      "Geometric arrow tattoo on left inner forearm",
      "Silver titanium watch with blue face",
      "Scar on right eyebrow (~2cm)",
      "Dark navy weatherproof windbreaker jacket"
    ],
    biometricHash: "0x7F9B...4D82 (SHA-256 Mesh)",
    matchCandidates: [
      {
        personId: "RESQ-IND-88412",
        name: "Vikram R. Deshmukh",
        dob: "1994-08-14",
        bloodGroup: "O- Negative",
        matchConfidence: 94.6,
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        emergencyContact: "Anjali Deshmukh (Spouse) - +91 98450 11234",
        criticalAllergies: "Severe Penicillin Anaphylaxis, NSAIDs",
        chronicConditions: "Mild Asthma"
      }
    ]
  },
  {
    tempId: "UNK-9022",
    incidentId: "INC-2026-0891",
    estimatedAge: "50 - 58 years",
    estimatedGender: "Female",
    locationFound: "Highway 47, Commercial Van Driver Cabin",
    registeredAt: "12:03 IST (Today)",
    status: "Match Candidate Found",
    physicalMarkers: [
      "Gold engagement band with engraved initials 'M & R'",
      "Prescription bifocal spectacles (tortoiseshell frame)",
      "Maroon woollen knit sweater"
    ],
    biometricHash: "0x3A2C...89E1 (Facial Feature Vector)",
    matchCandidates: [
      {
        personId: "RESQ-IND-52901",
        name: "Meera Ramanathan",
        dob: "1972-03-22",
        bloodGroup: "B+ Positive",
        matchConfidence: 91.2,
        photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
        emergencyContact: "Rajesh Ramanathan (Husband) - +91 94480 99812",
        criticalAllergies: "Latex Allergy, Sulfa Drugs",
        chronicConditions: "Type-2 Diabetes (Insulin Dependent), Hypertension"
      }
    ]
  },
  {
    tempId: "UNK-9018",
    incidentId: "INC-2026-0892",
    estimatedAge: "20 - 25 years",
    estimatedGender: "Male",
    locationFound: "Civic Center Metro Station Platform 2",
    registeredAt: "11:38 IST (Today)",
    status: "Searching Registry",
    physicalMarkers: [
      "Black college backpack with CSE robotics team patch",
      "Wireless earbuds in right ear",
      "Red canvas sneakers"
    ],
    biometricHash: "0x88F1...19C7 (Facial Partial Match)",
    matchCandidates: []
  }
];

export const INITIAL_MEDICAL_PROFILES = [
  {
    resqId: "RESQ-IND-88412",
    fullName: "Vikram R. Deshmukh",
    dob: "1994-08-14 (Age 32)",
    gender: "Male",
    bloodGroup: "O- Negative",
    rhFactor: "Negative (Universal Red Cell Donor)",
    verificationLevel: "Tier 4 - Cryptographically Verified via National Registry",
    lastVerified: "2026-09-12 14:22 UTC",
    emergencyContacts: [
      { name: "Anjali Deshmukh", relation: "Spouse", phone: "+91 98450 11234", priority: 1, notified: true },
      { name: "Col. Suresh Deshmukh", relation: "Father", phone: "+91 94481 44556", priority: 2, notified: false }
    ],
    criticalAllergies: [
      { allergen: "Penicillin & Beta-lactams", severity: "Anaphylaxis (Life-threatening)", notes: "Epipen carrier" },
      { allergen: "Aspirin / NSAIDs", severity: "Severe Bronchospasm", notes: "Use Paracetamol with caution" }
    ],
    chronicConditions: [
      { condition: "Mild Asthma", medication: "Salbutamol Inhaler PRN" },
      { condition: "No Cardiac History", medication: "None" }
    ],
    surgicalHistory: "Appendectomy (2018), Right Knee Arthroscopy (2021)",
    organDonorConsent: true,
    advanceDirective: "Full resuscitation authorized. Emergency contacts have medical power of attorney.",
    insuranceProvider: "Star Health Premier (Policy #SHP-99201-90)"
  },
  {
    resqId: "RESQ-IND-52901",
    fullName: "Meera Ramanathan",
    dob: "1972-03-22 (Age 54)",
    gender: "Female",
    bloodGroup: "B+ Positive",
    rhFactor: "Positive",
    verificationLevel: "Tier 4 - Verified Hospital Medical Records",
    lastVerified: "2026-10-01 09:15 UTC",
    emergencyContacts: [
      { name: "Rajesh Ramanathan", relation: "Husband", phone: "+91 94480 99812", priority: 1, notified: true },
      { name: "Dr. Deepa Ramanathan", relation: "Daughter (Physician)", phone: "+91 98860 33211", priority: 2, notified: true }
    ],
    criticalAllergies: [
      { allergen: "Latex Contact", severity: "Contact Dermatitis / Urticaria", notes: "Use silicone / nitrile gloves" },
      { allergen: "Sulfa Antibiotics", severity: "Stevens-Johnson Syndrome Risk", notes: "Strictly contraindicated" }
    ],
    chronicConditions: [
      { condition: "Type-2 Diabetes", medication: "Glargine Insulin 18u qHS, Metformin 500mg" },
      { condition: "Hypertension", medication: "Telmisartan 40mg daily" }
    ],
    surgicalHistory: "Cholecystectomy (2015)",
    organDonorConsent: true,
    advanceDirective: "Full standard emergency resuscitation protocol.",
    insuranceProvider: "HDFC ERGO Optima Secure (Policy #HDF-1092-A)"
  }
];

export const INITIAL_BLOOD_REQUESTS = [
  {
    id: "BLD-REQ-402",
    incidentId: "INC-2026-0891",
    bloodType: "O- Negative",
    unitsNeeded: 3,
    unitsPledged: 2,
    urgency: "Immediate (STAT)",
    hospital: "St. Jude Trauma & Emergency Institute",
    department: "Emergency Trauma Bay 1",
    timeRemaining: "38 mins",
    createdAt: "12:04 IST",
    status: "Dispatching", // Pending, Dispatching, Fulfilled
    matchedDonors: [
      { name: "Kavita S. (O-)", distance: "1.8 km away", eta: "11 mins", phone: "+91 99012 34567" },
      { name: "Rahul M. (O-)", distance: "3.4 km away", eta: "19 mins", phone: "+91 98451 98765" }
    ]
  },
  {
    id: "BLD-REQ-401",
    incidentId: "INC-2026-0889",
    bloodType: "Fresh Frozen Plasma (FFP)",
    unitsNeeded: 4,
    unitsPledged: 4,
    urgency: "High",
    hospital: "City General Burn & Trauma Wing",
    department: "Critical Burn ICU",
    timeRemaining: "1h 45m",
    createdAt: "11:10 IST",
    status: "Fulfilled",
    matchedDonors: [
      { name: "Red Cross Central Blood Bank (Courier 04)", distance: "On-site Delivery", eta: "Arrived", phone: "+91 80 2234 5678" }
    ]
  }
];

export const INITIAL_FUNDRAISING = [
  {
    id: "FND-2026-018",
    incidentId: "INC-2026-0891",
    patientName: "Vikram Deshmukh (Emergency Trauma Relief)",
    hospital: "St. Jude Trauma & Emergency Institute",
    hospitalVerified: true,
    doctorCertifying: "Dr. K. Narayanan, MS (Ortho), FACS",
    targetAmount: 250000,
    collectedAmount: 182500,
    donorsCount: 64,
    verifiedByFinance: true,
    fraudScore: "0.02 (Safe / Zero Anomaly)",
    purpose: "Emergency neuro-stabilization, orthopedic fixation, and blood replacement therapy."
  },
  {
    id: "FND-2026-016",
    incidentId: "INC-2026-0889",
    patientName: "Sector 9 Factory Burn Victims Fund",
    hospital: "City General Burn & Trauma Wing",
    hospitalVerified: true,
    doctorCertifying: "Dr. Anita Verghese, Chief of Plastic Surgery",
    targetAmount: 500000,
    collectedAmount: 485000,
    donorsCount: 218,
    verifiedByFinance: true,
    fraudScore: "0.01 (Safe / Audited by Trust)",
    purpose: "High-grade collagen grafting and 30-day intensive burn therapy."
  }
];

export const INITIAL_HOSPITAL_HANDOVERS = [
  {
    id: "HND-8891",
    incidentId: "INC-2026-0891",
    paramedicUnit: "Paramedic Unit 08",
    paramedicName: "EMT-P Sarah Lin",
    destinationHospital: "St. Jude Trauma Center",
    receivingDoctor: "Dr. Aris Thorne (Trauma Attending)",
    estimatedArrival: "3 mins (Inbound)",
    status: "Inbound Handover", // Inbound Handover, Awaiting Doctor Signature, Completed
    vitalsHistory: [
      { time: "12:02", hr: 132, bp: "84/50", spo2: 89, gcs: 9 },
      { time: "12:08", hr: 126, bp: "88/54", spo2: 92, gcs: 10 },
      { time: "12:14", hr: 118, bp: "96/62", spo2: 95, gcs: 11 }
    ],
    checklist: [
      { item: "Airway secured (C-Spine collar intact)", verified: true },
      { item: "IV Access established (Dual 16G lines, Normal Saline running)", verified: true },
      { item: "ResQLink Emergency Medical Profile transferred to ER EHR", verified: true },
      { item: "Known Penicillin Allergy alert transmitted to Pharmacy", verified: true },
      { item: "Emergency Contact (Spouse) notified of destination ER", verified: true },
      { item: "Receiving Trauma Bay 1 Staff ready on stretcher arrival", verified: false }
    ]
  }
];

export const INITIAL_VOLUNTEER_NETWORK = [
  {
    id: "VOL-01",
    name: "Dr. Rohan Mathur",
    role: "Off-duty Anesthesiologist",
    certifications: "BLS, ACLS, ATLS Certified",
    distance: "0.6 km from Incident 0891",
    status: "On Scene Assisting",
    phone: "+91 98450 77112"
  },
  {
    id: "VOL-02",
    name: "Sneha Nair",
    role: "Certified Red Cross First Aid Volunteer",
    certifications: "CPR / AED Certified (Valid till 2027)",
    distance: "1.2 km from Incident 0892",
    status: "Standby Available",
    phone: "+91 97412 88345"
  },
  {
    id: "VOL-03",
    name: "Kiran Joseph",
    role: "Emergency Blood Courier Volunteer",
    certifications: "Priority Transit Licensed",
    distance: "2.1 km from St. Jude Hospital",
    status: "En Route with Unit",
    phone: "+91 99001 55432"
  }
];

export const INITIAL_SUPPORT_GAPS = [
  {
    id: "GAP-01",
    incidentId: "INC-2026-0891",
    severity: "Critical",
    gapType: "Blood Supply Deficit",
    message: "Third unit of O- Negative blood still unallocated. 2 units en route.",
    timeElapsed: "14 mins",
    autoMitigationSuggestion: "Trigger priority geo-radius broadcast to 12 nearby certified O- donors.",
    status: "Urgent Attention Needed"
  },
  {
    id: "GAP-02",
    incidentId: "INC-2026-0892",
    severity: "Moderate",
    gapType: "Missing Next-of-Kin Contact",
    message: "Victim UNK-9018 unresponsive, no national ID linked yet. 0 emergency contacts alerted.",
    timeElapsed: "36 mins",
    autoMitigationSuggestion: "Run secondary biometric pass on university student registry.",
    status: "In Progress"
  }
];

export const INITIAL_AUDIT_LOGS = [
  {
    id: "AUD-10992",
    timestamp: "2026-10-20 12:14:18 IST",
    actor: "EMT-P Sarah Lin (Badge #P-4402)",
    role: "Field Paramedic",
    action: "READ_ALLERGIES_BLOOD_GROUP",
    resource: "RESQ-IND-88412",
    deviceFingerprint: "Ambulance Tablet Terminal #08 (Encrypted Enclave)",
    verificationHash: "0x9E21...C31B",
    reason: "Emergency pre-hospital pharmacological safety check"
  },
  {
    id: "AUD-10991",
    timestamp: "2026-10-20 12:10:02 IST",
    actor: "ResQLink Biometric Mesh Engine",
    role: "Automated System",
    action: "GENERATE_MATCH_CANDIDATE",
    resource: "UNK-9021 -> RESQ-IND-88412",
    deviceFingerprint: "Secure Cloud Node (Cert SHA256)",
    verificationHash: "0x44B1...8F90",
    reason: "Facial vector similarity 94.6% confidence threshold achieved"
  },
  {
    id: "AUD-10988",
    timestamp: "2026-10-20 11:58:30 IST",
    actor: "Central 911/112 Dispatch Officer #19",
    role: "Incident Coordinator",
    action: "CREATE_INCIDENT",
    resource: "INC-2026-0891",
    deviceFingerprint: "Dispatch Console 04",
    verificationHash: "0x789A...AA12",
    reason: "Citizen emergency call via highway patrol SOS post"
  }
];
