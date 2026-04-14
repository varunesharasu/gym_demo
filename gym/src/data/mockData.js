import {
  FaDumbbell, FaSwimmer, FaParking, FaShower, FaCoffee, FaWifi,
  FaHeartbeat, FaRunning, FaUsers, FaClock, FaShieldAlt, FaStar,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown
} from 'react-icons/fa';
import { GiMuscleUp, GiLockers, GiWeightLiftingUp } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';

export const packages = [
  {
    id: 1,
    name: "Basic",
    monthlyPrice: 29,
    yearlyPrice: 278,
    popular: false,
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "2 group classes/week",
      "Fitness assessment",
    ],
    notIncluded: [
      "Personal training",
      "Pool & sauna access",
      "Nutrition consultation",
    ],
  },
  {
    id: 2,
    name: "Pro",
    monthlyPrice: 59,
    yearlyPrice: 566,
    popular: true,
    features: [
      "Full gym access 24/7",
      "All equipment & machines",
      "Unlimited group classes",
      "Pool & sauna access",
      "2 PT sessions/month",
      "Nutrition plan",
    ],
    notIncluded: [
      "Unlimited personal training",
    ],
  },
  {
    id: 3,
    name: "Elite",
    monthlyPrice: 99,
    yearlyPrice: 950,
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Private locker",
      "Spa & recovery zone",
      "Monthly body composition",
      "Priority class booking",
      "Guest passes (2/month)",
    ],
    notIncluded: [],
  },
];

export const amenities = [
  { id: 1, name: "Olympic Pool", icon: "FaSwimmer", description: "25m heated pool" },
  { id: 2, name: "Spa & Sauna", icon: "MdSpa", description: "Steam & dry sauna" },
  { id: 3, name: "Free Parking", icon: "FaParking", description: "200+ spaces" },
  { id: 4, name: "Locker Rooms", icon: "GiLockers", description: "Secure storage" },
  { id: 5, name: "Juice Bar", icon: "FaCoffee", description: "Fresh smoothies" },
  { id: 6, name: "Free Wi-Fi", icon: "FaWifi", description: "High-speed internet" },
  { id: 7, name: "Showers", icon: "FaShower", description: "Premium facilities" },
  { id: 8, name: "Cardio Zone", icon: "FaRunning", description: "50+ machines" },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Expert Trainers",
    description: "Our certified trainers bring 10+ years of experience and personalized attention to every session.",
    icon: "FaUsers",
  },
  {
    id: 2,
    title: "24/7 Access",
    description: "Train on your schedule. Our doors never close, with round-the-clock security and support.",
    icon: "FaClock",
  },
  {
    id: 3,
    title: "Premium Equipment",
    description: "State-of-the-art machines from leading brands, maintained daily for peak performance.",
    icon: "FaDumbbell",
  },
  {
    id: 4,
    title: "Safe Environment",
    description: "Sanitized facilities, CCTV coverage, and trained staff ensure your safety at all times.",
    icon: "FaShieldAlt",
  },
];

