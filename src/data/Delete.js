import ConnectDB from './ConnectDB'

async function deleteProduct(id) {
  const supabase = ConnectDB()
  
  let { error } = await supabase
    .from('Produit')
    .delete()
    .match({ id })

  if (error) console.error('Error deleting product: ', error)
  else console.log('Product deleted')
}

export default deleteProduct