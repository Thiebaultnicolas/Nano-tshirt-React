import { useLocation } from 'react-router-dom';

const useShowShopLink = () => {
  const location = useLocation();

  // Si l'URL actuelle correspond à la page "Sale", retourne false pour masquer le lien "Shop", sinon retourne true pour l'afficher
  return location.pathname !== '/sale';
};

export default useShowShopLink;