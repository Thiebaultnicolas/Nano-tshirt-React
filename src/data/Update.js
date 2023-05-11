import ConnectDB from './ConnectDB'

async function updateProduct(id, title, price, image) {
  const supabase = ConnectDB()
  
  let { data: product, error } = await supabase
    .from('Produit')
    .update({ title, price, image })
    .match({ id })

  if (error) console.error('Error updating product: ', error)
  else console.log('Product updated: ', product)
}

export default updateProduct