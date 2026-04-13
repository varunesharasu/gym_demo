# Services Page - Visual Architecture Guide

## 📄 Page Structure Overview

```
SERVICES PAGE
│
├─ 1. ENHANCED HERO SECTION
│  ├─ Premium Experience Badge ✨
│  ├─ Animated Title (gradient "Services")
│  ├─ Descriptive Subtitle with animations
│  └─ CTA Buttons (Explore Plans, Schedule Tour)
│     └─ Hover: Scale 105%, smooth transitions
│
├─ 2. PRICING PACKAGES (with billing toggle)
│  ├─ Monthly/Yearly Toggle Switch
│  │  └─ Save 20% badge (yearly option)
│  ├─ 3 Pricing Cards (responsive grid):
│  │  ├─ Basic Plan ($29/mo)
│  │  ├─ Pro Plan ($59/mo) - MOST POPULAR ⭐
│  │  │  └─ Glow border, emoji badge, scale 105%
│  │  └─ Elite Plan ($99/mo)
│  └─ Each card shows:
│     ├─ Feature icons (Dumbbell, Clock, Users, etc.)
│     ├─ Included features (checkmarks)
│     ├─ Not included (strikethrough)
│     └─ Get Started button
│
├─ 3. PREMIUM AMENITIES (Enhanced)
│  ├─ 8 Amenity Cards (responsive 2→3→4 grid)
│  │  ├─ Olympic Pool 🏊
│  │  ├─ Spa & Sauna 🧖
│  │  ├─ Free Parking 🅿️
│  │  ├─ Locker Rooms 🔐
│  │  ├─ Juice Bar 🥤
│  │  ├─ Free Wi-Fi 📡
│  │  ├─ Showers 🚿
│  │  └─ Cardio Zone 🏃
│  └─ Each card:
│     ├─ Animated icon (bounces on hover)
│     ├─ Name & description
│     └─ Glow overlay effect appears on hover
│
├─ 4. WHY CHOOSE JERAI (Enhanced)
│  ├─ Gradient Divider Line (vertical separator)
│  └─ 4 Cards (2-column grid):
│     ├─ Expert Trainers 👥
│     ├─ 24/7 Access ⏰
│     ├─ Premium Equipment 💪
│     └─ Safe Environment 🛡️
│  └─ Each card:
│     ├─ Gradient background accent (on hover)
│     ├─ Scaling icon
│     ├─ Title & description
│     └─ Hover elevation effect
│
├─ 5. TRAINER SPOTLIGHT (NEW! 🆕)
│  ├─ Section Title & Subtitle
│  └─ 4 Trainer Cards (responsive 1→2→4 grid):
│     ├─ Alex Rivera - Head Strength Coach
│     ├─ Sarah Chen - Yoga & Flexibility
│     ├─ Marcus Johnson - HIIT Specialist
│     └─ Elena Petrova - Nutrition Expert
│  └─ Each card shows:
│     ├─ Gradient avatar with initials
│     ├─ Name, role, speciality
│     ├─ Years of experience
│     └─ View Profile link
│
├─ 6. CLIENT TRANSFORMATIONS (NEW! 🆕)
│  ├─ Section Title & Subtitle
│  └─ 3 Transformation Cards (3-column grid):
│     ├─ Sarah Johnson - 32kg lost in 6 months
│     ├─ Mike Chen - Body recomposition (8 months)
│     └─ Jessica Williams - Post-pregnancy journey (4 months)
│  └─ Each card shows:
│     ├─ Before/After comparison grid
│     │  ├─ Orange gradient card (Before)
│     │  └─ Green gradient card (After)
│     ├─ Client name & time duration
│     ├─ Success story
│     ├─ Detailed stats
│     ├─ Weight loss/gain badge ✓
│     └─ Learn More link
│
├─ 7. DAILY CLASS SCHEDULE (NEW! 🆕)
│  ├─ Section Title & Subtitle
│  └─ 3 Schedule Cards (Monday, Tuesday, Wednesday):
│     ├─ Day header with gradient background
│     └─ Scrollable sessions:
│        ├─ 6:00 AM Boxing (Alex Rivera) - 60 min
│        ├─ 9:00 AM Yoga Flow (Sarah Chen) - 45 min
│        ├─ 5:30 PM HIIT Training (Marcus Johnson) - 50 min
│        └─ 7:00 PM Strength & Conditioning - 60 min
│     └─ Each session shows:
│        ├─ Time (royal blue color)
│        ├─ Class name & trainer
│        ├─ Duration
│        └─ Divider lines between sessions
│
└─ 8. FAQ ACCORDION (NEW! 🆕)
   ├─ Section Title & Subtitle
   ├─ 6 FAQ Items:
   │  ├─ Membership cancellation terms
   │  ├─ Free trial availability
   │  ├─ Personal training inclusion
   │  ├─ Age requirements
   │  ├─ Guest policy
   │  └─ Childcare services
   └─ Each FAQ:
      ├─ Question (clickable button)
      ├─ Animated chevron icon (rotates on expand)
      ├─ Expandable answer area
      │  └─ Smooth max-height transition (0.3s)
      └─ Divider line separator
   
   └─ Support CTA Section
      ├─ "Still have questions?" text
      └─ "Contact Our Support Team" button
```

---

## 🎨 COLOR & STYLING SCHEME

