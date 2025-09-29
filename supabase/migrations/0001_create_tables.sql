-- Drop existing tables in correct order
DROP TABLE IF EXISTS public.transactions CASCADE;
DROP TABLE IF EXISTS public.reviews CASCADE;
DROP TABLE IF EXISTS public.bookings CASCADE;
DROP TABLE IF EXISTS public.charger_availability CASCADE;
DROP TABLE IF EXISTS public.partners CASCADE;

-- Enable PostGIS for location data
CREATE EXTENSION IF NOT EXISTS postgis;

-- Create partners table
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

-- Enable RLS
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable read access for all users" ON public.partners;
DROP POLICY IF EXISTS "Enable insert access for authenticated users" ON public.partners;
DROP POLICY IF EXISTS "Enable update access for users based on user_id" ON public.partners;

-- Create policies
CREATE POLICY "Enable read access for all users" ON public.partners
    FOR SELECT USING (true);

CREATE POLICY "Enable insert access for authenticated users" ON public.partners
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable update access for users based on user_id" ON public.partners
    FOR UPDATE USING (auth.uid() = user_id);

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS handle_updated_at ON public.partners;

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$;

-- Create trigger for updated_at
CREATE TRIGGER handle_updated_at
    BEFORE UPDATE ON public.partners
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
