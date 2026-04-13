import {
  FaDumbbell, FaSwimmer, FaParking, FaShower, FaCoffee, FaWifi,
  FaHeartbeat, FaRunning, FaUsers, FaClock, FaShieldAlt, FaStar,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown
} from 'react-icons/fa';
import { GiMuscleUp, GiLockers, GiWeightLiftingUp } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';

export const offers = [
  {
    id: 1,
    title: "Transform Your Body",
    subtitle: "Start your fitness journey today",
    discount: "50% OFF",
    description: "Get your first month at half price. Limited time offer for new members.",
    cta: "Claim Offer",
  },
  {
    id: 2,
    title: "Free Personal Training",
    subtitle: "Expert guidance, zero cost",
    discount: "FREE",
    description: "Book a complimentary one-on-one session with our certified trainers.",
    cta: "Book Now",
  },
  {
    id: 3,
    title: "Buddy Pass Special",
    subtitle: "Train together, save together",
    discount: "2 FOR 1",
    description: "Bring a friend and both enjoy full membership benefits at the price of one.",
    cta: "Get Pass",
  },
];

export const packages = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    period: "month",
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
    price: 59,
    period: "month",
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
    price: 99,
    period: "month",
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
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Yoga & Flexibility",
    experience: "8 years",
    speciality: "Vinyasa & Yin Yoga",
    initials: "SC",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "HIIT Specialist",
    experience: "10 years",
    speciality: "Functional Training",
    initials: "MJ",
  },
  {
    id: 4,
    name: "Elena Petrova",
    role: "Nutrition Expert",
    experience: "6 years",
    speciality: "Sports Nutrition & Meal Planning",
    initials: "EP",
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
  ],
  comparison: [
    { feature: "24/7 Access", us: true, others: false },
    { feature: "Certified Trainers", us: true, others: "Some" },
    { feature: "Pool & Sauna", us: true, others: false },
    { feature: "No Lock-in Contracts", us: true, others: false },
    { feature: "Nutrition Planning", us: true, others: false },
    { feature: "Free Parking", us: true, others: "Limited" },
    { feature: "Group Classes Included", us: true, others: "Extra cost" },
    { feature: "Modern Equipment", us: true, others: "Varies" },
  ],
};

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

// FAQ Data
export const faqItems = [
  {
    id: 1,
    question: "What are the membership cancellation terms?",
    answer: "We offer month-to-month memberships with no long-term contracts. You can cancel anytime with 30 days' notice. No hidden fees or penalties.",
  },
  {
    id: 2,
    question: "Do you offer free trial or introductory sessions?",
    answer: "Yes! New members get a complimentary fitness assessment and one week of free access to explore our facilities and try group classes.",
  },
  {
    id: 3,
    question: "Are personal training sessions included in all memberships?",
    answer: "Personal training is included with Pro and Elite memberships. Basic members can add PT sessions at discounted rates.",
  },
  {
    id: 4,
    question: "What is the age requirement to join?",
    answer: "Members must be 18 years or older. We offer special youth programs for ages 13-17 with parental consent.",
  },
  {
    id: 5,
    question: "Can I bring a guest to the gym?",
    answer: "Elite members can bring 2 guests per month free of charge. Other members can add a guest day pass for $15.",
  },
  {
    id: 6,
    question: "Do you have childcare or kids' programs?",
    answer: "We offer supervised childcare during peak hours (9 AM—2 PM, 5 PM—8 PM) for members' children ages 6 months—12 years.",
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
