# PlugWise Partner Portal Documentation

## Project Overview

### What is PlugWise?
PlugWise is an EV charging station partner network that enables charging station owners to list their stations and earn revenue. The platform connects EV owners with charging station partners, facilitating a seamless charging experience while creating income opportunities for station owners.

### Purpose
- Enable charging station owners to register as partners
- Provide a dashboard for partners to monitor their earnings and bookings
- Create a sustainable network of EV charging stations
- Facilitate the growth of EV infrastructure

## Technical Stack

### Frontend
1. **Framework**: Next.js 14 (React)
   - App Router for routing
   - Server and Client Components
   - TypeScript for type safety

2. **UI Components**:
   - Shadcn/ui (Built on Radix UI)
   - Custom components in `/components` directory
   - Lucide Icons for vector icons

3. **Styling**:
   - Tailwind CSS for styling
   - Custom color scheme:
     - Primary: energy-green
     - Background: navy gradient
   - Responsive design for all screen sizes

### Backend
1. **Supabase**:
   - Authentication (Email/Password)
   - PostgreSQL Database
   - Row Level Security (RLS)
   - PostGIS for location data

2. **Database Tables**:
```sql
-- Partners Table
CREATE TABLE public.partners (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    email text NOT NULL,
    name text NOT NULL,
    charger_type text NOT NULL,
    power_output text NOT NULL,
    location text NOT NULL,
    verification_status text DEFAULT 'verified',
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);
```

## Project Structure

```
plugwise-partner/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── auth/
│   │   │   └── register/
│   │   │       └── page.tsx         # Registration page
│   │   └── dashboard/
│   │       └── page.tsx             # Dashboard with login
│   ├── components/
│   │   ├── ui/                      # Shadcn components
│   │   ├── Navbar.tsx              
│   │   └── Footer.tsx
│   └── lib/
│       └── supabase.ts             # Supabase client
├── public/                         # Static assets
├── supabase/
│   └── migrations/                 # Database migrations
└── package.json
```

## Pages and Features

### 1. Homepage (/)
- Welcome message
- "Register Now" button
- "Partner Login" button
- Navigation bar
- Footer with links

### 2. Registration Page (/auth/register)
Features:
- Full name input
- Email input
- Password input
- Charger type selection (AC/DC)
- Power output selection (3.7kW to 50kW)
- Location detection
- Form validation
- Success/error notifications

### 3. Dashboard Page (/dashboard)
Features:
- Login form (when not authenticated)
  - Email input
  - Password input
  - Error handling
- Dashboard view (when authenticated)
  - Partner information card
  - Total earnings display
  - Total bookings counter
  - Logout button

## Authentication Flow

1. **New User Registration**:
   ```
   Homepage -> Register -> Fill Form -> Submit -> 
   Dashboard Login -> Enter Credentials -> View Dashboard
   ```

2. **Existing User Login**:
   ```
   Homepage -> Partner Login -> Enter Credentials -> 
   View Dashboard
   ```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account

### Environment Variables
Create `.env.local` with:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd plugwise-partner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Create new Supabase project
   - Run migrations from `supabase/migrations`
   - Copy environment variables

4. Start development server:
   ```bash
   npm run dev
   ```

5. Access the application:
   - Open `http://localhost:3000`

## Styling Guide

### Color Scheme
```css
--navy: #001F3F;
--energy-green: #4CAF50;
--gray-900: #111827;
```

### Key CSS Classes
- Background gradients: `bg-gradient-to-b from-navy to-gray-900`
- Buttons: `bg-energy-green hover:bg-energy-green/90`
- Cards: `bg-white shadow-xl`
- Text: `text-gray-800` (dark), `text-gray-300` (light)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## Security Features

1. **Authentication**:
   - Email/password authentication
   - Session management
   - Secure password storage

2. **Database Security**:
   - Row Level Security (RLS)
   - User-specific data access
   - SQL injection prevention

3. **Frontend Security**:
   - Form validation
   - XSS prevention
   - CSRF protection

## Error Handling

1. **User Feedback**:
   - Toast notifications for success/error
   - Form validation messages
   - Loading states

2. **Error Cases**:
   - Invalid credentials
   - Network errors
   - Missing location
   - Registration failures

## Future Enhancements

1. **Planned Features**:
   - Real-time booking notifications
   - Payment integration
   - Partner verification system
   - Mobile app

2. **Improvements**:
   - Analytics dashboard
   - Multiple charger support
   - Rating system
   - Chat support

## Maintenance

### Regular Tasks
1. Update dependencies
2. Monitor Supabase usage
3. Backup database
4. Check error logs

### Troubleshooting
1. Clear browser cache
2. Check environment variables
3. Verify Supabase connection
4. Review console errors

## Support

For technical support or queries:
1. Check documentation
2. Review error messages
3. Contact development team

---

Last Updated: April 1, 2025
