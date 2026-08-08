import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const isPlaceholder = (value) => !value || value.includes('your_') || value.includes('replace');

const hasValidSupabaseCredentials = Boolean(supabaseUrl && supabaseKey && !isPlaceholder(supabaseUrl) && !isPlaceholder(supabaseKey));

export const supabase = hasValidSupabaseCredentials ? createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false },
}) : null;

const fallbackStorage = {
  contacts: [],
  contributors: [],
  donors: [],
  subscribers: [],
};

export async function persistData(table, payload) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from(table).insert([payload]).select();

      if (!error) {
        return { success: true, data, usedFallback: false };
      }

      console.warn(`Supabase insert failed for ${table}:`, error.message);
    } catch (error) {
      console.warn(`Supabase insert threw for ${table}:`, error.message);
    }
  }

  const record = {
    ...payload,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    source: 'fallback',
  };

  fallbackStorage[table].push(record);

  return { success: true, data: [record], usedFallback: true };
}

export function getFallbackStorage() {
  return fallbackStorage;
}
