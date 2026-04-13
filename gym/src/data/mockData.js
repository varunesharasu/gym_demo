import {
  FaDumbbell, FaSwimmer, FaParking, FaShower, FaCoffee, FaWifi,
  FaHeartbeat, FaRunning, FaUsers, FaClock, FaShieldAlt, FaStar,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt
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
  FaHeartbeat, FaRunning, FaUsers, FaClock, FaShieldAlt, FaStar,
  FaInstagram, FaFacebookF, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt,
  GiMuscleUp, GiLockers, GiWeightLiftingUp,
  MdSpa,
};

export const getIcon = (name) => iconMap[name] || FaStar;