### Card Styling
- **Glass Cards**: `bg-gray-900/60 backdrop-blur-md border border-gray-800/50`
- **Hover Border**: `hover:border-royal-500/50`
- **Glow Effect**: `shadow-lg shadow-royal-500/20`

### Text Colors
- **Headers**: `text-white font-bold`
- **Primary Text**: `text-gray-300`
- **Secondary Text**: `text-gray-500`
- **Accent**: `text-royal-400` or `gradient-text`
- **Background Gradient**: `from-royal-400 to-royal-600`

### Interactive Elements
- **Buttons**: `.btn-primary` (gradient) or `.btn-outline` (border)
- **Icons**: `text-royal-400` with `scale-110` on hover
- **Cards**: `-translate-y-2` on hover (lift effect)

---

## ⚙️ STATE MANAGEMENT

### `billingPeriod` State
```javascript
const [billingPeriod, setBillingPeriod] = useState('monthly');
```
- Controls Monthly/Yearly toggle switch
- Currently UI-only (can connect to pricing API)
- Shows "Save 20%" badge for yearly option

### `expandedFaq` State
```javascript
const [expandedFaq, setExpandedFaq] = useState(null);
```
- Tracks which FAQ item is expanded
- Toggles between `faq.id` and `null`
- Controls max-height animation

---

## 🎬 ANIMATION EFFECTS

### Entrance Animations
```
Hero Section:
- Badge: fade-in 0.8s
- Title: slide-up 0.8s
- Subtitle: slide-up 0.9s (0.1s delay)
- CTA Buttons: slide-up 1.0s (0.2s delay)
```

### Hover Animations
```
Cards:
- Scale: 105% (@hover)
- Shadow: enhanced glow
- Border: royal-500/50 color
- Elevation: -translate-y-2

Icons:
- Scale: 110%
- Bounce: infinite animation
- Color: royal-300 (@hover)
```

### Expandable Elements
```
FAQ Accordion:
- Duration: 300ms
- Type: max-height transition
- Chevron: 180° rotation
- Answer slides down smoothly
```

---

## 📊 Data Flow

### From `mockData.js`
```
packages → PricingCard components
↓
packages[0,1,2] → 3 cards with features/not-included

amenities → Amenity cards
↓
8 amenities × icons → Grid with hover effects

whyChooseUs → Why Choose section
↓
4 items × icons → Grid with dividers

trainers → Trainer Spotlight
↓
4 trainers × gradient avatar → Responsive grid

transformations → Transformation cards
↓
3 stories × before/after stats → Grid cards

classSchedule → Schedule cards
↓
3 days × sessions → Scrollable list

faqItems → FAQ Accordion
↓
6 questions × expandable answers → Accordion
```

---

## 🎯 Key UI Components

### 1. Toggle Switch (Billing)
```
┌─────────────────────────────┐
│  Monthly │ Yearly[Save 20%] │
└─────────────────────────────┘
```
- Active button: Gradient background
- Inactive: Text only (gray)
- Smooth 300ms transition

### 2. Pricing Card (Popular)
```
┌─────────────────────────────┐
│  🌟 MOST POPULAR            │
│  Pro                        │
│  $59 /month                 │
│  ✓ Feature 1                │
│  ✓ Feature 2                │
│  ✗ Feature 3 (disabled)    │
│  [Get Started Button]       │
└─────────────────────────────┘
```

### 3. Amenity Card
```
┌──────────────────┐
│   🏊 (bounces)   │
│  Olympic Pool    │
│  25m heated pool │
└──────────────────┘
```

### 4. Trainer Card
```
┌──────────────────┐
│   [AR] (gradient)│
│  Alex Rivera     │
│  Head Coach      │
│  Powerlifting    │
│  12 years exp    │
│  View Profile →  │
└──────────────────┘
```

### 5. Transformation Card
```
┌────────────────────┐
│ Before  │  After   │
│ 95kg    │  63kg    │
├────────────────────┤
│ Sarah Johnson      │
│ 6 months          │
│ Great story...    │
│ ✓ 32kg lost       │
└────────────────────┘
```

### 6. FAQ Item
```
┌────────────────────────────────┐
│ Why cancel memberships? ▼      │
├────────────────────────────────┤
│ We offer month-to-month...     │
│ [Answer text showing]          │
└────────────────────────────────┘
```

---

## 📱 Responsive Behavior

### Mobile (320px - 640px)
- 1 column: pricing cards stack
- 2 columns: amenities, why choose us
- Full width: sections expand edge-to-edge
- Touch targets: 44px minimum height
- Icons: Slightly smaller (text-lg → text-base)

### Tablet (641px - 1024px)
- 2-3 columns: pricing, trainers expand
- 3-4 columns: amenities start showing 4
- Schedule: Still 3 columns but smaller
- Better spacing with increased gaps

### Desktop (1025px+)
- 3 columns: pricing (full effect)
- 4 columns: amenities (full effect)
- 4 columns: trainers (full effect)
- All hover effects at maximum
- Scroll animations fully active

---

## ✨ Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Android)
⚠️ IE11: Not supported (uses modern CSS)

---

## 🚀 Performance Metrics

- **CSS Transforms**: GPU-accelerated (no layout thrashing)
- **Animation FPS**: 60fps target
- **Scroll Performance**: No scroll listeners (CSS only)
- **Bundle Impact**: ~5KB (Tailwind CSS)
- **Load Time**: No impact (animations are CSS-based)

---

**This architecture ensures maximum visual appeal while maintaining excellent performance and accessibility across all devices!** ✨
