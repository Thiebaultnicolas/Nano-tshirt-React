import { createClient } from '@supabase/supabase-js';

// Créez une instance de Supabase avec votre URL et votre clé d'API
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
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