export const trainers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Head Strength Coach",
    experience: "12 years",
    speciality: "Powerlifting & Bodybuilding",
    initials: "AR",
    languages: ["English", "Spanish"],
    specialization: "Certified Strength & Conditioning Specialist (CSCS). Expert in progressive overload programming, Olympic lifting technique, and sport-specific strength protocols. Has trained 3 national-level powerlifters.",
    overview: "Alex brings over a decade of elite coaching experience. Starting as a competitive powerlifter, he transitioned into coaching after earning his CSCS and NSCA-CPT certifications. His philosophy centers on evidence-based training with meticulous form correction. Alex has helped over 500 clients achieve transformative results, from beginners to competitive athletes.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Yoga & Flexibility",
    experience: "8 years",
    speciality: "Vinyasa & Yin Yoga",
    initials: "SC",
    languages: ["English", "Mandarin", "Japanese"],
    specialization: "RYT-500 Certified Yoga Instructor with advanced training in therapeutic yoga and mobility work. Specializes in breath-work integration, injury rehabilitation through yoga, and flexibility optimization for athletes.",
    overview: "Sarah discovered yoga during her recovery from a sports injury and has since dedicated her career to helping others find balance through movement. With 8 years of teaching experience and over 2,000 hours of training, she creates accessible classes that challenge both body and mind. Her sessions blend traditional yoga philosophy with modern sports science.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "HIIT Specialist",
    experience: "10 years",
    speciality: "Functional Training",
    initials: "MJ",
    languages: ["English", "French"],
    specialization: "ACE-certified Personal Trainer and CrossFit Level 2 Coach. Expert in metabolic conditioning, circuit design, and fat-loss programming. Certified in TRX, Kettlebell Athletics, and battle rope training systems.",
    overview: "Marcus is known for his high-energy, results-driven approach to fitness. A former college football player, he channels his athletic background into designing intense yet safe workout programs. He has led over 3,000 group HIIT sessions and specializes in transforming sedentary individuals into confident, capable athletes. His boot camps are consistently the most popular classes at JERAI.",
  },
  {
    id: 4,
    name: "Elena Petrova",
    role: "Nutrition Expert",
    experience: "6 years",
    speciality: "Sports Nutrition & Meal Planning",
    initials: "EP",
    languages: ["English", "Russian", "German"],
    specialization: "Registered Dietitian (RD) with a Master's in Sports Nutrition. Certified Specialist in Sports Dietetics (CSSD). Expert in macro-periodization, supplement science, and metabolic optimization for performance and body composition goals.",
    overview: "Elena combines her clinical nutrition background with a deep passion for fitness to create holistic wellness plans. Having worked with professional sports teams in Europe before joining JERAI, she brings a world-class perspective to personalized nutrition. Her meal plans are known for being practical, delicious, and scientifically tailored to each client's training cycle.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "James Mitchell",
    rating: 5,
    message: "JERAI FITNESS completely transformed my life. Lost 30kg in 8 months with their incredible trainers and supportive community. The best investment I've ever made!",
    membership: "Elite Member — 2 years",
    initials: "JM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    message: "The group classes are absolutely phenomenal. The energy is infectious and the trainers push you just the right amount. I look forward to every session!",
    membership: "Pro Member — 1 year",
    initials: "PS",
  },
  {
    id: 3,
    name: "David Thompson",
    rating: 4,
    message: "Top-notch facilities and equipment. The 24/7 access is a game-changer for my irregular schedule. Consistently clean and well-maintained.",
    membership: "Pro Member — 6 months",
    initials: "DT",
  },
  {
    id: 4,
    name: "Maria Garcia",
    rating: 5,
    message: "As a beginner, I was nervous about joining a gym. The staff here made me feel so welcome. The personal training sessions gave me the confidence to keep going.",
    membership: "Basic Member — 8 months",
    initials: "MG",
  },
  {
    id: 5,
    name: "Robert Kim",
    rating: 5,
    message: "The pool and sauna are world-class. After a tough workout, the recovery facilities make all the difference. Worth every penny of the Elite membership.",
    membership: "Elite Member — 3 years",
    initials: "RK",
  },
  {
    id: 6,
    name: "Aisha Patel",
    rating: 4,
    message: "Great variety of classes — from yoga to boxing. There's always something new to try. The scheduling app makes it super easy to book spots.",
    membership: "Pro Member — 1.5 years",
    initials: "AP",
  },
  {
    id: 7,
    name: "Tom Anderson",
    rating: 5,
    message: "The nutrition planning that comes with the Pro package is amazing. My trainer helped me build a diet plan that actually fits my lifestyle. Seeing real results!",
    membership: "Pro Member — 10 months",
    initials: "TA",
  },
  {
    id: 8,
    name: "Lisa Wong",
    rating: 5,
    message: "I've been to many gyms in the city, and JERAI FITNESS is hands-down the best. The atmosphere, the people, the equipment — everything is premium.",
    membership: "Elite Member — 4 years",
    initials: "LW",
  },
];

export const stats = [
  { id: 1, value: 10, suffix: "+", label: "Years Experience" },
  { id: 2, value: 5000, suffix: "+", label: "Active Members" },
  { id: 3, value: 50, suffix: "+", label: "Fitness Programs" },
  { id: 4, value: 20, suffix: "+", label: "Expert Trainers" },
];

