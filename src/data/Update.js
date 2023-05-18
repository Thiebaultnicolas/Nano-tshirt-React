import ConnectDB from './ConnectDB'

async function updateProduct(id, Title, Price, Image) {
  const supabase = ConnectDB()
  
  let { data: product, error } = await supabase
    .from('Produit')
    .update({ Title, Price, Image })
    .match({ id })

  if (error) console.error('Error updating product: ', error)
  else console.log('Product updated: ', product)
}

export default updateProduct