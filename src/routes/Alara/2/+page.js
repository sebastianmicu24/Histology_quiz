import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("domande").select().order('histo_id');
 
  return {
    domande: data ?? [],
  };

}