import { createClient } from '@supabase/supabase-js';

// Créez une instance de Supabase avec votre URL et votre clé d'API
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZnliYnFwa2l2dGdscHN2aWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjY1MTQsImV4cCI6MTk5OTMwMjUxNH0.Xt9tGo7Dw789aAjUwQrPROsIGKbRYc__A3KSPB_uBvI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUpUser(email, password) {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
  
      if (error) {
        throw error;
      }
  
      return user;
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      return null;
    }
  }
  
  export default signUpUser;