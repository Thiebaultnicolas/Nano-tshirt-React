import { createClient } from '@supabase/supabase-js'

function ReadRows () {

const supabaseUrl = 'https://blfybbqpkivtglpsvida.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZnliYnFwa2l2dGdscHN2aWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MjY1MTQsImV4cCI6MTk5OTMwMjUxNH0.Xt9tGo7Dw789aAjUwQrPROsIGKbRYc__A3KSPB_uBvI'
const supabase = createClient(supabaseUrl, supabaseKey)
console.log(supabase);

}

export default ReadRows 