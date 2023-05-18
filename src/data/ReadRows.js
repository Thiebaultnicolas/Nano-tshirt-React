import ConnectDB from './ConnectDB'

async function ReadRows () {
const SupaBase = ConnectDB()

let response  = await SupaBase
  .from('Produit')
  .select('*')
  .order('id', { ascending: true })
  .limit(3)

return response.data;

}

export default ReadRows