export const contactInfo = {
  phone: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  email: ["info@jeraifitness.com", "support@jeraifitness.com"],
  address: "123 Iron Avenue, Fitness District, New York, NY 10001",
  hours: {
    weekdays: "Open 24/7",
    weekends: "Open 24/7",
  },
  social: [
    { name: "Instagram", url: "#", icon: "FaInstagram" },
    { name: "Facebook", url: "#", icon: "FaFacebookF" },
    { name: "Twitter", url: "#", icon: "FaTwitter" },
    { name: "YouTube", url: "#", icon: "FaYoutube" },
  ],
};

export const preferences = {
  audiences: [
    {
      id: 1,
      title: "Beginners",
      description: "New to fitness? Our guided onboarding, beginner-friendly classes, and patient trainers will help you build a strong foundation.",
      icon: "FaHeartbeat",
    },
    {
      id: 2,
      title: "Athletes",
      description: "Push your limits with advanced programs, Olympic lifting platforms, and sport-specific training designed for competitors.",
      icon: "GiMuscleUp",
    },
    {
      id: 3,
      title: "Busy Professionals",
      description: "24/7 access, express 30-minute workouts, and a convenient location make it easy to fit fitness into your packed schedule.",
      icon: "FaClock",
    },
    {
      id: 4,
      title: "Seniors",
      description: "Low-impact programs, mobility classes, and therapeutic pool sessions designed for health, balance, and longevity.",
      icon: "FaShieldAlt",
    },
  ],
  valueProps: [
    "No lock-in contracts — cancel anytime",
    "Free fitness assessment for all new members",
    "Results-guaranteed programs",
    "Community events & challenges monthly",
    "Complimentary towel & water service",
    "State-of-the-art air purification system",
    "Personalized workout plans powered by AI",
    "In-house physiotherapy & injury recovery",
    "Free body composition analysis monthly",
    "Premium Bluetooth speaker zones",
    "Dedicated women's workout area",
    "On-site childcare during peak hours",
  ],
};

// Fitness calculator links for Resources dropdown
export const fitnessCalculators = [
  { name: "Body Fat Calculator", url: "/calculators/body-fat.html" },
  { name: "BMI Calculator", url: "/calculators/bmi.html" },
  { name: "Water Intake Calculator", url: "/calculators/water-intake.html" },
  { name: "Protein Intake Calculator", url: "/calculators/protein-intake.html" },
];

// Icon mapping helper
export const iconMap = {
  FaDumbbell, FaSwimmer, FaParking, FaShower, FaCoffee, FaWifi,
  FaHeartbeat, FaRunning, FaUsers, FaClock, FaShieldAlt, FaStar, FaChevronDown,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  GiMuscleUp, GiLockers, GiWeightLiftingUp,
  MdSpa,
};

export const getIcon = (name) => iconMap[name] || FaStar;

