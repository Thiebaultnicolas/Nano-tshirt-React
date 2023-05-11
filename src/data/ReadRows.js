import ConnectDB from './ConnectDB'

async function ReadRows () {
const SupaBase = ConnectDB()

let response  = await SupaBase
  .from('Produit')
  .select('*')
  .limit(3)

return response.data;

}

export default ReadRows