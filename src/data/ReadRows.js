import ConnectDB from './ConnectDB'

async function ReadRows (Table) {
const SupaBase = ConnectDB()

let response  = await SupaBase
  .from(Table)
  .select('*')
  .order('id', { ascending: true })
  .limit(3)

return response.data;

}

export default ReadRows