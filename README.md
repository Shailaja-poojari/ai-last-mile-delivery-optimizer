# AI-Powered Last Mile Delivery Optimizer

🚀 **Walmart Sparkathon 2025 Submission**

##  Problem Statement
Retailers and e-commerce giants like Walmart face significant challenges in **last-mile delivery**, especially during high-demand events (festivals, emergencies, traffic congestion). Delays, inefficient routing, high carbon emissions, and poor real-time coordination with delivery agents are major bottlenecks.

##  Our Solution
We built an intelligent, modular, and scalable dashboard that:
- 🔁 **Optimizes delivery routes** in real-time
- 🚨 Supports **Emergency Mode**, 🎉 **Festival Mode**, and future AI toggles
- 🌐 Works even in **offline mode** with local caching
- 📍 Tracks agent GPS live
- 🌿 Calculates **fuel and CO₂ savings**
- 🤖 Includes a smart **AI chatbot assistant** for delivery managers


##  Key Features

### 🧠 AI-Powered Optimization
- Predicts delivery delays using zone, distance, and seasonal factors
- Computes **risk scores** for each order

### 📦 Smart Consolidation
- Suggests grouped deliveries for similar localities and short distances
- Displays **consolidation summary** + AI-generated suggestions

### 🚨 Emergency / Festival Mode
- On one click, apply optimization to minimize high-risk zones (e.g., Koramangala)
- **Easy to extend** with new modes (Rain Mode, Traffic Mode, Partner Priority Mode)

### 📡 Real-Time GPS Tracking
- Uses **live agent GPS** to improve visibility

### 📉 ETA Countdown & Risk Monitoring
- Each order has live ETA countdown, delay severity badge, and zone-based risk flagging

### 🌿 Sustainability Metrics
- Calculates fuel and CO₂ savings from optimized routes

### 🧑‍💻 Smart Chatbot Assistant
- Provides help and suggestions for dashboard usage
- Answers common delivery/logistics questions (react-component based)

### 🔌 Offline Mode
- Works seamlessly when internet is unavailable using `localStorage` caching



##  Why This Solution is Plug-and-Play
✅ **Companies can adopt it without rewriting existing tools**
- No hard dependency on internal APIs — can connect via Supabase, REST, or partner APIs
- Uses simple JSON/mockOrder format that real systems can map to easily

✅ **Extremely Modular Code**
- Each function and feature is decoupled
- AI modes are plug functions like `applyEmergencyMode()` or `applyRainyMode()`

✅ **No vendor lock-in**
- Backend is Supabase (PostgreSQL) → Can switch to any backend
- Frontend is React + Tailwind → Works with any modern stack


##  Scalability & Upgradeability

### Can Handle 1000s of Deliveries per Hour
- Efficient rendering (React + tailwind UI)
- Grouping and filtering logic already optimized
- Uses minimal external dependencies (low overhead)

### Add New Delivery Partners Easily
- Integrate via API or CSV → maps to existing format
- UI adjusts dynamically based on zone, partner, distance

### Add New Cities / Zones
- Our system uses `zone` fields — adding a new city is plug-and-play
- No code logic change required

### Add More AI Modes Anytime
- Already supports toggles for Emergency / Festival
- Can easily add: Rain Mode, Peak Hour Mode, Partner Priority Mode etc.

✅ Just plug new logic file → toggle UI → done.



##  Tech Stack
- **Frontend**: React.js + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + API)
- **Hosting**: Vercel (or Netlify/AWS/GCP)
- **Map**: Static coordinates for demo, GPS via browser
- **AI**: Rule-based predictors + delay scorers (can upgrade to ML models)


## 📸 Screenshots

### 📊 Dashboard Overview
![Dashboard](./screenshots/dashboard.jpg)

### 🗺 Map View with Agent Location
![Map](./screenshots/map-view.jpg)

### 🚨 Delay Alerts & Smart Notifications
![Alerts](./screenshots/delay-alerts.jpg)

### 🌿 Sustainability Metrics
![Sustainability](./screenshots/sustainability-cards.jpg)

### 🤖 Floating Chatbot Assistant
![Chatbot](./screenshots/chatbot.jpg)

### 📋 Optimized Orders Table
![Orders](./screenshots/optimized-orders.jpg)

---

## 👩‍💼 Team Members

**Shailaja**  — Lead Developer & System Architect

> Designed and implemented the full-stack solution, AI logic, Supabase backend integration, route optimization, and chatbot integration.


**Md Shish** — Pitch Presenter & Creative Lead

> Designed the presentation flow, created the pitch deck and demo video, and will represent the team during the final pitch.

**Keerthana** — Research & QA Support

> Contributed to research on logistics problem statements, testing of dashboard modules, and preparing FAQs for chatbot integration.

**Ankit** — Feature Ideation & Documentation

> Helped define core features like emergency/festival modes and worked on structuring the README and deployment checklist.


## 📣 Final Pitch Statement
**“Our solution is AI-powered, offline-resilient, GPS-aware, and scalable across cities, partners, and use cases — giving Walmart a plug-and-play delivery optimizer ready for real-world operations.”**


## 🧠 Built For:

🛍 E-Commerce  
🛒 Hyperlocal Delivery  
🚕 Logistics Tech  
🏆 Walmart Sparkathon 2025.

##  How to Run
```bash
# Clone the repo
npm install
npm run dev

Ensure you have `.env` set up for Supabase keys (or use mock mode).