// Class Schedule Data
export const classSchedule = [
  {
    id: 1,
    day: "Monday",
    sessions: [
      { time: "6:00 AM", class: "Boxing", trainer: "Alex Rivera", duration: "60 min" },
      { time: "9:00 AM", class: "Yoga Flow", trainer: "Sarah Chen", duration: "45 min" },
      { time: "5:30 PM", class: "HIIT Training", trainer: "Marcus Johnson", duration: "50 min" },
      { time: "7:00 PM", class: "Strength & Conditioning", trainer: "Alex Rivera", duration: "60 min" },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    sessions: [
      { time: "6:00 AM", class: "Spin Class", trainer: "Elena Petrova", duration: "45 min" },
      { time: "10:00 AM", class: "Pilates", trainer: "Sarah Chen", duration: "50 min" },
      { time: "6:00 PM", class: "Olympic Lifting", trainer: "Alex Rivera", duration: "90 min" },
      { time: "8:00 PM", class: "Functional Training", trainer: "Marcus Johnson", duration: "60 min" },
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    sessions: [
      { time: "6:30 AM", class: "HIIT Training", trainer: "Marcus Johnson", duration: "50 min" },
      { time: "12:00 PM", class: "Core & Abs", trainer: "Elena Petrova", duration: "30 min" },
      { time: "5:00 PM", class: "CrossFit", trainer: "Alex Rivera", duration: "60 min" },
      { time: "7:30 PM", class: "Yoga & Meditation", trainer: "Sarah Chen", duration: "75 min" },
    ],
  },
];

// FAQ Data — used in Reviews page
export const faqItems = [
  {
    id: 1,
    question: "Can I choose my personal trainer?",
    answer: "Absolutely! We believe the trainer-client relationship is key to success. During your initial consultation, you can meet our team and choose the trainer whose style and expertise best match your goals. You can also switch trainers at any time.",
  },
  {
    id: 2,
    question: "Are there family discounts?",
    answer: "Yes! We offer a Family Plan where households of 2+ members receive 15% off each membership. For families of 4 or more, the discount increases to 25%. All family members enjoy full access to their chosen tier's facilities and classes.",
  },
  {
    id: 3,
    question: "Can I cancel my subscription?",
    answer: "Of course. We offer month-to-month memberships with no long-term contracts. You can cancel anytime with 30 days' notice through your member portal or at the front desk. No hidden fees, no hassle — we want you here because you want to be.",
  },
  {
    id: 4,
    question: "Should I bring any equipment?",
    answer: "No equipment is needed! We provide everything from weights and machines to yoga mats, resistance bands, and boxing gloves. Just bring comfortable workout clothes, athletic shoes, and a water bottle. Towels are complimentary for all members.",
  },
  {
    id: 5,
    question: "Is There An Advanced Class?",
    answer: "Yes, we offer multiple advanced-level classes including Olympic Lifting, Advanced HIIT, CrossFit WODs, and Competition Prep sessions. These classes are designed for experienced exercisers and include progressive programming to continually challenge you.",
  },
  {
    id: 6,
    question: "How Often Can I Hit the Gym?",
    answer: "As often as you like! All memberships include unlimited gym access. Our facility is open 24/7, 365 days a year. Most of our successful members train 3-5 times per week, but you're welcome to visit as frequently as your schedule and recovery allow.",
  },
  {
    id: 7,
    question: "Do You have a private or personal coaching facility?",
    answer: "Yes! Our Elite and Pro members have access to private training rooms that can be booked for one-on-one sessions. We have 4 fully-equipped private studios with premium flooring, mirrors, and dedicated equipment — perfect for focused personal training.",
  },
  {
    id: 8,
    question: "Would you coach when we have injuries or physical restrictions?",
    answer: "Absolutely. Our trainers are certified in corrective exercise and injury rehabilitation. We work closely with physiotherapists to create modified programs that respect your limitations while still progressing toward your goals. Your safety always comes first.",
  },
  {
    id: 9,
    question: "What to expect on a one-on-one session?",
    answer: "Your first session includes a comprehensive fitness assessment (body composition, mobility screening, and goal discussion). From there, your trainer will design a personalized workout and guide you through every exercise with hands-on coaching. Sessions are typically 60 minutes and include warm-up, training, and cooldown.",
  },
  {
    id: 10,
    question: "What makes F3 stand out from other gyms?",
    answer: "JERAI FITNESS (F3) stands out with our combination of 24/7 access, world-class facilities (including pool, sauna, and spa), certified expert trainers, no lock-in contracts, and a genuine community atmosphere. Our 95% member satisfaction rate and 10+ years of excellence speak for themselves.",
  },
];

// Feature Icons Mapping (for pricing cards)
export const featureIcons = {
  "Access to gym floor": "FaDumbbell",
  "Basic equipment usage": "GiWeightLiftingUp",
  "Locker room access": "GiLockers",
  "2 group classes/week": "FaUsers",
  "Fitness assessment": "FaHeartbeat",
  "Full gym access 24/7": "FaClock",
  "All equipment & machines": "FaDumbbell",
  "Unlimited group classes": "FaRunning",
  "Pool & sauna access": "FaSwimmer",
  "2 PT sessions/month": "GiMuscleUp",
  "Nutrition plan": "FaCoffee",
  "Unlimited personal training": "GiMuscleUp",
  "Private locker": "GiLockers",
  "Spa & recovery zone": "MdSpa",
  "Monthly body composition": "FaHeartbeat",
  "Priority class booking": "FaClock",
  "Guest passes (2/month)": "FaUsers",
};
